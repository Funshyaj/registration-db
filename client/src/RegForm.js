import React,{ useState } from "react";
import Welcome from "./Welcome";
import axios from "axios"
// import { db } from "./firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";

// const regCollection = collection(db, "Information ");

const Form = () => {
    //boolean state 
    const [modal, setmodal] = useState(true)

    // details state
     const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
     const [sex, setSex] = useState(null)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
    const fetch = async()=>{
         await  axios.get('http://localhost:4000/api')
        .then(res => {
          setData(res.data.message)
          })
        .catch((error) => {
          console.log(error);
        })   
    }

    fetch()
   
    }, []);

    //function for removing the welcome message
const remove =()=>setmodal(!modal)

//submit function
function handleSubmit(e){
// e.preventDefault()
    let obj ={
        firstName:firstName,
        lastName:lastName,
        sex:sex,
        email:email,
        phone:phone,
    }  

    // console.log(obj)

    axios.post('http://localhost:4000/add-person', obj)
      .then(res => alert("Registration succesfull, dont register twice"));

   if((obj.firstName === null || "") && (obj.lastName === null || "")  && (obj.email === null  || "") && 
  (obj.phone === null || "")){
   alert("Fill in all your data")
  }
  
// else
// {return addDoc(regCollection, obj)
//     .then((e)=>{
//        // e.target.reset
//   if((obj.firstName !== null || "") && (obj.lastName !== null || "")  && (obj.email !== null  || "") && 
//   (obj.phone !== null || ""))
//   {alert("Data was added succesfully")}
//     })
//     .catch((error)=> {alert("There was an error :"+ error)})
// }
}

//setting input state
function handleChange(e){
    const {id, value} = e.target
if(id === "firstName"){
setFirstName(value)
}
if(id === "lastName"){
    setLastName(value)
}
if(id === "email"){
    setEmail(value)
}
if(id === "phone"){
    setPhone(value)
}
if(id === "radio1"){
    setSex(value)
}
if(id === "radio2"){
    setSex(value)
}
}






//html display
    return (  
        <div className="Home" >
{modal && <div className="modal-container">
    <Welcome handleClick={remove}/>
    </div> }

        <div className="regform">
             <h1>Registration form</h1>
    <div className="main">
       
    <form onSubmit={(e)=>{handleSubmit(e)}}> 
        <div id="name"> 
<input className="name" type="text"  value={firstName} onChange={(e)=>handleChange(e)} id="firstName" placeholder="First name" required />
<input className="name" type="text" id="lastName" value={lastName} onChange={(e)=>handleChange(e)} placeholder="Last name" required />
        </div>	
        <div id="mail">
    <input className="email" type="email" id="email" value={email} onChange={(e)=>handleChange(e)} placeholder="Email" required />
    
    <input className="email" type="number" id="phone" value={phone} onChange={(e)=>handleChange(e)} placeholder="Phone number" required />

</div>
    <div className="radio">
        <div className="radio-one">
        <label> Male</label>  
        <input className="radio-b" type="radio" id="radio1" value="Male" name='sex' onChange={(e)=>handleChange(e)}/>
 </div>
        <div className="radio-one">
     <label>Female</label>
     <input className="radio-b" type="radio"  id="radio2" value="Female" name='sex' onChange={(e)=>handleChange(e)}/>
  </div>
   </div>
        
    <button className="submit-btn" type="submit">Submit</button>
        </form>
        </div>
        </div>
        <p className="end-txt">Make sure details entered are correct before submiting!</p>
        <p>{!data ? "Loading..." : data}</p>
        </div>
    
  
    );
}

 
export default Form;
