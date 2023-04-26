import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    return()=>{
      clearTimeout(a)
    }
  }, [])

  props.shoes.map(function(a, i){
    if(id == a.id)
      product = id
  })

  return(
    <div className="container">
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
    </div>
  )
}

  export default Detail;
