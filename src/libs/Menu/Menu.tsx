import { Menu } from 'antd';
import { MenuItems } from './MenuItems';

export const Menus = () => {
  return (
    <Menu
      mode="vertical"
      style={{
        background: 'linear-gradient(90deg, #4152e0, #ba11f4)',
        textAlign: 'center',
      }}
    >
      <MenuItems
        name="Home"
        href="/home"
        key="1"
        style={{ color: 'white', border: 'none' }}
      />
      <MenuItems
        name="All Releifs"
        href="/relief"
        key="2"
        style={{ color: 'white', border: 'none' }}
      />
      <MenuItems
        name="What we do"
        href="/about"
        key="3"
        style={{ color: 'white', border: 'none' }}
      />
      <MenuItems
        name="Login"
        href="/login"
        key="4"
        style={{ color: 'white', border: 'none' }}
      />
      <MenuItems
        name="Logout"
        href="/logout"
        key="5"
        style={{ color: 'white', border: 'none' }}
      />
    </Menu>
  );
};
