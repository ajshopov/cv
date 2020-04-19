import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';

const NotFoundPage = () => (
  <main>
    <Header />
    <Container>
      Lost? <Link to="/">Go Home!</Link> The page you're looking for doesn't exist.
    </Container>
  </main>
);

export default NotFoundPage;