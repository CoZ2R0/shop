import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'



let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, title : 'White and Black', count : 2},
        {id : 2, title : 'Grey Yordan', count : 1}
    ] ,
    reducers : {
        changeCount(state, actions){
            console.log(actions.payload)
            state.map(function(a, i){
                if(a.id == actions.payload){
                    a.count+=1
                }
            })
        },
        addProduct(state, actions){
            let isNotExist = true
            state.map(function(a){
                console.log(a.id)
                if(actions.payload.id == a.id){
                    isNotExist = false
                }
            })
            if(isNotExist){
                let newProduct = {...actions.payload, count : 1 }
                // console.log(newProduct)
                state.push(newProduct)
            }
        }, 
        deleteProduct(state, actions){
        {/* let y = (and returnX) */} 
        return state.filter((data) => data.id != actions.payload);
            // console.log(y)
            // state = y
        }
    }
})

export let { changeCount, addProduct, deleteProduct } = cart.actions

export default configureStore({
    reducer: { 
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
}) 