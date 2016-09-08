class AlbumsController < ApplicationController
    def index
        render json: Album.all
    end

    def show
        render json: Album.find(params[:id]).to_json(:include => :songs)
    end
end
