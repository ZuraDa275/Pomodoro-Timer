interface TimerProps {
  timerMins: number;
  timerSecs: number;
}

export const Timer = ({ timerMins, timerSecs }: TimerProps) => {
  return (
    <p className="text-[#EF6D51] text-9xl font-[Mooli] mb-10 mt-10">
      {String(timerMins).padStart(2, "0")}:{String(timerSecs).padStart(2, "0")}
    </p>
  );
};
