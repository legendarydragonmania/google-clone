import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${term}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url)
        const dataRes = response.data
        setData(dataRes)
      } catch (error) {
        console.log(error.response)
      }
    }

    fetchData()
  }, [term])

  return { data }
}

export default useGoogleSearch
