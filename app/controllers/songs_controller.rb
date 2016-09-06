class SongsController < ApplicationController
    def index
        respond_with Song.all
    end

    def show
        respond_with Song.find(params[:id])
    end
end
