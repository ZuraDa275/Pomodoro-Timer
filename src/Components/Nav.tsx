import { usePomodoroContext } from "../PomodoroContext";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";

export const Nav = () => {
  const { user } = usePomodoroContext();
  return <>{user ? <SignOut /> : <SignIn />}</>;
};
