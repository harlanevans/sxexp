class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :location
      t.integer :cost
      t.datetime :start_date
      t.datetime :end_date
      t.integer :number_of_seats

      t.timestamps
    end
  end
end
