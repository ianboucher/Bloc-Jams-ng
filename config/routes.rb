Rails.application.routes.draw do
    devise_for :users

    root 'application#angular'

    resources :albums, only: [:index, :show]

    resources :songs, only: [:index, :show]

    resources :playlists, only: [:index, :show, :create]

    # note the use of 'singular resourse' for routing without id
    resource :playlistings, only: [:index, :show, :create, :destroy]

    # ensure Angular app is served upon browser refresh or incorrect URL
    get "/(*redirect_path)", to: "application#angular"

end
