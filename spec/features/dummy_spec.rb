require 'rails_helper'

describe 'dummy' do
  it 'says hello' do
    visit '/'
    expect(page).to have_content 'Hello'
  end
end