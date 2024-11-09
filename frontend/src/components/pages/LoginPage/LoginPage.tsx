
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={()=> navigate("/register")}>Register</button>
    </>
  )
}
