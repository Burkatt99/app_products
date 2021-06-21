import { ADD_ITEM_EXPENSE, DELETE_ITEM_EXPENSE } from "../constatns/todo_type";
const initialState = [
  {
    date: "2021-04-25",
    price: "35",
    currency: "USD",
    product: "Ice-cream",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_EXPENSE:
      return [
        ...state,
        {
          date: action.date,
          price: action.price,
          currency: action.currency,
          product: action.product,
        },
      ];
    case DELETE_ITEM_EXPENSE:
      return state.filter((el) => el.date !== action.date);
    default:
      return state;
  }
};
