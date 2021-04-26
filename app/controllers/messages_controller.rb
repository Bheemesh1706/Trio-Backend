class MessagesController < ApplicationController
  
  
  def index
    @message = Message.all
    render json: @message
  end

  def create
    
    @message  = Message.new(message_params)
    @message.timestamps = Time.now
    
    if @message.save
      render json: @message
        ActionCable.server.broadcast "chatroom_channel", @message.body
    else
      render json: @message.errors.full_messages, status: 420
    end

  end
  
   private

    def message_params
      params.require(:message).permit(:body, :user_id, :timestamps)
    end
end
