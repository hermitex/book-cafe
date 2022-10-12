class AddDefaultValue < ActiveRecord::Migration[6.1]
  def change
    change_column :book_exchanges, :status, :string, :default => 'pending'
  end
end
