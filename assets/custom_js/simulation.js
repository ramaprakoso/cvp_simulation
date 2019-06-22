$(document).ready(function(){
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

    $(document).on('keyup', '#company_target', function(){
      var n = $(this).val().replace(/\D/g, '');
            if (n == '')
                {
                    $(this).val('');
                    return false;
                }
                $(this).val(parseInt(n, 10).toLocaleString().replace(/,/g, '.'));
    });

    $(document).on('submit', '#form_cvp', function(e){
      e.preventDefault();
      var satu = parseInt($("#total_unit").val().replace(/\./g,''));
      var dua = parseInt($("#harga_jual").val().replace(/\./g,''));
      var tiga = parseInt($("#harga_variabel").val().replace(/\./g,''));
      var empat = parseInt($("#fix_cost").val().replace(/\./g,''));
      var lima = parseInt($("#company_target").val().replace(/\./g,''));


      var cmtotal = (satu*dua)-(satu*tiga);
      var cmunit = (dua-tiga);
      var cmpersen = (cmunit/dua)*100;
      var bep1 = empat/(dua-tiga);
      var tpunit = (empat+lima)/cmunit;
      var tpsales = (empat+lima)/(cmpersen/100);
      var cfcunit = (empat+lima)/cmunit;

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
