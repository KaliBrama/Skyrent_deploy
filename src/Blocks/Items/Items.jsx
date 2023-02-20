import * as S from './StyleItems'
import ImageOne from '../../images/item-1.jpg'
import AxiosGet from '../Json/Json'

function Items() {
  return (
    <div>
      <S.ItemWrapper>
        <img src={ImageOne} alt="Item-1" />
        <S.Location>Germany → Berlin</S.Location>
        <S.TextItem>
          Offering an exclusive Executive club and spacious rooms, this stylish
          hotel stands beside the River Spree on Berlin’s Friedrichstraße
          shopping street.
        </S.TextItem>
        <S.Rent>$ 500 / month</S.Rent>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <AxiosGet />
      </S.ItemWrapper>
    </div>
  )
}

export default Items
