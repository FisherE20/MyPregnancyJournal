import Axios from 'axios';
import React, {useState} from 'react';

function Contact () {
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    
    const sendEmail = (e) => {
        e.preventDefault();
        Axios.post(
            "/api/contact",
            {
                email: email,
                subject: subject,
                message: message
            }
        ).then((res) => console.log(res));

    };

    
        return(
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        <label>Email
                            <input type="text" placeholder=""></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>Subject
                            <input type="text" placeholder=""></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                    <label>
                    Message:
                    <textarea placeholder="None"></textarea>
                    </label>
                    </div>
                    
                </div>
                <div>
                    <button type="button" class="primary button">Send</button>
                </div>
            </div>
        </form>
                    
                
            
        )
    }

// interface IAppProps {

// }

// interface IAppState {
//     name: String,
//     subject: String,
//     message: string
// }

export default Contact;