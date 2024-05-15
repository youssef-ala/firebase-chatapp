import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase-config";
import Cookies from "universal-cookie";
import "../styles/Auth.css";
const cookies = new Cookies();
const Auth = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="auth">
        <p className="paragraph"> Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}> Sign In With Google</button>
      </div>
    </div>
  );
};

export default Auth;
