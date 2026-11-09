# Kerangka Pikir — Decimal to Binary

Dokumen ini menjelaskan alur pada [script.js](./script.js). Tujuan program adalah menerima angka desimal non-negatif, mengubahnya menjadi bilangan biner, dan menampilkan animasi proses rekursi khusus untuk angka `5`.

## Gambaran sederhana

Bilangan biner hanya memakai angka `0` dan `1`. Cara fungsi di proyek ini mengubah angka desimal:

1. Bagi angka dengan `2`.
2. Simpan sisanya (`0` atau `1`).
3. Ulangi proses pada hasil pembagian bulat sampai mencapai `0` atau `1`.
4. Saat pemanggilan fungsi kembali, gabungkan hasil sebelumnya dengan sisa pembagian.

## Alur saat halaman dibuka

```text
AMBIL input angka, tombol Convert, area hasil, dan area animasi
SIAPKAN data pesan dan jeda untuk animasi angka 5
PASANG listener klik pada tombol Convert
PASANG listener Enter pada input
TUNGGU pengguna memasukkan angka dan meminta konversi
```

## Kerangka pseudocode fungsi

### `decimalToBinary(input)`

Fungsi ini memakai **rekursi**: fungsi memanggil dirinya sendiri dengan angka yang lebih kecil.

```text
TERIMA angka input

JIKA angka adalah 0 atau 1:
    KEMBALIKAN angka sebagai teks

BAGI angka dengan 2 dan bulatkan ke bawah
PANGGIL decimalToBinary() lagi dengan hasil pembagian
CARI sisa pembagian angka dengan 2
GABUNGKAN hasil pemanggilan tadi dengan sisa
KEMBALIKAN teks gabungan
```

Operator `%` mencari sisa pembagian, sedangkan `Math.floor()` membulatkan hasil pembagian ke bawah.

#### Contoh: mengubah angka 5 menjadi biner

```text
decimalToBinary(5)
  └─ decimalToBinary(2) + "1"    (5 dibagi 2 bersisa 1)
       └─ decimalToBinary(1) + "0" (2 dibagi 2 bersisa 0)
            └─ "1"                 (kasus dasar)

Saat hasil kembali:
decimalToBinary(1) → "1"
decimalToBinary(2) → "1" + "0" → "10"
decimalToBinary(5) → "10" + "1" → "101"
```

Kasus dasar (`0` atau `1`) penting agar rekursi berhenti. Tanpanya, fungsi akan terus memanggil dirinya sendiri.

### `showAnimation()`

Fungsi ini menampilkan animasi bertahap yang menjelaskan tumpukan pemanggilan fungsi untuk angka `5`.

```text
UBAH hasil sementara menjadi "Call Stack Animation"

UNTUK setiap langkah di animationData:
    setelah addElDelay:
        TAMBAHKAN kotak animasi dengan angka input langkah
    setelah showMsgDelay:
        GANTI isi kotak dengan penjelasan langkah rekursi
    setelah removeElDelay:
        HAPUS kotak animasi

SETELAH 20 detik:
    TAMPILKAN decimalToBinary(5) sebagai hasil
```

`setTimeout()` menjadwalkan pekerjaan setelah jeda tertentu tanpa menghentikan halaman. Data `animationData` berisi angka, pesan, dan waktu untuk menampilkan serta menghapus tiap kotak.

### `checkUserInput()`

Fungsi ini membaca dan memeriksa input sebelum konversi.

```text
BACA nilai dari input
UBAH nilai menjadi integer dengan parseInt()

JIKA input kosong, bukan angka, atau hasilnya kurang dari 0:
    TAMPILKAN peringatan
    BERHENTI

JIKA angka sama dengan 5:
    JALANKAN showAnimation()
    BERHENTI

UBAH angka menjadi biner dengan decimalToBinary()
TAMPILKAN hasil konversi
KOSONGKAN input
```

Input `5` memiliki jalur khusus karena program menampilkan animasi. Angka lainnya langsung dikonversi tanpa animasi.

## Cara program merespons pengguna

```text
Klik tombol Convert
    → jalankan checkUserInput()

Tekan Enter saat fokus di input
    → jalankan checkUserInput()
```

Kedua cara menjalankan konversi memakai fungsi yang sama, sehingga validasi dan hasilnya konsisten.

## Batasan perilaku kode saat ini

- Animasi hanya dibuat untuk angka `5`; `showAnimation()` memang mengonversi angka `5` secara tetap.
- `parseInt()` mengambil bagian bilangan bulat dari input. Contohnya, input desimal `5.8` dibaca sebagai `5`, dan teks seperti `12abc` dapat dibaca sebagai `12`. Jadi, pemeriksaan sekarang tidak memastikan seluruh input berisi angka bulat yang valid.
- Jalur animasi angka `5` tidak mengosongkan input, sedangkan jalur konversi biasa mengosongkannya.
- Jika tombol Convert ditekan berulang saat animasi berjalan, timer dan kotak animasi tambahan dapat dibuat karena fungsi tidak membersihkan animasi yang sedang berlangsung.

## Catatan penting: HTML saat ini tidak cocok

Saat diperiksa, [index.html](./index.html) masih berisi markup **Calorie Counter**, seperti `calorie-counter`, `budget`, dan `add-entry`. Sementara [script.js](./script.js) mencari elemen `number-input`, `convert-btn`, `result`, dan `animation-container`.

Artinya, pseudocode ini menjelaskan logika konversi yang ada di script, tetapi script tidak akan berjalan dengan halaman HTML saat ini sampai HTML menyediakan elemen dengan ID yang sesuai.
