class PlaylistsController < ApplicationController

    def index
        render json: Playlist.all.to_json(:include => :songs)
    end

    def show
        render json: Playlist.find(params[:id]).to_json( include: { songs: { :include => :album } } )
    end

    def create
        @playlist = Playlist.new(params.require(:playlist).permit(:name, :description))
        @playlist.artURL = "/assets/images/album_covers/#{Random.new.rand(1..20)}.png"

        if @playlist.save
            render json: @playlist
        else
            render json: { message: "Playlist could not be created" }
        end
    end
end
