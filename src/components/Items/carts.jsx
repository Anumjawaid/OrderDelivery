import React,{useState} from 'react'

export default function Cart({cart,setCart}){

    let [page,setPage]=useState()
    // console.log(cart[0]['name'][0],"from cart")
    console.log("cart",cart)
    cart.map((v,i)=>(
        console.log(v,"asdfgh")
       ))
    
   
    const navigateto=(nextpage)=>{
        setPage(nextpage)

    }
    const remove = ()=>{
        console.log("i am working")
    }

    return(
        <div>
            <div className="container"><h4>Items In Cart</h4>
            <h3>Your Cart Items</h3>
            <button>Delete Cart</button> 
            <button>Place Your Order</button>
            {cart.map((v,i)=>(
                <div className="row">

                    
                    <div className="col-md-12">
                        <div className="card" style={{width: "30rem"}}>
                            {/* <img src={b[i] }alt="" className="card-img-top"/> */}
                            <div className="card-body"><h5 className="card-title">{v['name']}</h5>
                            <p className='card-text'> Price:{v['price']} Quantity {v['quantity']}</p></div>
                            <button onClick={remove}>Remove Item</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        

        </div>
    )
}
