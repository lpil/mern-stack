'use strict';

var data = {
  id: 1,
  body: 'Hello world!',
  children: [
    {
      id: 2,
      body: 'Hello to you too',
    },
    {
      id: 3,
      body: 'Huh?',
    }
  ]
};

const ResponseController = {
  show: (req, res) => {
    var id = req.params.response;
    id = id + 1; // pretend we're doing something with the id

    res.send(JSON.stringify(data));
  }
};

export { ResponseController };
