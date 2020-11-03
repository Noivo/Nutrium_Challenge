class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :session
      t.decimal :price
      t.string :clinic_id

      t.timestamps
    end
  end
end
