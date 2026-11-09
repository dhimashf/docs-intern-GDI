# Kerangka Pikir — Date Formatter

Dokumen ini menjelaskan alur proyek pemformat tanggal dengan bahasa sederhana. Gunakan bersama [index.html](./index.html) dan [script.js](./script.js).

## Tujuan proyek

Tampilkan tanggal hari ini. Saat pengguna memilih format lain dari dropdown, ubah tampilan tanggal sesuai pilihannya.

## Alur yang diharapkan

```text
Halaman dibuka
  ↓
JavaScript mengambil dropdown dan tempat untuk menampilkan tanggal
  ↓
JavaScript membaca tanggal dan waktu sekarang
  ↓
Tanggal ditampilkan dalam format hari-bulan-tahun
  ↓
Pengguna memilih format di dropdown
  ↓
JavaScript membaca pilihan
  ↓
Pilih cara menyusun tanggal
  ↓
Tampilkan hasilnya
```

## Kerangka pseudocode

```text
AMBIL elemen untuk menampilkan tanggal
AMBIL dropdown pilihan format

BUAT nilai tanggal dan waktu sekarang
BACA hari, bulan, tahun, jam, dan menit

SUSUN tanggal awal sebagai "hari-bulan-tahun"
TAMPILKAN tanggal awal

SAAT pilihan dropdown berubah:
    JIKA pilihan adalah "tahun-bulan-hari":
        SUSUN ulang bagian tanggal
    JIKA pilihan adalah "bulan-hari-tahun-jam-menit":
        SUSUN tanggal dan waktu
    SELAIN ITU:
        TAMPILKAN lagi format "hari-bulan-tahun"
```

## Cara berpikir per bagian

### 1. Mengambil elemen halaman

- `current-date` adalah tempat hasil tanggal ditampilkan.
- `date-options` adalah dropdown tempat pengguna memilih format.
- `getElementById(...)` mencari elemen berdasarkan nilai `id` di HTML.

### 2. Membaca tanggal sekarang

- `new Date()` membuat nilai tanggal dan waktu saat halaman dibuka.
- `getDate()` mengambil hari.
- `getMonth()` mengambil bulan dengan hitungan mulai dari `0`, jadi kode menambahkan `1`.
- `getFullYear()` mengambil tahun.
- `getHours()` dan `getMinutes()` mengambil jam dan menit.

### 3. Menampilkan format awal

Susun hari, bulan, dan tahun menjadi satu teks, lalu masukkan ke `textContent` milik elemen tanggal.

### 4. Merespons pilihan pengguna

Event `change` berjalan saat pilihan dropdown berubah. `switch` memeriksa `value` pilihan:

- `yyyy-mm-dd`: pecah teks tanggal menjadi bagian-bagian, balik urutannya, lalu gabungkan lagi.
- `mm-dd-yyyy-h-mm`: susun teks baru yang berisi tanggal dan waktu.
- `default`: gunakan format awal jika pilihan tidak cocok dengan dua pilihan khusus.

`break` mengakhiri satu pilihan `case` supaya kode tidak melanjutkan ke pilihan berikutnya.

## Catatan penting tentang file saat ini

**Isi `script.js` di folder ini tidak cocok dengan proyek Date Formatter.** HTML di folder ini memiliki `date-options` dan `current-date`, tetapi `script.js` berisi kode Music Player dan mencari elemen seperti `playlist-songs` serta `play`. Pasangan kode Music Player itu dijelaskan di [pseudocode Music Player](<../FreeCodeCamp(music)/pseudocode.md>).

Jadi, kerangka di atas menjelaskan perilaku yang dimaksud oleh `index.html` Date Formatter. Agar halaman benar-benar bekerja, `script.js` perlu berisi logika pemformat tanggal seperti pseudocode di atas.
