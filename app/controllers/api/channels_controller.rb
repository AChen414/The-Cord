class Api::ChannelsController < ApplicationController
    def index 
        @channels = Server.find_by(params[:serverId]).channels
        render :index
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render :create
        else
            render json: ["Channel name cannot be blank"], status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])

        if @channel
            @channel.destroy
        else
            render json: ["Error in deleting channel"], status: 423
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        
        if @channel 
            @channel.update(channel_params)
            render :create
        else
            render json: ['Error updating channel'], status: 422
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end
