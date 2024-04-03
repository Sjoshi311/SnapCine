
// import { React, useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleUsernameChange = useCallback((event) => {
//     setUsername(event.target.value);
//   }, []);

//   const handlePasswordChange = useCallback((event) => {
//     setPassword(event.target.value);
//   }, []);



//   useEffect(() => {
//     const scrollAnimElements = document.querySelectorAll(
//       "[data-animate-on-scroll]"
//     );
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting || entry.intersectionRatio > 0) {
//             const targetElement = entry.target;
//             targetElement.classList.add("animate");
//             observer.unobserve(targetElement);
//           }
//         }
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     for (let i = 0; i < scrollAnimElements.length; i++) {
//       observer.observe(scrollAnimElements[i]);
//     }

//     return () => {
//       for (let i = 0; i < scrollAnimElements.length; i++) {
//         observer.unobserve(scrollAnimElements[i]);
//       }
//     };
//   }, []);

//   const handleSubmit = useCallback(async (event) => {
//     event.preventDefault();
    
//     // Make a POST request to your backend for login
//     try {
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
      
//       if (!response.ok) {
//         throw new Error("Invalid credentials");
//       }
      
//       // Redirect to home page on successful login
//       navigate("/home");
//     } catch (error) {
//       setError(error.message);
//     }
//   }, [navigate, username, password]);

//   const onDontHaveAnClick = useCallback(() => {
//     // Redirect to the URL of the signup project running on localhost
//     window.location.href = "http://localhost:4000";
//   }, []);

//   const onRectangle4Click = useCallback(() => {
//     window.location.href = "http://localhost:4000";
//   }, []);

//   const onGroupContainerClick = useCallback(() => {
//     navigate("/home");
//   }, [navigate]);

//   return (
//     <div className="login" data-animate-on-scroll>
      
//       <div className="login-item" />
      
     
//       <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
//         <span>{`Don’t have an account? `}</span>
//         <i className="sign-up">Sign up</i>
//       </div>
//       <form onSubmit={handleSubmit}>
//       <div className="email">Email</div>
//       <div className="input-container">
//       <input
//               type="email"
//               value={username}
//               onChange={handleUsernameChange}
//               placeholder="Username"
//             />
//       </div>
//     <div className="password1">Password</div>
//       <div className="input-container">
//       <input
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//               placeholder="Password"
//             />
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <button type="submit" className="login2">Login</button>

      
//       <img className="image-1-icon" alt="" src="/image-1@2x.png" />
//       <b className="login1">Login</b>
//       <div className="rectangle-parent" onClick={onGroupContainerClick}>
       
        
//       </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import { React, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    // Make a POST request to your backend for login
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      
      // Redirect to home page on successful login
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  }, [navigate, username, password]);

  const onDontHaveAnClick = useCallback(() => {
    // Redirect to the URL of the signup project running on localhost
    window.location.href = "http://localhost:4000";
  }, []);

  const onRectangle4Click = useCallback(() => {
    window.location.href = "http://localhost:4000";
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="login" data-animate-on-scroll>
      
      <div className="login-item" />
      
     
      <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account? `}</span>
        <i className="sign-up">Sign up</i>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="email">Email</div>
        <div className="input-container">
          <input
            type="email"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
        </div>
        <div className="password1">Password</div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login2">Login</button>
      </form>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <b className="login1">Login</b>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        
      </div>
    </div>
  );
};

export default Login;
