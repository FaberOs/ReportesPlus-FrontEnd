import { useState } from 'react';
import React from "react";
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveTable from "./ResponsiveTable.jsx";

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Container classname="py-4">
      <Row className="justify-content-center">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          
        >
          <Tab eventKey="home" title="INGRESADOS">
            <ResponsiveTable/>
          </Tab>
          <Tab eventKey="profile" title="GASTOS">
            <ResponsiveTable/>
          </Tab>
          
        </Tabs>
      </Row>
    </Container>
    
  );
}

export default ControlledTabs;