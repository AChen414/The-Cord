class Server < ApplicationRecord
    validates :name, :owner_id, presence: true

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :server_users,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :ServerUser
    
    has_many :users,
        through: :server_users,
        source: :users 

    has_many :channels,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Channel
end
