class Api::MessagesController < ApplicationController
    def index 
        @messages = Message.all
        render :index
    end

    def show
        @message = Message.find_by(id: params[:id])
        render :show
    end

    def create
        @message = Message.new(message_params)

        if @message.save 
            render :show
        else
            render json: ['something is wrong'], status: 423
        end
    end

    def update
        @message = Message.find_by(id: params[:id])

        if @message 
            @message.update(message_params)
            render :show
        else
            render json: ["Error in updating message"], status: 423
        end
    end

    def destroy
        @message = Message.find_by(id: params[:id])

        if @message
            @message.destroy
        else
            render json: ["Error in deleting message"], status: 423
        end
    end

    private 

    def message_params
        params.require(:message).permit(:body, :author_id, :channel_id)
    end
end
