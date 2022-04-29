import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import userImage from '../assets/user.png';
import GoogleButton from 'react-google-button';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const provide = new GoogleAuthProvider();

  const login = async (e) => { 
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword( auth, email, password);
      console.log(res.user.email);
      navigate('/');
    } catch (error) { 
      console.log(error);
    }
    
  }

  const signInWithGoogle = async () => { 
    await signInWithPopup(auth, provide).then((res) => {
        console.log(res.user.email);
        navigate('/');
    }).catch((err) => { 
        console.log(err);
    })
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
      }}>Login</h2>
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
                  width: '280px',
                  marginBottom: '-5px'
                }} variant="contained" onClick={login} >Login</Button>
              </FormControl>

              <h6>OR</h6>  

              <GoogleButton
                style={{width:'280px',height:'50px',marginTop:'-4px'}}
                onClick={signInWithGoogle}
              />
              
            </div>
            <div>
              <h5 style={{
                textDecoration: 'none',
                fontWeight: 'initial',
                fontSize:'15px',
              }}>Don't have an account? 
                <Link to="/signup" style={{ textDecoration: 'none', color: '#ffae34' }}>
                  Sign Up
                </Link></h5>
            </div>
          </form>
          
        </div>  
      </Card>   
    </div>

   
  )
}

export default Login