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
    var id = req.params.id;
    console.log('response id:', id);

    res.send(JSON.stringify(data));
  }
};

export { ResponseController };
