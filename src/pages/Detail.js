import { useParams } from "react-router-dom";

function Detail(props) {

  let {id} = useParams();
  let product;

  props.shoes.map(function(a, i){
    if(id == a.id)
      product = id
  })

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(product)+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
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
