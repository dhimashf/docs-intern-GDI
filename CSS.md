# Materi CSS Lengkap

Materi gabungan dari seluruh bab CSS; file sumber per bab tetap disimpan.

## Daftar Isi

1. [CSS Dasar — Setup, Syntax, Selectors & Visual Rules](#css-bab-1)
2. [CSS — Box Model, Changing the Box Model & DevTools](#css-bab-2)
3. [CSS — Display & Positioning](#css-bab-3)
4. [CSS — Colors](#css-bab-4)
5. [CSS — Typography](#css-bab-5)
6. [CSS — Layout with Flexbox](#css-bab-6)
7. [CSS — Layout with Grid](#css-bab-7)
8. [CSS — Transforms](#css-bab-8)
9. [CSS — Pseudo-class dan Pseudo-element](#css-bab-9)
10. [CSS Custom Properties (Variabel CSS)](#css-custom-properties)

---

<a id="css-bab-1"></a>

<!-- Sumber: CSS\1.CSS-Introduction.md -->

# CSS Dasar — Setup, Syntax, Selectors & Visual Rules

## 1. Core Concept

**CSS (Cascading Style Sheets)** digunakan untuk mengatur **tampilan dan visual** halaman web.

Pembagian tanggung jawabnya:

| Teknologi  | Fokus                |
| ---------- | -------------------- |
| HTML       | Struktur & makna     |
| CSS        | Tampilan & visual    |
| JavaScript | Perilaku & interaksi |

Contoh:

```html
<h1>Hello world</h1>
```

HTML menentukan bahwa teks tersebut adalah **heading**.

```css
h1 {
  color: blue;
}
```

CSS menentukan bagaimana heading tersebut **ditampilkan**.

> **Mental model:** HTML menentukan **apa**, CSS menentukan **seperti apa tampilannya**.

---

# 2. Setup CSS

Sebelum menulis CSS, browser harus mengetahui **di mana CSS berada** dan **bagaimana CSS dihubungkan dengan HTML**.

Ada tiga cara utama menggunakan CSS:

1. Inline CSS
2. Internal CSS
3. External CSS

Untuk project sebenarnya, **external CSS biasanya menjadi pilihan utama** karena CSS dipisahkan dari HTML.

---

## 2.1 Inline CSS

CSS ditulis langsung pada element HTML menggunakan atribut `style`.

```html
<h1 style="color: blue;">Hello World</h1>
```

CSS:

```css
color: blue;
```

langsung diterapkan ke `<h1>`.

### Kapan digunakan?

Biasanya hanya untuk:

* testing cepat
* eksperimen kecil
* kasus khusus tertentu

Untuk project yang lebih besar, inline CSS kurang ideal karena styling bercampur dengan struktur HTML.

---

# 2.2 Internal CSS

CSS ditulis di dalam `<style>` pada bagian `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>

<body>
  <h1>Hello World</h1>
</body>
</html>
```

CSS masih berada di file HTML yang sama.

### Kapan digunakan?

Cocok untuk:

* latihan sederhana
* halaman kecil
* eksperimen

Tetapi ketika CSS mulai banyak, file HTML akan menjadi sulit dibaca.

---

# 2.3 External CSS

CSS dipisahkan ke file tersendiri.

Contoh struktur project:

```text
project/
├── index.html
└── style.css
```

`index.html` berisi struktur HTML.

`style.css` berisi aturan CSS.

Contoh `style.css`:

```css
h1 {
  color: blue;
}
```

Tetapi browser belum otomatis mengetahui bahwa `index.html` harus menggunakan `style.css`.

Karena itu, CSS harus **dihubungkan ke HTML**.

---

# 3. Menghubungkan `style.css` ke HTML

Gunakan element `<link>` di dalam `<head>`.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

Ada dua bagian penting:

```html
rel="stylesheet"
```

memberitahu browser bahwa file yang dihubungkan adalah **stylesheet CSS**.

```html
href="style.css"
```

menentukan **lokasi file CSS**.

Jadi:

```html
<link rel="stylesheet" href="style.css">
```

artinya:

> "Hubungkan halaman HTML ini dengan file `style.css` dan gunakan file tersebut sebagai stylesheet."

---

## Kenapa `<link>` diletakkan di `<head>`?

Karena `<head>` berisi informasi dan resource yang dibutuhkan browser untuk menyiapkan halaman.

CSS termasuk resource yang perlu diketahui browser sebelum menampilkan halaman secara lengkap.

Struktur sederhananya:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Hello World</h1>
</body>
</html>
```

---

# 4. Bagaimana Browser Membaca CSS?

Misalnya:

### `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Hello World</h1>
</body>
</html>
```

### `style.css`

```css
h1 {
  color: blue;
}
```

Alurnya:

```text
HTML
 ↓
Browser menemukan <link>
 ↓
Browser mencari style.css
 ↓
CSS dibaca
 ↓
Selector h1 dicocokkan dengan <h1>
 ↓
color: blue diterapkan
 ↓
<h1> tampil biru
```

### Sebab → akibat

```text
href="style.css"
        ↓
browser mencari file tersebut
        ↓
file ditemukan
        ↓
CSS dibaca
        ↓
style diterapkan
```

Kalau `href` salah:

```html
<link rel="stylesheet" href="styles.css">
```

padahal file sebenarnya:

```text
style.css
```

maka browser tidak menemukan file yang dimaksud.

Akibatnya CSS tidak diterapkan.

---

# 5. Relative Path pada `href`

`href` tidak selalu hanya:

```html
href="style.css"
```

Lokasi file menentukan path yang digunakan.

### File sejajar

```text
project/
├── index.html
└── style.css
```

Gunakan:

```html
<link rel="stylesheet" href="style.css">
```

---

### CSS berada di folder

```text
project/
├── index.html
└── css/
    └── style.css
```

Gunakan:

```html
<link rel="stylesheet" href="css/style.css">
```

Artinya:

```text
index.html
   ↓
masuk ke folder css
   ↓
ambil style.css
```

---

### HTML berada di folder lain

Contoh:

```text
project/
├── css/
│   └── style.css
└── pages/
    └── about.html
```

Dari `about.html`, untuk kembali satu folder:

```html
<link rel="stylesheet" href="../css/style.css">
```

`..` berarti:

> naik satu folder.

---

# 6. CSS Syntax

Setelah CSS berhasil terhubung, barulah kita menulis **CSS rule**.

Bentuk dasarnya:

```css
selector {
  property: value;
}
```

Contoh:

```css
p {
  color: red;
}
```

Ada tiga bagian utama:

```text
p
↓
selector

color
↓
property

red
↓
value
```

---

## 6.1 Selector

Menentukan **element mana yang akan diberi style**.

```css
p {
  color: red;
}
```

`p` adalah selector.

Artinya:

> pilih semua element `<p>`.

---

## 6.2 Property

Menentukan **bagian visual apa yang ingin diubah**.

```css
p {
  color: red;
}
```

`color` adalah property.

Property yang digunakan menentukan jenis perubahan:

```css
color
font-size
background-color
border
```

---

## 6.3 Value

Menentukan **nilai dari property tersebut**.

```css
p {
  color: red;
}
```

`red` adalah value.

Contoh lain:

```css
p {
  font-size: 20px;
}
```

```text
font-size → property
20px      → value
```

---

## 6.4 Declaration

Gabungan:

```css
property: value;
```

disebut **declaration**.

Contoh:

```css
color: red;
```

Satu rule bisa memiliki banyak declaration:

```css
p {
  color: red;
  font-size: 18px;
  text-align: center;
}
```

---

## 6.5 CSS Rule

Keseluruhan:

```css
p {
  color: red;
  font-size: 18px;
}
```

disebut **CSS rule**.

Strukturnya:

```text
selector
   ↓
  p {
     property: value;
     property: value;
  }
```

---

# 7. Semicolon `;`

Setiap declaration biasanya diakhiri dengan `;`.

```css
p {
  color: red;
  font-size: 18px;
}
```

Jangan mencampur property dan value tanpa separator:

```css
/* salah */
color red;
```

Yang benar:

```css
color: red;
```

`:` memisahkan **property dan value**.

`;` memisahkan **satu declaration dengan declaration berikutnya**.

---

# 8. CSS Comments

Komentar CSS ditulis menggunakan:

```css
/* komentar */
```

Contoh:

```css
/* Mengatur warna heading */
h1 {
  color: blue;
}
```

Komentar tidak diterapkan sebagai styling.

Digunakan untuk memberikan penjelasan pada code.

---

# 9. Selectors

Selector adalah bagian penting CSS karena menentukan **element mana yang terkena rule**.

Mental model:

```text
Selector
   ↓
"Target siapa?"
   ↓
Property
   ↓
"Bagian apa yang diubah?"
   ↓
Value
   ↓
"Nilainya berapa?"
```

---

# 9.1 Element Selector

Memilih berdasarkan nama element HTML.

```css
p {
  color: gray;
}
```

Semua `<p>` akan terkena rule.

HTML:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

Keduanya akan berwarna abu-abu.

### Kapan digunakan?

Gunakan ketika semua element dengan tipe tertentu memang ingin diberi style yang sama.

---

# 9.2 Class Selector

Memilih element berdasarkan `class`.

HTML:

```html
<p class="warning">Hati-hati</p>
```

CSS:

```css
.warning {
  color: red;
}
```

Selector class diawali:

```css
.
```

Jadi:

```css
.warning
```

berarti:

> pilih element yang memiliki class `warning`.

Satu class dapat digunakan oleh banyak element.

```html
<p class="warning">Warning 1</p>
<p class="warning">Warning 2</p>
```

Keduanya terkena:

```css
.warning {
  color: red;
}
```

### Kapan digunakan?

**Class adalah selector yang paling sering digunakan untuk styling component atau kelompok element.**

Class adalah pilihan utama untuk style karena class dapat dipakai ulang tanpa menaikkan kekhususan selector terlalu tinggi. Jika sebuah kartu memiliki class dasar dan variasi:

```html
<article class="card">...</article>
<article class="card card--featured">...</article>
```

```css
.card {
  padding: 1rem;
}

.card--featured {
  border-color: gold;
}
```

Kedua class dapat dipakai bersama dan masing-masing tetap punya satu tanggung jawab yang jelas. Beberapa class pada HTML dipisahkan dengan spasi; CSS `.card.card--featured` berarti satu element memiliki **kedua** class, sedangkan `.card .card--featured` berarti element `.card--featured` berada **di dalam** element `.card`.

---

# 9.3 ID Selector

Memilih element berdasarkan `id`.

HTML:

```html
<h1 id="title">Hello</h1>
```

CSS:

```css
#title {
  color: blue;
}
```

Selector ID diawali:

```css
#
```

### Perbedaan Class dan ID

| Class                        | ID                                |
| ---------------------------- | --------------------------------- |
| `.card`                      | `#card`                           |
| Bisa digunakan berkali-kali  | Idealnya unik dalam satu halaman  |
| Cocok untuk styling kelompok | Cocok untuk element yang spesifik |
| Umum digunakan untuk CSS     | Lebih spesifik                    |

Contoh:

```html
<div class="card"></div>
<div class="card"></div>
```

Valid.

Tetapi:

```html
<div id="card"></div>
<div id="card"></div>
```

tidak ideal karena ID seharusnya unik.

### Kapan `id` lebih tepat, dan kapan tidak?

Pilih `id` ketika perlu menunjuk tepat satu element, misalnya tujuan tautan dalam halaman, pasangan label-control, atau target hubungan ARIA/JavaScript:

```html
<a href="#shipping">Info pengiriman</a>
<section id="shipping">...</section>
```

Untuk tampilan berulang seperti setiap `.card`, pilih `class`. `#shipping` lebih spesifik daripada `.card`; bila ID dipakai untuk seluruh styling, aturan override dapat menjadi sulit karena selector lain perlu mengalahkan kekhususan ID. Gunakan ID untuk identitas/referensi unik dan class untuk styling yang dapat dipakai ulang.

---

# 9.4 Universal Selector

Menggunakan:

```css
*
```

Memilih semua element.

Contoh:

```css
* {
  box-sizing: border-box;
}
```

Artinya rule tersebut berlaku ke seluruh element.

### Kapan digunakan?

Biasanya untuk **global reset atau aturan dasar**.

Jangan menggunakan `*` jika sebenarnya hanya beberapa element yang ingin diberi style.

Selector `*` hanya memilih element HTML, bukan pseudo-element seperti `::before` dan `::after`. Karena itu, reset global sering memasukkan ketiganya sebagai daftar selector:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Tanda koma berarti **"atau"**: rule berlaku pada semua element, atau pseudo-element `before` dari setiap element, atau pseudo-element `after` dari setiap element. `box-sizing: border-box` membuat ukuran yang ditetapkan pada element mencakup padding dan border, sehingga perhitungan layout lebih mudah diperkirakan.

---

### Cara membaca selector yang dikelompokkan

```css
*, ::before, ::after {
  box-sizing: border-box;
}
```

Bacanya: "Pilih semua element, semua pseudo-element `before`, dan semua pseudo-element `after`, lalu atur `box-sizing` menjadi `border-box`."

`::before` dan `::after` tanpa nama element di depannya berlaku pada pseudo-element yang dihasilkan untuk setiap element yang mendukungnya. Bentuk yang menulis `*::before` dan `*::after` menyatakan sasaran yang sama dengan lebih eksplisit, sehingga sering dipakai pada reset CSS.

---

# 9.5 Grouping Selector

Beberapa selector dapat digabung menggunakan koma.

```css
h1,
h2,
h3 {
  color: blue;
}
```

Artinya:

```text
h1 → blue
h2 → blue
h3 → blue
```

Daripada:

```css
h1 {
  color: blue;
}

h2 {
  color: blue;
}

h3 {
  color: blue;
}
```

Grouping membuat CSS lebih ringkas.

---

# 9.6 Descendant Selector

Digunakan untuk memilih element yang berada **di dalam element lain**.

```css
.card p {
  color: gray;
}
```

Artinya:

> pilih `<p>` yang berada di dalam `.card`.

Contoh:

```html
<div class="card">
  <p>Paragraph</p>
</div>
```

`p` terkena rule.

Tetapi:

```html
<p>Paragraph di luar card</p>
```

tidak terkena.

### Simbol:

```css
.card p
```

dibaca:

> `.card` → lalu cari `p` di dalamnya.

---

# 9.7 Child Selector

Menggunakan:

```css
>
```

Contoh:

```css
.card > p {
  color: red;
}
```

Artinya:

> pilih `<p>` yang merupakan **child langsung** dari `.card`.

Contoh:

```html
<div class="card">
  <p>Terkena</p>
</div>
```

Tetapi:

```html
<div class="card">
  <div>
    <p>Tidak terkena</p>
  </div>
</div>
```

Karena `<p>` bukan child langsung dari `.card`.

### Perbedaan penting

```css
.card p
```

→ `p` berada di dalam `.card`, tidak peduli berapa tingkat.

```css
.card > p
```

→ `p` harus langsung menjadi child `.card`.

---

# 9.8 Attribute Selector

Memilih element berdasarkan attribute.

Contoh:

```css
input[type="text"] {
  border: 1px solid gray;
}
```

Artinya:

> pilih `<input>` yang memiliki `type="text"`.

HTML:

```html
<input type="text">
<input type="password">
```

Hanya input pertama yang terkena rule.

### Kapan digunakan?

Berguna ketika ingin memilih element berdasarkan attribute tertentu tanpa harus menambahkan class.

Selector juga dapat memakai pseudo-class dan pseudo-element seperti `:hover`, `:last-of-type`, dan `::before`. Keduanya bukan attribute HTML: pseudo-class mencocokkan kondisi/posisi element, pseudo-element menargetkan bagian khusus. Lihat [CSS Pseudo-class dan Pseudo-element](#css-bab-9) untuk daftar, contoh, serta cara membedakan `:last-child` dari `:last-of-type`.

---

# 10. Visual Rules

Setelah memahami selector, sekarang fokus pada:

> **Apa yang ingin diubah dari element tersebut?**

Inilah fungsi property.

---

# 10.1 `color`

Mengatur **foreground color**, biasanya warna teks.

```css
p {
  color: blue;
}
```

Mental model:

```text
foreground
   ↓
bagian depan / isi visual
   ↓
teks dan elemen visual tertentu
```

`color` **bukan** warna background.

Untuk background gunakan:

```css
background-color
```

---

# 10.2 `background-color`

Mengatur warna latar belakang element.

```css
div {
  background-color: lightgray;
}
```

Perbedaannya:

```css
color: black;
```

→ warna teks.

```css
background-color: white;
```

→ warna latar.

Mental model:

```text
color
↓
foreground

background-color
↓
background
```

---

# 10.3 `font-family`

Menentukan jenis font.

```css
body {
  font-family: Arial, sans-serif;
}
```

Jika font pertama tidak tersedia, browser dapat menggunakan font berikutnya.

```css
font-family: Arial, sans-serif;
```

Urutannya:

```text
Arial
  ↓ jika tidak tersedia
sans-serif
```

> **Catatan:** `sans-serif` adalah kategori font, bukan satu nama font tertentu. Browser akan memilih font sans-serif yang tersedia di perangkat.

---

# 10.4 `font-size`

Mengatur ukuran teks.

```css
h1 {
  font-size: 32px;
}
```

Contoh:

```css
p {
  font-size: 16px;
}
```

---

# 10.5 `font-weight`

Mengatur ketebalan teks.

```css
h1 {
  font-weight: bold;
}
```

Atau menggunakan angka:

```css
h1 {
  font-weight: 700;
}
```

Umumnya:

```text
400 → normal
700 → bold
```

---

# 10.6 `font-style`

Mengatur style font seperti italic.

```css
em {
  font-style: italic;
}
```

Contoh lain:

```css
p {
  font-style: normal;
}
```

---

# 10.7 `text-align`

Mengatur alignment teks secara horizontal.

```css
h1 {
  text-align: center;
}
```

Nilai umum:

```css
left
center
right
justify
```

Contoh:

```css
p {
  text-align: justify;
}
```

---

# 10.8 `text-decoration`

Mengatur dekorasi teks.

```css
a {
  text-decoration: none;
}
```

Nilai umum:

```css
none
underline
overline
line-through
```

Contoh:

```css
p {
  text-decoration: underline;
}
```

---

# 10.9 `line-height`

Mengatur jarak vertikal antarbaris teks.

```css
p {
  line-height: 1.6;
}
```

Ini bukan ukuran font.

```text
font-size
→ ukuran huruf

line-height
→ tinggi/jarak antarbaris
```

Contoh:

```css
p {
  font-size: 16px;
  line-height: 1.6;
}
```

Teks tetap berukuran `16px`, tetapi jarak antarbaris menjadi lebih lega.

---

# 10.10 `letter-spacing`

Mengatur jarak antar karakter.

```css
h1 {
  letter-spacing: 2px;
}
```

Bedakan:

```text
letter-spacing
→ jarak antar huruf

line-height
→ jarak antar baris
```

---

# 10.11 `text-transform`

Mengubah bentuk kapitalisasi teks secara visual.

```css
h1 {
  text-transform: uppercase;
}
```

Nilai umum:

```css
uppercase
lowercase
capitalize
none
```

Contoh:

```html
<h1>Hello World</h1>
```

Dengan:

```css
text-transform: uppercase;
```

tampil sebagai:

```text
HELLO WORLD
```

Isi HTML sebenarnya tidak berubah.

---

# 10.12 `border`

Memberikan garis di sekitar element.

```css
.card {
  border: 1px solid black;
}
```

> **Catatan:** `border` adalah shorthand yang menggabungkan ketebalan, jenis garis, dan warna. Pada contoh ini, `1px` adalah ketebalan, `solid` berarti garis utuh, dan `black` adalah warnanya.

Strukturnya:

```text
1px
↓
ketebalan

solid
↓
jenis garis

black
↓
warna
```

Contoh:

```css
border: 2px dashed red;
```

---

# 10.13 `border-radius`

Membuat sudut border menjadi melengkung.

```css
.card {
  border-radius: 8px;
}
```

Semakin besar nilainya, semakin melengkung sudutnya.

Contoh:

```css
border-radius: 50%;
```

Nilai `50%` membuat sudut membulat sebesar setengah ukuran box. Jika `width` dan `height` sama, hasilnya menjadi lingkaran; jika ukurannya berbeda, bentuknya menjadi oval.

---

# 11. CSS Values

Property membutuhkan value yang sesuai dengan jenis property-nya.

Contoh warna:

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
```

Contoh ukuran:

```css
font-size: 16px;
font-size: 1rem;
font-size: 100%;
```

---

## `px`

Pixel.

```css
font-size: 16px;
```

Cocok untuk ukuran yang ingin ditentukan secara eksplisit.

---

## `%`

Persentase relatif terhadap konteks tertentu.

```css
width: 50%;
```

Artinya ukuran sebesar 50% dari referensi yang digunakan property tersebut.

---

## `rem`

Unit relatif terhadap ukuran font pada root (`html`).

```css
font-size: 1rem;
```

Secara default browser biasanya menggunakan:

```text
1rem ≈ 16px
```

Tetapi nilai tersebut dapat berubah jika ukuran font root diubah.

---

# 12. Full Example

Struktur project:

```text
my-website/
├── index.html
└── style.css
```

### `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <h1 class="title">Hello World</h1>

  <p class="description">
    Ini adalah halaman pertama saya.
  </p>

</body>
</html>
```

### `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: white;
  color: #222;
}

.title {
  color: blue;
  font-size: 32px;
  text-align: center;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}
```

Alurnya:

```text
index.html
    ↓
<link>
    ↓
style.css
    ↓
selector
    ↓
property
    ↓
value
    ↓
tampilan halaman
```

---

# 13. Selector vs Property vs Value

Ini adalah tiga hal yang paling penting untuk dibedakan.

```css
.card {
  background-color: white;
  color: black;
}
```

| Bagian   | Contoh             | Fungsi                        |
| -------- | ------------------ | ----------------------------- |
| Selector | `.card`            | Menentukan target             |
| Property | `background-color` | Menentukan bagian yang diubah |
| Value    | `white`            | Menentukan nilainya           |

Cara berpikir:

```text
Siapa yang diubah?
        ↓
   SELECTOR

Apa yang diubah?
        ↓
   PROPERTY

Menjadi seperti apa?
        ↓
     VALUE
```

---

## `!important` — Memaksa Prioritas Declaration

`!important` ditulis setelah value, sebelum titik koma:

```css
.button {
  color: gray;
  color: green !important;
}
```

Untuk property `color` pada `.button`, browser memprioritaskan declaration `green !important` daripada declaration normal `gray`. Akibatnya, teks tombol menjadi hijau.

### Kapan digunakan?

Bayangkan ada aturan lama yang membuat tombol abu-abu, sementara aturan baru yang seharusnya mengubahnya menjadi hijau tidak berefek karena ada aturan CSS lain yang menang. `!important` bisa memaksa declaration itu menang terhadap declaration normal untuk property yang sama.

```css
.button {
  color: gray;
}

.button {
  color: green !important;
}
```

### Kenapa jangan langsung menggunakannya?

`!important` membuat aturan lebih sulit ditimpa dengan declaration normal berikutnya. Kalau setiap konflik diselesaikan dengan menambahkan `!important`, aturan CSS akan semakin susah dipahami dan dipelihara.

Sebelum memakainya, periksa:

```text
Apakah selector menargetkan element yang benar?
Apakah ada aturan lain untuk property yang sama?
Bisakah aturan yang bertabrakan diperbaiki atau dihapus?
```

Gunakan `!important` hanya ketika memang ada alasan khusus, bukan sebagai cara pertama memperbaiki style yang tidak muncul. `!important` juga bukan berarti seluruh rule atau semua property pada element otomatis menang; prioritasnya berlaku pada declaration yang diberi tanda itu.

---

# 14. Perbedaan yang Wajib Dipahami

## `color` vs `background-color`

```css
color: black;
```

→ warna teks/foreground.

```css
background-color: white;
```

→ warna background.

---

## `font-size` vs `font-weight`

```css
font-size: 20px;
```

→ ukuran teks.

```css
font-weight: 700;
```

→ ketebalan teks.

---

## `line-height` vs `letter-spacing`

```css
line-height: 1.6;
```

→ jarak/tinggi antarbaris.

```css
letter-spacing: 2px;
```

→ jarak antarhuruf.

---

## `class` vs `id`

```css
.card
```

→ kelompok element yang dapat digunakan berkali-kali.

```css
#profile
```

→ element yang spesifik/unik.

Untuk styling umum, **class biasanya lebih fleksibel**.

---

## `.card p` vs `.card > p`

```css
.card p
```

→ semua `p` di dalam `.card`, meskipun nested.

```css
.card > p
```

→ hanya `p` yang menjadi child langsung `.card`.

---

## `px` vs `%` vs `rem`

```text
px
→ ukuran eksplisit

%
→ relatif terhadap konteks

rem
→ relatif terhadap root font-size
```

---

# 15. CSS Cheat Sheet

## Setup

```html
<!-- External CSS -->
<link rel="stylesheet" href="style.css">
```

```text
rel
→ menjelaskan hubungan file

href
→ lokasi file
```

---

## Basic Syntax

```css
selector {
  property: value;
}
```

```text
selector
→ target

property
→ apa yang diubah

value
→ nilainya
```

---

## Selectors

| Selector             | Arti                              |
| -------------------- | --------------------------------- |
| `p`                  | Semua `<p>`                       |
| `.card`              | Semua element dengan class `card` |
| `#title`             | Element dengan id `title`         |
| `*`                  | Semua element                     |
| `h1, h2`             | `h1` dan `h2`                     |
| `.card p`            | Semua `p` di dalam `.card`        |
| `.card > p`          | `p` yang menjadi child langsung   |
| `input[type="text"]` | Input dengan `type="text"`        |

---

## Visual Rules

| Property           | Fungsi                  |
| ------------------ | ----------------------- |
| `color`            | Warna foreground/text   |
| `background-color` | Warna background        |
| `font-family`      | Jenis font              |
| `font-size`        | Ukuran font             |
| `font-weight`      | Ketebalan font          |
| `font-style`       | Style font              |
| `text-align`       | Alignment teks          |
| `text-decoration`  | Dekorasi teks           |
| `line-height`      | Jarak/tinggi antarbaris |
| `letter-spacing`   | Jarak antarhuruf        |
| `text-transform`   | Kapitalisasi visual     |
| `border`           | Garis/border            |
| `border-radius`    | Kelengkungan sudut      |

---

# 16. Mental Model

Jangan menghafal CSS sebagai:

> "`.card` itu apa, `color` itu apa, `16px` itu apa."

Lebih berguna berpikir sebagai sebuah kalimat:

```css
.card {
  color: black;
}
```

Baca:

> **Pilih `.card`, lalu ubah `color` menjadi `black`.**

Atau:

```css
.title {
  font-size: 32px;
  text-align: center;
}
```

Baca:

> **Pilih `.title`, lalu ubah ukuran font menjadi 32px dan posisi teks menjadi center.**

Jadi setiap CSS rule selalu punya alur:

```text
TARGET
  ↓
SELECTOR

APA YANG DIUBAH
  ↓
PROPERTY

HASILNYA
  ↓
VALUE
```

---

# 17. Deep Learning — Sebab → Akibat

### CSS tidak muncul

Kemungkinan pertama bukan langsung menyalahkan property CSS.

Periksa alurnya:

```text
HTML
 ↓
<link>
 ↓
href
 ↓
file CSS
 ↓
CSS rule
 ↓
selector cocok?
 ↓
property valid?
 ↓
value valid?
```

Contoh:

```html
<link rel="stylesheet" href="style.css">
```

Tetapi file sebenarnya:

```text
styles.css
```

Maka:

```text
href salah
 ↓
CSS tidak ditemukan
 ↓
CSS tidak diterapkan
```

---

### Selector benar tetapi style tidak mengenai element

Contoh:

```css
.title {
  color: red;
}
```

Tetapi HTML:

```html
<h1 class="heading">Hello</h1>
```

Masalahnya bukan `color`.

Masalahnya selector tidak menemukan target:

```text
.title
   ↓
tidak ada class title
   ↓
tidak ada element yang cocok
   ↓
rule tidak diterapkan
```

---

### Property benar tetapi value salah

Contoh:

```css
p {
  font-size: blue;
}
```

`font-size` membutuhkan ukuran, bukan warna.

Sehingga:

```text
property
↓
font-size

value
↓
blue ❌
```

Value harus sesuai dengan kebutuhan property:

```css
font-size: 16px;
```

---

# 18. Cara Berpikir Saat Menulis CSS

Ketika ingin membuat sebuah tampilan, jangan langsung menghafal property.

Tanyakan:

### 1. Element mana yang ingin diubah?

```text
h1?
p?
.card?
.button?
```

→ tentukan **selector**.

### 2. Bagian visual apa yang ingin diubah?

```text
warna?
ukuran?
font?
background?
border?
```

→ tentukan **property**.

### 3. Hasil yang diinginkan seperti apa?

```text
biru?
20px?
bold?
center?
```

→ tentukan **value**.

Contoh:

> "Saya ingin semua judul card berwarna biru."

Berpikir:

```text
Target?
→ judul card

Selector?
→ .card h2

Apa yang diubah?
→ color

Nilainya?
→ blue
```

Hasil:

```css
.card h2 {
  color: blue;
}
```

---

<a id="css-custom-properties"></a>

# 19. CSS Custom Properties (Variabel CSS)

CSS custom properties adalah nilai yang kita simpan dengan nama yang diawali dua tanda minus (`--`), lalu gunakan kembali melalui fungsi `var()`.

```css
:root {
  --color-primary: #2563eb;
  --space-medium: 1rem;
}

.button {
  background-color: var(--color-primary);
  padding: var(--space-medium);
}
```

`--color-primary` adalah nama custom property. `var(--color-primary)` mengambil nilainya. Nama bersifat **case-sensitive**, jadi `--color-primary` dan `--Color-primary` adalah dua nama berbeda.

## Tempat mendeklarasikan variabel

### Global: `:root`

`:root` memilih root dokumen (biasanya element `<html>`). Custom properties yang dideklarasikan di sana dapat diwariskan ke seluruh halaman:

```css
:root {
  --text-color: #222;
}

body {
  color: var(--text-color);
}
```

Ini tempat yang umum untuk token desain seperti warna, jarak, ukuran, dan font.

### Lokal: pada selector tertentu

Variabel juga bisa dideklarasikan pada component. Nilainya tersedia pada element itu dan turunannya melalui inheritance:

```css
.card {
  --card-padding: 1.25rem;
  padding: var(--card-padding);
}

.card p {
  margin-bottom: var(--card-padding);
}
```

Variabel lokal membantu membatasi cakupan nilai agar tidak mengganggu bagian halaman lain. Jika nama yang sama dideklarasikan ulang pada element yang lebih dekat, nilai terdekat yang berlaku:

```css
:root {
  --text-color: #222;
}

.card {
  --text-color: #555;
}
```

Di dalam `.card`, `var(--text-color)` memakai `#555`; di luar `.card`, nilainya tetap `#222`.

## Cara memakai `var()`

Gunakan `var(--nama)` sebagai value sebuah property. Variabel tidak otomatis menjadi value tanpa fungsi `var()`:

```css
:root {
  --page-gap: 1rem;
}

.layout {
  gap: var(--page-gap);
}
```

Satu variabel dapat dipakai di banyak property:

```css
:root {
  --accent: rebeccapurple;
}

a {
  color: var(--accent);
}

.button {
  background-color: var(--accent);
  border-color: var(--accent);
}
```

Nilai variabel juga dapat ditimpa lewat cascade, misalnya pada selector component, state, atau media query:

```css
:root {
  --surface: white;
}

.card {
  background-color: var(--surface);
}

.card--dark {
  --surface: #222;
}
```

## Fallback dengan `var()`

Argumen kedua `var()` adalah fallback: nilai yang dipakai jika custom property yang dirujuk **tidak tersedia atau invalid saat browser menghitung nilainya** (misalnya karena referensi melingkar).

```css
.button {
  background-color: var(--button-color, royalblue);
}
```

Jika `--button-color` tidak dideklarasikan dan tidak diwarisi dari parent, `royalblue` dipakai. Fallback juga dapat dipakai jika variabel menjadi invalid saat dihitung, misalnya karena referensi melingkar. Jika variabel tersedia, browser memakai nilainya.

Fallback juga bisa merujuk variabel lain. Fallback bertingkat berguna ketika nilai utama dan nilai cadangan bersama-sama mungkin tidak tersedia:

```css
.button {
  background-color: var(--button-color, var(--color-primary, royalblue));
}
```

Urutannya: coba `--button-color`, lalu `--color-primary`, dan terakhir `royalblue`.

Fallback **bukan** pemeriksaan apakah nilai cocok untuk property. Jika variabel ada tetapi value-nya tidak cocok, fallback tidak otomatis dipakai:

```css
:root {
  --button-color: 12px;
}

.button {
  color: var(--button-color, royalblue);
}
```

`--button-color` tersedia, sehingga `12px` yang dimasukkan ke `color`; karena value itu tidak valid untuk `color`, declaration `color` menjadi invalid. Browser tidak beralih ke `royalblue`. Pastikan value variabel sesuai dengan property yang memakainya.

## Variabel tidak ditemukan dan inheritance

Jika variabel tidak ditemukan dan tidak ada fallback, declaration yang memakainya menjadi invalid. Hasil akhirnya mengikuti aturan property terkait—misalnya property yang diwariskan dapat mengambil nilai dari parent, sedangkan property yang tidak diwariskan kembali ke nilai awalnya.

```css
.title {
  color: var(--missing-color);
}
```

Dalam contoh itu, jangan mengandalkan warna tertentu. Berikan fallback jika memang ada nilai cadangan yang diinginkan:

```css
.title {
  color: var(--missing-color, black);
}
```

Perhatikan bahwa custom property mewarisi nilai dari parent secara default. Karena itu, variabel yang dideklarasikan di `:root` biasanya tersedia pada element turunannya; variabel yang dideklarasikan hanya pada `.card` tidak tersedia pada element di luar `.card`.

## Menggunakan variabel dalam nilai gabungan

Variabel dapat menjadi bagian dari value yang lebih besar:

```css
:root {
  --space-unit: 0.5rem;
}

.card {
  padding: calc(var(--space-unit) * 2);
  border: 1px solid var(--border-color, #ddd);
}
```

Custom properties umumnya menyimpan rangkaian token CSS, bukan tipe yang otomatis diperiksa saat deklarasi. Value yang bisa dipakai pada satu property belum tentu valid untuk property lain.

## Kapan memakai variabel?

Gunakan custom properties ketika nilai perlu dipakai ulang, dikelola sebagai token desain, atau diubah bersama-sama berdasarkan component maupun tema. Untuk satu nilai yang hanya dipakai sekali dan tidak perlu dikelola bersama nilai lain, menulis value langsung sering kali lebih sederhana.

**Ringkasnya:**

```text
Deklarasi: --nama: nilai;
Pemakaian: property: var(--nama);
Fallback:  property: var(--nama, nilai-cadangan);
```

---

# 20. Self Check

Sebelum lanjut ke materi CSS berikutnya, pastikan sudah bisa menjawab:

1. Apa perbedaan HTML dan CSS?
2. Apa fungsi external CSS?
3. Kenapa `<link>` diletakkan di `<head>`?
4. Apa fungsi `rel="stylesheet"`?
5. Apa fungsi `href`?
6. Apa yang terjadi jika path `href` salah?
7. Apa struktur dasar CSS rule?
8. Apa perbedaan selector, property, dan value?
9. Apa perbedaan `color` dan `background-color`?
10. Apa perbedaan class dan ID?
11. Apa perbedaan `.card p` dan `.card > p`?
12. Apa perbedaan `font-size`, `font-weight`, dan `line-height`?
13. Kapan menggunakan `px`, `%`, dan `rem`?
14. Kenapa selector yang tidak cocok menyebabkan CSS tidak diterapkan?
15. Bagaimana mendeklarasikan dan memakai custom property, dan kapan fallback `var()` digunakan?

Kalau konsep ini sudah jelas, CSS berikutnya akan lebih mudah karena property baru tinggal ditempatkan ke pola yang sama:

```text
Target
  ↓
Selector
  ↓
Property
  ↓
Value
```

---

# Key Takeaway

CSS pada dasarnya bukan sekadar menghafal property.

Fondasinya adalah:

```text
HTML
 ↓
<link>
 ↓
style.css
 ↓
Selector
 ↓
Property
 ↓
Value
 ↓
Visual
```

Dan cara membaca CSS:

```css
.card {
  background-color: white;
  color: black;
}
```

adalah:

> **Pilih `.card`, ubah background menjadi putih, dan foreground/text menjadi hitam.**

Jika **selector → property → value** sudah benar, sebagian besar CSS dasar mulai terasa sebagai sistem yang logis, bukan kumpulan syntax yang harus dihafal.

# INSIGHT

Perbedaan `tr[class="total"]` dan `tr.total` ada pada cara keduanya mencocokkan `class`:

```css
tr[class="total"] { ... }
tr.total { ... }
```

`tr[class="total"]` hanya memilih `<tr>` yang nilai seluruh attribute `class`-nya tepat `total`. Baris dengan `class="total featured"` tidak cocok. Sebaliknya, `tr.total` memilih `<tr>` yang daftar class-nya memuat class `total`, termasuk `class="total featured"`.

Jadi, kalau class `total` boleh berdampingan dengan class lain, gunakan `tr.total`. Selector pertama berguna hanya jika memang ingin mencocokkan nilai attribute `class` secara persis.

# BEDAH NILAI CSS — Membaca Declaration yang Padat

Contoh ini menggabungkan beberapa nilai. Tujuannya bukan menghafal hasil akhirnya, tetapi memahami apa yang dirujuk setiap angka, satuan, dan pemisah:

```css
.notice {
  color: #123;
  background-color: rgb(255 255 255 / 75%);
  font: 600 1rem/1.5 Arial, sans-serif;
  text-align: left;
  text-decoration: underline wavy #f80;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 2px solid currentColor;
  border-radius: 190% / 190px 150px 0 0;
}
```

Cara membacanya:

* `.notice` memilih element yang memiliki class `notice`; declaration di dalam kurung kurawal berlaku pada element tersebut.
* `#123` adalah hex singkat yang setara dengan `#112233`. `rgb(255 255 255 / 75%)` membuat warna putih dengan alpha 75%, bukan membuat seluruh element transparan.
* Pada shorthand `font`, `600` adalah ketebalan, `1rem` ukuran, `/1.5` `line-height`, dan sisanya daftar font. Angka `1.5` tanpa unit adalah pengali terhadap ukuran font.
* `text-decoration` menggabungkan garis, gaya garis, dan warna. `currentColor` pada `border` mengambil nilai `color` element, jadi border mengikuti warna teks.
* `190% / 190px 150px 0 0` **bukan pembagian**. Slash memisahkan radius horizontal dan vertikal setiap sudut. Satu nilai horizontal `190%` dipakai keempat sudut. Empat nilai vertikal setelah slash dipetakan searah jarum jam mulai kiri atas: `190px`, `150px`, `0`, `0`.
* Persentase horizontal dihitung dari lebar border box, sedangkan persentase vertikal dihitung dari tingginya. Jika ukuran kotak adalah `200px × 100px`, radius horizontal `190%` berarti `380px` sebelum browser memeriksa apakah radius-radii itu muat. Radius vertikal pada contoh menggunakan pixel tetap: `190px` untuk kiri atas dan `150px` untuk kanan atas.
* Mengapa browser menyesuaikan nilai besar? Agar lengkungan sudut tidak saling menimpa. Pada kotak `200px × 100px`, dua radius horizontal di sisi atas berjumlah `760px`, lebih besar dari lebar `200px`; dua radius vertikal di atas juga berjumlah `340px`, lebih besar dari tinggi `100px`. Sisi paling sempit memerlukan faktor pengecilan `200 / 760 ≈ 0.263`, jadi browser mengalikan semua radius dengan faktor itu. Radius horizontal efektif menjadi `100px` per sudut; radius vertikal kiri atas menjadi `50px` dan kanan atas sekitar `39.5px`. Inilah sebabnya nilai yang ditulis adalah permintaan, bukan selalu ukuran lengkungan akhirnya.
* Setiap sudut dapat dibayangkan sebagai seperempat elips: nilai sebelum slash mengatur jangkauan mendatar, nilai sesudahnya jangkauan tegak. Jika kedua nilai sama, sudutnya melingkar; jika berbeda, lengkungannya oval.

Untuk menalar nilai serupa, tanyakan:

1. Property apa yang menerima nilai, dan apakah nilainya shorthand dengan beberapa bagian?
2. Angka ini mengacu pada ukuran element, ukuran parent, ukuran root font, viewport, atau nilai tetap?
3. Apakah tanda `/`, koma, spasi, atau `%` merupakan pemisah parameter, satuan, atau bagian dari fungsi?
4. Jika nilai melebihi ruang yang tersedia, apakah browser mempertahankannya, membatasi, membungkus, atau membaginya?

Jangan berhenti pada "CSS menerima nilai ini". Cari tahu **acuan perhitungannya** dan **aturan browser yang membatasi hasilnya**.

---

<a id="css-bab-2"></a>

<!-- Sumber: CSS\2.CSS-Box Model.md -->

# CSS — Box Model, Changing the Box Model & DevTools

## 1. Core Concept

Setiap element HTML yang ditampilkan oleh browser dapat dipahami sebagai **sebuah box (kotak)**.

Contoh:

```html
<div class="card">
  Hello
</div>
```

Secara visual, element tersebut bukan hanya berisi teks.

Browser menghitung beberapa bagian:

```text
┌───────────────────────────────┐
│            Margin             │
│  ┌─────────────────────────┐  │
│  │         Border          │  │
│  │  ┌───────────────────┐  │  │
│  │  │      Padding      │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   Content   │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

Empat bagian utama:

1. **Content**
2. **Padding**
3. **Border**
4. **Margin**

Ini disebut **CSS Box Model**.

---

# 2. Kenapa Box Model Penting?

Ketika membuat halaman web, sering muncul masalah seperti:

> "Saya sudah kasih `width: 300px`, kenapa ukuran element lebih dari 300px?"

Atau:

> "Kenapa dua element dengan width yang sama terlihat berbeda ukurannya?"

Jawabannya sering berkaitan dengan **Box Model**.

CSS tidak hanya menghitung ukuran content.

Ukuran element juga dapat dipengaruhi oleh:

```text
content
+ padding
+ border
+ margin
```

Karena itu, memahami Box Model penting sebelum masuk lebih jauh ke layout.

---

# 3. Content

**Content** adalah bagian utama yang berisi isi element.

Contoh:

```html
<div class="box">
  Hello World
</div>
```

`Hello World` berada di area content.

Jika kita menentukan:

```css
.box {
  width: 300px;
  height: 100px;
}
```

Dengan model default CSS, `width` dan `height` berlaku pada **content area**.

Artinya:

```text
width: 300px
       ↓
┌──────────────────────┐
│       Content        │
│       300px          │
└──────────────────────┘
```

Padding dan border dapat membuat ukuran keseluruhan menjadi lebih besar.

---

# 4. Padding

**Padding** adalah ruang antara **content dan border**.

Contoh:

```css
.box {
  padding: 20px;
}
```

Visualnya:

```text
┌─────────────────────────────┐
│          Padding             │
│   ┌─────────────────────┐   │
│   │      Content        │   │
│   └─────────────────────┘   │
│          Padding             │
└─────────────────────────────┘
```

Padding memberikan **ruang di dalam element**.

### Mental model

```text
Padding
→ ruang ke dalam
→ antara content dan border
```

Contoh:

```css
.box {
  padding: 20px;
}
```

Teks tidak lagi menempel langsung dengan border.

---

# 5. Padding Setiap Sisi

Padding dapat diatur untuk setiap sisi.

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

Urutannya:

```text
        top
         ↓
    ┌───────────┐
left│  content  │right
 ↑  └───────────┘  ↑
         ↓
       bottom
```

Bisa juga menggunakan shorthand.

```css
.box {
  padding: 10px 20px 30px 40px;
}
```

Urutannya:

```text
top → right → bottom → left
```

Mental shortcut:

> **TRBL** = Top, Right, Bottom, Left.

---

# 6. Padding Shorthand

CSS menyediakan beberapa bentuk shorthand.

### Satu nilai

```css
padding: 20px;
```

Berarti:

```text
top    = 20px
right  = 20px
bottom = 20px
left   = 20px
```

---

### Dua nilai

```css
padding: 10px 20px;
```

Berarti:

```text
top/bottom = 10px
left/right = 20px
```

---

### Tiga nilai

```css
padding: 10px 20px 30px;
```

Berarti:

```text
top    = 10px
left/right = 20px
bottom = 30px
```

---

### Empat nilai

```css
padding: 10px 20px 30px 40px;
```

Berarti:

```text
top    = 10px
right  = 20px
bottom = 30px
left   = 40px
```

---

# 7. Border

**Border** adalah garis yang mengelilingi content dan padding.

Contoh:

```css
.box {
  border: 2px solid black;
}
```

Strukturnya:

```text
┌─────────────────────────┐
│         Border          │
│  ┌───────────────────┐  │
│  │      Padding      │  │
│  │  ┌─────────────┐  │  │
│  │  │   Content   │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

Border memiliki tiga bagian umum:

```css
border: 2px solid black;
```

```text
2px
↓
ketebalan

solid
↓
jenis garis

black
↓
warna
```

---

# 8. Border Setiap Sisi

Sama seperti padding, border dapat diatur per sisi.

```css
.box {
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
}
```

Atau:

```css
.box {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
```

---

# 9. Margin

**Margin** adalah ruang di luar border.

```css
.box {
  margin: 20px;
}
```

Visual:

```text
       Margin
┌───────────────────────────────┐
│   ┌─────────────────────────┐ │
│   │         Border          │ │
│   │  ┌───────────────────┐  │ │
│   │  │      Content      │  │ │
│   │  └───────────────────┘  │ │
│   └─────────────────────────┘ │
└───────────────────────────────┘
```

Mental model:

```text
Padding
→ ruang DI DALAM box

Margin
→ ruang DI LUAR box
```

Ini salah satu perbedaan yang paling penting dalam Box Model.

---

# 10. Padding vs Margin

| Padding                                  | Margin                                  |
| ---------------------------------------- | --------------------------------------- |
| Ruang di dalam element                   | Ruang di luar element                   |
| Antara content dan border                | Di luar border                          |
| Background element mencakup area padding | Background element tidak mengisi margin |
| Memperbesar ruang internal               | Memberikan jarak dengan element lain    |

Contoh:

```css
.card {
  padding: 20px;
  margin: 20px;
}
```

Artinya:

```text
margin
↓
jarak card dengan element lain

border
↓
batas card

padding
↓
jarak isi dengan batas card

content
↓
isi card
```

---

# 11. Struktur Lengkap Box Model

Urutannya dari paling dalam ke paling luar:

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

Atau:

```text
┌──────────────────────────────┐
│            Margin            │
│  ┌────────────────────────┐  │
│  │         Border         │  │
│  │  ┌──────────────────┐  │  │
│  │  │     Padding      │  │  │
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  Content   │  │  │  │
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

Cara mengingat:

> **Content → Padding → Border → Margin**

---

# 12. Bagaimana `width` Bekerja?

Ini bagian yang sering membingungkan.

Misalnya:

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Secara default, `width: 300px` berarti:

```text
Content width = 300px
```

Tetapi ukuran keseluruhan box menjadi:

```text
300px
+ 20px left padding
+ 20px right padding
+ 5px left border
+ 5px right border
= 350px
```

Jadi:

```text
Total width = 350px
```

### Rumus default

```text
total width
=
content
+ padding kiri
+ padding kanan
+ border kiri
+ border kanan
```

Margin belum masuk ke ukuran box tersebut.

Jika margin juga diperhitungkan untuk jarak yang ditempati di layout:

```text
outer space
=
total box width
+ margin kiri
+ margin kanan
```

---

# 13. Contoh Perhitungan

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

Content:

```text
300px
```

Padding:

```text
20 + 20 = 40px
```

Border:

```text
5 + 5 = 10px
```

Maka total ukuran box:

```text
300 + 40 + 10
= 350px
```

Jika menghitung ruang yang digunakan bersama margin:

```text
350 + 10 + 10
= 370px
```

Jadi:

```text
Content       = 300px
Box           = 350px
Outer spacing = 370px
```

---

# 14. Default Box Model

Secara default, browser menggunakan:

```css
box-sizing: content-box;
```

Artinya:

> `width` dan `height` hanya mengatur **content area**.

Contoh:

```css
.box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Hasil:

```text
content = 300px

total =
300 + 20 + 20 + 5 + 5

= 350px
```

---

# 15. Changing the Box Model

CSS menyediakan property:

```css
box-sizing
```

Property ini menentukan **bagaimana browser menghitung `width` dan `height`**.

Ada dua value utama:

```css
content-box
border-box
```

---

# 16. `content-box`

Ini adalah default.

```css
.box {
  box-sizing: content-box;
}
```

Dengan:

```css
width: 300px;
padding: 20px;
border: 5px solid black;
```

Maka:

```text
Width content = 300px

Total width:
300 + 20 + 20 + 5 + 5
= 350px
```

Mental model:

```text
width
 ↓
content saja
```

---

# 17. `border-box`

Dengan:

```css
.box {
  box-sizing: border-box;
}
```

`width` digunakan untuk menghitung:

```text
content + padding + border
```

Contoh:

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Sekarang total width tetap:

```text
300px
```

Browser menyesuaikan area content agar padding dan border masuk ke dalam ukuran tersebut.

Secara sederhana:

```text
Total width = 300px
              ↓
       ┌─────────────┐
       │   Border    │
       │   Padding   │
       │   Content   │
       └─────────────┘
```

---

# 18. `content-box` vs `border-box`

|                                   | `content-box` | `border-box`               |
| --------------------------------- | ------------- | -------------------------- |
| Default                           | Ya            | Tidak                      |
| `width` berlaku untuk             | Content       | Content + padding + border |
| Padding menambah total width      | Ya            | Tidak                      |
| Border menambah total width       | Ya            | Tidak                      |
| Lebih mudah mengontrol ukuran box | Relatif sulit | Lebih mudah                |

Perhatikan:

```css
width: 300px;
```

### `content-box`

```text
content = 300px
box > 300px
```

### `border-box`

```text
box = 300px
content < 300px
```

---

# 19. Kenapa `border-box` Sering Digunakan?

Bayangkan membuat card dengan:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 1px solid black;
}
```

Dengan `content-box`, ukuran aktual menjadi lebih besar dari `300px`.

Jika menggunakan:

```css
.card {
  box-sizing: border-box;
  width: 300px;
}
```

maka:

> **Ukuran keseluruhan card tetap 300px.**

Ini membuat perhitungan ukuran lebih mudah diprediksi.

---

# 20. Global `box-sizing`

Sering ditemukan:

```css
* {
  box-sizing: border-box;
}
```

Artinya semua element menggunakan `border-box`.

```text
* 
↓
semua element
```

Sehingga:

```text
width
↓
sudah mencakup padding + border
```

Pola ini sering digunakan sebagai aturan dasar CSS karena membuat perhitungan ukuran element lebih konsisten.

---

# 21. Margin Tidak Masuk `border-box`

Hal yang perlu diperhatikan:

```css
box-sizing: border-box;
```

mengatur:

```text
content
+ padding
+ border
```

**Margin tidak termasuk.**

Contoh:

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 20px;
}
```

Maka:

```text
box = 300px
```

Tetapi ruang yang dibutuhkan dengan margin:

```text
300 + 20 + 20
= 340px
```

Mental model:

```text
border-box
→ mengatur ukuran box

margin
→ jarak di luar box
```

---

# 22. Box Model di DevTools

Browser menyediakan **DevTools** untuk melihat bagaimana browser menghitung Box Model secara nyata.

Di Chrome/Edge:

```text
Right click element
        ↓
Inspect
        ↓
Elements
        ↓
Styles / Computed
        ↓
Box Model
```

---

# 23. Melihat Box Model

Misalnya HTML:

```html
<div class="box">
  Hello
</div>
```

CSS:

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

Buka:

```text
Inspect
→ Computed
→ Box Model
```

DevTools akan menampilkan area:

```text
       margin
    ┌─────────────┐
    │   border    │
    │  ┌───────┐  │
    │  │padding│  │
    │  │┌─────┐│  │
    │  ││content││  │
    │  │└─────┘│  │
    │  └───────┘  │
    └─────────────┘
```

DevTools menunjukkan ukuran masing-masing bagian.

---

# 24. Kenapa DevTools Penting?

Jangan hanya menggunakan DevTools untuk melihat code.

Gunakan DevTools untuk **membuktikan bagaimana browser menghitung element**.

Misalnya kamu merasa:

> "Saya kasih `width: 300px`, kok box-nya lebih besar?"

Daripada menebak, inspect element.

Lihat:

```text
Content
Padding
Border
Margin
```

Kemudian cari penyebabnya.

---

# 25. Contoh Debugging dengan DevTools

CSS:

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Kamu melihat box lebih besar dari 300px.

Jangan langsung mengubah width.

Pikirkan:

```text
width = 300px
        ↓
content-box?
        ↓
padding?
        ↓
border?
```

Buka DevTools.

Jika terlihat:

```text
Content = 300px
Padding = 20px
Border = 5px
```

maka penyebabnya jelas:

```text
300
+ 20
+ 20
+ 5
+ 5
= 350px
```

Masalahnya bukan browser salah menghitung.

Browser memang sedang mengikuti aturan `content-box`.

---

# 26. Mengubahnya dengan DevTools

DevTools juga dapat digunakan untuk mencoba perubahan CSS secara langsung.

Misalnya:

```css
.box {
  width: 300px;
  padding: 20px;
}
```

Di DevTools tambahkan:

```css
box-sizing: border-box;
```

Kemudian lihat perubahan ukuran box.

Ini sangat berguna untuk belajar karena bisa langsung melihat:

```text
CSS berubah
    ↓
Browser menghitung ulang
    ↓
Visual berubah
```

Perubahan tersebut biasanya hanya sementara di DevTools dan tidak otomatis mengubah file CSS.

---

# 27. Cara Membaca Box Model di DevTools

Saat melihat diagram Box Model, biasakan membaca dari **tengah ke luar**:

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

Tanyakan:

### Content

> Berapa ukuran area isi?

### Padding

> Berapa ruang antara isi dan border?

### Border

> Berapa ketebalan batas element?

### Margin

> Berapa jarak element dengan element lain?

Dengan cara ini, diagram DevTools tidak lagi terlihat seperti angka acak.

---

# 28. Cause → Effect

## Menambahkan padding

```css
.box {
  width: 300px;
  padding: 20px;
}
```

Dengan `content-box`:

```text
content = 300px
padding = 40px total

total = 340px
```

---

## Menambahkan border

```css
.box {
  width: 300px;
  border: 5px solid black;
}
```

Dengan `content-box`:

```text
300 + 5 + 5
= 310px
```

---

## Menggunakan `border-box`

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Maka:

```text
total box = 300px
```

Padding dan border masuk ke dalam ukuran tersebut.

---

## Menambahkan margin

```css
.box {
  margin: 20px;
}
```

Margin tidak membuat content menjadi lebih besar.

Margin memberikan **ruang di luar box**.

---

# 29. Mental Model

Bayangkan sebuah paket:

```text
┌─────────────────────────────┐
│            Margin           │
│  ┌───────────────────────┐  │
│  │        Border         │  │
│  │  ┌─────────────────┐  │  │
│  │  │     Padding     │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  Content  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

Cara berpikir:

```text
Content
→ isi

Padding
→ ruang untuk isi dari dalam

Border
→ batas

Margin
→ jarak dengan luar
```

Lalu `box-sizing` menentukan:

> **Bagaimana `width` dan `height` dihitung terhadap bagian-bagian tersebut?**

---

# 30. Cheat Sheet

## Box Model

```text
Content
↓
Padding
↓
Border
↓
Margin
```

---

## Padding

```css
padding: 20px;
```

→ ruang **di dalam**, antara content dan border.

---

## Margin

```css
margin: 20px;
```

→ ruang **di luar**, setelah border.

---

## Border

```css
border: 1px solid black;
```

→ batas antara padding dan margin.

---

## Default

```css
box-sizing: content-box;
```

```text
width
↓
content saja
```

---

## `border-box`

```css
box-sizing: border-box;
```

```text
width
↓
content + padding + border
```

---

## Global

```css
* {
  box-sizing: border-box;
}
```

→ semua element menggunakan `border-box`.

---

# 31. Perbedaan yang Wajib Dipahami

### Padding vs Margin

```text
Padding
→ jarak isi dengan batas element

Margin
→ jarak element dengan luar
```

### Content-box vs Border-box

```text
content-box
→ width hanya content

border-box
→ width termasuk content + padding + border
```

### Width vs Total Size

```text
content-box:

width ≠ total box size
```

Sedangkan:

```text
border-box:

width = total box size
```

*(Dalam konteks ukuran content + padding + border; margin tetap berada di luar.)*

---

# 32. Self Check

Sebelum lanjut ke materi CSS berikutnya, pastikan bisa menjelaskan dengan kata-kata sendiri:

1. Apa itu CSS Box Model?
2. Apa urutan Content → Padding → Border → Margin?
3. Apa perbedaan padding dan margin?
4. Kenapa `width: 300px` bisa menghasilkan box yang lebih besar dari 300px?
5. Apa default `box-sizing`?
6. Apa perbedaan `content-box` dan `border-box`?
7. Apakah margin termasuk dalam `border-box`?
8. Bagaimana cara melihat Box Model melalui DevTools?
9. Kalau box lebih besar dari yang diharapkan, bagian mana saja yang perlu diperiksa?
10. Kenapa DevTools berguna untuk memahami Box Model?

---

# Key Takeaway

Jangan menganggap:

```css
width: 300px;
```

selalu berarti:

> **"ukuran keseluruhan box adalah 300px."**

Dengan default:

```css
box-sizing: content-box;
```

artinya:

> **content memiliki lebar 300px.**

Padding dan border dapat menambah ukuran keseluruhan.

Sedangkan:

```css
box-sizing: border-box;
```

berarti:

> **lebar 300px digunakan untuk keseluruhan area content + padding + border.**

Dan ketika bingung dengan ukuran element, jangan menebak.

Gunakan:

```text
Inspect
→ Computed
→ Box Model
```

Lalu baca dari tengah ke luar:

```text
Content
→ Padding
→ Border
→ Margin
```

Itulah cara dasar browser menghitung ukuran sebuah element.

# INSIGHT

Perbedaan `content-box` dan `border-box` paling terasa saat ukuran kotak harus pas:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid;
}
```

Dengan `content-box`, `300px` hanya ukuran content; padding dan border menambah lebar luar menjadi `350px` (`300 + 40 + 10`). Dengan `border-box`, `300px` sudah mencakup content, padding, dan border, jadi ukuran luarnya tetap `300px`. Karena itu, pilih `border-box` saat lebar yang ditulis harus sama dengan lebar kotak yang terlihat. `margin` tetap berada di luar pada kedua model.

# BEDAH NILAI CSS — Menghitung Ukuran Kotak

Nilai `width` saja belum cukup untuk mengetahui ukuran yang terlihat. Perhatikan hubungan `box-sizing`, padding, border, dan margin:

```css
.card {
  box-sizing: border-box;
  width: 320px;
  padding: 12px 24px;
  border: 4px solid;
  margin: 0 auto;
}
```

Cara menalar:

* `width: 320px` adalah lebar luar karena `box-sizing` memakai `border-box`.
* Padding kiri dan kanan berjumlah `48px`; border kiri dan kanan berjumlah `8px`. Jadi lebar content adalah `320 - 48 - 8 = 264px`.
* `margin: 0 auto` memberi margin vertikal `0` dan margin horizontal otomatis. Jika parent lebih lebar dari kartu, browser membagi sisa ruang horizontal untuk memusatkan kartu.
* Margin tidak termasuk dalam lebar `320px`; margin menambah ruang di luar kotak.

Sekarang ubah hanya `box-sizing` menjadi `content-box`. Lebar content menjadi `320px`, sehingga lebar luar menjadi `320 + 48 + 8 = 376px`. Latihan ini menunjukkan mengapa angka `width` tidak selalu sama dengan ukuran kotak yang tampak.

Mengapa hasil berubah ketika `box-sizing` berubah? Karena property ini menentukan **kotak mana yang dimaksud oleh `width`**. Padding dan border berada di dalam lebar yang ditentukan untuk `border-box`, tetapi ditambahkan di luar lebar content untuk `content-box`. Margin berada di luar keduanya. Untuk membaca ukuran, tentukan model kotaknya dulu; barulah jumlahkan sisi kiri dan kanan, lalu periksa apakah hasilnya muat di parent.

---

<a id="css-bab-3"></a>

<!-- Sumber: CSS\3.CSS-Display and Positioning.md -->

# CSS — Display & Positioning

## 1. Core Concept

Setelah memahami Box Model, sekarang kita perlu memahami dua hal:

* **`display`** → bagaimana sebuah element berperilaku dalam layout.
* **`position`** → bagaimana posisi sebuah element ditentukan.

Mental model:

```text
display
→ "Bagaimana element ini berperilaku?"

position
→ "Bagaimana posisi element ini ditentukan?"
```

Contoh sederhana:

```css
.box {
  display: block;
  position: relative;
}
```

Artinya:

* `display: block` → element menggunakan perilaku block.
* `position: relative` → posisi element dapat menjadi referensi untuk positioning tertentu.

---

# 2. Display

Property:

```css
display
```

digunakan untuk menentukan **jenis perilaku layout dasar sebuah element**.

Beberapa value penting:

```css
block
inline
inline-block
none
```

Nanti ada juga:

```css
flex
grid
```

Tetapi Flexbox dan Grid akan dibahas lebih lanjut sebagai materi layout tersendiri.

---

# 3. Block

Element dengan:

```css
display: block;
```

memulai pada baris baru dan secara default mengambil ruang horizontal yang tersedia.

Contoh:

```html
<div>Box 1</div>
<div>Box 2</div>
```

Secara default `<div>` adalah block.

Visual:

```text
┌─────────────────────────────┐
│ Box 1                       │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Box 2                       │
└─────────────────────────────┘
```

Element kedua berada di bawah element pertama.

---

## 3.1 Ciri utama Block

```text
Block
→ mulai dari baris baru
→ dapat mengatur width dan height
→ dapat memiliki margin dan padding
→ secara default mengambil lebar yang tersedia
```

Contoh:

```css
.box {
  display: block;
  width: 300px;
  height: 100px;
}
```

---

# 4. Inline

Element dengan:

```css
display: inline;
```

tidak memulai baris baru.

Element inline berada di dalam aliran teks dan dapat berada berdampingan dengan element inline lainnya.

Contoh:

```html
<span>Hello</span>
<span>World</span>
```

Visual sederhananya:

```text
Hello World
```

Bukan:

```text
Hello

World
```

---

## 4.1 Ciri utama Inline

```text
Inline
→ tidak membuat baris baru
→ dapat berada di samping element inline lain
→ width dan height tidak bekerja seperti pada block
```

Contoh:

```css
span {
  display: inline;
}
```

Element seperti `<span>` secara default bersifat inline.

---

# 5. Block vs Inline

Ini salah satu perbedaan paling penting.

| Block                              | Inline                                    |
| ---------------------------------- | ----------------------------------------- |
| Mulai baris baru                   | Tidak mulai baris baru                    |
| Dapat mengatur width/height        | Width/height tidak bekerja seperti block  |
| Cenderung mengambil lebar tersedia | Mengikuti kebutuhan content               |
| Cocok untuk struktur/layout dasar  | Cocok untuk bagian kecil di dalam content |

Mental model:

```text
Block
→ "Ambil satu baris"

Inline
→ "Tetap di dalam aliran baris"
```

Contoh:

```html
<div>Block</div>
<div>Block</div>
```

```text
Block
Block
```

Sedangkan:

```html
<span>Inline</span>
<span>Inline</span>
```

```text
Inline Inline
```

---

# 6. Inline-Block

Ada situasi ketika kita ingin:

* element tetap berada dalam satu baris seperti `inline`
* tetapi tetap dapat mengatur `width` dan `height` seperti `block`

Gunakan:

```css
display: inline-block;
```

Contoh:

```css
.button {
  display: inline-block;
  width: 120px;
  height: 40px;
}
```

Beberapa element dapat berada berdampingan:

```text
┌───────────┐  ┌───────────┐
│  Button 1 │  │  Button 2 │
└───────────┘  └───────────┘
```

---

## 6.1 Mental Model Inline-Block

```text
inline-block
=
inline dalam posisi
+
block dalam ukuran
```

Artinya:

```text
inline
→ bisa berdampingan

block
→ width dan height dapat digunakan
```

Ini berguna untuk element seperti:

* button
* badge
* menu item sederhana
* label

---

# 7. `display: none`

Value:

```css
display: none;
```

membuat element **tidak ditampilkan dan tidak mengambil ruang dalam layout**.

Contoh:

```css
.menu {
  display: none;
}
```

Element tersebut tidak terlihat.

Yang penting:

```text
display: none
→ element tidak tampil
→ ruangnya juga hilang
```

Misalnya:

```html
<div>Box 1</div>
<div class="hidden">Box 2</div>
<div>Box 3</div>
```

Jika:

```css
.hidden {
  display: none;
}
```

hasilnya secara layout:

```text
Box 1

Box 3
```

Box 2 tidak menyisakan tempat.

---

# 8. `display` vs Visibility

Jangan menyamakan:

```css
display: none;
```

dengan:

```css
visibility: hidden;
```

Dengan:

```css
visibility: hidden;
```

element tidak terlihat, tetapi **ruangnya masih ada**.

```text
display: none

Box 1
Box 3
```

Sedangkan:

```text
visibility: hidden

Box 1
[ruang Box 2]
Box 3
```

Perbedaannya:

| Property             | Terlihat? | Masih mengambil ruang? |
| -------------------- | --------- | ---------------------- |
| `display: none`      | Tidak     | Tidak                  |
| `visibility: hidden` | Tidak     | Ya                     |

---

# 9. Positioning

Sekarang masuk ke:

```css
position
```

`position` menentukan **bagaimana element ditempatkan dalam halaman**.

Value yang paling penting:

```css
static
relative
absolute
fixed
sticky
```

Mental model:

```text
static
→ posisi normal

relative
→ posisi normal + bisa digeser

absolute
→ keluar dari normal flow + mengacu pada ancestor tertentu

fixed
→ mengacu pada viewport

sticky
→ normal sampai kondisi tertentu, lalu menempel
```

---

# 10. `position: static`

`static` adalah **default positioning**.

```css
.box {
  position: static;
}
```

Element mengikuti normal flow.

Contoh:

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

Browser menempatkannya berdasarkan aturan layout normal.

```text
Box 1
Box 2
Box 3
```

Pada `static`, property offset seperti:

```css
top
right
bottom
left
```

tidak digunakan untuk memindahkan element seperti pada positioned elements.
Offset tersebut baru menggeser element jika `position` bernilai selain `static`, misalnya `relative`, `absolute`, `fixed`, atau `sticky`.

---

# 11. `position: relative`

Dengan:

```css
position: relative;
```

element tetap berada dalam **normal flow**, tetapi posisinya dapat digeser menggunakan:

```css
top
right
bottom
left
```

Contoh:

```css
.box {
  position: relative;
  top: 20px;
}
```

Artinya element digeser **20px ke bawah dari posisi normalnya**.

---

## 11.1 Relative Tidak Menghilangkan Ruang Asli

Ini penting.

```css
.box {
  position: relative;
  top: 20px;
}
```

Element terlihat bergeser:

```text
Posisi normal
    ↓
   Box

    ↓ top: 20px

   Box ← terlihat di sini
```

Tetapi ruang awalnya tetap dipertahankan dalam layout.

Mental model:

```text
relative
→ "geser dari posisi normal"
→ ruang asli tetap ada
```

---

# 12. Offset Properties

Untuk positioning, sering digunakan:

```css
top
right
bottom
left
```

Property offset ini tidak memindahkan element dengan `position: static` (nilai default). Berikan nilai `position` selain `static` pada element yang ingin digeser.

Contoh:

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

Artinya:

* `top: 10px` → geser ke bawah 10px
* `left: 20px` → geser ke kanan 20px

Cara membaca:

```text
top
→ jarak dari sisi atas

left
→ jarak dari sisi kiri
```

Jangan berpikir `top: 10px` berarti "posisi top = 10px".

Lebih tepat:

> **offset element sebesar 10px dari sisi yang ditentukan.**

---

# 13. `position: absolute`

Dengan:

```css
position: absolute;
```

element dikeluarkan dari **normal flow**.

Artinya element tidak lagi mengambil ruang seperti sebelumnya dalam aliran layout normal.

Contoh:

```css
.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

Element dapat ditempatkan menggunakan:

```css
top
right
bottom
left
```

---

# 14. Absolute Mengacu ke Apa?

Ini konsep paling penting dalam `position: absolute`.

Element absolute biasanya mencari **ancestor terdekat yang memiliki positioning selain `static`**.

Contoh:

```html
<div class="parent">
  <div class="child"></div>
</div>
```

CSS:

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

Sekarang `.child` menggunakan `.parent` sebagai **containing block** untuk positioning.

Mental model:

```text
.parent
└── .child
      ↓
absolute
      ↓
mencari ancestor positioned
      ↓
.parent
```

---

# 15. Kenapa Parent Sering Diberi `position: relative`?

Pola yang sangat umum:

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

Tujuannya bukan untuk menggeser `.parent`.

`relative` digunakan agar `.parent` menjadi **referensi positioning** untuk `.child`.

Contoh kasus:

```text
┌──────────────────────────────┐
│ Parent                  X    │
│                              │
│                              │
└──────────────────────────────┘
```

`X` dapat dibuat:

```css
.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

---

# 16. Absolute vs Relative

| Relative                                  | Absolute                                                     |
| ----------------------------------------- | ------------------------------------------------------------ |
| Tetap dalam normal flow                   | Keluar dari normal flow                                      |
| Ruang asli tetap dipertahankan            | Tidak mengambil ruang normal                                 |
| Bergeser dari posisi normal               | Diposisikan terhadap containing block                        |
| Sering digunakan sebagai reference parent | Sering digunakan untuk child yang ingin ditempatkan spesifik |

Mental model:

```text
relative
→ "Saya tetap bagian dari layout, hanya digeser."

absolute
→ "Saya ditempatkan secara khusus, tidak mengikuti aliran normal."
```

---

# 17. `position: fixed`

Dengan:

```css
position: fixed;
```

element diposisikan relatif terhadap **viewport**.

Viewport adalah area halaman yang sedang terlihat di layar.

Contoh:

```css
.button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

Element akan berada:

```text
┌──────────────────────────────┐
│                              │
│                              │
│                              │
│                         ┌───┐│
│                         │ X ││
└─────────────────────────┴───┘
```

dan tetap berada di posisi tersebut ketika halaman di-scroll.

---

# 18. Fixed Tidak Mengikuti Parent

Berbeda dengan `absolute`, `fixed` umumnya digunakan ketika element perlu tetap mengacu pada viewport.

Contoh penggunaan:

* floating action button
* tombol "back to top"
* fixed navigation
* floating control

Mental model:

```text
fixed
→ posisi terhadap viewport
→ tetap terlihat saat scroll
```

---

# 19. `position: sticky`

`sticky` berada di antara perilaku `relative` dan `fixed`.

Contoh:

```css
.header {
  position: sticky;
  top: 0;
}
```

Awalnya element berada pada posisi normal.

Ketika scrolling mencapai batas yang ditentukan:

```text
scroll
  ↓
element mencapai top: 0
  ↓
element menempel
```

> **Catatan:** agar efek menempelnya terlihat, tentukan offset seperti `top: 0`. Setelah itu, posisi sticky tetap dibatasi oleh area yang di-scroll (scroll container) dan ruang parent-nya.

Visual:

```text
Awal:

┌─────────────────────┐
│ Header              │
├─────────────────────┤
│ Content             │
│ Content             │
└─────────────────────┘

Scroll:

┌─────────────────────┐
│ Header ← sticky     │
├─────────────────────┤
│ Content             │
│ Content             │
└─────────────────────┘
```

---

# 20. Sticky vs Fixed

Keduanya dapat terlihat "menempel", tetapi perilakunya berbeda.

### Fixed

```css
position: fixed;
```

Element langsung diposisikan terhadap viewport dan tidak mengikuti normal flow seperti element biasa.

### Sticky

```css
position: sticky;
top: 0;
```

Element tetap berada dalam flow dan baru menempel ketika mencapai threshold tertentu saat scrolling.

| Fixed                       | Sticky                                             |
| --------------------------- | -------------------------------------------------- |
| Mengacu ke viewport         | Berinteraksi dengan posisi normal/scroll container |
| Tidak mengikuti normal flow | Tetap punya posisi dalam flow                      |
| Tetap di posisi viewport    | Menempel setelah mencapai threshold                |
| Cocok untuk floating UI     | Cocok untuk header/section yang ingin sticky       |

---

# 21. Normal Flow

Untuk memahami positioning, harus memahami **normal flow**.

Normal flow adalah cara browser menempatkan element secara normal tanpa positioning khusus.

Contoh:

```html
<div>One</div>
<div>Two</div>
<div>Three</div>
```

Browser menempatkannya mengikuti aturan `display` dan layout normal.

Secara sederhana:

```text
One
Two
Three
```

Ketika menggunakan:

```css
position: absolute;
```

element dapat keluar dari aliran tersebut.

---

# 22. Positioning dan Normal Flow

Perbandingan:

```text
Normal flow
──────────────
Box 1
Box 2
Box 3
```

Dengan:

```css
.box2 {
  position: absolute;
}
```

menjadi secara konseptual:

```text
Normal flow
──────────────
Box 1
Box 3

Box 2 → diposisikan terpisah
```

Inilah alasan `absolute` dapat menyebabkan element lain menempati ruang yang sebelumnya digunakan element tersebut.

---

# 23. Display vs Position

Jangan mencampur dua konsep ini.

### `display`

Menentukan **perilaku layout dasar**.

```css
display: block;
display: inline;
display: inline-block;
display: none;
```

### `position`

Menentukan **cara element diposisikan**.

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

Contoh:

```css
.card {
  display: block;
  position: relative;
}
```

Dua property tersebut mengatur dua hal berbeda.

```text
display
→ bagaimana element berperilaku dalam layout

position
→ bagaimana posisi element ditentukan
```

---

# 24. Contoh Gabungan

HTML:

```html
<div class="card">
  <h2>Product</h2>
  <span class="badge">New</span>
</div>
```

CSS:

```css
.card {
  position: relative;
  width: 300px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

Yang terjadi:

```text
.card
→ menjadi reference

.badge
→ absolute

top: 10px
→ 10px dari atas reference

right: 10px
→ 10px dari kanan reference
```

Visual:

```text
┌─────────────────────────────┐
│ Product                New  │
│                             │
│                             │
└─────────────────────────────┘
```

Ini adalah pola yang sangat umum dalam UI.

---

# 25. `z-index`

Ketika beberapa element saling bertumpuk, kita dapat mengatur urutan tampilannya menggunakan:

```css
z-index
```

Contoh:

```css
.box {
  position: relative;
  z-index: 2;
}
```

Secara sederhana:

```text
z-index lebih tinggi
→ berada di depan
```

Contoh:

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 2;
}
```

`.box2` dapat tampil di atas `.box1`.

> `z-index` berkaitan dengan **stacking order**, bukan sekadar "element dengan angka lebih besar selalu di depan" dalam semua kondisi. Stacking context dapat memengaruhi hasil.

> **Catatan:** stacking context adalah kelompok element yang urutan tumpukannya dihitung sendiri. Nilai `z-index` dibandingkan di dalam kelompok yang sama, jadi angka besar pada child tidak selalu bisa melewati kelompok parent-nya.

Untuk tahap dasar, pahami dulu:

```text
z-index
→ mengatur urutan tumpukan element.
```

Pada umumnya `z-index` berlaku pada positioned element (position selain `static`); `z-index` juga dapat digunakan pada flex item dan grid item. Konteks penumpukan tetap dapat membatasi urutan akhirnya.

---

# 26. `display` Cheat Sheet

| Value          | Perilaku                                 |
| -------------- | ---------------------------------------- |
| `block`        | Baris baru, width/height dapat digunakan |
| `inline`       | Tetap dalam baris, mengikuti content     |
| `inline-block` | Bisa berdampingan + width/height         |
| `none`         | Tidak tampil + tidak mengambil ruang     |

Mental model:

```text
block
→ satu baris

inline
→ ikut baris

inline-block
→ ikut baris + bisa diatur ukurannya

none
→ hilangkan dari layout
```

---

# 27. `position` Cheat Sheet

| Value      | Mental Model                                        |
| ---------- | --------------------------------------------------- |
| `static`   | Posisi normal                                       |
| `relative` | Posisi normal + dapat digeser                       |
| `absolute` | Keluar dari flow + posisi terhadap containing block |
| `fixed`    | Posisi terhadap viewport                            |
| `sticky`   | Normal → menempel saat threshold tercapai           |

---

# `float` Cheat Sheet

| Property/value | Perilaku |
|---|---|
| `float: left` | Menempatkan float di sisi kiri; content inline mengalir di sisi kanannya |
| `float: right` | Menempatkan float di sisi kanan; content inline mengalir di sisi kirinya |
| `float: none` | Tidak membuat element mengapung; nilai default |
| `clear: left/right/both` | Mencegah element berada di samping float terkait |
| `display: flow-root` | Membuat container membentuk konteks yang mencakup float di dalamnya |

Pilih `float` untuk pola **objek di samping teks**. Pilih Flexbox/Grid untuk **susunan item**. `float` bukan pengganti `position: fixed` dan tidak menempel pada viewport.

---

# 28. Offset Cheat Sheet

```css
top
right
bottom
left
```

Digunakan untuk menentukan offset pada element yang menggunakan positioning yang mendukung offset.

Contoh:

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

Mental model:

```text
top
→ dari atas

right
→ dari kanan

bottom
→ dari bawah

left
→ dari kiri
```

---

# 29. Perbedaan yang Wajib Dipahami

## Block vs Inline

```text
Block
→ membuat baris baru

Inline
→ tetap dalam baris
```

---

## Inline vs Inline-Block

```text
inline
→ berdampingan
→ width/height tidak bekerja seperti block

inline-block
→ berdampingan
→ width/height dapat digunakan
```

---

## `display: none` vs `visibility: hidden`

```text
display: none
→ tidak terlihat
→ ruang hilang

visibility: hidden
→ tidak terlihat
→ ruang tetap ada
```

---

## Relative vs Absolute

```text
relative
→ tetap dalam flow
→ bergeser dari posisi normal

absolute
→ keluar dari flow
→ diposisikan terhadap containing block
```

---

## Absolute vs Fixed

```text
absolute
→ positioning terhadap containing block

fixed
→ positioning terhadap viewport
→ tetap saat scroll
```

---

## Fixed vs Sticky

```text
fixed
→ langsung terikat ke viewport

sticky
→ awalnya normal
→ kemudian menempel saat threshold tercapai
```

---

# 30. Cause → Effect

### Mengubah block menjadi inline

```css
.box {
  display: inline;
}
```

Akibat:

```text
tidak membuat baris baru
→ element dapat berdampingan
```

---

### Menggunakan inline-block

```css
.box {
  display: inline-block;
  width: 100px;
}
```

Akibat:

```text
tetap dapat berdampingan
+
width dapat digunakan
```

---

### Menggunakan `display: none`

```css
.box {
  display: none;
}
```

Akibat:

```text
element tidak tampil
→ ruangnya juga hilang
```

---

### Menggunakan `position: relative`

```css
.box {
  position: relative;
  top: 20px;
}
```

Akibat:

```text
element bergeser
→ ruang awal tetap dipertahankan
```

---

### Menggunakan `position: absolute`

```css
.box {
  position: absolute;
}
```

Akibat:

```text
element keluar dari normal flow
→ tidak lagi mengambil ruang normal
```

---

### Parent `relative` + child `absolute`

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

Akibat:

```text
.parent
→ menjadi reference

.child
→ dapat ditempatkan di pojok parent
```

---

# 31. Cara Berpikir Saat Memilih `display`

Jangan mulai dari:

> "Saya harus pakai `display` apa?"

Mulai dari:

> **Bagaimana element ini harus berperilaku terhadap element lain?**

Jika ingin:

### Element mengambil satu baris

```css
display: block;
```

### Element tetap dalam baris

```css
display: inline;
```

### Element berdampingan tetapi tetap bisa diatur width/height

```css
display: inline-block;
```

### Element benar-benar dihilangkan dari layout

```css
display: none;
```

---

# 32. Cara Berpikir Saat Memilih `position`

Tanyakan:

### 1. Apakah element cukup mengikuti posisi normal?

```css
position: static;
```

### 2. Ingin menggeser element sedikit tetapi tetap mempertahankan ruangnya?

```css
position: relative;
```

### 3. Ingin menempatkan element secara spesifik di dalam parent?

```css
position: absolute;
```

Biasanya:

```css
.parent {
  position: relative;
}
```

### 4. Ingin element tetap di posisi tertentu pada layar?

```css
position: fixed;
```

### 5. Ingin element normal tetapi menempel saat scrolling?

```css
position: sticky;
```

---

# 33. Mental Model Besar

Jangan menghafal:

```text
block
inline
relative
absolute
fixed
sticky
```

sebagai daftar terpisah.

Hubungkan dengan masalah yang ingin diselesaikan.

```text
DISPLAY
│
├── Bagaimana element berperilaku?
│
├── block
├── inline
├── inline-block
└── none
```

Kemudian:

```text
POSITION
│
├── Bagaimana element ditempatkan?
│
├── static
├── relative
├── absolute
├── fixed
└── sticky
```

Jadi:

```text
Display
→ perilaku layout

Position
→ metode positioning

float
→ teks mengalir di sekitar objek
```

---

# 34. Self Check

Sebelum lanjut ke Flexbox/Grid, pastikan bisa menjelaskan:

1. Apa fungsi `display`?
2. Apa perbedaan `block` dan `inline`?
3. Kenapa menggunakan `inline-block`?
4. Apa yang terjadi pada layout dengan `display: none`?
5. Apa perbedaan `display: none` dan `visibility: hidden`?
6. Apa fungsi `position`?
7. Apa default `position`?
8. Apa yang terjadi ketika menggunakan `position: relative`?
9. Kenapa `relative` masih mempertahankan ruang awal?
10. Apa yang terjadi ketika menggunakan `position: absolute`?
11. Absolute biasanya mencari apa sebagai reference?
12. Kenapa parent sering diberi `position: relative`?
13. Apa perbedaan `absolute` dan `fixed`?
14. Apa perbedaan `fixed` dan `sticky`?
15. Apa fungsi `top`, `right`, `bottom`, dan `left`?
16. Apa fungsi dasar `z-index`?
17. Untuk kasus apa `float` tepat digunakan?
18. Apa perbedaan `clear` dan `display: flow-root`?

---

# Key Takeaway

**`display`, `position`, dan `float` menyelesaikan masalah yang berbeda.**

```text
display
→ bagaimana element berperilaku dalam layout

position
→ bagaimana element ditempatkan
```

Untuk `display`:

```text
block
→ baris baru

inline
→ ikut baris

inline-block
→ ikut baris + bisa punya ukuran

none
→ hilang dari layout
```

Untuk `position`:

```text
static
→ normal

relative
→ normal + dapat digeser

absolute
→ keluar flow + positioning terhadap reference

fixed
→ terhadap viewport

sticky
→ normal → menempel saat scroll
```

Pola yang sangat penting untuk diingat:

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

Bukan karena parent perlu digeser, tetapi karena **parent dijadikan reference untuk child**.

Dan sebelum menggunakan positioning untuk memperbaiki layout, pastikan dulu memahami **normal flow**. Banyak masalah layout sebenarnya tidak membutuhkan `position: absolute`; positioning sebaiknya digunakan ketika memang ada kebutuhan positioning khusus.

# INSIGHT

Perbedaan `position: relative` dan `position: absolute` bukan sekadar cara menggeser element:

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

`relative` pada `.card` membuat kartu tetap mengambil ruang normalnya sekaligus menjadi acuan posisi badge. `absolute` pada `.badge` mengeluarkan badge dari alur normal, sehingga badge tidak mendorong isi kartu. Karena itu, pola ini cocok untuk label "Baru" di pojok kartu; jangan pakai `absolute` untuk menyusun semua kartu karena ruangnya tidak lagi diperhitungkan dan kartu bisa bertumpuk.

# BEDAH NILAI CSS — Display dan Positioning

Perhatikan bagaimana satu nilai property memengaruhi acuan posisi, alur dokumen, dan ruang yang dipertahankan:

```css
.card {
  position: relative;
  width: 240px;
  min-height: 120px;
}

.badge {
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: 1;
}

.hint {
  visibility: hidden;
}
```

Cara menalar:

* `.card` tetap berada dalam normal flow. `position: relative` juga menjadikannya acuan bagi `.badge` yang diposisikan secara absolute.
* `.badge` ditempatkan `8px` dari sisi atas dan `12px` dari sisi kanan acuan. Ia keluar dari normal flow, sehingga tidak menyediakan ruang dan tidak mendorong isi kartu.
* `z-index: 1` dapat mengatur urutan tumpukan jika badge bertumpuk dengan element lain, tetapi hasilnya tetap bergantung pada stacking context.
* `.hint` tidak terlihat, tetapi ruang layout-nya tetap dipertahankan karena `visibility: hidden`. Mengganti nilainya menjadi `display: none` akan menghilangkan element beserta ruangnya dari layout.

Mengapa `top: 8px` dan `right: 12px` tidak menggeser `.card`? Karena offset tersebut diterapkan pada `.badge` yang keluar dari normal flow, dan koordinatnya dihitung dari containing block terdekat yang membentuk acuan. `.card` menjadi acuan sebab `position: relative`; jika aturan itu dihapus, browser mencari ancestor lain yang sesuai, sehingga badge bisa berpindah relatif terhadap element yang berbeda. Sementara itu, `visibility: hidden` hanya menyembunyikan gambar element tetapi mempertahankan kotaknya dalam layout; `display: none` menghapus kotak itu dari layout. Memahami nilai berarti mengidentifikasi **element target, acuan koordinat, dan dampaknya pada alur**.

---

# 35. `float` — Membuat Teks Mengalir di Sekitar Element

`float` menggeser sebuah element ke sisi kiri atau kanan dalam containing block, lalu membiarkan **content inline—seperti teks—mengalir di ruang yang tersisa di sampingnya**.

Penggunaan yang sesuai adalah gambar di dalam artikel:

```html
<article class="story">
  <img class="story-image" src="garden.jpg" alt="Kebun kecil di balkon">
  <p>
    Kebun balkon dapat dimulai dengan beberapa pot yang mendapat cukup
    cahaya. Pilih tanaman dan wadah berdasarkan ruang yang tersedia.
  </p>
  <p>
    Susun pot agar tetap ada ruang untuk menyiram dan merawat tanaman.
  </p>
</article>
```

```css
.story-image {
  float: left;
  width: 12rem;
  margin: 0 1rem 0.75rem 0;
}
```

Gambar mengapung ke kiri; teks paragraf mengalir di sisi kanannya, lalu dapat memenuhi lebar baris di bawah gambar setelah melewati tinggi gambar. `margin` membuat jarak antara gambar dan teks—`float` sendiri tidak otomatis memberi jarak.

Untuk meletakkan gambar di kanan:

```css
.story-image {
  float: right;
  margin: 0 0 0.75rem 1rem;
}
```

## Apa yang `float` bukan?

`float` bukan cara umum untuk memusatkan element, membuat kolom aplikasi, atau menempelkan tombol ke tepi layar. Float bukan `position: fixed`: ia tidak menempel pada viewport. Float juga bukan Flexbox/Grid: tujuan utamanya adalah membungkus teks mengitari objek, bukan menyusun kumpulan item secara terkontrol.

Nama UI seperti *floating action button* sering berarti tombol yang tampak mengambang di atas halaman; nama itu **tidak berarti** implementasinya harus memakai `float`. Tombol yang menempel pada viewport biasanya dibuat dengan positioning, sementara susunan toolbar/card umumnya memakai Flexbox atau Grid.

## `clear` — Menghentikan aliran di samping float

Kadang heading atau bagian berikutnya tidak boleh berada di samping gambar yang mengapung:

```css
.next-section {
  clear: both;
}
```

`clear: left` mencegah element berada di samping float kiri; `clear: right` berlaku untuk float kanan; `clear: both` berlaku untuk keduanya. Element yang di-clear akan dimulai setelah float terkait selesai, sehingga gunakan hanya saat batas content memang perlu berada di bawah float.

## Mengapa parent kadang tidak mencakup tinggi float?

Float dikeluarkan dari alur block normal untuk tujuan pengaturan teks, jadi parent yang hanya berisi float dapat tampak seolah tingginya nol. Salah satu cara modern membentuk block formatting context agar parent menghitung float di dalamnya:

```css
.story {
  display: flow-root;
}
```

Gunakan `flow-root` ketika container perlu membungkus float tanpa menambahkan elemen kosong hanya untuk membersihkan float. Ini berbeda dari menambah `clear` pada element berikutnya: `clear` mengatur letak element setelah float, sedangkan `flow-root` membentuk konteks layout baru pada container.

## Cara memutuskan apakah perlu `float`

Tanyakan:

1. Apakah tujuan saya membuat teks mengalir di sisi gambar/objek? `float` mungkin sesuai.
2. Apakah tujuan saya membuat kolom, navbar, card, atau alignment? Pilih Grid/Flexbox.
3. Apakah element harus tetap di tepi viewport saat scroll? Pilih `position: fixed` atau pola positioning yang sesuai, bukan `float`.
4. Apakah content setelah float harus dimulai di bawahnya, atau parent harus mencakup tinggi float? Pertimbangkan `clear` atau `display: flow-root` sesuai element yang perlu mengatur aliran.

---

<a id="css-bab-4"></a>

<!-- Sumber: CSS\4.CSS-Colors.md -->

# CSS — Colors

## 1. Core Concept

CSS menggunakan warna untuk mengatur tampilan visual element.

Contoh:

```css
h1 {
  color: blue;
}
```

```css
.card {
  background-color: lightgray;
}
```

Ada dua property dasar yang paling sering digunakan:

```text
color
→ foreground / warna teks

background-color
→ background / warna latar
```

Mental model:

```text
Element
│
├── foreground
│   └── color
│
└── background
    └── background-color
```

---

# 2. Foreground vs Background

## Foreground

Foreground adalah content visual yang berada **di depan background**, paling sering berupa teks atau icon.

Gunakan:

```css
color
```

Contoh:

```css
p {
  color: #222222;
}
```

Artinya warna teks menjadi `#222222`.

Jika icon dibuat menggunakan teks atau SVG yang mengikuti warna teks, `color` juga dapat memengaruhi icon tersebut.

---

## Background

Background adalah lapisan visual yang berada **di belakang content**. Bentuknya bisa warna solid, gradient, gambar, atau gabungan beberapa lapisan.

Gunakan:

```css
background-color
```

Contoh:

```css
.card {
  background-color: white;
}
```

Untuk gambar atau gradient, gunakan `background-image`. Background dan foreground menjawab pertanyaan yang berbeda:

```css
.card {
  color: #172033;                /* foreground: teks */
  background-color: #f4f7ff;    /* background: warna dasar */
}
```

Warna `color` tidak mengisi latar element; `background-color` tidak mengubah warna teks.

---

## Perbedaannya

```css
.card {
  color: black;
  background-color: white;
}
```

Baca:

> Teks berwarna hitam, sedangkan latar belakang element berwarna putih.

Mental model:

```text
color
→ warna foreground

background-color
→ warna background
```

---

# 3. Named Colors

Cara paling sederhana menentukan warna adalah menggunakan nama warna.

```css
h1 {
  color: red;
}

p {
  color: blue;
}

body {
  background-color: white;
}
```

Contoh:

```text
red
blue
green
yellow
orange
purple
black
white
gray
pink
```

Kelebihan:

* mudah dibaca
* mudah digunakan saat belajar
* cocok untuk testing cepat

Kekurangan:

> Pilihan warnanya terbatas dibandingkan format warna lain.

---

# 4. Hexadecimal

Format hexadecimal atau **hex color** sangat umum digunakan dalam CSS.

```css
color: #ff0000;
```

Format:

```text
#RRGGBB
```

Terdiri dari:

```text
RR → Red
GG → Green
BB → Blue
```

Setiap channel menggunakan nilai hexadecimal:

```text
00 → paling rendah
FF → paling tinggi
```

---

# 5. Cara Membaca Hex Color

Contoh:

```css
color: #ff0000;
```

Pecah:

```text
# FF 00 00
  │  │  │
  │  │  └── Blue
  │  └───── Green
  └──────── Red
```

Jadi:

```text
Red   = FF
Green = 00
Blue  = 00
```

Hasilnya merah.

---

# 6. Contoh Hexadecimal

```css
color: #ff0000; /* merah */
color: #00ff00; /* hijau */
color: #0000ff; /* biru */
color: #000000; /* hitam */
color: #ffffff; /* putih */
```

Mental model:

```text
#RRGGBB
 │ │ │
 │ │ └── Blue
 │ └──── Green
 └────── Red
```

Semakin tinggi nilai suatu channel, semakin besar kontribusinya terhadap warna.

---

# 7. Hex Shorthand

Beberapa hex color dapat ditulis dalam bentuk singkat.

```css
#ffffff
```

menjadi:

```css
#fff
```

Dan:

```css
#000000
```

menjadi:

```css
#000
```

Aturan:

```text
#RRGGBB
↓
#RGB
```

Hanya dapat dilakukan jika setiap pasangan memiliki karakter yang sama.

Contoh:

```text
#ff0000 → #f00
#00ff00 → #0f0
#112233 → #123
```

Tetapi:

```text
#123456
```

tidak dapat disingkat menjadi `#123`.

---

# 8. RGB

RGB berarti:

```text
Red
Green
Blue
```

CSS dapat menuliskan warna dengan:

```css
rgb()
```

Contoh:

```css
color: rgb(255, 0, 0);
```

Artinya:

```text
Red   = 255
Green = 0
Blue  = 0
```

Hasilnya merah.

---

# 9. Rentang RGB

Setiap channel RGB memiliki range:

```text
0–255
```

Mental model:

```text
0
↓
kontribusi channel minimum

255
↓
kontribusi channel maksimum
```

Contoh:

```css
rgb(255, 0, 0)
```

→ merah.

```css
rgb(0, 255, 0)
```

→ hijau.

```css
rgb(0, 0, 255)
```

→ biru.

---

# 10. Mencampurkan RGB

RGB dapat menghasilkan berbagai warna dengan mengubah kontribusi setiap channel.

Contoh:

```css
rgb(255, 255, 0)
```

```text
Red   = 255
Green = 255
Blue  = 0
```

→ yellow.

Contoh:

```css
rgb(255, 0, 255)
```

→ magenta.

```css
rgb(0, 255, 255)
```

→ cyan.

---

# 11. Gray dengan RGB

Warna abu-abu dapat dibuat dengan memberikan nilai yang sama pada semua channel.

```css
rgb(0, 0, 0)
```

→ hitam.

```css
rgb(128, 128, 128)
```

→ abu-abu.

```css
rgb(255, 255, 255)
```

→ putih.

Mental model:

```text
R = G = B
↓
grayscale
```

Semakin besar nilainya:

```text
hitam → abu-abu → putih
```

---

# 12. RGBA

RGB dapat ditambahkan channel **Alpha**.

```css
rgba()
```

Format:

```text
rgba(red, green, blue, alpha)
```

Contoh:

```css
background-color: rgba(0, 0, 0, 0.5);
```

Tiga angka pertama:

```text
Red
Green
Blue
```

Angka terakhir:

```text
Alpha
```

Alpha menentukan seberapa terlihat atau transparan warnanya.

---

# 13. Alpha

Nilai alpha berada antara:

```text
0 → 1
```

Mental model:

```text
0
↓
sepenuhnya transparan

0.5
↓
50% terlihat dan 50% transparan

1
↓
sepenuhnya terlihat / tidak transparan
```

Contoh:

```css
background-color: rgba(0, 0, 0, 0);
```

→ transparan.

```css
background-color: rgba(0, 0, 0, 0.5);
```

→ hitam semi-transparan.

```css
background-color: rgba(0, 0, 0, 1);
```

→ hitam penuh.

---

# 14. RGB vs RGBA

```css
rgb(0, 0, 0)
```

→ menentukan warna.

```css
rgba(0, 0, 0, 0.5)
```

→ menentukan warna + alpha.

```text
RGB
→ Red + Green + Blue

RGBA
→ Red + Green + Blue + Alpha
```

---

# 15. HSL

CSS juga mendukung:

```css
hsl()
```

HSL berarti:

```text
Hue
Saturation
Lightness
```

Contoh:

```css
color: hsl(0, 100%, 50%);
```

---

# 16. Hue

**Hue** menentukan jenis warna.

Nilainya menggunakan derajat:

```text
0°   → merah
120° → hijau
240° → biru
```

Contoh:

```css
hsl(0, 100%, 50%);
```

→ merah.

```css
hsl(120, 100%, 50%);
```

→ hijau.

```css
hsl(240, 100%, 50%);
```

→ biru.

Mental model:

```text
Hue
→ "warna apa?"
```

---

# 17. Saturation

Saturation menentukan seberapa kuat/intens warna tersebut.

Nilai:

```text
0%   → tidak tersaturasi
100% → saturasi penuh
```

Contoh:

```css
hsl(0, 100%, 50%);
```

→ merah dengan saturasi penuh.

Sedangkan:

```css
hsl(0, 0%, 50%);
```

→ abu-abu.

Mental model:

```text
Saturation
→ "seberapa kuat warnanya?"
```

---

# 18. Lightness

Lightness menentukan tingkat terang atau gelap warna.

```text
0%   → hitam
50%  → warna utama
100% → putih
```

Contoh:

```css
hsl(0, 100%, 50%);
```

→ merah.

```css
hsl(0, 100%, 25%);
```

→ merah lebih gelap.

```css
hsl(0, 100%, 75%);
```

→ merah lebih terang.

Mental model:

```text
Lightness
→ "seberapa terang/gelap?"
```

---

# 19. HSLA

HSL juga dapat memiliki alpha:

```css
hsla()
```

Contoh:

```css
color: hsla(0, 100%, 50%, 0.5);
```

Struktur:

```text
Hue
Saturation
Lightness
Alpha
```

---

# 20. HSL vs RGB vs Hex

Ketiga format dapat merepresentasikan warna yang sama.

Contoh merah:

```css
color: red;
```

```css
color: #ff0000;
```

```css
color: rgb(255, 0, 0);
```

```css
color: hsl(0, 100%, 50%);
```

Yang berbeda adalah **cara warna tersebut dideskripsikan**.

| Format | Cara berpikir                    |
| ------ | -------------------------------- |
| Named  | Nama warna                       |
| Hex    | Red/Green/Blue dalam hexadecimal |
| RGB    | Red/Green/Blue 0–255             |
| RGBA   | RGB + Alpha                      |
| HSL    | Hue + Saturation + Lightness     |
| HSLA   | HSL + Alpha                      |

---

# 21. Kapan Menggunakan Format Mana?

## Named Color

Cocok untuk testing cepat:

```css
color: red;
```

---

## Hex

Cocok ketika memiliki warna tertentu:

```css
color: #2563eb;
```

Sangat umum digunakan dalam design system dan brand color.

---

## RGB / RGBA

Berguna ketika bekerja dengan RGB atau membutuhkan alpha:

```css
background-color: rgba(0, 0, 0, 0.5);
```

---

## HSL / HSLA

Berguna ketika ingin mengatur warna berdasarkan:

```text
Hue
+
Saturation
+
Lightness
```

Misalnya membuat warna yang sama menjadi lebih terang atau gelap.

---

# 22. Transparency vs Opacity

Jangan menyamakan:

```css
rgba()
```

dengan:

```css
opacity
```

## Alpha

```css
.box {
  background-color: rgba(0, 0, 0, 0.5);
}
```

Yang transparan adalah **warna background tersebut**.

Content di dalamnya tetap normal.

---

## Opacity

```css
.box {
  opacity: 0.5;
}
```

`opacity` memengaruhi **seluruh element**, termasuk content dan child element.

Mental model:

```text
rgba(..., 0.5)
→ warna tertentu transparan

opacity: 0.5
→ seluruh element transparan
```

---

# 23. Warna pada Border

Border memiliki warna sendiri:

```css
border-color
```

Contoh:

```css
.card {
  border: 2px solid;
  border-color: blue;
}
```

Atau:

```css
.card {
  border: 2px solid blue;
}
```

---

# 23.1. Gradient — Peralihan Warna pada Background

**Gradient** adalah peralihan bertahap antara dua warna atau lebih. Gradient CSS diperlakukan sebagai gambar, jadi biasanya dipasang dengan `background-image`, bukan `color` atau `background-color`.

Kasusnya: tombol utama perlu terlihat lebih hidup daripada latar satu warna. Gunakan `linear-gradient()`:

```css
.button {
  color: white;
  background-image: linear-gradient(to right, #2563eb, #7c3aed);
}
```

Warna bergerak dari kiri ke kanan karena `to right`. Urutan warna dimulai dari biru lalu beralih ke ungu.

## `linear-gradient()`

`linear-gradient()` membuat peralihan sepanjang garis lurus. Arah dapat ditulis dengan kata arah atau sudut:

```css
.banner {
  background-image: linear-gradient(to bottom, navy, royalblue);
}

.banner-diagonal {
  background-image: linear-gradient(45deg, navy, royalblue);
}
```

`to bottom` berarti warna pertama berada di atas dan transisi berjalan ke bawah. `45deg` memiringkan arah gradient sebesar 45 derajat.

Kita juga dapat menentukan **color stop**, yaitu posisi tempat warna tertentu mulai atau berakhir:

```css
.banner {
  background-image: linear-gradient(
    to right,
    #111827 0%,
    #2563eb 60%,
    #93c5fd 100%
  );
}
```

Di contoh ini, biru dimulai sekitar 60% sepanjang garis gradient, lalu beralih ke biru muda di ujung. Persentase mengatur posisi warna, bukan transparansi.

## `radial-gradient()`

`radial-gradient()` menyebarkan warna dari titik pusat ke arah luar. Cocok untuk efek cahaya atau highlight lembut di belakang content:

```css
.hero {
  background-image: radial-gradient(circle, #60a5fa, #172554);
}
```

Warna biru terang dimulai dari tengah, lalu berubah menjadi biru gelap ke arah luar. `circle` meminta bentuk gradient bulat; tanpa bentuk eksplisit, browser menentukan bentuk berdasarkan area.

## `conic-gradient()`

`conic-gradient()` membagikan warna dengan berputar mengelilingi titik pusat. Contoh penggunaannya adalah diagram sederhana atau roda warna:

```css
.color-wheel {
  background-image: conic-gradient(
    red,
    yellow,
    lime,
    cyan,
    blue,
    magenta,
    red
  );
}
```

Warna berpindah mengelilingi pusat, bukan dari satu sisi ke sisi lain seperti `linear-gradient()`.

## `repeating-linear-gradient()`

Awalan `repeating-` mengulang pola gradient secara terus-menerus. Fungsi ini berguna untuk membuat garis-garis atau pola berulang tanpa gambar:

```css
.striped {
  background-image: repeating-linear-gradient(
    90deg,
    #e5e7eb 0 12px,
    #9ca3af 12px 24px
  );
}
```

Cara membaca contoh:

* `90deg` mengarahkan gradient dari kiri ke kanan, sehingga pita warnanya tampak vertikal.
* `#e5e7eb 0 12px` mengisi 12px pertama sepanjang garis gradient.
* `#9ca3af 12px 24px` mengisi 12px berikutnya.
* Jarak dari stop pertama ke stop terakhir adalah `24px`, sehingga satu siklus pola sepanjang 24px diulang. Setiap pita lebarnya 12px.

Posisi stop diukur sepanjang garis gradient, bukan selalu secara horizontal atau vertikal pada layar. Arah gradient mengubah arah garis dan pola. Misalnya, `0deg` mengarahkan gradient ke atas/bawah sehingga pita yang terbentuk tampak horizontal; `90deg` menghasilkan pita vertikal.

Posisi warna dapat ditulis sebagai rentang pada satu stop seperti `#e5e7eb 0 12px`, atau sebagai dua stop berurutan. Stop yang bertemu di posisi sama membuat batas warna tegas, cocok untuk pola garis. Jika ingin transisi warna lembut, beri jarak antara stop akhir warna pertama dan stop awal warna berikutnya; jangan letakkan keduanya di posisi yang sama.

Jika rentang dari stop pertama ke stop terakhir terlalu pendek, pola akan berulang rapat; jika lebih panjang, polanya lebih renggang. `repeating-radial-gradient()` dan `repeating-conic-gradient()` juga tersedia untuk mengulang pola radial atau melingkar.

## Gradient di Atas Gambar

Gradient dapat dipakai sebagai overlay agar teks di atas foto lebih mudah dibaca:

```css
.hero {
  color: white;
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent),
    url("mountain.jpg");
  background-size: cover;
  background-position: center;
}
```

Lapisan pertama ditulis paling depan, jadi gradient berada di atas foto. Area gelap di bawah membantu teks putih terlihat. `background-size: cover` memperbesar gambar sampai area tertutup (sebagian gambar mungkin terpotong), sedangkan `background-position: center` menjaga bagian tengah gambar tetap menjadi fokus.

Warna latar tetap dapat dipakai sebagai fallback di bawah gambar/gradient:

```css
.hero {
  background-color: #172554;
  background-image: linear-gradient(to right, #172554, #2563eb);
}
```

Jika gambar atau gradient tidak dapat ditampilkan, warna `background-color` tetap menjadi latar dasar.

> **Catatan:** gradient adalah visual background, bukan foreground. Teks tetap diatur dengan `color`, lalu periksa contrast terhadap semua warna yang dilewati gradient.

---

# 24. Color Inheritance

Property `color` dapat diwariskan dari parent ke child.

HTML:

```html
<div class="parent">
  <p>Hello</p>
</div>
```

CSS:

```css
.parent {
  color: blue;
}
```

Jika `<p>` tidak menentukan `color` sendiri, warna teksnya dapat mengikuti parent.

```text
.parent
↓
color: blue
↓
<p>
↓
blue
```

Jika child menentukan sendiri:

```css
p {
  color: red;
}
```

maka nilai tersebut meng-override inheritance.

---

# 25. Warna dan Contrast

Warna bukan hanya masalah estetika.

Teks harus memiliki contrast yang cukup dengan background agar mudah dibaca.

Kurang baik:

```css
body {
  background-color: white;
  color: #eeeeee;
}
```

Lebih jelas:

```css
body {
  background-color: white;
  color: #222222;
}
```

Mental model:

```text
foreground
+
background
↓
contrast
↓
readability
```

Saat memilih warna:

> Jangan hanya bertanya "bagus atau tidak?", tetapi juga "mudah dibaca atau tidak?"

---

# 26. Color Picker di DevTools

DevTools dapat digunakan untuk mengeksplorasi warna.

Misalnya:

```css
color: #2563eb;
```

Klik nilai warna tersebut di DevTools.

Browser biasanya menampilkan color picker dan memungkinkan kita melihat atau mengubah representasi:

```text
Hex
RGB
HSL
```

Ini membantu memahami bahwa:

```text
Hex
RGB
HSL
```

dapat merepresentasikan warna yang sama dalam format berbeda.

---

# 27. Cause → Effect

### Mengubah `color`

```css
p {
  color: red;
}
```

Akibat:

```text
warna foreground/text berubah
```

### Mengubah `background-color`

```css
p {
  background-color: yellow;
}
```

Akibat:

```text
warna background element berubah
```

### Mengurangi alpha

```css
background-color: rgba(0, 0, 0, 0.2);
```

Akibat:

```text
background semakin transparan
```

### Menggunakan opacity

```css
opacity: 0.5;
```

Akibat:

```text
seluruh element menjadi transparan
```

### Mengubah lightness

```css
color: hsl(220, 80%, 30%);
```

menjadi:

```css
color: hsl(220, 80%, 70%);
```

Akibat:

```text
warna menjadi lebih terang
```

---

# 28. Color Cheat Sheet

## Named

```css
color: red;
```

## Hex

```css
color: #ff0000;
```

Format:

```text
#RRGGBB
```

## RGB

```css
color: rgb(255, 0, 0);
```

Range:

```text
0–255
```

## RGBA

```css
color: rgba(255, 0, 0, 0.5);
```

Format:

```text
RGB + Alpha
```

## HSL

```css
color: hsl(0, 100%, 50%);
```

Format:

```text
Hue
Saturation
Lightness
```

## HSLA

```css
color: hsla(0, 100%, 50%, 0.5);
```

Format:

```text
HSL + Alpha
```

---

# 29. Property Cheat Sheet

| Property           | Fungsi                       |
| ------------------ | ---------------------------- |
| `color`            | Foreground/text color        |
| `background-color` | Background color             |
| `background-image` | Gradient atau gambar background |
| `border-color`     | Warna border                 |
| `opacity`          | Transparansi seluruh element |

---

# 30. Format Cheat Sheet

| Format | Contoh                   | Fokus                      |
| ------ | ------------------------ | -------------------------- |
| Named  | `red`                    | Nama warna                 |
| Hex    | `#ff0000`                | RGB hexadecimal            |
| RGB    | `rgb(255, 0, 0)`         | Red, Green, Blue           |
| RGBA   | `rgba(0, 0, 0, .5)`      | RGB + Alpha                |
| HSL    | `hsl(0, 100%, 50%)`      | Hue, Saturation, Lightness |
| HSLA   | `hsla(0, 100%, 50%, .5)` | HSL + Alpha                |

---

# 31. Perbedaan yang Wajib Dipahami

## `color` vs `background-color`

```text
color
→ foreground/text

background-color
→ background
```

Gradient juga termasuk background, tetapi dibuat sebagai image:

```text
color
→ mengatur foreground seperti teks

background-color
→ satu warna dasar di belakang content

background-image: linear-gradient(...)
→ peralihan warna pada background
```

## RGB vs Hex

Keduanya dapat merepresentasikan warna yang sama.

```css
#ff0000
```

dan:

```css
rgb(255, 0, 0)
```

→ sama-sama merah.

## RGB vs RGBA

```text
RGB
→ warna

RGBA
→ warna + alpha
```

## HSL

```text
H
→ jenis warna

S
→ intensitas warna

L
→ terang/gelap
```

## Alpha vs Opacity

```text
rgba(..., alpha)
→ transparansi warna tertentu

opacity
→ transparansi seluruh element
```

---

# 32. Mental Model

Jangan menghafal:

```text
#ff0000
rgb(255,0,0)
hsl(0,100%,50%)
```

sebagai tiga warna berbeda.

Ketiganya bisa berarti:

```text
warna yang sama
```

Yang berbeda adalah **cara mendeskripsikannya**.

```text
Warna
│
├── Named
│
├── Hex
│   └── RRGGBB
│
├── RGB
│   └── Red + Green + Blue
│
└── HSL
    ├── Hue
    ├── Saturation
    └── Lightness
```

Jika membutuhkan transparency:

```text
RGB → RGBA
HSL → HSLA
```

---

# 33. Latihan Warna Bertahap

Tujuan latihan ini bukan sekadar membuat warna.

Setiap tahap dibuat untuk melatih **satu konsep terlebih dahulu**, kemudian menggabungkannya.

Gunakan satu file sederhana:

```text
index.html
style.css
```

HTML awal:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Color Practice</h1>

  <p class="description">
    Belajar CSS Colors
  </p>

  <div class="card">
    <h2>Card Title</h2>
    <p>Card description.</p>
  </div>

</body>
</html>
```

---

## Level 1 — Named Colors

### Target

Latihan pertama hanya menggunakan nama warna.

### Tugas

1. Ubah warna `<h1>` menjadi `blue`.
2. Ubah warna paragraph menjadi `green`.
3. Ubah background `.card` menjadi `lightgray`.

### Constraint

Gunakan **named colors saja**.

Jangan menggunakan:

```css
#...
rgb(...)
hsl(...)
```

### Yang harus kamu pahami

Setelah selesai, jelaskan:

> Property mana yang mengubah foreground dan property mana yang mengubah background?

---

# Level 2 — Hexadecimal

Sekarang jangan gunakan named colors.

### Tugas

Gunakan Hex untuk:

1. `<h1>` → biru
2. `.description` → abu-abu gelap
3. `.card` → background abu-abu terang

Contoh format:

```css
color: #......;
```

### Constraint

Semua warna harus menggunakan:

```text
#RRGGBB
```

### Bonus

Gunakan DevTools color picker untuk melihat representasi RGB dari salah satu warna Hex yang kamu pilih.

---

# Level 3 — Membaca Hex

Sekarang bukan hanya menulis warna, tetapi membaca warna.

Gunakan:

```css
.card {
  background-color: #3366cc;
}
```

### Tugas

Sebelum membuka browser, jawab:

```text
Red   = ?
Green = ?
Blue  = ?
```

Kemudian cek dengan DevTools.

### Pertanyaan

Mengapa `#3366cc` terlihat lebih biru daripada merah?

Petunjuk:

```text
33
66
CC
```

bandingkan besar masing-masing channel.

---

# Level 4 — RGB

Sekarang ubah beberapa warna Hex menjadi RGB.

Gunakan warna:

```text
#ff0000
#00ff00
#0000ff
```

### Tugas

Tuliskan masing-masing dalam format:

```css
rgb(...);
```

Kemudian gunakan pada:

```html
<h1>
<p>
<div>
```

### Target pemahaman

Kamu harus melihat hubungan:

```text
#ff0000
↓
rgb(255, 0, 0)
```

Bukan menganggap keduanya sebagai dua warna berbeda.

---

# Level 5 — Membuat Warna Sendiri dengan RGB

Sekarang buat warna tanpa diberikan nilai akhirnya.

Gunakan:

```css
rgb(R, G, B)
```

### Tugas

Buat:

1. Merah dominan
2. Hijau dominan
3. Biru dominan
4. Warna yang merupakan campuran merah + hijau
5. Warna yang merupakan campuran merah + biru

### Constraint

Gunakan hanya:

```css
rgb()
```

### Pertanyaan

Untuk membuat warna lebih merah, channel mana yang harus kamu naikkan?

Untuk membuat warna lebih biru, channel mana yang harus kamu naikkan?

---

# Level 6 — Grayscale

Sekarang buat lima tingkat grayscale.

Target:

```text
hitam
↓
abu-abu gelap
↓
abu-abu
↓
abu-abu terang
↓
putih
```

### Constraint

Gunakan RGB.

### Petunjuk

Gunakan konsep:

```text
R = G = B
```

Buat lima element:

```html
<div class="gray-1"></div>
<div class="gray-2"></div>
<div class="gray-3"></div>
<div class="gray-4"></div>
<div class="gray-5"></div>
```

Atur masing-masing background menggunakan RGB.

### Target pemahaman

Jelaskan:

> Kenapa `rgb(100, 100, 100)` menghasilkan grayscale?

---

# Level 7 — RGBA Transparency

Sekarang mulai bermain dengan alpha.

Buat:

```html
<div class="solid"></div>
<div class="transparent"></div>
```

### Tugas

Element pertama:

```text
warna hitam penuh
```

Element kedua:

```text
warna hitam dengan alpha 0.5
```

Gunakan:

```css
rgba(...)
```

### Eksperimen

Ubah:

```text
0.5
```

menjadi:

```text
0.2
0.7
1
```

Amati perbedaannya.

### Pertanyaan

Apa yang terjadi ketika alpha semakin mendekati:

```text
0
```

dan ketika mendekati:

```text
1
```

---

# Level 8 — RGBA vs Opacity

Buat:

```html
<div class="alpha-box">
  <p>Alpha</p>
</div>

<div class="opacity-box">
  <p>Opacity</p>
</div>
```

### Tugas

Pada `.alpha-box`, gunakan:

```css
background-color: rgba(...);
```

Pada `.opacity-box`, gunakan:

```css
opacity: 0.5;
```

### Tujuan

Bandingkan:

```text
Apa yang menjadi transparan?
```

Perhatikan terutama:

* background
* text
* child element

### Target pemahaman

Kamu harus bisa menjelaskan:

> Kenapa `rgba()` dan `opacity` menghasilkan efek yang berbeda?

---

# Level 9 — HSL

Sekarang gunakan HSL.

Buat tiga element:

```html
<div class="hue-1"></div>
<div class="hue-2"></div>
<div class="hue-3"></div>
```

### Tugas

Buat:

```text
merah
hijau
biru
```

menggunakan:

```css
hsl(...)
```

### Constraint

Pertahankan:

```text
Saturation = 100%
Lightness = 50%
```

Yang kamu ubah hanya:

```text
Hue
```

### Target pemahaman

Perhatikan:

> Apa yang terjadi ketika hanya Hue yang berubah?

---

# Level 10 — Eksperimen Saturation

Ambil satu Hue.

Misalnya:

```css
hsl(220, ..., 50%)
```

Buat tiga element:

```text
Saturation rendah
Saturation sedang
Saturation tinggi
```

### Tugas

Gunakan tiga nilai berbeda untuk saturation.

Pertahankan:

```text
Hue sama
Lightness sama
```

### Target pemahaman

Cari sendiri:

> Apa pengaruh Saturation terhadap warna?

---

# Level 11 — Eksperimen Lightness

Gunakan Hue dan Saturation yang sama.

Contoh konsep:

```text
Hue        → sama
Saturation → sama
Lightness  → berbeda
```

Buat:

```text
warna gelap
warna normal
warna terang
```

### Target pemahaman

Kamu harus bisa melihat hubungan:

```text
Lightness rendah
→ lebih gelap

Lightness tinggi
→ lebih terang
```

---

# Level 12 — Membuat Palette

Sekarang gabungkan konsep sebelumnya.

Buat sebuah palette sederhana:

```text
Primary
Secondary
Success
Warning
Danger
Background
Text
```

HTML:

```html
<div class="color primary">Primary</div>
<div class="color secondary">Secondary</div>
<div class="color success">Success</div>
<div class="color warning">Warning</div>
<div class="color danger">Danger</div>
<div class="color background">Background</div>
<div class="color text">Text</div>
```

### Tugas

Tentukan sendiri warna untuk setiap kategori.

Kamu boleh menggunakan:

```text
Hex
RGB
HSL
```

tetapi jangan menggunakan semuanya secara acak.

Pilih format berdasarkan alasan yang jelas.

Contoh reasoning:

```text
Primary
→ Hex karena menggunakan brand color tertentu

Success
→ HSL karena ingin mudah membuat variasi terang/gelap
```

---

# Level 13 — Contrast Challenge

Sekarang fokus pada readability.

Buat:

```html
<div class="good-contrast">
  Good Contrast
</div>

<div class="bad-contrast">
  Bad Contrast
</div>
```

### Tugas

Buat dua kombinasi:

```text
1. mudah dibaca
2. sulit dibaca
```

Gunakan:

```text
color
background-color
```

### Tujuan

Jangan hanya memilih berdasarkan "kelihatan bagus".

Perhatikan:

```text
foreground
+
background
↓
contrast
↓
readability
```

### Pertanyaan

Kenapa kombinasi tertentu lebih mudah dibaca daripada yang lain?

---

# Level 14 — Mini Project: Color Card

Sekarang gabungkan semua konsep.

Buat card:

```text
┌────────────────────────────┐
│        PRODUCT             │
│                            │
│  Learn CSS Colors          │
│  Practice every day.       │
│                            │
│       [ START ]            │
└────────────────────────────┘
```

HTML:

```html
<div class="card">
  <h2>PRODUCT</h2>
  <p>Learn CSS Colors</p>
  <p>Practice every day.</p>
  <button>START</button>
</div>
```

### Requirements

Card harus memiliki:

* background color
* text color
* heading color
* button background
* button text color
* border color
* gradient background pada heading, button, atau area card

Gunakan minimal:

```text
1 Hex color
1 RGB/RGBA color
1 HSL color
```

### Constraint

Jangan fokus pada layout terlebih dahulu.

Fokus hanya pada:

```text
color
background-color
border-color
```

---

# Level 15 — Reasoning Challenge

Sekarang jangan hanya menulis CSS.

Bayangkan kamu mendapatkan requirement:

> "Buat card dengan background biru gelap, teks putih, dan badge biru muda yang sedikit transparan."

Sebelum coding, tentukan:

### 1. Element mana yang membutuhkan `color`?

### 2. Element mana yang membutuhkan `background-color`?

### 3. Format warna apa yang akan digunakan?

### 4. Apakah badge membutuhkan alpha?

### 5. Jika iya, apakah lebih tepat menggunakan:

```css
rgba(...)
```

atau:

```css
opacity
```

Jelaskan alasannya sebelum menulis code.

---

# 36. Tantangan Akhir

Buat halaman sederhana dengan:

```text
Header
Card
Button
Badge
```

Contoh struktur:

```html
<header>
  <h1>CSS Colors</h1>
</header>

<main>
  <div class="card">
    <span class="badge">NEW</span>
    <h2>Color Practice</h2>
    <p>Learn how CSS represents colors.</p>
    <button>Start Learning</button>
  </div>
</main>
```

### Requirements

Gunakan:

* `color`
* `background-color`
* `border-color`
* Hex
* RGB atau RGBA
* HSL
* minimal satu transparency
* contrast yang baik

### Bonus

Gunakan DevTools untuk:

1. mengubah warna secara langsung
2. melihat representasi Hex
3. melihat representasi RGB
4. melihat representasi HSL
5. membandingkan hasil perubahan setiap channel

---

# 37. Urutan Latihan

Jika bingung harus mulai dari mana, ikuti urutan:

```text
Level 1
Named Colors
   ↓
Level 2
Hex
   ↓
Level 3
Membaca Hex
   ↓
Level 4
RGB
   ↓
Level 5
Mencampurkan RGB
   ↓
Level 6
Grayscale
   ↓
Level 7
RGBA
   ↓
Level 8
RGBA vs Opacity
   ↓
Level 9
HSL / Hue
   ↓
Level 10
Saturation
   ↓
Level 11
Lightness
   ↓
Level 12
Palette
   ↓
Level 13
Contrast
   ↓
Level 14
Color Card
   ↓
Level 15
Reasoning
```

Urutan ini penting karena setiap level membangun konsep dari level sebelumnya.

---

# 38. Self Check

Sebelum lanjut ke materi berikutnya, pastikan bisa menjelaskan:

1. Apa perbedaan `color` dan `background-color`?
2. Apa arti `#RRGGBB`?
3. Berapa range nilai RGB?
4. Apa fungsi Alpha?
5. Apa perbedaan RGB dan RGBA?
6. Apa arti HSL?
7. Apa fungsi Hue?
8. Apa fungsi Saturation?
9. Apa fungsi Lightness?
10. Apa perbedaan `rgba()` dengan `opacity`?
11. Kenapa `color` dapat diwariskan?
12. Kenapa contrast penting?
13. Apakah Hex, RGB, dan HSL dapat merepresentasikan warna yang sama?
14. Kapan lebih nyaman menggunakan HSL?
15. Jika ingin membuat **background transparan tetapi teks tetap solid**, property apa yang sebaiknya digunakan?
16. Kenapa gradient ditulis dengan `background-image`, bukan `color`?
17. Apa perbedaan arah peralihan `linear-gradient()`, `radial-gradient()`, dan `conic-gradient()`?
18. Apa fungsi arah dan color stop pada `linear-gradient()`?
19. Bagaimana membuat overlay gelap di atas foto tanpa membuat teks ikut transparan?

---

# Key Takeaway

CSS memiliki beberapa cara untuk mendeskripsikan warna:

```text
Named
→ red

Hex
→ #ff0000

RGB
→ rgb(255, 0, 0)

RGBA
→ RGB + Alpha

HSL
→ Hue + Saturation + Lightness

HSLA
→ HSL + Alpha

Gradient
→ peralihan dua warna atau lebih pada background

linear-gradient()
→ peralihan sepanjang garis lurus

radial-gradient()
→ peralihan dari titik pusat ke arah luar

conic-gradient()
→ peralihan warna mengelilingi titik pusat
```

Yang paling penting bukan menghafal format, tetapi memahami apa yang direpresentasikan oleh setiap nilainya.

```text
color
→ foreground

background-color
→ satu warna dasar background

background-image
→ gradient atau gambar di background
```

Dan perbedaan penting:

```text
rgba(..., alpha)
→ transparansi warna tertentu

opacity
→ transparansi seluruh element
```

Gunakan latihan secara bertahap:

```text
Tulis warna
→ baca warna
→ ubah channel
→ eksperimen
→ bandingkan
→ gabungkan
→ reasoning
```

Dengan begitu, kamu tidak hanya hafal syntax warna, tetapi mulai bisa **memprediksi hasil CSS sebelum menjalankannya**.

# INSIGHT

Jangan samakan `color`, `background-color`, dan gradient:

```css
.hero {
  color: white;
  background-color: #172554;
  background-image: linear-gradient(to right, #172554, #2563eb);
}
```

`color` mengatur foreground, misalnya teks putih. `background-color` mengisi latar dengan satu warna dasar. `linear-gradient()` membuat peralihan beberapa warna pada background, sehingga ditulis melalui `background-image`—bukan `color`. Pada contoh ini teks tetap putih di atas background yang bergradasi. Jika teks melintasi bagian gradient yang terang maupun gelap, cek contrast pada seluruh area teks.

Perbedaan alpha pada warna dan `opacity` adalah bagian mana yang dibuat transparan:

```css
.badge {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
```

Alpha `0.5` membuat warna background badge setengah transparan, tetapi teks putih tetap pekat. Kalau memakai `opacity: 0.5` pada `.badge`, seluruh element beserta teksnya ikut transparan. Jadi, untuk badge di atas foto yang bidangnya ingin tembus pandang tetapi teksnya tetap jelas, atur alpha pada warna background. Tetap cek kontras teks terhadap gambar di belakangnya.

# BEDAH NILAI CSS — Membaca Warna dan Gradient

Perhatikan contoh berikut. Angka yang tampak sama-sama berupa persentase dapat mempunyai arti berbeda tergantung posisinya:

```css
.hero {
  color: hsl(0 0% 100%);
  background-color: #172554;
  background-image:
    linear-gradient(110deg, rgb(23 37 84 / 0%) 20%, #2563eb 80%);
}
```

Cara menalar:

* `hsl(0 0% 100%)` berarti hue `0`, saturation `0%`, dan lightness `100%`: putih.
* `background-color` memberi warna dasar. Gradient pada `background-image` dilukis di atasnya; bagian gradient yang transparan membiarkan warna dasar terlihat.
* `110deg` menentukan arah gradient. `20%` dan `80%` adalah posisi color stop sepanjang gradient, bukan tingkat transparansi.
* `rgb(23 37 84 / 0%)` memiliki alpha nol sehingga warna pada stop pertama transparan. Persentase setelah slash di dalam fungsi warna adalah **alpha**, bukan posisi di gradient.
* Teks tetap putih karena `color` terpisah dari warna background. Namun, kontras harus diperiksa terhadap semua bagian gradient yang berada di belakang teks.

Jadi, arti `20%` ditentukan oleh tempatnya: setelah warna pada `rgb(... / 20%)`, ia adalah alpha; setelah warna sebagai color stop gradient, ia adalah posisi sepanjang gradient. Syntax yang sama secara kasatmata dapat berarti hal berbeda karena setiap fungsi punya grammar dan acuan sendiri.

Jika alpha pada stop pertama menjadi `50%`, hanya warna stop itu yang setengah transparan. Sebaliknya, `opacity: 0.5` pada `.hero` membuat seluruh element beserta teks dan isi turun opacity-nya. Perbedaan ini penting: pahami apakah nilai diterapkan ke **warna tertentu** atau ke **seluruh element**.

---

<a id="css-bab-5"></a>

<!-- Sumber: CSS\5.CSS-Typhography.md -->

# CSS — Typography

## 1. Core Concept

**Typography** adalah cara mengatur tampilan dan keterbacaan teks pada halaman web.

Kalau `color` menentukan **warna teks**, typography menentukan bagaimana teks tersebut:

```text
jenis font
ukuran
ketebalan
gaya
jarak
perataan
```

Property typography yang paling penting:

```text
font-family
font-size
font-weight
font-style
text-align
text-decoration
line-height
letter-spacing
text-transform
```

Selain property, kita juga perlu memahami **unit CSS**, karena property seperti `font-size`, `margin`, `padding`, `width`, dan `height` membutuhkan nilai dengan unit tertentu.

Mental model:

```text
Typography
│
├── Font
│   ├── font-family
│   ├── font-size
│   ├── font-weight
│   └── font-style
│
├── Text
│   ├── text-align
│   ├── text-decoration
│   └── text-transform
│
├── Spacing
│   ├── line-height
│   └── letter-spacing
│
└── Units
    ├── px
    ├── %
    ├── em
    ├── rem
    ├── vw
    ├── vh
    ├── vmin
    └── vmax
```

---

# 2. `font-family`

`font-family` menentukan **jenis font** yang digunakan oleh teks.

Contoh:

```css
body {
  font-family: Arial;
}
```

Semua teks di dalam `body` akan menggunakan Arial jika font tersebut tersedia.

---

# 3. Font Fallback

Jangan hanya memberikan satu font.

Contoh:

```css
body {
  font-family: Arial, sans-serif;
}
```

Artinya:

```text
coba Arial
↓
jika tidak tersedia
↓
gunakan sans-serif
```

`Arial` disebut font yang diutamakan.

`sans-serif` adalah **generic font family**.

Contoh generic family:

```text
serif
sans-serif
monospace
cursive
fantasy
```

---

# 4. Mengapa Menggunakan Fallback?

Font tertentu belum tentu tersedia di setiap sistem.

Contoh:

```css
body {
  font-family: "My Custom Font", Arial, sans-serif;
}
```

Browser akan mencoba dari kiri ke kanan:

```text
"My Custom Font"
       ↓ tidak tersedia
Arial
       ↓ tidak tersedia
sans-serif
```

Mental model:

> `font-family` bukan hanya memilih font, tetapi juga menentukan urutan fallback.

---

# 5. Nama Font dengan Spasi

Jika nama font memiliki spasi, gunakan quotation marks.

```css
body {
  font-family: "Times New Roman", serif;
}
```

---

# 6. Serif vs Sans-serif

Dua kategori font yang paling sering ditemui:

### Serif

Memiliki detail kecil pada ujung karakter.

```text
Serif
```

### Sans-serif

Tidak memiliki detail tersebut.

```text
Sans-serif
```

Mental model:

```text
serif
→ ada detail/kaki pada karakter

sans-serif
→ lebih sederhana
```

---

# 7. `font-size`

`font-size` menentukan **ukuran teks**.

```css
h1 {
  font-size: 32px;
}
```

Semakin besar nilainya:

```text
font-size ↑
↓
teks semakin besar
```

Semakin kecil:

```text
font-size ↓
↓
teks semakin kecil
```

Namun, `32px` bukan satu-satunya cara menentukan ukuran.

CSS memiliki beberapa unit.

---

# 8. CSS Units — Konsep Dasar

Unit adalah satuan yang memberi tahu browser **seberapa besar suatu nilai**.

Contoh:

```css
font-size: 16px;
```

Angka:

```text
16
```

adalah nilainya.

Sedangkan:

```text
px
```

adalah unitnya.

Tanpa unit, untuk banyak property CSS, browser tidak tahu bagaimana nilai tersebut harus ditafsirkan.

---

# 9. Dua Kelompok Besar Unit CSS

Secara sederhana, unit CSS dapat dibagi menjadi:

```text
Absolute units
→ ukuran yang tidak bergantung pada ukuran element/parent tertentu

Relative units
→ ukuran yang bergantung pada sesuatu
```

Untuk web development, unit yang paling sering ditemui:

```text
px
%
em
rem
vw
vh
vmin
vmax
```

Yang paling penting bukan menghafal namanya.

Pertanyaan utamanya adalah:

> **"Unit ini relatif terhadap apa?"**

---

# 10. `px` — Pixel

`px` adalah unit yang paling mudah dipahami.

```css
h1 {
  font-size: 32px;
}
```

Mental model:

```text
32px
→ ukuran yang ditentukan secara langsung
```

Tidak bergantung pada `font-size` parent seperti `em`.

Contoh:

```css
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}
```

Mudah diprediksi:

```text
h1 → 32px
p  → 16px
```

### Kapan menggunakan `px`?

Cocok ketika:

* membutuhkan ukuran yang mudah diprediksi
* sedang belajar CSS
* membutuhkan ukuran detail tertentu
* bekerja dengan border tipis seperti `1px`

Contoh:

```css
border: 1px solid black;
```

### Catatan

`px` pada CSS adalah **CSS pixel**, bukan berarti selalu sama dengan satu pixel fisik pada layar.

---

# 11. `%` — Persentase

`%` biasanya berarti:

> **berapa persen dari ukuran acuan tertentu?**

Contoh:

```css
.card {
  width: 50%;
}
```

Jika parent memiliki lebar:

```text
1000px
```

maka secara sederhana:

```text
50% × 1000px
= 500px
```

Mental model:

```text
%
→ "berapa persen dari acuan?"
```

---

# 12. `%` pada Width

Contoh:

```css
.container {
  width: 800px;
}

.card {
  width: 50%;
}
```

Maka:

```text
card
= 50% dari container
= 400px
```

Perhatikan:

> `%` membutuhkan sesuatu yang menjadi acuan.

Pada `width`, acuan biasanya berkaitan dengan ukuran containing block/parent.

---

# 13. `%` Tidak Selalu Mengacu ke Hal yang Sama

Ini penting.

Jangan menghafal:

> `%` selalu relatif terhadap parent.

Lebih tepat:

> **Efek `%` bergantung pada property yang digunakan dan aturan CSS property tersebut.**

Contohnya:

```css
width: 50%;
```

dan:

```css
font-size: 50%;
```

tidak harus memiliki acuan yang sama.

Karena itu, saat menggunakan `%`, selalu tanyakan:

```text
Property apa?
↓
% ini dihitung berdasarkan apa?
```

---

# 14. `em` — Relatif terhadap Font Size

`em` adalah unit relatif yang sering membingungkan.

Untuk `font-size`, secara sederhana:

> `em` relatif terhadap **font-size parent**.

Contoh:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}
```

Maka:

```text
1.5 × 20px
= 30px
```

Jadi:

```text
parent
20px
  ↓
child
1.5em
  ↓
30px
```

Mental model:

```text
em
→ lihat konteks font-size
```

---

# 15. `em` pada Property Lain

Di sinilah `em` mulai sedikit berbeda.

Misalnya:

```css
button {
  font-size: 20px;
  padding: 1em;
}
```

Untuk `padding`, `1em` menggunakan **font-size element tersebut** sebagai acuan.

Maka:

```text
font-size = 20px
padding = 1em

1em = 20px
```

Jadi:

```text
padding-top    = 20px
padding-right  = 20px
padding-bottom = 20px
padding-left   = 20px
```

Mental model yang lebih aman:

> `em` adalah unit relatif terhadap **font-size yang relevan dalam konteks element**, bukan sekadar "selalu parent".

---

# 16. Kenapa `em` Bisa Membingungkan?

Karena nilai `em` dapat mengikuti konteks.

Contoh:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}

.grandchild {
  font-size: 1.5em;
}
```

Perhitungannya dapat menjadi:

```text
parent
20px
  ↓
child
1.5 × 20px
= 30px
  ↓
grandchild
1.5 × 30px
= 45px
```

Terjadi efek bertingkat.

```text
20
↓ × 1.5
30
↓ × 1.5
45
```

Inilah salah satu alasan `em` perlu digunakan dengan hati-hati pada struktur yang bertingkat.

---

# 17. `rem` — Root em

`rem` berarti:

```text
root em
```

Berbeda dengan `em`, `rem` mengacu pada **font-size element root**, biasanya `<html>`.

Contoh:

```css
html {
  font-size: 16px;
}
```

Kemudian:

```css
h1 {
  font-size: 2rem;
}
```

Perhitungannya:

```text
2 × 16px
= 32px
```

Mental model:

```text
rem
→ selalu kembali ke root
```

Penting: acuan `em` bergantung pada property yang memakai unit itu. Pada `font-size`, `em` dihitung dari font-size parent karena ukuran font element itu sendiri sedang ditentukan. Pada `padding`, `margin`, atau `gap`, `em` biasanya dihitung dari computed font-size element pemilik property.

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
  padding: 1em;
  margin-bottom: 1rem;
}
```

Hitungannya:

```text
font-size child = 1.5 × font-size parent
                = 1.5 × 20px
                = 30px

padding child   = 1 × computed font-size child
                = 1 × 30px
                = 30px

margin-bottom   = 1 × root font-size
                = 1 × 16px
                = 16px
```

Jadi, `em` pada `font-size` anak dan `em` pada padding anak sama-sama memakai konteks font, tetapi konteks spesifiknya berbeda. Sedangkan `rem` melewati ukuran font parent dan kembali ke root. Perbedaan ini menjelaskan mengapa `em` dapat membesar bertingkat di nested component, sementara `rem` memberi skala bersama yang lebih mudah diprediksi.

---

# 18. `em` vs `rem`

Ini salah satu perbedaan paling penting dalam CSS.

### `em`

```text
untuk font-size: relatif terhadap font-size parent
untuk property lain: relatif terhadap font-size element itu sendiri
```

### `rem`

```text
relatif terhadap root font-size
```

Contoh:

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child-em {
  font-size: 2em;
}

.child-rem {
  font-size: 2rem;
}
```

Secara sederhana:

```text
child-em
→ 2 × 20px
→ 40px

child-rem
→ 2 × 16px
→ 32px
```

Mental model:

```text
em
→ context

rem
→ root
```

---

# 19. Kenapa `rem` Banyak Digunakan?

Karena ukuran menjadi lebih konsisten.

Misalnya:

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
}

small {
  font-size: 0.875rem;
}
```

Semua ukuran memiliki satu acuan:

```text
html
16px
 │
 ├── 2rem
 │   └── 32px
 │
 ├── 1rem
 │   └── 16px
 │
 └── 0.875rem
     └── 14px
```

Ini membuat typography lebih mudah dikelola secara konsisten.

---

# 20. `vw` — Viewport Width

`vw` berarti:

```text
viewport width
```

`1vw` = **1% dari lebar viewport**.

Jika viewport lebarnya:

```text
1000px
```

maka:

```text
1vw = 10px
```

dan:

```text
50vw = 500px
```

Mental model:

```text
vw
→ ukuran layar/viewport secara horizontal
```

Contoh:

```css
.hero-title {
  font-size: 5vw;
}
```

Ketika viewport membesar:

```text
vw ikut membesar
```

Ketika viewport mengecil:

```text
vw ikut mengecil
```

---

# 21. `vh` — Viewport Height

`vh` berarti:

```text
viewport height
```

`1vh` = **1% dari tinggi viewport**.

Jika viewport tingginya:

```text
800px
```

maka:

```text
1vh = 8px
```

dan:

```text
50vh = 400px
```

Mental model:

```text
vh
→ ukuran layar/viewport secara vertikal
```

Contoh:

```css
.hero {
  height: 100vh;
}
```

Secara konsep:

```text
100vh
→ setara dengan tinggi viewport
```

---

# 22. `vw` vs `vh`

Jangan tertukar:

```text
vw
→ viewport width

vh
→ viewport height
```

Mental model:

```text
viewport
┌───────────────────────┐
│                       │
│                       │
│                       │
└───────────────────────┘
←────── width ─────────→
          vw

↑
│ height
│ vh
↓
```

---

# 23. `vmin`

`vmin` mengambil **nilai yang lebih kecil** antara viewport width dan viewport height.

Misalnya:

```text
viewport width  = 1200px
viewport height = 800px
```

Maka:

```text
vmin
→ menggunakan 800px sebagai acuan
```

Karena:

```text
800 < 1200
```

`1vmin` berarti:

```text
1% dari sisi viewport yang lebih kecil
```

---

# 24. `vmax`

`vmax` kebalikan dari `vmin`.

`vmax` menggunakan **nilai yang lebih besar** antara viewport width dan viewport height.

Contoh:

```text
viewport width  = 1200px
viewport height = 800px
```

Maka:

```text
vmax
→ menggunakan 1200px sebagai acuan
```

Mental model:

```text
vmin
→ sisi viewport terkecil

vmax
→ sisi viewport terbesar
```

---

# 25. Ringkasan Unit

| Unit   | Acuan sederhana                    | Contoh   |
| ------ | ---------------------------------- | -------- |
| `px`   | ukuran CSS langsung                | `16px`   |
| `%`    | persentase terhadap acuan property | `50%`    |
| `em`   | font-size dalam konteks element    | `1.5em`  |
| `rem`  | root font-size                     | `2rem`   |
| `vw`   | viewport width                     | `50vw`   |
| `vh`   | viewport height                    | `100vh`  |
| `vmin` | sisi viewport terkecil             | `50vmin` |
| `vmax` | sisi viewport terbesar             | `50vmax` |
| `svh`  | tinggi small viewport               | `100svh` |
| `lvh`  | tinggi large viewport               | `100lvh` |
| `dvh`  | tinggi dynamic viewport             | `100dvh` |

---

# 25.1 Memilih Unit dengan Memahami Acuannya

Istilah "relatif" belum cukup untuk memilih unit. Selalu tanyakan **relatif terhadap apa, property yang mana, dan kapan acuannya berubah?**

Misalkan root font `16px`, parent font `20px`, dan viewport `1200px × 800px`:

```css
.example {
  font-size: 1.5em;
  padding: 1em;
  margin: 1rem;
  width: 50%;
  max-width: 50vw;
}
```

Cara menalar:

* `font-size: 1.5em` pada child dihitung dari font-size parent: `1.5 × 20px = 30px`.
* `padding: 1em` dihitung dari font-size element itu sendiri: `1 × 30px = 30px`.
* `margin: 1rem` dihitung dari root font-size: `1 × 16px = 16px`.
* `width: 50%` mengikuti acuan ukuran yang ditentukan oleh aturan property `width`, umumnya containing block element.
* `max-width: 50vw` berarti batas maksimum setengah lebar viewport, yaitu `600px`, bukan setengah parent.

## Ringkas perbedaannya

| Unit | Mengikuti | Pilih saat... | Waspadai... |
|---|---|---|---|
| `px` | CSS pixel | butuh detail kecil atau ukuran yang mudah dihitung, misalnya border tipis | bukan selalu satu pixel fisik; ukuran font tetap yang terlalu kaku dapat mengurangi fleksibilitas |
| `%` | acuan yang ditentukan property | ukuran perlu mengikuti container/acuan property | `%` tidak selalu berarti persentase lebar parent; periksa property-nya |
| `em` | konteks font; basis tepatnya bergantung pada property | padding/spacing component perlu membesar bersama teksnya | `font-size` bertingkat dapat mengalikan ukuran di setiap tingkat |
| `rem` | font-size root (`html`) | skala typography atau spacing perlu konsisten di seluruh halaman | menghitung dari root, bukan font-size lokal component |
| `vw` | lebar viewport | efek visual memang perlu mengikuti lebar viewport | tidak mengikuti parent; nilai teks tanpa batas dapat ekstrem |
| `vh` | tinggi viewport | section perlu mengacu pada tinggi viewport | tinggi viewport mobile dapat berubah saat browser chrome muncul/hilang |
| `vmin` | dimensi viewport yang lebih kecil | ukuran harus muat relatif ke sisi viewport yang paling sempit | berubah saat orientasi layar berubah |
| `vmax` | dimensi viewport yang lebih besar | ukuran visual perlu mengikuti sisi viewport yang paling panjang | pada layar lebar dapat menghasilkan ukuran yang sangat besar |

Tidak ada unit yang selalu paling baik. Jika sebuah card harus mengisi setengah parent, mulai dari `%`. Jika padding harus terasa sebanding dengan teks card, pertimbangkan `em`. Jika semua heading perlu berbagi skala global, pertimbangkan `rem`. Jika judul perlu merespons layar, gunakan viewport unit yang dibatasi `clamp()`.

## Mengapa `100vh` kadang terasa terlalu tinggi di ponsel?

Browser mobile dapat menampilkan dan menyembunyikan toolbar saat pengguna scroll. Akibatnya, tinggi viewport yang terlihat berubah. `vh` pada implementasi modern mewakili large viewport; `100vh` dapat melampaui area yang terlihat saat toolbar browser masih terbuka.

Unit viewport tinggi dinamis membantu memilih perilaku yang diinginkan:

```css
.hero {
  min-height: 100svh;
}

.app-shell {
  min-height: 100dvh;
}
```

```text
svh → small viewport height; aman ketika browser toolbar terlihat
lvh → large viewport height; ukuran saat area viewport maksimum
dvh → dynamic viewport height; mengikuti perubahan viewport yang terlihat
```

Gunakan `svh` ketika content penting harus muat tanpa tertutup toolbar. Gunakan `dvh` ketika panel memang harus mengikuti tinggi layar yang sedang terlihat. `lvh` cocok saat desain memang boleh memenuhi viewport maksimum. Dukungan browser modern cukup luas, tetapi pertimbangkan fallback jika target browser lama:

```css
.hero {
  min-height: 100vh;
  min-height: 100svh;
}
```

---

# 26. Cara Memilih Unit

Jangan mulai dengan:

> "Saya harus menggunakan `rem`."

Mulai dengan:

> **"Ukuran ini harus relatif terhadap apa?"**

### Jika ingin ukuran mudah diprediksi

Gunakan:

```text
px
```

Contoh:

```css
border: 1px solid;
```

---

### Jika ingin mengikuti ukuran container

Pertimbangkan:

```text
%
```

Contoh:

```css
width: 50%;
```

---

### Jika ingin mengikuti konteks font

Pertimbangkan:

```text
em
```

Contoh:

```css
padding: 1em;
```

---

### Jika ingin typography memiliki acuan global

Pertimbangkan:

```text
rem
```

Contoh:

```css
font-size: 1rem;
```

---

### Jika ingin mengikuti ukuran viewport

Gunakan:

```text
vw
vh
```

Keduanya relatif terhadap dimensi viewport, bukan lebar/tinggi parent. Maka `width: 50vw` berarti setengah lebar viewport sekalipun element berada di container yang lebih sempit. Jika tujuan ukuran adalah mengikuti parent/container, `%` biasanya lebih sesuai daripada `vw`.

Untuk teks responsif, `vw` saja berisiko membuat ukuran terlalu kecil pada layar sempit atau terlalu besar pada layar lebar. Batasi nilainya:

```css
.hero-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

Nilai tengah mengikuti lebar viewport, tetapi ukuran tetap berada di antara `1.5rem` dan `3rem`.

Contoh:

```css
.hero {
  min-height: 100vh;
}
```

---

# 27. Unit Typography yang Paling Penting

Untuk typography, prioritaskan pemahaman ini terlebih dahulu:

```text
px
↓
ukuran langsung

rem
↓
ukuran relatif terhadap root

em
↓
ukuran relatif terhadap konteks font
```

Kemudian pahami:

```text
%
vw
vh
```

karena unit-unit tersebut lebih sering digunakan ketika bekerja dengan ukuran element dan responsive design.

Mental model:

```text
Typography
│
├── px
│   └── langsung
│
├── em
│   └── context
│
└── rem
    └── root
```

---

# 28. `font-weight`

`font-weight` menentukan **ketebalan teks**.

Contoh:

```css
p {
  font-weight: normal;
}
```

atau:

```css
p {
  font-weight: bold;
}
```

Nilai numerik juga dapat digunakan:

```css
font-weight: 400;
```

```css
font-weight: 700;
```

Mental model umum:

```text
400
→ normal

700
→ bold
```

Nilai lain seperti `500` atau `600` dapat digunakan jika font mendukung weight tersebut.

---

# 29. `font-weight` vs `font-size`

Jangan tertukar.

```text
font-size
→ besar/kecil

font-weight
→ tipis/tebal
```

Contoh:

```css
h1 {
  font-size: 32px;
  font-weight: 700;
}
```

Artinya:

```text
32px
→ ukuran

700
→ ketebalan
```

---

# 30. `font-style`

`font-style` mengatur gaya font.

Nilai umum:

```css
font-style: normal;
```

```css
font-style: italic;
```

Contoh:

```css
em {
  font-style: italic;
}
```

Mental model:

```text
font-style
→ bentuk/gaya teks

font-weight
→ ketebalan teks
```

---

# 31. `font-style` vs `font-weight`

Contoh:

```css
p {
  font-style: italic;
  font-weight: 700;
}
```

Hasilnya:

```text
italic
+
bold
```

Karena kedua property mengatur aspek yang berbeda.

---

# 32. `text-align`

`text-align` mengatur **perataan teks secara horizontal di dalam area element**.

Nilai umum:

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

`justify` meratakan teks ke tepi kiri dan kanan dengan mengatur jarak antar kata. Biasanya baris terakhir tetap diratakan ke kiri.

Contoh:

```css
h1 {
  text-align: center;
}
```

---

# 33. Jangan Salah Memahami `text-align`

`text-align` bukan berarti:

```text
memindahkan element
```

Property ini mengatur **posisi teks di dalam area element**.

Mental model:

```text
element
┌──────────────────────┐
│       TEXT           │
└──────────────────────┘
       ↑
   text-align
```

---

# 34. `text-decoration`

`text-decoration` digunakan untuk memberikan dekorasi pada teks.

Contoh:

```css
a {
  text-decoration: underline;
}
```

Nilai umum:

```text
underline
overline
line-through
none
```

---

# 35. Menghilangkan Underline

```css
a {
  text-decoration: none;
}
```

Mental model:

```text
text-decoration
→ garis/dekorasi pada teks
```

Bukan:

```text
mengubah font
```

---

# 36. `line-height`

`line-height` menentukan **tinggi/jarak vertikal setiap baris teks**.

Contoh:

```css
p {
  line-height: 1.6;
}
```

Perhatikan:

```text
font-size
→ ukuran karakter

line-height
→ jarak vertikal antarbaris
```

---

# 37. Mengapa `line-height` Penting?

Bandingkan:

```css
p {
  line-height: 1;
}
```

dengan:

```css
p {
  line-height: 1.8;
}
```

Yang kedua memberikan ruang vertikal lebih besar antarbaris.

Untuk paragraph panjang, `line-height` yang sesuai membuat teks lebih mudah dibaca.

Mental model:

```text
font-size
→ seberapa besar huruf

line-height
→ seberapa longgar barisnya
```

---

# 38. `line-height` Tanpa Unit

Sering kali `line-height` ditulis tanpa unit:

```css
p {
  line-height: 1.5;
}
```

Nilai tersebut menjadi multiplier terhadap `font-size`.

Jika:

```css
p {
  font-size: 16px;
  line-height: 1.5;
}
```

maka secara konsep:

```text
16 × 1.5
= 24px
```

Ini berguna karena line-height dapat mengikuti perubahan font-size.

---

# 39. `letter-spacing`

`letter-spacing` mengatur **jarak antarhuruf**.

```css
h1 {
  letter-spacing: 2px;
}
```

Hasilnya huruf menjadi lebih renggang.

Nilai negatif:

```css
h1 {
  letter-spacing: -1px;
}
```

membuat huruf lebih rapat.

Mental model:

```text
letter-spacing
→ jarak horizontal antar karakter
```

---

# 40. `letter-spacing` vs `line-height`

Jangan tertukar.

```text
letter-spacing
→ antarhuruf

line-height
→ antarbaris
```

---

# 41. `text-transform`

`text-transform` mengubah bentuk huruf tanpa mengubah text asli di HTML.

Nilai umum:

```css
text-transform: uppercase;
```

```css
text-transform: lowercase;
```

```css
text-transform: capitalize;
```

Contoh:

```html
<h2>hello world</h2>
```

```css
h2 {
  text-transform: uppercase;
}
```

Tampilan:

```text
HELLO WORLD
```

Tetapi text HTML tetap:

```text
hello world
```

---

# 42. `text-transform` vs Mengubah HTML

Daripada:

```html
<h2>HELLO WORLD</h2>
```

kita dapat menggunakan:

```html
<h2>hello world</h2>
```

dengan:

```css
h2 {
  text-transform: uppercase;
}
```

Keuntungannya:

```text
HTML
→ menyimpan content sebenarnya

CSS
→ mengatur tampilan
```

---

# 43. Typography Inheritance

Banyak property typography dapat diwariskan dari parent.

Contoh:

```css
body {
  font-family: Arial, sans-serif;
  color: #222;
}
```

Element di dalam `body` dapat mengikuti property tersebut jika tidak menentukan nilai sendiri.

Mental model:

```text
body
│
├── h1
├── p
└── button
```

Jika child menentukan nilai sendiri:

```css
h1 {
  font-family: Georgia, serif;
}
```

maka `h1` menggunakan nilai tersebut.

---

# 44. Kombinasi Typography

Typography biasanya tidak menggunakan satu property saja.

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
}
```

Setiap property memiliki tanggung jawab berbeda:

```text
font-family
→ jenis font

font-size
→ ukuran

font-weight
→ ketebalan

text-align
→ perataan

letter-spacing
→ jarak antarhuruf
```

---

# 45. Typography untuk Heading

Heading membutuhkan hierarchy yang jelas.

```css
h1 {
  font-size: 2rem;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
}
```

Ukuran dan weight membantu pengguna memahami:

```text
mana judul utama
mana subjudul
mana bagian biasa
```

---

# 46. Typography untuk Paragraph

Paragraph biasanya lebih mengutamakan readability.

```css
p {
  font-size: 1rem;
  line-height: 1.6;
}
```

Perhatikan:

```text
font-size
→ ukuran teks

line-height
→ kenyamanan antarbaris
```

Untuk teks panjang, jangan hanya mengejar ukuran font.

---

# 47. Typography untuk Button

Button juga menggunakan typography.

```css
button {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 600;
}
```

Dengan begitu teks button memiliki hierarchy dan weight yang jelas.

---

# 48. Cause → Effect

### Mengubah `font-size`

```css
h1 {
  font-size: 40px;
}
```

Akibat:

```text
teks menjadi lebih besar
```

---

### Mengubah `font-weight`

```css
h1 {
  font-weight: 700;
}
```

Akibat:

```text
teks menjadi lebih tebal
```

---

### Mengubah `line-height`

```css
p {
  line-height: 1.8;
}
```

Akibat:

```text
jarak antarbaris menjadi lebih longgar
```

---

### Mengubah `letter-spacing`

```css
h1 {
  letter-spacing: 2px;
}
```

Akibat:

```text
jarak antarhuruf bertambah
```

---

### Mengubah `text-align`

```css
h1 {
  text-align: center;
}
```

Akibat:

```text
teks diratakan ke tengah area element
```

---

### Mengubah `text-transform`

```css
h1 {
  text-transform: uppercase;
}
```

Akibat:

```text
tampilan huruf menjadi uppercase
```

---

# 49. Typography Cheat Sheet

| Property          | Fungsi                  |
| ----------------- | ----------------------- |
| `font-family`     | Jenis font              |
| `font-size`       | Ukuran teks             |
| `font-weight`     | Ketebalan               |
| `font-style`      | Gaya seperti italic     |
| `text-align`      | Perataan teks           |
| `text-decoration` | Garis/dekorasi          |
| `line-height`     | Tinggi/jarak antarbaris |
| `letter-spacing`  | Jarak antarhuruf        |
| `text-transform`  | Bentuk huruf            |

---

# 50. Unit Cheat Sheet

| Unit   | Mental model                      | Contoh   |
| ------ | --------------------------------- | -------- |
| `px`   | Ukuran langsung                   | `16px`   |
| `%`    | Persentase dari acuan property    | `50%`    |
| `em`   | Relatif terhadap konteks font     | `1.5em`  |
| `rem`  | Relatif terhadap root             | `2rem`   |
| `vw`   | Persentase viewport width         | `50vw`   |
| `vh`   | Persentase viewport height        | `100vh`  |
| `vmin` | Persentase sisi viewport terkecil | `50vmin` |
| `vmax` | Persentase sisi viewport terbesar | `50vmax` |
| `svh`  | Tinggi viewport saat toolbar terlihat | `100svh` |
| `lvh`  | Tinggi viewport maksimum              | `100lvh` |
| `dvh`  | Tinggi viewport yang sedang terlihat  | `100dvh` |

### Cara mengingat

```text
px
→ langsung

%
→ persentase

em
→ context

rem
→ root

vw
→ viewport width

vh
→ viewport height

vmin
→ viewport terkecil

vmax
→ viewport terbesar
```

---

# 51. Perbedaan yang Wajib Dipahami

## `font-size` vs `font-weight`

```text
font-size
→ besar/kecil

font-weight
→ tipis/tebal
```

## `font-weight` vs `font-style`

```text
font-weight
→ ketebalan

font-style
→ gaya
```

## `letter-spacing` vs `line-height`

```text
letter-spacing
→ antarhuruf

line-height
→ antarbaris
```

## `text-align` vs positioning

```text
text-align
→ meratakan teks di dalam area element

position
→ menentukan posisi element
```

## `px` vs `rem`

```text
px
→ ukuran langsung

rem
→ relatif terhadap root
```

## `em` vs `rem`

```text
em
→ context font-size

rem
→ root font-size
```

## `vw` vs `vh`

```text
vw
→ viewport width

vh
→ viewport height
```

## `vmin` vs `vmax`

```text
vmin
→ sisi viewport terkecil

vmax
→ sisi viewport terbesar
```

---

# 52. Mental Model Typography

Ketika melihat sebuah teks dan ingin mengubah tampilannya, jangan langsung mencari property.

Tanyakan:

```text
Apa yang ingin saya ubah?
```

Jika jawabannya:

```text
"Jenis font"
→ font-family

"Ukuran"
→ font-size

"Ketebalan"
→ font-weight

"Gaya italic/normal"
→ font-style

"Posisi teks"
→ text-align

"Garis pada teks"
→ text-decoration

"Jarak antarbaris"
→ line-height

"Jarak antarhuruf"
→ letter-spacing

"Bentuk uppercase/lowercase"
→ text-transform
```

Jika masalahnya adalah **ukuran**, tanyakan lagi:

```text
Ukuran ini harus relatif terhadap apa?
```

Kemudian pilih:

```text
ukuran langsung
→ px

container/property tertentu
→ %

konteks font
→ em

root
→ rem

lebar viewport
→ vw

tinggi viewport
→ vh
```

---

# 53. Latihan Typography Bertahap

Latihan dibuat dari manipulasi satu property → unit → kombinasi → reasoning.

Gunakan HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Typography Practice</h1>

  <h2>Learn CSS</h2>

  <p class="description">
    Typography controls how text looks and reads on a webpage.
  </p>

  <button>Start Learning</button>

</body>
</html>
```

---

## Level 1 — Font Family

### Tugas

1. Ubah seluruh text menjadi `Arial`.
2. Tambahkan fallback `sans-serif`.
3. Gunakan font berbeda untuk `<h1>`.

### Target

Pahami:

```text
font-family
→ jenis font
```

---

# Level 2 — Font Size dengan `px`

Atur:

```text
h1
h2
p
button
```

agar memiliki ukuran berbeda.

Gunakan `px`.

Contoh konsep:

```text
h1 → terbesar
h2 → lebih kecil
p  → normal
button → normal
```

### Target

Pahami hierarchy berdasarkan ukuran.

---

# Level 3 — Membandingkan `px` dan `rem`

Buat dua heading:

```html
<h2 class="px-title">PX Title</h2>
<h2 class="rem-title">REM Title</h2>
```

Gunakan:

```css
.px-title {
  font-size: 32px;
}

.rem-title {
  font-size: 2rem;
}
```

Kemudian:

```css
html {
  font-size: 16px;
}
```

### Pertanyaan

Apakah keduanya memiliki ukuran yang sama?

Jika iya, mengapa?

---

# Level 4 — Eksperimen `rem`

Ubah:

```css
html {
  font-size: 16px;
}
```

menjadi:

```css
html {
  font-size: 20px;
}
```

Kemudian amati:

```css
.title {
  font-size: 2rem;
}
```

### Pertanyaan

Apa yang berubah?

Bandingkan dengan element yang menggunakan:

```css
font-size: 32px;
```

### Target

Pahami:

```text
px
→ tidak mengikuti perubahan root font-size

rem
→ mengikuti root font-size
```

---

# Level 5 — Eksperimen `em`

Buat:

```html
<div class="parent">
  <p class="child">Hello CSS</p>
</div>
```

Gunakan:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}
```

### Tugas

Hitung terlebih dahulu:

```text
1.5 × 20px = ?
```

Baru buka browser.

### Target

Jangan hanya melihat hasil.

Biasakan memprediksi hasil CSS sebelum menjalankannya.

---

# Level 6 — `em` vs `rem`

Gunakan:

```html
<div class="parent">
  <p class="em-text">EM Text</p>
  <p class="rem-text">REM Text</p>
</div>
```

CSS:

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 24px;
}

.em-text {
  font-size: 1.5em;
}

.rem-text {
  font-size: 1.5rem;
}
```

### Tugas

Sebelum browser:

```text
em-text
→ ?

rem-text
→ ?
```

Kemudian cek.

### Target

Pahami perbedaan:

```text
em
→ parent/context

rem
→ root
```

---

# Level 7 — Persentase

Buat:

```html
<div class="container">
  <div class="box">50%</div>
</div>
```

CSS:

```css
.container {
  width: 800px;
}

.box {
  width: 50%;
}
```

### Tugas

Prediksi:

```text
berapa lebar .box?
```

Kemudian ubah:

```text
50%
→ 25%
→ 75%
→ 100%
```

### Target

Pahami hubungan:

```text
parent/container
↓
%
↓
ukuran child
```

---

# Level 8 — `vw`

Buat:

```html
<h1 class="viewport-title">
  Responsive Title
</h1>
```

Gunakan:

```css
.viewport-title {
  font-size: 5vw;
}
```

Kemudian resize browser.

### Amati

Apa yang terjadi ketika:

```text
viewport diperlebar?
```

dan:

```text
viewport dipersempit?
```

### Target

Pahami:

```text
vw
→ mengikuti lebar viewport
```

---

# Level 9 — `vh`

Buat:

```html
<section class="hero">
  <h1>Hero Section</h1>
</section>
```

Gunakan:

```css
.hero {
  height: 100vh;
}
```

Resize browser secara vertikal.

### Target

Pahami:

```text
vh
→ mengikuti tinggi viewport
```

---

# Level 10 — `vmin` dan `vmax`

Gunakan:

```css
.box {
  width: 50vmin;
}
```

Kemudian coba:

```css
.box {
  width: 50vmax;
}
```

Resize browser menjadi:

```text
lebar > tinggi
```

kemudian:

```text
tinggi > lebar
```

### Pertanyaan

Apa yang berubah?

### Target

Pahami:

```text
vmin
→ sisi viewport terkecil

vmax
→ sisi viewport terbesar
```

---

# Level 11 — Font Weight

Buat:

```text
h1
→ paling tebal

h2
→ tebal

p
→ normal

button
→ semi-bold
```

Gunakan:

```text
400
500
600
700
```

dan bandingkan hasilnya.

---

# Level 12 — Font Style

Buat paragraph kedua:

```html
<p class="quote">
  Keep learning.
</p>
```

Buat quote menjadi italic.

Gunakan:

```css
font-style
```

### Target

Bedakan:

```text
italic
≠
bold
```

---

# Level 13 — Text Align

Atur:

```text
h1
→ center

h2
→ left

paragraph
→ left
```

Kemudian ubah paragraph menjadi:

```text
center
```

### Pertanyaan

Apakah element berpindah?

Atau hanya posisi teks di dalam element yang berubah?

---

# Level 14 — Text Decoration

Buat link:

```html
<a href="#">Read More</a>
```

### Tugas

1. Berikan underline.
2. Hilangkan underline.
3. Coba `line-through`.

Gunakan:

```css
text-decoration
```

---

# Level 15 — Line Height

Gunakan paragraph panjang.

Coba:

```text
line-height: 1;
line-height: 1.5;
line-height: 2;
```

### Target

Amati jarak antarbaris.

### Pertanyaan

Mana yang paling nyaman dibaca?

Kenapa?

---

# Level 16 — Letter Spacing

Gunakan heading.

Coba:

```text
0px
1px
2px
5px
```

Lalu:

```text
-1px
```

### Target

Pahami:

```text
positif
→ lebih renggang

negatif
→ lebih rapat
```

---

# Level 17 — Text Transform

Gunakan:

```html
<h2>learn css typography</h2>
```

Coba:

```text
uppercase
lowercase
capitalize
```

### Pertanyaan

Apakah text asli di HTML berubah?

---

# Level 18 — Typography Hierarchy

Buat struktur:

```text
H1
↓
H2
↓
Paragraph
↓
Button
```

Gunakan kombinasi:

```text
font-family
font-size
font-weight
line-height
```

Tujuannya membuat pengguna langsung dapat membedakan:

```text
judul utama
subjudul
body text
action
```

Jangan menggunakan `color` terlebih dahulu.

Fokus pada typography.

---

# Level 19 — Readability Challenge

Buat dua paragraph.

### Paragraph A

```text
font-size kecil
line-height kecil
font-weight normal
```

### Paragraph B

```text
font-size lebih nyaman
line-height lebih longgar
font-weight normal
```

Bandingkan keduanya.

### Pertanyaan

Mana yang lebih mudah dibaca?

Apa property yang menyebabkan perbedaannya?

---

# Level 20 — Mini Project: Article Header

Buat:

```html
<article>
  <p class="category">TECHNOLOGY</p>

  <h1>Understanding CSS Typography</h1>

  <p class="meta">
    5 October 2026 · 5 min read
  </p>

  <p class="description">
    Typography controls the way information is presented
    and read on a webpage.
  </p>
</article>
```

### Requirements

Buat hierarchy:

```text
category
→ kecil + uppercase + spacing

h1
→ besar + bold

meta
→ lebih kecil

description
→ nyaman dibaca
```

Gunakan:

```text
font-family
font-size
font-weight
text-transform
letter-spacing
line-height
```

Gunakan `rem` untuk ukuran typography utama.

---

# Level 21 — Unit Reasoning Challenge

Sebelum coding, pilih unit yang paling masuk akal.

### Kasus 1

> Border harus selalu tipis dan mudah diprediksi.

```text
→ ?
```

### Kasus 2

> Ukuran heading harus mengikuti root font-size.

```text
→ ?
```

### Kasus 3

> Padding ingin mengikuti ukuran font element.

```text
→ ?
```

### Kasus 4

> Width card ingin setengah dari container.

```text
→ ?
```

### Kasus 5

> Hero section ingin mengikuti tinggi viewport.

```text
→ ?
```

### Kasus 6

> Font-size ingin mengikuti lebar viewport.

```text
→ ?
```

Jangan langsung melihat cheat sheet.

Coba tentukan berdasarkan pertanyaan:

> **"Relatif terhadap apa?"**

---

# Level 22 — Final Typography Challenge

Buat sebuah card:

```text
┌─────────────────────────────┐
│ TECHNOLOGY                  │
│                             │
│ CSS Typography              │
│                             │
│ Learn how typography        │
│ controls text on the web.   │
│                             │
│ READ ARTICLE                │
└─────────────────────────────┘
```

### Requirements

Gunakan:

* `font-family`
* `font-size`
* `font-weight`
* `font-style`
* `text-align`
* `text-decoration`
* `line-height`
* `letter-spacing`
* `text-transform`
* minimal `px`
* minimal `rem`
* minimal satu unit relative lainnya

Tidak perlu menggunakan semua property pada satu element.

Setiap property harus memiliki alasan.

---

# 23. Self Check

Sebelum lanjut ke materi CSS berikutnya, pastikan bisa menjelaskan:

1. Apa fungsi `font-family`?
2. Kenapa menggunakan fallback font?
3. Apa perbedaan `font-size` dan `font-weight`?
4. Apa perbedaan `font-weight` dan `font-style`?
5. Apa fungsi `text-align`?
6. Apakah `text-align` memindahkan element?
7. Apa fungsi `text-decoration`?
8. Apa perbedaan `line-height` dan `letter-spacing`?
9. Apa fungsi `text-transform`?
10. Apa perbedaan `px`, `%`, `em`, dan `rem`?
11. `em` relatif terhadap apa?
12. `rem` relatif terhadap apa?
13. Apa perbedaan `em` dan `rem`?
14. Apa arti `vw`?
15. Apa arti `vh`?
16. Apa perbedaan `vmin` dan `vmax`?
17. Kenapa `line-height` penting untuk paragraph?
18. Apa yang dimaksud typography hierarchy?
19. Jika paragraph terlalu rapat secara vertikal, property apa yang diperiksa?
20. Jika jarak antarhuruf terlalu rapat, property apa yang diperiksa?
21. Jika ingin membuat `width: 50%`, 50% tersebut relatif terhadap apa?
22. Jika ingin ukuran font mengikuti root, unit apa yang digunakan?
23. Jika ingin ukuran mengikuti viewport width, unit apa yang digunakan?

---

# Key Takeaway

Typography bukan sekadar memilih font.

Typography mengatur bagaimana informasi **dibaca dan dipahami**.

Mental model utamanya:

```text
font-family
→ jenis font

font-size
→ ukuran

font-weight
→ ketebalan

font-style
→ gaya

text-align
→ perataan

text-decoration
→ dekorasi

line-height
→ jarak antarbaris

letter-spacing
→ jarak antarhuruf

text-transform
→ bentuk huruf
```

Untuk unit:

```text
px
→ ukuran langsung

%
→ persentase dari acuan property

em
→ relatif terhadap konteks font

rem
→ relatif terhadap root

vw
→ viewport width

vh
→ viewport height

vmin
→ sisi viewport terkecil

vmax
→ sisi viewport terbesar
```

Cara berpikir paling penting:

> **Jangan bertanya "unit apa yang harus saya pakai?" terlebih dahulu. Tanyakan "ukuran ini harus relatif terhadap apa?"**

Contoh:

```text
Ukuran langsung
→ px

Root
→ rem

Konteks font
→ em

Container/property tertentu
→ %

Lebar viewport
→ vw

Tinggi viewport
→ vh
```

Target akhirnya bukan:

> "Saya hafal semua unit CSS."

Tetapi:

> **"Saya tahu acuan sebuah unit dan bisa memilih unit berdasarkan kebutuhan."**

# INSIGHT

Jangan samakan `text-align` dengan `vertical-align`:

```css
.notice {
  text-align: center;
}

.notice-icon {
  vertical-align: middle;
}
```

`text-align` meratakan content inline—seperti teks atau link—secara horizontal di dalam area element. Pada contoh, teks di dalam `.notice` diratakan ke tengah. `vertical-align` mengatur posisi elemen inline atau inline-block terhadap baseline teks di sekitarnya; pada kasus icon kecil, `middle` membantu icon sejajar secara vertikal dengan teks. Property ini juga dapat mengatur isi cell tabel. `vertical-align` bukan cara umum untuk menengahkan sebuah block atau seluruh layout; untuk itu gunakan layout yang sesuai seperti Flexbox atau Grid.

Sementara itu, nama `align-items` dan `justify-content` bukan berarti selalu "vertical" dan "horizontal". Di Flexbox, `justify-content` mengatur flex items pada main axis, sedangkan `align-items` mengatur cross axis; arah kedua axis berubah mengikuti `flex-direction`. Di Grid, `justify-items` dan `align-items` mengatur posisi item **di dalam cell** pada arah inline dan block. `justify-content` mengatur posisi **keseluruhan grid tracks** di ruang container yang tersisa. `justify-items` adalah property alignment Grid, bukan pengganti `justify-content` di Flexbox. Jadi sebelum memilih property alignment, tanyakan: yang mau diratakan apa—teks, icon di samping teks, item di cell, kumpulan flex items, atau seluruh tracks Grid?

### Bonus — `px` vs `rem`

Keduanya mengatur ukuran, tetapi acuannya berbeda:

```css
h1 {
  font-size: 2rem;
}
```

`px` menyatakan ukuran dalam pixel CSS. `rem` mengikuti ukuran font pada root halaman (`html`), jadi `2rem` ikut berubah jika ukuran root berubah, sementara `32px` tetap 32 pixel CSS. Gunakan `rem` ketika ukuran perlu mengikuti skala dasar halaman; gunakan `px` ketika memang membutuhkan ukuran pixel CSS yang tetap.

# BEDAH NILAI CSS — Membaca Nilai Typography

Shorthand menggabungkan beberapa property; urutan dan satuan menjelaskan peran tiap nilai:

```css
.title {
  font: italic 600 clamp(1rem, 2.5vw, 1.5rem)/1.4 system-ui, sans-serif;
  letter-spacing: 0.03em;
  text-align: start;
  text-decoration: underline wavy currentColor;
  text-transform: uppercase;
}
```

Cara membacanya:

* Dalam shorthand `font`, `italic` memilih gaya, `600` ketebalan, lalu `clamp(...)` ukuran font. `clamp(minimum, preferred, maximum)` membatasi ukuran agar tidak kurang dari `1rem` atau lebih dari `1.5rem`, sambil mengikuti `2.5vw` di antaranya.
* `/1.4` menetapkan `line-height` sebagai pengali ukuran font; tidak ada unit yang perlu ditambahkan. `system-ui, sans-serif` adalah urutan pilihan keluarga font.
* `letter-spacing: 0.03em` mengikuti ukuran font element, jadi jarak huruf dapat ikut berubah saat ukuran font berubah.
* `text-align: start` mengikuti awal arah penulisan. Ini lebih sesuai lintas bahasa daripada selalu mengasumsikan `left`.
* `text-decoration` memberi garis bawah bergelombang dengan warna teks saat ini. `text-transform: uppercase` hanya mengubah tampilan huruf, bukan isi teks HTML.

Mengapa `1.4` dan `0.03em` tidak perlu dianggap angka tetap yang sama dengan pixel?

`line-height: 1.4` adalah pengali ukuran font, sementara `0.03em` dihitung relatif terhadap ukuran font. Keduanya mengikuti perubahan ukuran tulisan. `clamp(1rem, 2.5vw, 1.5rem)` memakai nilai tengah responsif, tetapi membatasi hasil agar tidak lebih kecil dari `1rem` atau lebih besar dari `1.5rem`. Inilah sebabnya font tidak mengecil tanpa batas saat layar menyempit.

Shorthand `font` juga menetapkan atau mereset sub-property font tertentu. Karena itu, declaration `font-weight` yang ditulis sebelum shorthand `font` dapat tertimpa. Saat hasil tidak sesuai, periksa bukan hanya angka, tetapi juga **urutan declaration** dan **property yang diam-diam ikut diatur shorthand**.

---

<a id="css-bab-6"></a>

<!-- Sumber: CSS\6.CSS-Flexbox.md -->

# CSS — Layout with Flexbox

## 1. Core Concept

**Flexbox** adalah sistem layout CSS untuk mengatur posisi dan ukuran element dalam **satu arah utama**.

Satu arah berarti:

```text
horizontal
atau
vertical
```

Contoh:

```text
┌──────┐ ┌──────┐ ┌──────┐
│  A   │ │  B   │ │  C   │
└──────┘ └──────┘ └──────┘
   →       →       →
```

atau:

```text
┌──────┐
│  A   │
└──────┘
   ↓
┌──────┐
│  B   │
└──────┘
   ↓
┌──────┐
│  C   │
└──────┘
```

Flexbox sangat cocok untuk:

* navigation bar
* button group
* card layout sederhana
* alignment
* header
* sidebar sederhana
* menempatkan element di tengah
* membuat jarak antar-item

Mental model:

> **Flexbox mengatur hubungan antara container dan item di dalamnya.**

---

# 2. Flex Container vs Flex Item

Ini konsep pertama yang harus benar-benar dipahami.

Contoh:

```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

Jika:

```css
.container {
  display: flex;
}
```

Maka:

```text
.container
│
├── A
├── B
└── C
```

menjadi:

```text
Flex Container
      │
      ├── Flex Item A
      ├── Flex Item B
      └── Flex Item C
```

`.container` adalah **flex container**.

`A`, `B`, dan `C` adalah **flex items**.

---

# 3. `display: flex`

Flexbox dimulai dari:

```css
.container {
  display: flex;
}
```

Property Flexbox yang mengatur arah, alignment, wrapping, dan jarak bekerja pada **flex container**. Jadi, sebelum menambahkan `flex-direction` atau `flex-wrap`, pastikan parent yang mengatur anak-anaknya sudah memakai `display: flex`. Tanpa itu, anak-anak belum menjadi flex items dan property tersebut tidak mengatur layout mereka sebagai Flexbox.

Sebelum:

```text
A
B
C
```

Setelah:

```css
.container {
  display: flex;
}
```

secara default:

```text
A   B   C
```

Karena default `flex-direction` adalah:

```css
flex-direction: row;
```

---

# 4. Flexbox Hanya Bekerja pada Anak Langsung

Perhatikan:

```html
<div class="container">
  <div class="item">
    <span>A</span>
  </div>

  <div class="item">
    <span>B</span>
  </div>
</div>
```

Jika:

```css
.container {
  display: flex;
}
```

Yang menjadi flex item adalah:

```text
.item
.item
```

Bukan:

```text
span
```

Karena flex item adalah **direct child** dari flex container.

Mental model:

```text
container
│
├── direct child ← flex item
│
└── direct child ← flex item
    │
    └── nested child ← bukan flex item container tersebut
```

Ini penting ketika layout terasa "tidak bekerja".

---

# 5. Main Axis dan Cross Axis

Flexbox memiliki dua axis:

```text
Main Axis
Cross Axis
```

Ini adalah konsep paling penting dalam Flexbox.

Jangan langsung menghafal:

```text
justify-content = horizontal
align-items = vertical
```

Karena itu **tidak selalu benar**.

Yang benar:

```text
justify-content
→ mengatur main axis

align-items
→ mengatur cross axis
```

Arah kedua axis bergantung pada `flex-direction`.

---

# 6. `flex-direction`

`flex-direction` menentukan **arah main axis**.

Property ini hanya mengatur arah item pada flex container. Aktifkan Flexbox pada parent terlebih dahulu:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Nilai utama:

```text
row
row-reverse
column
column-reverse
```

---

# 7. `row`

Default:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Arah item:

```text
A → B → C
```

Main axis:

```text
horizontal →
```

Cross axis:

```text
vertical ↓
```

Mental model:

```text
row
→ item berjajar
```

---

# 8. `column`

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Item menjadi:

```text
A
↓
B
↓
C
```

Sekarang:

```text
Main axis
→ vertical

Cross axis
→ horizontal
```

Ini alasan mengapa:

```text
justify-content
```

tidak selalu berarti horizontal.

Pada `column`, `justify-content` bekerja secara **vertical**.

---

# 9. `row-reverse`

```css
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

Urutan visual:

```text
C   B   A
```

Main axis bergerak dari arah sebaliknya.

---

# 10. `column-reverse`

```css
.container {
  display: flex;
  flex-direction: column-reverse;
}
```

Visual:

```text
C
↓
B
↓
A
```

Gunakan `reverse` jika memang kebutuhan layout membutuhkan arah terbalik.

Jangan menggunakannya hanya untuk memperbaiki urutan content yang sebenarnya lebih baik diperbaiki di HTML.

---

# 11. Mental Model Axis

Jika:

```css
flex-direction: row;
```

maka:

```text
Main Axis
──────────────→

Cross Axis
     ↓
```

Jika:

```css
flex-direction: column;
```

maka:

```text
Main Axis
     ↓

Cross Axis
──────────────→
```

Maka:

```text
justify-content
→ main axis

align-items
→ cross axis
```

---

# 12. `justify-content`

`justify-content` mengatur posisi flex items pada **main axis**.

Contoh-contoh nilai berikut adalah deklarasi untuk `.container` yang sudah memakai `display: flex`; tanpa itu, `justify-content` tidak mengatur anak-anak sebagai flex items.

Contoh:

```css
.container {
  display: flex;
  justify-content: center;
}
```

Jika:

```css
flex-direction: row;
```

maka item berada di tengah secara horizontal.

```text
      A   B   C
```

---

# 13. Nilai `justify-content`

Nilai yang umum:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

# 14. `flex-start`

```css
justify-content: flex-start;
```

Item ditempatkan di awal main axis.

```text
A   B   C
```

---

# 15. `center`

```css
justify-content: center;
```

Item dikumpulkan di tengah:

```text
      A   B   C
```

---

# 16. `flex-end`

```css
justify-content: flex-end;
```

Item ditempatkan di akhir main axis:

```text
              A   B   C
```

---

# 17. `space-between`

```css
justify-content: space-between;
```

Item pertama berada di awal dan item terakhir berada di akhir.

```text
A             B             C
```

Tidak ada space tambahan di ujung.

Mental model:

```text
ujung kiri
A
│
│   ruang dibagi
│
B
│
│   ruang dibagi
│
C
ujung kanan
```

---

# 18. `space-around`

```css
justify-content: space-around;
```

Setiap item mendapatkan ruang di sekitarnya.

Secara visual:

```text
  A      B      C
```

Ruang di tepi biasanya lebih kecil dibanding ruang antar-item karena space di sisi item saling berbagi.

---

# 19. `space-evenly`

```css
justify-content: space-evenly;
```

Ruang dibuat sama di antara:

```text
container
↕
item
↕
item
↕
item
↕
container
```

Visual:

```text
   A      B      C
```

Dengan jarak yang sama antar setiap posisi.

---

# 20. `justify-content` Cheat Sheet

| Value           | Konsep                |
| --------------- | --------------------- |
| `flex-start`    | kumpul di awal        |
| `center`        | kumpul di tengah      |
| `flex-end`      | kumpul di akhir       |
| `space-between` | space di antara item  |
| `space-around`  | space di sekitar item |
| `space-evenly`  | semua space sama      |

---

# 21. `align-items`

`align-items` mengatur posisi item pada **cross axis**.

Contoh:

```css
.container {
  display: flex;
  align-items: center;
}
```

Jika:

```css
flex-direction: row;
```

maka cross axis adalah vertical.

Jadi:

```text
align-items: center
→ item berada di tengah secara vertical
```

---

# 22. `align-items` vs `justify-content`

Jangan menghafal:

```text
justify = horizontal
align = vertical
```

Gunakan:

```text
justify-content
→ main axis

align-items
→ cross axis
```

Contoh `row`:

```text
justify-content
→ horizontal

align-items
→ vertical
```

Contoh `column`:

```text
justify-content
→ vertical

align-items
→ horizontal
```

---

# 23. Nilai `align-items`

Nilai umum:

```text
stretch
flex-start
center
flex-end
baseline
```

---

# 24. `align-items: stretch`

Default pada banyak kasus:

```css
align-items: stretch;
```

Item akan diregangkan pada cross axis jika ukuran cross-axis tidak ditentukan.

Contoh pada row:

```text
┌─────────────────────────┐
│ A │ B │ C               │
│   │   │                 │
│   │   │                 │
└─────────────────────────┘
```

Secara sederhana:

> `stretch` menggunakan ruang cross axis yang tersedia.

---

# 25. `align-items: center`

```css
align-items: center;
```

Item berada di tengah cross axis.

Contoh row:

```text
┌─────────────────────────┐
│                         │
│    A   B   C            │
│                         │
└─────────────────────────┘
```

Ini sering digunakan untuk membuat isi header berada di tengah secara vertikal.

---

# 26. `align-items: flex-start`

```css
align-items: flex-start;
```

Item berada di awal cross axis.

Pada `row`:

```text
┌─────────────────────────┐
│ A   B   C               │
│                         │
│                         │
└─────────────────────────┘
```

---

# 27. `align-items: flex-end`

```css
align-items: flex-end;
```

Item berada di akhir cross axis.

```text
┌─────────────────────────┐
│                         │
│                         │
│ A   B   C               │
└─────────────────────────┘
```

---

# 28. `align-items: baseline`

`baseline` menyelaraskan item berdasarkan **baseline teks**.

Ini berguna ketika item memiliki ukuran font berbeda tetapi teks perlu terlihat sejajar.

Contoh:

```text
A
        Big Text
```

Dengan baseline:

```text
A          Big Text
────────── baseline
```

Mental model:

> `baseline` fokus pada garis dasar teks, bukan sekadar tengah atau ujung element.

---

# 29. `gap`

`gap` digunakan untuk memberikan jarak **antar flex items**.

Contoh:

```css
.container {
  display: flex;
  gap: 16px;
}
```

Hasil:

```text
A    B    C
```

dengan jarak:

```text
A ←16px→ B ←16px→ C
```

---

# 30. `gap` vs `margin`

Sebelum `gap`, developer sering membuat jarak dengan margin.

Contoh:

```css
.item {
  margin-right: 16px;
}
```

Dengan Flexbox:

```css
.container {
  display: flex;
  gap: 16px;
}
```

`gap` lebih jelas ketika tujuan utamanya memang:

> **memberikan jarak antar-item dalam layout.**

Mental model:

```text
margin
→ ruang di sekitar element

gap
→ ruang antar item dalam layout
```

---

# 31. `row-gap` dan `column-gap`

Jika diperlukan pengaturan berbeda:

```css
.container {
  row-gap: 20px;
  column-gap: 10px;
}
```

Atau:

```css
gap: 20px 10px;
```

Format:

```text
gap: row-gap column-gap;
```

---

# 32. `flex-wrap`

Secara default, flex items berusaha tetap berada dalam satu baris.

`flex-wrap` hanya mengatur flex container. Pastikan parent lebih dulu memakai `display: flex`, seperti pada contoh berikut:

Contoh:

```text
A B C D E F G
```

Jika ruang tidak cukup, item dapat membutuhkan wrapping.

Gunakan:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

Maka:

```text
A B C D
E F G
```

Mental model:

```text
flex-wrap
→ boleh/tidak item berpindah ke baris berikutnya
```

---

# 33. `flex-wrap: nowrap`

Default:

```css
flex-wrap: nowrap;
```

Item tetap berada dalam satu line jika memungkinkan.

---

# 34. `flex-wrap: wrap`

```css
flex-wrap: wrap;
```

Jika ruang tidak cukup:

```text
A B C D
E F G
```

Ini sangat berguna untuk card atau button group yang harus beradaptasi terhadap lebar container.

---

# 35. `flex-wrap: wrap-reverse`

```css
flex-wrap: wrap-reverse;
```

Item tetap membentuk beberapa line, tetapi arah line dibuat terbalik pada cross axis.

Ini lebih jarang digunakan.

---

# 36. `flex-flow`

`flex-flow` adalah shorthand untuk:

```text
flex-direction
+
flex-wrap
```

Contoh:

```css
.container {
  flex-flow: row wrap;
}
```

Sama dengan:

```css
.container {
  flex-direction: row;
  flex-wrap: wrap;
}
```

Untuk belajar, lebih baik pahami kedua property terpisah terlebih dahulu.

---

# 37. `align-content`

`align-content` mengatur **distribusi beberapa flex lines** pada cross axis.

Ini baru relevan ketika:

```css
flex-wrap: wrap;
```

digunakan dan terdapat beberapa baris/line.

Contoh:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

Mental model:

```text
align-items
→ posisi item dalam line

align-content
→ posisi/distribusi kumpulan line
```

Ini perbedaan yang sering membingungkan.

---

# 38. `align-items` vs `align-content`

### `align-items`

Mengatur item:

```text
line
┌─────────────────────┐
│ A   B   C           │
└─────────────────────┘
```

### `align-content`

Mengatur kumpulan line:

```text
line 1
line 2
line 3
```

Secara sederhana:

```text
align-items
→ item

align-content
→ lines
```

Jika hanya ada **satu line**, `align-content` biasanya tidak memberikan efek yang diharapkan.

---

# 39. `align-self`

`align-self` digunakan untuk mengatur alignment **satu flex item tertentu**.

Property ini dipasang pada flex item, yaitu anak langsung dari element yang memakai `display: flex`. Jika item berada di dalam wrapper lain, aktifkan Flexbox pada parent langsung yang ingin mengatur item tersebut.

Misalnya container:

```css
.container {
  display: flex;
  align-items: center;
}
```

Tetapi satu item ingin berada di atas:

```css
.special {
  align-self: flex-start;
}
```

Maka item tersebut dapat memiliki alignment sendiri.

Mental model:

```text
align-items
→ aturan semua item

align-self
→ override untuk satu item
```

---

# 40. `order`

`order` menentukan urutan visual flex item.

Contoh:

```css
.a {
  order: 2;
}

.b {
  order: 1;
}
```

Maka:

```text
B
A
```

Namun hati-hati.

`order` mengubah **visual order**, bukan berarti HTML source berubah.

Untuk accessibility dan logical document structure, sebaiknya urutan HTML tetap masuk akal.

Mental model:

> Gunakan `order` untuk kebutuhan layout, bukan untuk memperbaiki struktur HTML yang salah.

---

# 41. Flex Item: `flex-grow`

Sekarang kita masuk ke property yang menentukan bagaimana item menggunakan ruang yang tersedia.

`flex-grow`, `flex-shrink`, `flex-basis`, `flex`, dan `order` adalah property flex item. Property ini berlaku pada anak langsung flex container—pastikan parent-nya sudah memakai `display: flex`.

`flex-grow` menentukan apakah item boleh **tumbuh untuk mengambil ruang kosong**.

Contoh:

```css
.item {
  flex-grow: 1;
}
```

Jika terdapat ruang kosong:

```text
A        B        C
```

item dapat memperluas ukurannya untuk mengisi ruang tersebut.

---

# 42. `flex-grow: 0`

Default:

```css
flex-grow: 0;
```

Artinya item tidak otomatis mengambil ruang kosong untuk memperbesar dirinya.

---

# 43. `flex-grow: 1`

```css
.item {
  flex-grow: 1;
}
```

Jika beberapa item memiliki:

```css
flex-grow: 1;
```

mereka berbagi ruang kosong secara proporsional.

Contoh:

```css
.a,
.b,
.c {
  flex-grow: 1;
}
```

> **Catatan:** angka `flex-grow` adalah perbandingan pembagian ruang kosong, bukan lebar akhir item. Misalnya, nilai `1` dan `2` membagi ruang ekstra dengan rasio 1:2; ukuran awal item tetap ikut memengaruhi hasil akhirnya.

Maka:

```text
A    B    C
```

mendapatkan bagian ruang kosong yang sama, dengan asumsi kondisi dasarnya sama.

---

# 44. `flex-grow` Bukan "Lebar"

Ini penting.

Jangan berpikir:

```text
flex-grow: 1
→ width menjadi 1
```

Yang benar:

> `flex-grow` menentukan **bagaimana item menggunakan ruang kosong yang tersedia**.

---

# 45. `flex-shrink`

`flex-shrink` menentukan apakah item boleh **menyusut ketika ruang tidak cukup**.

Default:

```css
flex-shrink: 1;
```

Artinya item boleh menyusut.

Jika:

```css
.item {
  flex-shrink: 0;
}
```

item tidak ikut menyusut karena flex shrinking.

---

# 46. `flex-basis`

`flex-basis` menentukan **ukuran awal item pada main axis sebelum ruang ekstra didistribusikan**.

Contoh:

```css
.item {
  flex-basis: 200px;
}
```

Jika direction:

```css
flex-direction: row;
```

maka `flex-basis` berhubungan dengan ukuran awal secara horizontal.

Jika:

```css
flex-direction: column;
```

maka berhubungan dengan ukuran awal secara vertical.

Mental model:

```text
flex-basis
→ ukuran awal pada main axis
```

---

# 47. `flex-grow`, `flex-shrink`, `flex-basis`

Tiga property ini dapat dipahami sebagai:

```text
flex-grow
→ boleh membesar?

flex-shrink
→ boleh mengecil?

flex-basis
→ mulai dari ukuran berapa?
```

Mental model:

```text
          ruang tersedia
               ↓
       ┌─────────────────┐
       │ flex-basis      │
       │ ukuran awal     │
       └─────────────────┘
               ↓
      ruang ekstra/kekurangan
               ↓
      ┌────────┴────────┐
      ↓                 ↓
 flex-grow          flex-shrink
 membesar            mengecil
```

---

# 48. Shorthand `flex`

Ketiga property tadi dapat ditulis:

```css
.item {
  flex: 1;
}
```

Dalam penggunaan umum:

```css
flex: 1;
```

sering digunakan untuk membuat beberapa item berbagi ruang yang tersedia.

Contoh:

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Jika ada tiga item:

```text
A | B | C
```

ketiganya akan membagi ruang yang tersedia secara proporsional, dengan asumsi kondisi layout mendukung pembagian tersebut.

Untuk pemula, pahami dulu:

```text
flex: 1
→ item diberi kemampuan untuk berbagi ruang
```

> **Catatan:** bentuk satu angka ini setara dengan `flex: 1 1 0%`: `flex-grow: 1`, `flex-shrink: 1`, dan `flex-basis: 0%`. Artinya item dapat membesar atau mengecil, lalu berbagi ruang fleksibel dari ukuran awal `0%` pada main axis.

sebelum masuk ke shorthand yang lebih kompleks.

---

# 49. Centering dengan Flexbox

Salah satu penggunaan Flexbox paling umum adalah membuat element tepat di tengah.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Jika:

```text
flex-direction: row;
```

maka:

```text
justify-content
→ center horizontal

align-items
→ center vertical
```

Hasil:

```text
┌─────────────────────────┐
│                         │
│       ┌─────────┐       │
│       │   A     │       │
│       └─────────┘       │
│                         │
└─────────────────────────┘
```

Mental model:

```text
justify-content: center
→ center pada main axis

align-items: center
→ center pada cross axis
```

---

# 50. Centering pada `column`

Jika:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

maka:

```text
main axis
→ vertical

cross axis
→ horizontal
```

Sehingga:

```css
justify-content: center;
```

berarti:

```text
center vertical
```

dan:

```css
align-items: center;
```

berarti:

```text
center horizontal
```

Ini alasan memahami **axis** lebih penting daripada menghafal arah.

---

# 51. Header dengan Flexbox

Contoh umum:

```html
<header class="header">
  <div class="logo">Logo</div>

  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

CSS:

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Hasil konsep:

```text
Logo                         Home About Contact
```

Mengapa?

```text
justify-content: space-between
→ logo ke awal
→ nav ke akhir

align-items: center
→ keduanya sejajar pada cross axis
```

---

# 52. Button Group

HTML:

```html
<div class="actions">
  <button>Cancel</button>
  <button>Save</button>
</div>
```

CSS:

```css
.actions {
  display: flex;
  gap: 12px;
}
```

Hasil:

```text
[Cancel]  [Save]
```

Tanpa perlu memberikan margin satu per satu.

---

# 53. Card Row

HTML:

```html
<div class="cards">
  <article>Card 1</article>
  <article>Card 2</article>
  <article>Card 3</article>
</div>
```

CSS:

```css
.cards {
  display: flex;
  gap: 20px;
}
```

Jika layar terlalu sempit:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

Maka card dapat berpindah ke line berikutnya.

---

# 54. Flexbox vs `display: block`

Tanpa Flexbox:

```text
A
B
C
```

Karena block element secara default berada dalam normal flow.

Dengan:

```css
.container {
  display: flex;
}
```

menjadi:

```text
A B C
```

Flexbox memberi kontrol tambahan terhadap:

```text
arah
alignment
spacing
wrapping
ukuran relatif
```

---

# 55. Flexbox vs Position

Gunakan Flexbox ketika masalahnya:

> **Bagaimana beberapa element disusun dalam layout?**

Gunakan `position` ketika masalahnya:

> **Bagaimana sebuah element ditempatkan relatif terhadap reference tertentu?**

Contoh Flexbox:

```text
Navbar
A B C
```

Contoh Position:

```text
Card
┌──────────────┐
│          X   │
└──────────────┘
```

`X` berada di pojok card.

---

# 56. Flexbox vs Grid

Secara sederhana:

```text
Flexbox
→ satu dimensi

Grid
→ dua dimensi
```

Flexbox cocok:

```text
A B C
```

atau:

```text
A
B
C
```

Grid cocok ketika layout membutuhkan hubungan:

```text
A B C
D E F
G H I
```

Jangan berpikir:

> Flexbox lebih baik daripada Grid.

Lebih tepat:

> Pilih sistem layout berdasarkan bentuk masalahnya.

---

# 57. Common Mistake — Salah Menaruh `display: flex`

Misalnya:

```html
<div class="parent">
  <div>A</div>
  <div>B</div>
</div>
```

Jika ingin A dan B berjajar:

```css
.parent {
  display: flex;
}
```

Bukan:

```css
.child {
  display: flex;
}
```

Karena yang ingin diatur adalah hubungan antara A dan B.

Mental model:

> **Pasang Flexbox pada parent yang ingin mengatur anak-anaknya.**

---

# 58. Common Mistake — Mengira `justify-content` Selalu Horizontal

Salah:

```text
justify-content
→ horizontal
```

Benar:

```text
justify-content
→ main axis
```

Jika:

```css
flex-direction: column;
```

maka main axis menjadi vertical.

---

# 59. Common Mistake — Mengira `align-items` Mengatur Satu Item

`align-items` mengatur **semua flex items**.

Jika hanya satu item yang ingin berbeda:

```css
.special {
  align-self: flex-end;
}
```

Mental model:

```text
align-items
→ parent → semua item

align-self
→ individual item
```

---

# 60. Common Mistake — Menggunakan Margin untuk Semua Jarak

Daripada:

```css
.item {
  margin-right: 20px;
}
```

pertimbangkan:

```css
.container {
  display: flex;
  gap: 20px;
}
```

Jika masalahnya memang:

> jarak antar flex items.

---

# 61. Common Mistake — Tidak Memahami Ukuran Container

Alignment Flexbox bekerja berdasarkan **ruang yang tersedia di container**.

Misalnya:

```css
.container {
  display: flex;
  justify-content: center;
}
```

Jika container hanya memiliki ukuran sebesar isi:

```text
[ABC]
```

mungkin tidak terlihat seperti item "bergerak ke tengah".

Tetapi jika container memiliki ruang:

```text
┌─────────────────────────────┐
│          A B C              │
└─────────────────────────────┘
```

efek `center` terlihat jelas.

Mental model:

> Flexbox tidak menciptakan ruang. Flexbox mengatur bagaimana item menggunakan ruang yang tersedia.

---

# 62. Cause → Effect

### `display: flex`

```text
display: flex
↓
parent menjadi flex container
↓
direct children menjadi flex items
```

### `flex-direction`

```text
row
↓
main axis horizontal

column
↓
main axis vertical
```

### `justify-content`

```text
mengatur main axis
```

### `align-items`

```text
mengatur cross axis
```

### `gap`

```text
memberikan jarak antar flex items
```

### `flex-wrap`

```text
mengizinkan item berpindah ke line berikutnya
```

### `flex-grow`

```text
item boleh menggunakan ruang kosong
```

### `flex-shrink`

```text
item boleh mengecil ketika ruang kurang
```

### `flex-basis`

```text
menentukan ukuran awal pada main axis
```

---

# 63. Flexbox Cheat Sheet — Container

```css
.container {
  display: flex;
}
```

| Property          | Fungsi                            |
| ----------------- | --------------------------------- |
| `display: flex`   | mengaktifkan Flexbox              |
| `flex-direction`  | menentukan arah main axis         |
| `justify-content` | mengatur item pada main axis      |
| `align-items`     | mengatur item pada cross axis     |
| `align-content`   | mengatur kumpulan flex lines      |
| `flex-wrap`       | menentukan apakah item boleh wrap |
| `gap`             | jarak antar-item                  |
| `row-gap`         | jarak antar-row                   |
| `column-gap`      | jarak antar-column                |

---

# 64. Flexbox Cheat Sheet — Item

| Property      | Fungsi                     |
| ------------- | -------------------------- |
| `order`       | mengubah urutan visual     |
| `flex-grow`   | kemampuan membesar         |
| `flex-shrink` | kemampuan mengecil         |
| `flex-basis`  | ukuran awal pada main axis |
| `flex`        | shorthand flex properties  |
| `align-self`  | alignment satu item        |

---

# 65. Mental Model Lengkap

Ketika membuat layout Flexbox, pikirkan dalam urutan:

```text
1. Siapa parent-nya?
        ↓
2. Anak mana yang ingin diatur?
        ↓
3. display: flex
        ↓
4. Main axis ke mana?
        ↓
5. flex-direction
        ↓
6. Bagaimana item disejajarkan?
        ↓
7. justify-content
        ↓
8. align-items
        ↓
9. Apakah butuh jarak?
        ↓
10. gap
        ↓
11. Apakah boleh turun baris?
        ↓
12. flex-wrap
        ↓
13. Apakah item perlu berbagi ruang?
        ↓
14. flex-grow / flex-shrink / flex-basis
```

---

# 66. Cara Berpikir Saat Layout Tidak Sesuai

Jangan langsung menambah property secara acak.

Debug dengan urutan:

### 1. Apakah parent sudah menjadi flex container?

```css
display: flex;
```

### 2. Apa `flex-direction`?

```text
row?
column?
```

### 3. Apa main axis?

```text
horizontal?
vertical?
```

### 4. Apakah menggunakan property yang benar?

```text
justify-content
→ main axis

align-items
→ cross axis
```

### 5. Apakah container memiliki ruang?

Periksa:

```text
width
height
padding
```

### 6. Apakah item melakukan wrapping?

Periksa:

```css
flex-wrap
```

### 7. Apakah ada `flex-grow`, `flex-shrink`, atau `flex-basis`?

Jika ukuran terasa berubah sendiri, periksa property tersebut.

---

# 67. Latihan Flexbox Bertahap

Pada latihan-latihan berikut, gunakan container dari Level 1 sebagai parent. Property Flexbox di level berikutnya baru mengatur item jika parent tersebut sudah memiliki `display: flex`; bila membuat container baru, tambahkan deklarasi itu juga.

## Level 1 — Mengaktifkan Flexbox

HTML:

```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

### Tugas

Buat A, B, dan C berjajar.

Gunakan hanya:

```css
display
```

### Target

Pahami perubahan dari:

```text
normal flow
```

menjadi:

```text
flex layout
```

---

# Level 2 — `flex-direction`

Gunakan container yang sama.

Coba:

```text
row
column
row-reverse
column-reverse
```

### Target

Jangan hanya melihat hasil.

Tentukan:

```text
main axis
cross axis
```

untuk masing-masing.

---

# Level 3 — `justify-content`

Gunakan:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

### Target

Jelaskan:

> Ruang kosong digunakan bagaimana oleh masing-masing value?

---

# Level 4 — `align-items`

Gunakan container dengan tinggi tertentu:

```css
.container {
  height: 300px;
}
```

Kemudian coba:

```text
flex-start
center
flex-end
stretch
baseline
```

### Target

Lihat efek cross axis secara jelas.

---

# Level 5 — Axis Challenge

Untuk masing-masing:

```text
flex-direction: row
flex-direction: column
```

jawab:

```text
main axis = ?
cross axis = ?
justify-content = mengatur ?
align-items = mengatur ?
```

Jangan buka browser terlebih dahulu.

Coba jawab dari mental model.

---

# Level 6 — Centering

Buat:

```text
┌────────────────────────┐
│                        │
│          BOX           │
│                        │
└────────────────────────┘
```

### Requirements

Box harus berada tepat di tengah.

Gunakan:

```text
display
justify-content
align-items
```

Jangan gunakan:

```text
position
margin
transform
```

### Target

Memahami pola centering Flexbox.

---

# Level 7 — Gap

Buat:

```text
[Button 1] [Button 2] [Button 3]
```

Gunakan:

```css
gap
```

Jangan menggunakan margin pada masing-masing button.

---

# Level 8 — Header

Buat:

```text
Logo                         Home About Contact
```

Gunakan:

```text
display: flex
justify-content
align-items
gap
```

### Target

Pahami layout yang sering digunakan pada website nyata.

---

# Level 9 — Wrap

Buat 8 card:

```text
Card 1
Card 2
Card 3
...
Card 8
```

Gunakan:

```css
display: flex;
flex-wrap: wrap;
gap: 16px;
```

Kemudian resize browser.

### Target

Amati kapan item berpindah ke line berikutnya.

---

# Level 10 — `align-items` vs `align-content`

Buat banyak card sehingga terjadi beberapa line.

Coba:

```text
align-items: center
```

kemudian:

```text
align-content: center
```

### Target

Cari sendiri perbedaannya.

Pertanyaan:

> Yang bergerak sebenarnya item atau kumpulan line?

---

# Level 11 — `flex-grow`

Buat:

```text
A B C
```

Kemudian:

```css
.a,
.b,
.c {
  flex-grow: 1;
}
```

### Tugas

Amati bagaimana ruang kosong dibagikan.

Kemudian ubah:

```text
A → flex-grow: 1
B → flex-grow: 2
C → flex-grow: 1
```

### Pertanyaan

Item mana yang mendapatkan ruang lebih banyak?

Mengapa?

---

# Level 12 — `flex-shrink`

Buat tiga item dengan ukuran awal yang cukup besar sehingga container tidak mampu menampung semuanya.

Bandingkan:

```text
flex-shrink: 1
```

dengan:

```text
flex-shrink: 0
```

### Target

Pahami apa yang terjadi ketika ruang tidak cukup.

---

# Level 13 — `flex-basis`

Buat:

```css
.a {
  flex-basis: 100px;
}

.b {
  flex-basis: 200px;
}

.c {
  flex-basis: 300px;
}
```

### Pertanyaan

Bagaimana ukuran awal masing-masing item?

Kemudian ubah:

```text
flex-direction: row
```

menjadi:

```text
flex-direction: column
```

Amati kembali.

### Target

Pahami bahwa `flex-basis` mengikuti **main axis**.

---

# Level 14 — `align-self`

Buat:

```text
A
B
C
```

Semua berada di tengah.

Kemudian buat hanya B berada di awal cross axis.

Gunakan:

```css
align-self
```

### Target

Bedakan:

```text
align-items
→ semua item

align-self
→ satu item
```

---

# Level 15 — `order`

Buat:

```text
A B C
```

Kemudian gunakan `order` sehingga tampil:

```text
C A B
```

### Pertanyaan

Apakah HTML berubah?

### Target

Pahami perbedaan:

```text
DOM/HTML order
vs
visual order
```

---

# Level 16 — Layout Reasoning

Diberikan:

```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

Target:

```text
        A
        B
        C
```

A, B, C harus berada di tengah secara horizontal.

### Pertanyaan

Property apa yang dibutuhkan?

Pikirkan:

```text
arah
main axis
cross axis
```

---

# Level 17 — Layout Reasoning

Target:

```text
A             B             C
```

Item harus berada pada satu row dan memiliki jarak yang sama di antara mereka.

### Pertanyaan

Lebih tepat menggunakan:

```text
margin?
gap?
space-between?
space-evenly?
```

Jelaskan alasan pilihanmu.

---

# Level 18 — Mini Project: Navigation Bar

Buat:

```text
┌───────────────────────────────────────────────┐
│ Logo                 Home About Contact Login │
└───────────────────────────────────────────────┘
```

### Requirements

Gunakan:

```text
display: flex
justify-content
align-items
gap
```

Tidak boleh menggunakan `position`.

---

# Level 19 — Mini Project: Card Row

Buat:

```text
┌────────┐  ┌────────┐  ┌────────┐
│ Card 1 │  │ Card 2 │  │ Card 3 │
└────────┘  └────────┘  └────────┘
```

Jika layar terlalu sempit:

```text
┌────────┐  ┌────────┐
│ Card 1 │  │ Card 2 │
└────────┘  └────────┘

┌────────┐
│ Card 3 │
└────────┘
```

Gunakan:

```text
display: flex
flex-wrap
gap
```

---

# Level 20 — Final Challenge

Buat layout sederhana:

```text
┌─────────────────────────────────────────────┐
│ Logo              Home About Contact Login  │
├─────────────────────────────────────────────┤
│                                             │
│               Main Content                  │
│                                             │
│        ┌──────┐ ┌──────┐ ┌──────┐          │
│        │Card 1│ │Card 2│ │Card 3│          │
│        └──────┘ └──────┘ └──────┘          │
│                                             │
└─────────────────────────────────────────────┘
```

Gunakan Flexbox untuk:

1. Navbar.
2. Alignment navbar.
3. Card row.
4. Jarak antar-card.
5. Card wrapping pada layar sempit.
6. Centering content.

Jangan gunakan `position` atau `float` sebagai pengganti Flexbox untuk menyusun layout utama:

```text
position → untuk positioning khusus, bukan susunan item yang mengalir
float    → terutama untuk membungkus teks di sekitar objek
```

Catatan: *floating action button* adalah nama pola UI; tidak berarti tombolnya harus memakai property CSS `float`.

untuk layout utama.

---

# 68. Self Check

Sebelum lanjut ke materi berikutnya, pastikan bisa menjelaskan:

1. Apa tujuan utama Flexbox?
2. Apa perbedaan flex container dan flex item?
3. Mengapa `display: flex` biasanya dipasang pada parent?
4. Apa yang dimaksud main axis?
5. Apa yang dimaksud cross axis?
6. Apa fungsi `flex-direction`?
7. Apa default `flex-direction`?
8. Apa fungsi `justify-content`?
9. Apa fungsi `align-items`?
10. Mengapa `justify-content` tidak selalu berarti horizontal?
11. Apa fungsi `gap`?
12. Apa perbedaan `gap` dan `margin`?
13. Apa fungsi `flex-wrap`?
14. Apa perbedaan `align-items` dan `align-content`?
15. Apa fungsi `align-self`?
16. Apa fungsi `order`?
17. Apa fungsi `flex-grow`?
18. Apa fungsi `flex-shrink`?
19. Apa fungsi `flex-basis`?
20. Apa arti `flex: 1` secara umum?
21. Bagaimana cara membuat element tepat di tengah dengan Flexbox?
22. Apa perbedaan Flexbox dan Position?
23. Apa perbedaan Flexbox dan Grid?

---

# Key Takeaway

Jangan menghafal Flexbox sebagai kumpulan property.

Pahami alurnya:

```text
Parent
  ↓
display: flex
  ↓
tentukan arah
  ↓
flex-direction
  ↓
tentukan main axis
  ↓
justify-content
  ↓
atur cross axis
  ↓
align-items
  ↓
atur jarak
  ↓
gap
  ↓
atur wrapping
  ↓
flex-wrap
```

Mental model terpenting:

```text
display: flex
→ aktifkan Flexbox

flex-direction
→ tentukan arah main axis

justify-content
→ atur main axis

align-items
→ atur cross axis

gap
→ jarak antar item

flex-wrap
→ boleh/tidak pindah line

flex-grow
→ boleh membesar

flex-shrink
→ boleh mengecil

flex-basis
→ ukuran awal pada main axis

align-self
→ override alignment satu item
```

Dan satu aturan yang paling penting:

> **Jangan hafalkan `justify-content = horizontal` dan `align-items = vertical`. Hafalkan `justify-content = main axis` dan `align-items = cross axis`.**

Karena ketika `flex-direction` berubah, arah axis juga berubah.

# INSIGHT

Jangan samakan `justify-content` dengan `align-items`:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

`justify-content` mengatur posisi **semua flex items pada main axis**; dengan `flex-direction: row`, arah ini biasanya horizontal. `align-items` mengatur posisi **semua flex items pada cross axis**, yang pada contoh ini biasanya vertikal. Kalau `flex-direction` diganti menjadi `column`, arah kedua axis ikut berubah. Keduanya mengatur flex container, jadi parent wajib memakai `display: flex` (atau `inline-flex`) lebih dulu.

Jangan samakan `align-items` dengan `align-content` atau `align-self`:

```text
align-items
→ alignment semua item pada cross axis

align-content
→ distribusi beberapa flex line pada cross axis; perlu ada ruang dan lebih dari satu line

align-self
→ override alignment satu flex item tertentu
```

Jadi pilih berdasarkan targetnya: semua item, kumpulan baris hasil wrapping, atau satu item saja.

# BEDAH NILAI CSS — Menghitung Flex Items

Perhatikan nilai shorthand Flexbox dan hubungan ukuran dasar dengan ruang container:

```css
.toolbar {
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
}

.tool {
  flex: 1 1 10rem;
}
```

Cara menalar:

* `flex-flow: row wrap` adalah shorthand untuk arah `row` dan wrapping aktif. Jika item tidak muat pada satu flex line, item dapat pindah ke baris berikutnya.
* `flex: 1 1 10rem` berarti `flex-grow: 1`, `flex-shrink: 1`, dan `flex-basis: 10rem`. `10rem` adalah ukuran dasar pada main axis; item boleh membesar atau mengecil sesuai ruang yang tersedia.
* `gap: 12px` memisahkan item. Jarak ini juga memakai ruang container, jadi jangan menghitung hanya lebar item.
* `justify-content` mengatur item pada main axis, sedangkan `align-items` mengatur item pada cross axis. Dengan `row`, main axis biasanya horizontal; saat `flex-direction` menjadi `column`, arahnya berubah.
* `align-content` tidak menggantikan `align-items`: ia mengatur kumpulan flex line ketika ada beberapa baris dan tersedia ruang pada cross axis.

Mengapa `flex: 1 1 10rem` bukan berarti lebar item selalu `10rem`? `flex-basis` adalah ukuran dasar sebelum ruang bebas dibagikan atau kekurangan ruang ditangani. `flex-grow: 1` mengizinkan item mengambil bagian ruang bebas; `flex-shrink: 1` mengizinkan item mengecil saat ruang kurang. Hasil akhirnya bergantung pada ukuran container, jumlah item, gap, dan batas minimum isi item.

`wrap` menentukan apa yang dilakukan ketika item tidak muat pada satu flex line. Jika diganti `nowrap`, item tidak pindah ke baris baru; browser mencoba mengecilkannya menurut aturan shrink, dan isi atau batas minimum item dapat tetap menyebabkan overflow. Jadi, untuk memahami hasil Flexbox, hitung **basis item + gap**, lalu lihat apakah ruang cukup dan apakah wrapping aktif.

---

<a id="css-bab-7"></a>

<!-- Sumber: CSS\7.CSS-Grid.md -->

# CSS — Layout with Grid

## 1. Core Concept

**CSS Grid** adalah sistem layout untuk mengatur element dalam **dua dimensi**:

```text
baris
dan
kolom
```

Contoh:

```text
┌──────┬──────┬──────┐
│  A   │  B   │  C   │
├──────┼──────┼──────┤
│  D   │  E   │  F   │
└──────┴──────┴──────┘
```

Grid cocok untuk:

* page layout
* gallery
* kumpulan card
* dashboard
* layout yang membutuhkan baris dan kolom
* mengatur hubungan ukuran dan posisi antar-area

Di sini, **layout** maksudnya susunan element pada halaman, bukan isi elementnya.

Mental model:

> **Grid mengatur item di dalam baris dan kolom yang ditentukan oleh container.**

---

# 2. Grid Container vs Grid Item

Contoh:

```html
<div class="grid">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

Jika:

```css
.grid {
  display: grid;
}
```

Maka `.grid` menjadi **grid container**, sedangkan tiga `<div>` di dalamnya menjadi **grid items**.

```text
Grid Container
      │
      ├── Grid Item A
      ├── Grid Item B
      └── Grid Item C
```

Grid items adalah **direct children** dari grid container.

Property Grid pada container (seperti `grid-template-columns` dan `justify-items`) memerlukan parent dengan `display: grid`. Property penempatan item (seperti `grid-column`, `grid-row`, dan `grid-area`) berlaku pada grid item, yaitu anak langsung container tersebut. Jadi, pastikan property dipasang pada element dengan peran yang tepat.

> **Catatan:** `direct child` artinya anak yang berada tepat satu tingkat di dalam parent. Kalau sebuah element dibungkus element lain, element yang lebih dalam bukan direct child dari container luar.

```html
<div class="grid">
  <div class="card">
    <h2>Judul</h2>
  </div>
</div>
```

Pada contoh tersebut, `.card` adalah grid item. `<h2>` tidak menjadi grid item dari `.grid` karena bukan anak langsungnya.

---

# 3. Mengaktifkan Grid

Grid dimulai dengan:

```css
.grid {
  display: grid;
}
```

Tanpa pengaturan baris dan kolom, browser akan menempatkan item secara otomatis dalam satu kolom:

```text
A
B
C
```

Untuk menentukan kolom, gunakan `grid-template-columns`.

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Hasilnya memiliki tiga kolom:

```text
A       B       C
D       E       F
```

Jika tidak menentukan jumlah baris, browser akan membuat baris tambahan saat diperlukan.

Baris tambahan ini disebut **implicit row**. Artinya, browser membuatnya otomatis karena jumlah item tidak muat pada baris yang sudah ditentukan.

---

# 4. Grid Track, Line, Cell, dan Area

Beberapa istilah dasar:

```text
Grid track
→ satu baris atau satu kolom

Grid line
→ garis yang membatasi track

Grid cell
→ satu kotak pada pertemuan satu baris dan satu kolom

Grid area
→ satu atau lebih cell yang ditempati item
```

Pada grid tiga kolom:

```text
line 1     line 2     line 3     line 4
   │          │          │          │
   ├──────────┼──────────┼──────────┤
   │ column 1 │ column 2 │ column 3 │
   └──────────┴──────────┴──────────┘
```

Contohnya, jika satu item menempati dua kolom pada baris yang sama, item itu menutupi dua cell yang bersebelahan. Bagian yang ditempati item tersebut adalah grid area.

Istilah ini berguna saat menentukan ukuran track atau menempatkan item pada baris dan kolom tertentu.

---

# 5. `grid-template-columns`

`grid-template-columns` menentukan ukuran kolom.

```css
.grid {
  display: grid;
  grid-template-columns: 200px 300px;
}
```

Artinya:

```text
kolom pertama → 200px
kolom kedua   → 300px
```

Contoh dengan tiga kolom:

```css
.grid {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
}
```

Secara sederhana:

```text
kolom pertama → 150px
kolom tengah  → mengambil ruang yang tersedia
kolom terakhir → 150px
```

Jumlah nilai yang diberikan menentukan jumlah kolom eksplisit, yaitu kolom yang kita tulis langsung di CSS.

> **Catatan:** setiap nilai adalah satu track kolom. Jadi `150px 1fr 150px` membuat tiga kolom: kiri dan kanan berukuran tetap, sedangkan kolom tengah fleksibel.

---

# 6. `grid-template-rows`

`grid-template-rows` menentukan ukuran baris.

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 100px 150px;
}
```

Artinya:

```text
baris pertama → 100px
baris kedua   → 150px
```

Jika item membutuhkan baris tambahan, browser membuat **implicit row**. Ukuran default implicit row mengikuti ukuran content.

Maksudnya, tinggi baris tambahan biasanya menyesuaikan isi item di dalamnya. Kalau isi bertambah tinggi, baris dapat ikut membesar.

Kita dapat mengatur ukurannya dengan `grid-auto-rows`:

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-auto-rows: 120px;
}
```

---

# 7. Unit `fr`

`fr` berarti **fraction**, yaitu bagian dari ruang yang tersedia pada grid container.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

Kolom membagi ruang yang tersedia secara sama rata:

```text
1fr : 1fr
```

Contoh perbandingan:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```

Jika tidak ada batas ukuran minimum yang menghalangi, ruang fleksibel yang tersedia untuk kedua kolom dibagi dengan perbandingan:

```text
1 : 2
```

`fr` bukan persentase tetap dari lebar viewport. Nilainya dihitung dari ruang yang tersedia pada grid setelah kebutuhan track dan jarak diperhitungkan.

> **Catatan:** `1fr 2fr` bukan berarti kolom kedua selalu berukuran dua kali lebar layar. Artinya, dari ruang fleksibel yang tersisa di dalam container, kolom kedua mendapat dua bagian untuk setiap satu bagian kolom pertama.

---

# 8. `repeat()`

Jika ukuran kolom berulang, gunakan `repeat()`.

Tanpa `repeat()`:

```css
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}
```

Dengan `repeat()`:

```css
.grid {
  grid-template-columns: repeat(3, 1fr);
}
```

Artinya:

```text
buat 3 kolom
masing-masing menggunakan 1fr
```

Di sini, angka `3` adalah jumlah kolom, sedangkan `1fr` adalah ukuran yang diulang untuk setiap kolom.

`repeat()` juga dapat digunakan dengan ukuran lain:

```css
.grid {
  grid-template-columns: repeat(3, 200px);
}
```

---

# 9. `gap`

`gap` mengatur jarak di antara baris dan kolom.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

`gap` memberi jarak **di antara** grid items. Property ini tidak menambahkan jarak di luar tepi container.

Cara membayangkannya: `gap` mengatur lorong di antara track, bukan ruang di sekeliling seluruh grid. Untuk ruang di sisi dalam tepi container, gunakan `padding`.

Baris dan kolom dapat memiliki jarak berbeda:

```css
.grid {
  row-gap: 12px;
  column-gap: 20px;
}
```

Atau ditulis dengan shorthand:

```css
.grid {
  gap: 12px 20px;
}
```

Urutannya:

```text
gap: row-gap column-gap;
```

Jadi `gap: 12px 20px` berarti jarak antarbaris `12px` dan jarak antarkolom `20px`.

Jika hanya ada satu nilai, nilai itu berlaku untuk keduanya:

```css
.grid {
  gap: 16px;
}
```

---

# 10. Menentukan Posisi Item dengan Grid Line

Secara default, browser menempatkan item mengikuti urutan HTML.

`grid-column` dan `grid-row` dipasang pada grid item (anak langsung parent dengan `display: grid`); property ini tidak mengaktifkan Grid pada item itu sendiri.

Kita dapat menentukan awal dan akhir kolom item dengan `grid-column`:

```css
.featured {
  grid-column: 1 / 3;
}
```

Artinya item mulai dari grid line 1 dan berakhir di grid line 3, sehingga menempati dua kolom.

Demikian juga, `grid-row` menentukan baris:

```css
.featured {
  grid-row: 1 / 3;
}
```

Shorthand `span` dapat menyatakan jumlah track yang ditempati:

```css
.featured {
  grid-column: span 2;
}
```

> **Catatan:** `span` di sini adalah keyword CSS, bukan element HTML `<span>`. Artinya **membentang atau menempati sejumlah track**. Jadi `span 2` berarti item membentang sepanjang dua kolom. Karena posisi awalnya tidak disebutkan, browser menempatkannya mengikuti alur otomatis Grid.

Nomor pada `grid-column` dan `grid-row` merujuk ke **grid line**, bukan nomor cell.

Contoh yang sama berlaku untuk baris: `grid-row: span 2` membuat item membentang sepanjang dua baris.

---

# 11. Menamai Area dengan `grid-template-areas`

`grid-template-areas` memberi nama pada bagian layout agar susunannya lebih mudah dibaca.

```html
<div class="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main content</main>
  <aside>Related content</aside>
  <footer>Footer</footer>
</div>
```

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header  header"
    "nav     main"
    "aside   main"
    "footer  footer";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}
```

Setiap string mewakili satu baris. Nama yang diulang menandakan area tersebut membentang pada beberapa cell.

> **Catatan:** spasi memisahkan nama-nama kolom dalam satu baris. Setiap string baru menjadi baris berikutnya.

Susunan dengan nama yang sama harus membentuk area persegi panjang. Kalau satu nama muncul pada beberapa cell, cell-cell itu harus menyambung dan membentuk persegi panjang. Gunakan titik (`.`) untuk cell kosong:

```css
.page {
  grid-template-areas:
    "header header"
    "main   ."
    "footer footer";
}
```

Nama area harus cocok dengan nilai `grid-area` pada item.

---

# 12. `grid-area`

`grid-area` dapat digunakan untuk menghubungkan item dengan nama area:

```css
header {
  grid-area: header;
}
```

Nama `header` harus didefinisikan pada `grid-template-areas` di container.

Dengan kata lain, `grid-area: header` meminta item ini menempati area bernama `header` yang sudah disusun oleh container.

`grid-area` juga dapat menjadi shorthand untuk posisi baris dan kolom:

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

Urutannya:

```text
grid-row-start /
grid-column-start /
grid-row-end /
grid-column-end
```

Contoh `grid-area: 1 / 1 / 3 / 3` berarti mulai dari row line 1 dan column line 1, lalu berakhir di row line 3 dan column line 3. Hasilnya item membentang sepanjang dua baris dan dua kolom.

Untuk pemula, `grid-area` dengan nama biasanya lebih mudah dibaca daripada shorthand angka tersebut.

---

# 13. `justify-items` dan `align-items`

Property ini mengatur posisi item **di dalam cell masing-masing**.

```css
.grid {
  justify-items: center;
  align-items: center;
}
```

Secara umum:

```text
justify-items
→ posisi item pada arah inline

align-items
→ posisi item pada arah block
```

`inline` dan `block` adalah nama untuk dua arah layout. Dalam tulisan kiri-ke-kanan seperti ini, inline biasanya kiri-ke-kanan dan block biasanya atas-ke-bawah. Jadi, property ini tidak selalu berarti horizontal dan vertical pada semua bahasa atau mode penulisan.

Nilai yang umum digunakan:

```css
justify-items: start;
justify-items: center;
justify-items: end;
justify-items: stretch;
```

```css
align-items: start;
align-items: center;
align-items: end;
align-items: stretch;
```

Default-nya adalah `stretch`, sehingga item dapat memenuhi ruang cell jika ukuran item tidak membatasinya.

`stretch` artinya item direntangkan agar memenuhi ruang yang tersedia di cell. Jika item sudah punya ukuran tertentu atau ada batasan lain, item mungkin tidak memenuhi seluruh cell.

Property pada item `justify-self` dan `align-self` dapat mengatur satu item tanpa mengubah item lain:

```css
.special-item {
  justify-self: end;
  align-self: center;
}
```

---

# 14. `justify-content` dan `align-content`

`justify-content` dan `align-content` mengatur **keseluruhan grid tracks** di dalam container.

Contoh:

```css
.grid {
  display: grid;
  width: 600px;
  grid-template-columns: repeat(2, 150px);
  justify-content: center;
}
```

Kedua kolom memiliki lebar total 300px. Karena lebar container `600px`, ada ruang ekstra. `justify-content` mengatur posisi keseluruhan track kolom pada ruang ekstra tersebut.

Nilai yang umum digunakan:

```css
justify-content: start;
justify-content: center;
justify-content: end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

`align-content` melakukan pengaturan serupa pada arah block dan terlihat jika grid memiliki ruang ekstra pada arah tersebut.

> **Catatan:** kalau tidak ada ruang ekstra, misalnya track sudah memenuhi container, `justify-content` atau `align-content` mungkin tidak menimbulkan perubahan yang terlihat.

Perhatikan perbedaan targetnya:

```text
justify-items / align-items
→ posisi item di dalam cell

justify-content / align-content
→ posisi keseluruhan tracks di dalam container
```

Jika track menggunakan `fr` untuk mengisi ruang yang tersedia, mungkin tidak ada ruang ekstra yang dapat didistribusikan oleh `justify-content`.

---

# 15. Grid Eksplisit dan Implicit

Track yang dibuat secara langsung dengan:

```css
grid-template-columns
grid-template-rows
```

disebut bagian dari **explicit grid**. Gampangnya, track eksplisit adalah baris atau kolom yang ukurannya kita tulis langsung di CSS.

Jika item membutuhkan track tambahan di luar track yang didefinisikan, browser membuat **implicit tracks** secara otomatis. Misalnya, jumlah item lebih banyak daripada cell yang tersedia, sehingga browser perlu menambah baris.

Misalnya terdapat lima item tetapi hanya dua kolom:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

Browser membuat baris tambahan secara otomatis untuk menampung semua item.

Atur ukuran track tambahan dengan:

```css
.grid {
  grid-auto-rows: 120px;
}
```

`grid-auto-columns` mengatur ukuran kolom implicit, sedangkan `grid-auto-flow` mengatur arah penempatan otomatis item.

Biasanya item ditempatkan per baris:

```css
.grid {
  grid-auto-flow: row;
}
```

`row` artinya browser mengisi baris terlebih dahulu. Nilai `column` membuat browser mengisi kolom terlebih dahulu:

```css
.grid {
  grid-auto-flow: column;
}
```

Untuk mencoba mengisi cell kosong yang bisa tersisa ketika item menempati beberapa cell atau ditempatkan secara manual:

```css
.grid {
  grid-auto-flow: row dense;
}
```

`dense` dapat mengubah urutan visual item. Urutan baca dan navigasi keyboard tetap mengikuti urutan HTML, jadi jangan gunakan hanya untuk membuat urutan konten terlihat berbeda.

`dense` artinya browser boleh mengisi celah yang kosong dengan item berikutnya yang muat. Akibatnya, item yang muncul lebih awal di HTML dapat terlihat setelah item lain pada layar.

---

# 16. Grid Responsif dengan `minmax()`

`minmax()` memberi batas minimum dan maksimum pada ukuran track.

> **Catatan:** `minmax(minimum, maksimum)` berarti track tidak dibuat lebih kecil dari batas minimum dan dapat membesar sampai ukuran maksimum yang ditentukan.

```css
.grid {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 2fr;
}
```

Artinya kolom pertama memiliki ukuran minimum `200px`. Jika ada ruang fleksibel, ukurannya dapat bertambah sesuai perhitungan `1fr`.

`minmax()` sering digabungkan dengan `repeat()` dan `auto-fit` untuk membuat kumpulan kolom yang menyesuaikan lebar container:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

Gambaran cara kerjanya:

```text
buat kolom dengan lebar minimum 220px
sebanyak yang muat
bagikan ruang tersisa ke kolom-kolom tersebut
```

Jika container menyempit, jumlah kolom yang muat dapat berkurang tanpa menetapkan **breakpoint** untuk setiap jumlah kolom.

> **Catatan:** breakpoint adalah lebar layar atau container tertentu saat aturan layout berubah, biasanya melalui media query. Dengan pola ini, Grid mencoba menyesuaikan jumlah kolom secara otomatis tanpa kita perlu menentukan perubahan pada setiap breakpoint.

---

# 17. `auto-fit` vs `auto-fill`

Keduanya menentukan berapa banyak track berukuran tertentu yang dapat dibuat.

Contoh:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

Perbedaan utamanya terlihat ketika jumlah item lebih sedikit daripada jumlah kolom yang dapat ditampung:

```text
auto-fill
→ mempertahankan track kosong yang masih muat

auto-fit
→ track kosong dapat dirapatkan agar track berisi item menggunakan ruang
```

Track kosong maksudnya kolom yang muat secara ukuran tetapi tidak ditempati item. Pada `auto-fit`, track kosong tersebut dirapatkan; pada `auto-fill`, ruang track kosong tetap dipertahankan.

> **Catatan:** ukuran minimum `220px` tetap harus muat di container. Kalau container lebih sempit daripada itu, satu kolom pun bisa meluber keluar.

Untuk card layout yang ingin mengisi lebar container ketika item hanya sedikit, `auto-fit` sering menjadi pilihan praktis.

---

# 18. Contoh Layout Card

HTML:

```html
<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
  <article class="card">Card 4</article>
</section>
```

CSS:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.card {
  padding: 20px;
  border: 1px solid #ccc;
}
```

Container membuat kolom sebanyak mungkin dengan ukuran minimum `220px`. Setiap card ditempatkan ke cell yang tersedia, dan `gap` memberi jarak antar-card.

---

# 19. Grid vs Flexbox

Perbedaan sederhana:

```text
Grid
→ mengatur baris dan kolom
→ dua dimensi

Flexbox
→ mengatur item sepanjang satu arah utama
→ satu dimensi
```

Gunakan Grid saat baris dan kolom perlu direncanakan bersama:

```text
┌─────────┬──────────────┐
│ Sidebar │ Main content │
├─────────┴──────────────┤
│        Footer          │
└────────────────────────┘
```

Gunakan Flexbox saat item disusun dalam satu baris atau satu kolom:

```text
Logo       Navigation       Button
```

Karena itu, Grid disebut **dua dimensi** (mengatur baris dan kolom bersama), sedangkan Flexbox disebut **satu dimensi** (mengatur satu arah utama dalam satu waktu).

Keduanya juga dapat digunakan bersama. Contohnya, Grid untuk layout halaman dan Flexbox untuk menyusun link di dalam navigation.

Jangan memilih berdasarkan aturan:

> Grid selalu lebih baik daripada Flexbox.

Lebih tepat:

> Pilih layout berdasarkan hubungan antar-item yang ingin diatur.

---

# 20. Grid vs `position`

Grid digunakan untuk menyusun layout dalam baris dan kolom.

`position` digunakan untuk mengatur posisi element relatif terhadap **containing block** atau **viewport**, tergantung nilainya.

> **Catatan:** containing block adalah kotak acuan yang dipakai browser untuk menghitung posisi element. Viewport adalah area halaman yang sedang terlihat di layar.

Jika dua card perlu tersusun dalam kolom, gunakan Grid:

```css
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```

Jangan menggunakan `position: absolute` sebagai pengganti layout grid. Element yang memakai `position: absolute` keluar dari normal flow sehingga tidak otomatis menyediakan ruang untuk item lain.

**Normal flow** adalah cara browser menyusun element secara default di halaman. Element `position: absolute` dikeluarkan dari alur tersebut dan tidak mengambil ruang, jadi element lain tidak otomatis bergeser untuk menyediakan ruang baginya.

---

# 21. Common Mistake — Grid Tidak Aktif

Contoh:

```css
.container {
  grid-template-columns: 1fr 1fr;
}
```

Property track tidak membuat element menjadi grid container dengan sendirinya.

> **Catatan:** `grid-template-columns` hanya mendefinisikan kolom untuk sebuah grid. Supaya aturan itu berlaku, container tetap perlu `display: grid`.

Gunakan:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

# 22. Common Mistake — Salah Memahami `fr`

`fr` membagi **ruang yang tersedia di dalam grid container**, bukan langsung membagi lebar layar.

Periksa:

```text
Apakah grid container memiliki ukuran yang diharapkan?
Apakah ada padding atau gap?
Apakah ukuran minimum item mencegah kolom mengecil?
```

Ukuran minimum item adalah batas terkecil yang dibutuhkan isi item. Misalnya, kata panjang yang tidak bisa dipotong dapat membuat kolom menolak mengecil lebih jauh.

Jangan menganggap `1fr` selalu sama persis dengan persentase tertentu dari viewport.

---

# 23. Common Mistake — Mengira `gap` Menambah Jarak ke Tepi Container

```css
.grid {
  gap: 20px;
}
```

`gap` mengatur jarak antar-track, bukan padding bagian luar grid.

Jika membutuhkan jarak di tepi container, gunakan padding:

```css
.grid {
  gap: 20px;
  padding: 20px;
}
```

---

# 24. Common Mistake — Menggunakan Nomor Cell untuk Posisi

`grid-column` dan `grid-row` menggunakan nomor **grid line**.

```css
.item {
  grid-column: 1 / 3;
}
```

Artinya item berada di antara line 1 dan line 3, bukan di cell nomor 1 sampai cell nomor 3.

Untuk menempati dua kolom dari posisi otomatis:

```css
.item {
  grid-column: span 2;
}
```

> **Catatan:** `span` berarti membentang sepanjang track yang disebutkan. Di contoh ini, `span 2` berarti item menempati dua kolom dari posisi yang dipilih otomatis oleh Grid.

---

# 25. Cheat Sheet — CSS Grid

| Property | Fungsi |
|---|---|
| `display: grid` | Mengaktifkan Grid pada container |
| `grid-template-columns` | Menentukan kolom eksplisit |
| `grid-template-rows` | Menentukan baris eksplisit |
| `grid-auto-rows` | Menentukan ukuran baris implicit |
| `grid-auto-columns` | Menentukan ukuran kolom implicit |
| `grid-auto-flow` | Mengatur arah penempatan otomatis |
| `gap` | Mengatur jarak antar-track |
| `grid-column` | Menentukan posisi atau rentang item pada kolom |
| `grid-row` | Menentukan posisi atau rentang item pada baris |
| `grid-template-areas` | Menamai susunan area grid |
| `grid-area` | Menempatkan item pada area bernama atau posisi tertentu |
| `justify-items` | Mengatur item pada arah inline di dalam cell |
| `align-items` | Mengatur item pada arah block di dalam cell |
| `justify-self` | Mengatur satu item pada arah inline |
| `align-self` | Mengatur satu item pada arah block |
| `justify-content` | Mengatur posisi keseluruhan tracks pada arah inline |
| `align-content` | Mengatur posisi keseluruhan tracks pada arah block |
| `minmax()` | Menentukan batas minimum dan maksimum ukuran track |
| `repeat()` | Mengulang definisi track |
| `fr` | Membagi ruang fleksibel yang tersedia di dalam grid |
| `auto-fit` / `auto-fill` | Membuat jumlah track berulang berdasarkan ruang yang muat |

---

# 26. Cara Membaca Grid sebagai Developer

Saat membuat layout, tanyakan:

1. Element mana yang menjadi grid container?
2. Siapa saja direct children yang menjadi grid items?
3. Berapa kolom yang dibutuhkan?
4. Apakah tinggi baris ditentukan atau mengikuti content?
5. Apakah ukuran track tetap, fleksibel, atau memiliki batas minimum/maksimum?
6. Apakah item mengikuti urutan otomatis atau perlu menempati area tertentu?
7. Apakah jarak antar-track sudah diatur dengan `gap`?
8. Apakah posisi item di dalam cell berbeda dari posisi keseluruhan grid?
9. Apakah jumlah kolom perlu beradaptasi terhadap lebar container?
10. Apakah layout lebih tepat memakai Grid, Flexbox, atau kombinasi keduanya?

---

# 27. Cause → Effect

### Menggunakan `display: grid`

```text
parent menjadi grid container
↓
direct children menjadi grid items
```

### Mengubah `grid-template-columns`

```text
definisi kolom berubah
↓
item tersusun pada track kolom yang baru
```

### Menggunakan `fr`

```text
ruang tersedia dibagi menjadi bagian fleksibel
↓
ukuran track menyesuaikan ruang grid container
```

### Menggunakan `gap`

```text
jarak antar-track bertambah
↓
item tidak saling menempel
```

### Menggunakan `grid-column: span 2`

```text
item meminta rentang dua kolom
↓
item menempati lebih dari satu kolom
```

### Menggunakan `grid-template-areas`

```text
container mendeskripsikan susunan bernama
↓
item dapat ditempatkan dengan nama area
```

---

# 28. Practice — Bangun Layout Grid

Gunakan HTML berikut:

```html
<main class="layout">
  <header>Header</header>
  <nav>Navigation</nav>
  <section class="content">Content</section>
  <aside>Aside</aside>
  <footer>Footer</footer>
</main>
```

### Tugas

1. Aktifkan Grid pada `.layout`.
2. Buat dua kolom: kolom samping dan kolom utama.
3. Beri jarak antar-track dengan `gap`.
4. Gunakan `grid-template-areas` untuk menyusun header, navigation, content, aside, dan footer.
5. Pastikan header dan footer membentang selebar layout.
6. Berikan border pada tiap bagian agar susunannya mudah diamati.
7. Ubah jumlah kolom card pada contoh card layout menggunakan `auto-fit` dan `minmax()`.
8. Jelaskan perbedaan hasil ketika memakai `auto-fit` dan `auto-fill`.

Jangan hanya menyalin property. Coba jelaskan:

```text
berapa kolom yang dibuat?
item mana yang menjadi grid item?
area mana yang ditempati setiap item?
apa yang berubah ketika lebar container mengecil?
```

---

# 29. Self Check

Sebelum melanjutkan, pastikan bisa menjelaskan:

1. Apa tujuan utama CSS Grid?
2. Apa perbedaan grid container dan grid item?
3. Mengapa grid item adalah direct child container?
4. Apa perbedaan grid track dan grid line?
5. Apa fungsi `grid-template-columns`?
6. Apa fungsi `grid-template-rows`?
7. Apa arti unit `fr`?
8. Apa fungsi `repeat()`?
9. Apa fungsi `gap`?
10. Apa perbedaan `gap` dan `padding`?
11. Apa arti `grid-column: 1 / 3`?
12. Apa fungsi `span`?
13. Apa fungsi `grid-template-areas`?
14. Apa perbedaan explicit grid dan implicit grid?
15. Apa fungsi `grid-auto-rows`?
16. Apa perbedaan `justify-items` dan `justify-content`?
17. Apa fungsi `minmax()`?
18. Apa perbedaan dasar `auto-fit` dan `auto-fill`?
19. Kapan Grid lebih sesuai daripada Flexbox?
20. Mengapa urutan visual dengan `dense` perlu digunakan hati-hati?

---

# Key Takeaway

Jangan menghafal Grid sebagai kumpulan property.

Pahami alurnya:

```text
Parent
  ↓
display: grid
  ↓
tentukan kolom dan baris
  ↓
grid-template-columns / grid-template-rows
  ↓
atur ukuran fleksibel atau berulang
  ↓
fr / repeat() / minmax()
  ↓
atur jarak antar-track
  ↓
gap
  ↓
atur posisi atau area item
  ↓
grid-column / grid-row / grid-template-areas
```

Mental model terpenting:

```text
display: grid
→ aktifkan Grid pada container

grid-template-columns / grid-template-rows
→ tentukan track

grid item
→ direct child dari grid container

grid-column / grid-row
→ tentukan posisi item berdasarkan grid line

gap
→ atur jarak antar-track
```

Grid dan Flexbox bukan lawan.

Gunakan Grid ketika hubungan baris dan kolom penting. Gunakan Flexbox ketika item perlu disusun sepanjang satu arah utama.

# INSIGHT

Jangan samakan `justify-items` dan `justify-content`:

```css
.grid {
  display: grid;
  width: 600px;
  grid-template-columns: repeat(2, 150px);
  justify-items: center;
  justify-content: center;
}
```

`justify-items: center` meratakan setiap item di tengah **cell miliknya**. `justify-content: center` merapatkan **keseluruhan kolom/track** di tengah container; pada contoh, dua kolom lebarnya total `300px`, sehingga masih ada ruang di container `600px` untuk dipusatkan. Pasang keduanya pada grid container yang memakai `display: grid`, tetapi ingat bahwa targetnya berbeda.

Nama `align-items` dan `justify-content` juga dipakai di Flexbox, tetapi konteksnya tidak sama: Flexbox memakai main axis dan cross axis; Grid memakai arah inline/block, dan membedakan alignment item di dalam cell dari alignment track dalam container. Grid cocok untuk merencanakan baris dan kolom bersama; Flexbox mengatur item sepanjang satu arah utama. Untuk membaca property alignment dengan tepat, tanyakan: "Saya sedang meratakan item di dalam cell, atau memindahkan keseluruhan track?"

# BEDAH NILAI CSS — Membaca Grid yang Responsif

Perhatikan bagaimana fungsi bersarang memberikan batas ukuran dan Grid menyesuaikan jumlah track:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  grid-auto-rows: minmax(8rem, auto);
  gap: clamp(12px, 2vw, 24px);
}

