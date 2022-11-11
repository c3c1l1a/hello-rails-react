class Api::V1::MessagesController < ApplicationController
	def index
    @message = Message.random
    render json: @message
  end
end
