import Axios from "axios";
import React, {useState, useEffect} from "react";
// import CreatePostForm from "../components/CreatePostForm";
import {Col, Row, Container} from "../components/Grid";


function Journal () {
    const [title, setTitle] = useState();
    const [currentDate, setCurrentDate] = useState();
    const [body, setBody] = useState();
    
    useEffect(() => {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getYear(); //Current Year
        

        setCurrentDate(
            month + '/' + date + '/' + year
            
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        Axios.post(
            "/api/post",
            {
                title: title,
                body: body
            }
        ).then((res) => console.log(res));
    };

    return(
        <div>
            
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1>Journal Entry</h1>
                        <a className="button primary" href="/post/new">New Post</a>

                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-6 cell">
                                <label>Title
                                <input type="text" placeholder="" onChange={(e) => setTitle(e.target.value)}></input>
                                </label>
                            </div>
                            <div className="medium-6 cell">
                                <label>Date
                                <text>{currentDate}</text>
                                </label>
                            </div>
                                <textarea placeholder="" onChange={(e) => setBody(e.target.value)}></textarea>
                                <div>
                                <a className="button primary"  href="/journal" onClick= {sendPost}>Save</a>
                                <a className="button success" href="/journal">Edit</a>
                                <a className="button alert" href="/journal">Delete</a>
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