.featured {
  grid-column: 1 / -1;
}
```

Cara menalar:

* `repeat()` mengulang definisi kolom. `auto-fit` membuat sebanyak mungkin track yang muat, lalu track kosong dapat dirapatkan.
* `minmax(min(100%, 14rem), 1fr)` memberi tiap kolom batas minimum yang menyesuaikan container: minimum-nya tidak lebih lebar dari `100%`, dan kolom dapat membesar untuk berbagi ruang sebagai `1fr`.
* `grid-auto-rows: minmax(8rem, auto)` memberi baris implicit minimum `8rem`, tetapi mengizinkannya bertambah mengikuti isi.
* `clamp(12px, 2vw, 24px)` membuat gap responsif: tidak kurang dari `12px`, mengikuti `2vw` jika berada di antara batas, dan tidak lebih dari `24px`.
* `grid-column: 1 / -1` menempatkan `.featured` dari grid line pertama sampai line terakhir pada sumbu kolom. Ini membuat item membentang sepanjang kolom yang tersedia.

Mengapa `min(100%, 14rem)` digunakan sebagai minimum kolom? Di container sempit, `14rem` bisa lebih lebar daripada ruang yang tersedia dan menyebabkan overflow. `min()` memilih nilai yang lebih kecil antara `100%` lebar acuan dan `14rem`, sehingga batas minimum kolom tidak melampaui lebar container. `minmax(..., 1fr)` lalu menjadikan nilai itu batas bawah, sementara `1fr` membagikan ruang fleksibel.

`clamp(12px, 2vw, 24px)` membatasi gap: `2vw` mengikuti lebar viewport, tetapi hasilnya tidak boleh di bawah `12px` atau di atas `24px`. `auto-fit` menentukan berapa track yang muat, sedangkan `grid-column: 1 / -1` memakai nomor grid line—`1` adalah garis awal dan `-1` garis terakhir pada sumbu kolom. Tanda slash di sini memisahkan **garis mulai dan garis akhir**, bukan nilai horizontal/vertikal seperti pada `border-radius`. Arti separator selalu bergantung pada grammar property yang sedang dibaca.

---

<a id="css-bab-8"></a>

<!-- Sumber: CSS\8.CSS-Transforms.md -->

# CSS — Transforms

## 1. Core Concept

**CSS Transforms** mengubah posisi, ukuran, atau bentuk visual sebuah element tanpa menyusun ulang element lain di normal flow.

Transform 2D yang dibahas di materi ini menggunakan property `transform` dan fungsi:

```text
translate() → memindahkan
rotate()    → memutar
scale()     → mengubah ukuran
skew()      → memiringkan
matrix()    → menggabungkan transform dalam bentuk matriks
```

Mental model:

> **Transform mengubah tampilan element, bukan ukuran ruang yang disediakan untuknya dalam layout.**

Contoh:

```css
.card {
  transform: translateX(20px);
}
```

Card tampak bergeser 20px ke kanan, tetapi element lain tetap dihitung berdasarkan posisi layout awal card.

---

# 2. Property `transform`

Fungsi transform ditulis sebagai nilai property `transform`:

```css
.element {
  transform: translate(20px, 10px);
}
```

Satu element dapat menggunakan beberapa fungsi sekaligus:

```css
.element {
  transform: translate(20px, 10px) rotate(10deg) scale(1.1);
}
```

Urutan fungsi berpengaruh terhadap hasil. Contohnya, memindahkan element lalu memutarnya dapat menghasilkan posisi akhir yang berbeda dari memutar lalu memindahkannya. Ubah urutan fungsi untuk melihat perbedaannya.

`transform: none` berarti tidak ada transform:

```css
.element {
  transform: none;
}
```

---

# 3. `translate()` — Memindahkan Element

`translate()` menggeser element dari posisi layout awalnya.

```css
.element {
  transform: translate(30px, 15px);
}
```

Parameter pertama adalah pergeseran horizontal (`x`), dan parameter kedua adalah pergeseran vertikal (`y`).

```text
nilai x positif → ke kanan
nilai x negatif → ke kiri
nilai y positif → ke bawah
nilai y negatif → ke atas
```

Kedua arah juga dapat ditulis secara terpisah:

```css
.element {
  transform: translateX(30px);
}

