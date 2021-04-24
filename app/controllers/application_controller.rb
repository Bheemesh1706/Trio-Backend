class ApplicationController < ActionController::API
    
    def current_user 
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def logged_in?
        !!current_user
    end

    def require_user
        if !logged_in?
            render json: {error_message: "User Not Logged IN!!"}, status: 420
        end
    end

end
