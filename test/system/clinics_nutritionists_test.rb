require "application_system_test_case"

class ClinicsNutritionistsTest < ApplicationSystemTestCase
  setup do
    @clinics_nutritionist = clinics_nutritionists(:one)
  end

  test "visiting the index" do
    visit clinics_nutritionists_url
    assert_selector "h1", text: "Clinics Nutritionists"
  end

  test "creating a Clinics nutritionist" do
    visit clinics_nutritionists_url
    click_on "New Clinics Nutritionist"

    fill_in "Clinic", with: @clinics_nutritionist.clinic_id
    fill_in "Nutritionist", with: @clinics_nutritionist.nutritionist_id
    click_on "Create Clinics nutritionist"

    assert_text "Clinics nutritionist was successfully created"
    click_on "Back"
  end

  test "updating a Clinics nutritionist" do
    visit clinics_nutritionists_url
    click_on "Edit", match: :first

    fill_in "Clinic", with: @clinics_nutritionist.clinic_id
    fill_in "Nutritionist", with: @clinics_nutritionist.nutritionist_id
    click_on "Update Clinics nutritionist"

    assert_text "Clinics nutritionist was successfully updated"
    click_on "Back"
  end

  test "destroying a Clinics nutritionist" do
    visit clinics_nutritionists_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Clinics nutritionist was successfully destroyed"
  end
end