.another-element {
  transform: translateY(-15px);
}
```

Nilai persentase dihitung berdasarkan ukuran element itu sendiri:

```css
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

Di sini, `left: 50%` dan `top: 50%` menempatkan titik awal element di tengah containing block. `translate(-50%, -50%)` lalu menggeser element ke kiri dan ke atas sebesar setengah ukuran elementnya sendiri.

---

# 4. `rotate()` — Memutar Element

`rotate()` memutar element berdasarkan sudut:

```css
.element {
  transform: rotate(15deg);
}
```

Satuan sudut yang umum digunakan:

```text
deg → derajat, contoh 45deg
turn → putaran, contoh 0.25turn
rad → radian, contoh 1.57rad
```

Contoh:

```css
.tilted {
  transform: rotate(-8deg);
}
```

Sudut positif memutar searah jarum jam; sudut negatif memutar berlawanan arah jarum jam.

Secara default, element berputar pada titik tengahnya. Gunakan `transform-origin` untuk memilih titik putar:

```css
.door {
  transform-origin: left center;
  transform: rotate(20deg);
}
```

`transform-origin` menentukan titik acuan transformasi. Nilainya dapat berupa kata kunci seperti `center`, `top left`, atau koordinat seperti `20px 30px`.

---

# 5. `scale()` — Mengubah Ukuran Element

