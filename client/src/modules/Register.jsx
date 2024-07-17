import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await fetch('http://localhost:8800/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.msg || 'Registration failed');
      }

      const data = await response.json();
      console.log(data);
      const { user } = data;

      if (user) {
        alert('Registration successful');
        navigate('/login'); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full h-[70vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                label="Name"
                name="name"
                type="text"
                required={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <Input
                label="Email address"
                name="email"
                type="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <Input
                label="Password"
                name="password"
                type="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div>
              <Button type="submit">
                Register
              </Button>
            </div>
            
          </form>
          <div className="mt-4" >
              <span > already have account ?</span><Link to="/login">Login</Link>
            </div>
        </div>
        
      </div>
    </>
  );
}
