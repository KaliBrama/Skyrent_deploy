import * as S from './StyleHeader'
import LogoImg from '../../images/logo.svg'

function Header() {
  return (
    <S.Header>
      <div className="logo">
        <a href="./">
          <img src={LogoImg} alt="Logo" />
        </a>
      </div>
      <S.About>
        <p>О проекте</p>
      </S.About>
    </S.Header>
  )
}

export default Header
