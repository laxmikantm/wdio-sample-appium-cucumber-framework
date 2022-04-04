Feature: Sample feature file to illustrate alert functionality

 @androidApp
  Scenario: User menu slide-out
    Given I re-launch the app
    When drags from the left edge of screen
    Then user menu should slide out
    When the user press the Ultimate answer button
    Then an alert pops out