import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_ITEM_EXPENSE,
  DELETE_ITEM_EXPENSE,
} from "../../constatns/todo_type";
import "./main.css";
import ListProduct from "../list";

class AddExpense extends Component {
  state = {
    date: "",
    price: "",
    currency: "",
    product: "",
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  changeDate = (e) => {
    this.setState({ date: e.target.value });
  };
  changePrice = (e) => {
    this.setState({ price: e.target.value });
  };
  changeCurrency = (e) => {
    this.setState({ currency: e.target.value });
  };
  changeProducts = (e) => {
    this.setState({ product: e.target.value });
  };
  addNewExpense = () => {
    this.props.dispatch({
      type: "ADD_ITEM_EXPENSE",
      date: this.state.date,
      price: this.state.price,
      currency: this.state.currency,
      product: this.state.product,
    });
    this.setState({
      date: "",
      price: "",
      currency: "",
      product: "",
    });
  };
  deleteExpense = () => {
    this.props.dispatch({
      type: "DELETE_ITEM_EXPENSE",
      date: this.state.date,
    });
    this.setState({
      date: "",
      price: "",
      currency: "",
      product: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="addForm">
          <input
            type="date"
            value={this.state.date}
            onChange={this.changeDate}
            placeholder="Write date expense..."
          ></input>
          <input
            type="number"
            value={this.state.price}
            onChange={this.changePrice}
            placeholder="Write price..."
          ></input>
          <input
            type="text"
            value={this.state.currency}
            onChange={this.changeCurrency}
            placeholder="Write currency..."
          ></input>
          <input
            type="text"
            value={this.state.product}
            onChange={this.changeProducts}
            placeholder="Write product..."
          ></input>
          <button onClick={this.addNewExpense}>Add</button>
          <button onClick={this.deleteExpense}>Delete</button>
        </form>
        <ListProduct />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    expense: state.todo,
  };
}

export default connect(mapStateToProps)(AddExpense);
