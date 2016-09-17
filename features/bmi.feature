Feature: BMI Calculator
  I want to calculate my BMI

  Scenario: height is "180" cm, weight is "70" kg
    Given height is "180"
    And weight is "70"
    When calculator add two number
    Then result should be "21.6"
