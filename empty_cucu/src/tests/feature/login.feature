Feature: The Internet Guinea Pig Website

  Scenario Outline: Successful login with correct credentials
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |

  Scenario Outline: Login with incorrect username
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password | message                    |
      | foobar   | barfoo   | Your username is invalid!  |



#Feature: The Internet Guinea Pig Website
#
#  Scenario Outline: As a user, I can log into the secure area
#
#    Given I am on the login page
#    When I loginith <username> and <password>
#    Then I should see a flash message saying <message>
#
#    Examples:
#      | username | password             | message                        |
#      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#      | foobar   | barfoo               | Your username is invalid!      |

#Feature: Login functionality
#
#  Scenario Outline: UC-1 Test Login form with empty credentials
#    Given I am on the login page
#    When I enter "<username>" in the username field
#    And I enter "<password>" in the password field
#    And I clear the username field
#    And I clear the password field
#    And I click the login button
#    Then I should see the  "<error_message>"
#
#    Examples:
#      | username   | password  |error_message                     |
#      | some_name  | some_pass |Epic sadface: Username is required|
#
#  Scenario Outline: UC-2 Test Login form by entering only the username
#    Given I am on the login page
#    When I enter "<username>" in the username field
#    And I enter "<password>" in the password field
#    And I clear the password field
#    And I click the login button
#    Then I should see the error "<error_message>"
#
#    Examples:
#      | username   | password  |error_message                     |
#      | some_name  | some_pass |Epic sadface: Password is required|
#
#  Scenario Outline: UC-3 Test Login form with correct credentials
#
#    Given I am on the login page
#    When I enter "<username>" in the username field
#    And I enter "<password>" in the password field
#    And I click the login button
#    Then I should see the header "Swag Labs"
#
#    Examples:
#      | username      | password      |
#      | standard_user | secret_sauce  |

