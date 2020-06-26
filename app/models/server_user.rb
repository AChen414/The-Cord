class ServerUser < ApplicationRecord
    validates :user_id, :server_id, presence: true

    has_many :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 

    has_many :servers,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server
end
