import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Logo2 from '../images/Logo2.png';
import { Link } from "react-router-dom";  // Utilisation de Link pour le routage interne

const NavBar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            {/* Utilisation de Link pour naviguer vers la page d'accueil */}
            <Link to="/">
              <img className="logo" src={Logo2} alt="dfs" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                className="form-control"
                placeholder="search"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
