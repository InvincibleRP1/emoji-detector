import React, { useState } from "react";

import "./styles.css";

var emojiStore = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Chips",
  "🧀": "Cheese",
  "🥚": "Egg",
  "🍿": "Popcorn",
  "🍦": "Icecream",
  "🍰": "Cake",
  "🍩": "Doughnut",
  "☕": "Coffee"
};

var emojisWeKnow = Object.keys(emojiStore);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    meaning = emojiStore[emoji];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiStore[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this value in our database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji-Detector</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Type here"
        style={{
          width: "50%",
          padding: "1rem",
          margin: "1rem",
          border: "2px solid black"
        }}
      ></input>

      <h2> The emoji is: {meaning} </h2>

      <h3>Emojis we know</h3>

      <div>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              style={{
                padding: "0.5rem",
                margin: "0.2rem",
                fontSize: "larger",
                cursor: "pointer"
              }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
