import './Header.css' 
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';

function Header() {
  const dispatch = useDispatch()

  const logoutOffApp  =() => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>

        <div className='header__left'>
            <img 
                src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' 
                alt=''/>
            <div className='header__search'>
            <SearchIcon/>
            <input placeholder='search' type='text'/>
            </div>

        </div>

        <div className='header__right'>
            <HeaderOption  Icon={HomeIcon} title='Home'/>
            <HeaderOption  Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption  Icon={BusinessCenterIcon} title='Job'/> 
            <HeaderOption  Icon={ChatIcon} title='Messages'/> 
            <HeaderOption  Icon={NotificationsIcon} title='Notifications'/> 
            <HeaderOption  avatar={true}  title="Me" onClick={logoutOffApp}/>
        </div>
    </div>
  )
}

export default Header