class Api::MessagesController < ApplicationController
    def index 
        @messages = Channel.find_by(channel_id: params[:channel_id]).messages
        render :index
    end

    def create

    end

    def update

    end

    def destroy

    end

    private 

    def message_params
        params.require(:message).permit(:body, :author_id, :channel_id)
    end
end
