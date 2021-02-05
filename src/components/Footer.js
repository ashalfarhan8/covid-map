import React from "react";
import Container from "./Container";
import { useSiteMetadata } from "hooks";
const Footer = () => {
  const { authorName, authorUrl } = useSiteMetadata();
  return (
    <footer>
      <Container>
        <p>
          &copy; {new Date().getFullYear()},{" "}
          <a href={authorUrl}>{authorName}</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
