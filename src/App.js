import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from "./firebase";
import {onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';


function App() {
   
  const [user, setUser] = useState(null);

  useEffect(() => { 
    onAuthStateChanged(auth, user => { 
      if (user) {
        setUser(user);
      }
      else {
        setUser(null);
      }
    });
    
  },[])


   return (
     <div className='App'>
       <Router>
       <Routes>
         <Route exact path="/" element={<HomePage user={user} />}>
          </Route>
          <Route path="/signup" element={<SignUp />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </Router>
     </div>
      
  
  );
}


export default App;
