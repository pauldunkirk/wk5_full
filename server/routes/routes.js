
var router = require('express').Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

  router.get('/', function(req, res) {
  console.log('hit my get all emps route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('SELECT * FROM emp;', function(err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.get('/sum', function(req, res) {
console.log('hit my get sum route');
pool.connect(function(err, client, done) {
  if(err){
    console.log(err);
    res.sendStatus(500);
  }else{
    client.query('SELECT round(SUM(salary)/12) FROM emp;', function(err, result) {
      done();
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        console.log(result.rows);
        res.status(200).send(result.rows);
      }
    });
  }
});
});


// create a new task in the db
router.post('/', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);
  var empObject = req.body;
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO emp (firstname, lastname, idnumber, title, salary) VALUES ($1, $2, $3, $4, $5);',
        [empObject.firstname, empObject.lastname, empObject.idnumber, empObject.title, empObject.salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});


router.delete('/:id', function(req, res) {
  var empToDeleteId = req.params.id;
  console.log('hit delete route');
  console.log('here is the id to delete ->', empToDeleteId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM emp WHERE id=$1;',
        [empToDeleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});




module.exports = router;
