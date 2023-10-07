import {React, useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import PostCard from './PostCard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import firebase from 'firebase/compat/app';
import { db } from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState("")
    const [posts, setPosts] =useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp" ,"desc").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
    },[])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput(" ")
    }


  return (
    <div className='feed'>
        <div  className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input  type='text' value={input} onChange={e => setInput(e.target.value)}/>
                    <button type='submit'  onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={PhotoLibraryIcon} title='Picture ' color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                <InputOption Icon={ViewDayIcon} title='Write Article' color="#7FC15E"/>
            </div>
        </div>
        {/* posts */}

        <FlipMove>
        {posts.map(({id, data: {name, description,  message, photoUrl}}) => (
            
            <PostCard
               key={id}
               name={name}
               description={description}
               message={message}
               photoUrl={photoUrl}
            />
       ))}
               
        </FlipMove>
       
    </div>
  )
}

export default Feed