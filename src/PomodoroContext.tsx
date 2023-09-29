import { createContext, useState, useContext } from "react";

interface PomodoroContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const PomodoroContext = createContext<PomodoroContextType>({
  user: "",
  setUser: () => {},
});

interface ContextProps {
  children: JSX.Element;
}

export const PomodoroContextProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState();
  return (
    <PomodoroContext.Provider value={{ user, setUser }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoroContext = () => {
  return useContext(PomodoroContext);
};
