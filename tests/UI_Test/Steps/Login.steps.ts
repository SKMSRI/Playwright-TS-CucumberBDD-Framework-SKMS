import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the SauceDemo login page', async ({}) => {
  // Step: Given I am on the SauceDemo login page
  // From: tests\UI_Test\Feature\Login.feature:4:9
});

When('I enter valid username and password', async ({}) => {
  // Step: When I enter valid username and password
  // From: tests\UI_Test\Feature\Login.feature:5:9
});

When('I click the login button', async ({}) => {
  // Step: And I click the login button
  // From: tests\UI_Test\Feature\Login.feature:6:9
});

Then('I should be redirected to the inventory page', async ({}) => {
  // Step: Then I should be redirected to the inventory page
  // From: tests\UI_Test\Feature\Login.feature:7:9
});

When('I enter invalid username and password', async ({}) => {
  // Step: When I enter invalid username and password
  // From: tests\UI_Test\Feature\Login.feature:11:9
});

Then('I should see an error message indicating invalid credentials', async ({}) => {
  // Step: Then I should see an error message indicating invalid credentials
  // From: tests\UI_Test\Feature\Login.feature:13:9
});

When('I leave the username and password fields empty', async ({}) => {
  // Step: When I leave the username and password fields empty
  // From: tests\UI_Test\Feature\Login.feature:17:9
});

Then('I should see an error message indicating that fields cannot be empty', async ({}) => {
  // Step: Then I should see an error message indicating that fields cannot be empty
  // From: tests\UI_Test\Feature\Login.feature:19:9
});
