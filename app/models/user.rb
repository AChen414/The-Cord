class User < ApplicationRecord
    validates :username, :session_token, :password_digest, :email, presence: true 
    validates :username, :session_token, :email, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :servers_created,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :server_users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :ServerUser 

    has_many :servers,
        through: :server_users,
        source: :servers 

    has_many :messages,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Message 


    has_one_attached :profile_pic
    
    attr_reader :password 

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token 
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
