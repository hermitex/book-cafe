class AddBooTypeToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :is_exchanged, :boolean, :default => false
  end
end
