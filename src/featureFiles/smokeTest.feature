Feature: Sample feature file to illustrate app basic functionalities

  @androidApp
  Scenario: Presence of Dashboard and Settings tabs
    Given I launch the app
    Then Dashboard tab is present
    Then Settings tab is present

  @androidApp
  Scenario: Presence of Dashboard and Settings tabs
    Given I launch the app
    When I click on Dashboard link
    Then Dashboard screen should open


