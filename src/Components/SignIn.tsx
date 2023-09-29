import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebaseConfig";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { usePomodoroContext } from "../PomodoroContext";
import { useAuthToast } from "../Hooks/useAuthToast";

export const SignIn = () => {
  const { successToast, errorToast } = useAuthToast();
  const { setUser } = usePomodoroContext();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      successToast("Google Sign-In was successful!");
    } catch (error) {
      console.log(error);
      errorToast("Google Sign-In failed");
    }
  };
  return (
    <div className="ml-auto">
      <GoogleSignInButton handleGoogleSignIn={handleGoogleSignIn} />
    </div>
  );
};
