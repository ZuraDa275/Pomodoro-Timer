import { useState, useEffect } from "react";
import { Timer } from "./Components/Timer";
import { Icons } from "./Components/Icons";
import { Nav } from "./Components/Nav";
import { usePomodoroContext } from "./PomodoroContext";
import { Intro } from "./Components/Intro";

export type SessionType = "Session" | "Break" | "Completed";

function App() {
  const [timerMins, setTimerMins] = useState(25);
  const [timerSecs, setTimerSecs] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>("Session");
  const { user, setUser } = usePomodoroContext();

  useEffect(() => {
    let intervalSecs: any;

    if (hasStarted) {
      intervalSecs = setInterval(() => {
        if (timerMins === 0 && timerSecs === 0) {
          if (sessionType === "Session") {
            setSessionType("Break");
            setTimerMins(5);
          } else if (sessionType === "Break") {
            setHasStarted(false);
            setSessionType("Completed");
          }
        } else {
          if (timerSecs === 0) {
            setTimerMins(timerMins - 1);
            setTimerSecs(59);
          } else {
            setTimerSecs(timerSecs - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalSecs);
    }

    return () => clearInterval(intervalSecs);
  }, [hasStarted, timerMins, timerSecs, sessionType]);

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");

    if (signedInUser) {
      const parsedUser = JSON.parse(signedInUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <>
      <nav className="absolute top-0 right-0 flex w-full">
        <Nav />
      </nav>
      {user ? (
        <>
          <p className="text-[#EF6D51] text-5xl font-[Mooli] text-center">
            {sessionType}
          </p>
          <Timer timerMins={timerMins} timerSecs={timerSecs} />
          <Icons
            setReset={() => {
              setTimerMins(25);
              setSessionType("Session");
            }}
            setTimerSecs={() => setTimerSecs(0)}
            setHasStarted={() => setHasStarted(!hasStarted)}
            hasStarted={hasStarted}
            sessionType={sessionType}
          />
        </>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default App;
