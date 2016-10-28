require 'rails_helper'

describe 'home page' do
  it 'displays messages' do
    visit '/'
    expect(page).to have_css('.message', count: 1)
  end
end