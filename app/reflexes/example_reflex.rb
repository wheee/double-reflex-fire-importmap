# frozen_string_literal: true

class ExampleReflex < ApplicationReflex
  def poke
    puts "***** Reflex method hit #{Time.zone.now}"

    morph :nothing
  end
end
