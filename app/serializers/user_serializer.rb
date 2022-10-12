class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :phone, :plan, :avatar_url, :location
  has_many :books
  has_many :ratings
end
