class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rate
  has_one :user
end
