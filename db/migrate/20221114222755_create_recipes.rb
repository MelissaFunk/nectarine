class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :link
      t.string :cuisine
      t.string :ingredients
      t.string :date
      t.string :cook_time
      t.boolean :is_favorite
      t.boolean :has_made
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
