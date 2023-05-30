const express = require('express');
require('./db/conn');

const app = express();
const router = require('./routers/customer');
const auth = require('./routers/authentication');
const verifyToekn = require('./middlewares/verifyToekn');

var cors = require('cors')

// apply middleware to all auth routes 
auth.use(verifyToekn);

app.use(express.json());
app.use(cors())
app.use(router);
app.use(auth);


app.listen(2000, () => {
    console.log("server listen")
})
