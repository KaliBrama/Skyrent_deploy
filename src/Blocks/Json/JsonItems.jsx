import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
  }, [])

  if (!listingData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {listingData.map((list) => (
        // <S.ItemWrapper onClick={handleItem}>
        <S.ItemWrapper onClick={handleItem}>
          <S.ImgItem src={list.picture_url} alt="{list.country} " />
          <S.LocationWrapper>
            <Link className="link" key={list.pk} to={`/Item/${list.pk}`}>
              <S.Location>
                {list.country} → {list.city}
              </S.Location>
            </Link>
          </S.LocationWrapper>
          <S.TextItem>{list.description}</S.TextItem>
          <S.Rent>$ {list.price} / month</S.Rent>
        </S.ItemWrapper>
      ))}
    </div>
  )
}

export default AxiosGet
