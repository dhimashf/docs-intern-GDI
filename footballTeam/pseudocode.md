# Kerangka Pikir — Football Team Cards

Dokumen ini menjelaskan alur [script.js](./script.js) dan hubungannya dengan elemen pada [index.html](./index.html).

## Tujuan proyek

Tampilkan informasi tim Argentina tahun 1986 dan daftar kartu pemain. Dropdown dapat menyaring pemain berdasarkan posisi atau menampilkan pemain yang punya julukan.

## Data utama

`myFavoriteFootballTeam` adalah object yang menyimpan:

- Nama tim, jenis olahraga, tahun, dan status juara.
- Data pelatih di dalam object `headCoach`.
- Daftar pemain di dalam array `players`.

Setiap pemain adalah object dengan nama, posisi, nomor punggung, status kapten, dan julukan.

## Alur saat halaman dimulai

```text
AMBIL elemen informasi tim, daftar kartu, dan dropdown
SIAPKAN object data tim dan array pemain
BEKUKAN object utama agar property tingkat pertamanya tidak mudah berubah
AMBIL data tim, pelatih, dan pemain
TAMPILKAN nama tim, olahraga, tahun, dan pelatih
Tunggu pengguna memilih filter
```

Catatan: `Object.freeze(myFavoriteFootballTeam)` hanya membekukan tingkat pertama object. Array `players` dan object-object pemain di dalamnya belum otomatis ikut beku.

## Kerangka pseudocode fungsi

### Menampilkan informasi tim

```text
AMBIL sport, team, year, dan headCoach.coachName dari object tim
ISI elemen HTML yang sesuai dengan nilai-nilai tersebut
```

Baris seperti `teamName.textContent = team` memasukkan nama tim ke elemen dengan `id="team"`.

### `setPlayerCards(daftarPemain)`

Jika tidak diberi daftar, fungsi memakai seluruh array `players`.

```text
UNTUK setiap pemain dalam daftar:
    JIKA pemain adalah kapten:
        TAMBAHKAN teks "(Captain)" pada judul
    TAMPILKAN nama, posisi, dan nomor punggung
    JIKA nickname bukan null:
        TAMPILKAN julukannya
    JIKA nickname null:
        TAMPILKAN "N/A"

TAMBAHKAN kartu-kartu yang dibuat ke elemen player-cards
```

Langkah JavaScript-nya:

1. `map()` mengubah setiap object pemain menjadi potongan HTML kartu.
2. Operator ternary `isCaptain ? ... : ...` memilih teks kapten atau teks kosong.
3. Operator ternary untuk `nickname` memilih julukan atau `"N/A"`.
4. `join("")` menggabungkan semua potongan HTML menjadi satu string.
5. `innerHTML += ...` menambahkan string itu ke kartu yang sudah ada.

### Filter pemain saat dropdown berubah

```text
SAAT pilihan dropdown berubah:
    KOSONGKAN kartu yang tampil

    PERIKSA nilai pilihan:
        "nickname"  → pilih pemain yang nickname-nya bukan null
        "forward"   → pilih pemain dengan posisi forward
        "midfielder"→ pilih pemain dengan posisi midfielder
        "defender"  → pilih pemain dengan posisi defender
        "goalkeeper"→ pilih pemain dengan posisi goalkeeper
        pilihan lain→ gunakan semua pemain

    KIRIM daftar hasil filter ke setPlayerCards()
```

`filter()` memeriksa setiap pemain dan membuat array baru yang hanya berisi pemain yang cocok. Contohnya:

```text
Pemain: Diego Maradona
Filter: midfielder
Pemeriksaan: "midfielder" === "midfielder"
Hasil: pemain masuk ke daftar yang ditampilkan
```

## Alur halaman secara keseluruhan

```text
Data tim → isi statistik tim
Data pemain → kartu pemain awal sudah ada di HTML
Pilihan dropdown berubah
    → hapus kartu lama
    → filter array pemain
    → buat kartu baru dari hasil filter
```

## Catatan tentang tampilan awal

Kartu pemain awal sudah ditulis langsung di `index.html`. `script.js` tidak memanggil `setPlayerCards()` saat pertama kali dimuat. Setelah dropdown digunakan, kartu HTML itu dikosongkan dan kartu-kartu baru dibuat dari array pemain di JavaScript.
