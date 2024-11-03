import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import upload from "../../lib/upload"; 
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; 
import './Signup.css'; 

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!username || !email || !password) {
      toast.warn("Please enter inputs!");
      setLoading(false);
      return;
    }
    if (!avatar.file) {
      toast.warn("Please upload an avatar!");
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      toast.success("Account created! You can login now!");
      navigate("/login"); 
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-container">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="signup-part flex justify-center items-center">
      <div className="signup-container">
        <h1 className="text-3xl font-bold mb-6">Flare</h1>
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-4 w-full">
        <div className="flex justify-normal">
        <label htmlFor="file" className="file-upload-label">
          <img src={avatar.url || "./avatar.png"} alt="Avatar Preview" className="avatar-preview" />
           Upload an image
        </label>
        </div>  
        <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="input-field"
          />
          <input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input-field"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input-field"
          />
          <button disabled={loading} className="signup-button">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="link-signup">Sign in</a>
        </p>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
};

export default Signup;
