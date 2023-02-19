import { useState, useEffect } from 'react'
import axios from 'axios'

function AxiosGet() {
  const [listingData, setListingData] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setListingData(response))
      .catch((error) => console.log(error))
  }, [])

  if (!listingData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{listingData.data[0].title}</h2>
    </div>
  )
}

export default AxiosGet
