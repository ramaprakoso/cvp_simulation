<div class="row">
  <div class="col-md-6">
    <form action="" method="">
      <div class="form-group" id="total_unit_group">
        <label class="col-sm-8 col-form-label"><b>Total Unit yang terjual per bulan</b></label>
        <div class="col-sm-12">
          <input type="number" class="form-control"  id="total_unit" placeholder="Total Unit Per Bulan">
        </div>
      </div>
      <div class="form-group" id="harga_jual_group">
        <label class="col-sm-8 col-form-label"><b>Harga Jual Per Unit</b></label>
        <div class="col-sm-12">
          <input type="number" class="form-control" id="harga_jual" placeholder="Harga Jual Per Unit">
        </div>
      </div>
      <div class="form-group" id="harga_variabel_group">
        <label class="col-sm-8 col-form-label"><b>Harga Variabel Unit</b></label>
        <div class="col-sm-12">
          <input type="number" class="form-control" id="harga_variabel" placeholder="Harga Variabel Unit">
        </div>
      </div>
      <div class="form-group" id="fix_cost_group">
        <label class="col-sm-8 col-form-label"><b>Fix Cost Per Bulan</b></label>
        <div class="col-sm-12">
          <input type="number" class="form-control" id="fix_cost" placeholder="Fix Cost Per Bulan">
        </div>
      </div>
      <div class="form-group" id="company_target_group">
        <label class="col-sm-8 col-form-label"><b>Company Target</b></label>
        <div class="col-sm-12">
          <input type="number" class="form-control" id="company_target" placeholder="Company Target">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Pilih Perhitungan</b></label>
        <div class="col-sm-12">
          <select class="custom-select" name="select_rumus" id="state">
            <option selected value="bep">Break Event Point</option>
            <option value="cma">Contribution Margin Approach</option>
            <option value="tp">Total Provit</option>
            <option value="cfc">Change in Fix Cost</option>
          </select>
        </div>
      </div>
      <div class="form-group float-right">
        <div class="col-sm-12">
           <button type="submit" class="btn btn-warning">Reset</button>
           <button type="submit" class="btn btn-primary">Hitung</button>
        </div>
      </div>
    </form>
  </div>
  <!-- Result -->
  <div class="col-md-6">
    <label><b>Result : </b></label>
  </div>
  <!-- End Result -->
</div>
