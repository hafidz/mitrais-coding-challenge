require 'rails_helper'

RSpec.describe Member, type: :model do
  context 'validation tests' do
    it 'ensures username presence' do
      member = Member.new(email: 'test@mail.com', password: '123456').save
      expect(member).to eq(false)
    end

    it 'ensures email presence' do
      member = Member.new(username: 'test', password: '123456').save
      expect(member).to eq(false)
    end

    it 'ensures email correct format' do
      member = Member.new(username: 'test', email: 'test@mail.com', username: 'test').save
      expect(member).to eq(false)
    end

    it 'should save successfully' do
      member = Member.new(username: 'test', email: 'test@mail.com', password: '123456').save
      expect(member).to eq(true)
    end

    
  end
end
