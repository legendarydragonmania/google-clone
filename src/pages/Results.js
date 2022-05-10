import React from 'react'
import './Results.css'
import { useGlobalContext } from '../context'
// import useGoogleSearch from '../hooks/useGoogleSearch'
import Response from '../tesla'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import RoomIcon from '@mui/icons-material/Room'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useGoogleSearch from '../hooks/useGoogleSearch'

function Results() {
  const [{ term }, dispatch] = useGlobalContext()
  const { data } = useGoogleSearch(term)
  // // console.log(data)
  // const data = Response
  // console.log(data)
  return (
    <div className='results'>
      <div className='results__header'>
        <Link to='/'>
          <img
            className='results__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
            alt='google logo'
          />
        </Link>

        <div className='results__headerBody'>
          <Search hideButttons={true} />

          <div className='resultsPage__options'>
            <div className='resultsPage__options-left'>
              <div className='resultsPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='resultsPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='resultsPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='resultsPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='resultsPage__option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='resultsPage__option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='resultsPage__options-right'>
              <div className='resultsPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='resultsPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='search-results'>
          <p className='resultsPage__count'>
            About {data?.searchInformation.formattedTotalResults} results for{' '}
            {term} ({data?.searchInformation.formattedSearchTime}) seconds
          </p>
          {data?.items.map((item) => (
            <div className='resultsPage__singleResult'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className='resultsPage__resultImage'
                    src={item.pagemap?.cse_image[0]?.src || null}
                  />
                )}
                {item.displayLink}
              </a>
              <a className='resultsPage__singleResult-title' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='resultsPage__singleResult-snippet'>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Results
