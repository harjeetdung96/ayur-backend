const express = require('express');
require('./db/conn');

const app = express();
const router = require('./routers/customer');
const auth = require('./routers/authentication');


app.use(express.json());
app.use(router);
app.use(auth);

app.listen(2000, () => {
    console.log("server listen")
})
