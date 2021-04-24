class MessagesController < ApplicationController
  
  
  def index
    @message = Message.new
    @messages = Message.custom_display
  end
  
end
