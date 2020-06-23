class Api::V1::PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :edit, :update, :destroy]
  def index
  end
  def show
  end
  def create
  end
  def update
  end
  def destroy
  end
  private
      def set_property
          @property = Property.find(params[:id])
      end
end
