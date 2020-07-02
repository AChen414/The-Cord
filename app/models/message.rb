class Message < ApplicationRecord
    validates :body, :author_id, :channel_id, presence: true 

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

    
end
