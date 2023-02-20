import { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './StyleJson'

function AxiosGet() {
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
        <S.ItemWrapper>
          <S.ImgItem src={list.picture_url} alt="Item-1" />
          <S.LocationWrapper>
            <S.Location>{list.country}</S.Location>
            <p>→</p>
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
