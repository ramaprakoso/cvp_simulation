<html>
	<head>
		<title>Contoh Program Analisis CVP</title>
	</head>
	<body>
		<center>BEP</center>
		<form action="aksi.php" method="post">
			<div>
				Total unit yang terjual per bulan <input type="text" name="satu" Placeholder="Masukan Total Unit"><br/>
			</div>
			<div>
				Harga jual per unit <input type="text" name="dua" Placeholder="Masukan harga jual"><br/>
			</div>
			Harga variabel per unit <input type="text" name="tiga" Placeholder="Masukan harga variabel"><br/>
			Fixed Cost per bulan <input type="text" name="empat" Placeholder="Masukan fixed cost"><br/>
			Company Target <input type="text" name="lima" Placeholder="Masukan company target"><br/>
			Pilih Perhitungan
			<select name="operator">
				<option disabled>Pilih Salah Satu !</option>
				<option>Break Even Point</option>
				<option>Contribution Margin Approach</option>
				<option>Total Provit</option>
				<option>Changed in Fixed Cost</option>
			</select>
			<input type="reset" Value="Batal">
			<input type="submit" Value="Hitung">
		</form>
	</body>
</html>