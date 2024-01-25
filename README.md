# CypressDemo

Test cases file mapping with test in document

- login.cy.js - Test 1
- shopping.cy.js - Test 2
- order.cy.js - Test 3

prerequisite

- install node js

After fresh clone open this project folder in visual studio code

- open terminal
- npm install cypress --save-dev


To run all cases in single go run following command, it will trigger test cases in firefox in headed mode

- npm test

if you want to run it in headless mode run follwoing command, to run in chrome remove --browser firefox

- npx cypress run --browser firefox


To run individual case add --spec "file relative path" , below is example

npx cypress run  --browser firefox --spec "cypress/e2e/Test/login.cy.js"




To test it using cypress UI run follwoing command in steps
- npx cypress open (this will open cypress UI)
- select E2E Testing
- select browser of your choice
- click Start E2E Testing button
- now you will see all test files
- select any which you want to run and it will run cases