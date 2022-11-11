# frozen_string_literal: true

class Message < ApplicationRecord
  def self.random
    Message.order('RANDOM()').first
  end

  def as_json(_options = {})
    {
      message: greeting
    }
  end
end
