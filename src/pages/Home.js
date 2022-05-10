import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header-left'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__header-right'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div className='home__body'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
          alt='google logo'
        />
        <div className='home__input-container'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
