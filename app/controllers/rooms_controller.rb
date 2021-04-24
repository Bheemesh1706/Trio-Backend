class RoomsController < ApplicationController
   
    def create
        @room = Room.new(room_params)

        if @room.save
              render json: @room, status: :created, location: @room
        else
              render json: @room.errors.full_messages, status: 420
        end
    end

    def index
        @rooms = Room.all

        if @rooms
            render json: @rooms 
        else
            render json:  {error_message: "Something Went Wrong " }, status: 420
        end
    end

    private

    def room_params
      params.require(:room).permit(:roomname)
    end

end
