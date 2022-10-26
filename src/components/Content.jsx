import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './Cards'
import CircularProgress from '@mui/material/CircularProgress';

const Content = () => {
  const [photo, setPhoto] = useState()
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    const getPhotos = async () => {
      setLoader(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPhoto(data)
      setLoader(false)
    }
    getPhotos()
  }, [])
  
  return (
    <Box>
      {loader ? <CircularProgress /> : <Cards photo={photo} />}
    </Box>
  )
}

export default Content