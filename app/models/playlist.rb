class Playlist < ActiveRecord::Base
  belongs_to :user
  has_many   :playlistings
  has_many   :songs, through: :playlistings
end
