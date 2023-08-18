require "test_helper"

class Multiple::Db::SecondaryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get multiple_db_secondary_index_url
    assert_response :success
  end
end
