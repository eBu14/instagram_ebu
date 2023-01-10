import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page';
import PostPage from './pages/post-page';
import { SignInPage } from './pages/sign-in-page';
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/post" element={<PostPage/>} />
    </Routes>
  );
}

export default App;
