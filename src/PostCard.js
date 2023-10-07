import React from 'react'
import './PostCard.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';




function PostCard({name,description,message,photoUrl}) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar/>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>  
      <div className='post__buttonpost'>
        <InputOption Icon={ThumbUpAltIcon} title='Like' />
        <InputOption Icon={CommentIcon} title='Comment' />
        <InputOption Icon={ShareIcon} title='Share' />
        <InputOption Icon={SendIcon} title='Send' />
      </div>
      
    </div>
  )
}

export default PostCard