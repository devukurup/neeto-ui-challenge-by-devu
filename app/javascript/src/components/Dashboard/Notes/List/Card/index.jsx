import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ title, description, createdAt }) => (
  <div className="neeto-ui-shadow-xs flex flex-col space-y-3 border p-5">
    <Header title={title} />
    <Body description={description} />
    <hr />
    <Footer createdAt={createdAt} />
  </div>
);

export default Card;
