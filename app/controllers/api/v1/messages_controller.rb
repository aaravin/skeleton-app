class Api::V1::MessagesController < ApplicationController
	def index
		render json: {messages: ['Ashwin is Awesome']}
	end
end

