require "test_helper"

class Sso::Okta::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sso_okta_home_index_url
    assert_response :success
  end
end
