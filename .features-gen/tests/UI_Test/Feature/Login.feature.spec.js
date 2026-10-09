// Generated from: tests\UI_Test\Feature\Login.feature
import { test } from "playwright-bdd";

test.describe('SauceDemo Login function', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to https://www.saucedemo.com/'); 
    await When('I enter valid username standard_user and password secret_sauce'); 
    await And('I click the login button'); 
    await Then('I should be redirected to the inventory page'); 
  });

  test('Login with invalid credentials', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to https://www.saucedemo.com/'); 
    await When('I enter invalid username and password'); 
    await And('I click the login button'); 
    await Then('I should see an error message indicating invalid credentials'); 
  });

  test('Login with empty fields', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to https://www.saucedemo.com/'); 
    await When('I leave the username and password fields empty'); 
    await And('I click the login button'); 
    await Then('I should see an error message indicating that fields cannot be empty'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\Feature\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to https://www.saucedemo.com/","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid username standard_user and password secret_sauce","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I navigate to https://www.saucedemo.com/","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I enter invalid username and password","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating invalid credentials","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I navigate to https://www.saucedemo.com/","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I leave the username and password fields empty","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating that fields cannot be empty","stepMatchArguments":[]}]},
]; // bdd-data-end