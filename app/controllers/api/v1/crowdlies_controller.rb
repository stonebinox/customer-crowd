class Api::V1::CrowdliesController < ApplicationController

	# before_action :set_headers
	respond_to :json
	skip_before_action  :verify_authenticity_token

			def index
				@user = User.find_by(token: params[:id])
  		@crowdlies = Crowdly.where(user_id: @user.id)
  		render json: @crowdlies
			end
			
			# private
			
			# 		def set_headers
			# 				headers['Access-Control-Allow-Origin'] = 'https://customer-crowd.herokuapp.com'
			# 				headers['Access-Control-Expose-Headers'] = 'ETag'
			# 				headers['Access-Control-Allow-Methods'] = 'GET'
			# 				headers['Access-Control-Allow-Headers'] = '*,x-requested-with,Content-Type,If-Modified-Since,If-None-Match'
			# 				headers['Access-Control-Max-Age'] = '86400'
			# 		end
end
