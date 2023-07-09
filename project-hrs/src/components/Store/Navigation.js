import Cart from "./Cart";

const Navigation = () => {
  return (
    <nav>
      <div
        style={{
          justifyContent: "space-between",
          color: "Black",
          display: "flex",
          marginLeft: "100px",
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Pharmacy Menu</p>
        <Cart />
      </div>
    </nav>
  );
};
export default Navigation;
