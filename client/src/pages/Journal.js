import React from "react";
// import CreatePostForm from "../components/CreatePostForm";
import {Col, Row, Container} from "../components/Grid";


function Journal () {
    return(
        <div>
            
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1>Journal Entry</h1>
                        <a class="button primary" href="/post/new">New Post</a>

                        <div class="card mt-4">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <div class="card-subtitle text-muted mb-2">
                                    Date
                                </div>
                                <div class="card-text mb-2">Description</div>
                                <div>
                                <a class="button primary" href="#">Save</a>
                                <a class="button success" href="#">Edit</a>
                                <a class="button alert" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Journal;