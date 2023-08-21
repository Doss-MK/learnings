require "test_helper"

class Fw::React::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fw_react_home_index_url
    assert_response :success
  end
end