`scale()` mengubah ukuran element berdasarkan faktor pengali:

```css
.element {
  transform: scale(1.2);
}
```

Nilai `1` mempertahankan ukuran awal, nilai di atas `1` memperbesar, dan nilai antara `0` dan `1` memperkecil.

```text
scale(1.5)  → 1,5 kali ukuran awal
scale(0.5)  → setengah ukuran awal
scale(1)    → ukuran tetap
```

Untuk mengatur arah horizontal dan vertikal secara berbeda:

```css
.element {
  transform: scale(1.2, 0.8);
}
```

Atau gunakan fungsi per arah:

```css
.element {
  transform: scaleX(1.2) scaleY(0.8);
}
```

Nilai negatif dapat membalik element pada sumbu terkait:

```css
.flipped {
  transform: scaleX(-1);
}
```

Transformasi skala juga memengaruhi teks dan konten di dalam element. Untuk mengubah ukuran layout beserta ruang yang dipakai, gunakan property layout seperti `width`, `height`, atau ukuran Flexbox/Grid, bukan `scale()` saja.

---

# 6. `skew()` — Memiringkan Element

`skew()` memiringkan element pada sumbu horizontal dan/atau vertikal:

```css
.element {
  transform: skew(10deg, 5deg);
}
```

Parameter pertama menentukan kemiringan pada sumbu `x`, dan parameter kedua pada sumbu `y`. Parameter kedua bersifat opsional:

