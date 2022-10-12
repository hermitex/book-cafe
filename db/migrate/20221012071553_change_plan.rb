class ChangePlan < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :plan, :string, :default => "basic"
  end
end
