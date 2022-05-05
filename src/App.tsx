import "./styles.css";
import React, { useState } from "react";
import { useAutoResize } from "./hooks/index";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInput = (value: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(value);
  };

  const handleSubmit = (e: React.FromEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemList([...itemList, inputText]);
    setInputText("");
  };

  const textareaRef = useAutoResize(inputText);

  return (
    <div className="App">
      <h2>useRef</h2>
      <div>
        <div>
          {itemList.length == 0 ? (
            <h4>No Items</h4>
          ) : (
            <ul>
              {itemList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <textarea
              value={inputText}
              onChange={(e) => handleInput(e.target.value)}
              ref={textareaRef}
            />
            <button>登録</button>
          </form>
        </div>
      </div>
    </div>
  );
}
