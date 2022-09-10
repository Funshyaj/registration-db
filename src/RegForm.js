import { useState } from "react";
import Welcome from "./Welcome";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const regCollection = collection(db, "Information ");

const Form = () => {
    //boolean state 
    const [click, setclick] = useState(true)
     const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
     const [sex, setSex] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)

    //function for removing the welcome message
const remove =()=>setclick(!click)

//submit function
function handleSubmit(e){

    let obj ={
        firstName:firstName,
        lastName:lastName,
        sex:sex,
        email:email,
        phone:phone,

    }  
    console.log(obj)

  if((obj.firstName === null || "") && (obj.lastName === null || "")  && (obj.email === null  || "") && 
  (obj.phone === null || "")){
   alert("Fill in all your data")
  }
  
else
{return addDoc(regCollection, obj)
    .then((e)=>{
       // e.target.reset
  if((obj.firstName !== null || "") && (obj.lastName !== null || "")  && (obj.email !== null  || "") && 
  (obj.phone !== null || ""))
  {alert("Data was added succesfully")}
    })
    .catch((error)=> {alert("There was an error :"+ error)})
}
}

//setting input state
function handleChange(e){
    const {id, value} = e.target
if(id=== "firstName"){
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
    setSex("Male")
}
if(id === "radio2"){
    setSex("Female")
}
}






//html display
    return (  
        <div className="Home" >
{click && <div className="modal-container">
    <Welcome handleClick={remove}/>
    </div> }

        <div className="regform">
             <h1>Registration form</h1>
    <div className="main">
       
    <form> 
        <div id="name"> 
<input className="name" type="text"  value={firstName} onChange={(e)=>handleChange(e)} id="firstName" placeholder="First name" required />
<input className="name" type="text" id="lastName" value={lastName} onChange={(e)=>handleChange(e)} placeholder="Last name" required />
        </div>	
        <div id="mail">
    <input className="email" type="email" id="email" value={email} onChange={(e)=>handleChange(e)} placeholder="Email" required />
    
    <input className="email" type="phone" id="phone" value={phone} onChange={(e)=>handleChange(e)} placeholder="Phone number" required />

</div>
    <div className="radio">
        <div className="radio-one">
        <label> Male</label>  
        <input className="radio-b" type="radio" id="radio1" />
 </div>
        <div className="radio-one">
     <label>Female</label>
     <input className="radio-b" type="radio"  id="radio2" />
  </div>
   </div>
        
    <button className="submit-btn" type="submit"  onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
        </div>
        </div>
        <p className="end-txt">Make sure details entered are correct before submiting!</p>
        </div>
    
  
    );
}

 
export default Form;
