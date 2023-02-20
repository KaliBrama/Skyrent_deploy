import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as S from './StyleJsonItems'

function AxiosGet() {
  const navigate = useNavigate()

  const handleItem = () => {
    navigate('/Item', { replace: true })
  }

  const [listingData, setListingData] = useState(null)

  useEffect(() => {
    axios
      .get('https://skyrent-production-21dc.up.railway.app/places/')
      .then((response) => setListingData(response.data))
      .catch((error) => console.log(error))
  }, [])

  if (!listingData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {listingData.map((list) => (
        <S.ItemWrapper onClick={handleItem}>
          <S.ImgItem src={list.picture_url} alt="{list.country} " />
          <S.LocationWrapper>
            <S.Location>{list.country}</S.Location>
            <p>→ </p>
            <S.Location>{list.city}</S.Location>
          </S.LocationWrapper>
          <S.TextItem>{list.description}</S.TextItem>
          <S.Rent>$ {list.price} / month</S.Rent>
        </S.ItemWrapper>
      ))}
    </div>
  )
}

export default AxiosGet
