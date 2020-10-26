json.entities do 
    json.channels do 
        json.set! @channel.id do 
            json.extract! @channel, :id, :server_id
        end
    end

    json.messages do 
        @channel.messages.each do |message|
            json.set! message.id do 
                json.extract! message, :id, :body, :author_id, :channel_id
            end
        end
    end
end