const express = require('express')
const app = express();

app.get('/', (request, response) => {
    response.status(200);
    response.set('content-type','text/html');
    response.send("Hello Express web farmwork")
})

app.listen(8080, () => console.log('Server Start.'))