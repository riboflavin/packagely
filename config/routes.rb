Packagely::Application.routes.draw do
    
  get "/" => "home#index"
  post "/" => "home#post"

  match '*path' => redirect('/')

end
