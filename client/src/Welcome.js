const Welcome = ({handleClick}) => {

    return (
        <div className="welcome">
           <h1>Welcome</h1>
           <p>This is a demo project, data entered here is being stored on the database which can be seen by the admin</p>
<p>Kindly fill in your details correctly
    <br />
    Thank You!
</p>
<div className="btn-container">
<button onClick={()=> handleClick()}className="proceed-btn">Continue</button>
</div>
        </div>
      );
}
 

export default Welcome;