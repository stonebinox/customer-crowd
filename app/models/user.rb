class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


 validates :name, presence: true
 validates :website, presence: true
 validates :token, presence: true

 has_many :crowdlies

end
