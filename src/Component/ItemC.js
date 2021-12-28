import React, { Component } from "react";
import "./item.css";

const productsTitle = [
  { name: "Levi's", cat: "Jeans" },
  { name: "Lee", cat: "Jeans" },
  { name: "Gucci", cat: "Jeans" },
  { name: "Calvin Klein", cat: "Jeans" },
  { name: "Asus Rog", cat: "Laptop" },
  { name: "MacBook Air", cat: "Laptop" },
  { name: "Acer Nitro", cat: "Laptop" },
  { name: "Lenovo Thinkpad", cat: "Laptop" },
  { name: "Samsung Galaxy", cat: "Mobile" },
  { name: "Apple X", cat: "Mobile" },
  { name: "Realme", cat: "Mobile" },
  { name: "Oppo", cat: "Mobile" },
];
export default class ItemC extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.item.productTitle, item: this.props.item };
  }

  render() {
    const { productTitle, productCat, productContent, productPrice, img } =
      this.state.item;
    return (
      <div>
        <div className="blog-container">
          <li className="card">
            <div>
              <img src={img} alt="post" />
              <h3>
                Price :<span>₹{productPrice}</span>
              </h3>
            </div>

            <div className="container">
              <h2>{productTitle}</h2>
              <h5>
                Category: <i>{productCat}</i>
              </h5>
              <p>{productContent}</p>
            </div>
          </li>
          <li className="card form">
            <select
              style={{ padding: "5px", margin: "5px" }}
              value={this.state.val}
              onChange={(e) => this.setState({ val: e.target.value })}
            >
              {productsTitle
                .filter((title) => title.cat === productCat)
                .map((filteredTitle) => (
                  <option value={filteredTitle.name}>
                    {filteredTitle.name}
                  </option>
                ))}
            </select>
            <button
              style={{ padding: "5px", margin: "5px" }}
              onClick={() =>
                this.setState({
                  item: {
                    ...this.state.item,
                    productTitle: this.state.val,
                  },
                })
              }
            >
              Change Title
            </button>
          </li>
        </div>
      </div>
    );
  }
}
