class MessagesController < ApplicationController
  
  
  def index
    @message = Message.all
    render json: @message
  end

  def create
    @message  = Message.new(message_params)
  end
  
   private

    def message_params
      params.require(:message).permit(:body, :user_id, :timestamps)
    end
end
