class CreateBookExchanges < ActiveRecord::Migration[6.1]
  def change
    create_table :book_exchanges do |t|
      t.bigint :sender_id
      t.bigint :receiver_id
      t.bigint :book_received_id
      t.bigint :book_sent_id
      t.date :return_date
      t.string :status

      t.timestamps
    end
  end
end
