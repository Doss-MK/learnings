class Aws::S3::HomeController < ApplicationController
  
  def index
    @profile = Profile.new
    @profiles = Profile.all
  end

  def create
    if profile_params[:avatar].present?
      s3 = Aws::S3::Resource.new
      bucket = s3.bucket('demo-rails-projects-bucket')
      
      object_key = "avatars/#{SecureRandom.hex(10)}_#{profile_params[:avatar].original_filename}"
      bucket.object(object_key).upload_file(profile_params[:avatar].tempfile, acl: 'public-read')
  
      @profile = Profile.new(profile_params)
      @profile.avatar_url = bucket.object(object_key).public_url
      @profile.file_name = profile_params[:avatar].original_filename
      @profile.save

      redirect_to aws_s3_profile_index_url, notice: "Profile uploaded successfully."

    else
      render :new
    end

  end

  private

  def profile_params
    params.require(:profile).permit(:avatar)
  end

end
