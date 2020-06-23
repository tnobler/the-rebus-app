class Api::V1::PropertiesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_property, only: [:show, :edit, :update, :destroy]

  def index
    @properties = current_user.properties.all
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
  end

  def create
    @property = current_user.properties.build(property_params)
    if authorized?
      respond_to do |format|
        if @property.save
          format.json { render :show, status: :created, location: api_v1_property_path(@property) }
        else
          format.json { render json: @property.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def update
    if authorized?
      respond_to do |format|
        if @property.update(property_params)
          format.json { render :show, status: :ok, location: api_v1_property_path(@property) }
        else
          format.json { render json: @property.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def destroy
    if authorized?
      @property.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      handle_unauthorized
    end
  end

  private

    def set_property
        @property = Property.find(params[:id])
    end

    def authorized?
      @property.user == current_user
    end

    def handle_unauthorized
      unless authorized? 
        respond_to do |format|
          format.json { render :unauthorized, status: 401 }
        end
      end
    end

    def property_params
      params.require(:property).permit(:name, :street_address, :city, :state, :zipcode, :unit_count, :year_built, :ae_flood_zone, :msa, :submarket, :broker, :analysis_year, :asking_price, :price_per_unit, :offer_price, :sales_price, :notes, :status, :fka, :photo)
    end
end
