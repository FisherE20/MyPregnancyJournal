

const router = express.Router();

router.get('/api/hello', (req,res,next) => {
    res.json('World');
});

let mailgun = mailgunloader({
    apiKey: 'key-696047c12dd5e37a41102745fc72f6f4-53c13666-de69d7c3',
    domain: 'sandbox3a9741201d8a440cb4dbb42f35c4829c.mailgun.org'
});

const sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

router.post('/api/contact', async (req, res, next) => {
    try{
        await sendEmail('flybirdie85@gmail.com', req.body.email, req.body.subject, req.body.message);
        res.send('Email sent!')
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

export default router;