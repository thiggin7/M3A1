const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

//Connect to DB
async function connectToDb() {
    try {
        console.log('Connecting to SQL ...');
        const dbContext = await sql.connect(dbConnection);
        console.log('Connection is successful');
        return dbContext ;
    } catch (error) {
        console.log('Connection failed');
        throw error;
    }
}

//Function to get sales data
async function getSalesProducts(){
    try {
        const dbContext = await connectToDb();
        console.log('The Database connection was Successful');
        console.log('Getting data');
        let results = await dbContext.request()
        .query(`
        SELECT TOP(20)
        productId,
        name,
        productNumber,
        color
        listPrice
        FROM
        salesLT.Product
        `);
        console.log(`Returned SQL sales results`);
        return results;
        } catch (error) {
            console.log("Failed to get data");
            throw error;
        }
    }

//Function to get customer data
async function getUsers(){
    try {
        const dbContext = await connectToDb();
        console.log('The Database connection was Successful');
        console.log('Getting data');
        let results = await dbContext.request()
        .query(`
        SELECT TOP(20)
        customerId,
        firstName,
        lastName,
        companyName,
        emailAddress,
        phone
        FROM
        salesLT.Customer
        `);
        console.log(`Returned SQL customer results`);
        return results;
        } catch (error) {
            console.log("Failed to get data");
            throw error;
        }
    }
    
//Export both
module.exports = {getSalesProducts, getUsers};