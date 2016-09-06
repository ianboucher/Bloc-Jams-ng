Rails.application.routes.draw do
    devise_for :users

    root 'application#angular'

    resources :albums, only: [:index, :show]

    resources :songs, only: [:index, :show]
end
