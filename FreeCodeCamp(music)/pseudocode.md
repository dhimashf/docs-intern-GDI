# Kerangka Pikir — Music Player

Dokumen ini menjelaskan cara kerja Music Player berdasarkan halaman [index.html](./index.html). Data lagu dan fungsi pemutar yang sesuai saat ini berada di [script.js folder Date](<../freeCodeCamp(Date)/script.js>).

## Tujuan proyek

Tampilkan playlist lagu. Pengguna dapat memutar, menjeda, berpindah lagu, mengacak urutan, dan menghapus lagu. Jika playlist kosong, pengguna dapat mengembalikannya.

## Data utama

- `allSongs`: daftar awal lagu. Setiap lagu punya `id`, `title`, `artist`, `duration`, dan alamat audio `src`.
- `userData.songs`: daftar lagu yang sedang digunakan aplikasi.
- `userData.currentSong`: lagu yang sedang dipilih/diputar, atau `null` jika tidak ada.
- `userData.songCurrentTime`: posisi audio terakhir saat dijeda.
- `audio`: object browser yang memuat dan memainkan file audio.

## Alur saat halaman dimulai

```text
Baca daftar lagu awal
  ↓
Salin daftar ke state pemutar (userData.songs)
  ↓
Urutkan lagu berdasarkan judul
  ↓
Buat baris playlist dari setiap lagu
  ↓
Atur label tombol Play agar mudah dipahami pembaca layar
  ↓
Tunggu klik pengguna atau lagu selesai
```

## Kerangka pseudocode fungsi

### `sortSongs()`

```text
URUTKAN userData.songs berdasarkan judul A-Z
KEMBALIKAN daftar yang sudah diurutkan
```

### `renderSongs(daftarLagu)`

```text
UNTUK setiap lagu dalam daftar:
    BUAT HTML berisi judul, artis, durasi, tombol Play, dan tombol Delete
GABUNGKAN semua HTML
GANTI isi playlist dengan HTML tersebut

JIKA daftar lagu kosong:
    BUAT tombol "Reset Playlist"
    SAAT tombol diklik:
        PULIHKAN salinan daftar lagu awal
        URUTKAN dan tampilkan ulang playlist
        PERBARUI label tombol Play
        HAPUS tombol Reset
```

Setiap baris lagu memanggil `playSong(id)` saat tombol lagunya diklik dan `deleteSong(id)` saat tombol hapus diklik.

### `playSong(id)`

```text
CARI lagu dengan id tersebut di userData.songs
ATUR alamat audio dan judul audio

JIKA belum ada lagu aktif ATAU id berbeda dari lagu aktif:
    MULAI dari awal lagu
JIKA tidak:
    LANJUTKAN dari posisi terakhir yang disimpan

SIMPAN lagu sebagai currentSong
TANDAI tombol Play sebagai sedang memutar
SOROT lagu aktif di playlist
TAMPILKAN judul dan artis di pemutar
PERBARUI label aksesibel tombol Play
MULAIKAN audio
```

### `pauseSong()`

```text
SIMPAN posisi audio saat ini ke songCurrentTime
HAPUS tanda "sedang memutar" dari tombol Play
JEDA audio
```

### `getCurrentSongIndex()`

```text
CARI posisi currentSong di dalam userData.songs
KEMBALIKAN posisi tersebut
```

Posisi array dimulai dari `0`, jadi lagu pertama berindeks `0`.

### `playNextSong()`

```text
JIKA belum ada currentSong:
    PUTAR lagu pertama
JIKA sudah ada currentSong:
    CARI indeks lagu aktif
    AMBIL lagu pada indeks berikutnya
    PUTAR lagu itu
```

### `playPreviousSong()`

```text
JIKA belum ada currentSong:
    BERHENTI
JIKA ada currentSong:
    CARI indeks lagu aktif
    AMBIL lagu pada indeks sebelumnya
    PUTAR lagu itu
```

