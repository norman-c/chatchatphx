defmodule Chatchat.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :name, :string
      add :date, :string
      add :body, :text
      add :room, :string

      timestamps()
    end

  end
end
