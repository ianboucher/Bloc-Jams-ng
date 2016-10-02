class Song < ActiveRecord::Base
    belongs_to :album
    has_many   :playlistings
    has_many   :playlists, through: :playlistings
end
