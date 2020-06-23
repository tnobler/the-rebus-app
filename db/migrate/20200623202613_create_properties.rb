class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zipcode
      t.integer :unit_count
      t.integer :year_built
      t.boolean :ae_flood_zone
      t.string :msa
      t.string :submarket
      t.string :broker
      t.integer :analysis_year
      t.decimal :asking_price, precision: 14, scale: 2
      t.decimal :price_per_unit, precision: 14, scale: 2
      t.decimal :offer_price, precision: 14, scale: 2
      t.decimal :sales_price, precision: 14, scale: 2
      t.text :notes
      t.string :status
      t.string :fka
      t.string :photo

      t.timestamps
    end
  end
end
