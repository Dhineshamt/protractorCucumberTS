import { Given, Then } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import chai from "chai";
const expect = chai.expect;
import { HomePage } from "./../pageObjects/HomePage";
const { Client } = require("pg");

const homePage = new HomePage();
const connectionString = "postgresql://postgres:1234@localhost:5432/testdb";
const client = new Client({ connectionString });
let result;


Given("I add data to table", async () => {  
    const insertQuery = {
        name: 'Insert',
        text: 'INSERT INTO COMPANY VALUES($1, $2, $3, $4, $5)',
        values: [2, 'Dhinesh', 29, 'NC', 5000],
      }
    client.connect();
    client.query(insertQuery, (err, res) => {
        if(res) {
            result = res;
            console.info("Data Inserted", "no of rows inserted", res.rowCount);
        } else if(err) {
            console.error("Data not inserted", "Error: ", err)
        }
  });
});

Then("The data should be added successfully", async () => {
    expect(result.rowCount).to.be.equal(1);
});

Given("I delete data from table", async () => {
    const delQuery = {
        name: "Delete",
        text: "DELETE FROM COMPANY WHERE id=2",
      }
    client.query(delQuery, (err, res) => {
        if(res) {
            result = res;
            console.info("Data Deleted", "no of rows deleted", res.rowCount);
        } else if(err) {
            console.error("Data not deleted", "Error: ", err)
        }
        client.end();
  });
});

Then("The data should be deleted successfully", async () => {
    expect(result.rowCount).to.be.equal(1);
});
