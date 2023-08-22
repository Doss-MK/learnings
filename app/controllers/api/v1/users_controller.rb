class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, only: [:id, :name, :email]
    end

    def create
        @user = User.create(name: params[:name], email: params[:email])

        if @user.save
            render json: { message: 'User created successfully', user: @user }, status: :created
        else
            render json: { message: 'Please try again later' }, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])

        if @user.destroy
            render json: { message: "User deleted successfully" }, status: :ok
        else
            render json: { message: 'Please try again later' }, status: :unprocessable_entity
        end
    end
end
