class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :cover_image, :author, :condition, :is_available
  has_one :user
end
