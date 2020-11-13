import React from "react";
import { Link } from "react-router-dom";

import { EmptyLayout } from "../../../components";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Error500 = () => (
  <EmptyLayout>
    <EmptyLayout.Section center>
      {/* START Header */}
      <HeaderAuth title="Error 500" text="Algo salió mal. Necesitamos darle de comer a los hamsters"/>
      {/* END Header */}
      {/* START Bottom Links */}
      <div className="d-flex mb-5">
        <Link to="/">Regresar</Link>
        <Link to="/" className="ml-auto text-decoration-none">
          Soporte
        </Link>
      </div>
      {/* END Bottom Links */}
      {/* START Footer */}
      <FooterAuth className="pt-5 text-center" />
      {/* END Footer */}
    </EmptyLayout.Section>
  </EmptyLayout>
);

export default Error500;
