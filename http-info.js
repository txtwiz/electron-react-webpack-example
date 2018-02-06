/*global process,setInterval,require*/


(function withNode() {
  const r2 = require('r2')
    , url = 'http://localhost:9000/000/info'
    , getLocation = async urlToSend => {
      try {
        const response = await r2(urlToSend).json;

        process.send(response);
      } catch (error) {
        process.send({ 'statusCode': 500, 'error': 'Not reachable' });
      }
    }
    , exec = () => {
      setInterval(() => {
        getLocation(url);
      }, 1500);
    };

  exec();
}());
