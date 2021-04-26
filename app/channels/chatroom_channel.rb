class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    user = params['username']
    stream_from "chatroom_channel"
    ActionCable.server.broadcast 'chatroom_channel', "#{user} joined!"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
