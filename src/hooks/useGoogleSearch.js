import React, { useState, useEffect } from 'react'

const useGoogleSearch = (term) => {
  const [{ term }, dispatch] = useGlobalContext()
  const [data, setData] = useState(null)

  useEffect(() => {
   const fetchData = async () => {
    
   }
  }, [term])
}

export default useGoogleSearch
