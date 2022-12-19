class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_filter :session_expiry
  before_filter :update_activity_time

  def session_expiry
    get_session_time_left
    unless @session_time_left > 0
      flash.now[:error] = "Your session has timed out. Please log back in."
      sign_out
    end
 end
 
 def get_session_time_left 
    expire_time = session[:expires_at] || Time.now  
    @session_time_left = (expire_time - Time.now).to_i  
 end
 
 def update_activity_time
   session[:expires_at] = 3.minutes.from_now
 end

  private

	def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end
end