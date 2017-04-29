class PlaylistingsController < ApplicationController

    def create
        @playlisting = Playlisting.new(params.permit(:playlist_id, :song_id))

        if @playlisting.save
            render json: @playlisting
        else
            render json: { message: "Playlisting could not be created" }
        end
    end

    def destroy
        @playlist = Playlist.find(params[:playlist_id])
        @song     = Song.find(params[:song_id])

        if @playlist.songs.delete(@song)
            render json: { message: "Playlisting successfully deleted" }
        else
            render json: { message: "Playlisting could not be deleted" }
        end
    end
end
