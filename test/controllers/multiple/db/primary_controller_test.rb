require "test_helper"

class Multiple::Db::PrimaryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get multiple_db_primary_index_url
    assert_response :success
  end
end
