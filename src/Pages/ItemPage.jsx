import * as S from './StylesPage'
import Vector from '../images/vector.svg'
import LogoImg from '../images/logo.svg'

function Item() {
  return (
    <div className="centr">
      <S.Header>
        <div className="vector">
          <a href="./">
            <img src={Vector} alt="Logo" />
          </a>
        </div>
        <div className="logo">
          <a href="./">
            <img src={LogoImg} alt="Logo" />
          </a>
        </div>
      </S.Header>
      <S.TitleAbout>Germany → Berlin</S.TitleAbout>
      <S.PriceRent>$ 500 / month</S.PriceRent>
      <S.AboutItem>
        Offering an exclusive Executive club and spacious rooms, this stylish
        hotel stands beside the River Spree on Berlin’s more
      </S.AboutItem>
      <S.Footer>
        <div className="logo">
          <a href="./">
            <img src={LogoImg} alt="Logo" />
          </a>
        </div>
        <S.Year>2023</S.Year>
      </S.Footer>
    </div>
  )
}

export default Item
