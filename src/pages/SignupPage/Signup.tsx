import "./Signup.css";
import Image from "../../assets/wallet.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); 

  const handleSignup = (e:React.FormEvent) => {
    e.preventDefault()
    navigate("/home"); 
  };

  return (
    <div className="main-container">
      <div className="container">
        <img className="image" src={Image} />
        <h1 className="header">Personal Expense</h1>
        <h1 className="header-second">Tracker</h1>
        <h2 className="signin"> Sign In </h2>
        <p className="signup">
          Not registered yet ? <span>Sign up</span>
        </p>

        <hr className="line" />

        <form className="form" onSubmit={handleSignup}>
          <div className="email-container">
            <label>Email</label>
            <input type="email" placeholder="Email address" className="input" />
          </div>
          <div className="email-container">
            <label>Password</label>
            <input type="password" placeholder="Password" className="input" />
          </div>
          <button className="button">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
