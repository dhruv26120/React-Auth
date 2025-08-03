import { useState } from 'react';
import { login ,register} from '../api/auth';
import { setToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //send axios request to api/auth.js
      const res = await login(email, password);
      console.log(res);
      //sets token in local storage
      setToken(res.data.token);

      //navigate to homepage
      navigate('/dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };
  const handleRegister=async(event)=>{
    event.preventDefault();
    try{
      const res= await register(email, password);
      alert('user registered successfully');
    }
    catch{
      alert('user not registered');
    }
  }
  return (
    <form >
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </form>
  );
}
