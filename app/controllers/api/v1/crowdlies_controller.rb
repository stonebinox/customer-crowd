class Api::V1::CrowdliesController < ApplicationController

	respond_to :json
	skip_before_action  :verify_authenticity_token

			def index
				@user = User.find_by(token: params[:id])
  		@crowdlies = Crowdly.where(user_id: @user.id)
  		render json: @crowdlies
  	end
end
