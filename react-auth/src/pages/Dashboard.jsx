import { useEffect, useState } from 'react';
import { getUser } from '../api/auth';
import { getToken, removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {

        //get token from local storage
        const token = getToken();

        //get user based on token
        const res = await getUser(token);

        //set User from response data
        setUser(res.data);
        
      } catch (err) {
        console.error(err.message);
        alert('Session expired. Please log in again.');
        removeToken();
        navigate('/login');
      }
    };
    fetchUser();
  }, );

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are logged out</p>
      )}
    </div>
  );
}
