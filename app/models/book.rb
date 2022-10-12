class Book < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :book_exchanges, dependent: :destroy

  validates :title, presence: true
  validates :category, presence: true, inclusion: {in: ["Fiction", "Fantasy", "Dystopian", "Mystery", "Horror","Romance" ]
  }
  validates :cover_image, presence: true
  validates :author, presence: true
  validates :condition, presence: true
end
