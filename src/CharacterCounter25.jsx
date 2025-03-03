import { useState } from "react";

const CharacterCounter25 = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
      <textarea
          value={text}
          onChange={handleChange}
          placeholder="Wpisz coś..."
          rows="4"
          cols="50"
      />
            <p>Liczba znaków: {text.length}</p>
        </div>
    );
};

export default CharacterCounter25;