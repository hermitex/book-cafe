class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rate
  has_one :book
  has_one :user
end
