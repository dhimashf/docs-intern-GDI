# Kerangka Pikir — ToDo List

Dokumen ini menjelaskan alur pada [script.js](./script.js). Baca bersama fungsi-fungsi di script untuk memahami bagaimana tugas dibuat, ditampilkan, diedit, dihapus, dan disimpan.

## Tujuan proyek

Pengguna dapat:

1. Membuka form untuk menulis tugas.
2. Menambahkan tugas dengan judul, tanggal, dan deskripsi.
3. Melihat daftar tugas yang sudah dibuat.
4. Mengedit atau menghapus tugas.
5. Menyimpan tugas di `localStorage`, agar tetap ada setelah halaman dimuat ulang.
6. Membatalkan penutupan form jika ada perubahan yang belum disimpan.

## Data yang disimpan

Setiap tugas berbentuk object:

```text
tugas:
    id
    title
    date
    description
```

- `taskData` adalah array semua tugas.
- `currentTask` menandai tugas yang sedang diedit. Jika tidak sedang mengedit, nilainya object kosong `{}`.
- `localStorage` menyimpan array sebagai teks JSON dengan nama key `"data"`.

## Alur saat halaman dibuka

```text
MINTA nilai "data" dari localStorage
JIKA data tersedia:
    UBAH teks JSON menjadi array object dengan JSON.parse()
JIKA tidak ada data:
    MULAI dengan array kosong

JIKA array tugas tidak kosong:
    TAMPILKAN semua tugas

PASANG event listener pada tombol dan form
```

Dengan demikian, daftar yang tersimpan sebelumnya dapat ditampilkan kembali setelah halaman dibuka ulang.

## Kerangka pseudocode fungsi

### `removeSpecialChars(teks)`

```text
HAPUS spasi di awal dan akhir teks
HAPUS karakter selain huruf A-Z, a-z, angka, spasi, dan tanda -
KEMBALIKAN teks yang sudah dibersihkan
```

Fungsi ini dipakai untuk judul dan deskripsi sebelum disimpan. Karakter seperti tanda baca dan huruf beraksen juga dihapus oleh pola regex yang digunakan sekarang.

### `addOrUpdateTask()`

Fungsi ini dipakai untuk menambahkan tugas baru maupun menyimpan perubahan tugas yang sedang diedit.

```text
JIKA judul kosong setelah spasi di awal/akhir diabaikan:
    TAMPILKAN peringatan
    BERHENTI

CARI posisi tugas dengan id yang sama dengan currentTask.id
BUAT object tugas dari input:
    id baru dari judul yang dibersihkan + waktu saat ini
    title yang dibersihkan
    date dari input tanggal
    description yang dibersihkan

JIKA tugas dengan id itu tidak ditemukan:
    TAMBAHKAN tugas baru ke awal array taskData
JIKA ditemukan:
    GANTI tugas lama pada posisi itu dengan object baru

SIMPAN taskData ke localStorage sebagai JSON
PERBARUI tampilan daftar tugas
KOSONGKAN dan tutup form dengan reset()
```

`findIndex()` menghasilkan `-1` jika tidak menemukan tugas. Itulah cara fungsi membedakan tugas baru dari tugas yang diedit. `unshift()` menaruh tugas baru di awal daftar.

### `updateTaskContainer()`

```text
KOSONGKAN isi container tugas

UNTUK setiap tugas di taskData:
    BUAT kartu yang menampilkan judul, tanggal, dan deskripsi
    TAMBAHKAN tombol Edit dan Delete
    MASUKKAN kartu ke container tugas
```

Fungsi ini membuat ulang tampilan dari data yang ada di `taskData`. Dengan begitu, daftar di halaman mengikuti data terbaru setelah penambahan atau perubahan.

### `deleteTask(buttonEl)`

```text
AMBIL id tugas dari kartu induk tombol yang diklik
CARI posisi tugas tersebut di taskData
HAPUS kartu dari halaman
HAPUS tugas dari array taskData
SIMPAN array terbaru ke localStorage
```

