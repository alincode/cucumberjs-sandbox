Feature: BMI Calculator
  I want to calculate my BMI

  Scenario: height is "1.8"m , weight is "70" kg
    Given height is "1.8"
    And weight is "70"
    When calculator add two number
    Then result should be "21.6"
