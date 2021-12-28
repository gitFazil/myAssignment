import { useState } from "react";
import "./StickyNote.css";
var data = [
  {
    title: "useState",
    content:
      "Syntax: The first element is the initial state and the second one is a function that is used for updating the state.  const [state, setState] = useState(initialstate)",
    createdAt: "12/26/2021, 9:16:47 PM",
    color: "lightblue",
  },
  {
    title: "useEffect",
    content:
      "The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)",
    createdAt: "12/26/2021, 9:16:40 PM",
    color: "cyan",
  },
  {
    title: "useContext",
    content:
      "React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.",
    createdAt: "12/26/2021, 9:16:35 PM",
    color: "black",
  },
];

function StickyNote() {
  const [title, setTitle] = useState("undefined");
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);
  const [nData, setNdata] = useState(data);
  const [color, setColor] = useState("#aee");

  const submit = () => {
    let colour = "#" + Math.floor(Math.random() * 1000000);
    const date = new Date();
    let createdAt = date.toLocaleString();
    let myData = data.push({
      title: title,
      content: content,
      createdAt: createdAt,
      color: colour,
    });
    setNdata(myData);
  };
  const myColor = {
    backgroundColor: color,
  };
  return (
    <div style={{ textAlign: "center", display: "flex" }}>
      <div className="sidebar">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <a
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() => {
                        setIndex(i);
                        setColor(item.color);
                      }}
                    >
                      {item.title}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="main">
        <div className="form">
          <input
            className="sticky-input"
            id="title"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="sticky-textarea"
            id="content"
            name="content"
            placeholder="Note...."
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="btn-sticky" onClick={submit}>
            submit
          </button>
        </div>
        <div className="view-area">
          {data.length !== 0 && (
            <div style={myColor} className="sticky-card">
              <h1>{data[index].title}</h1>
              <p>{data[index].content}</p>
              <p style={{ marginTop: "20px", fontSize: "10px", color: "gray" }}>
                {data[index].createdAt}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StickyNote;
