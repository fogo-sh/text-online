defmodule TextOnline.MixProject do
  use Mix.Project

  def project do
    [
      app: :textonline,
      version: "0.1.0",
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {TextOnline.Application, []}
    ]
  end

  defp deps do
    [
      {:cowboy, "~> 2.9"}
    ]
  end
end
