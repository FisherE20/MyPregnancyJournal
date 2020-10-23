import React from "react";
// import CreatePostForm from "../components/CreatePostForm";
import {Col, Row, Container} from "../components/Grid";
import PostsList from "../components/PostsList";

function Journal () {
    return(
        <div>
            
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <PostsList />
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Journal;