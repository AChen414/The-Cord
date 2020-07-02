class Api::ChannelsController < ApplicationController
    def index 
        @channels = Server.find_by()
    end

    def show

    end

    def create

    end

    def destroy

    end

    def update

    end

    private

    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end
