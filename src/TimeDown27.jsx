import React, {useState, useEffect} from "react";


const TimerDown27 = ({initialSeconds = 10}) => {
    const [second, setSecond] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && second > 0) {
            const interval =
                setInterval(()=>{
                    setSecond((prev) => prev - 1);
                }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning, second]);

    const startTimer = () => {
        setSecond(initialSeconds);
        setIsRunning(true);
    };
    return (
        <div>
            <p>Pozostały czas: {second} sekund.</p>
            <button onClick={startTimer}
                    disabled={isRunning}> Kliknij by zacząć ciupować🫨</button>
        </div>
    );
};
export default TimerDown27;
