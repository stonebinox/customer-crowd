class Crowdly < ApplicationRecord

	mount_uploader :image, CrowdlyImageUploader

	belongs_to :user

end
