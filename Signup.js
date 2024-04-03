import { useCallback, useState } from "react";
import { useNavigate,  } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repassword, setrePassword] = useState("");

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleRePasswordChange = useCallback((event) => {
    setrePassword(event.target.value);
  }, []);

  const handleSignup = useCallback(async () => {
    const userData = {
      name,
      username,
      password,
      repassword
    };

    if (password !== repassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
        navigate("/login");
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up, please try again.");
    }
  }, [navigate, name, username, password, repassword]);

  const onRectangle5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignupTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  

  return (
    <div className="signup1">
      <div className="signup-child" />
      <div className="your-Name">Name</div>
      <div className="input-containers">
      <input
              type="email"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter name"
            />
      </div>
      <div className="your-email">Email</div>
      <div className="input-containers">
      <input
              type="email"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
      </div>
    <div className="your-password1">Password</div>
      <div className="input-containers">
      <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
      </div>
      
      <div className="your-repassword1">Re-Enter Password</div>
  <div className="input-containers">
  <input
          type="password"
          value={repassword}
          onChange={handleRePasswordChange}
          placeholder="Re-Enter Password"
        />
  </div>
     
  <div className="signup-child3"  ></div>
  <b onClick={onRectangle5Click} className="login3">Login</b>
  <div className="signup-child4" />
  <b className="signup2">Signup</b>
  <div className="rectangle-group" onClick={onGroupContainerClick}>
    <div className="group-item" />
    <b className="signup3" onClick={handleSignup}>
      Signup
    </b>
  </div>
  <div className="already-have-an-container" onClick={onAlreadyHaveAnClick}>
    <span>{`Already have an account? `}</span>
    <i className="login4">Login</i>
  </div>
  <img className="image-2-icon" alt="" src="/image-2@2x.png" />
</div>
  );
};

export default Signup;
