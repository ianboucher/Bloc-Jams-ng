class CreateSongs < ActiveRecord::Migration
  def change
    create_table   :songs do |t|
      t.references :album, index: true, foreign_key: true
      t.string     :title
      t.integer    :duration
      t.string     :audioURL

      t.timestamps null: false
    end
  end
end
