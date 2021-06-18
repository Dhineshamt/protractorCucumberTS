Feature: Postgres connection 

Scenario: Adding and deleting data

Given I add data to table
Then The data should be added successfully

Given I delete data from table
Then The data should be deleted successfully