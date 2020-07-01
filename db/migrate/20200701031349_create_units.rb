class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.string :number
      t.integer :sqft
      t.decimal :budget, precision: 14, scale: 2
      t.references :property, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
