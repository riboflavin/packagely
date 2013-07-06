class ApplicationController < ActionController::Base
  protect_from_forgery
  
  # db disabled - to reenable uncomment following line
  # ActiveRecord::Base.include_root_in_json = false
  
  before_filter :initialize_controller
  
  def initialize_controller
    @active = ""
  end
end
