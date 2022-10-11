class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :category
      t.string :cover_image
      t.string :author
      t.string :condition
      t.boolean :is_available
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
