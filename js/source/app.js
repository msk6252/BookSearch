'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Search from './components/Search';
import BookBox from './components/BookBox';

ReactDOM.render(
  <h1>
    <Logo />アプリケーションにようこそ!
    <Search />
  </h1>,
  document.getElementById('app')
);