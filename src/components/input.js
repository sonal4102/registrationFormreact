import React,{useState} from 'react'


const Input = () => {
    const[userRegistration, setUserRegistration]= useState({
        username:"",
        phone:"",
        email:"",
        password:""
    });
const [records, setRecords]= useState([]);

    const handleInput=(e)=>{
      const name= e.target.name;
      const value= e.target.value;
      console.log(name,value,userRegistration); 
      setUserRegistration({...userRegistration ,[name]:value})
    }


    const handleSubmit=(e)=>{
        // console.log("me inside handle submit");
        e.preventDefault();
        const newRecord= { ...userRegistration, id: new Date().getTime().toString()}
        console.log(newRecord);
        setRecords([...records,newRecord]);

        setUserRegistration({username:"", phone:"", email:"", password:""})
    }
  return (
    <>
    <div className='registration-form'>
     <form action="" onSubmit={handleSubmit}>
     <h1>Registration Form</h1>
 
        
        <div>
            <label htmlFor="username">Name</label>
            <input type="text" autoComplete="off" 
            value={userRegistration.username} 
            onChange={handleInput} 
            name="username" id="username" placeholder="Enter Your Full Name" required/>
        </div>
        <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" autoComplete="off" 
             value={userRegistration.phone} 
             onChange={handleInput} 
              name="phone" id="phone" placeholder="Enter Your Contact Number" required/>
        </div>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" autoComplete="off" 
             value={userRegistration.email} 
             onChange={handleInput} 
              name="email" id="email" placeholder="Enter Your E-mail" required/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete="off" 
             value={userRegistration.password} 
             onChange={handleInput} 
             name="password" id="password" placeholder="Create Your Password" required/>
        </div>
       <button type="submit">Submit</button>
     </form>
     </div>

     <div className='sheet'>
        {
            records.map((curElem)=>{
                const {id, username,phone, email, password}=curElem;
                return(
                    <div className="showDataStyle" key={id}>
                        {/* <p>username:{username}contact no.:{phone},e-mail:{email},password:{password}</p> */}
                        {/* <p>{phone}</p> */}
                        {/* <p>{email}</p>
                        <p>{password}</p> */}
                        <p>
                            <span className='one'>{username}</span>
                            <span className='two'>{phone}</span>
                            <span className='three'>{email}</span>
                            <span className='four'>{password}</span>
                        </p>
                    </div>
                )
            })
        }
     </div>


    </>
  )
}

export default Input
