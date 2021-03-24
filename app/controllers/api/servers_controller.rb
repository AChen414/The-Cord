class Api::ServersController < ApplicationController
    def index 
        @servers = current_user.servers

        render 'api/servers/index'
    end

    def create
        @server = Server.new(server_params)

        if @server.save 
            ServerUser.create({user_id: @server.owner_id, server_id: @server.id})
            Channel.create({name: 'general', server_id: @server.id})
            render :show
        else 
            render json: ["Server must have a name!"], status: 422
        end
    end

    def show
        @server = Server.find_by(id: params[:id])
        render :show
    end

    def update

    end

    def destroy
        @server = Server.find_by(id: params[:id])

        if @server
            @server.destroy
        else
            render json: ['Server deletion error'], status: 424
        end
    end

    def join 
        @server = Server.find_by(invite_code: params[:invite_code])

        if @server
            ServerUser.create({ user_id: current_user.id, server_id: @server.id })
            render :show
        else
            render json: ["Invalid code"], status: 422
        end
    end

    private

    def server_params
        params.require(:server).permit(:name, :owner_id, :invite_code)
    end
end
