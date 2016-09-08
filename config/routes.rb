Rails.application.routes.draw do
    devise_for :users

    root 'application#angular'

    resources :albums, only: [:index, :show]

    resources :songs, only: [:index, :show]

    # ensure Angular app is served upon browser refresh or incorrect URL
    get "/(*redirect_path)", to: "application#angular"

end