```css
.element {
  transform: skewX(10deg);
}

.another-element {
  transform: skewY(-5deg);
}
```

Kemiringan mendistorsi bentuk visual element. Seperti transform lain, transformasi ini tidak mengubah ruang layout awal yang ditempati element.

---

# 7. `matrix()` — Transformasi dengan Matriks

`matrix()` menuliskan transformasi 2D menggunakan enam angka:

```css
.element {
  transform: matrix(a, b, c, d, tx, ty);
}
```

Angka-angka tersebut membentuk transformasi berikut:

```text
matrix(a, b, c, d, tx, ty)

x baru = a × x + c × y + tx
y baru = b × x + d × y + ty
```

Contoh translasi 30px ke kanan dan 20px ke bawah:

```css
.element {
  transform: matrix(1, 0, 0, 1, 30, 20);
}
```

Empat angka pertama dapat mengatur kombinasi skala, rotasi, dan kemiringan; dua angka terakhir (`tx` dan `ty`) mengatur translasi.

`matrix()` berguna ketika nilai transformasi memang berasal dari perhitungan atau alat grafis. Untuk penggunaan biasa, fungsi bernama seperti `translate()`, `rotate()`, `scale()`, dan `skew()` lebih mudah dibaca dan dipelihara.

---

# 8. `transform-origin`

