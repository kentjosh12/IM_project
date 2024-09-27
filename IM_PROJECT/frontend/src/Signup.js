import React, {useState} from 'react';
import { useNavigate ,} from 'react-router-dom';
import Validation from './SingupValidation';
import axios from  'axios';


function Signup() {
const navigate = useNavigate(); 

    const [values, setValues] = useState({
        email: '',
        password: '',
        ID: '',
        firstName: '',
        lastName: '',
        yearLevel:  ''

    })

    const [error, setErrors]= useState({})
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (error.email==="" && error.password==="" &&  error.ID==="" && error.firstName==="" &&  error.lastName==="" && error.yearLevel==="" ) {
            axios.post('http://localhost:8081/signup', values )
            .then(res =>{
                navigate('/')
            })
            
            .catch(err=> console.log(err));}


}


    const handleInput = (event) => (
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    )

    
    return (
        <div>
            <h2>Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' id="email" name='email' onChange={handleInput}
                     />{error.email && <span className='text-danger'>{error.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' id="password" name='password' onChange={handleInput}/>
                    {error.password && <span className='text-danger'>{error.password}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="ID">ID</label>
                    <input type="ID" placeholder='Enter ID' id="ID" name='ID' onChange={handleInput}/>
                    {error.ID && <span className='text-danger'>{error.ID}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" placeholder='Enter First Name' id="firstName" name='firstName' onChange={handleInput}/>
                    {error.firstName && <span className='text-danger'>{error.firstName}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" placeholder='Enter Last Name' id="lastName" name='lastName' onChange={handleInput} />
                    {error.lastName && <span className='text-danger'>{error.lastName}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="yearLevel">Year Level</label>
                    <input type="text" placeholder='Enter Year Level' id="yearLevel"  name='yearLevel' onChange={handleInput}/>
                    {error.yearLevel && <span className='text-danger'>{error.yearLevel}</span>}
                </div>
                <button type='submit' href="./" className='btn btn-primary' >Sign Up</button>
                <p>Already Have an Account: <a href="./" className=''>Sign up here</a></p>
            </form>
        </div>
    );

} 
export default Signup;  
