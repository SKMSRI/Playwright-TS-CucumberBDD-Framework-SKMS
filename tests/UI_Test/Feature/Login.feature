Feature: SauceDemo Login function

  Scenario: Login with valid credentials
    Given I navigate to "https://www.saucedemo.com/"
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on Login button
    Then I should see the Products page

  Scenario: Login with invalid credentials
    Given I navigate to "https://www.saucedemo.com/"
    When I enter username "standard_user12"
    And I enter password "secret_sauce24"
    And I click on Login button
    Then I should see the Products page
    And I click the login button
    Then I should see an error message indicating invalid credentials

  Scenario: Login with empty fields
    Given I navigate to "https://www.saucedemo.com/"
    When I leave the username and password fields empty
    And I click the login button
    Then I should see an error message indicating that fields cannot be empty
