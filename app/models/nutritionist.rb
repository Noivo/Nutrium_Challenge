class Nutritionist < ApplicationRecord
    has_many :works
    has_many :clinics, through: :works
end
