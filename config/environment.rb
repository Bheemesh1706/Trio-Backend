# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]
config.action_cable.url = "wss://trio7170.herokuapp.com/cable"
