class Message < ApplicationRecord
	
	def as_json(_options = {})
    {
      message: greeting
    }
  end
end
