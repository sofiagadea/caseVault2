require "test_helper"

class CasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @case = cases(:one)
  end

  test "should get index" do
    get cases_url, as: :json
    assert_response :success
  end

  test "should create case" do
    assert_difference("Case.count") do
      post cases_url, params: { case: { description: @case.description, title: @case.title, video: @case.video } }, as: :json
    end

    assert_response :created
  end

  test "should show case" do
    get case_url(@case), as: :json
    assert_response :success
  end

  test "should update case" do
    patch case_url(@case), params: { case: { description: @case.description, title: @case.title, video: @case.video } }, as: :json
    assert_response :success
  end

  test "should destroy case" do
    assert_difference("Case.count", -1) do
      delete case_url(@case), as: :json
    end

    assert_response :no_content
  end
end
