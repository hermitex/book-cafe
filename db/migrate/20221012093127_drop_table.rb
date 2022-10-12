class DropTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :books_exchanges
  end
end
