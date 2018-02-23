var express = require('express');
var connection = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

//middleware gets here inthe middle of the process after the request before the response
//
//parse the request make sure that we convert it in the data into something after we request

router.use(bodyParser.urlencoded({ extended : false}));
router.use(bodyParser.json());


router.use((req, res, next) => {
    var now = new Date();
    var timestamp = now.toLocaleString('en-us',{
        hours: "numeric",
        minute: "numeric",
        hour12: true
    });

    console.log('you made a ${req.method} call!');
    console.log(' you made @ ${timestamp}');
//    console.log(req);    uncomment it to get the info
    next();
});

router.get('/:id', (req, res) => {
	// do a request for json data here
	// let currentCar = req.params.id;
	console.log(req.params.id);
    console.log("hit api eith the params");

	connection.query(`SELECT * FROM mainmodel WHERE model="${req.params.id}"`, (err, result, fields) => {
		if (err) {
			throw err; console.log(err);
		} else {
      console.log(result);
			res.json(result);
		}
	});
});



router.delete('/:id', (req, res) => {
	console.log('hit the delete route');

	connection.query(`DELETE from mainmodel WHERE model="${req.params.id}"`, (err, result) => {
		if (err) {
			throw err; console.log(err);
		} else {
			res.json(result); // send back whatever this is
		}
	});
});


router.post('/', (req,res) =>{
    console.log(`hit the post route`);

    connect.query(`INSERT into mainmodel (id, model, modelname, pricing, modelDetails, imgPath) VALUES (NULL, "${req.body.model}", "${req.body.model}", "${req.body.model}", "${req.body.model}"); `, (err, data) =>{
        if(err){
            throw(err);
        }else{
            res.json(data);
        }
    })
});



//router.delete('/api/:id', (req, res) => {
//	console.log('hit the delete route', req.params.id);
//
//	connection.query(`DELETE from mainmodel WHERE model="${req.params.id}"`, (err, result) => {
//		if (err) {
//			throw err; console.log(err);
//		} else {
//			res.json(result); // send back whatever this is
//		}
//	});
//});

module.exports = router;
