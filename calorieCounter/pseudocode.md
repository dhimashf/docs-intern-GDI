# Kerangka Pikir — Calorie Counter

Dokumen ini menjelaskan alur [script.js](./script.js) dan elemen form pada [index.html](./index.html).

## Tujuan proyek

Pengguna memasukkan batas kalori harian, menambahkan makanan atau olahraga ke kategori tertentu, lalu menghitung sisa kalori. Tombol Clear menghapus isian dan hasil.

## Istilah dalam perhitungan

- **Budget**: batas kalori yang ditetapkan pengguna.
- **Consumed**: total kalori dari sarapan, makan siang, makan malam, dan camilan.
- **Burned**: total kalori olahraga.
- **Remaining**: `budget - consumed + burned`.
- Jika `remaining` negatif, hasil diberi label **Surplus**. Jika nol atau positif, hasil diberi label **Deficit** sesuai aturan kode saat ini.

## Alur utama

```text
Halaman dibuka
  ↓
Pengguna memilih kategori makanan/olahraga
  ↓
Klik Add Entry untuk membuat sepasang input nama dan kalori
  ↓
Pengguna mengisi budget dan nilai kalori
  ↓
Kirim form
  ↓
Cegah halaman dimuat ulang
  ↓
Ambil kalori dari setiap kategori dan validasi input
  ↓
Jika ada input tidak valid, hentikan perhitungan
  ↓
Jumlahkan konsumsi dan olahraga
  ↓
Hitung sisa kalori
  ↓
Tampilkan hasil
```

## Kerangka pseudocode fungsi

### `cleanInputString(teks)`

```text
TERIMA teks input
HAPUS tanda tambah, tanda minus, dan spasi
KEMBALIKAN teks yang sudah dibersihkan
```

Fungsi memakai regex `/[+-\s]/g`. Huruf `g` berarti hapus semua kecocokan, bukan hanya kecocokan pertama.

### `isInvalidInput(teks)`

```text
PERIKSA apakah teks berisi pola angka + huruf e + angka
ABAIAKAN perbedaan huruf besar/kecil
KEMBALIKAN kecocokan jika ada; jika tidak, hasilnya null
```

Contoh pola yang ditolak: `1e3` atau `2E5`. Pola ini mencegah notasi eksponen tertentu dipakai sebagai input kalori.

### `addEntry()`

```text
BACA kategori yang dipilih dari dropdown
CARI input-container di dalam kategori itu
HITUNG jumlah input nama yang sudah ada di kategori
TENTUKAN nomor entry berikutnya dengan jumlah + 1
BUAT label dan input untuk nama makanan/olahraga
BUAT label dan input untuk jumlah kalori
TAMBAHKAN HTML input ke kategori yang dipilih
```

Contohnya, jika kategori Breakfast sudah memiliki dua input nama, entry baru diberi nomor `3`.

### `getCaloriesFromInputs(daftarInput)`

```text
MULAI total kalori dari 0

UNTUK setiap input dalam daftar:
    BERSIHKAN teks input
    PERIKSA pola input yang tidak valid
    JIKA tidak valid:
        TAMPILKAN peringatan
        TANDAI isError = true
        KEMBALIKAN null untuk menghentikan pembacaan daftar ini
    UBAH teks menjadi angka
    TAMBAHKAN angka ke total

KEMBALIKAN total
```

Fungsi yang sama dipakai untuk input kategori maupun input budget. Input kosong yang dibaca sebagai angka akan menjadi `0`.

### `calculateCalories(event)`

```text
CEGAH perilaku default submit agar halaman tidak reload
RESET penanda isError menjadi false

AMBIL semua input angka dari:
    breakfast, lunch, dinner, snacks, exercise, dan budget

HITUNG jumlah kalori masing-masing menggunakan getCaloriesFromInputs()

JIKA isError true:
    BERHENTI dan jangan tampilkan hasil perhitungan

HITUNG consumed = breakfast + lunch + dinner + snacks
HITUNG remaining = budget - consumed + exercise

JIKA remaining < 0:
    label = "Surplus"
JIKA tidak:
    label = "Deficit"

TAMPILKAN label, sisa absolut, budget, consumed, dan exercise
HILANGKAN class "hide" agar hasil terlihat
```

`Math.abs(remaining)` menampilkan besar selisih sebagai angka positif. Label Surplus/Deficit memberi tahu arah selisihnya.

### `clearForm()`

```text
AMBIL semua elemen input-container
KOSONGKAN isi setiap container
KOSONGKAN input budget
KOSONGKAN hasil
SEMBUNYIKAN kembali area hasil dengan class "hide"
```

## Tombol dan event

| Event | Fungsi yang berjalan | Hasil |
| --- | --- | --- |
| Klik Add Entry | `addEntry()` | Menambah input pada kategori dropdown |
| Submit form | `calculateCalories(event)` | Memvalidasi lalu menghitung kalori |
| Klik Clear | `clearForm()` | Menghapus semua input tambahan dan hasil |

## Catatan penting tentang input

- HTML menetapkan `min="0"` pada input angka dan `required` pada budget untuk membantu validasi browser.
- `cleanInputString()` membuang tanda minus. Artinya, kode tidak menggunakan tanda negatif sebagai nilai kalori.
- `isError` adalah penanda bersama: jika satu input bermasalah, perhitungan berhenti sebelum hasil ditampilkan.
- Kategori makanan dijumlahkan sebagai kalori yang dikonsumsi. Kategori exercise ditambahkan kembali saat menghitung sisa.

## Catatan nama file CSS

`index.html` saat ini meminta file `styles.css`, tetapi file yang tersedia di folder ini bernama `style.css`. Ini tidak mengubah alur JavaScript, tetapi browser tidak akan menemukan CSS sampai nama pada HTML atau file CSS disamakan.
