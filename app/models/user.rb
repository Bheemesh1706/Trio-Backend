class User
  
  
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :username, type: String
  field :email, type: String
  field :password, type: String
  field :password_digest, type: String

  validates :username, uniqueness: {case_sensitive: false}
  validates :email, uniqueness: {case_sensitive: false}

  has_secure_password

end
