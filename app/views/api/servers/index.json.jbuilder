@servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :name, :owner_id, :channel_ids, :invite_code
    end
end
