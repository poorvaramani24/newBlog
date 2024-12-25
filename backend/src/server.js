import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', function(req, res) {
    res.send('Hello from GET endpoint!!');
});

app.get('/hello/:name', function(req, res) {
    res.send('Hello, '+ req.params.name +' from GET endpoint!!');
});

app.post('/hello', function(req, res) {
    res.send('Hello, ' +req.body.name +' from POST endpoint!');
});

app.listen(8000, function(){
    console.log('server is listening on port 8000');
});