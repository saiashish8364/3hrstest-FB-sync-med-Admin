import { useEffect, useRef, useState } from "react";
import PharmacyList from "./PharmacyList";

const MedicineForm = () => {
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    fetchMedicine();
  }, []);

  const fetchMedicine = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/47cb1a55b2644284a269e6b7f43e7358/pharmacy"
      );
      const data = await response.json();
      setMedicine(data);
    } catch (error) {
      console.log(error);
    }
  };

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    let data = {
      id: Math.random(),
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      price: priceInputRef.current.value,
    };
    try {
      const response = await fetch(
        "https://crudcrud.com/api/47cb1a55b2644284a269e6b7f43e7358/pharmacy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setMedicine([...medicine, data]);
      } else {
        console.log("Failed to create user.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        style={{
          justifyContent: "center",
          fontSize: "1.5rem",
          marginLeft: "-55%",
        }}
        onSubmit={submitHandler}
      >
        <label>Name:</label>
        <input
          type="text"
          style={{ height: "30px", fontSize: "1.25rem" }}
          ref={nameInputRef}
        />
        <br />
        <br />
        <label>Description:</label>
        <input
          type="text"
          style={{ height: "30px", fontSize: "1.25rem" }}
          ref={descriptionInputRef}
        />
        <br />
        <br />
        <label>price:</label>
        <input
          type="number"
          style={{ height: "30px", fontSize: "1.25rem" }}
          ref={priceInputRef}
        />
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>

      <section>
        <table style={{ width: "90%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <PharmacyList list={medicine} />
          </tbody>
        </table>
      </section>
    </>
  );
};
export default MedicineForm;
