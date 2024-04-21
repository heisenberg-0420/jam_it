import React from 'react';
import Cookies from 'js-cookie';
import { Routes, Route } from'react-router-dom';
import HomePage from './HomePage';
import CreateRoomPage from './CreateRoomPage';
import JoinRoomPage from './JoinRoomPage';

const App = () => {
  const csrftoken = Cookies.get('csrftoken');
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomPage csrftoken={csrftoken} />} />
      <Route path="/join" element={<JoinRoomPage />} />
    </Routes>
  )
}

export default App