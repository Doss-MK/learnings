class Multiple::Db::SecondaryController < ApplicationController
  def index
    @students = Student.all
  end
end
