'use strict';

const app = require('express')();

import { ResponseController } from './controllers/response_controller';

app.get('/response/:id', ResponseController.show);


const server = app.listen(4000, () => {
  const host = server.address().address,
        port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
