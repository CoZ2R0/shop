import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import { useState } from 'react';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Kuushop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Magazine</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      
      <div className='container'>
        <div className='row'>
          <Product shoes={shoes}/>
        </div>
      </div>

    </div>
  );
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
