import React from 'react'
import './Results.css'
import { useGlobalContext } from '../context'

function Results() {
  const [{ term }, dispatch] = useGlobalContext()
  return (
    <div className='results'>
      <div className='results__header'></div>
      <div className='search-results'></div>
    </div>
  )
}

export default Results
