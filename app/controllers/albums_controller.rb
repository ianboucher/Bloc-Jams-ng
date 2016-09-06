class AlbumsController < ApplicationController
    def index
        respond_with Album.all
    end

    def show
        render json: Album.find(params[:id]).to_json(:include => :songs)
    end

        # respond_with Album.find(params[:id])
    # end

end
