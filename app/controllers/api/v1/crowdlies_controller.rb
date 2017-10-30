class Api::V1::CrowdliesController < ApplicationController

	respond_to :json
	skip_before_action  :verify_authenticity_token

  	def index
  		respond_with Crowdly.where(user_id: params[:id])
  	end
end
