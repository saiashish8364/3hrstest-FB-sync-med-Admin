import React, { useEffect, useReducer } from "react";
const Context = React.createContext({ items: [], addItems: (item) => {} });

const defaultCartState = {
  items: [],
};
const cartReducer = (state, action) => {
  if (action.type === "add") {
    let updatedItems;
    updatedItems = [
      ...state.items,
      {
        id: action.item.id,
        name: action.item.name,
        description: action.item.price,
        quantity: 1,
      },
    ];

    return {
      items: updatedItems,
    };
  }
};
export const ContextProvider = (props) => {
  const [cartState, dispenseCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const startFetch = async () => {
    try {
      const resp = await fetch(
        "https://crudcrud.com/api/f6786d8be8944cc08cd00c7ff96c70a1/cartitems"
      );
      if (resp.ok) {
        let data = await resp.json();
        data.forEach((element) => {
          dispenseCartAction({ type: "add", item: element });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startFetch();
  }, []);
  const addItemHandler = (med) => {
    dispenseCartAction({ type: "add", item: med });
  };
  const meds = {
    items: cartState.items,
    addItems: addItemHandler,
  };
  return <Context.Provider value={meds}>{props.children}</Context.Provider>;
};

export default Context;
