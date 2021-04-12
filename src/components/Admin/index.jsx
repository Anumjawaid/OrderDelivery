import React,{useState} from "react"
import "../Admin/style.css"
import firebase from '../../config/firebase'

const getItems=()=>{
    const it=[]
    firebase.database().ref('/').child('items').on('child_added',(s)=>{
        // console.log(s.val(),"inside map")
        it.push(s.val())
          })
          return it
}

const  Admin = ()=>{
    const [name,setname]=useState()
    const [priceperKg,setPrice]=useState()
    const[desc,setDesc]=useState()
    const[tinvest,setTinvest]=useState()
    const[tinvestdozen,setTinvestDozen]=useState()
    const [img,setImg]=useState(null)
    // const it=[]
    var items={
        // name:"",
        // tinvest:0, //price of all
        // tinvestdozen:"",// total dozen being bought
        // desc:"",
        // date:"",
        // id:"",
        // img:""
    }
//    firebase.database().ref('/').child('items').on('child_added',(s)=>{
//         console.log(s.val(),"inside map")
//         it.push(s.val())
//           })
    // ADD INTO INENTORY ITEM
const AddInvent = ()=>{
console.log("I AM RUNNING")
var month=['Jan',"Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
        var days=['Monday',"Tuesday","Wednesday",'Thursday','Friday','Saturday','Sunday']
        var d = new Date();
        var id=new Date().getTime()
        var date=(d.getUTCDate()+ month[d.getMonth()]+d.getFullYear())
items.name=name
items.price=Number(priceperKg)
items.desc=desc
items.date=date
items.id=id
items.tinvest=Number(tinvest)
items.tinvestdozen=tinvestdozen
items.img=img
console.log(items,"from add")
firebase.database().ref('/').child('items').push(items)
setname("")
setPrice("")
setTinvest("")
setTinvestDozen("")
setDesc("")
}
const Getitems = ()=>{
    // console.log("FF")
//     var inven
//    firebase.database().ref('/').child('items').on('child_added',(s)=>{
//         console.log(s.val(),"inside map")
//           inven=s.val()

//     })
    // console.log(a[0]['date'])
    // console.log(s.val()[0])
}
const types=['image/jpeg','image/png']
const filehandler = (e)=>{
    // console.log(e.target.value,"from file handler")  ==>fakepath
    const selected=e.target.files[0]
    if (selected && types.includes(selected.type)){
    console.log(selected,"mainmaybe")

        setImg(selected)
        console.log(img)
    }
    else{
        alert("Please sahi select karro")
    }

}
var a=getItems()
return(
    <>
    <h1>I AM ADMIN</h1>
    {/* <nav>
        Admin Panel
    </nav> */}
    <div className="itemdesc">
        <div className="container">
        <input type="text" className="name" value = {name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Item's Name"/>
        <input type="text" className="price" value = {priceperKg} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Item's Price"/>
        <input type="text" className="desc" value = {desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Item's Description"/>
        <input type="text" className="toinvest" value = {tinvest} onChange={(e)=>setTinvest(e.target.value)} placeholder="Enter Total Investment"/>
        <input type="text" className="desc" value = {tinvestdozen} onChange={(e)=>setTinvestDozen(e.target.value)} placeholder="Enter Investment Item in dozen"/>
        <input type='file' onChange={filehandler} />
        <button onClick={Getitems}>Upload Image</button>
        <button onClick={AddInvent}>Add To Inventory</button>
        {
        console.log(a,"whole a")}
        </div>
    </div>
    <div className="itemlist">
        <ul>
          
            {a.length ? a.map((v,i)=>(
                <li>{v['name']} { v['price'] } { v['date'] }</li>)

            ) : <li> nothing</li>}
        </ul>
    </div>

    </>
)
} 
export { Admin,getItems} 
