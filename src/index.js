const express = require('express');

const { serverConfig } = require('./config/index');
const apiRoutes = require('./routes')

const app = express();

app.use('/api', apiRoutes)






app.listen(serverConfig.PORT, () => {
    console.log(`Server Started Succesfully on PORT : ${serverConfig.PORT}`);
});