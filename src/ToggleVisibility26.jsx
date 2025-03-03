import { useState } from "react";

const ToggleVisibility26 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleText = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleText}>
                {isVisible ? "Ukryj tekst" : "Pokaż tekst"}
            </button>
            {isVisible && <p>To jest widoczny tekst!</p>}
        </div>
    );
};

export default ToggleVisibility26;