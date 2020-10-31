require "application_system_test_case"

class NutritionistsTest < ApplicationSystemTestCase
  setup do
    @nutritionist = nutritionists(:one)
  end

  test "visiting the index" do
    visit nutritionists_url
    assert_selector "h1", text: "Nutritionists"
  end

  test "creating a Nutritionist" do
    visit nutritionists_url
    click_on "New Nutritionist"

    click_on "Create Nutritionist"

    assert_text "Nutritionist was successfully created"
    click_on "Back"
  end

  test "updating a Nutritionist" do
    visit nutritionists_url
    click_on "Edit", match: :first

    click_on "Update Nutritionist"

    assert_text "Nutritionist was successfully updated"
    click_on "Back"
  end

  test "destroying a Nutritionist" do
    visit nutritionists_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Nutritionist was successfully destroyed"
  end
end
