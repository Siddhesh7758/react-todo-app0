import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import userImage from '../assets/user.png';
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";


function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = async (e) => { 
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user.email);
      navigate('/login');
    } catch (error) { 
      console.log(error);
    }
    
  }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <h2 style={{
        fontWeight: '600',
        fontSize: '36px',
        marginBottom: '40px'
      }}>SignUp</h2>
      <Card sx={{ minWidth: 360, minHeight:450, boxShadow:'2px 2px 27px -5px rgba(0,0,0,0.70)' }}>
        
        <div>
          
          <form>
            <div style={{
              margin:'8px',
              display: 'flex',
              alignItems:'center',
              flexDirection: 'column',
              justifyContent: 'center',
              
            }}>
              <img src={userImage} alt="user" style={{width:'90px',height:'100px',marginBottom:'14px',marginTop:'20px'}}/>
              <FormControl>
                <InputLabel>Email</InputLabel>
                <Input 
                  type='email'
                  style={{ width: '280px', marginBottom: '14px' }}
                  onChange={(e) => setEmail(e.target.value) }
                />
                </FormControl>
                <FormControl>
                <InputLabel>Password</InputLabel>
                <Input 
                  type='password'
                  style={{ width: '280px' }}
                  onChange={(e) => setPassword(e.target.value) }
                />
              </FormControl>
              <FormControl>
                <Button style={{
                  backgroundColor:'#ffae34',
                  marginTop: '40px',
                  marginBottom: '15px',
                  width: '280px'
                }} variant="contained" onClick={signUp}>Sign Up</Button>
              </FormControl>
            </div>
            <div>
              <h5 style={{
                textDecoration: 'none',
                fontWeight: 'initial',
                fontSize: '15px',
              }}>Already have an account?
                <Link to="/login" style={{ textDecoration: 'none', color:'#ffae34' }}>
                  Login
                </Link>
              </h5>
            </div>
          </form>
          
        </div>  
      </Card>   
    </div>

   
  )
}

export default SignUp