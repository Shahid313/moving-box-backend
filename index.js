const express = require('express');
const app = express();
const cors = require('cors');
const upload = require('express-fileupload');
app.use(express.static("public"));
app.use(cors());
app.use(upload());
app.use(express.json());

const user = require('./routes/apis/user')
app.use('/apis/user',user)

const company = require('./routes/apis/company')
app.use('/apis/company',company)

const invoice = require('./routes/apis/invoice')
app.use('/apis/invoice',invoice)


const maintenance_history = require('./routes/apis/maintenanceHistory')
app.use('/apis/maintenance_history',maintenance_history)


const tokens = require('./routes/apis/tokens')
app.use('/apis/tokens',tokens)

const port  = 5000;

app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});

