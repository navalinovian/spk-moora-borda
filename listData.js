const kriteria = [
  { nama: "Kejelasan Peyampaian Materi", isBenefit: true, bobot: 0.2877155172 },
  { nama: "Jumlah Konten", isBenefit: true, bobot: 0.2920258621 },
  { nama: "Durasi", isBenefit: true, bobot: 0.2262931034 },
  { nama: "Views", isBenefit: true, bobot: 0.1939655172 }
];

// data[alternatif][kriteria]
const data = [
  [3, 2, 2, 1],
  [1, 2, 4, 2],
  [2, 4, 2, 2],
  [2, 4, 2, 2]
];

// ----------------------------------------
// MATRIKS NORMALISASI
// ----------------------------------------

// cari hasil akar setiap kriteria
let hasilAkar = [];
for (const c in data[0]) {
  let hasilKuadrat = 0;
  for (const a of data) {
    hasilKuadrat += Math.pow(a[c], 2);
  }
  hasilAkar[c] = Math.sqrt(hasilKuadrat);
}

// cari hasil normalisasi
let matriksNormalisasi = [];
for (const a in data) {
  let hasilKriteria = [];
  for (const c in data[a]) {
    hasilKriteria[c] = data[a][c] / hasilAkar[c];
  }
  matriksNormalisasi[a] = hasilKriteria;
}

// ----------------------------------------
// MATRIKS NILAI OPTIMASI MULTIOBJEK
// ----------------------------------------

let matriksOptimasi = [];
for (const a in matriksNormalisasi) {
  let hasilKriteria = [];
  for (const c in data[a]) {
    hasilKriteria[c] = kriteria[c].bobot * matriksNormalisasi[a][c];
  }
  matriksOptimasi[a] = hasilKriteria;
}

// ----------------------------------------
// HASIL NILAI OPTIMASI MULTIOBJEK
// ----------------------------------------

let nilaiMax = [];
let nilaiMin = [];

// mencari nilai max & min (jumlah semua total benefit & total cost)
for (const a in matriksOptimasi) {
  let hasilTambahMax = 0;
  let hasilTambahMin = 0;
  for (const c in matriksOptimasi[a]) {
    if (kriteria[c].isBenefit) {
      hasilTambahMax += matriksOptimasi[a][c];
    } else {
      hasilTambahMin += matriksOptimasi[a][c];
    }
  }
  nilaiMax[a] = hasilTambahMax;
  nilaiMin[a] = hasilTambahMin;
}

let nilaiAkhir = [];

// mencari nilai akhir
for (const i in nilaiMax) {
  nilaiAkhir[i] = nilaiMax[i] - nilaiMin[i];
}

// mencari ranking
let sorted = nilaiAkhir.slice().sort(function(a, b) {
  return b - a;
});
// .reverse();
let rank = nilaiAkhir.slice().map(function(v) {
  return sorted.indexOf(v) + 1;
});

// tampil tabel
view(nilaiAkhir, "hasilData");
view(rank, "rank");
