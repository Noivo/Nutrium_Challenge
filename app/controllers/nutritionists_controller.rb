class NutritionistsController < ApplicationController
  before_action :set_nutritionist, only: [:show, :edit, :update, :destroy]

  # GET /nutritionists
  # GET /nutritionists.json
  def index
    @nutritionists = Nutritionist.all
  end

  # GET /nutritionists/1
  # GET /nutritionists/1.json
  def show
  end

  # GET /nutritionists/new
  def new
    @nutritionist = Nutritionist.new
  end

  # GET /nutritionists/1/edit
  def edit
  end

  # POST /nutritionists
  # POST /nutritionists.json
  def create
    @nutritionist = Nutritionist.new(nutritionist_params)

    respond_to do |format|
      if @nutritionist.save
        format.html { redirect_to @nutritionist, notice: 'Nutritionist was successfully created.' }
        format.json { render :show, status: :created, location: @nutritionist }
      else
        format.html { render :new }
        format.json { render json: @nutritionist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nutritionists/1
  # PATCH/PUT /nutritionists/1.json
  def update
    respond_to do |format|
      if @nutritionist.update(nutritionist_params)
        format.html { redirect_to @nutritionist, notice: 'Nutritionist was successfully updated.' }
        format.json { render :show, status: :ok, location: @nutritionist }
      else
        format.html { render :edit }
        format.json { render json: @nutritionist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nutritionists/1
  # DELETE /nutritionists/1.json
  def destroy
    @nutritionist.destroy
    respond_to do |format|
      format.html { redirect_to nutritionists_url, notice: 'Nutritionist was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nutritionist
      @nutritionist = Nutritionist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def nutritionist_params
      params.fetch(:nutritionist, {})
    end
end
