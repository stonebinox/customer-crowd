class CrowdliesController < ApplicationController
  
  before_action :get_crowdly, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json

  def index
    @crowdlies = Crowdly.where(user_id: current_user.id)
  end

  def show
  end

  def new
    @crowdly = Crowdly.new()
  end

  def create
    @crowdly = current_user.crowdlies.new(crowdly_params)
    if @crowdly.save
      redirect_to crowdlies_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @crowdly.update_attributes(crowdly_params)
      flash[:notice] = "Successfully updated crowdly!"
      redirect_to crowdlies_path
    else
      flash[:alert] = "Error updating crowdly!"
      render :edit
    end
  end

  def destroy
    @crowdly.delete
    redirect_to crowdlies_path
  end

  private
    def get_crowdly
      @crowdly = Crowdly.find(params[:id])
    end

    def crowdly_params
      params.require(:crowdly).permit(:name, :bio, :image, :facebook, :twitter, :instagram, :linkedin, :review)
    end
end
