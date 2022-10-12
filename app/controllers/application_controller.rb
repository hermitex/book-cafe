class ApplicationController < ActionController::API
  wrap_parameters format: []
  include ActionController::Cookies

end
