class Message
  include Mongoid::Document
  field :body, type: String
  field :user_id, type: String
  field :timestamps, type: String

   validates :body, presence: true
end
