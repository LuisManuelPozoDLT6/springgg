import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CategoryScreen } from './components/category/CategoryScreen';
import { SubCatgoryScreen } from './components/subcategory/SubCatgoryScreen';
import FeatherIcon from "feather-icons-react";

const App = () => {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
            <FeatherIcon icon="home"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className='nav-link'>Categorías</Link>
            <Link to={"/subcategory"} className='nav-link'>Sub Categorías</Link>
          </Nav>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path={"/"} element={<CategoryScreen/>} />
            <Route path="/subcategory" element={<SubCatgoryScreen/>} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
