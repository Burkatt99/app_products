import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class ListProduct extends Component {
  sortDate = () => {
    const recent = this.props.expense;
    recent.sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  };
  render() {
    this.sortDate();
    return (
      <div className="expenseBlock">
        <table>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Product</th>
          </tr>
          {this.props.expense.map((el) => {
            return (
              <tr key={el.id}>
                <th>{el.date}</th>
                <th>{el.price}</th>
                <th>{el.currency}</th>
                <th>{el.product}</th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expense: state.todo,
  };
}
export default connect(mapStateToProps)(ListProduct);
