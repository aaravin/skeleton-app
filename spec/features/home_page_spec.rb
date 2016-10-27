require 'rails_helper'

describe 'home page' do
  it 'displays title Home' do
    visit '/'
    expect(page).to have_content 'Home'
  end
end