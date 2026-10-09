import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to https:\\/\\/www.saucedemo.com\\/', async ({}) => {
  console.log("check1")
});

When('I enter valid username standard_user and password secret_sauce', async ({}) => {
  console.log("When I enter valid username standard_user and password secret_sauce")
  // From: tests\UI_Test\Feature\Login.feature:5:5
});

When('I click the login button', async ({}) => {
  console.log(" I click the login button")
  // From: tests\UI_Test\Feature\Login.feature:6:5
});

Then('I should be redirected to the inventory page', async ({}) => {
  console.log("Then I should be redirected to the inventory page")
  // Step: Then I should be redirected to the inventory page
  // From: tests\UI_Test\Feature\Login.feature:7:5
});

When('I enter invalid username and password', async ({}) => {
  console.log("When I enter invalid username and password")
  // Step: When I enter invalid username and password
  // From: tests\UI_Test\Feature\Login.feature:11:5
});

Then('I should see an error message indicating invalid credentials', async ({}) => {
  console.log("Then I should see an error message indicating invalid credentials")
  // Step: Then I should see an error message indicating invalid credentials
  // From: tests\UI_Test\Feature\Login.feature:13:5
});

When('I leave the username and password fields empty', async ({}) => {
  console.log("When I leave the username and password fields empty")
  // Step: When I leave the username and password fields empty
  // From: tests\UI_Test\Feature\Login.feature:17:5
});

Then('I should see an error message indicating that fields cannot be empty', async ({}) => {
  console.log("Then I should see an error message indicating that fields cannot be empty")
  // Step: Then I should see an error message indicating that fields cannot be empty
  // From: tests\UI_Test\Feature\Login.feature:19:5
});