class Multiple::Db::PrimaryController < ApplicationController
  def index
    @users = User.all
    @students = Student.all
  end
end
