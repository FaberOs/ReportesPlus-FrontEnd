import React from "react";
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Layout/StyleTabla.css';
import ResponsiveTable from "./ResponsiveTable.jsx";

const BsTabs = () => {
    return(
        <Container classname="py-4">
            <Row className="justify-content-center">
                <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                    <Tab eventKey="tab-1" title="Tab 1">
                        <ResponsiveTable/>
                    </Tab>
                    <Tab eventKey="tab-2" title="Tab 2">
                        <ResponsiveTable/>
                    </Tab>
                    <Tab eventKey="tab-3" title="Tab 3">
                        <ResponsiveTable/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
        
    );

};

export default BsTabs;