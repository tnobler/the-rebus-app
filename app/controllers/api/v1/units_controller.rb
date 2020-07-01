class Api::V1::UnitsController < ApplicationController
  before_action :set_unit, only: [:show, :edit, :update, :destroy]

  def index
    @units = Unit.all
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

      def set_unit
          @unit = Unit.find(params[:id])
      end
end