`transform-origin` menentukan titik tempat transformasi dilakukan:

```css
.element {
  transform-origin: top left;
  transform: rotate(10deg);
}
```

Nilai default-nya adalah `center`, sehingga element biasanya berputar atau berubah skala dari bagian tengah.

Contoh titik origin yang umum:

```css
transform-origin: center;
transform-origin: top left;
transform-origin: right bottom;
transform-origin: 20px 30px;
```

Property ini tidak memindahkan element dengan sendirinya; ia mengubah titik acuan fungsi transform.

---

# 9. Contoh Hover Sederhana

Transform sering digunakan untuk memberi respons visual pada interaksi. `transition` membuat perubahan nilai transform berlangsung bertahap:

```html
<button class="button">Arahkan pointer</button>
```

```css
.button {
  transition: transform 200ms ease;
}

.button:hover {
  transform: translateY(-3px) scale(1.03);
}
```

`transform` menentukan perubahan visual, sedangkan `transition` mengatur durasi dan cara perubahan itu berlangsung. Keduanya adalah property yang berbeda.

---

## 9.1. Contoh Implementasi pada Kartu Produk

Contoh berikut menggabungkan transform yang umum dipakai pada komponen antarmuka:

```html
<article class="product-card">
  <div class="product-card__image">
    <img src="headphones.jpg" alt="Headphone hitam">
  </div>
  <span class="product-card__badge">Baru</span>
  <h2>Headphone</h2>
  <a href="/products/headphones">Lihat produk</a>
</article>
```

