import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import data from './data';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet, } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

export let Context1 = createContext()

function App() {

  // let obj = {name : 'kim'}
  // localStorage.setItem('data', JSON.stringify(obj))
  // let out = localStorage.getItem('data')
  // console.log(JSON.parse(out).name)

  useEffect(()=>{
    localStorage.setItem("watched", JSON.stringify([]))
  },[])

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();
  let [btnCnt, setBtnCnt] = useState(1)
  let [stock] = useState([10, 11, 12])

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Kuushop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Shop</Nav.Link>
            <Nav.Link href="#pricing">Magazine</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                <Product shoes={shoes} navigate={navigate}/>
              </div>
            </div>
            { btnCnt >= 3 ? null :
              <button onClick={()=> {
              setBtnCnt(btnCnt+1)
              axios.get('https://codingapple1.github.io/shop/data' + (btnCnt + 1) + '.json')
              .then((result)=>{ 
                // console.log(result.data)
                setShoes([...shoes, ...result.data])
                console.log(shoes)
              })
              .catch(()=>{ 
                console.log('실ㅍ') 
                console.log(btnCnt)
              })
            }}>버튼</button>}
          </div>
          }/>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock, shoes}}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
        }/>

        <Route path='/cart' element={<Cart/>}/>

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

function Product({shoes, navigate}) {
  return(
    shoes.map(function(a, i){
      return(
      <div className='col-md-4'>
        <img src= {'https://codingapple1.github.io/shop/shoes'+ (i + 1) +'.jpg'} width='80%' 
        onClick={()=>{
          navigate('/detail/' + (a.id))
        }}/>
        <h4>{a.title}</h4>
        <p>{a.price}</p>
      </div>  
      )
    })          
  )
}

export default App;
