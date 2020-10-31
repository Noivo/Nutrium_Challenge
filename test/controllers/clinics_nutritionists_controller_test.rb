require 'test_helper'

class ClinicsNutritionistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clinics_nutritionist = clinics_nutritionists(:one)
  end

  test "should get index" do
    get clinics_nutritionists_url
    assert_response :success
  end

  test "should get new" do
    get new_clinics_nutritionist_url
    assert_response :success
  end

  test "should create clinics_nutritionist" do
    assert_difference('ClinicsNutritionist.count') do
      post clinics_nutritionists_url, params: { clinics_nutritionist: { clinic_id: @clinics_nutritionist.clinic_id, nutritionist_id: @clinics_nutritionist.nutritionist_id } }
    end

    assert_redirected_to clinics_nutritionist_url(ClinicsNutritionist.last)
  end

  test "should show clinics_nutritionist" do
    get clinics_nutritionist_url(@clinics_nutritionist)
    assert_response :success
  end

  test "should get edit" do
    get edit_clinics_nutritionist_url(@clinics_nutritionist)
    assert_response :success
  end

  test "should update clinics_nutritionist" do
    patch clinics_nutritionist_url(@clinics_nutritionist), params: { clinics_nutritionist: { clinic_id: @clinics_nutritionist.clinic_id, nutritionist_id: @clinics_nutritionist.nutritionist_id } }
    assert_redirected_to clinics_nutritionist_url(@clinics_nutritionist)
  end

  test "should destroy clinics_nutritionist" do
    assert_difference('ClinicsNutritionist.count', -1) do
      delete clinics_nutritionist_url(@clinics_nutritionist)
    end

    assert_redirected_to clinics_nutritionists_url
  end
end
