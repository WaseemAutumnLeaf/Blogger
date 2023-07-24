import React, { useEffect, useState } from 'react';
import styles from "./login.module.css"
import { authenticated as authenticatedAtom } from '@/atoms/atoms';
import { useRecoilState } from 'recoil';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = () => {

  const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleLogin = () => {
    console.log(username, password)
    if ((username === "waseem@al.co.za") && (password === "Fletcher24")){
      setAuthenticated(true);
    } 
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
      <form className={styles.form}>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="username">Username:</label>
          <input
            className={styles['input-class']}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label className={styles.label}  htmlFor="password">Password:</label>
          <input
          className={styles['input-class']}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="button" disabled={disabled} onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;