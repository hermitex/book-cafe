class User < ApplicationRecord
  has_many :books, dependent: :destroy
  has_many :ratings, dependent: :destroy
  has_many :book_exchanges, dependent: :destroy

  has_secure_password

  validates :username, presence: true, uniqueness: true, length: {minimum: 3, maximum: 30}

  validates :email, presence: true, uniqueness: true, email: true

  validates :password, presence: true, length: {minimum: 6, maximum: 80}, :on => :create

  validates :phone, presence: true, length: {is: 10}

  validates :location, presence: true


end
