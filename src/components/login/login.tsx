import React, { useEffect, useState } from 'react';
import styles from "./login.module.css"
import { authenticated as authenticatedAtom, user as userAtom, userId as userIdAtom } from '@/atoms/atoms';
import { useRecoilState } from 'recoil';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = () => {

  const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom);
  const [user, setUser] = useRecoilState<string>(userAtom);
  const [userId, setUserId] = useRecoilState<number>(userIdAtom);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [userId, setUserId] = useState<number|null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [userList, setUserList] = useState([
    {
      id: 1,
      email: "waseem@al.co.za",
      password: "Fletcher24"
    },
    {
      id: 2,
      email: "austin@al.co.za",
      password: "Austin123!"
    },
    {
      id: 3,
      email: "morgan@al.co.za",
      password: "Morgan123!"
    },
  ]);

  const handleLogin = () => {
    // Find the user with the matching email in the userList
    const user = userList.find((user) => user.email === username);
  
    if (!user) {
      // User with the provided username doesn't exist
      console.log("User not found");
      return;
    }
  
    if (user.password === password) {
      // Username and password match - successful login
      setUser(username);
      setUserId(user.id);
      setAuthenticated(true);
    } else {
      // Password is incorrect
      console.log("Incorrect password");
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