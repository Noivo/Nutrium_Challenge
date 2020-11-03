class CreateNutritionists < ActiveRecord::Migration[6.0]
  def change
    create_table :nutritionists do |t|
      t.string :name
      t.string :image_url
      t.integer :number

      t.timestamps
    end
  end
end
