Rails.application.routes.draw do
  resources :recipes
  resources :users, only: [:index, :create]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/groceries/:id', to:'users#groceries'
  get '/favorites/:id', to: 'users#favorites'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
