import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.item.productTitle, item: this.props.item };
  }

  render() {
    const { productTitle, productCat, productContent } = this.state.item;
    return (
      <div>
        <div className="blog-container">
          <li style={{ width: "98%" }} className="card2">
            <div className="container">
              <h2>
                Title Name:{" "}
                {productTitle.charAt(0).toUpperCase() + productTitle.slice(1)}
              </h2>
              <h5>
                <i>
                  <b>Category: </b>
                  {productCat}
                </i>
              </h5>
              <p>
                <b>Content: </b>
                {productContent.charAt(0).toUpperCase() +
                  productContent.slice(1)}
              </p>
            </div>
          </li>
        </div>
      </div>
    );
  }
}
