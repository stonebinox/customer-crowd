require 'test_helper'

class CrowdliesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get crowdlies_index_url
    assert_response :success
  end

  test "should get show" do
    get crowdlies_show_url
    assert_response :success
  end

  test "should get new" do
    get crowdlies_new_url
    assert_response :success
  end

  test "should get create" do
    get crowdlies_create_url
    assert_response :success
  end

  test "should get edit" do
    get crowdlies_edit_url
    assert_response :success
  end

  test "should get update" do
    get crowdlies_update_url
    assert_response :success
  end

end
