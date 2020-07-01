class Api::V1::UnitsController < ApplicationController
  before_action :authenticate_user!
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

      def authorized?
        @unit.property.user == current_user
      end

      def handle_unauthorized
        unless authorized?
          respond_to do |format|
            format.json { render :unauthorized, status: 401 }
          end
        end
      end
end
