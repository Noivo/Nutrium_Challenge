class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.string :clinic_id
      t.string :nutritionist_id

      t.timestamps
    end
  end
end
