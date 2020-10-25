class Api::MessagesController < ApplicationController
    def index 
        @messages = Message.all
        render :index
    end

    def create
        @message = Message.new(message_params)

        if @message.save 
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
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
