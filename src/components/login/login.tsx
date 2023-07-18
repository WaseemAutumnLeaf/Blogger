import React, { useEffect, useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleLogin = () => {
    if (password.length <= 5 ) {
        alert("Password must be longer than 5 characters")
    }
  };

  useEffect(() => {
    if (username.length > 0 || password.length > 0) {
        setDisabled(false);
    }
    else {
        setDisabled(true);
    }
  }, [username, password])

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" disabled={disabled} onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;