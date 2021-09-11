import { useGlobalState } from 'context/index';

const SideNav = () => {
  const { state } = useGlobalState();
  console.log(state);
  return (
    <h1
      style={{
        display: state.sidenavOpen ? 'block' : 'none',
        color: '#fff',
      }}
    >
      sidenav
    </h1>
  );
};

export default SideNav;
