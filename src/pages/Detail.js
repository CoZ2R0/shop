import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';


// let Btn = styled.button`
//   background : ${ props => props.bg };
//   color : black;
//   padding : 10px;
// `
// let CopyBtn = styled.button(Btn);

// let Box = styled.div`
//   background : lightgrey;
//   padding : 20px;
// `

function Detail(props) {

  let {id} = useParams();
  let product;
  let [alert, setAlert] = useState(true) 
  let [text, setText] = useState('')
  let [tab, setTab] = useState(0)
  let [page, setPage] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    let b = setTimeout(()=>{ setPage('end') }, 10)
    return()=>{
      clearTimeout(a)
      clearTimeout(b)
      setPage('')
    }
  }, [])

  props.shoes.map(function(a, i){
    if(id == a.id)
      product = id
  })

  return(
    <div className={"container start " + page}>
      {/* <Box><Btn bg='lightPink'>유메쟈나이</Btn></Box>
      <CopyBtn>복붙한 버튼</CopyBtn> */}
      { alert == true ?  <div className="alert alert-warning">2초이내 구매시 할인</div> : null } 
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(product)+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          { isNaN(text) == true ? <h4>경고 : 숫자만입력하세요</h4> : null }
          <input onChange={(e)=>{ setText(e.target.value)}}></input>
          <h4 className="pt-5">{props.shoes[product].title}</h4>
          <p>{props.shoes[product].content}</p>
          <p>{props.shoes[product].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼3</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  )
}

function TabContent({tab}){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade('end') }, 10)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return ( <div className={'start ' + fade}>
    { [<div>내용0이다</div>, <div>내용1이다</div>, <div>내용2이다</div>][tab] }
  </div> )
  // if(tab == 0){
  //   return <div>내용0이다</div>
  // } else if(tab == 1){
  //   return <div>내용1이다</div>
  // }else if(tab == 2){
  //   return <div>내용2이다</div>
  // }

}

  export default Detail;
