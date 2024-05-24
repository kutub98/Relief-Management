import Link from 'antd/es/typography/Link';
import { Menu } from 'antd';
type TMenuItemsProps = {
  key: string;
  href: string;
  style: React.CSSProperties;
  name: string;
};

export const MenuItems = ({ key, href, style, name }: TMenuItemsProps) => {
  return (
    <Menu.Item key={key} className="hover">
      <Link href={href} style={style}>
        {name}
      </Link>
    </Menu.Item>
  );
};
