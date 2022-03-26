import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function ItemListContainer() {

    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2>Aquí irán los productos</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}