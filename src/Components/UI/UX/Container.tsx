import React, { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ children, style }: TContainerProps) => {
  return (
    <div
      style={{
        margin: 'auto',
        width: '100%',
        maxWidth: '1320px',
        padding: '10px 40px',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
