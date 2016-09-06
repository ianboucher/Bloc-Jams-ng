class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string   :title
      t.string   :artist
      t.string   :label
      t.integer  :year
      t.string   :artURL

      t.timestamps null: false
    end
  end
end
