require 'rails_helper'

RSpec.describe Api::V1::MessagesController, type: :controller do
	describe 'index' do
		it 'renders message' do
			get :index
			json_response = JSON.parse(@response.body)
			expect(json_response).to eq({'messages' => ['Ashwin is Awesome']})
		end
	end
end
