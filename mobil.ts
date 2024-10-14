let mobil = [
	{
		id: 1,
		name: 'Toyota',
		tipe: 'Fortuner',
		warna: 'hitam',
		price: 500000000,
	},
	{
		id: 2,
		name: 'Honda',
		tipe: 'Civic',
		warna: 'putih',
		price: 300000000,
	},
	{
		id: 3,
		name: 'Mitsubishi',
		tipe: 'Pajero',
		warna: 'abu-abu',
		price: 600000000,
	},
	{
		id: 4,
		name: 'Suzuki',
		tipe: 'Swift',
		warna: 'merah',
		price: 200000000,
	},
];

// Menampilkan semua data sebagai JSON
console.log(JSON.stringify(mobil, null, 2));

// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(mobil);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => mobil.find(tipemobil => tipemobil.name === name);
console.log("Data dengan nama Toyota:", getDataByName('Toyota'));

// TODO 3 : Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => mobil.filter(tipemobil => tipemobil.price === price);
console.log("Data dengan harga 500.000.000:", getDataByPrice(500000000));

// TODO 4 : Dapatkan data dengan warna >= hitam
const getDataByColor = (warna) => mobil.filter(tipemobil => tipemobil.warna >= warna);
console.log("Data dengan warna >= hitam:", getDataByColor('hitam'));
