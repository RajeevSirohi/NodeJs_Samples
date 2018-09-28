var express= require("express");
app=express(),
port=process.env.port||3000,
mongoose=require('mongoose'),
Task=require('./api/models/todolistmodel'),
bodyParser=require('body-parser');
mongoose.promise=global.promise;
mongoose.connect('mongodb://localhost/tododb');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes=require('./api/routes/todolistroutes');
routes(app);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found, please check the url'})
  });
app.listen(port);

console.log("todolist api server started on port: "+ port);