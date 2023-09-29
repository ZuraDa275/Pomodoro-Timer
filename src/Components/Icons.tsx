import { VscDebugStart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { SessionType } from "../App";

interface IconProps {
  setReset: () => void;
  setTimerSecs: () => void;
  setHasStarted: () => void;
  hasStarted: boolean;
  sessionType: SessionType;
}

export const Icons = ({
  setReset,
  setTimerSecs,
  setHasStarted,
  hasStarted,
  sessionType,
}: IconProps) => {
  return (
    <div className="flex">
      {sessionType !== "Completed" &&
        (hasStarted ? (
          <AiOutlinePause
            className="text-7xl text-[#EF6D51] cursor-pointer"
            onClick={setHasStarted}
          />
        ) : (
          <VscDebugStart
            className="text-7xl text-[#EF6D51] cursor-pointer"
            onClick={setHasStarted}
          />
        ))}
      <BiReset
        className={`text-7xl text-[#EF6D51] cursor-pointer ml-auto ${
          hasStarted ? "pointer-events-none" : ""
        } ${sessionType === "Completed" ? "ml-[40%]" : ""}`}
        onClick={() => {
          setReset();
          setTimerSecs();
        }}
      />
    </div>
  );
};
