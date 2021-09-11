import { useGlobalState } from 'context/index';
import { HeaderContainer } from './styles';

const searchIcon = '/src/assets/icons/search.svg';
const hamburgerIcon = '/src/assets/icons/hamburger.svg';
const shareIcon = '/src/assets/icons/share.svg';

const Header = () => {
  const { actions } = useGlobalState();
  return (
    <HeaderContainer>
      <div className="logo">LOGO</div>
      <button
        className="icon hamburger"
        onClick={() => actions.toggleSidenav()}
      >
        <img src={hamburgerIcon} alt="hamburger" />
      </button>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <button className="icon">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <button className="icon search">
        <img src={searchIcon} alt="search" />
      </button>
      <button className="icon">
        <img src={shareIcon} alt="share" />
      </button>
      <button className="login-btn">Iniciar sesión</button>
    </HeaderContainer>
  );
};

export default Header;
