import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        Made with{' '}
        <span role='img' aria-label='coffee cup'>
          ☕
        </span>{' '}
        by{' '}
        <a className='footer__link' href='https://timmybytes.com'>
          Timothy Merritt
        </a>
        , {year}
        <a className='footer__link' href='https://github.com/timmybytes/color-chooser'>
          {' Fork on GitHub'} <i class='fa fa-github' aria-hidden='true'></i>
        </a>
      </footer>
    </>
  );
}

export default Footer;
