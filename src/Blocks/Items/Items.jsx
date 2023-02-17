import * as S from './StyleItems'
import ImageOne from '../../images/item-1.jpg'
import ImageTwo from '../../images/item-2.jpg'
import ImageFree from '../../images/item-3.jpg'

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
        <img src={ImageTwo} alt="Item-2" />
        <S.Location>Czech Republic → Prague</S.Location>
        <S.TextItem>
          Located next to Malesicky Park, a&o Prague Rhea is only 200 metres
          from the Zborov Tram Station and a 20-minute tram ride away from the
          historical city centre of Prague.
        </S.TextItem>
        <S.Rent>$ 300 / month</S.Rent>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <img src={ImageFree} alt="Item-3" />
        <S.Location>Madagascar → Antananarivo</S.Location>
        <S.TextItem>
          This hotel offers free Wi-Fi, a stylish lounge-bar and modern rooms
          with a flat-screen TV. The famous KaDeWe department store is a
          5-minute walk away.
        </S.TextItem>
        <S.Rent>$ 500 / month</S.Rent>
      </S.ItemWrapper>
    </div>
  )
}

export default Items
