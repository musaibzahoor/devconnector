import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User Registered:', formData);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required /><br /><br />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required /><br /><br />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
