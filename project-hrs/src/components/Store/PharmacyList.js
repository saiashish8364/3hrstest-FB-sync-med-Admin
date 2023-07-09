import { useContext } from "react";
import Context from "../Context/Context";

const PharmacyList = ({ list }) => {
  const ctx = useContext(Context);
  const addCartHandler = async (e) => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/47cb1a55b2644284a269e6b7f43e7358/pharmacy"
      );
      const data = await response.json();
      const index = data.findIndex(
        (item) => Number(item.id) === Number(e.target.id)
      );
      const med = data[index];
      ctx.addItems(med);
    } catch (error) {
      console.log(error);
    }

    try {
      const response1 = await fetch(
        "https://crudcrud.com/api/47cb1a55b2644284a269e6b7f43e7358/pharmacy"
      );
      const data = await response1.json();
      const index = data.findIndex(
        (item) => Number(item.id) === Number(e.target.id)
      );
      const med = data[index];

      const response = await fetch(
        "https://crudcrud.com/api/f6786d8be8944cc08cd00c7ff96c70a1/cartitems",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: med.id,
            name: med.name,
            description: med.description,
            price: med.price,
          }),
        }
      );
      if (response.ok) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {list.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <button id={item.id} onClick={addCartHandler}>
                Add to Cart
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default PharmacyList;
