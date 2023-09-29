import { usePomodoroContext } from "../PomodoroContext";
import auth from "../firebaseConfig";
import { GoogleSignOutButton } from "./GoogleSignOutButton";
import { useAuthToast } from "../Hooks/useAuthToast";
import { Avatar } from "@chakra-ui/react";

export const SignOut = () => {
  const { user, setUser } = usePomodoroContext();
  const { successToast, errorToast } = useAuthToast();
  const handleGoogleSignOut = async () => {
    try {
      await auth.signOut();
      setUser("");
      localStorage.clear();
      successToast("Google Sign-Out was successful!");
    } catch (error) {
      console.log(error);
      errorToast("Sign out error");
    }
  };

  return (
    <div className="flex w-full">
      <Avatar
        name={user?.displayName}
        src={user?.photoURL}
        className="self-center ml-10"
        size={"lg"}
      />
      <div className="ml-auto">
        <GoogleSignOutButton handleGoogleSignOut={handleGoogleSignOut} />
      </div>
    </div>
  );
};
