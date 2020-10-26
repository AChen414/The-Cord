class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "chat_channel#{params[:channelId]}"
  end

  def speak(data)
    socket = { body: data['message'], author_id: data['author_id'], channel_id: data['channel_id'] }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
