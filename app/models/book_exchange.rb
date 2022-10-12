class BookExchange < ApplicationRecord
  validates :sender_id, presence: true
  validates :receiver_id, presence: true
  validates :book_received_id, presence: true
  validates :book_sent_id, presence: true
  validates :status, inclusion: {in: ["pending", "accepted", "returned"]}
  validates :return_date, presence: true
end
