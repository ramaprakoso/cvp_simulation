<div class="row">
  <div class="col-md-6">
    <form>
      <div class="form-group" action="../include/contoh.php">
        <label class="col-sm-8 col-form-label"><b>Total Unit yang terjual per bulan</b></label>
        <div class="col-sm-12">
          <input type="text" class="form-control"  placeholder="Total Unit Per Bulan">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Harga Jual Per Unit</b></label>
        <div class="col-sm-12">
          <input type="text" class="form-control"  placeholder="Harga Jual Per Unit">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Harga Variabel Unit</b></label>
        <div class="col-sm-12">
          <input type="text" class="form-control"  placeholder="Harga Variabel Unit">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Fix Cost Per Bulan</b></label>
        <div class="col-sm-12">
          <input type="text" class="form-control"  placeholder="Fix Cost Per Bulan">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Company Target</b></label>
        <div class="col-sm-12">
          <input type="text" class="form-control"  placeholder="Company Target">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-8 col-form-label"><b>Pilih Perhitungan</b></label>
        <div class="col-sm-12">
          <select class="custom-select">
            <option selected>Break Event Point</option>
            <option value="1">Contribution Margin Approach</option>
            <option value="2">Total Provit</option>
            <option value="3">Change in Fix Cost</option>
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
