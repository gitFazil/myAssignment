import React, { useState } from "react";
import Item from "./Item";
import "./localStorage.css";
var players = [
  {
    productTitle: String,
    productCat: String,
    productContent: String,
  },
];
var cat = ["Technology", "Fashion"];

export default function LocalStorage() {
  const localSubmit = () => {
    players = [
      ...players,
      {
        productTitle: inputTitle,
        productCat: inputCat,
        productContent: inputContent,
      },
    ];
    localStorage.setItem("players", JSON.stringify(players));
    setisPost(JSON.parse(localStorage.getItem("players")));
    setInputContent("");
    setInputTitle("");
  };
  const [isPost, setisPost] = useState(
    JSON.parse(localStorage.getItem("players"))
  );
  const [inputTitle, setInputTitle] = useState("");
  const [inputCat, setInputCat] = useState("Technology");
  const [inputContent, setInputContent] = useState("");
  return (
    <div>
      <div className="localForm">
        <input
          id="input-title"
          name="input-title"
          placeholder="title name"
          type="text"
          autoComplete="off"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <select
          id="input-cat"
          value={inputCat}
          onChange={(e) => setInputCat(e.target.value)}
        >
          {cat.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <textarea
          id="input-content"
          type="text"
          name="input-content"
          placeholder="Write something here....."
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <button class="small-btn" onClick={localSubmit}>
          Post
        </button>
      </div>

      {isPost
        .filter((item) => item.productTitle >= "a")
        .map((i) => (
          <Item item={i} />
        ))}
    </div>
  );
}
