class CreateClinics < ActiveRecord::Migration[6.0]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :street
      t.string :parish
      t.string :county
      t.string :district

      t.timestamps
    end
  end
end
