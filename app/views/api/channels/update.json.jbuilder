json.set! @channel.id do 
    json.extract! @channel, :id, :name, :server_id
end