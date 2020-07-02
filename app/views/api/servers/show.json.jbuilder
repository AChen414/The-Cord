json.entities do 
    json.servers do 
        json.set! @server.id do
            json.extract! @server, :id, :name, :owner_id
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
end