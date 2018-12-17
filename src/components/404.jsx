import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <div>404 not found</div>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NoMatch;
