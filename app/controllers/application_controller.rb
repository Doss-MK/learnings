class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception  
    # before_action :authorized?, except: [:init, :consume, :main]

    # def authorized?
    #   if session[:authorized].nil? && session[:userid].nil?
    #     redirect_to '/sso/okta/saml/init'
    #   end
    # end

    protect_from_forgery with: :exception
    helper_method :current_user

    def authenticate
        redirect_to :login unless user_signed_in?
    end

    def current_user
        @current_user ||= Employee.find(session[:user_id]) if session[:user_id]
    end

    def user_signed_in?
        # converts current_user to a boolean by negating the negation
        !!current_user
    end
end
