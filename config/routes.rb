Rails.application.routes.draw do
  resources :ratings, only: [:index, :create]
  resources :reviews, only: [:index, :create]
  resources :book_exchanges, only: [:index]
  resources :books
  resources :users, only: [:index, :destroy, :update] do
    resources :books
  end
  post '/signup' => 'users#create'
  get '/me' => 'users#show'
  post "/login"  => "sessions#create"
  delete "/logout"  => "sessions#destroy"

  post '/exchange' => 'book_exchanges#create'
  patch '/accept' => 'book_exchanges#update'
  delete "/decline"  => "book_exchanges#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
