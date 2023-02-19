import About from './StyleFooter'
import LogoImg from '../../images/logo.svg'
import AxiosGet from '../Json/Json'

function Header() {
  return (
    <div>
      <div>
        <AxiosGet />
      </div>
      <div className="logo">
        <a href="./">
          <img src={LogoImg} alt="Logo" />
        </a>
      </div>
      <About>
        <p>2023</p>
      </About>
    </div>
  )
}

export default Header
