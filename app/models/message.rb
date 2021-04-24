class Message
  include Mongoid::Document
  field :body, type: String
  field :user_id, type: Integer
  field :timestamps, type: String

   belongs_to :user
   validates :body, presence: true
end
