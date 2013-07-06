# This file is used by rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)
run Packagely::Application
