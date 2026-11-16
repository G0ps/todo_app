import { useEffect, useState } from 'react';
import api from '../../api.js';
import "./register.css";
import LoadingScreen from "../common_utilities/LoadingScreen.jsx";

function Register() {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmitRegitrationForm = async () => {
    setIsLoading(true);
    try {
      const response = await api.post('/users/new', { user_id, password });
      console.log("res : ", response);

      if (response.data.status === "error") {
        alert(response.data.msg);
      } else {
        alert("registration successful");
        localStorage.setItem("user_id_primary", response.data.userinfo._id);
        localStorage.setItem("user_id_secondary", response.data.userinfo.user_id);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.msg || "Network or server error");
    } finally {

      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className='RegiterationBox'>
      <input
        id='user_id'
        className='inputfields'
        placeholder='Enter a unique user_id here'
        value={user_id}
        onChange={(event) => setUserId(event.target.value)}
      />
      <input
        id='password'
        type='password'
        className='inputfields'
        placeholder='Enter a password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={handleSubmitRegitrationForm} className='submit_button'>
        Submit
      </button>
    </div>
  );
}

export default Register;
