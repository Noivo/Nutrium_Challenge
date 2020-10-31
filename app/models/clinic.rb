class Clinic < ApplicationRecord
    has_many :works
    has_many :nutritionists, through: :works
end
