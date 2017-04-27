class PlaylistsController < ApplicationController
    def index
        render json: Playlist.all.to_json(:include => :songs)
    end

    def show
        # @playlist = Playlist.find(params[:id])
        #
        # if @playlist.empty?
        #     render json: {message: "Playlist does not exist"}
        # else
        #     render json: @playlist.to_json( include: { songs: { :include => :album } } )
        # end

        render json: Playlist.find(params[:id]).to_json( include: { songs: { :include => :album } } )
    end

    def create
        @playlist = Playlist.new(params.require(:playlist).permit(:name))

        if @playlist.save
            render json: @playlist
        else
            render json: { message: "Playlist could not be created" }
        end
    end
end
