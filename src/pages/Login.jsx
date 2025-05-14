import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User Logged In:', formData);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required /><br /><br />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
