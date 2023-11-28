class CreateCases < ActiveRecord::Migration[7.0]
  def change
    create_table :cases do |t|
      t.string :title
      t.text :description
      t.string :video

      t.timestamps
    end
  end
end