```css
.product-card {
  position: relative;
}

.product-card__image {
  overflow: hidden;
}

.product-card__image img {
  display: block;
  width: 100%;
  transition: transform 200ms ease;
}

.product-card:hover .product-card__image img {
  transform: scale(1.05);
}

.product-card__badge {
  display: inline-block;
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  transform: rotate(-6deg);
}

.product-card a {
  display: inline-block;
  transition: transform 200ms ease;
}

.product-card a:hover {
  transform: translateY(-2px);
}
```

Contoh implementasi `skew()` untuk label promo:

```html
<span class="promo-label"><span>Diskon</span></span>
```

```css
.promo-label {
  display: inline-block;
  transform: skewX(-8deg);
}

.promo-label > span {
  display: inline-block;
  transform: skewX(8deg);
}
```

`skewX(-8deg)` memiringkan bidang label; skew berlawanan pada teks menjaga tulisan tetap tegak. Wrapper dan teks sama-sama `inline-block` agar transform dapat diterapkan dengan jelas. Contoh-contoh ini mengubah tampilan saja, bukan ruang layout yang disediakan untuk komponen.

`matrix()` tetap dibahas untuk memahami representasi transformasi atau membaca nilai yang dihasilkan tool, tetapi untuk implementasi sehari-hari gunakan fungsi bernama seperti `translate()`, `rotate()`, `scale()`, dan `skew()` agar maksud kode jelas.

