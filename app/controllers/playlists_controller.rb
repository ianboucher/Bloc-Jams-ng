class PlaylistsController < ApplicationController
    def index
        render json: Playlist.all.to_json(:include => :songs)
    end

    def show
        render json: Playlist.find(params[:id]).to_json( include: { songs: { :include => :album } } )
    end

    def create
        @playlist = Playlist.new(params.require(:playlist).permit(:name))
    end

end
