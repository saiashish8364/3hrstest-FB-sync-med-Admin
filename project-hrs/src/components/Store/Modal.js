import { useContext } from "react";
import Context from "../Context/Context";

const Modal = ({ isOpen, closeModal }) => {
  const ctx = useContext(Context);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <section>
          <table style={{ width: "125%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {ctx.items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        placeholder={item.quantity}
                        style={{ width: "20%" }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
