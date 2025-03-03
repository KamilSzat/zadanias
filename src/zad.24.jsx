ClickTimer
import React, {useState, useEffect} from "react";


const ClickTimer = () => {
    const [secunds, setSecunds] = useState(0);
    const[lastClickTime, setLastClickTime]=useState(Date.now());
    useEffect(() => {
        const interval = setInterval(() => {
            setSecunds(Math.floor((Date.now() - lastClickTime) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [lastClickTime]);
    const handleClick = () => {
        setLastClickTime(Date.now());
        setSecunds(0);
    }
    return (
        <div>
            <p>Mineło {secunds} sekund od ostatniego kliknięcia.</p>
            <button onClick={handleClick}> Kliknij ciupę🫨</button>
        </div>

    );
};
export default ClickTimer;
