import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Layout/Navbar';
import MainApp from './components/pages/MainApp';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className='container'>
        <MainApp />
      </div>
    </Provider>
  );
}

export default App;
