json.entities do 
    json.servers do 
        json.set! @server.id do
            json.extract! @server, :id, :name, :owner_id, :channel_ids
            if @server.server_photo.attached?
                json.photoURL url_for(@server.server_photo)
            end
        end
    end

    json.channels do 
        @server.channels.each do |channel|
            json.set! channel.id do 
                json.extract! channel, :id, :name
            end
        end
    end

    json.users do 
        @server.users.each do |user|
            json.set! user.id do 
                json.extract! user, :id, :username, :email
            end
        end
    end

    json.messages do
        @server.channels.each do |channel|
            channel.messages.each do |message|
                json.set! message.id do
                    json.extract! message, :id, :body, :author_id, :channel_id
                end
            end
        end
    end
end