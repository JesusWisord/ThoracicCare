import React from 'react';
import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: router.pathname === href ? 'var(--first-brand-color)' : 'black',
    color: 'white',
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink