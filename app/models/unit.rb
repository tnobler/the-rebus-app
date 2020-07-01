class Unit < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :property

  validates :number, presence: true
end
