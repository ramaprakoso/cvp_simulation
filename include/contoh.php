<?php
	$satu=$_POST['satu'];
	$dua=$_POST['dua'];
	$tiga=$_POST['tiga'];
	$empat=$_POST['empat'];
    $lima=$_POST['lima'];
    $enam=$_POST['enam'];
    $tujuh=$_POST['tujuh'];
    $delapan=$_POST['delapan'];
    $sembilan=$_POST['sembilan'];
	$operator=$_POST['operator'];
	$cmtotal=($satu*$dua)-($satu*$tiga);
	$cmunit=($dua)-($tiga);
	$cmpersen=($cmunit/$dua)*100;
	$bep=$empat/($dua-$tiga);
	$tpunit=($empat+$lima)/$cmunit;
	$tpsales=($empat+$lima)/($cmpersen/100);
	$cfcunit=($empat+$lima)/$cmunit;
	$margin=($enam-$satu)*$dua;

	// perhitungan perubahan fixed cost
	$perubahanfixedcostunit=($empat+$tujuh)/($dua-$tiga);
	$perubahanfixedcostpersen=($empat+$tujuh)/($cmpersen/100);

	//perhitungan perubahan variable per unit
	$perubahanvaribaleperunit=($empat)/($dua-$delapan);
	$perubahanvariable=($dua)-($delapan);
	$perubahanvariableCM=($perubahanvariable/$dua)*100;
	$perubahanvariablepersen=($empat)/($perubahanvariableCM/100);

	//perhitungan perubahan sales price
	$test=$empat;
	$test1=$perubahanvariable+$sembilan;
	$perubahansalespriceunit=($empat)/($perubahanvariable+$sembilan);
	$perubahansalespricedollar=($empat)/(($perubahanvariable+$sembilan)/($dua+$sembilan));

	if ($operator=="Pilih Salah Satu !")
	{
		echo "Maaf Anda Tidak Memilih Operator..!";
	}
	else if ($operator=="Break Even Point")
	{
		echo "Hasil perhitungan Break Even Point Adalah $bep<br/>";
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
	else if ($operator=="Margin Safety")
	{
		echo "Hasil Margin Safety adalah $margin<br/>";
	}
	else if ($operator=="Changed in Fixed Cost")
	{
		echo "Hasil BEP terbaru dalam unit adalah $perubahanfixedcostunit<br/>";
		echo "Hasil BEP terbaru dalam persen adalah $perubahanfixedcostpersen<br/>";
	}
	else if ($operator=="Changed in Variable Per Unit")
	{
		echo "Hasil BEP terbaru dalam unit setelah Changed in Variable Per Unit adalah $perubahanvaribaleperunit unit<br/>";
		echo "Hasil %CM terbaru setelah Changed in Variable Per Unit adalah $perubahanvariableCM %<br/>";
		echo "Hasil BEP terbaru dalam $ setelah Changed in Variable Per Unit adalah $ $perubahanvariablepersen<br/>";
	}
	else if ($operator=="Changed in Sales Price")
	{
		echo "Hasil BEP terbaru dalam unit setelah Changed in Variable Per Unit adalah $perubahansalespriceunit<br/>";
		echo "Hasil BEP terbaru dalam persen setelah Changed in Variable Per Unit adalah $perubahansalespricedollar<br/>";
	}
?>
