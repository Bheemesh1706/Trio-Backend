class SessionsController < ApplicationController

   

    def create 
        user = User.find_by(username: params[:session][:username])
        
        if user && user.authenticate(params[:session][:password])
            session[:user_id] =  user.id
            render json: {message: "Sucesses!"}, status: 200
        else
            render json: {error: "User name or Password Invalid"}, status: 420
        end
    end
 
    def destroy
        session[:user_id]= nil
        render json: {message: "Sucessfully Logout"} 
    end

end