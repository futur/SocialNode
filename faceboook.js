
var FB_URI = 'https://graph.facebook.com/search?'
	, qs = require('querystring');	

var getFBRequest = exports.module = function(query,type){
	var fbQuery = {};
	fbQuery.q=query; 
	fbQuery.type=type;
	fbQuery.access_token='AAAAAAITEghMBAJaJrEZCZA965Nh8tZBb3VWMEpSg4foZBrXihBZBhnz53Kq9ZA7T1xQHp6y58ZBQp0ZBSfeCJDQugZB3vDAdAri8lefCMP2UoNAl2wISKVay8';
	fbQuery.limit=10;
	var req = FB_URI + qs.stringify(fbQuery);
	console.log(req);
}
getFBRequest('mobile', 'page');

