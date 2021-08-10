import React from "react";
import FormStatus from "./FormStatus";
import ContactDetails from "./ContactDetails";
function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <FormStatus />
      </div>
      <div className="home-right">
        <ContactDetails />
      </div>
    </div>
  );
}

export default Home;
