import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the SauceDemo login page', async ({}) => {
  console.log('Step: Given I am on the SauceDemo login page');
})
When('I enter valid username and password', async ({}) => {
  console.log('Step: When I enter valid username and password');
});

When('I click the login button', async ({}) => {
  console.log('Step: And I click the login button');
  });

Then('I should be redirected to the inventory page', async ({}) => {
  console.log('Step: Then I should be redirected to the inventory page');
  });

When('I enter invalid username and password', async ({}) => {
  console.log('Step: When I enter invalid username and password');
  // From: tests\UI_Test\Feature\Login.feature:11:9
});

Then('I should see an error message indicating invalid credentials', async ({}) => {
  console.log('Step: Then I should see an error message indicating invalid credentials');
  // From: tests\UI_Test\Feature\Login.feature:13:9
});

When('I leave the username and password fields empty', async ({}) => {
  console.log('Step: When I leave the username and password fields empty');
  // From: tests\UI_Test\Feature\Login.feature:17:9
});
Then('I should see an error message indicating that fields cannot be empty', async ({}) => {
 console.log('Step: Then I should see an error message indicating that fields cannot be empty');
});