// pages/login.tsx

"use client"

import React from 'react';
import styles from '../styles/Login.module.css';
// pages/login.tsx

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // 실제 서버로 로그인 요청을 보내는 로직을 여기에 추가해야 합니다.
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
          type="text"
          placeholder="Username"
          className={styles.inputField}
          value={username}
          onChange={handleUsernameChange}
          />
          <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
          value={password}
          onChange={handlePasswordChange}
          />
          <button type="submit" className={styles.loginButton}>
          Login
          </button>
      </form>
      <p className={styles.forgotPassword}>Forgot password?</p>
    </div>
  );
};

export default Login;