### `shuffle()`

```text
ACAK urutan userData.songs
KOSONGKAN currentSong dan atur songCurrentTime ke 0
TAMPILKAN ulang playlist dengan urutan baru
JALANKAN pauseSong() untuk menjeda audio
KOSONGKAN informasi lagu di pemutar
PERBARUI label tombol Play
```

`pauseSong()` menyimpan posisi audio saat ini. Namun, karena `currentSong` sudah dikosongkan, pemanggilan `playSong()` berikutnya akan memulai lagu baru dari awal.

### `deleteSong(id)`

```text
JIKA lagu yang dihapus sedang aktif:
    KOSONGKAN currentSong dan atur songCurrentTime ke 0
    JALANKAN pauseSong() untuk menjeda audio
    KOSONGKAN tampilan lagu aktif

BUAT daftar baru tanpa lagu dengan id tersebut
TAMPILKAN ulang playlist
PERBARUI sorotan lagu dan label tombol Play
```

### `setPlayerDisplay()`

```text
AMBIL judul dan artis dari currentSong
JIKA nilainya ada:
    TAMPILKAN judul dan artis
JIKA tidak ada:
    KOSONGKAN kedua teks
```

### `highlightCurrentSong()`

```text
HAPUS penanda lagu aktif dari semua baris playlist
CARI baris playlist yang id-nya cocok dengan currentSong
JIKA baris ditemukan:
    TANDAI sebagai lagu aktif untuk teknologi bantu
```

### `setPlayButtonAccessibleText()`

```text
PILIH currentSong; jika belum ada, pilih lagu pertama
ATUR aria-label tombol Play menjadi "Play [judul]"
JIKA tidak ada lagu:
    GUNAKAN label umum "Play"
```

### Event audio `ended`

```text
SAAT lagu selesai:
    CARI indeks lagu aktif
    JIKA masih ada lagu berikutnya:
        PUTAR lagu berikutnya
    JIKA ini lagu terakhir:
        KOSONGKAN lagu aktif dan posisi audio
        JALANKAN pauseSong() untuk menjeda audio
        PERBARUI tampilan, sorotan, dan label tombol
```

## Alur tombol

| Kontrol | Yang dilakukan |
| --- | --- |
| Play | Putar lagu aktif; jika belum ada, putar lagu pertama |
| Pause | Simpan posisi lalu jeda |
| Next | Pilih lagu setelah lagu aktif |
| Previous | Pilih lagu sebelum lagu aktif |
| Shuffle | Acak urutan playlist dan jeda |
| Tombol lagu | Putar lagu yang dipilih |
| Tombol hapus | Hapus lagu dari playlist |
| Reset Playlist | Kembalikan semua lagu awal setelah playlist kosong |

## Catatan penting tentang file saat ini

**Isi `script.js` di folder Music tidak cocok dengan halaman Music Player.** HTML di folder ini memiliki elemen seperti `playlist-songs`, `play`, dan `pause`, sedangkan `script.js` mencari `current-date` dan `date-options` untuk memformat tanggal. Kode Music Player yang dijelaskan di atas berada di [script.js folder Date](<../freeCodeCamp(Date)/script.js>).

Pseudocode di atas mengikuti halaman Music Player dan kode Music Player yang ada di folder Date. Agar halaman di folder ini berfungsi, pasangkan `index.html` dengan script Music Player yang benar.

## Batas yang perlu diperhatikan di kode saat ini

- `playNextSong()` tidak memeriksa apakah lagu berikutnya tersedia. Jika tombol Next ditekan saat lagu terakhir, indeks berikutnya tidak menunjuk lagu.
- `playPreviousSong()` juga tidak memeriksa batas awal playlist.
- `shuffle()` mengacak dengan `sort(() => Math.random() - 0.5)`. Ini mudah dipahami untuk latihan, tetapi bukan cara pengacakan yang paling merata.
