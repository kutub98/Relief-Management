import { Button } from 'antd';
import React from 'react';

type TButtonProps = {
  children: string;
  style?: React.CSSProperties;
  href?: string;
};
const PrimaryButton = ({ children, style, href }: TButtonProps) => {
  return (
    <Button
      className="buttonHover"
      href={href}
      style={{
        color: 'white',
        border: 'none',
        fontSize: '18px',
        width: '120px',
        background: 'linear-gradient(90deg, #4152e0, #ba11f4)',
        boxShadow: '0px, 6px	16px	0px rgba(0, 0, 0, 0.8)',
        height: '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '4px',
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
