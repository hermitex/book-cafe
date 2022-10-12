class BookxchangeSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :book_received_id, :book_sent_id, :return_date, :status
end
