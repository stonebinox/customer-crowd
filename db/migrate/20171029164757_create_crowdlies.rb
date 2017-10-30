class CreateCrowdlies < ActiveRecord::Migration[5.1]
  def change
    create_table :crowdlies do |t|
      t.integer :user_id
      t.string :name
      t.string :image
      t.string :bio
      t.string :facebook
      t.string :twitter
      t.string :instagram
      t.string :linkedin
      t.text :review

      t.timestamps
    end
  end
end
