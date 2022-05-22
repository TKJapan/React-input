import React, { useState } from "react"; 

export const InputTitle = () => {
    const [inputTitleValue, setInputTitleValue] = useState("");

    const [title, setTitle] = useState("React");

    const handleChange = (e) => setInputTitleValue(e.target.value);

    const handleClick = () => {
        setTitle(inputTitleValue);
        setInputTitleValue("");
    }


return (
    <div className="App">
        <h1>set title is {title}</h1>
        <input type="text" value={inputTitleValue} onChange={handleChange} />

        <input type="button" value="入力" onClick={handleClick} />
    </div>
);
}
