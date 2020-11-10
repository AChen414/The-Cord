class Api::UsersController < ApplicationController
    def index 
        @users = User.all 
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            ServerUser.create({ user_id: @user.id, server_id: 'TVCV0F4P' })
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
