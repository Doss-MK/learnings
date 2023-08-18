class Sso::Okta::HomeController < ApplicationController
  def index
    @name = session[:userid]
  end
end