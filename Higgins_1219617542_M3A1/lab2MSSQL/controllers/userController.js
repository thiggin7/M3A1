const db = require('../config/db.manager');
exports.getAllUsers = function (req, res) {
const users = db.getUsers().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}
exports.getUserByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewUser = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchUserById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)

const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteUserByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}