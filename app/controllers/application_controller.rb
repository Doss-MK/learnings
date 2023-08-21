class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception  
    # before_action :authorized?, except: [:init, :consume, :main]

    # def authorized?
    #   if session[:authorized].nil? && session[:userid].nil?
    #     redirect_to '/sso/okta/saml/init'
    #   end
    # end
end
