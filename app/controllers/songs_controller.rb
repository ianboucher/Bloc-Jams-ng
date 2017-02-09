class SongsController < ApplicationController
    def index
        render json: Song.all.to_json(:include => :album)
    end

    def show
        render json: Song.find(params[:id]).to_json(:include => :album)
    end
end
