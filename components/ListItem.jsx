import React from 'react';

export default function ListItem({listText}) {
  return (
    <>
      <div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#008C9D" />
          <path d="M34.5606 11.4236C33.9749 10.8378 33.0252 10.8378 32.4393 11.4236L14.4684 29.3947L7.56065 22.487C6.97489 21.9012 6.0252 21.9012 5.43932 22.487C4.8535 23.0728 4.8535 24.0224 5.43932 24.6083L13.4077 32.5766C13.9933 33.1623 14.9437 33.1619 15.529 32.5766L34.5606 13.5449C35.1465 12.9592 35.1464 12.0094 34.5606 11.4236Z" fill="white" />
        </svg>
        <p>{listText || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}</p>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
          }
          svg {
            height: 30px;
          }
        `}
      </style>
    </>
  );
}
