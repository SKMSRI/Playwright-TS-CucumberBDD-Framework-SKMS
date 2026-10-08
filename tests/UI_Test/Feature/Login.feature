Feature: SauceDemo Login function

    Scenario: Login with valid credentials
        Given I am on the SauceDemo login page
        When I enter valid username and password
        And I click the login button
        Then I should be redirected to the inventory page
    
    Scenario: Login with invalid credentials
        Given I am on the SauceDemo login page
        When I enter invalid username and password
        And I click the login button
        Then I should see an error message indicating invalid credentials
    
    Scenario: Login with empty fields
        Given I am on the SauceDemo login page
        When I leave the username and password fields empty
        And I click the login button
        Then I should see an error message indicating that fields cannot be empty