import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Item() {
  const { pk } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios
      .get(`https://skyrent-production-21dc.up.railway.app/places/${pk}`)
      .then((response) => setPost(response.data))
  }, [])

  return <div className="centr">{post && <h1>{post.title}</h1>}</div>
}

export default Item
