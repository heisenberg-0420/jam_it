import React from 'react';
import { Routes, Route } from'react-router-dom';
import HomePage from './HomePage';
import CreateRoomPage from './CreateRoomPage';
import JoinRoomPage from './JoinRoomPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/join" element={<JoinRoomPage />} />
    </Routes>
  )
}

export default App