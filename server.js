const app = require('express')()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/webhooks/inbound-message', (req, res) => {  
  if(req.body['message']['content']['type'] == 'unsupported'){
    console.log("Received an unsupported message from " 
      + req.body['from']['number']);
    // add the rest of your unsupported logic here.
  }
  else{
    console.log(req.body['message']['content'])
  }
  res.status(200).end();
});

app.listen(5000)