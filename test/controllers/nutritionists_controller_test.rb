require 'test_helper'

class NutritionistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nutritionist = nutritionists(:one)
  end

  test "should get index" do
    get nutritionists_url
    assert_response :success
  end

  test "should get new" do
    get new_nutritionist_url
    assert_response :success
  end

  test "should create nutritionist" do
    assert_difference('Nutritionist.count') do
      post nutritionists_url, params: { nutritionist: {  } }
    end

    assert_redirected_to nutritionist_url(Nutritionist.last)
  end

  test "should show nutritionist" do
    get nutritionist_url(@nutritionist)
    assert_response :success
  end

  test "should get edit" do
    get edit_nutritionist_url(@nutritionist)
    assert_response :success
  end

  test "should update nutritionist" do
    patch nutritionist_url(@nutritionist), params: { nutritionist: {  } }
    assert_redirected_to nutritionist_url(@nutritionist)
  end

  test "should destroy nutritionist" do
    assert_difference('Nutritionist.count', -1) do
      delete nutritionist_url(@nutritionist)
    end

    assert_redirected_to nutritionists_url
  end
end
