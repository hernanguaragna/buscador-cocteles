import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! la pagina que buscas no esta disponible.</h1>
        <Link to="/" className="btn btn-primary">
          volver
        </Link>
      </div>
    </section>
  );
}
