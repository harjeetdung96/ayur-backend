const express = require('express');
require('./db/conn');

const app = express();
const router = require('./routers/customer');
const auth = require('./routers/authentication');
var cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(router);
app.use(auth);

app.listen(2000, () => {
    console.log("server listen")
})
