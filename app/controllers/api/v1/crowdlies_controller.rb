class Api::V1::CrowdliesController < ApplicationController

	respond_to :json

  	def index
  		respond_with Crowdly.where(user_id: params[:id])
  	end
end
