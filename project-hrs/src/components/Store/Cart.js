import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={openModal}>Cart</button>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};
export default Cart;
