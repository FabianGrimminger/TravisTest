#encoding: utf-8
Feature: Test this
  In order to verify that cucumber is installed and configured correctly
  As an aspiring BDD fanatic 
  I should be able to run this scenario and see that the steps pass (green like a cuke)
 
  Scenario: Cutting vegetables
    Given I navigate to "http:\\localhost:4200"
    Then element having id "headline" should have partial text as "app fabi works"