import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    Lost? <Link to="/">Go Home!</Link> The page you're looking for doesn't exist.
  </div>
);

export default NotFoundPage;