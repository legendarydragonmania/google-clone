import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { actionTypes } from '../reducer'

function Search({ hideButttons = false }) {
  const [input, setInput] = useState()
  const navigate = useNavigate()
  const [{ term }, dispatch] = useGlobalContext()

  const search = (e) => {
    e.preventDefault()
    console.log('you hit the search button', input)
    if (input) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      })
      navigate('/results')
    }
  }
  return (
    <form className='search' onSubmit={search}>
      <div className='search__input'>
        <SearchIcon className='search__input-icon' />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButttons && (
        <div className='search__buttons'>
          <Button type='submit' onClick={search} variant='outlined'>
            Gooogle Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  )
}

export default Search
