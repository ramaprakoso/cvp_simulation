$(document).ready(function(){

  $("#total_unit_group").hide()
  $("#harga_jual_group").hide()
  $("#harga_variabel_group").hide()
  $("#fix_cost_group").hide()
  $("#total_unit_tahun_group").hide()
  $("#company_target_group").hide()
  $("#change_fix_cost_group").hide()
  $("#change_variable_per_unit_group").hide()
  $("#change_in_sales_price_group").hide()

    $(document).on('keyup', '#total_unit', '#harga_jual', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#harga_jual', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#harga_variabel', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#fix_cost', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#total_unit_tahun', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#company_target', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#change_fix_cost', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#change_variable_per_unit', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('keyup', '#change_in_sales_price', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('change', '#operator', function(){
      operator = $(this).val();
      if((operator == "default")){
        $("#total_unit_group").hide()
        $("#harga_jual_group").hide()
        $("#harga_variabel_group").hide()
        $("#fix_cost_group").hide()
        $("#total_unit_tahun_group").hide()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()
      } else if(operator == "bep"){
        $("#total_unit_group").hide()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").show()
        $("#fix_cost_group").show()
        $("#total_unit_tahun_group").hide()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()
      } else if (operator == "cma"){
        $("#total_unit_group").show()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").show()
        $("#fix_cost_group").hide()
        $("#total_unit_tahun_group").hide()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()

      } else if (operator == "tp"){
        $("#total_unit_group").hide()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").show()
        $("#fix_cost_group").show()
        $("#total_unit_tahun_group").show()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()

      } else if (operator == "cfc"){
        $("#total_unit_group").hide()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").show()
        $("#fix_cost_group").show()
        $("#total_unit_tahun_group").show()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()
      } else if (operator == "cfpu"){
        $("#total_unit_group").hide()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").hide()
        $("#fix_cost_group").show()
        $("#total_unit_tahun_group").hide()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").show()
        $("#change_in_sales_price_group").hide()

      } else if (operator == "csp"){
        $("#total_unit_group").hide()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").hide()
        $("#fix_cost_group").show()
        $("#total_unit_tahun_group").hide()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").show()
        $("#change_in_sales_price_group").show()

      } else if (operator == "ms"){
        $("#total_unit_group").show()
        $("#harga_jual_group").show()
        $("#harga_variabel_group").hide()
        $("#fix_cost_group").hide()
        $("#total_unit_tahun_group").show()
        $("#company_target_group").hide()
        $("#change_fix_cost_group").hide()
        $("#change_variable_per_unit_group").hide()
        $("#change_in_sales_price_group").hide()

      }
    });

    $(document).on('submit', '#form_cvp', function(e){
      e.preventDefault();
      var satu = parseInt($("#total_unit").val().replace(/\./g,''));
      var dua = parseInt($("#harga_jual").val().replace(/\./g,''));
      var tiga = parseInt($("#harga_variabel").val().replace(/\./g,''));
      var empat = parseInt($("#fix_cost").val().replace(/\./g,''));
      var enam = parseInt($("#total_unit_tahun").val().replace(/\./g,''));
      var lima = parseInt($("#company_target").val().replace(/\./g,''));
      var tujuh = parseInt($("#change_fix_cost").val().replace(/\./g,''));
      var delapan = parseInt($("#change_variable_per_unit").val().replace(/\./g,''));
      var sembilan = parseInt($("#change_in_sales_price").val().replace(/\./g,''));

      var cmtotal = (satu*dua)-(satu*tiga);
      var cmunit = (dua-tiga);
      var cmpersen = (cmunit/dua)*100;
      var bep1 = empat/(dua-tiga);
      var tpunit = (empat+lima)/cmunit;
      var tpsales = (empat+lima)/(cmpersen/100);
      var cfcunit = (empat+lima)/cmunit;
      var margin = (enam-satu) * dua;


      //perhitungan perubahan fixed cost
      var perubahanfixedcostunit=(empat+tujuh)/(dua-tiga);
      var perubahanfixedcostpersen=(empat+tujuh)/(cmpersen/100);


      //perhitungan perubahan variable per unit
      var perubahanvaribaleperunit=(empat)/(dua-delapan);
      var perubahanvariable=(dua)-(delapan);
      var perubahanvariableCM=(perubahanvariable/dua)*100;
      var perubahanvariablepersen=(empat)/(perubahanvariableCM/100);


      //perhitungan perubahan sales price
      var test=empat;
      var test1=perubahanvariable+sembilan;
      var perubahansalespriceunit=(empat)/(perubahanvariable+sembilan);
      var perubahansalespricedollar=(empat)/((perubahanvariable+sembilan)/(dua+sembilan));




      var bep = $("#operator").val();

      if(bep == "bep"){
        // $("#hasil").text(empat/(dua-tiga));
        document.getElementById("hasil").innerHTML = "<br>  Hasil BEP adalah : " + bep1 ;

      } else if (bep == "cma"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil total margin kontribusi Adalah : " + cmtotal +
        "<br> Hasil unit margin kontribusi Adalah : " + cmunit + " Unit" +
        "<br> Hasil persen margin kontribusi Adalah : " + cmpersen + "%";
        // $("#hasil").text(satu-dua);
      } else if (bep == "tp"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil unit Total Provit Adalah : " + tpunit + " Unit" +
        "<br> Hasil sales Total Provit Adalah : " + tpsales ;
        // $("#hasil").text(satu-dua);
      } else if (bep == "cfc"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil Changed in Fixed Cost Adalah : " + cfcunit ;
        // $("#hasil").text(satu-dua);
      } else if (bep == "cfpu"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil BEP terbaru dalam unit setelah Changed in Variable Per Unit adalah :" + perubahanvaribaleperunit +
    	  "<br> Hasil %CM terbaru setelah Changed in Variable Per Unit adalah :" + perubahanvariableCM +
    	  "<br> Hasil BEP terbaru dalam $ setelah Changed in Variable Per Unit adalah :" + perubahanvariablepersen;
      } else if (bep == "csp"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil BEP terbaru dalam unit setelah Changed in Variable Per Unit adalah :" + perubahansalespriceunit +
  	  	"<br> Hasil BEP terbaru dalam persen setelah Changed in Variable Per Unit adalah :" + perubahansalespricedollar;
      } else if (bep == "ms"){
        document.getElementById("hasil").innerHTML =
        "<br> Hasil Margin Safety Adalah : " + margin ;
        // $("#hasil").text(satu-dua);
      }
    });


});

function reset()
{
  $("#total_unit").val('');
  $("#harga_jual").val('');
  $("#harga_variabel").val('');
  $("#fix_cost").val('');
  $("#company_target").val('');
}
