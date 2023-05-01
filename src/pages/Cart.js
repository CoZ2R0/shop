import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../store/userSlice.js"
import { changeCount, deleteProduct } from "../store.js"

function Cart() {

    let state = useSelector((state)=>{ return state})
    let dispatch = useDispatch()
    

    return(
        <div>
                <h6>{state.user.name} {state.user.age}</h6>
                <button onClick={()=>{ dispatch(changeName(50))}}>버튼</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    state.cart.map(function(a){
                        return(         
                            <tr>
                                {console.log(state.cart)}   
                                <td>{a.id}</td>
                                <td>{a.title}</td>
                                <td>{a.count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeCount(a.id))
                                        }}>+</button>
                                    <span> </span>
                                    <button onClick={()=>{
                                        dispatch(deleteProduct(a.id))
                                    }}>삭제</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart