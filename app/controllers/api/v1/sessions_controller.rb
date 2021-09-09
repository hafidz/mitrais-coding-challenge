class Api::V1::SessionsController < ApplicationController
  def create
    ap @member = Member.find_by_email(params[:username])
    if @member&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @member.id)
      time = Time.now + 24.hours.to_i
      @member.token = token
      @member.save
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     username: @member.username }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
