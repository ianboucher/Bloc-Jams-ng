class CreatePlaylistings < ActiveRecord::Migration
  def change
    create_table :playlistings do |t|
      t.references :song#,     index: true, foreign_key: true
      t.references :playlist#, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
