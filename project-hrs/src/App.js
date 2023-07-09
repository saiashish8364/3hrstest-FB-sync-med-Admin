import React from "react";

import "./App.css";
import Navigation from "./components/Store/Navigation";
import MedicineForm from "./components/Store/MedicineForm";

function App() {
  return (
    <React.Fragment>
      <section>
        <Navigation />
      </section>
      <section>
        <MedicineForm />
      </section>
    </React.Fragment>
  );
}

export default App;
