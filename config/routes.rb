Rails.application.routes.draw do
  resources :rooms
  resources :messages
  resources :users , except: [:new]


  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  post 'username', to: 'users#user_id'
  get 'session', to: 'sessions#session_user'

  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