---

# 10. Transform vs Layout

Transform tidak mengubah ukuran atau posisi layout yang dipakai browser untuk menata element lain.

```css
.box {
  transform: translateX(40px);
}
```

Hasilnya:

```text
box tampak bergeser ke kanan
ruang layout awal tetap dipakai
element lain tidak otomatis berpindah
```

Gunakan transform untuk perubahan visual, seperti animasi, ikon miring, atau efek hover. Gunakan property layout seperti `margin`, `position`, Flexbox, atau Grid ketika susunan element lain memang perlu ikut berubah.

Transform juga dapat membuat konteks penumpukan baru (`stacking context`), sehingga urutan tampil element yang bertumpuk dapat terpengaruh. Jika element bertumpuk secara tidak terduga, periksa penggunaan `transform` dan `z-index`.

---

# 11. Common Mistake — Mengira `transform` Mengubah Layout

Contoh:

```css
.box {
  transform: scale(1.5);
}
```

Element terlihat lebih besar, tetapi ruang layout-nya tidak ikut membesar. Element di sebelahnya mungkin tetap berada di posisi semula dan dapat bertumpuk.

Jika ruang layout harus ikut berubah, sesuaikan ukuran atau aturan layout element, bukan hanya menggunakan `scale()`.

---

# 12. Common Mistake — Lupa Urutan Transform

```css
.element {
  transform: translateX(100px) rotate(30deg);
}
```

Mengubah urutan menjadi:

```css
.element {
  transform: rotate(30deg) translateX(100px);
}
```

dapat menghasilkan posisi akhir yang berbeda. Transformasi saling memengaruhi, jadi jangan menganggap daftar fungsi dapat diurutkan ulang tanpa mengubah hasil.

---

# 13. Common Mistake — Menggunakan `matrix()` Tanpa Alasan

Nilai `matrix()` sulit dibaca jika dibandingkan dengan transformasi bernama:

```css
transform: matrix(1, 0, 0, 1, 30, 20);
```

Untuk translasi sederhana, pilih bentuk yang lebih jelas:

```css
transform: translate(30px, 20px);
```

Gunakan `matrix()` saat membutuhkan representasi matriks atau nilai hasil perhitungan, bukan sebagai pilihan default.

---

# 14. Cheat Sheet — CSS Transforms

| Fungsi atau property | Fungsi |
|---|---|
| `transform` | Menerapkan satu atau beberapa transformasi visual |
| `translate(x, y)` | Menggeser element pada sumbu horizontal dan vertikal |
| `translateX(x)` / `translateY(y)` | Menggeser element pada satu sumbu |
| `rotate(angle)` | Memutar element berdasarkan sudut |
| `scale(x, y)` | Mengubah ukuran pada sumbu horizontal dan vertikal |
| `scaleX(x)` / `scaleY(y)` | Mengubah ukuran pada satu sumbu |
| `skew(x, y)` | Memiringkan element pada kedua sumbu |
| `skewX(angle)` / `skewY(angle)` | Memiringkan element pada satu sumbu |
| `matrix(a, b, c, d, tx, ty)` | Menggabungkan transformasi 2D dalam bentuk matriks |
| `transform-origin` | Menentukan titik acuan transformasi |
| `transition` | Mengatur perubahan transform agar berlangsung bertahap |

---

# 15. Cara Memilih Transform

Tanyakan:

1. Apakah element perlu bergeser? Gunakan `translate()`.
2. Apakah element perlu berputar? Gunakan `rotate()`.
3. Apakah element perlu tampak lebih besar atau kecil? Gunakan `scale()`.
4. Apakah bentuk element perlu miring? Gunakan `skew()`.
5. Apakah transformasi perlu ditulis sebagai nilai matriks? Gunakan `matrix()`.
6. Dari titik mana element perlu berputar atau berubah ukuran? Atur `transform-origin`.
7. Apakah element lain juga perlu berpindah atau ruang layout berubah? Gunakan property layout yang sesuai, bukan hanya `transform`.

---

# 16. Bedah Nilai — Membaca Transform Gabungan

Perhatikan bagaimana nilai dan urutan fungsi mengubah geometri element:

```css
.sticker {
  transform-origin: top left;
  transform: translate(40px, -10px) rotate(12deg) scale(1.1, 0.9) skewX(3deg);
  transition: transform 180ms ease;
}
```

Cara menalar:

* `translate(40px, -10px)` memberi perpindahan horizontal positif dan vertikal negatif.
* `rotate(12deg)` memutar searah jarum jam. Karena origin di `top left`, titik acuan transform berbeda dari titik tengah default.
* `scale(1.1, 0.9)` memperbesar arah horizontal menjadi 1,1 kali dan mengecilkan arah vertikal menjadi 0,9 kali.
* `skewX(3deg)` memiringkan bentuk pada sumbu horizontal.
* Urutan fungsi dapat mengubah hasil posisi dan bentuk akhir; jangan menganggap fungsi-fungsi ini dapat dipertukarkan urutannya.
* `transition` membuat perubahan nilai `transform` berlangsung bertahap saat nilainya berubah, misalnya ketika pointer diarahkan ke element. Ia tidak mengubah geometri transform itu sendiri.

Bandingkan nilai matriks berikut:

```css
transform: matrix(1, 0, 0, 1, 40, -10);
```

Pada rumus `matrix(a, b, c, d, tx, ty)`, empat nilai pertama membentuk bagian skala/rotasi/kemiringan. Di sini nilainya adalah identitas, sedangkan `tx` dan `ty` memindahkan element `40px` ke kanan dan `10px` ke atas. Jadi, contoh ini menyatakan translasi saja; ia tidak mempertahankan rotasi, skala, atau skew dari contoh `.sticker`.

Mengapa nilai `translate(40px, -10px)` dan `scale(1.1, 0.9)` masing-masing memiliki dua angka? Untuk `translate`, angka pertama menggeser sumbu x dan angka kedua sumbu y; untuk `scale`, angka pertama adalah faktor skala x dan angka kedua faktor skala y. Satuan juga berbeda: translasi menerima panjang seperti `px` atau `%`, rotasi dan skew memakai satuan sudut seperti `deg`, sedangkan scale memakai faktor tanpa satuan. Nilai kosong atau bersatuan keliru bukanlah pengganti angka yang sesuai.

`transform-origin: top left` menjelaskan titik acuan, bukan arah atau besar rotasi. Jika ingin rotasi berpusat di sudut kanan bawah, ubah origin menjadi `right bottom`, bukan nilai sudut `rotate()`. `translate()` menggeser tampilan element tanpa menggeser element tetangga atau mengubah ruang layout awalnya.

---

<a id="css-bab-9"></a>

<!-- Sumber: CSS\9.CSS-Pseudo-classes-and-elements.md -->

# CSS — Pseudo-class dan Pseudo-element

## 1. Core Concept

Pseudo-class dan pseudo-element adalah bagian dari **CSS selector**. Keduanya bukan attribute HTML dan tidak perlu ditambahkan sebagai attribute pada tag.

```css
a:hover {
  color: crimson;
}

.note::before {
  content: "Catatan: ";
}
```

Browser menentukan element yang cocok berdasarkan selector:

```text
:pseudo-class
→ memilih element berdasarkan state, posisi, atau kondisi tertentu

::pseudo-element
→ memilih bagian khusus element atau membuat bagian dekoratif
```

Mental model:

> **Class HTML adalah label yang kita pasang. Pseudo-class adalah kondisi yang browser kenali. Pseudo-element adalah bagian yang ditargetkan CSS.**

---

# 2. Bedanya `:` dan `::`

Satu titik dua (`:`) digunakan untuk pseudo-class:

```css
button:hover {
  background-color: navy;
}
```

Artinya, pilih `<button>` ketika pointer sedang berada di atasnya.

Dua titik dua (`::`) digunakan untuk pseudo-element:

```css
.note::before {
  content: "Catatan: ";
}
```

Artinya, target bagian `before` yang dibuat CSS pada `.note`.

| Bentuk | Nama | Yang ditargetkan |
|---|---|---|
| `:hover` | Pseudo-class | Element saat berada dalam state tertentu |
| `:last-of-type` | Pseudo-class | Element berdasarkan posisinya relatif terhadap sibling dengan tipe yang sama |
| `::before` | Pseudo-element | Bagian dekoratif sebelum content element |
| `::first-letter` | Pseudo-element | Bagian huruf pertama yang dapat diberi style |

Pseudo-class secara umum menambah kondisi pada selector element yang sudah ada. Pseudo-element menargetkan bagian element yang bukan element HTML mandiri. Dalam standar modern, gunakan `::` untuk pseudo-element agar perbedaan ini terlihat jelas. Beberapa pseudo-element lama seperti `:before` masih didukung sebagai sintaks kompatibilitas, tetapi bentuk `::before` lebih mudah dibedakan.

---

# 3. Pseudo-class Interaksi dan Link

## `:hover`

Mencocokkan element ketika pointer berada di atasnya:

```css
.card:hover {
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}
```

Gunakan untuk affordance visual tambahan. Jangan jadikan `:hover` satu-satunya cara menyampaikan informasi atau menjalankan interaksi; layar sentuh tidak selalu memiliki hover, dan keyboard tidak menggunakan pointer.

## `:focus` dan `:focus-visible`

`:focus` mencocokkan element yang sedang menerima fokus keyboard atau programatik:

```css
input:focus {
  border-color: royalblue;
}
```

`:focus-visible` biasanya menunjukkan fokus saat browser menilai indikator fokus perlu terlihat, terutama untuk navigasi keyboard:

```css
button:focus-visible {
  outline: 3px solid royalblue;
  outline-offset: 3px;
}
```

Jangan menghapus outline fokus tanpa pengganti yang jelas. Pengguna keyboard perlu mengetahui element mana yang sedang aktif. Gunakan `:focus-visible` untuk styling fokus yang lebih sesuai dengan cara interaksi, bukan untuk menyembunyikan fokus.

## `:active`

Mencocokkan element selama sedang diaktifkan, misalnya selama mouse ditekan:

```css
button:active {
  transform: translateY(1px);
}
```

Ini state sementara saat aktivasi, bukan penanda bahwa tombol toggle tersimpan dalam keadaan "aktif". Untuk state toggle yang perlu dipertahankan, gunakan state aplikasi atau attribute semantik yang sesuai.

## `:visited`, `:link`, dan `:any-link`

```css
a:link {
  color: royalblue;
}

a:visited {
  color: purple;
}
```

`:link` mencocokkan link yang belum dikunjungi; `:visited` mencocokkan link yang sudah dikunjungi menurut browser. Browser membatasi style `:visited` demi privasi, sehingga jangan mengandalkan semua property dapat dibedakan. `:any-link` mencocokkan link yang memiliki tujuan, baik sudah dikunjungi maupun belum.

---

# 4. Pseudo-class Struktural

Pseudo-class struktural membandingkan element dengan sibling-nya di dalam parent yang sama. Agar memahami hasilnya, tulis urutan DOM dan periksa jenis element yang dihitung.

Gunakan HTML ini sebagai contoh:

```html
<div class="list">
  <h2>Daftar</h2>
  <p>Pertama</p>
  <span>Catatan</span>
  <p>Kedua</p>
  <p>Ketiga</p>
</div>
```

## `:first-child` dan `:last-child`

```css
.list > :first-child {
  font-weight: bold;
}

.list > :last-child {
  color: crimson;
}
```

`:first-child` berarti element yang merupakan **anak pertama dari jenis apa pun** di antara sibling. Pada contoh, yang pertama adalah `<h2>`, bukan paragraf pertama.

`:last-child` berarti anak terakhir dari jenis apa pun. Pada contoh, yang terakhir adalah `<p>Ketiga</p>`.

Mengapa selector seperti `.list p:first-child` tidak memilih `<p>Pertama</p>` pada contoh? Karena `<p>` itu bukan anak pertama parent; `<h2>` berada lebih dulu.

## `:first-of-type` dan `:last-of-type`

```css
.list > p:first-of-type {
  color: green;
}

.list > p:last-of-type {
  color: crimson;
}
```

`:first-of-type` memilih element pertama **dengan nama tag yang sama** di antara sibling. `:last-of-type` memilih element terakhir dengan nama tag yang sama. Perhitungan tipe tag bersifat spesifik—`p` dibandingkan dengan sibling `<p>`, bukan dibandingkan dengan `<h2>` atau `<span>`.

Pada contoh:

```text
:first-child
→ <h2>Daftar</h2>, karena ia anak pertama apa pun jenisnya

p:first-of-type
→ <p>Pertama</p>, karena itu <p> pertama di dalam parent

p:last-of-type
→ <p>Ketiga</p>, karena itu <p> terakhir di dalam parent

:last-child
→ <p>Ketiga</p>, karena ia kebetulan anak terakhir apa pun jenisnya
```

### Kapan memakai `:last-of-type`?

Gunakan ketika ingin menargetkan item terakhir dari jenis tag yang sama, walaupun setelahnya masih ada sibling dengan tag lain:

```html
<div class="article">
  <p>Paragraf pertama.</p>
  <p>Paragraf terakhir.</p>
  <footer>Info penulis</footer>
</div>
```

```css
.article p:last-of-type {
  margin-bottom: 0;
}
```

Paragraf terakhir tetap dipilih walaupun `<footer>` muncul setelahnya. Sebaliknya, `.article p:last-child` tidak cocok: paragraf itu bukan anak terakhir karena footer adalah anak terakhir. Inilah alasan `:last-of-type` berguna untuk menghapus jarak paragraf terakhir tanpa harus menambah class khusus.

> `of-type` mengacu pada nama element/tag, bukan class. Untuk item komponen berdasarkan class, pertimbangkan selector seperti `.item:last-child`, atau struktur/class eksplisit yang menyatakan peran tersebut.

## `:nth-child()` dan `:nth-of-type()`

Keduanya menerima pola urutan:

```css
li:nth-child(odd) {
  background-color: #f2f2f2;
}

p:nth-of-type(2) {
  font-weight: bold;
}
```

`:nth-child(odd)` memilih anak urutan ganjil, apa pun jenis element-nya. `:nth-of-type(2)` memilih `<p>` kedua di antara sibling `<p>`.

Nilai yang umum:

```text
odd       → 1, 3, 5, ...
even      → 2, 4, 6, ...
3         → hanya urutan ketiga
3n        → 3, 6, 9, ...
3n + 1    → 1, 4, 7, ...
-n + 3    → tiga urutan pertama
```

Mengapa `:nth-child(2)` bisa tidak memilih paragraf kedua? Karena elemen menghitung semua sibling. Jika sibling pertama adalah `<h2>`, maka `<p>` pertama berada pada posisi anak kedua.

Bentuk `:nth-child(2 of .item)` dapat memilih element kedua yang cocok dengan selector `.item`, meskipun terdapat sibling lain di antaranya. Pastikan kebutuhan targetnya jelas: nomor semua anak, nomor tag sejenis, atau nomor element yang cocok dengan selector.

## `:only-child` dan `:only-of-type`

```css
.message:only-child {
  padding: 1rem;
}

p:only-of-type {
  margin-block: 0;
}
```

`:only-child` berarti tidak ada sibling lain sama sekali. `:only-of-type` berarti tidak ada sibling lain dengan jenis tag yang sama, tetapi sibling dengan tag berbeda boleh ada.

---

# 5. Pseudo-class Form dan State

Pseudo-class ini mencocokkan kondisi control native:

```css
input:required {
  border-inline-start: 3px solid orange;
}

input:checked {
  accent-color: seagreen;
}

input:disabled {
  opacity: 0.6;
}

input:valid {
  border-color: seagreen;
}

input:invalid {
  border-color: crimson;
}
```

| Pseudo-class | Maksud |
|---|---|
| `:enabled` / `:disabled` | Control dapat digunakan / dinonaktifkan |
| `:checked` | Checkbox, radio, atau option sedang terpilih |
| `:required` / `:optional` | Control wajib / tidak wajib diisi |
| `:valid` / `:invalid` | Nilai memenuhi / tidak memenuhi constraint validasi browser |
| `:in-range` / `:out-of-range` | Nilai angka/tanggal berada / tidak berada dalam batas yang ditentukan |
| `:placeholder-shown` | Placeholder sedang tampak karena nilai control kosong |
| `:read-only` / `:read-write` | Control tidak dapat / dapat diedit |

Contoh gabungan:

```css
input:required:invalid {
  border-color: crimson;
}
```

Tanpa spasi, kedua pseudo-class itu harus cocok pada **element input yang sama**. Jangan menyampaikan error hanya dengan warna; berikan pesan dan hubungan yang dapat dikenali pengguna. State CSS tidak menggantikan validasi server.

---

# 6. Pseudo-class Logika

Pseudo-class fungsi membantu membentuk kondisi selector:

```css
/* Pilih button yang tidak disabled */
button:not(:disabled) {
  cursor: pointer;
}

/* Gabungkan beberapa selector alternatif */
:is(h1, h2, h3) {
  line-height: 1.2;
}

/* Beri style container jika memiliki gambar */
.card:has(img) {
  display: grid;
}
```

## `:not()`

Mencocokkan element yang **tidak** cocok dengan selector di dalamnya. Contoh `button:not(:disabled)` memilih button selain yang disabled.

## `:is()`

Mencocokkan jika element cocok dengan salah satu selector di dalam daftar. `:is(h1, h2, h3)` memudahkan berbagi deklarasi tanpa menulis selector berulang.

## `:where()`

Serupa dengan `:is()`, tetapi specificity-nya nol. Ini berguna untuk aturan dasar yang mudah dioverride:

```css
:where(article, aside) h2 {
  margin-block-start: 0;
}
```

## `:has()`

Mencocokkan element berdasarkan adanya descendant atau sibling yang memenuhi selector. `.card:has(img)` memilih card yang memiliki gambar. Karena ia bisa memeriksa hubungan di dalam struktur, tuliskan kondisi secukupnya agar selector tetap mudah dimengerti.

---

# 7. Pseudo-element Umum

## `::before` dan `::after`

`::before` dan `::after` menargetkan pseudo-element yang dihasilkan di dalam element yang dipilih. `::before` berada sebelum content lain di dalam element; `::after` berada sesudah content tersebut. Keduanya bukan tag HTML dan tidak membuat element baru di source HTML.

```css
.required-label::after {
  content: "→";
  margin-inline-start: 0.25em;
}
```

Cara membaca contoh: pilih element dengan class `required-label`, lalu buat content panah setelah content element tersebut. Property `content` menentukan isi pseudo-element; tanpa `content` yang sesuai, pseudo-element biasanya tidak tampil. Pada contoh, panah hanyalah ornamen visual. Gunakan terutama untuk ornamen atau penanda visual yang tidak penting. Informasi penting seperti status "wajib" harus tersedia dalam HTML dan label, agar tidak hilang saat CSS gagal dimuat atau tidak terbaca konsisten oleh teknologi bantu.

### Contoh selector universal bersama pseudo-element

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Tanda koma memisahkan tiga selector yang berdiri sendiri, bukan berarti satu element harus memenuhi ketiganya sekaligus:

* `*` memilih semua element.
* `*::before` memilih pseudo-element `before` dari setiap element.
* `*::after` memilih pseudo-element `after` dari setiap element.

Bacanya: "Terapkan `box-sizing: border-box` ke semua element dan kedua pseudo-element tersebut." Selector universal `*` saja tidak mencakup pseudo-element, sehingga keduanya ditulis terpisah pada reset ini. `box-sizing: border-box` membuat ukuran yang ditetapkan mencakup padding dan border.

Penulisan berikut juga valid:

```css
*, ::before, ::after {
  box-sizing: border-box;
}
```

Di sini `::before` dan `::after` tanpa selector element di depannya juga menargetkan pseudo-element yang sesuai pada semua element. Penulisan `*::before` dan `*::after` sering dipilih agar cakupannya lebih mudah dibaca.

## `::first-letter` dan `::first-line`

```css
.intro::first-letter {
  font-size: 2em;
  font-weight: bold;
}

.intro::first-line {
  color: navy;
}
```

Keduanya menargetkan bagian tipografi dari content, bukan child element HTML. Baris pertama bergantung pada ukuran viewport dan font, jadi element yang mendapat style dapat berubah saat layout berubah.

## `::selection`

Menata bagian teks yang sedang dipilih pengguna:

```css
::selection {
  color: white;
  background-color: royalblue;
}
```

Jaga kontras agar teks pilihan tetap terbaca.

## `::placeholder`

Menata teks placeholder pada control:

```css
input::placeholder {
  color: #666;
  opacity: 1;
}
```

Placeholder adalah contoh atau petunjuk sementara di dalam input; ia menghilang saat pengguna mengetik. Karena bukan label yang menetap, jangan menggunakannya sebagai pengganti `<label>`.

## `::marker`

Menata marker pada item list:

```css
li::marker {
  color: tomato;
}
```

Marker adalah bullet atau nomor list. Mengatur tampilannya tidak mengubah makna urutan list; gunakan `<ol>` saat urutan memiliki makna dan `<ul>` saat tidak.

---

# 8. Pseudo-class vs Attribute Selector

Keduanya dapat tampak seperti kondisi, tetapi sumber informasinya berbeda.

```css
input[required] {
  /* Attribute required memang hadir di HTML */
}

input:required {
  /* Browser mengenali control sebagai wajib diisi */
}

input[disabled] {
  /* Attribute disabled hadir */
}

input:disabled {
  /* Control berada dalam state disabled */
}
```

Attribute selector ditulis dengan kurung siku dan memeriksa attribute/nilai yang ada di markup atau DOM. Pseudo-class memakai titik dua dan mencocokkan state atau relasi yang dikenali CSS. Untuk kasus boolean tertentu keduanya sering menghasilkan target yang sama, tetapi bukan jenis syntax yang sama dan tidak selalu dapat saling menggantikan.

---

# 9. Specificity Pseudo-selector

Specificity adalah bobot selector saat browser menentukan declaration mana yang menang. Secara umum:

* Pseudo-class seperti `:hover`, `:last-of-type`, dan `:focus-visible` memiliki bobot setara selector class.
* Pseudo-element seperti `::before` dan `::first-letter` memiliki bobot setara selector element.
* Argumen selector pada `:is()`, `:not()`, dan `:has()` menentukan bobotnya; pseudo-class fungsi itu sendiri tidak menambahkan bobot class terpisah.
* `:where()` dan seluruh argumennya memiliki specificity nol.

Contoh:

```css
a:hover {
  color: crimson;
}
```

`a:hover` lebih spesifik daripada `a` saja karena menambahkan kondisi pseudo-class. Hindari terus menambah selector yang panjang hanya untuk mengalahkan aturan lain; sederhanakan aturan dan pahami sumber specificity-nya.

---

# 10. Kesalahan Umum

## Menganggap `:last-of-type` berarti “terakhir dari class ini”

```css
.card:last-of-type { ... }
```

Ini berarti element `.card` yang juga merupakan element terakhir dari **jenis tag-nya**, bukan card terakhir dalam kumpulan class `.card`. Jika ada `<article class="card">` diikuti `<footer>`, article itu tetap `:last-of-type` untuk tag `article`, walaupun bukan anak terakhir.

## Memakai `::before` untuk content penting

Teks penting yang hanya dibuat lewat `content` dapat hilang dari alur informasi, misalnya saat CSS tidak tersedia. Letakkan informasi dan label yang bermakna di HTML.

## Menggunakan `:hover` sebagai satu-satunya feedback

Hover tidak mewakili fokus keyboard dan tidak selalu ada pada layar sentuh. Sediakan state `:focus-visible` dan jangan menyembunyikan informasi penting hanya di hover.

## Mengira pseudo-class adalah attribute

`:checked` tidak berarti perlu menambahkan `checked` sebagai nama pseudo attribute. `:checked` adalah selector yang mencocokkan state control terpilih; `checked` pada HTML adalah attribute yang dapat menentukan state awal checkbox atau radio.

---

# 11. Cheat Sheet

| Selector | Maksud |
|---|---|
| `:hover` | Pointer berada di atas element |
| `:focus` / `:focus-visible` | Element menerima fokus / fokus yang perlu ditonjolkan |
| `:active` | Element sedang diaktifkan |
| `:first-child` / `:last-child` | Anak pertama / terakhir dari jenis apa pun |
| `:first-of-type` / `:last-of-type` | Element pertama / terakhir dari jenis tag yang sama |
| `:nth-child()` | Anak pada pola urutan tertentu |
| `:nth-of-type()` | Element dengan tag tertentu pada pola urutan |
| `:checked` | Control pilihan sedang terpilih |
| `:disabled` / `:enabled` | Control nonaktif / aktif |
| `:required` / `:optional` | Control wajib / tidak wajib |
| `:valid` / `:invalid` | Nilai memenuhi / tidak memenuhi validasi browser |
| `:not()` | Tidak cocok dengan selector yang diberikan |
| `:is()` | Cocok dengan salah satu selector yang diberikan |
| `:where()` | Seperti `:is()`, dengan specificity nol |
| `:has()` | Cocok berdasarkan element terkait di dalam struktur |
| `::before` / `::after` | Bagian pseudo sebelum / sesudah content |
| `::first-letter` / `::first-line` | Huruf pertama / baris pertama |
| `::selection` | Teks yang sedang dipilih |
| `::placeholder` | Teks placeholder input |
| `::marker` | Bullet atau nomor list |

---

# 12. Cara Menalar Selector

Saat melihat selector yang belum dikenal, uraikan dari kiri ke kanan:

```css
article p:last-of-type::first-letter
```

1. `article` membatasi pencarian pada element `<article>`.
2. Spasi berarti cari descendant.
3. `p` memilih descendant berupa paragraf.
4. `:last-of-type` memilih paragraf terakhir di antara sibling bertag `<p>` yang sama.
5. `::first-letter` menargetkan huruf pertama pada paragraf terpilih.

Jangan hafalkan nama saja. Tanyakan:

1. Apakah ini memilih **element**, state/posisi element, atau bagian element?
2. Kondisinya dihitung relatif terhadap element/parent yang mana?
3. Apakah yang dihitung semua sibling, jenis tag yang sama, atau hasil selector tertentu?
4. Apakah style ini hanya visual, atau menyampaikan informasi penting yang harus ada di HTML?
