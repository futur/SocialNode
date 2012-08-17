var restify = require('restify')
	, server = restify.createServer()
	, GET_PATH = '/social/get/:network/:query';

function searchV1(req,res,next){
	res.send('Hello world' + req.params.network + 'Query : '+ req.params.query);
	if (req.params.network === 'fb') {
		console.log('Request for FB Search');
	};
	if (req.params.network === 'tw') {
		console.log('Request for Twitter Search');
	};
	if (req.params.network === 'lk') {
		console.log('Request for Linked In Search');
	};
	return next();
}

/* Version support, when platform matures the versioning shall be handled wisely. 
	server.get({path:GET_PATH, version:'2.0'},searchV2); At the same time the previous version shall be server with the depreciation time frame.
*/
server.get({path:GET_PATH, version:'1.0.0'},searchV1);

/*
	Capture all other anonymous requests here and return .
*/
server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, function(req, res, next) {
  console.log(req.params[0]);
  console.log(req.params[1]);
  res.send('We dont accept anonymous requests');
  return;
});

server.listen(1337);






