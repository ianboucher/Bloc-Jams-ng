class CreatePlaylistings < ActiveRecord::Migration
  def change
    create_table :playlistings do |t|
      t.references :song
      t.references :playlist

      t.timestamps null: false
    end
  end
end
