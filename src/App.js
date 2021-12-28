import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemC from "./Component/ItemC";
import LocalStorage from "./Component/LocalStorage";
import StickyNote from "./Component/StickyNote";
import Weather from "./Component/Weather";

const users = [
  {
    name: "Fazil Khan",
    username: "fazilkhan",
    password: "fazilkhan",
  },
  {
    name: "md azad",
    username: "azad",
    password: "azad",
  },
];

const products = [
  {
    productTitle: "Levis",
    productCat: "Jeans",
    productPrice: "2500",
    img: "https://images.sportsdirect.com/images/imgzoom/64/64008683_xxl_a3.jpg",
    productContent:
      "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German immigrant",
  },
  {
    productTitle: "Samsung Galaxy",
    productCat: "Mobile",
    productPrice: "25000",
    img: "https://sa.kapamilya.com/absnews/abscbnnews/media/2019/news/02/21/phone3.jpg",
    productContent:
      "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German immigrant",
  },
  {
    productTitle: "MacBook Air",
    productCat: "Laptop",
    productPrice: "90000",
    img: "https://photos.smugmug.com/Other/For-Sale/i-XQ7GVgv/0/5e9bc81c/L/DSC02851-L.jpg",
    productContent:
      "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German immigrant ",
  },
];
var searchIndex = "";
function Apps() {
  return (
    <>
      <LocalStorage />

      {products.map((item) => (
        <ItemC item={item} />
      ))}
    </>
  );
}
function App() {
  const logout = () => {
    setislogin(false);
    setUsername("");
    setPassword("");
  };

  const login = () => {
    searchIndex = users.findIndex((user) => user.username === username);
    if (searchIndex == -1) {
      setloginErr(true);
    } else {
      if (
        password === users[searchIndex].password &&
        username === users[searchIndex].username
      ) {
        let first = [];
        localStorage.setItem("players", JSON.stringify(first));
        setislogin(true);
      } else {
        setloginErr(true);
      }
    }
  };
  const [islogin, setislogin] = useState(false);
  const [loginErr, setloginErr] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      {islogin ? (
        <ul>
          <div className="header">
            <h2 className="textShadow">ExcelPTP Assignment</h2>
            <div>
              <ul style={{ display: "flex", justifyContent: "space-around" }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/weather">myWeather</Link>
                </li>
                <li>
                  <Link to="/notes">Sticky Notes</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Howdy <i>{users[searchIndex].name.toUpperCase()}</i>
              </p>
              <button onClick={logout}>Log-Out</button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Apps />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/notes" element={<StickyNote />} />
          </Routes>
        </ul>
      ) : (
        <div className="loginPage">
          <div className="loginForm center">
            <h2>Log In</h2>

            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Log-In</button>
            {loginErr ? (
              <p className="statusLogin">
                username and password is wrong
                <button className="cancel" onClick={() => setloginErr(false)}>
                  &#215;
                </button>
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
