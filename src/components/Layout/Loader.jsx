import React from 'react';
import spinner from '../../style/img/spinner.gif';

export const Loader = () => (
  <img
    src={spinner}
    alt='Loading...'
    style={{ width: '200px', margin: 'auto', display: 'block' }}
  />
);
