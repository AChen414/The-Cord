class Api::ServersController < ApplicationController
    def index 
        @servers = current_user.servers

        render :index
    end

    def create
        @server = Server.new(server_params)

        if @server.save 
            render :show
        else 
            render json: ["Server must have a name!"], status: 422
        end
    end

    def show

    end

    private

    def server_params
        params.require(:server).permit(:name, :owner_id)
    end
end
