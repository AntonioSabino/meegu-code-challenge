import { HeaderContainer, HeaderNav } from './styles'
import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Meegu" />
      <HeaderNav>
        <a href="/">Cadastro</a>
        <a href="https://www.meegu.com.br/" target="_blank" rel="noreferrer">
          Nosso Site
        </a>
      </HeaderNav>
    </HeaderContainer>
  )
}
