var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var app = express();

var port = process.env.PORT || 8000;

//mongoose and mongodb database
var mongodb = require('mongodb');



//mongoose.connect('mongodb://localhost:27017/newdata');

var donarSchema = mongoose.Schema({

	firstname:String,
	lastname:String,
	email:String,
	password:String,
	phone:Number,
	address:String,
	city:String,
	pincode:Number,

});
var volunteerSchema = mongoose.Schema({

	firstname:String,
	lastname:String,
	email:String,
	password:String,
	phone:Number,

	address:String,
	city:String,
	volunteer_type:String,
	area:String,

});
var doctorSchema = mongoose.Schema({

	firstname:String,
	lastname:String,
	email:String,
	password:String,
	phone:Number,
	address:String,
	city:String,
	specialist:String,
	frequently_visited_areas:String,

});

var medicinedonation = mongoose.Schema({

		VolunteeringType:String,
		medicine_quantity:String,
		email:String,
		counter:Number



});

var doctordonation = mongoose.Schema({
		email:String,
		donating_hours:String,
		donating_days:String



});


var volunteerdonation = mongoose.Schema({
		email:String,
		volunteering_hours:String,
		volunteering_days:String



});

var contactSchema = mongoose.Schema({

	name:String,
	email:String,
	phone:Number,
	message:String

});

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'ANGULAR'));
app.set('view engine', 'html');

var donor = mongoose.model('donor',donarSchema);
var volunteer = mongoose.model('volunteer',volunteerSchema);
var doctor = mongoose.model('doctor',doctorSchema);
var medicinedonation = mongoose.model('medicinedonation',medicinedonation);
var doctordonation = mongoose.model('doctordonation',doctordonation);
var volunteeringdonation = mongoose.model('volunteeringdonation',volunteerdonation);
var contact = mongoose.model('contact',contactSchema);

//morgan
//middleware setup
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.render('index');
});

app.listen(port,function(){
	console.log('server is running on port'+port);
})