Tombol berada di dalam kartu tugas. Karena itu, `buttonEl.parentElement.id` dipakai untuk mendapatkan id kartu, lalu id tersebut dicocokkan dengan id tugas.

### `editTask(buttonEl)`

```text
AMBIL id tugas dari kartu induk tombol Edit
CARI tugas tersebut di taskData
SIMPAN object tugas ke currentTask
ISI input judul, tanggal, dan deskripsi dengan data tugas
UBAH tulisan tombol utama menjadi "Update Task"
TAMPILKAN form
```

Sesudah form disimpan, `addOrUpdateTask()` menemukan tugas yang sama melalui `currentTask.id`, lalu mengganti data lamanya, bukan menambahkan tugas baru.

### `reset()`

```text
UBAH tulisan tombol utama menjadi "Add Task"
KOSONGKAN semua input
TUTUP form
KOSONGKAN currentTask agar mode edit berakhir
```

Fungsi ini dipakai setelah tugas tersimpan dan ketika pengguna memilih membuang perubahan.

### Event tombol buka form

```text
SAAT tombol buka form diklik:
    BALIK status class "hidden" pada form
```

`classList.toggle()` menambahkan class jika belum ada dan menghapusnya jika sudah ada. CSS menentukan apakah form dengan class `hidden` terlihat atau tersembunyi.

### Event tombol tutup form

```text
SAAT tombol tutup form diklik:
    PERIKSA apakah ada isi di salah satu input
    PERIKSA apakah nilai input berbeda dari data currentTask

    JIKA form berisi perubahan yang belum disimpan:
        TAMPILKAN dialog konfirmasi
    JIKA tidak:
        reset() untuk mengosongkan dan menutup form
```

Saat membuat tugas baru, `currentTask` kosong. Saat mengedit, input dibandingkan dengan nilai tugas sebelum diedit.

### Event dialog konfirmasi

```text
SAAT Cancel diklik:
    TUTUP dialog
    JANGAN buang perubahan atau mereset form

SAAT Discard diklik:
    TUTUP dialog
    reset() untuk membuang perubahan dan menutup form
```

Jadi, Cancel berarti kembali ke form untuk melanjutkan pekerjaan. Discard berarti menghapus perubahan yang belum disimpan.

### Event submit form

```text
SAAT form dikirim:
    CEGAH browser memuat ulang halaman
    JALANKAN addOrUpdateTask()
```

Tombol submit bisa digunakan untuk menambah tugas atau memperbarui tugas, tergantung apakah pengguna sedang berada dalam mode tambah atau edit.

## Ringkasan alur penggunaan

```text
Tambah:
  buka form → isi data → submit → validasi judul → tambah ke array
  → simpan ke localStorage → gambar ulang daftar → reset form

Edit:
  klik Edit → isi form dengan data tugas → ubah data → submit
  → perbarui tugas yang sama → simpan → gambar ulang daftar → reset form

Hapus:
  klik Delete → cari tugas dari id kartu → hapus dari array
  → simpan ke localStorage

Tutup dengan perubahan:
  klik tombol tutup → tampilkan dialog
  → Cancel untuk kembali, atau Discard untuk membuang perubahan
```

## Catatan penting: file HTML saat ini tidak cocok

Saat diperiksa, [index.html](./index.html) masih berisi markup **Calorie Counter** (misalnya `calorie-counter`, `budget`, dan `add-entry`). Sementara itu, [script.js](./script.js) mencari elemen ToDoList seperti `task-form`, `title-input`, dan `tasks-container`.

Karena elemen-elemen ToDoList tersebut tidak ada di HTML saat ini, script tidak dapat terhubung dengan halaman seperti yang dijelaskan di atas. Pseudocode ini mengikuti `script.js` ToDoList; agar proyek dapat dijalankan, HTML perlu berisi elemen dengan ID yang sesuai.
