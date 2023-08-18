require "test_helper"

class Aws::S3::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get aws_s3_home_index_url
    assert_response :success
  end
end
