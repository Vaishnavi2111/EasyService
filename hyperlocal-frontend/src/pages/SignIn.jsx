/*[import React, { useEffect } from "react";
import './SignIn.css';
import api from "../services/api";

const SignIn = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
});
const [message, setMessage] = useState('');
const [isLoading, setIsLoading] = useState(false);

const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle form switching
useEffect(() => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  const handleSignUp = () => container.classList.add("right-panel-active");
  const handleSignIn = () => container.classList.remove("right-panel-active");

  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener("click", handleSignUp);
    signInButton.addEventListener("click", handleSignIn);
  }



  const handleSignUpSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const res = await api.post('/auth/register', formData);
    setMessage(res.data.message);
    console.log('✅ Registered:', res.data);
  } catch (err) {
    setMessage(err.response?.data?.message || 'Sign up failed');
    console.error('❌ Signup Error:', err);
  } finally {
    setIsLoading(false);
  }
};

const handleSignInSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const res = await api.post('/auth/login', {
      email: formData.email,
      password: formData.password
    });

    localStorage.setItem('token', res.data.token);
    setMessage('Login successful!');
    console.log('✅ Login successful:', res.data.user);
  } catch (err) {
    setMessage(err.response?.data?.message || 'Login failed');
    console.error('❌ Login Error:', err);
  } finally {
    setIsLoading(false);
  }
};


  // ✅ Add Axios test call
  api.get('/auth/test')
    .then((res) => {
      console.log('✅ Axios Test:', res.data);
    })
    .catch((err) => {
      console.error ('❌ Axios Error:', err.message);
    });

  return () => {
    if (signUpButton && signInButton) {
      signUpButton.removeEventListener("click", handleSignUp);
      signInButton.removeEventListener("click", handleSignIn);
    }
  };
}, []);
  
  return (
    <div className="signin-wrapper">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social" title="Sign in with Facebook">
              <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social" title="Sign in with Google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social" title="Sign in with Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="form-footer">
              <button className="sign-up-btn">Sign Up</button>
            </div>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
             <a href="#" className="social" title="Sign in with Facebook">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="social" title="Sign in with Google">
               <i className="fab fa-google"></i>
             </a>
             <a href="#" className="social" title="Sign in with Instagram">
               <i className="fab fa-instagram"></i>
             </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className="form-footer">
              <a href="#" className="forgot-password">Forgot your password?</a>
              <button className="sign-in-btn">Sign In</button>
            </div>

            
      
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

] */


import React, { useEffect, useState } from "react";
import './SignIn.css';
import api from "../services/api";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Input change handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Axios test (optional)
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const handleSignUp = () => container.classList.add("right-panel-active");
    const handleSignIn = () => container.classList.remove("right-panel-active");

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", handleSignUp);
      signInButton.addEventListener("click", handleSignIn);
    }

    api.get('/auth/test')
      .then((res) => {
        console.log('✅ Axios Test:', res.data);
      })
      .catch((err) => {
        console.error('❌ Axios Error:', err.message);
      });

    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener("click", handleSignUp);
        signInButton.removeEventListener("click", handleSignIn);
      }
    };
  }, []);

  // Submit handlers
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post('/auth/register', formData);
      setMessage(res.data.message);
      console.log('✅ Registered:', res.data);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Sign up failed');
      console.error('❌ Signup Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      setMessage('Login successful!');
      console.log('✅ Login successful:', res.data.user);
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
      console.error('❌ Login Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social" title="Sign in with Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social" title="Sign in with Google"><i className="fab fa-google"></i></a>
              <a href="#" className="social" title="Sign in with Instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="form-footer">
              <button className="sign-up-btn" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>
              {message && <p className="form-message">{message}</p>}
            </div>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social" title="Sign in with Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social" title="Sign in with Google"><i className="fab fa-google"></i></a>
              <a href="#" className="social" title="Sign in with Instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="form-footer">
              <a href="#" className="forgot-password">Forgot your password?</a>
              <button className="sign-in-btn" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              {message && <p className="form-message">{message}</p>}
            </div>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
