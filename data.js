// ==========================================
// TUGAS REVISI DO-WHILE & JSON - KELOMPOK 3
// Anggota: Aryy & Davin
// ==========================================

// 1. Data awal sesuai permintaan tugas
let dataAwal = [10, 5, 20, 15, 30];

// 2. Menyimpan data awal ke dalam format JSON (Simulasi penyimpanan data)
let objekData = {
    kelompok: "Kelompok 3",
    anggota: ["Aryy", "Davin"],
    keterangan: "Data sebelum di-sorting menggunakan Bubble Sort",
    arrayData: dataAwal
};

// Mengubah objek JavaScript menjadi string JSON
let jsonStringAwal = JSON.stringify(objekData, null, 2);
console.log("--- DATA JSON AWAL ---");
console.log(jsonStringAwal);

// 3. Memproses data dari JSON untuk di-sorting
let dataTerparse = JSON.parse(jsonStringAwal);
let arr = dataTerparse.arrayData;

let n = arr.length;
let swapped;
let jumlahLangkah = 0;

console.log("\n--- PROSES BUBBLE SORT MENGGUNAKAN DO-WHILE ---");

// Do-While Luar untuk mengontrol perulangan sorting sampai benar-benar terurut
do {
    swapped = false;
    let i = 0;

    // Do-While Dalam untuk membandingkan elemen yang bersebelahan
    do {
        if (arr[i] > arr[i + 1]) {
            // Proses tukar posisi (Swapping) ala Excel/Manual
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
        i++;
    } while (i < n - 1);

    jumlahLangkah++;
    console.log(`Langkah ke-${jumlahLangkah}: [${arr.join(", ")}]`);

    n--; // Mengurangi batas cek karena elemen paling belakang sudah urut
} while (swapped);

// 4. Menyimpan hasil akhir kembali ke dalam format JSON
let hasilAkhirObjek = {
    kelompok: "Kelompok 3",
    anggota: ["Aryy", "Davin"],
    status: "Selesai Diurutkan",
    totalLangkah: jumlahLangkah,
    dataHasilSort: arr
};

let jsonStringAkhir = JSON.stringify(hasilAkhirObjek, null, 2);

console.log("\n--- JSON HASIL AKHIR ---");
console.log(jsonStringAkhir);