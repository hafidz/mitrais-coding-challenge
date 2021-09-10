
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homes#index'

  require 'sidekiq/web'
  mount Sidekiq::Web, at: '/sidekiq'
  namespace :api do
    namespace :v1 do
      resources :movies
      resources :sessions
      get 'genre' => 'movies#genre', as: "genre"
    end
  end
  match '*path', to: 'homes#index', via: :all
end
