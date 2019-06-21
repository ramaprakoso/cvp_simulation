<?php
	$satu=$_POST['satu'];
	$dua=$_POST['dua'];
	$tiga=$_POST['tiga'];
	$empat=$_POST['empat'];
  $lima=$_POST['lima'];

	$rumus = $_POST['select_rumus'];

	$operator=$_POST['operator'];
	$cmtotal=($satu*$dua)-($satu*$tiga);
	$cmunit=($dua)-($tiga);
	$cmpersen=($cmunit/$dua)*100;
	$bep=$empat/($dua-$tiga);
	$tpunit=($empat+$lima)/$cmunit;
	$tpsales=($empat+$lima)/($cmpersen/100);
	$cfcunit=($empat+$lima)/$cmunit;

	if($rumus == "bep"){

	} else if($rumus == "cma"){

	} else if($rumus == "tp"){

	} else {

	}

	if ($operator=="Pilih Salah Satu !")
	{
		echo "Maaf Anda Tidak Memilih Operator..!";
	}
	else if ($operator=="Break Even Point")
	{
		echo "Hasilnya Adalah $bep";
	}
	else if ($operator=="Contribution Margin Approach")
	{
		echo "Hasil total margin kontribusi Adalah $cmtotal <br/>";
		echo "Hasil unit margin kontribusi Adalah $cmunit unit<br/>";
		echo "Hasil persen margin kontribusi Adalah $cmpersen %<br/>";
	}
	else if ($operator=="Total Provit")
	{
		echo "Hasil unit Total Provit Adalah $tpunit unit<br/>";
		echo "Hasil sales Total Provit Adalah $tpsales <br/>";
	}
	else if ($operator=="Changed in Fixed Cost")
	{
		echo "Hasil Changed in Fixed Cost adalah $cfcunit<br/>";
	}
?>
