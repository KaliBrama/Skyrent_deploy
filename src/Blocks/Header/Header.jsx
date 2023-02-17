import { useNavigate } from 'react-router-dom'
import * as S from './StyleHeader'
import LogoImg from '../../images/logo.svg'

function Header() {
  const navigate = useNavigate()

  const handleAbout = () => {
    navigate('/About', { replace: true })
  }

  return (
    <S.Header>
      <div className="logo">
        <a href="./">
          <img src={LogoImg} alt="Logo" />
        </a>
      </div>
      <S.About onClick={handleAbout}>
        <p>О проекте</p>
      </S.About>
    </S.Header>
  )
}

export default Header
