import React, { useEffect } from "react";
import "../components/Auth.css";

const SignIn = () => {
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

  return () => {
    if (signUpButton && signInButton) {
      signUpButton.removeEventListener("click", handleSignUp);
      signInButton.removeEventListener("click", handleSignIn);
    }
  };
}, []);

  /*useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }

    // Cleanup (best practice in React)
    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener("click", () => {});
        signInButton.removeEventListener("click", () => {});
      }
    };
  }, []);*/

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
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
          <form action="#">
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

