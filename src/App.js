import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet, } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Kuushop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Shop</Nav.Link>
            <Nav.Link href="#pricing">Magazine</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                <Product shoes={shoes}/>
              </div>
            </div>
          </div>
          }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        <Route path='*' element={<h1>없는 페이지입니다</h1>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>회사원소개</div>}/>
          <Route path='lacation' element={<div>위치정보</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props) {
  return(
    props.shoes.map(function(a, i){
      return(
      <div className='col'>
        <img src= {'https://codingapple1.github.io/shop/shoes'+ (i + 1) +'.jpg'} width='80%'/>
        <h4>{a.title}</h4>
        <p>{a.price}</p>
      </div>  
      )
    })          
  )
}

export default App;
