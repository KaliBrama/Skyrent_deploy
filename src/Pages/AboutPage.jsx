import LogoImg from '../images/logo.svg'
import Vector from '../images/vector.svg'
import * as S from './StylesPage'
import Todos from "../Blocks/Json/Json"; 

function AboutPage() {
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
      <S.TextAbout>
        Skyrent – MVP сервиса доски объявлений по длительной аренде жилья для
        релокации. Позволяет просматривать карточку, фильтровать и просматривать
        контакты арендатора.
      </S.TextAbout>
      <S.TitleAbout>Над проектом работали</S.TitleAbout>
      <div>
        <S.Students>Frontend @mr_Dubik</S.Students>
        <S.Students>Backend @jagernaut_max</S.Students>
        <S.Students>QA @arinchev00</S.Students>
      </div>
      <S.Footer>
        <Todos />

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

export default AboutPage
