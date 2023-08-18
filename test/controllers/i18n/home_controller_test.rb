require "test_helper"

class I18n::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get i18n_home_index_url
    assert_response :success
  end
end
