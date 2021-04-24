Rails.application.routes.draw do
  resources :rooms
  resources :messages
  resources :users , except: [:new]


  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
