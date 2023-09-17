import { Route, Routes } from 'react-router-dom';

import { Container } from './App.module.jsx';

import Header from '../components/Header/Header';
import Home from 'Pages/Home.jsx';

import Catalog from 'Pages/Catalog.jsx';
import Favorite from 'Pages/Favorite.jsx';

const App = () => {
  return (
    <Container>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </Container>
  );
};

export default App;
