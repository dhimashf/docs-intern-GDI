# Materi HTML Lengkap

Materi gabungan dari seluruh bab HTML; file sumber per bab tetap disimpan.

## Daftar Isi

1. [HTML — Elements and Structure](#html-bab-1)
   - [Image loading dan atribut pemuatan](#html-image-loading-attributes)
   - [Image responsif: `srcset`, `sizes`, dan `<picture>`](#html-responsive-images)
   - [`target` dan `rel="noreferrer"`](#html-target-rel-noreferrer)
2. [HTML — Tables](#html-bab-2)
3. [HTML — Forms & Client-Side Validation](#html-bab-3)
4. [HTML — Semantic HTML](#html-bab-4)
   - [`<blockquote>` dan kutipan inline `<q>`](#html-blockquote)
5. [HTML — Accessibility](#html-bab-5)

---

<a id="html-bab-1"></a>

<!-- Sumber: HTML\1.HTML-Element and structure.md -->

# HTML — Elements and Structure

> **HTML (HyperText Markup Language)** digunakan untuk menentukan **struktur dan makna (meaning)** dari content pada sebuah webpage.
>
> Mental model utama:
>
> **HTML = Structure + Meaning**
> **CSS = Appearance**
> **JavaScript = Behavior**

---

# 1. Apa Itu HTML?

HTML adalah **markup language**, bukan programming language. Disebut markup language karena kita menandai content dengan elemen agar browser memahami peran dan susunannya. HTML sendiri tidak menjalankan logika seperti perulangan atau perhitungan; untuk perilaku seperti itu kita menggunakan JavaScript.

HTML digunakan untuk memberi tahu browser:

* ini adalah heading
* ini adalah paragraph
* ini adalah image
* ini adalah list
* ini adalah video
* ini adalah bagian navigasi
* dan sebagainya

Contoh:

```html
<h1>My Portfolio</h1>

<p>
  Saya adalah mahasiswa Teknik Informatika.
</p>
```

Browser membaca dan mengurai (mem-parsing) struktur tersebut, lalu membentuk representasi dokumen yang disebut **DOM (Document Object Model)**. Bayangkan DOM sebagai pohon objek: setiap elemen menjadi bagian yang dapat dikenali dan diakses browser maupun JavaScript.

Secara sederhana:

```text
HTML
  ↓
Browser membaca / parsing
  ↓
DOM Tree
  ↓
Browser menampilkan webpage
```

### Fundamental Insight

Jangan berpikir:

> `<h1>` digunakan karena tampilannya besar.

Lebih tepat:

> `<h1>` digunakan karena content tersebut adalah **heading utama**.

Ukuran besar hanyalah **default styling** dari browser.

CSS nantinya bisa mengubah tampilannya:

```css
h1 {
  font-size: 20px;
}
```

Walaupun dibuat kecil, element tersebut tetap merupakan `<h1>`.

Jadi:

```text
HTML → "Apa ini?"
CSS  → "Tampilannya bagaimana?"
JS   → "Bisa melakukan apa?"
```

---

# 2. File HTML

File HTML biasanya menggunakan extension:

```text
.html
```

Contoh:

```text
index.html
about.html
contact.html
```

Extension membantu sistem dan browser mengenali jenis dokumen.

Contoh:

```text
index.html
```

berarti file tersebut berisi dokumen HTML.

---

# 3. HTML Element

HTML dibangun dari **elements**.

Contoh:

```html
<p>Hello World</p>
```

Satu element tersebut terdiri dari:

```text
<p>          → Opening tag
Hello World  → Content
</p>         → Closing tag
```

### Tag vs Element

Ini sering tertukar.

```text
Tag
→ penanda/syntax HTML

Element
→ keseluruhan unit HTML
```

Contoh:

```html
<p>Hello World</p>
```

```text
<p>                  → opening tag
</p>                 → closing tag

<p>Hello World</p>   → element
```

### Mental Model

Anggap tag seperti **penanda struktur**.

```html
<p>Belajar HTML</p>
```

Artinya:

> "Content `Belajar HTML` adalah sebuah paragraph."

---

# 4. Opening Tag dan Closing Tag

Sebagian besar HTML element memiliki:

```html
<element>content</element>
```

Contoh:

```html
<h1>Judul</h1>
<p>Paragraf</p>
<strong>Penting</strong>
```

Strukturnya:

```text
Opening Tag
     ↓
<h1>Judul</h1>
            ↑
       Closing Tag
```

Closing tag memiliki `/`.

```html
<h1>
```

vs

```html
</h1>
```

---

# 5. Void Elements

Tidak semua element memiliki closing tag.

Beberapa element memang tidak dirancang untuk membungkus content.

Contoh:

```html
<img src="photo.jpg">

<br>

<hr>

<input>
```

Element seperti ini disebut **void element**.

Tidak perlu:

```html
<img></img>
```

atau:

```html
<br></br>
```

### Contoh

```html
<p>Nama saya Dhimas</p>

<br>

<p>Saya belajar HTML</p>
```

`<br>` hanya memberikan line break sehingga tidak memiliki content yang perlu dibungkus.

### Cheat Sheet

| Element    | Closing Tag? | Fungsi            |
| ---------- | -----------: | ----------------- |
| `<p>`      |            ✅ | Paragraph         |
| `<h1>`     |            ✅ | Heading           |
| `<div>`    |            ✅ | Container         |
| `<span>`   |            ✅ | Inline container  |
| `<strong>` |            ✅ | Strong importance |
| `<img>`    |            ❌ | Image             |
| `<br>`     |            ❌ | Line break        |
| `<hr>`     |            ❌ | Thematic break    |
| `<input>`  |            ❌ | Input field       |

---

# 6. Nesting — Element di Dalam Element

HTML element dapat berada di dalam element lain.

Contoh:

```html
<p>
  Saya sedang belajar
  <strong>HTML</strong>.
</p>
```

Strukturnya:

```text
<p>
│
├── "Saya sedang belajar "
│
├── <strong>
│      └── "HTML"
│
└── "."
```

`<strong>` berada di dalam `<p>`.

Ini disebut **nesting**.

---

# 7. Parent, Child, dan Sibling

Nesting menghasilkan hubungan antar-element.

Contoh:

```html
<div>
  <h1>Portfolio</h1>
  <p>Software Engineer</p>
</div>
```

Strukturnya:

```text
div
├── h1
└── p
```

Maka:

```text
<div>
→ Parent

<h1>
→ Child dari div

<p>
→ Child dari div

<h1> dan <p>
→ Sibling
```

### Mental Model

```text
Parent
│
├── Child
│
└── Child
```

Konsep ini sangat penting karena nanti digunakan ketika bekerja dengan:

* CSS
* JavaScript DOM
* event
* layout
* component
* framework seperti React

---

# 8. Struktur Dasar Dokumen HTML

Dokumen HTML biasanya memiliki struktur dasar:

```html
<!DOCTYPE html>

<html lang="id">
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

Strukturnya:

```text
HTML Document
│
├── <!DOCTYPE html>
│
└── <html>
    │
    ├── <head>
    │
    └── <body>
```

Pada contoh, `lang="id"` adalah atribut yang menyatakan bahasa utama dokumen (Indonesia). Pilih kode bahasa sesuai isi halaman; ini membantu teknologi bantu dan alat pemeriksa ejaan, tetapi tidak menerjemahkan content.

---

# 9. `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

Digunakan untuk memberi tahu browser bahwa dokumen menggunakan **HTML modern / HTML5**.

### Penting

`DOCTYPE` bukan HTML element biasa.

Tidak seperti:

```html
<p>...</p>
```

DOCTYPE adalah **declaration**.

> **Catatan:** Deklarasi ini membantu browser menampilkan dokumen dalam *standards mode* (mengikuti aturan HTML/CSS modern), bukan mode kompatibilitas lama. Tulis `<!DOCTYPE html>` di awal dokumen; ini bukan tag pembuka yang perlu ditutup.

### Mental Model

Anggap:

```html
<!DOCTYPE html>
```

sebagai:

> "Browser, dokumen ini menggunakan standar HTML."

---

# 10. `<html>`

```html
<html>
  ...
</html>
```

`<html>` merupakan **root element** dari dokumen HTML.

Semua content HTML berada di dalamnya.

Contoh:

```html
<html>
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

Mental model:

```text
<html>
│
├── <head>
│
└── <body>
```

---

# 11. `<head>` vs `<body>`

Ini salah satu perbedaan paling penting.

## `<head>`

```html
<head>
  ...
</head>
```

Berisi informasi tentang dokumen dan resource yang dibutuhkan browser.

Contohnya:

```html
<head>
  <title>My Portfolio</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
```

Di sini, `<title>` menjadi judul dokumen yang biasanya tampil pada tab browser. `charset="UTF-8"` memberi tahu browser cara membaca karakter teks, termasuk huruf dan simbol di luar alfabet dasar. Pada `<link>`, `rel="stylesheet"` menyatakan bahwa file yang dirujuk adalah stylesheet, sedangkan `href` menunjukkan lokasinya.

Biasanya content di `<head>` **tidak menjadi content utama yang terlihat pada halaman**.

---

## `<body>`

```html
<body>
  ...
</body>
```

Berisi content utama webpage.

Contoh:

```html
<body>
  <h1>My Portfolio</h1>

  <p>
    Welcome to my website.
  </p>
</body>
```

Content yang ditampilkan pada webpage biasanya berada di `<body>`.

### Perbedaan

| `<head>`                  | `<body>`        |
| ------------------------- | --------------- |
| Informasi tentang dokumen | Content halaman |
| Metadata                  | Heading         |
| CSS                       | Paragraph       |
| Title                     | Image           |
| Resource                  | Button          |
| Konfigurasi dokumen       | Video           |

---

# 12. Heading `<h1>` — `<h6>`

HTML menyediakan enam level heading:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Urutannya:

```text
h1
 ↓
h2
 ↓
h3
 ↓
h4
 ↓
h5
 ↓
h6
```

Semakin besar angka, semakin rendah level heading-nya.

### Jangan hanya berpikir tentang ukuran

Kesalahan umum:

> `<h1>` = tulisan besar
> `<h6>` = tulisan kecil

Yang lebih tepat:

> Heading menunjukkan **hierarki informasi**.

Contoh:

```html
<h1>My Portfolio</h1>

<h2>Projects</h2>

<h3>MindHarbor</h3>

<h3>Warung UMKM Riau</h3>

<h2>Skills</h2>
```

Strukturnya:

```text
h1 → My Portfolio
│
├── h2 → Projects
│   │
│   ├── h3 → MindHarbor
│   └── h3 → Warung UMKM Riau
│
└── h2 → Skills
```

### Fundamental Insight

HTML bukan hanya membuat tampilan.

HTML juga memberi tahu browser dan teknologi lain:

> "Bagaimana informasi ini terstruktur?"

Ini penting untuk:

* accessibility
* screen reader
* SEO
* maintainability
* navigasi dokumen

---

# 13. `<p>` — Paragraph

Digunakan untuk paragraph.

```html
<p>
  Saya sedang belajar HTML.
</p>
```

Browser memahami bahwa content tersebut adalah sebuah paragraph.

---

# 14. `<div>` — Generic Block Container

```html
<div>
  ...
</div>
```

`<div>` digunakan sebagai **container generik**.

Contoh:

```html
<div>
  <h2>Profile</h2>
  <p>Software Engineer</p>
</div>
```

`div` sendiri tidak memberikan makna khusus terhadap content.

Mental model:

> `<div>` = "Saya butuh container untuk mengelompokkan sesuatu."

Sering digunakan untuk:

* grouping
* layout
* styling
* JavaScript targeting

---

# 15. `<span>` — Generic Inline Container

```html
<span>...</span>
```

`span` juga merupakan container generik, tetapi biasanya digunakan untuk bagian kecil dari content dalam satu baris.

Contoh:

```html
<p>
  Saya belajar
  <span>HTML</span>.
</p>
```

### `<div>` vs `<span>`

| `<div>`                     | `<span>`                            |
| --------------------------- | ----------------------------------- |
| Generic container           | Generic inline container            |
| Umumnya block-level         | Umumnya inline                      |
| Cocok untuk kelompok/bagian | Cocok untuk bagian kecil dalam text |

Mental model:

```text
div
→ kelompok besar / section kecil

span
→ potongan kecil di dalam content
```

---

# 16. `<em>` — Emphasis

Digunakan untuk memberikan **emphasis** pada content.

```html
<p>
  Ini sangat <em>penting</em>.
</p>
```

Secara default browser biasanya membuatnya italic.

Namun fungsi utamanya bukan:

> "Membuat tulisan miring."

Fungsi utamanya:

> "Content ini mendapatkan emphasis."

---

# 17. `<strong>` — Strong Importance

Digunakan untuk menunjukkan bahwa content memiliki **strong importance**.

```html
<p>
  Jangan <strong>hapus database</strong>.
</p>
```

Browser biasanya menampilkan text dalam bentuk bold.

Tetapi maknanya bukan:

> "Buat tulisan tebal."

Melainkan:

> "Content ini penting."

### `<strong>` vs `<em>`

| Element    | Makna             |
| ---------- | ----------------- |
| `<em>`     | Emphasis          |
| `<strong>` | Strong importance |

Jadi jangan memilih berdasarkan tampilan:

```text
em      → bukan sekadar italic
strong  → bukan sekadar bold
```

---

# 18. `<br>` — Line Break

```html
<br>
```

Digunakan untuk membuat line break.

Contoh:

```html
<p>
  Hello<br>
  World
</p>
```

Hasilnya:

```text
Hello
World
```

### Kapan digunakan?

Cocok untuk line break yang memang merupakan bagian dari content.

Misalnya alamat:

```html
<p>
  Jl. Contoh No. 10<br>
  Pekanbaru, Riau
</p>
```

Jangan menggunakan `<br>` sebagai alat utama untuk mengatur layout.

Untuk layout gunakan:

```text
CSS
```

---

# 19. Ordered List `<ol>`

Digunakan untuk list yang memiliki urutan.

```html
<ol>
  <li>Install Node.js</li>
  <li>Install VS Code</li>
  <li>Start coding</li>
</ol>
```

Hasil konsepnya:

```text
1. Install Node.js
2. Install VS Code
3. Start coding
```

---

# 20. Unordered List `<ul>`

Digunakan untuk list yang **tidak membutuhkan urutan tertentu**.

```html
<ul>
  <li>JavaScript</li>
  <li>Node.js</li>
  <li>PostgreSQL</li>
</ul>
```

Konsepnya:

```text
• JavaScript
• Node.js
• PostgreSQL
```

---

# 21. `<li>` — List Item

`<li>` digunakan untuk setiap item dalam list.

Biasanya berada di dalam:

```html
<ol>
```

atau:

```html
<ul>
```

Contoh:

```html
<ul>
  <li>JavaScript</li>
  <li>Python</li>
</ul>
```

### Struktur

```text
<ul>
│
├── <li>
│
└── <li>
```

---

# 22. `<ol>` vs `<ul>`

| Element | Digunakan ketika      |
| ------- | --------------------- |
| `<ol>`  | Urutan memiliki makna |
| `<ul>`  | Urutan tidak penting  |
| `<li>`  | Item di dalam list    |

Contoh `<ol>`:

```html
<ol>
  <li>Login</li>
  <li>Pilih produk</li>
  <li>Checkout</li>
</ol>
```

Urutan penting karena prosesnya harus dilakukan berurutan.

Contoh `<ul>`:

```html
<ul>
  <li>JavaScript</li>
  <li>Python</li>
  <li>Go</li>
</ul>
```

Urutan bahasa programming tidak memiliki makna khusus.

---

# 23. `<img>` — Image

Digunakan untuk menampilkan image.

```html
<img src="profile.jpg">
```

`img` merupakan **void element**, sehingga tidak memiliki closing tag.

---

## `src`

`src` berarti **source**.

```html
<img src="profile.jpg">
```

Browser membaca:

> "Ambil image dari lokasi `profile.jpg`."

Contoh URL:

```html
<img src="https://example.com/photo.jpg">
```

---

## `alt`

Sebaiknya image memiliki `alt`.

Isi `alt` dengan informasi yang penting dari gambar, bukan sekadar kata "gambar". Jika gambar hanya hiasan dan tidak menambah informasi, gunakan `alt=""` agar screen reader melewatinya.

```html
<img
  src="profile.jpg"
  alt="Foto profil Dhimas"
>
```

`alt` memberikan alternatif text yang mendeskripsikan image.

Bermanfaat ketika:

* image gagal dimuat
* screen reader membaca halaman
* image perlu dideskripsikan secara tekstual

<a id="html-image-loading-attributes"></a>

## Attribute Pemuatan Image

Beberapa attribute memberi browser petunjuk tentang kapan image dimuat dan bagaimana image diproses. Ini adalah **attribute HTML**, bukan properti CSS.

### `loading`

`loading` mengatur strategi pemuatan resource:

* `loading="lazy"` menunda pemuatan image sampai image diperkirakan akan mendekati area layar. Gunakan untuk image di bagian bawah halaman agar tidak membebani pemuatan awal.
* `loading="eager"` meminta image dimuat segera. Ini adalah perilaku default jika `loading` tidak ditulis, dan cocok untuk image yang langsung terlihat.

```html
<img
  src="article-photo.jpg"
  alt="Pemandangan pantai saat matahari terbenam"
  loading="lazy"
>
```

Jangan gunakan `lazy` untuk image utama yang langsung terlihat saat halaman dibuka; penundaan dapat membuatnya terlambat tampil. `loading` adalah petunjuk kepada browser, bukan jaminan waktu pemuatan yang persis.

`loading` juga berlaku pada `<iframe>`. Misalnya, embed peta atau video yang jauh di bawah halaman dapat ditunda:

```html
<iframe
  src="https://example.com/embed"
  title="Peta lokasi kantor"
  loading="lazy"
></iframe>
```

Berikan `title` yang menjelaskan isi iframe agar pengguna screen reader mengetahui konten embed tersebut.

### `decoding`

`decoding` memberi petunjuk tentang kapan browser mendekode image sebelum menampilkannya:

* `async` mengizinkan browser mendekode image tanpa menahan rendering konten lain.
* `sync` meminta image didekode secara sinkron bersama rendering berikutnya.
* `auto` menyerahkan pilihan kepada browser; ini adalah nilai default.

```html
<img
  src="article-photo.jpg"
  alt="Pemandangan pantai saat matahari terbenam"
  decoding="async"
>
```

### `fetchpriority`

`fetchpriority` memberi petunjuk prioritas pengambilan resource:

* `high` untuk resource penting yang perlu didahulukan, misalnya image hero utama yang terlihat sejak awal.
* `low` untuk resource yang kurang penting.
* `auto` menyerahkan prioritas kepada browser dan merupakan nilai default.

```html
<img
  src="hero.jpg"
  alt="Pegunungan saat matahari terbit"
  fetchpriority="high"
>
```

Gunakan `high` secara selektif pada image penting; menaikkan prioritas banyak image sekaligus mengurangi manfaat petunjuk ini.

### `width` dan `height`

`width` dan `height` menyatakan dimensi intrinsik image dalam piksel. Browser dapat memakai rasio dimensinya untuk menyediakan ruang sebelum file selesai dimuat, sehingga tata letak tidak banyak bergeser.

```html
<img
  src="article-photo.jpg"
  alt="Pemandangan pantai saat matahari terbenam"
  width="1200"
  height="800"
  loading="lazy"
>
```

Nilai tersebut sebaiknya sesuai dengan dimensi atau rasio asli image. Ukuran tampilan tetap dapat disesuaikan dengan CSS tanpa mengubah rasio:

```css
img {
  max-width: 100%;
  height: auto;
}
```

<a id="html-responsive-images"></a>

## Image Responsif: `srcset`, `sizes`, dan `<picture>`

Image responsif memungkinkan browser memilih file gambar yang sesuai dengan ukuran tampilan atau kondisi perangkat. Ini dapat menghindari pengiriman file besar ke layar kecil, atau gambar yang kurang tajam ke layar beresolusi tinggi.

### `srcset` dan `sizes`

`srcset` mencantumkan beberapa kandidat file gambar. Dengan **width descriptor** seperti `480w`, `sizes` memberi tahu browser perkiraan lebar image yang akan ditampilkan pada berbagai kondisi. Browser menggunakan informasi itu bersama ukuran viewport dan kepadatan layar untuk memilih kandidat.

```html
<img
  src="photo-800.jpg"
  srcset="photo-480.jpg 480w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Pemandangan pegunungan"
  width="1200"
  height="800"
  loading="lazy"
>
```

`100vw` berarti image diperkirakan selebar viewport pada layar hingga 600px; di atas ukuran itu, image diperkirakan selebar 800px. Kandidat pada `srcset` harus menggambarkan file dengan lebar intrinsik yang sesuai dengan descriptor-nya. `src` tetap menjadi fallback.

Untuk kandidat yang dibedakan berdasarkan kepadatan pixel, `srcset` juga dapat menggunakan descriptor `1x`, `2x`, dan seterusnya. Jangan mencampur descriptor `w` dan `x` dalam satu nilai `srcset`.

### `<picture>` dan `<source>`

Gunakan `<picture>` ketika browser perlu memilih format file atau komposisi/crop gambar yang berbeda berdasarkan kondisi. Setiap `<source>` menyediakan pilihan; `<img>` di dalamnya tetap menjadi fallback sekaligus tempat menulis `alt`, `width`, dan `height`.

```html
<picture>
  <source
    srcset="landscape.avif"
    type="image/avif"
  >
  <source
    srcset="landscape.webp"
    type="image/webp"
  >
  <img
    src="landscape.jpg"
    alt="Pegunungan di bawah langit senja"
    width="1200"
    height="800"
    loading="lazy"
  >
</picture>
```

Browser memilih source pertama yang didukung; jika tidak ada yang cocok, browser memakai `src` pada `<img>`. Attribute `media` pada `<source>` dapat dipakai untuk memilih gambar berbeda pada kondisi media tertentu, misalnya crop portrait untuk layar sempit. Jangan menambahkan `alt` ke `<source>`—teks alternatif berada pada `<img>`.

### Fundamental Insight

`src` menjawab:

> "Image-nya diambil dari mana?"

`alt` menjawab:

> "Apa isi/makna image tersebut?"

---

# 24. `<video>`

HTML juga dapat digunakan untuk menampilkan video.

Contoh:

```html
<video src="video.mp4"></video>
```

Biasanya dapat ditambahkan attribute:

```html
<video
  src="video.mp4"
  controls
>
</video>
```

`controls` memberikan kontrol video seperti:

* play
* pause
* volume
* progress

### Mental Model

```text
<img>
→ browser menampilkan image dari source

<video>
→ browser menampilkan video dari source
```

HTML tidak "membuat" file image atau video.

HTML memberi tahu browser:

> "Gunakan resource ini di bagian tersebut."

---

# 25. Attribute

Element dapat memiliki **attributes**.

Contoh:

```html
<img
  src="profile.jpg"
  alt="Foto profil"
>
```

Strukturnya:

```text
<img
  ├── src
  └── alt
>
```

Attribute memberikan informasi tambahan kepada element.

Format umum:

```html
<element attribute="value">
```

Contoh:

```html
<img src="profile.jpg">
```

```text
attribute = src
value     = profile.jpg
```

---

# 26. Attribute Tidak Sama dengan Element

Contoh:

```html
<img src="profile.jpg" alt="Profile">
```

Di sini:

```text
img
→ element

src
→ attribute

profile.jpg
→ attribute value

alt
→ attribute

Profile
→ attribute value
```

Jangan menyebut:

> "`src` adalah element."

Yang benar:

> "`src` adalah attribute dari `<img>`."

---

# 27. Common Attributes

Beberapa attribute yang sering ditemui:

| Attribute | Fungsi               | Contoh              |
| --------- | -------------------- | ------------------- |
| `src`     | Lokasi resource      | `src="image.jpg"`   |
| `href`    | Tujuan link/resource | `href="about.html"` |
| `alt`     | Deskripsi image      | `alt="Profile"`     |
| `class`   | Memberi class        | `class="card"`      |
| `id`      | Identifier unik      | `id="profile"`      |
| `name`    | Nama field form      | `name="email"`      |
| `for`     | Menghubungkan label  | `for="email"`       |
| `title`   | Informasi tambahan   | `title="More info"` |

Contohnya, `href` biasanya dipakai pada elemen tautan `<a>` untuk menentukan tujuan saat tautan dipilih:

```html
<a href="about.html">Tentang saya</a>
```

Teks di antara tag adalah label yang dilihat pengguna; nilai `href` adalah alamat tujuan. Untuk menuju bagian halaman yang sama, nilai fragment pada `href` harus cocok dengan `id` tujuan pada dokumen yang sama:

```html
<a href="#contact">Hubungi saya</a>

<section id="contact">
  <h2>Hubungi saya</h2>
</section>
```

`href="#contact"` mengarah ke element dengan `id="contact"`. Pastikan `id` tujuan ada dan unik di halaman.

<a id="html-target-rel-noreferrer"></a>

### `target` dan `rel` pada tautan

`target="_blank"` meminta browser membuka tujuan tautan di konteks penjelajahan baru, biasanya tab baru. Pada tautan eksternal, `rel="noreferrer"` mencegah browser mengirim alamat halaman asal melalui header `Referer`. Ini membantu menjaga privasi pengguna. `noreferrer` juga memiliki efek `noopener`: halaman yang dibuka tidak mendapat akses melalui `window.opener` ke halaman asal.

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noreferrer"
>
  Buka situs contoh
</a>
```

Jika hanya perlu memutus akses `window.opener` tanpa menyembunyikan informasi referrer, gunakan `rel="noopener"`. `noopener` sendiri tidak menyembunyikan referrer. Untuk dukungan browser modern, `target="_blank"` secara default juga berperilaku seperti `noopener`, tetapi menulis `rel` secara eksplisit membuat maksud keamanan dan privasi lebih jelas.

Jangan samakan `href` dengan `src`: `href` menyatakan hubungan atau tujuan yang dapat diikuti, seperti halaman tujuan `<a>` atau stylesheet yang dirujuk `<link>`. `src` menyatakan resource yang disematkan atau dimuat oleh element, seperti gambar di `<img>`. Jadi, link ke halaman lain biasanya memakai `<a href>`, sedangkan gambar yang tampil di halaman memakai `<img src>`.

`alt` juga berbeda dari `title`: `alt` pada gambar menjadi alternatif tekstual bagi informasi gambar, terutama jika gambar tidak tersedia atau tidak dapat dilihat. `title` adalah informasi tambahan yang biasanya muncul sebagai tooltip saat pointer diarahkan; dukungan keyboard dan screen reader tidak selalu konsisten. Jadi, jangan menaruh informasi penting gambar hanya di `title` atau memakai `title` sebagai pengganti `alt`.

Attribute boolean seperti `required`, `disabled`, dan `checked` aktif karena hadir pada element:

```html
<input type="email" required>
```

Menulis `required="false"` tetap membuat attribute itu hadir, sehingga control tetap required. Untuk menonaktifkannya, attribute harus dihilangkan atau diubah melalui DOM. Ini berbeda dari attribute string biasa yang nilainya memang dibaca, seperti `id="email"`.

---

# 28. `class` vs `id`

Keduanya sering digunakan untuk targeting element.

### `class`

```html
<div class="card">
```

Satu class dapat digunakan oleh banyak element.

```html
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>
```

Mental model:

```text
class
→ kelompok / kategori
```

---

### `id`

```html
<div id="profile">
```

Digunakan untuk menandai elemen tertentu dalam dokumen.

```html
<div id="profile">
```

Mental model:

```text
id
→ identitas spesifik
```

### Perbedaan

| `class`                       | `id`                              |
| ----------------------------- | --------------------------------- |
| Bisa digunakan pada banyak element | Harus unik dalam satu dokumen |
| Menandai kategori atau peran yang dapat dipakai ulang | Menandai satu element spesifik |
| Banyak class boleh ada pada satu element | Satu element hanya boleh punya satu nilai `id` |
| Utama untuk style dan kategori komponen | Berguna untuk target link, label, atau referensi unik |

---

### Kapan memilih `class`?

Gunakan `class` saat aturan atau kategori mungkin berlaku pada beberapa element, atau saat element memiliki beberapa peran styling:

```html
<article class="card">...</article>
<article class="card card--featured">...</article>
```

Nilai class adalah daftar token yang dipisahkan spasi, bukan satu nama gabungan. Pada contoh kedua, element memiliki dua class: `card` dan `card--featured`. CSS dapat memakai `.card` untuk aturan bersama dan `.card--featured` untuk variasi. Ini menghindari duplikasi dan memungkinkan style dipakai kembali.

### Kapan memilih `id`?

Gunakan `id` ketika perlu satu pengenal stabil dan unik di halaman—misalnya tujuan fragment link atau target referensi:

```html
<a href="#shipping">Info pengiriman</a>
<section id="shipping">
  <h2>Info pengiriman</h2>
</section>
```

`id` juga menjadi target hubungan seperti `<label for="email">` atau `aria-controls="filters"`. Jangan memberi banyak element `id` yang sama: referensi tidak lagi menunjuk target unik dengan andal. Untuk elemen berulang seperti card atau tombol, gunakan `class`, bukan membuat ID berbeda hanya demi styling.

### `for` vs `id`

`for` bukan pengenal element dan tidak memberi nama data form. Pada `<label>`, `for` adalah referensi yang nilainya harus sama persis dengan `id` control yang dilabeli:

```html
<label for="email">Alamat email</label>
<input id="email" name="email" type="email">
```

Mengapa ada dua atribut? `id` menandai element target; `for` menyatakan hubungan dari label ke target itu. Klik teks label akan memfokuskan control dan hubungan tersebut membantu teknologi bantu menemukan nama control. Alternatifnya, label dapat membungkus control secara langsung:

```html
<label>
  Alamat email
  <input name="email" type="email">
</label>
```

Dalam bentuk pembungkus, hubungan label dibuat oleh nesting sehingga `for` dan `id` tidak wajib untuk hubungan tersebut. Namun, `id` masih mungkin dibutuhkan untuk referensi lain.

### `id` vs `name` pada form

```html
<label for="city">Kota</label>
<input id="city" name="shipping_city" value="Bandung">
```

`id="city"` dipakai di dokumen untuk mengidentifikasi control dan menjadi target `for`. `name="shipping_city"` menjadi key ketika browser membangun data form, sedangkan `value="Bandung"` adalah nilai yang dikirim untuk key itu. Mengubah `id` tidak otomatis mengubah nama field yang diterima server; mengubah `name` dapat mengubah kontrak data yang diterima server tetapi tidak memutus label jika `id` tetap sama.

# 29. HTML Comments

Comment digunakan untuk memberikan catatan pada source code.

```html
<!-- Ini adalah komentar -->
```

Browser tidak menampilkan comment sebagai content halaman.

Contoh:

```html
<!-- Profile Section -->

<section>
  <h2>Profile</h2>
</section>
```

Comment berguna untuk:

* dokumentasi
* penjelasan
* menandai bagian kode
* debugging sementara

---

# 30. Element Cheat Sheet

| Element       | Fungsi            | Closing Tag |
| ------------- | ----------------- | ----------: |
| `<html>`      | Root document     |           ✅ |
| `<head>`      | Metadata/resource |           ✅ |
| `<body>`      | Content utama     |           ✅ |
| `<h1>`–`<h6>` | Heading           |           ✅ |
| `<p>`         | Paragraph         |           ✅ |
| `<div>`       | Generic container |           ✅ |
| `<span>`      | Inline container  |           ✅ |
| `<em>`        | Emphasis          |           ✅ |
| `<strong>`    | Strong importance |           ✅ |
| `<ol>`        | Ordered list      |           ✅ |
| `<ul>`        | Unordered list    |           ✅ |
| `<li>`        | List item         |           ✅ |
| `<video>`     | Video             |           ✅ |
| `<img>`       | Image             |           ❌ |
| `<br>`        | Line break        |           ❌ |
| `<hr>`        | Thematic break    |           ❌ |
| `<input>`     | Input             |           ❌ |

---

# 31. Perbedaan yang Wajib Dipahami

## Element vs Tag

```text
Tag
→ <p>

Element
→ <p>Hello</p>
```

---

## Element vs Attribute

```html
<img src="photo.jpg">
```

```text
img
→ element

src
→ attribute
```

---

## `<head>` vs `<body>`

```text
head
→ informasi tentang dokumen

body
→ content halaman
```

---

## `<div>` vs `<span>`

```text
div
→ generic container, biasanya block

span
→ generic inline container
```

---

## `<ol>` vs `<ul>`

```text
ol
→ urutan penting

ul
→ urutan tidak penting
```

---

## `<em>` vs `<strong>`

```text
em
→ emphasis

strong
→ strong importance
```

---

## `class` vs `id`

```text
class
→ kelompok

id
→ identifier spesifik
```

Berbeda dari `class`, nilai `id` harus unik dalam satu dokumen HTML. Jika beberapa elemen memakai `id` yang sama, tautan ke bagian halaman dan pemilihan elemen dengan JavaScript bisa menjadi ambigu.

---

# 32. Block vs Inline — Fundamental Awal

HTML element juga memiliki perilaku layout default.

Secara sederhana:

```text
Block
→ mengambil baris sendiri

Inline
→ berada dalam aliran text yang sama
```

Contoh block:

```html
<div>One</div>
<div>Two</div>
```

Konsep visual:

```text
One
Two
```

Contoh inline:

```html
<span>One</span>
<span>Two</span>
```

Konsep visual:

```text
One Two
```

Contoh umum:

```text
Block:
div
p
h1
ul
ol

Inline:
span
em
strong
```

**Catatan:** perilaku default ini dapat diubah menggunakan CSS.

```css
display: inline;
display: block;
```

Jadi:

> HTML menentukan element dan struktur. CSS dapat mengubah bagaimana element tersebut ditampilkan.

---

# 33. Semantic Meaning vs Visual Appearance

Ini salah satu insight paling penting dari HTML.

Misalnya:

```html
<strong>Warning!</strong>
```

dan:

```html
<b>Warning!</b>
```

Keduanya bisa terlihat bold secara default.

Tetapi maknanya berbeda.

```text
strong
→ content memiliki importance

b
→ menandai content yang ingin diberi perhatian, tanpa menyatakan tingkat kepentingan tambahan
```

Kalau tujuannya murni mengubah tampilan menjadi tebal tanpa makna tambahan, gunakan CSS.

Begitu juga:

```html
<h1>Title</h1>
```

bukan berarti:

> "Buat text besar."

Tetapi:

> "Ini adalah heading utama."

### Prinsip

```text
Jangan memilih HTML element
hanya berdasarkan tampilannya.

Pilih berdasarkan maknanya.
```

---

# 34. Kenapa Semantic HTML Penting?

Browser tidak hanya menampilkan halaman.

HTML juga dibaca oleh:

* screen reader
* search engine
* browser
* JavaScript
* developer lain

Misalnya:

```html
<h1>Portfolio Dhimas</h1>
```

lebih bermakna daripada:

```html
<div class="big-title">
  Portfolio Dhimas
</div>
```

Walaupun CSS bisa membuat keduanya terlihat sama.

Perbedaannya:

```text
<div>
→ "ini sebuah container"

<h1>
→ "ini heading utama"
```

### Akibatnya

Semantic HTML membantu:

```text
Accessibility
SEO
Maintainability
Structure
Developer experience
```

---

# 35. Cause → Mechanism → Effect

## Case 1 — Menggunakan `<h1>`

```html
<h1>Portfolio</h1>
```

### Cause

Content merupakan heading utama.

### Mechanism

Browser mengenali element sebagai heading level 1.

### Effect

Document memiliki struktur/hierarki yang lebih jelas.

---

## Case 2 — Menggunakan `<strong>`

```html
<strong>Warning</strong>
```

### Cause

Content memiliki importance.

### Mechanism

HTML memberi semantic meaning berupa strong importance.

### Effect

Browser dan teknologi yang membaca HTML memahami bahwa content tersebut penting.

---

## Case 3 — Menggunakan `<div>`

```html
<div>
  ...
</div>
```

### Cause

Butuh grouping/container tetapi tidak ada semantic element khusus.

### Mechanism

`div` mengelompokkan content tanpa memberikan makna khusus.

### Effect

Content menjadi satu kelompok yang mudah ditarget CSS/JS.

---

## Case 4 — Menggunakan `<span>`

```html
<p>
  Harga:
  <span>Rp50.000</span>
</p>
```

### Cause

Hanya sebagian kecil content yang ingin ditarget.

### Mechanism

`span` membuat inline container.

### Effect

Bagian tersebut dapat diberi CSS/JS tanpa membuat struktur block baru.

---

# 36. Bagaimana Browser Melihat HTML?

Misalnya kita memiliki:

```html
<body>
  <h1>Portfolio</h1>

  <p>Hello World</p>
</body>
```

Browser tidak sekadar melihatnya sebagai text.

Browser membangun struktur:

```text
Document
│
└── html
    │
    ├── head
    │
    └── body
        │
        ├── h1
        │   └── "Portfolio"
        │
        └── p
            └── "Hello World"
```

Struktur tersebut direpresentasikan sebagai **DOM Tree**.

Inilah alasan konsep:

```text
Parent
Child
Sibling
```

menjadi penting.

---

# 37. Kenapa DOM Penting?

Nantinya JavaScript dapat membaca dan memanipulasi struktur tersebut.

Contoh:

```javascript
document.querySelector("h1");
```

JavaScript mencari element:

```html
<h1>Portfolio</h1>
```

Karena HTML telah menjadi struktur DOM.

Jadi hubungan pembelajarannya:

```text
HTML
↓
Membentuk struktur

DOM
↓
Representasi struktur oleh browser

JavaScript
↓
Membaca / memanipulasi struktur

CSS
↓
Mengatur tampilan struktur
```

---

# 38. Mental Model Besar

Bayangkan webpage seperti sebuah rumah.

```text
HTML
→ struktur rumah

CSS
→ cat, ukuran, posisi, dekorasi

JavaScript
→ listrik, pintu otomatis, interaksi
```

HTML menentukan:

```text
Ini kamar
Ini pintu
Ini jendela
Ini ruang tamu
```

CSS menentukan:

```text
Warnanya apa?
Seberapa besar?
Posisinya di mana?
```

JavaScript menentukan:

```text
Apa yang terjadi ketika tombol ditekan?
Apa yang terjadi ketika user melakukan sesuatu?
```

---

# 39. Mental Model HTML yang Lebih Tepat

Saat menulis HTML, biasakan bertanya:

### 1. Apa content ini?

```text
Heading?
Paragraph?
Image?
List?
Video?
```

### 2. Apa maknanya?

```text
Heading utama?
Emphasis?
Important information?
Navigation?
Article?
```

### 3. Apa hubungan dengan element lain?

```text
Parent?
Child?
Sibling?
```

### 4. Apakah membutuhkan attribute?

```text
src?
alt?
class?
id?
href?
```

### 5. Apakah element ini memang tepat?

Jangan langsung berpikir:

> "Bagaimana supaya tampilannya seperti ini?"

Mulai dengan:

> "Secara struktur, content ini sebenarnya apa?"

---

# 40. Cheat Sheet Syntax

## Basic Element

```html
<p>Content</p>
```

## Heading

```html
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>
```

## Paragraph

```html
<p>Paragraph</p>
```

## Generic Container

```html
<div>Content</div>
```

## Inline Container

```html
<span>Content</span>
```

## Emphasis

```html
<em>Important emphasis</em>
```

## Strong Importance

```html
<strong>Important content</strong>
```

## Line Break

```html
<br>
```

## Ordered List

```html
<ol>
  <li>Item</li>
  <li>Item</li>
</ol>
```

## Unordered List

```html
<ul>
  <li>Item</li>
  <li>Item</li>
</ul>
```

## Image

```html
<img
  src="image.jpg"
  alt="Description"
>
```

## Video

```html
<video
  src="video.mp4"
  controls
>
</video>
```

## Attribute

```html
<element attribute="value">
```

## Class

```html
<div class="card">
```

## ID

```html
<div id="profile">
```

## Comment

```html
<!-- Comment -->
```

## Basic Document

```html
<!DOCTYPE html>

<html>
  <head>
    <title>My Website</title>
  </head>

  <body>
    <h1>Hello World</h1>

    <p>
      My first webpage.
    </p>
  </body>
</html>
```

---

# 41. Self Check

Sebelum lanjut ke materi berikutnya, pastikan bisa menjawab tanpa melihat catatan.

### Fundamental

* Apa perbedaan HTML, CSS, dan JavaScript?
* Apa perbedaan tag dan element?
* Kenapa HTML disebut markup language?
* Apa yang dilakukan browser terhadap HTML?
* Apa itu DOM?

### Structure

* Apa fungsi `<!DOCTYPE html>`?
* Apa fungsi `<html>`?
* Apa perbedaan `<head>` dan `<body>`?
* Apa itu parent, child, dan sibling?
* Apa itu nesting?

### Elements

* Kapan menggunakan `<h1>` sampai `<h6>`?
* Apa fungsi `<p>`?
* Apa perbedaan `<div>` dan `<span>`?
* Apa perbedaan `<em>` dan `<strong>`?
* Apa perbedaan `<ol>` dan `<ul>`?
* Apa fungsi `<li>`?
* Kenapa `<img>` tidak membutuhkan closing tag?
* Apa fungsi `src` dan `alt`?

### Attributes

* Apa itu attribute?
* Apa perbedaan element dan attribute?
* Apa perbedaan `class` dan `id`?
* Kenapa satu `class` dapat digunakan berkali-kali?
* Kenapa `id` sebaiknya unik?

### Thinking

Jika ingin membuat:

```text
Judul utama
Subjudul
Paragraph
Daftar skill
Foto profile
```

Tanyakan:

> "Element apa yang secara semantic paling tepat untuk masing-masing content?"

Bukan:

> "Element mana yang tampilannya paling mirip?"

---

# 42. Key Takeaway

Hal terpenting dari materi **Elements and Structure** bukan menghafal `<p>`, `<div>`, `<h1>`, dan lainnya.

Yang perlu dipahami adalah **cara berpikir HTML**:

```text
Content
↓
Identifikasi makna
↓
Pilih element yang tepat
↓
Susun dengan nesting
↓
Tambahkan attribute jika diperlukan
↓
Browser membangun DOM
↓
CSS mengatur tampilan
↓
JavaScript mengatur behavior
```

### Prinsip utama

> **HTML bukan tentang membuat sesuatu terlihat seperti apa. HTML tentang menjelaskan sesuatu itu sebenarnya apa.**

```text
<h1>
→ heading utama

<p>
→ paragraph

<ul>
→ unordered list

<img>
→ image

<strong>
→ strong importance

<div>
→ generic container

<span>
→ inline container
```

Kalau prinsip ini sudah dipahami, syntax HTML menjadi jauh lebih mudah dipelajari karena kamu tidak lagi sekadar menghafal tag.

**Pikirkan maknanya → pilih element → susun strukturnya → baru pikirkan tampilannya.**

# INSIGHT

Jangan samakan `charset="UTF-8"` dengan `lang="id"`:

```html
<html lang="id">
<head>
  <meta charset="UTF-8">
</head>
```

`charset="UTF-8"` memberi tahu browser cara mengubah byte file menjadi karakter, supaya simbol dan huruf terbaca benar. `lang="id"` menyatakan bahwa bahasa utama content adalah Bahasa Indonesia, sehingga alat seperti screen reader dapat memilih pelafalan yang sesuai. Keduanya menjawab masalah berbeda, jadi sebuah halaman dapat memerlukan keduanya.

Ekstensi `.html` juga berbeda dari `<!DOCTYPE html>`: `.html` membantu editor dan server mengenali jenis file, sedangkan doctype di dalam file memberi tahu browser bahwa dokumen menggunakan HTML modern. Ekstensi saja tidak menggantikan doctype maupun struktur dokumen.

# BEDAH STRUKTUR — Mengapa Susunan Element Berpengaruh?

HTML bukan sekadar kumpulan tag yang ditampilkan browser. Browser membacanya sebagai pohon DOM; hubungan parent dan child dapat menentukan makna, perilaku, styling, dan cara teknologi bantu memahami content.

```html
<main>
  <article>
    <h1>Belajar HTML</h1>
    <p>HTML memberi struktur dan makna pada content.</p>
  </article>
</main>
```

`<article>` adalah child dari `<main>`, sedangkan `<h1>` dan `<p>` adalah child dari `<article>`. Mengapa urutan dan nesting penting? Karena selector seperti `main > article` hanya mencocokkan anak langsung, dan struktur heading membantu pembaca serta teknologi bantu memahami hierarki content. Memindahkan `<h1>` keluar dari `<article>` bukan perubahan indentasi saja; hubungannya dalam DOM juga berubah.

Elemen juga memiliki aturan content model—jenis child yang valid untuknya. Misalnya, `<p>` merepresentasikan paragraf dan tidak boleh membungkus block content seperti `<div>`. Jika browser menemukan markup bersarang yang tidak valid, browser dapat memperbaiki pohon DOM saat parsing; hasil pohon yang dibangun mungkin berbeda dari susunan source yang dimaksud. Karena itu, saat struktur terlihat aneh, periksa DOM di DevTools, bukan hanya teks HTML.

Bandingkan:

```html
<p>Ringkasan artikel.</p>
<div class="card">
  <p>Isi kartu.</p>
</div>
```

Di sini paragraf ditutup sebelum `<div>` dimulai. Gunakan element berdasarkan aturan content dan maknanya, bukan karena browser kebetulan dapat menampilkan markup yang keliru.

---

<a id="html-bab-2"></a>

<!-- Sumber: HTML\2.HTML-Table.md -->

# HTML — Tables

> HTML Table digunakan untuk menyusun **data yang memiliki hubungan dalam bentuk baris (row) dan kolom (column)**.
>
> Mental model utama:
>
> **Table → Section → Row → Cell → Content**
>
> - `table` = keseluruhan tabel
> - `thead` / `tbody` / `tfoot` = kelompok baris
> - `tr` (*table row*) = satu baris
> - `th` / `td` (*table header/data cell*) = satu sel
> - content di dalam `th` / `td` = teks atau element yang mengisi sel

Urutan dari yang paling besar ke yang paling kecil:

```text
<table>                         ← seluruh tabel
├── <caption>                   ← judul/keterangan tabel (opsional)
├── <colgroup>                  ← definisi kelompok kolom (opsional)
│   └── <col>                   ← definisi satu atau beberapa kolom
├── <thead>                     ← kelompok baris header (opsional)
│   └── <tr>                    ← satu baris
│       ├── <th>                ← cell header
│       └── <th>
├── <tbody>                     ← kelompok baris data
│   └── <tr>
│       ├── <th>                ← bisa menjadi header untuk baris
│       └── <td>                ← cell data
└── <tfoot>                     ← kelompok baris ringkasan (opsional)
    └── <tr>
        ├── <th>
        └── <td>
```

> **Catatan:** `<caption>`, `<colgroup>`, `<thead>`, `<tbody>`, dan `<tfoot>` adalah bagian yang berada di dalam `<table>`. `<tr>` berada di dalam kelompok baris, lalu `<th>` atau `<td>` berada di dalam `<tr>`. `<col>` hanya mendefinisikan kolom; ia bukan parent yang membungkus cell. Tidak semua tabel harus memakai semua bagian opsional tersebut.

Di setiap cell, kita juga bisa memiliki content bertingkat:

```html
<td>
  <strong>Dhimas</strong>
  <p>Mahasiswa Informatika</p>
</td>
```

Pada contoh ini, `<td>` adalah cell tabel; `<strong>` dan `<p>` adalah content di dalam cell, bukan baris atau kolom tabel baru.

Attribute seperti `scope`, `rowspan`, `colspan`, dan `headers` bukan element tambahan dalam hierarki. Attribute tersebut memberi informasi atau mengubah hubungan/ukuran cell `<th>` atau `<td>`.

Di materi ini, *row* berarti **baris**, *column* berarti **kolom**, dan *cell* berarti **sel** pada pertemuan baris dan kolom. Istilah Inggrisnya sering dipakai saat membaca dokumentasi maupun kode.

---

# 1. Apa Itu HTML Table?

HTML menyediakan element `<table>` untuk merepresentasikan data yang memiliki struktur **row × column**.

Contoh:

```html
<table>
  <tr>
    <td>Dhimas</td>
    <td>23</td>
  </tr>

  <tr>
    <td>Andi</td>
    <td>22</td>
  </tr>
</table>
```

Secara sederhana:

```text
Table
│
├── Row
│   ├── Cell
│   └── Cell
│
└── Row
    ├── Cell
    └── Cell
```

Hasil secara konsep:

| Nama   | Umur |
| ------ | ---: |
| Dhimas |   23 |
| Andi   |   22 |

### Insight

Table bukan sekadar cara membuat content berbentuk kotak.

Table digunakan ketika data memang memiliki hubungan **baris dan kolom**.

Contoh data yang cocok:

```text
Nama    Umur    Jurusan
Dhimas  23      Informatika
Andi    22      Sistem Informasi
```

Karena:

* satu mahasiswa dapat menjadi satu row
* `Nama`, `Umur`, `Jurusan` menjadi column

Jadi sebelum menggunakan `<table>`, pikirkan:

```text
Apakah data ini memang berbentuk row × column?
```

Kalau hanya ingin membuat layout halaman, gunakan CSS seperti Flexbox atau Grid.

---

# 2. `<table>` — Container Utama

```html
<table>
  ...
</table>
```

`<table>` menandai keseluruhan struktur data sebagai sebuah table.

Contoh:

```html
<table>
  <tr>
    <td>Dhimas</td>
    <td>23</td>
  </tr>
</table>
```

### Insight

`<table>` tidak menentukan data secara langsung.

Ia hanya menjadi **container utama** yang mengatakan kepada browser:

> "Content di dalam sini merupakan struktur data tabular."

Struktur di dalamnya kemudian dibentuk oleh:

```text
<table>
    ↓
<tr>
    ↓
<th> / <td>
```

---

# 3. `<tr>` — Table Row

`tr` berarti **table row**.

Digunakan untuk membuat satu baris:

```html
<tr>
  <td>Dhimas</td>
  <td>23</td>
</tr>
```

Konsep visual:

```text
┌────────┬────┐
│ Dhimas │ 23 │
└────────┴────┘
```

### Kenapa `<td>` berada di dalam `<tr>`?

Karena browser perlu mengetahui **cell-cell tersebut berada dalam row yang sama**.

```text
<tr>
├── <td>Dhimas</td>
└── <td>23</td>
```

Artinya:

```text
Row 1
├── Column 1 → Dhimas
└── Column 2 → 23
```

Jadi struktur table dibangun dari hubungan:

```text
Table
 ↓
Row
 ↓
Cell
```

Bukan langsung:

```text
Table
 ↓
Cell
```

---

# 4. `<td>` — Table Data

`td` berarti **table data**.

Digunakan untuk cell yang berisi data:

```html
<td>Dhimas</td>
<td>23</td>
```

Contoh lengkap:

```html
<tr>
  <td>Dhimas</td>
  <td>23</td>
  <td>Informatika</td>
</tr>
```

### Insight

Satu `<td>` mewakili **satu cell data**.

Posisi cell tersebut ditentukan oleh row dan column tempat ia berada.

```text
<tr>
│
├── <td>Dhimas</td>
├── <td>23</td>
└── <td>Informatika</td>
```

Artinya:

```text
Column 1 → Dhimas
Column 2 → 23
Column 3 → Informatika
```

Karena itu, jumlah dan urutan cell biasanya harus konsisten dengan struktur column table.

---

# 5. `<th>` — Table Header

`th` berarti **table header**.

Digunakan untuk sel header yang memberi nama atau konteks pada data:

```html
<tr>
  <th>Nama</th>
  <th>Umur</th>
  <th>Jurusan</th>
</tr>
```

Kemudian data:

```html
<tr>
  <td>Dhimas</td>
  <td>23</td>
  <td>Informatika</td>
</tr>
```

Strukturnya:

```text
Header
├── Nama
├── Umur
└── Jurusan

Data
├── Dhimas
├── 23
└── Informatika
```

### Insight — Jangan Menganggap `<th>` = Bold

Browser biasanya menampilkan `<th>` dengan text yang lebih tebal.

Tetapi **bold bukan alasan utama menggunakan `<th>`**.

Alasan utamanya adalah semantic:

```text
<th>
→ "Ini adalah header yang menjelaskan data."

<td>
→ "Ini adalah data sebenarnya."
```

Jadi jangan memilih `<th>` hanya karena ingin tulisan bold.

Kalau tujuan hanya membuat text bold, gunakan CSS atau element yang memang sesuai dengan makna content.

Pada tabel sederhana, browser biasanya dapat memahami header dari susunan baris dan kolomnya. `scope` memberi petunjuk yang lebih eksplisit tentang data mana yang dijelaskan oleh sebuah `<th>`.

Gunakan `scope="col"` untuk header kolom. Contohnya, "Umur" menjelaskan nilai pada kolom umur:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Umur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Dhimas</th>
      <td>23</td>
    </tr>
  </tbody>
</table>
```

`scope="row"` pada "Dhimas" menandai bahwa nama tersebut menjadi header untuk data lain dalam baris yang sama. Jadi saat teknologi bantu membaca cell "23", hubungan dengan header "Umur" dan "Dhimas" dapat dipahami dengan lebih jelas.

`scope` tidak mengubah tampilan; attribute ini menjelaskan arah hubungan header dengan data. Untuk tabel sederhana yang punya satu baris header kolom, hubungan sering sudah dapat dikenali tanpa `scope`; menambahkannya membuat maksud markup lebih jelas. Tabel dengan header bertingkat atau hubungan yang lebih rumit dapat memerlukan pola lain seperti `headers` dan `id`.

### Kasus Tabel dengan Header Bertingkat

Misalnya laporan penjualan membagi kolom "Penjualan" menjadi "Kuartal 1" dan "Kuartal 2". Saat tabel dibaca, satu nilai memiliki beberapa konteks sekaligus: wilayah, kelompok "Penjualan", dan kuartalnya.

Untuk tabel kompleks seperti ini, setiap header dapat diberi `id`, lalu cell data menghubungkan dirinya dengan header-header terkait memakai attribute `headers`:

```html
<table>
  <caption>Penjualan berdasarkan wilayah dan kuartal</caption>
  <thead>
    <tr>
      <th id="region" rowspan="2">Wilayah</th>
      <th id="sales" colspan="2">Penjualan</th>
    </tr>
    <tr>
      <th id="q1">Kuartal 1</th>
      <th id="q2">Kuartal 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="north">Utara</th>
      <td headers="north sales q1">120</td>
      <td headers="north sales q2">145</td>
    </tr>
  </tbody>
</table>
```

Contohnya, `headers="north sales q1"` pada angka `120` merujuk ke tiga header dengan `id` yang sesuai. Dengan begitu, hubungan cell lebih eksplisit daripada tabel sederhana yang hanya memiliki satu baris header.

> **Catatan:** untuk tabel biasa, jangan menambahkan `headers` dan `id` tanpa kebutuhan. Mulai dari `<th>` dan, bila membantu, `scope`. Gunakan pola ini ketika header bertingkat membuat hubungan antara header dan data sulit dipahami.

### Mental Model

```text
<th>
→ Data ini menjelaskan apa?

<td>
→ Nilainya berapa/apa?
```

---

# 6. `<th>` vs `<td>`

| Element | Fungsi      | Mental Model     |
| ------- | ----------- | ---------------- |
| `<th>`  | Header cell | Menjelaskan data |
| `<td>`  | Data cell   | Berisi data      |

Contoh:

```html
<tr>
  <th>Nama</th>
  <th>IPK</th>
</tr>

<tr>
  <td>Dhimas</td>
  <td>3.74</td>
</tr>
```

Baca sebagai:

```text
Nama
 ↓
Dhimas

IPK
 ↓
3.74
```

Jadi `<th>` membantu memberikan konteks terhadap `<td>` di bawahnya.

---

# 7. Struktur Table Dasar

Table sederhana:

```html
<table>

  <tr>
    <th>Nama</th>
    <th>Umur</th>
  </tr>

  <tr>
    <td>Dhimas</td>
    <td>23</td>
  </tr>

</table>
```

Struktur DOM-nya secara konsep:

```text
table
│
├── tr
│   ├── th
│   └── th
│
└── tr
    ├── td
    └── td
```

### Insight

Perhatikan bahwa setiap level memiliki tanggung jawab berbeda:

```text
table
→ keseluruhan data

tr
→ kelompok horizontal / row

th
→ header

td
→ data
```

Ini merupakan contoh penting bahwa HTML dibangun sebagai **hierarki**, bukan kumpulan tag yang berdiri sendiri.

---

# 8. `<thead>` — Table Header Group

Untuk table yang lebih terstruktur, gunakan:

```html
<thead>
  ...
</thead>
```

Contoh:

```html
<table>

  <thead>
    <tr>
      <th>Nama</th>
      <th>Umur</th>
    </tr>
  </thead>

  <tbody>
    ...
  </tbody>

</table>
```

### Insight

`<th>` dan `<thead>` bukan hal yang sama.

```text
<th>
→ satu header cell

<thead>
→ kelompok/bagian header table
```

Contoh:

```text
<thead>
└── <tr>
    ├── <th>
    └── <th>
```

Jadi:

> `<thead>` mengelompokkan bagian header, sedangkan `<th>` menandai cell sebagai header.

---

# 9. `<tbody>` — Table Body

`tbody` berarti **table body**.

Digunakan untuk mengelompokkan data utama:

```html
<tbody>

  <tr>
    <td>Dhimas</td>
    <td>23</td>
  </tr>

  <tr>
    <td>Andi</td>
    <td>22</td>
  </tr>

</tbody>
```

Struktur:

```text
<tbody>
├── <tr>
│   ├── <td>
│   └── <td>
│
└── <tr>
    ├── <td>
    └── <td>
```

### Insight

`tbody` membantu memisahkan:

```text
Header
vs
Data utama
```

Ini sangat berguna ketika table mulai kompleks atau ketika nantinya diproses menggunakan CSS/JavaScript.

Untuk tabel sederhana, `<tbody>` kadang tidak ditulis langsung dan browser dapat membentuk kelompok body saat mem-parsing tabel. Menuliskannya sendiri tetap membantu membuat struktur lebih jelas, terutama saat tabel juga memiliki `<thead>` atau `<tfoot>`.

---

# 10. `<tfoot>` — Table Footer

`tfoot` digunakan untuk bagian footer atau ringkasan table.

Contoh:

```html
<table>

  <thead>
    <tr>
      <th>Produk</th>
      <th>Harga</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Laptop</td>
      <td>Rp10.000.000</td>
    </tr>

    <tr>
      <td>Mouse</td>
      <td>Rp300.000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Total</th>
      <td>Rp10.300.000</td>
    </tr>
  </tfoot>

</table>
```

Struktur:

```text
<table>
│
├── <thead>
│
├── <tbody>
│
└── <tfoot>
```

### Insight

`tfoot` bukan berarti:

> "Bagian yang harus selalu berada paling bawah secara visual."

Fungsinya adalah mengelompokkan **bagian footer/ringkasan secara semantic**.

Misalnya:

```text
Subtotal
Total
Average
Summary
```

---

# 11. Struktur Table yang Lebih Lengkap

```html
<table>

  <caption>
    Daftar Mahasiswa
  </caption>

  <thead>
    <tr>
      <th>Nama</th>
      <th>Jurusan</th>
      <th>IPK</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Dhimas</td>
      <td>Informatika</td>
      <td>3.74</td>
    </tr>

    <tr>
      <td>Andi</td>
      <td>Sistem Informasi</td>
      <td>3.60</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Jumlah</th>
      <td>2 Mahasiswa</td>
      <td>-</td>
    </tr>
  </tfoot>

</table>
```

Mental model:

```text
TABLE
│
├── CAPTION
│
├── THEAD
│   └── TR
│       ├── TH
│       ├── TH
│       └── TH
│
├── TBODY
│   ├── TR
│   │   ├── TD
│   │   ├── TD
│   │   └── TD
│   │
│   └── TR
│       ├── TD
│       ├── TD
│       └── TD
│
└── TFOOT
    └── TR
        ├── TH
        ├── TD
        └── TD
```

---

# 12. `<caption>` — Judul Table

`caption` memberikan judul atau keterangan untuk sebuah table.

Pakai `<caption>` ketika pembaca perlu tahu tabel ini membahas apa, terutama jika ada beberapa tabel pada halaman atau setiap tabel menampilkan angka tanpa konteks.

```html
<table>
  <caption>Jumlah mahasiswa berdasarkan jurusan, tahun 2026</caption>
  <thead>
    <tr>
      <th scope="col">Jurusan</th>
      <th scope="col">Jumlah mahasiswa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Informatika</th>
      <td>120</td>
    </tr>
  </tbody>
</table>
```

### Insight

`<caption>` bukan sekadar text yang kebetulan diletakkan di atas table.

Element ini secara semantic menyatakan:

> "Text ini merupakan caption untuk table tersebut."

Bandingkan:

```html
<p>Daftar Mahasiswa</p>

<table>
  ...
</table>
```

dengan:

```html
<table>
  <caption>Daftar Mahasiswa</caption>
  ...
</table>
```

Yang kedua memiliki hubungan semantic langsung dengan table.

**Kapan pilih judul biasa, kapan pilih `<caption>`?**

```text
Judul untuk bagian halaman secara umum
→ gunakan heading seperti <h2>

Nama/keterangan yang khusus menjelaskan satu tabel
→ gunakan <caption> di dalam <table>
```

Caption juga membantu pengguna screen reader mengenali tujuan tabel sebelum membaca cell-cell di dalamnya. Letakkan `<caption>` sebagai anak langsung `<table>`, biasanya sebelum `<thead>`. Umumnya satu tabel memiliki satu caption. Teks caption biasanya terlihat; jika desain meminta caption di bawah tabel, ubah posisinya dengan CSS `caption-side` tanpa menghilangkan hubungan HTML-nya:

```css
caption {
  caption-side: bottom;
}
```

---

# 12.1. `<colgroup>` dan `<col>` — Mengelompokkan Kolom

`<colgroup>` mengelompokkan satu atau beberapa kolom, sedangkan `<col>` menandai kolom di dalam kelompok tersebut. Elemen ini berguna terutama ketika ingin menerapkan style pada satu kolom tanpa memberi class ke setiap cell.

Kasusnya: pada tabel nilai, kolom "Nilai" perlu diberi background berbeda agar mudah dibedakan:

```html
<table>
  <colgroup>
    <col>
    <col class="score-column">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alya</th>
      <td>92</td>
    </tr>
  </tbody>
</table>
```

```css
.score-column {
  background-color: #f0f4ff;
}
```

`<col>` pertama mewakili kolom "Nama", dan `<col>` kedua mewakili kolom "Nilai". `<colgroup>` diletakkan di dalam `<table>`, sesudah `<caption>` jika ada, dan sebelum `<thead>`, `<tbody>`, atau `<tfoot>`. `<colgroup>` dan `<col>` tidak menggantikan `<th>` atau `<td>`: keduanya mengatur kelompok kolom, bukan isi atau header datanya.

Jika beberapa kolom perlu dikelompokkan dengan cara yang sama, `<col>` dapat menggunakan attribute `span`:

```html
<colgroup>
  <col span="2" class="score-columns">
</colgroup>
```

Di sini `span="2"` berarti `<col>` mewakili dua kolom tabel. Ini berbeda dari `<td colspan="2">`: `col span` mengelompokkan kolom untuk pengaturan kolom, sedangkan `td colspan` membuat satu cell data membentang melewati dua kolom.

> **Catatan:** tidak semua property CSS berlaku pada `<col>`. Pola ini terutama berguna untuk property kolom yang didukung browser seperti background; untuk mengatur ukuran atau jarak cell, style tabel/cell dengan CSS yang sesuai.

---

# 13. `colspan` — Cell Mencakup Beberapa Column

```html
<th colspan="2">
  Data Mahasiswa
</th>
```

`colspan` berasal dari:

```text
column + span
```

Artinya satu cell **membentang beberapa column**.

Angka pada atribut menghitung jumlah kolom yang ditempati sel tersebut, termasuk kolom tempat sel itu dimulai. Jadi `colspan="2"` membuat satu sel menempati lebar dua kolom, bukan menambah kolom baru.

Contoh:

```html
<table>

  <tr>
    <th colspan="2">
      Data Mahasiswa
    </th>
  </tr>

  <tr>
    <td>Nama</td>
    <td>Dhimas</td>
  </tr>

</table>
```

Konsep:

```text
Normal:

┌──────────┬──────────┐
│ Column 1 │ Column 2 │
└──────────┴──────────┘


colspan="2":

┌─────────────────────┐
│   Data Mahasiswa    │
└─────────────────────┘
```

### Insight

`colspan="2"` bukan berarti:

> "Buat column baru."

Tetapi:

> "Cell ini menggunakan ruang sebanyak 2 column."

Mental shortcut:

```text
colspan
→ column span
→ ← horizontal →
```

---

# 14. `rowspan` — Cell Mencakup Beberapa Row

```html
<td rowspan="2">
  Dhimas
</td>
```

`rowspan` berarti satu sel membentang beberapa baris. Angkanya menghitung jumlah baris yang ditempati, termasuk baris tempat sel itu dimulai.

Contoh:

```html
<table>

  <tr>
    <th>Nama</th>
    <th>Skill</th>
  </tr>

  <tr>
    <td rowspan="2">Dhimas</td>
    <td>JavaScript</td>
  </tr>

  <tr>
    <td>Node.js</td>
  </tr>

</table>
```

Konsep:

```text
┌────────┬────────────┐
│ Nama   │ Skill      │
├────────┼────────────┤
│        │ JavaScript │
│ Dhimas ├────────────┤
│        │ Node.js    │
└────────┴────────────┘
```

### Insight

`rowspan="2"` berarti:

> "Cell ini mengambil ruang 2 row."

Karena sel tersebut sudah mengisi kolom yang sama pada baris berikutnya, baris itu tidak perlu menambahkan sel lain untuk kolom tersebut. Sel-sel berikutnya mengisi kolom yang masih kosong.

Mental shortcut:

```text
rowspan
→ row span
→ ↓ vertical
```

---

# 15. `colspan` vs `rowspan`

| Attribute | Arah         | Arti                     |
| --------- | ------------ | ------------------------ |
| `colspan` | Horizontal → | Mencakup beberapa kolom |
| `rowspan` | Vertical ↓   | Mencakup beberapa baris |

Cara mengingat:

```text
COLUMN
→ →
colspan

ROW
↓
rowspan
```

---

# 16. Kenapa Jumlah Cell Harus Masuk Akal?

Misalnya table memiliki tiga column:

```text
Nama | Umur | Jurusan
```

Maka row normal memiliki tiga cell:

```html
<tr>
  <td>Dhimas</td>
  <td>23</td>
  <td>Informatika</td>
</tr>
```

Karena setiap cell memiliki posisi:

```text
Column 1 → Dhimas
Column 2 → 23
Column 3 → Informatika
```

Jika hanya ada:

```html
<tr>
  <td>Dhimas</td>
  <td>23</td>
</tr>
```

maka tidak ada cell untuk column ketiga.

### Insight

Browser membutuhkan struktur yang konsisten untuk menentukan hubungan **cell ↔ column**.

Namun `colspan` dan `rowspan` memang dapat membuat jumlah cell literal pada suatu row berbeda karena satu cell dapat menempati beberapa posisi.

---

# 17. Table HTML dan Database

Sebagai developer, kamu akan sering melihat konsep yang mirip dengan database.

Database:

```text
users

id | name   | age
---|--------|----
1  | Dhimas | 23
2  | Andi   | 22
```

HTML:

```html
<table>

  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Dhimas</td>
      <td>23</td>
    </tr>

    <tr>
      <td>2</td>
      <td>Andi</td>
      <td>22</td>
    </tr>
  </tbody>

</table>
```

### Insight

Konsepnya mirip, tetapi fungsinya berbeda.

```text
Database table
→ menyimpan data

HTML table
→ menyajikan data
```

Biasanya alurnya:

```text
Database
    ↓
SELECT
    ↓
Backend
    ↓
Data
    ↓
HTML Table
    ↓
User
```

Jadi `<table>` bukan database dan tidak digunakan untuk menyimpan data aplikasi.

---

# 18. Table Bukan Untuk Layout

Misalnya ingin membuat:

```text
┌──────────┬─────────────────┐
│ Sidebar  │ Main Content    │
└──────────┴─────────────────┘
```

Secara visual memang mirip table.

Tetapi ini bukan **tabular data**.

Maka gunakan CSS:

```css
.container {
  display: flex;
}
```

atau:

```css
.container {
  display: grid;
}
```

### Sebab → Akibat

```text
Layout
↓
Menggunakan <table>
↓
HTML memberi semantic:
"Ini data tabular."
↓
Padahal sebenarnya layout
↓
Makna HTML menjadi tidak tepat
```

### Rule

```text
Data berbentuk row × column
→ <table>

Layout halaman
→ CSS Flexbox / Grid
```

---

# 19. HTML vs CSS pada Table

HTML:

```html
<table>
  <tr>
    <th>Nama</th>
    <th>Umur</th>
  </tr>
</table>
```

menentukan:

```text
Apa yang ada?
Bagaimana strukturnya?
Apa maknanya?
```

CSS:

```css
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
}
```

menentukan:

```text
Bagaimana tampilannya?
```

### Insight

Kalau ingin:

```text
border
warna
padding
ukuran
alignment
spacing
```

itu merupakan pekerjaan CSS.

Jangan menambahkan element HTML hanya untuk mendapatkan efek visual tertentu.

---

# 20. HTML Table sebagai Hierarki

Table dapat dipahami seperti tree:

```text
<table>
│
├── <thead>
│   └── <tr>
│       ├── <th>
│       ├── <th>
│       └── <th>
│
└── <tbody>
    ├── <tr>
    │   ├── <td>
    │   ├── <td>
    │   └── <td>
    │
    └── <tr>
        ├── <td>
        ├── <td>
        └── <td>
```

### Insight

Ini sama dengan konsep **parent → child** yang dipelajari pada Elements & Structure.

Contohnya:

```text
<table>
→ parent dari <thead>

<thead>
→ parent dari <tr>

<tr>
→ parent dari <th>

<th>
→ child dari <tr>
```

Jadi materi Table sebenarnya memperkuat konsep **nesting dan DOM tree** dari materi sebelumnya.

---

# 21. Pola Sebab → Akibat yang Harus Dipahami

### `<table>`

```text
Data bersifat tabular
↓
Gunakan <table>
↓
Browser mengenali struktur sebagai table
```

### `<tr>`

```text
Butuh satu baris
↓
Gunakan <tr>
↓
Cell di dalamnya menjadi satu row
```

### `<th>`

```text
Cell berfungsi menjelaskan data
↓
Gunakan <th>
↓
Cell memiliki semantic sebagai header
```

### `<td>`

```text
Cell berisi nilai/data
↓
Gunakan <td>
↓
Cell dianggap sebagai data
```

### `<thead>`

```text
Ada kelompok header
↓
Gunakan <thead>
↓
Header table terkelompok secara semantic
```

### `<tbody>`

```text
Ada kumpulan data utama
↓
Gunakan <tbody>
↓
Data utama terkelompok
```

### `<tfoot>`

```text
Ada summary/footer
↓
Gunakan <tfoot>
↓
Bagian footer terkelompok
```

### `colspan`

```text
Satu cell mencakup beberapa column
↓
colspan
↓
Cell melebar secara horizontal
```

### `rowspan`

```text
Satu cell mencakup beberapa row
↓
rowspan
↓
Cell melebar secara vertical
```

---

# 22. Table Cheat Sheet

| Syntax        | Kegunaan          | Mental Model        |
| ------------- | ----------------- | ------------------- |
| `<table>`     | Container table   | Keseluruhan table   |
| `<tr>`        | Membuat row       | Satu baris          |
| `<th>`        | Header cell       | Menjelaskan data    |
| `<td>`        | Data cell         | Isi data            |
| `<thead>`     | Kelompok header   | Bagian atas/heading |
| `<tbody>`     | Kelompok data     | Data utama          |
| `<tfoot>`     | Kelompok footer   | Summary/footer      |
| `<caption>`   | Judul table       | Menjelaskan table   |
| `colspan="2"` | Mencakup 2 column | →                   |
| `rowspan="2"` | Mencakup 2 row    | ↓                   |

---

# 23. Contoh Lengkap

```html
<table>

  <caption>
    Project Experience
  </caption>

  <thead>
    <tr>
      <th>Project</th>
      <th>Role</th>
      <th>Year</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>MindHarbor</td>
      <td>Software Engineer</td>
      <td>2026</td>
    </tr>

    <tr>
      <td>Warung UMKM Riau</td>
      <td>Backend Developer</td>
      <td>2025</td>
    </tr>
  </tbody>

</table>
```

Cara membacanya:

```text
Saya punya sebuah table
        ↓
Table ini tentang Project Experience
        ↓
Ada bagian header
        ↓
Header memiliki 3 column
        ↓
Ada bagian body
        ↓
Setiap project menjadi satu row
        ↓
Setiap row memiliki 3 data cell
```

Jadi HTML tersebut sebenarnya sedang **mendeskripsikan struktur informasi**, bukan sekadar membuat tabel visual.

---

# 24. Mental Model Utama

Jangan menghafal:

```text
table
tr
td
th
thead
tbody
tfoot
```

sebagai tag yang terpisah.

Pahami sebagai satu sistem, dari parent paling luar ke element paling dalam:

```text
<table>
├── <caption>                    ← judul/keterangan tabel (opsional)
├── <colgroup>                   ← definisi kolom (opsional)
│   └── <col>
├── <thead>                      ← kelompok baris header (opsional)
│   └── <tr>
│       ├── <th>                 ← cell header kolom
│       └── <th>
├── <tbody>                      ← kelompok baris data
│   ├── <tr>
│   │   ├── <th>                 ← cell header baris jika diperlukan
│   │   └── <td>                 ← cell data
│   └── <tr>
│       ├── <th>
│       └── <td>
└── <tfoot>                      ← kelompok ringkasan (opsional)
    └── <tr>
        ├── <th>
        └── <td>
```

Urutan parent → child yang paling dasar:

```text
<table>
  ↓
<tbody> (atau <thead> / <tfoot>)
  ↓
<tr>
  ↓
<th> / <td>
  ↓
teks atau content di dalam cell
```

Bagian paling luar menyimpan bagian-bagian tabel. Setiap bagian mengelompokkan baris, setiap baris berisi cell, dan setiap cell menampung nilai atau content. `<caption>` dan `<colgroup>` berada langsung di dalam `<table>`, bukan di dalam `<tr>`.

Ingat juga perbedaan ini:

```text
<th> / <td>
→ element cell di dalam <tr>

scope / rowspan / colspan / headers
→ attribute pada cell, bukan element baru

<p> / <strong> / <a> di dalam <td>
→ content cell, bukan struktur baris/kolom tabel
```

---

# 25. Cara Berpikir Saat Membuat Table

Ketika mendapatkan requirement:

> "Tampilkan daftar mahasiswa."

Jangan langsung menulis `<table>`.

Mulai dari data:

```text
Nama
NIM
Jurusan
IPK
```

Kemudian tanyakan:

```text
Apa column?
```

Jawab:

```text
Nama | NIM | Jurusan | IPK
```

Kemudian:

```text
Apa satu record?
```

Jawab:

```text
Satu mahasiswa = satu row
```

Kemudian:

```text
Mana header?
```

Jawab:

```html
<th>Nama</th>
<th>NIM</th>
<th>Jurusan</th>
<th>IPK</th>
```

Kemudian data:

```html
<td>Dhimas</td>
<td>123456</td>
<td>Informatika</td>
<td>3.74</td>
```

Baru susun:

```text
Data
 ↓
Column
 ↓
Header
 ↓
Row
 ↓
Cell
 ↓
HTML Structure
 ↓
CSS Styling
```

---

# 26. Key Takeaway

Materi Table sebenarnya memperkuat satu prinsip besar dari HTML:

> **HTML digunakan untuk menjelaskan struktur dan makna informasi.**

Karena itu:

```text
<table>
→ ini data tabular

<tr>
→ ini satu row

<th>
→ ini header

<td>
→ ini data

<thead>
→ ini kelompok header

<tbody>
→ ini kelompok data

<tfoot>
→ ini kelompok summary/footer
```

Sedangkan:

```text
colspan
→ satu cell mencakup beberapa column

rowspan
→ satu cell mencakup beberapa row
```

Dan jangan lupa prinsip besarnya:

```text
HTML
→ Struktur + Meaning

CSS
→ Appearance
```

Jadi kalau sebuah table terlihat berantakan, **jangan langsung mengubah struktur HTML hanya untuk memperbaiki tampilannya**. Pertama tentukan apakah struktur datanya sudah benar, kemudian gunakan CSS untuk mengatur tampilannya.

> **Pikirkan data → pahami hubungannya → pilih element → susun hierarchy → baru styling.**

# BEDAH STRUKTUR — Mengapa Header Tabel Harus Terhubung ke Data?

Tabel aksesibel bukan hanya baris dan kolom yang tampak rapi. Browser dan teknologi bantu perlu mengetahui header mana yang memberi konteks pada setiap cell data.

```html
<table>
  <caption>Harga produk menurut ukuran</caption>
  <thead>
    <tr>
      <th scope="col">Produk</th>
      <th scope="col">Ukuran</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Kopi</th>
      <td>Kecil</td>
      <td>Rp20.000</td>
    </tr>
  </tbody>
</table>
```

Mengapa cell pertama pada baris data menggunakan `<th scope="row">`, bukan `<td>` yang dibuat tebal dengan CSS? Karena `<th>` menyatakan bahwa “Kopi” adalah header untuk baris tersebut. `scope="row"` menyampaikan arah hubungannya; saat teknologi bantu membaca “Rp20.000”, konteks produk dan kolom harganya dapat dipahami, bukan hanya koordinat cell-nya.

`<caption>` menjawab “tabel ini tentang apa?”, sedangkan `<thead>` dan `<tbody>` mengelompokkan bagian tabel. Pengelompokan ini memberi struktur yang bisa dikenali browser dan membantu pengelolaan tabel, misalnya saat styling atau mencetak halaman. Mengubah tampilan sebuah cell tidak dapat menggantikan makna header maupun hubungan tersebut.

`colspan` dan `rowspan` mengubah bentuk grid tabel. Sebelum menambahkannya, hitung jumlah kolom logis pada setiap baris: satu cell dengan `colspan="2"` tetap mengisi dua kolom pada grid, walaupun ditulis sebagai satu element `<td>`. Jika jumlah cell tidak konsisten, hubungan header-data dan bentuk tabel menjadi sulit diprediksi. Jadi, hitung kolom yang ditempati, bukan hanya banyaknya tag cell.

# INSIGHT

Perbedaan `<th>` dan `<td>` adalah perannya, bukan sekadar tampilannya:

```html
<tr>
  <th scope="col">Harga</th>
  <td>Rp50.000</td>
</tr>
```

`<th>` memberi nama atau konteks pada data; `<td>` berisi nilainya. Membuat `<td>` menjadi bold dengan CSS hanya mengubah tampilan—tidak menjadikannya header untuk browser atau teknologi bantu. Jika tabel punya beberapa jenis informasi, tambahkan `<caption>` untuk menjelaskan tujuan tabel dan `scope` untuk menyatakan arah hubungan header.

---

<a id="html-bab-3"></a>

<!-- Sumber: HTML\3.HTML-forms.md -->

# HTML — Forms & Client-Side Validation

> `<form>` digunakan untuk menerima input dari user, mengumpulkan data tersebut, lalu mengirimkannya untuk diproses.

## 1. Core Concept

Form adalah bagian dari website yang memungkinkan user **memberikan data kepada sistem**.

Contoh penggunaan:

* Login
* Register
* Search
* Checkout
* Contact form
* Survey
* Upload data
* Filter pencarian

Mental model:

```text
User
 ↓
Mengisi Form
 ↓
HTML mengumpulkan input
 ↓
Validation
 ↓
Form dikirim
 ↓
Server memproses data
```

HTML bertugas menyediakan **struktur dan input**, sedangkan JavaScript dan backend dapat menangani proses yang lebih kompleks.

---

# 2. `<form>` — Container Utama

```html
<form>
    <!-- input di dalam form -->
</form>
```

`<form>` adalah container yang menandai:

> "Input-input di dalam bagian ini merupakan satu kumpulan data yang akan dikirim."

Contoh:

```html
<form>
    <input type="text">
    <input type="password">
    <input type="submit">
</form>
```

Tanpa `<form>`, input memang tetap bisa ditampilkan, tetapi browser tidak memiliki struktur form yang jelas untuk mengelompokkan dan mengirim kumpulan data tersebut sebagai satu submission.

---

# 3. `action` — Data Dikirim ke Mana?

```html
<form action="/login">
```

`action` menentukan **alamat tujuan pengiriman data form**. Nilainya biasanya berupa URL yang ditangani aplikasi di server. Jika atribut ini tidak ditulis, browser mengirim form ke URL halaman saat ini.

Contoh:

```html
<form action="/login">
    ...
</form>
```

Mental model:

```text
<form>
    action = "tujuan"
</form>
```

Misalnya:

```html
<form action="/register">
```

berarti ketika form dikirim, data diarahkan ke endpoint `/register`.

Dalam aplikasi nyata, endpoint tersebut biasanya ditangani oleh backend.

```text
HTML Form
    ↓
POST /register
    ↓
Backend
    ↓
Database / proses bisnis
```

---

# 4. `method` — Bagaimana Data Dikirim?

```html
<form action="/login" method="post">
```

`method` menentukan **cara browser mengirim data form**. Jika tidak ditulis, metode default-nya adalah `get`.

Dua method yang paling umum:

| Method | Karakteristik                     | Umumnya digunakan untuk       |
| ------ | --------------------------------- | ----------------------------- |
| `GET`  | Data dikirim melalui URL          | Search, filter, request data  |
| `POST` | Data dikirim sebagai request body | Login, register, membuat data |

### GET

```html
<form action="/search" method="get">
```

Misalnya user memasukkan:

```text
keyword = laptop
```

Request dapat terlihat seperti:

```text
/search?keyword=laptop
```

Karena data menjadi bagian dari URL, `GET` cocok untuk data yang ingin direpresentasikan sebagai URL, seperti pencarian.

### POST

```html
<form action="/register" method="post">
```

Data dikirim melalui request body, bukan ditempelkan pada URL.

Mental model sederhana:

```text
GET
Data → URL

POST
Data → Request Body
```

> `POST` bukan berarti otomatis "lebih aman" atau rahasia. Data pada request body tetap dapat diperiksa lewat alat developer atau tercatat di sistem; HTTPS diperlukan untuk melindungi data saat dikirim. Server juga tetap harus melakukan autentikasi (*authentication*, memastikan identitas pengguna), otorisasi (*authorization*, memeriksa hak akses), dan validasi (*validation*, memeriksa data).

Karena nilai `GET` menjadi bagian dari URL, jangan gunakan metode ini untuk password atau data sensitif. URL juga dapat tersimpan di riwayat browser atau dibagikan.

---

# 5. `<input>` — Field untuk Menerima Data

`<input>` digunakan untuk membuat berbagai macam field input.

```html
<input type="text">
```

Hal pentingnya:

> `<input>` tidak menentukan bentuk field sendiri. Atribut `type` menentukan perilaku dan jenis inputnya.

```text
<input>
   +
type
   ↓
jenis input
```

Contoh:

```html
<input type="text">
<input type="password">
<input type="number">
<input type="checkbox">
```

---

# 6. `<input type="text">`

```html
<input type="text">
```

Digunakan untuk input teks satu baris.

Contoh:

```html
<input type="text" name="username">
```

Cocok untuk:

* username
* nama
* kota
* pekerjaan
* kode tertentu

---

# 7. `<input type="password">`

```html
<input type="password">
```

Digunakan untuk input yang bersifat sensitif seperti password.

Karakter yang diketik ditampilkan sebagai sensor:

```text
********
```

Namun perlu dipahami:

> `type="password"` hanya mengubah cara browser menampilkan input. Ini bukan mekanisme enkripsi.

Keamanan password tetap bergantung pada bagaimana data dikirim dan diproses oleh aplikasi.

---

# 8. `<input type="number">`

```html
<input type="number">
```

Digunakan untuk input angka.

Contoh:

```html
<input type="number" name="age">
```

Browser dapat memberikan kontrol yang sesuai untuk angka.

Input ini juga dapat dikombinasikan dengan validation:

```html
<input type="number" min="18" max="60">
```

Artinya angka yang diterima harus berada dalam range yang ditentukan.

---

# 9. `<input type="range">`

```html
<input type="range">
```

Menampilkan slider.

Contoh:

```html
<input
    type="range"
    min="0"
    max="100"
>
```

Mental model:

```text
min ─────────────── max
        ↑
      value
```

Cocok untuk nilai yang dipilih dari sebuah rentang, misalnya:

* volume
* brightness
* rating
* tingkat kepuasan

---

# 10. `<input type="checkbox">`

```html
<input type="checkbox">
```

Checkbox digunakan ketika user dapat memilih atau tidak memilih suatu opsi.

Contoh:

```html
<input type="checkbox" name="newsletter">
```

Checkbox dapat digunakan sendiri:

```text
☐ Subscribe newsletter
```

atau bersama beberapa pilihan:

```text
☐ HTML
☐ CSS
☐ JavaScript
```

Karena setiap checkbox dapat dipilih secara independen, checkbox cocok untuk **multiple selection**.

Jika beberapa checkbox mewakili satu kumpulan pilihan, biasanya masing-masing memakai `name` yang sama tetapi `value` berbeda. Hanya checkbox yang dicentang yang dikirim; checkbox yang tidak dicentang tidak menghasilkan pasangan `name=value`.

---

# 11. `<input type="radio">`

```html
<input type="radio">
```

Radio button digunakan ketika user harus memilih **satu pilihan dari satu kelompok**.

Contoh:

```html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
```

Bagian pentingnya adalah `name`.

Radio button dengan `name` yang sama dianggap sebagai satu kelompok.

```text
name="gender"

○ Male
○ Female
```

User hanya dapat memilih satu.

Gunakan `value` yang berbeda untuk tiap pilihan supaya server dapat membedakan pilihan yang dikirim. Jika radio tidak memiliki `value`, browser mengirim nilai default `on`, yang biasanya kurang informatif.

### Checkbox vs Radio

|          | Checkbox                | Radio          |
| -------- | ----------------------- | -------------- |
| Pilihan  | Bisa banyak             | Satu per group |
| Grouping | Tidak harus sama `name` | `name` sama    |
| Contoh   | Hobi                    | Jenis kelamin  |

Mental model:

```text
Checkbox → boleh pilih beberapa
Radio    → pilih salah satu
```

---

# 12. `name` — Nama Data yang Dikirim

`name` sangat penting dalam form.

Contoh:

```html
<input type="text" name="username">
```

`name` menjadi **key** ketika data dikirim.

Misalnya user mengisi:

```text
username = dhimas
```

Data yang dikirim menjadi:

```text
username=dhimas
```

Karena itu, input tanpa `name` umumnya tidak menghasilkan pasangan data yang ingin dikirim ketika form disubmit.

Browser mengirim nilai dari kontrol form yang memenuhi syarat—misalnya kontrol tersebut memiliki `name` dan tidak sedang dinonaktifkan. Checkbox yang tidak dicentang, misalnya, tidak ikut terkirim.

---

# 13. `value` — Nilai yang Dikirim

`value` menentukan nilai yang dimiliki sebuah input.

Contoh:

```html
<input
    type="radio"
    name="gender"
    value="male"
>
```

Jika radio tersebut dipilih:

```text
name = gender
value = male
```

Data:

```text
gender=male
```

Untuk checkbox:

```html
<input
    type="checkbox"
    name="skill"
    value="javascript"
>
```

Jika dicentang:

```text
skill=javascript
```

Mental model:

```text
name  → nama/key
value → nilai/value
```

---

# 14. `name=value` — Bentuk Data Form

Ketika form dikirim, input yang berpartisipasi dalam submission direpresentasikan sebagai pasangan:

```text
name=value
```

Contoh:

```html
<input
    type="text"
    name="username"
    value="dhimas"
>
```

Menjadi:

```text
username=dhimas
```

Jika ada beberapa field:

```html
<input type="text" name="username">
<input type="number" name="age">
```

Misalnya:

```text
username=dhimas
age=22
```

Jadi jangan hanya melihat input sebagai "kotak untuk mengetik".

Secara data, input adalah:

```text
nama field
    +
nilai field
```

---

# 15. `<input type="submit">`

```html
<input type="submit" value="Submit">
```

Membuat tombol untuk mengirim form.

Contoh:

```html
<form action="/register" method="post">

    <input type="text" name="username">

    <input
        type="submit"
        value="Register"
    >

</form>
```

Ketika tombol ditekan:

```text
Submit
 ↓
Browser menjalankan proses form
 ↓
Validation
 ↓
Data dikirim jika valid
```

---

# 16. `<select>` — Dropdown

`<select>` digunakan untuk menyediakan pilihan dalam bentuk dropdown.

```html
<select name="city">
    <option value="pekanbaru">Pekanbaru</option>
    <option value="padang">Padang</option>
    <option value="batam">Batam</option>
</select>
```

Strukturnya:

```text
<select>
    ├── <option>
    ├── <option>
    └── <option>
</select>
```

`<select>` adalah wadah pilihan, sedangkan `<option>` adalah masing-masing pilihan.

---

# 17. `<option>` — Pilihan dalam `<select>`

```html
<option value="pekanbaru">
    Pekanbaru
</option>
```

Ada dua konsep yang perlu dibedakan:

```html
value="pekanbaru"
```

adalah nilai yang dikirim.

Sedangkan:

```html
Pekanbaru
```

adalah teks yang dilihat user.

Contoh:

```html
<option value="id">
    Indonesia
</option>
```

User melihat:

```text
Indonesia
```

Data yang dikirim:

```text
id
```

Jadi:

```text
Tampilan → Indonesia
Data     → id
```

---

# 18. `<datalist>` — Pilihan yang Bisa Dicari

`<datalist>` digunakan untuk memberikan daftar pilihan yang terhubung dengan `<input>`.

Contoh:

```html
<input
    type="text"
    list="cities"
    name="city"
>

<datalist id="cities">
    <option value="Pekanbaru">
    <option value="Padang">
    <option value="Batam">
</datalist>
```

Hubungannya terjadi karena:

```html
list="cities"
```

pada `<input>` cocok dengan:

```html
id="cities"
```

pada `<datalist>`.

```text
<input list="cities">
          ↓
    id="cities"
          ↓
<datalist>
    options
</datalist>
```

Berbeda dengan `<select>`, user tetap menggunakan input untuk mengetik dan dapat memilih suggestion.

Daftar pada `<datalist>` hanya memberi saran, bukan membatasi input ke pilihan yang tersedia. Pengguna masih dapat mengetik nilai lain, jadi server tetap perlu memeriksa apakah nilai itu dapat diterima.

---

# 19. `<select>` vs `<datalist>`

| `<select>`                                | `<datalist>`                        |
| ----------------------------------------- | ----------------------------------- |
| Pilihan utama dari daftar                 | Input dengan suggestion             |
| User memilih option                       | User dapat mengetik                 |
| `<option>`                                | `<option>`                          |
| Tidak perlu `<input>` terpisah            | Harus terhubung dengan `<input>`    |
| Cocok untuk pilihan yang sudah ditentukan | Cocok untuk suggestion/autocomplete |

Mental model:

```text
<select>
"pilih salah satu"

<datalist>
"ketik, lalu pilih dari suggestion jika cocok"
```

---

# 20. `<textarea>` — Input Teks Multi-line

```html
<textarea></textarea>
```

Digunakan untuk teks yang membutuhkan beberapa baris.

Contoh:

```html
<textarea
    name="message"
    rows="5"
    cols="30"
></textarea>
```

Cocok untuk:

* komentar
* pesan
* alamat
* deskripsi
* feedback

`rows` dan `cols` memberi petunjuk ukuran awal area teks (jumlah baris dan lebar karakter), bukan batas jumlah teks yang boleh dimasukkan. Isi awal `<textarea>` ditulis di antara tag pembuka dan penutup, bukan di atribut `value`.

Perbedaan dengan `<input type="text">`:

```text
<input type="text">
→ satu baris

<textarea>
→ banyak baris
```

---

# 21. `placeholder` — Petunjuk Input

`placeholder` memberikan contoh atau petunjuk sebelum user mengisi field.

```html
<input
    type="text"
    name="username"
    placeholder="Masukkan username"
>
```

Tampilannya kira-kira:

```text
[ Masukkan username ]
```

Setelah user mengetik:

```text
[ dhimas ]
```

placeholder menghilang.

Hal penting:

> `placeholder` bukan nilai input.

Jika user tidak mengetik apa pun, `"Masukkan username"` **tidak dikirim sebagai value**.

Mental model:

```text
placeholder → petunjuk
value       → data sebenarnya
```

---

# 22. `<label>` — Memberi Nama pada Input

Walaupun fokus utama lesson adalah form input, input sebaiknya memiliki `<label>` yang jelas.

```html
<label for="username">
    Username
</label>

<input
    id="username"
    name="username"
    type="text"
>
```

Hubungannya:

```text
label for="username"
        ↓
input id="username"
```

`for` pada `<label>` harus cocok dengan `id` input.

Label membuat form lebih jelas bagi user dan membantu accessibility.

Saat label diklik, browser juga memfokuskan input yang terhubung (atau mengubah pilihan checkbox/radio). Placeholder bukan pengganti label karena petunjuk placeholder menghilang setelah pengguna mulai mengetik.

---

# 23. Client-Side Validation

Client-side validation adalah pemeriksaan input yang dilakukan **di browser sebelum data dikirim ke server**.

Mental model:

```text
User mengisi form
       ↓
Browser memeriksa
       ↓
Valid?
  ├── Tidak → tampilkan error
  └── Ya    → form dapat dikirim
```

Tujuannya:

* memberikan feedback lebih cepat
* mencegah input yang jelas-jelas tidak sesuai
* mengurangi request yang tidak valid ke server

Namun:

> Client-side validation bukan pengganti server-side validation.

User dapat memanipulasi browser atau request. Karena itu backend tetap harus melakukan validasi sendiri.

---

# 24. `required` — Wajib Diisi

```html
<input
    type="text"
    name="username"
    required
>
```

`required` membuat field wajib memiliki nilai sebelum form dapat dikirim.

Tanpa:

```html
required
```

user dapat mengirim:

```text
username = kosong
```

Dengan:

```html
required
```

browser akan menolak submission jika field belum diisi.

Pemeriksaan ini dilakukan oleh browser, jadi bukan jaminan bahwa data yang diterima server valid. Backend tetap perlu menerapkan aturan yang sama.

---

# 25. `min` — Nilai Minimum

Untuk input angka:

```html
<input
    type="number"
    name="age"
    min="18"
>
```

Artinya nilai minimum yang diterima adalah `18`.

```text
17  → ❌
18  → ✅
19  → ✅
```

Pada contoh ini, `min` membatasi nilai angka. Atribut ini juga dapat memberi batas bawah pada jenis nilai lain, seperti tanggal.

---

# 26. `max` — Nilai Maksimum

```html
<input
    type="number"
    name="age"
    max="60"
>
```

Artinya nilai maksimal adalah `60`.

```text
59  → ✅
60  → ✅
61  → ❌
```

`min` dan `max` sering digunakan bersama:

```html
<input
    type="number"
    min="18"
    max="60"
>
```

Mental model:

```text
min → batas bawah
max → batas atas
```

---

# 27. `minlength` — Minimal Jumlah Karakter

Untuk input teks:

```html
<input
    type="text"
    name="username"
    minlength="5"
>
```

Artinya input harus memiliki minimal 5 karakter.

```text
abc     → ❌
abcd    → ❌
abcde   → ✅
```

Perhatikan:

```text
min
```

mengatur **nilai angka**.

Sedangkan:

```text
minlength
```

mengatur **jumlah karakter**.

---

# 28. `maxlength` — Maksimal Jumlah Karakter

```html
<input
    type="text"
    name="username"
    maxlength="20"
>
```

Artinya input tidak boleh melebihi 20 karakter.

Mental model:

```text
minlength → minimal karakter
maxlength → maksimal karakter
```

---

# 29. `pattern` — Validasi dengan Pola

`pattern` digunakan ketika input harus mengikuti pola tertentu.

Contoh sederhana:

```html
<input
    type="text"
    name="code"
    pattern="[A-Z]{3}"
>
```

Artinya input harus mengikuti pola tiga huruf kapital.

Contoh:

```text
ABC → ✅
XYZ → ✅
abc → ❌
AB   → ❌
```

`pattern` menggunakan regular expression (regex). Pada contoh `[A-Z]{3}`, `[A-Z]` berarti satu huruf kapital A sampai Z, sedangkan `{3}` berarti tepat tiga kali. Browser mencocokkan pola terhadap seluruh nilai input, bukan hanya sebagian teks; pola juga peka huruf besar-kecil.

Mental model:

```text
pattern
   ↓
aturan bentuk input
   ↓
cocok?
   ├── Ya → valid
   └── Tidak → invalid
```

Pattern berguna ketika validasi tidak cukup hanya dengan `minlength`, `maxlength`, atau batas angka.

---

# 30. Validation Attribute Cheat Sheet

| Attribute   | Digunakan untuk                       | Contoh               |
| ----------- | ------------------------------------- | -------------------- |
| `required`  | Wajib diisi                           | `required`           |
| `min`       | Batas bawah nilai (mis. angka/tanggal) | `min="18"`           |
| `max`       | Batas atas nilai (mis. angka/tanggal)  | `max="60"`           |
| `minlength` | Jumlah karakter minimum               | `minlength="8"`      |
| `maxlength` | Jumlah karakter maksimum              | `maxlength="20"`     |
| `pattern`   | Pola input                            | `pattern="[A-Z]{3}"` |

---

# 31. Validasi Tidak Lolos

Misalnya:

```html
<input
    type="number"
    name="age"
    min="18"
    max="60"
    required
>
```

User memasukkan:

```text
15
```

Browser mengetahui:

```text
15 < 18
```

Maka validation gagal.

Form tidak langsung dikirim dan browser memberikan feedback kepada user.

Ini membuat feedback terjadi lebih cepat:

```text
Tanpa client-side validation:

User
 ↓
Submit
 ↓
Server
 ↓
Error
 ↓
Response
 ↓
User memperbaiki
```

Dengan client-side validation:

```text
User
 ↓
Submit
 ↓
Browser memeriksa
 ↓
Error langsung
```

---

# 32. Client-side vs Server-side Validation

Keduanya memiliki peran berbeda.

| Client-side                        | Server-side                        |
| ---------------------------------- | ---------------------------------- |
| Berjalan di browser                | Berjalan di server                 |
| Feedback cepat                     | Validasi keamanan utama            |
| Meningkatkan UX                    | Melindungi sistem                  |
| Dapat dimanipulasi user            | Lebih dipercaya                    |
| Bukan pengganti backend validation | Wajib untuk data yang masuk server |

Mental model penting:

```text
Client-side
→ "Apakah input ini terlihat benar?"

Server-side
→ "Apakah input ini benar-benar boleh diproses?"
```

Misalnya:

```text
<input required>
```

mencegah user biasa mengirim field kosong melalui browser.

Tetapi attacker dapat membuat HTTP request sendiri tanpa mengikuti aturan HTML tersebut.

Karena itu backend tetap harus memvalidasi:

```text
Request
 ↓
Backend validation
 ↓
Business rules
 ↓
Database
```

---

# 33. Contoh Form Lengkap

```html
<form action="/register" method="post">

    <label for="username">
        Username
    </label>

    <input
        id="username"
        type="text"
        name="username"
        placeholder="Masukkan username"
        minlength="5"
        maxlength="20"
        required
    >

    <br>

    <label for="password">
        Password
    </label>

    <input
        id="password"
        type="password"
        name="password"
        minlength="8"
        required
    >

    <br>

    <label for="age">
        Age
    </label>

    <input
        id="age"
        type="number"
        name="age"
        min="18"
        max="60"
        required
    >

    <br>

    <fieldset>
        <legend>Gender</legend>

        <input
            type="radio"
            id="male"
            name="gender"
            value="male"
        >

        <label for="male">
            Male
        </label>

        <input
            type="radio"
            id="female"
            name="gender"
            value="female"
        >

        <label for="female">
            Female
        </label>
    </fieldset>

    <br>

    <fieldset>
        <legend>Skills</legend>

        <input
            type="checkbox"
            id="html"
            name="skill"
            value="html"
        >

        <label for="html">
            HTML
        </label>

        <input
            type="checkbox"
            id="javascript"
            name="skill"
            value="javascript"
        >

        <label for="javascript">
            JavaScript
        </label>
    </fieldset>

    <br>

    <label for="city">
        City
    </label>

    <select id="city" name="city">
        <option value="pekanbaru">Pekanbaru</option>
        <option value="padang">Padang</option>
        <option value="batam">Batam</option>
    </select>

    <br>

    <label for="message">
        Message
    </label>

    <textarea
        id="message"
        name="message"
        rows="5"
        cols="30"
    ></textarea>

    <br>

    <input
        type="submit"
        value="Register"
    >

</form>
```

---

# 34. Cara Membaca Form sebagai Developer

Jangan melihat form sebagai kumpulan tag yang harus dihafal.

Baca dari alur datanya:

```text
<form>
    ↓
Ke mana data dikirim?
action

    ↓
Bagaimana data dikirim?
method

    ↓
Data apa yang diminta?
input / select / textarea

    ↓
Nama datanya apa?
name

    ↓
Nilainya apa?
value

    ↓
Aturan inputnya apa?
required / min / max / minlength / maxlength / pattern

    ↓
Kirim
submit
```

Dengan cara berpikir ini, form menjadi jauh lebih mudah dipahami.

---

# 35. Cause → Effect yang Wajib Dipahami

### `action`

```html
<form action="/register">
```

```text
action
  ↓
menentukan endpoint/tujuan submission
```

### `method`

```html
<form method="post">
```

```text
method
  ↓
menentukan cara request dikirim
```

### `name`

```html
<input name="username">
```

```text
name
  ↓
menjadi nama/key data
```

### `value`

```html
<input name="role" value="admin">
```

```text
value
  ↓
menjadi nilai data
```

### `required`

```html
<input required>
```

```text
kosong
  ↓
validation gagal
```

### `min` / `max`

```html
<input type="number" min="18" max="60">
```

```text
nilai < 18     → invalid
18–60          → valid
nilai > 60     → invalid
```

### `minlength` / `maxlength`

```text
jumlah karakter
       ↓
minlength / maxlength
```

### `pattern`

```text
input
 ↓
dicocokkan dengan regex
 ↓
match?
```

---

# 36. Cheat Sheet — HTML Forms

| Element / Attribute | Fungsi                                     |
| ------------------- | ------------------------------------------ |
| `<form>`            | Container untuk kumpulan input             |
| `action`            | Menentukan tujuan submission               |
| `method`            | Menentukan metode pengiriman               |
| `<input>`           | Input berbagai jenis data                  |
| `type="text"`       | Teks satu baris                            |
| `type="password"`   | Input password                             |
| `type="number"`     | Input angka                                |
| `type="range"`      | Slider angka                               |
| `type="checkbox"`   | Pilihan yang dapat dipilih lebih dari satu |
| `type="radio"`      | Pilihan satu dari satu group               |
| `type="submit"`     | Tombol submit                              |
| `name`              | Nama/key data                              |
| `value`             | Nilai data                                 |
| `placeholder`       | Petunjuk input                             |
| `<select>`          | Dropdown                                   |
| `<option>`          | Pilihan dalam dropdown                     |
| `<datalist>`        | Daftar suggestion untuk input              |
| `<textarea>`        | Input teks multi-line                      |
| `<label>`           | Label/nama untuk input                     |
| `required`          | Field wajib diisi                          |
| `min`               | Nilai minimum                              |
| `max`               | Nilai maksimum                             |
| `minlength`         | Minimal karakter                           |
| `maxlength`         | Maksimal karakter                          |
| `pattern`           | Pola input menggunakan regex               |

---

# 37. Perbedaan yang Sering Membingungkan

### `value` vs `placeholder`

```text
value
→ data sebenarnya

placeholder
→ petunjuk
```

---

### `min` vs `minlength`

```text
min
→ nilai angka

minlength
→ jumlah karakter
```

---

### `max` vs `maxlength`

```text
max
→ nilai angka

maxlength
→ jumlah karakter
```

---

### `<select>` vs `<datalist>`

```text
<select>
→ pilih dari daftar

<datalist>
→ input + suggestion
```

---

### Checkbox vs Radio

```text
checkbox
→ bisa pilih banyak

radio
→ pilih satu dalam group
```

---

### Client-side vs Server-side

```text
client-side
→ browser
→ UX / feedback cepat

server-side
→ backend
→ keamanan dan validasi sebenarnya
```

---

# 38. Mental Model Utama

Bayangkan form seperti **formulir pendaftaran digital**.

```text
<form>
│
├── action
│   └── formulir dikirim ke mana?
│
├── method
│   └── bagaimana data dikirim?
│
├── input
│   ├── type
│   │   └── jenis data apa?
│   │
│   ├── name
│   │   └── nama/key data
│   │
│   ├── value
│   │   └── nilai data
│   │
│   └── validation
│       └── aturan input
│
├── select
│   └── pilihan
│
├── datalist
│   └── suggestion
│
├── textarea
│   └── teks panjang
│
└── submit
    └── kirim data
```

Alur besarnya:

```text
        USER
          ↓
      Mengisi Form
          ↓
   ┌─────────────────┐
   │ Client Validation│
   └─────────────────┘
          ↓
       Valid?
       /    \
     Tidak   Ya
      ↓       ↓
    Error    Submit
              ↓
         action + method
              ↓
            Server
              ↓
        Server Validation
              ↓
          Process Data
```

---

# 39. Key Takeaway

1. `<form>` digunakan untuk mengumpulkan dan mengirim input user.
2. `action` menentukan **ke mana** data dikirim.
3. `method` menentukan **bagaimana** data dikirim.
4. `<input>` dapat memiliki berbagai jenis melalui `type`.
5. `name` menjadi nama/key data yang dikirim.
6. `value` menjadi nilai data yang dikirim.
7. `placeholder` hanya memberikan petunjuk, bukan data.
8. `<select>` digunakan untuk pilihan dropdown.
9. `<datalist>` memberikan suggestion pada `<input>`.
10. `<textarea>` digunakan untuk input teks multi-line.
11. `required`, `min`, `max`, `minlength`, `maxlength`, dan `pattern` membantu melakukan client-side validation.
12. Client-side validation membantu UX, tetapi **tidak menggantikan server-side validation**.
13. Form pada dasarnya adalah proses:

```text
Input
 ↓
Validation
 ↓
name=value
 ↓
Request
 ↓
Server
```

> **Cara berpikir utama:** jangan menghafal `<input>` sebagai sekumpulan `type`. Pahami bahwa form adalah mekanisme untuk mengubah **input user → data terstruktur → request → proses backend**.

# BEDAH FORM — Mengapa `label`, `id`, dan `name` Berbeda?

```html
<form action="/subscribe" method="post">
  <label for="email">Alamat email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Berlangganan</button>
</form>
```

Ketiga atribut/nilai itu menyelesaikan masalah yang berbeda:

* `for="email"` menghubungkan label ke control yang `id`-nya `email`. Klik label dapat memfokuskan input, dan nama control tersedia sebagai label aksesibel. Jika `for` tidak cocok dengan `id`, hubungan eksplisit itu putus.
* `id="email"` mengidentifikasi element di dokumen; nilainya harus unik. `id` bukan nama field yang otomatis dikirim.
* `name="email"` menjadi key pada data form. Saat dikirim, browser membentuk pasangan seperti `email=user@example.com`. Input tanpa `name` umumnya tidak ikut sebagai field bernama dalam data form.
* `value` adalah nilai control saat ini atau nilai awalnya, bukan pengenal maupun nama field. Server menerima pasangan `name=value`; misalnya `name="email"` dengan nilai `user@example.com` dikirim sebagai field `email`.
* `type="email"` memberi browser konteks bahwa input mengharapkan alamat email, sehingga browser dapat menyediakan keyboard yang sesuai di perangkat tertentu dan validasi format dasar.
* `required` meminta browser menolak submit biasa ketika nilai kosong. Ini membantu pengguna memperbaiki input sebelum request dikirim, tetapi bukan batas keamanan: request dapat dibuat di luar form, jadi server tetap harus memvalidasi.

Mengapa tombol ditulis `type="submit"` dengan jelas? Tombol di dalam form secara default dapat bertindak sebagai submit button. Nilai eksplisit membantu pembaca kode mengerti niatnya dan mencegah tombol aksi lain tanpa sengaja mengirim form. Jika tombol hanya membuka dialog atau mengubah UI, gunakan `type="button"`.

Cara menalar form bukan hanya “input mana yang terlihat?”, melainkan: **control mana yang punya nama, nilai apa yang dikirim, label mana yang terhubung dengannya, kapan browser memvalidasi, dan apa yang tetap harus diperiksa server?**

Ringkasnya: `id` adalah alamat unik element di dalam dokumen, `for` menunjuk alamat itu dari label, `name` menjadi nama field dalam data request, dan `value` menjadi datanya. Keempatnya tidak saling menggantikan. Mengganti `id` sambil memperbarui `for` dapat mempertahankan label; mengganti `name` dapat mengubah data yang diterima backend.

# INSIGHT

Perbedaan `id` dan `name` pada input adalah kegunaannya:

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

`id` mengidentifikasi element di halaman dan menghubungkan `<label for="email">` dengan input. `name` menjadi kunci yang dikirim bersama nilai input saat form disubmit. Jadi, `id` membantu hubungan dalam dokumen; `name` membantu membentuk data untuk server.

Jangan samakan validasi browser seperti `required` atau `pattern` dengan validasi server. Validasi browser memberi umpan balik lebih awal, tetapi request masih bisa dikirim tanpa melewati pemeriksaan browser. Server tetap harus memvalidasi data sebelum memakai atau menyimpannya.

---

<a id="html-bab-4"></a>

<!-- Sumber: HTML\4.HTML-Semantic.md -->

# HTML — Semantic HTML

> Semantic HTML adalah penggunaan elemen HTML berdasarkan **makna dan peran content-nya**, bukan hanya berdasarkan bentuk tampilannya.

## 1. Core Concept

HTML bukan hanya digunakan untuk membuat sesuatu "terlihat".

HTML digunakan untuk memberi tahu browser dan developer:

> **"Bagian ini sebenarnya apa?"**

Contoh:

```html
<div>
    Blog Saya
</div>
```

Browser melihatnya sebagai sebuah container biasa.

Sedangkan:

```html
<header>
    Blog Saya
</header>
```

Browser mengetahui bahwa bagian tersebut merupakan **header**.

Secara visual, keduanya bahkan bisa dibuat terlihat sama dengan CSS.

Perbedaannya ada pada **makna dan struktur**.

```text
Non-semantic
<div>
→ "Ini sebuah container."

Semantic
<header>
→ "Ini bagian header."
```

Jadi semantic HTML bukan tentang membuat halaman menjadi lebih cantik.

Semantic HTML tentang membuat **struktur HTML lebih bermakna**.

---

# 2. Semantic vs Non-Semantic HTML

### Non-semantic

Contoh elemen yang tidak menjelaskan makna content secara spesifik:

```html
<div>
    ...
</div>

<span>
    ...
</span>
```

`<div>` hanya mengatakan:

> "Ini adalah sebuah container."

`<span>` mengatakan:

> "Ini adalah bagian kecil dari content."

Keduanya tidak menjelaskan **peran content tersebut**.

---

### Semantic

Contoh:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Elemen-elemen tersebut memberikan informasi mengenai **fungsi bagian tersebut dalam halaman**.

Mental model:

```text
<div>
→ container

<header>
→ bagian kepala halaman

<nav>
→ navigasi

<main>
→ content utama

<article>
→ content mandiri

<footer>
→ bagian penutup
```

---

# 3. Kenapa Semantic HTML Penting?

Semantic HTML membantu beberapa pihak sekaligus:

```text
HTML Semantic
     │
     ├── Developer
     │   └── struktur lebih mudah dipahami
     │
     ├── Browser
     │   └── memahami struktur dokumen
     │
     ├── Accessibility tools
     │   └── membantu screen reader memahami halaman
     │
     └── Search Engine
         └── mendapat struktur content yang lebih jelas
```

Jadi manfaat semantic HTML bukan sekadar "kode terlihat rapi".

Makna HTML dapat membantu teknologi lain memahami struktur halaman.

> **Catatan:** Memilih elemen semantic yang tepat membantu membuat struktur lebih jelas, tetapi tidak otomatis membuat seluruh halaman accessible atau mendapat peringkat SEO tinggi. Label, teks alternatif, navigasi yang baik, dan kualitas content tetap perlu diperhatikan.

---

# 4. `<header>` — Bagian Pembuka

```html
<header>
    <h1>My Blog</h1>
</header>
```

`<header>` digunakan untuk content pengantar atau pembuka suatu bagian.

Sering digunakan untuk:

* logo
* judul
* introductory content
* navigasi
* informasi awal sebuah section/article

Contoh:

```html
<header>
    <h1>Belajar JavaScript</h1>
    <p>Panduan JavaScript untuk pemula.</p>
</header>
```

Penting:

> `<header>` tidak selalu berarti "header seluruh website".

Sebuah `<article>` juga dapat memiliki `<header>` sendiri.

```html
<article>
    <header>
        <h2>Belajar Array</h2>
        <p>Ditulis oleh Dhimas</p>
    </header>

    <p>Array digunakan untuk...</p>
</article>
```

Jadi `<header>` berarti **bagian pengantar dari suatu content**, bukan sekadar posisi paling atas.

---

# 5. `<nav>` — Navigasi

```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>
```

`<nav>` digunakan untuk sekumpulan link navigasi penting.

Contohnya:

```text
Home
About
Projects
Contact
```

Mental model:

```text
<nav>
→ "Link-link ini digunakan untuk berpindah bagian/halaman."
```

Tidak semua kumpulan `<a>` harus berada di dalam `<nav>`.

Misalnya link referensi di tengah artikel belum tentu merupakan navigasi utama.

Gunakan `<nav>` ketika kumpulan link tersebut memang berfungsi sebagai **navigasi**.

---

# 6. `<main>` — Content Utama

```html
<main>
    ...
</main>
```

`<main>` menandai **content utama halaman**.

Contoh:

```html
<header>
    <h1>My Website</h1>
</header>

<nav>
    ...
</nav>

<main>
    <h2>Latest Articles</h2>
    ...
</main>

<footer>
    ...
</footer>
```

Mental model:

```text
<header>
    bagian pengantar
<nav>
    navigasi
<main>
    inti halaman
<footer>
    bagian penutup
```

Dalam satu halaman, gunakan satu `<main>` yang terlihat sebagai content utama.

Content seperti navigasi utama, sidebar, atau footer biasanya bukan bagian dari `<main>`.

---

# 7. `<section>` — Bagian Tematik

```html
<section>
    <h2>Projects</h2>

    <p>Berikut beberapa project saya.</p>
</section>
```

`<section>` digunakan untuk mengelompokkan content yang memiliki **tema atau topik yang sama**.

Misalnya halaman portfolio:

```html
<main>

    <section>
        <h2>About Me</h2>
        ...
    </section>

    <section>
        <h2>Projects</h2>
        ...
    </section>

    <section>
        <h2>Contact</h2>
        ...
    </section>

</main>
```

Setiap section memiliki topik yang berbeda.

Mental model:

```text
<section>
→ "Ini satu bagian/topik dari halaman."
```

Biasanya section memiliki heading.

---

# 8. `<article>` — Content yang Berdiri Sendiri

```html
<article>
    <h2>Belajar Semantic HTML</h2>

    <p>Semantic HTML membantu...</p>
</article>
```

`<article>` digunakan untuk content yang secara konsep dapat dianggap sebagai **unit yang berdiri sendiri**.

Contohnya:

* artikel blog
* berita
* forum post
* komentar
* review
* postingan
* kartu produk tertentu

Bayangkan content tersebut dipindahkan keluar dari halaman.

Jika content tersebut masih masuk akal sebagai sebuah unit, `<article>` sering menjadi kandidat yang tepat.

Contoh:

```html
<section>
    <h2>Latest Articles</h2>

    <article>
        <h3>Belajar HTML</h3>
        <p>...</p>
    </article>

    <article>
        <h3>Belajar CSS</h3>
        <p>...</p>
    </article>
</section>
```

Hubungannya:

```text
<section>
→ kelompok/topik

<article>
→ content mandiri di dalam kelompok tersebut
```

---

# 9. `<section>` vs `<article>`

Ini salah satu perbedaan yang paling penting.

### `<section>`

Digunakan untuk:

> **mengelompokkan content berdasarkan tema.**

### `<article>`

Digunakan untuk:

> **content yang dapat berdiri sebagai unit mandiri.**

Contoh:

```html
<section>
    <h2>Berita Terbaru</h2>

    <article>
        <h3>Berita 1</h3>
        ...
    </article>

    <article>
        <h3>Berita 2</h3>
        ...
    </article>
</section>
```

Mental model:

```text
<section>
→ "kelompoknya apa?"

<article>
→ "unit mandirinya apa?"
```

---

# 10. `<aside>` — Content Pendukung

```html
<aside>
    <h2>Related Articles</h2>
    ...
</aside>
```

`<aside>` digunakan untuk content yang **berhubungan dengan content utama tetapi bukan bagian inti dari content tersebut**.

Contohnya:

* sidebar
* related articles
* iklan
* tips
* author information
* supplementary information

Contoh:

```html
<main>

    <article>
        <h1>Belajar JavaScript</h1>

        <p>JavaScript adalah...</p>
    </article>

    <aside>
        <h2>Artikel Terkait</h2>
        ...
    </aside>

</main>
```

Mental model:

```text
main content
     │
     ├── inti → <article>
     │
     └── pendukung → <aside>
```

`<aside>` tidak selalu berarti sidebar secara visual.

Yang penting adalah **hubungan content-nya**.

Artinya, tentukan apakah content tersebut bersifat tambahan berdasarkan konteks bagian di sekitarnya; jangan memilih `<aside>` hanya karena ingin membuat kolom di sisi halaman.

---

# 11. `<footer>` — Bagian Penutup

```html
<footer>
    <p>&copy; 2026 Dhimas</p>
</footer>
```

`<footer>` digunakan untuk informasi penutup dari suatu halaman atau bagian.

Contohnya:

* copyright
* informasi author
* link tambahan
* contact information
* related links

Seperti `<header>`, `<footer>` juga dapat berada pada level yang berbeda.

```html
<article>

    <header>
        <h2>Belajar HTML</h2>
    </header>

    <p>...</p>

    <footer>
        <p>Written by Dhimas</p>
    </footer>

</article>
```

Jadi `<footer>` tidak selalu berarti:

> "bagian paling bawah website."

Ia dapat menjadi footer dari sebuah `<article>`.

---

# 12. `<figure>` — Content Visual yang Berdiri sebagai Unit

```html
<figure>
    <img src="diagram.png" alt="Diagram sistem">
</figure>
```

`<figure>` digunakan untuk content seperti:

* gambar
* diagram
* ilustrasi
* kode
* grafik

yang diperlakukan sebagai sebuah unit tersendiri.

Contoh:

```html
<figure>
    <img
        src="architecture.png"
        alt="Arsitektur aplikasi"
    >
</figure>
```

---

# 13. `<figcaption>` — Caption untuk `<figure>`

```html
<figure>

    <img
        src="architecture.png"
        alt="Arsitektur aplikasi"
    >

    <figcaption>
        Arsitektur sistem aplikasi.
    </figcaption>

</figure>
```

`<figcaption>` memberikan keterangan untuk `<figure>`.

Strukturnya:

```text
<figure>
    visual/content
        +
    <figcaption>
        keterangan
</figure>
```

Ini lebih bermakna daripada sekadar:

```html
<div>
    <img src="architecture.png" alt="Arsitektur sistem aplikasi">
    <p>Arsitektur sistem aplikasi.</p>
</div>
```

karena HTML secara eksplisit menyatakan bahwa teks tersebut adalah caption dari figure.

---

<a id="html-blockquote"></a>

# 14. `<blockquote>` — Kutipan Panjang

`<blockquote>` menandai kutipan yang diambil dari sumber lain dan disajikan sebagai blok terpisah. Element ini menyampaikan makna kutipan, bukan sekadar membuat teks menjorok.

```html
<blockquote cite="https://example.com/article">
  <p>
    Aksesibilitas perlu dipertimbangkan sejak awal saat merancang sebuah halaman.
  </p>
</blockquote>
```

Attribute `cite` dapat berisi URL sumber kutipan, tetapi alamat itu tidak otomatis ditampilkan kepada pengguna. Cantumkan atribusi yang terlihat, misalnya dengan tautan:

```html
<figure>
  <blockquote cite="https://example.com/article">
    <p>
      Aksesibilitas perlu dipertimbangkan sejak awal saat merancang sebuah halaman.
    </p>
  </blockquote>
  <figcaption>
    — Dari <cite><a href="https://example.com/article">Panduan Aksesibilitas</a></cite>
  </figcaption>
</figure>
```

`<cite>` di contoh menandai judul karya yang dirujuk. Jangan gunakan `<blockquote>` hanya untuk indentasi atau tampilan; atur tampilan kutipan dengan CSS.

Untuk kutipan pendek yang berada di dalam kalimat, gunakan `<q>`:

```html
<p>
  Panduan tersebut menyebut, <q>aksesibilitas adalah tanggung jawab bersama</q>.
</p>
```

Browser biasanya menambahkan tanda kutip pada `<q>` secara otomatis. Jangan menambahkan tanda kutip lagi kecuali memang diperlukan oleh gaya penulisan.

---

# 15. `<time>` — Menandai Waktu/Tanggal

```html
<time datetime="2026-10-06">
    October 6, 2026
</time>
```

`<time>` digunakan untuk menandai content yang merepresentasikan waktu atau tanggal.

Contoh:

```html
<p>
    Published on
    <time datetime="2026-10-06">
        October 6, 2026
    </time>
</p>
```

Teks yang terlihat user dapat berupa:

```text
October 6, 2026
```

sedangkan `datetime` memberikan representasi yang lebih terstruktur.

Contohnya, `datetime="2026-10-06"` memakai format tahun-bulan-hari (`YYYY-MM-DD`), sehingga program tidak perlu menebak arti tanggal dari teks seperti "October 6, 2026".

Mental model:

```text
teks yang dibaca manusia
        +
format waktu yang dipahami mesin
```

---

# 16. `<address>` — Informasi Kontak

```html
<address>
    Contact: dhimas@example.com
</address>
```

`<address>` digunakan untuk informasi kontak yang berhubungan dengan content atau pemilik halaman.

Contohnya dapat digunakan pada footer:

```html
<footer>
    <address>
        Contact: dhimas@example.com
    </address>
</footer>
```

Jangan menganggap `<address>` hanya berarti alamat rumah.

Maknanya lebih dekat ke **informasi kontak**.

Jika berada di dalam `<article>`, informasi kontaknya berkaitan dengan penulis atau pemilik artikel itu. Jika berada di luar artikel, konteksnya biasanya pemilik halaman. Jadi elemen ini bukan untuk sembarang alamat yang disebut dalam artikel.

---

# 17. `<details>` dan `<summary>`

HTML juga menyediakan semantic element untuk content yang dapat dibuka/tutup.

```html
<details>
    <summary>What is HTML?</summary>

    <p>
        HTML adalah markup language
        untuk menyusun struktur halaman.
    </p>
</details>
```

`<summary>` menjadi bagian yang dapat diklik.

`<details>` menyimpan content yang dapat dibuka atau disembunyikan.

Mental model:

```text
<details>
    ├── <summary>
    │    → judul/tombol
    │
    └── content
         → informasi tambahan
</details>
```

Ini berguna untuk:

* FAQ
* informasi tambahan
* disclosure content

Secara default, content di dalam `<details>` tertutup dan bisa dibuka dengan memilih `<summary>`. Tambahkan atribut boolean `open` bila ingin bagian itu terbuka sejak awal, misalnya `<details open>`.

---

# 18. Struktur Semantic Website

Contoh struktur halaman sederhana:

```html
<body>

    <header>
        <h1>My Portfolio</h1>

        <nav>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>

        <section>
            <h2>About Me</h2>

            <p>
                Saya adalah fresh graduate
                Teknik Informatika.
            </p>
        </section>

        <section>
            <h2>Projects</h2>

            <article>
                <h3>Project A</h3>
                <p>Deskripsi project...</p>
            </article>

            <article>
                <h3>Project B</h3>
                <p>Deskripsi project...</p>
            </article>
        </section>

        <aside>
            <h2>Related</h2>
            ...
        </aside>

    </main>

    <footer>
        <p>&copy; 2026 Dhimas</p>
    </footer>

</body>
```

Strukturnya dapat dibaca manusia:

```text
Website
│
├── Header
│   ├── Title
│   └── Navigation
│
├── Main
│   │
│   ├── About Section
│   │
│   ├── Projects Section
│   │   ├── Article
│   │   └── Article
│   │
│   └── Aside
│
└── Footer
```

Ini adalah salah satu tujuan utama semantic HTML:

> **struktur HTML dapat dibaca dan dipahami tanpa harus melihat CSS.**

---

# 19. Semantic HTML Tidak Berarti Tidak Boleh Menggunakan `<div>`

`<div>` bukan elemen yang buruk.

`<div>` tetap sangat berguna ketika memang tidak ada elemen semantic yang lebih sesuai.

Contoh:

```html
<div class="card">
    ...
</div>
```

Jika `div` tersebut hanya digunakan sebagai container untuk kebutuhan layout CSS, penggunaan `<div>` masuk akal.

Yang perlu dihindari adalah menggunakan `<div>` untuk segala sesuatu:

```html
<div>
    <div>
        <div>
            <div>
                Navigation
            </div>
        </div>
    </div>
</div>
```

Jika bagian tersebut memang merupakan navigasi, lebih jelas:

```html
<nav>
    ...
</nav>
```

Mental model:

```text
Ada semantic element yang tepat?
        │
      Ya ──→ gunakan semantic element
        │
      Tidak
        ↓
      <div>
```

---

# 20. Semantic HTML vs CSS

Semantic HTML tidak menentukan tampilan.

Misalnya:

```html
<header>
    <h1>My Website</h1>
</header>
```

CSS dapat membuatnya:

```css
header {
    background: black;
    padding: 20px;
}
```

Jadi:

```text
HTML
→ Apa content ini?

CSS
→ Bagaimana content ini terlihat?
```

Contoh:

```html
<nav>
```

tidak otomatis berarti navbar akan terlihat bagus.

CSS tetap bertanggung jawab untuk:

* warna
* spacing
* layout
* ukuran
* typography
* positioning

---

# 21. Semantic HTML vs `<div>`

| Elemen         | Makna                             |
| -------------- | --------------------------------- |
| `<div>`        | Container umum                    |
| `<header>`     | Bagian pengantar                  |
| `<nav>`        | Navigasi                          |
| `<main>`       | Content utama                     |
| `<section>`    | Kelompok content berdasarkan tema |
| `<article>`    | Content mandiri                   |
| `<aside>`      | Content pendukung                 |
| `<footer>`     | Bagian penutup                    |
| `<figure>`     | Content visual/mandiri            |
| `<figcaption>` | Caption figure                    |
| `<time>`       | Waktu/tanggal                     |
| `<address>`    | Informasi kontak                  |

---

# 22. `<section>` vs `<div>`

Ini juga sering membingungkan.

### `<section>`

Digunakan ketika container tersebut memiliki **makna/topik** dan membentuk bagian tematik yang biasanya memiliki heading.

```html
<section>
    <h2>Projects</h2>
    ...
</section>
```

### `<div>`

Digunakan ketika hanya membutuhkan **container tanpa makna khusus**.

```html
<div class="project-grid">
    ...
</div>
```

Mental model:

```text
<section>
→ "Bagian ini membahas apa?"

<div>
→ "Saya hanya butuh container."
```

---

# 23. `<article>` vs `<section>` vs `<div>`

| Elemen      | Cara berpikir                               |
| ----------- | ------------------------------------------- |
| `<div>`     | Saya hanya butuh container                  |
| `<section>` | Ini satu kelompok/topik                     |
| `<article>` | Ini satu content yang dapat berdiri sendiri |

Contoh:

```html
<section>
    <h2>Blog</h2>

    <article>
        <h3>Belajar HTML</h3>
    </article>

    <article>
        <h3>Belajar CSS</h3>
    </article>
</section>
```

Strukturnya masuk akal karena:

```text
Blog
│
├── Article 1
└── Article 2
```

---

# 24. Heading dan Semantic Structure

Semantic HTML juga berkaitan dengan heading.

Gunakan:

```html
<h1>Website</h1>

<h2>Projects</h2>
<h3>Project A</h3>
<h3>Project B</h3>

<h2>Contact</h2>
```

Heading menunjukkan **hierarki content**.

Mental model:

```text
h1
└── h2
    ├── h3
    └── h3
└── h2
```

Jangan memilih heading hanya berdasarkan ukuran teks.

Jika ingin membuat `<h3>` terlihat seperti `<h2>`, gunakan CSS:

```css
h3 {
    font-size: 2rem;
}
```

HTML menentukan **hierarki/makna**.

CSS menentukan **visual**.

---

# 25. Semantic HTML dan Accessibility

Semantic HTML membantu accessibility karena browser dan assistive technology dapat mengenali peran bagian halaman dengan lebih jelas.

Contohnya, `<nav>` menyatakan bahwa bagian tersebut berisi navigasi, sedangkan `<div>` sendiri tidak menyatakan peran khusus.

> **Catatan:** semantic HTML adalah salah satu dasar accessibility, tetapi bukan keseluruhan topiknya. Label, keyboard, teks alternatif, dan atribut ARIA dibahas lebih lengkap di [5.HTML-Accessibility.md](#html-bab-5).

---

# 26. Semantic HTML dan SEO

Search engine tidak hanya melihat tampilan visual halaman.

Struktur HTML membantu memberikan konteks mengenai content.

Misalnya:

```html
<article>
    <h1>Belajar Semantic HTML</h1>
    ...
</article>
```

lebih jelas secara struktur dibandingkan:

```html
<div>
    <div>
        <div>Belajar Semantic HTML</div>
    </div>
</div>
```

Namun semantic HTML **bukan jaminan ranking SEO tinggi**.

SEO tetap dipengaruhi banyak faktor lain seperti:

* kualitas content
* relevance
* performance
* accessibility
* links
* technical SEO
* dan berbagai faktor lainnya.

---

# 27. Cara Memilih Semantic Element

Jangan mulai dengan:

> "Tag apa yang harus saya pakai?"

Mulai dengan:

> **"Content ini sebenarnya berperan sebagai apa?"**

Contoh:

### Ada kumpulan link navigasi?

```text
→ <nav>
```

### Ini content utama halaman?

```text
→ <main>
```

### Ini satu topik/bagian?

```text
→ <section>
```

### Ini content yang bisa berdiri sendiri?

```text
→ <article>
```

### Ini content pendukung?

```text
→ <aside>
```

### Ini bagian pembuka?

```text
→ <header>
```

### Ini bagian penutup?

```text
→ <footer>
```

### Hanya membutuhkan container?

```text
→ <div>
```

Ini jauh lebih berguna daripada menghafalkan definisi setiap tag secara terpisah.

---

# 28. Cause → Effect

### Menggunakan `<nav>`

```html
<nav>
    ...
</nav>
```

```text
Elemen ini memberi tahu browser dan teknologi bantu:
"Bagian ini berperan sebagai navigasi."
```

---

### Menggunakan `<main>`

```html
<main>
    ...
</main>
```

```text
Elemen ini menandai:
"Inilah content utama halaman."
```

---

### Menggunakan `<article>`

```html
<article>
    ...
</article>
```

```text
Elemen ini menandai:
"Ini satu unit content yang dapat berdiri sendiri."
```

---

### Menggunakan `<section>`

```html
<section>
    ...
</section>
```

```text
Elemen ini menandai:
"Ini satu kelompok content berdasarkan topik."
```

---

### Menggunakan `<aside>`

```html
<aside>
    ...
</aside>
```

```text
Elemen ini menandai:
"Ini content pendukung yang terkait dengan content utama."
```

---

### Menggunakan `<div>`

```html
<div>
    ...
</div>
```

```text
Elemen ini mengelompokkan content sebagai container umum,
tanpa memberi peran semantic khusus.
```

---

# 29. Semantic HTML Cheat Sheet

```text
<header>
→ bagian pembuka/pengantar

<nav>
→ navigasi

<main>
→ content utama

<section>
→ kelompok content berdasarkan tema

<article>
→ content mandiri

<aside>
→ content pendukung

<footer>
→ bagian penutup

<figure>
→ visual/content sebagai unit

<figcaption>
→ caption untuk figure

<time>
→ waktu/tanggal

<address>
→ informasi kontak

<details>
→ content yang bisa dibuka/tutup

<summary>
→ judul/tombol untuk details

<div>
→ container umum ketika tidak ada semantic element yang sesuai

<span>
→ container inline umum
```

---

# 30. Mental Model Utama

Bayangkan sebuah website seperti **sebuah dokumen yang memiliki struktur organisasi**.

```text
<body>
│
├── <header>
│   └── "Siapa / apa website ini?"
│
├── <nav>
│   └── "Bagaimana berpindah?"
│
├── <main>
│   │
│   ├── <section>
│   │   ├── <article>
│   │   └── <article>
│   │
│   └── <aside>
│
└── <footer>
    └── "Informasi penutup"
```

Sedangkan:

```text
<div>
→ container ketika tidak ada makna khusus
```

Cara berpikirnya:

```text
Content
   ↓
Tentukan perannya
   ↓
Pilih semantic element
   ↓
Susun hierarchy
   ↓
CSS mengatur tampilannya
```

---

# 31. Self Check

Sebelum membuat sebuah container, coba tentukan:

```text
Apa isi container ini?
        ↓
Apa fungsi content tersebut?
        ↓
Apakah ada semantic element yang cocok?
        ↓
      Ya → gunakan
        │
      Tidak
        ↓
      <div>
```

Contoh:

```text
Kumpulan menu website
→ <nav>

Content utama
→ <main>

Artikel blog
→ <article>

Kelompok topik
→ <section>

Sidebar artikel terkait
→ <aside>

Container untuk kebutuhan CSS
→ <div>
```

Jika bisa menentukan elemen dari **makna content**, berarti konsep semantic HTML sudah mulai dipahami.

---

# 32. Key Takeaway

1. Semantic HTML berarti memilih element berdasarkan **makna**, bukan tampilan.
2. `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>` membantu membentuk struktur halaman yang bermakna.
3. `<section>` digunakan untuk kelompok berdasarkan tema.
4. `<article>` digunakan untuk content yang dapat berdiri sendiri.
5. `<aside>` digunakan untuk content pendukung.
6. `<div>` tetap valid dan berguna ketika hanya membutuhkan container umum.
7. Semantic HTML membantu developer memahami struktur halaman.
8. Semantic HTML membantu accessibility dan memberikan struktur yang lebih jelas bagi mesin. Untuk praktik accessibility lainnya, lihat [5.HTML-Accessibility.md](#html-bab-5).
9. Semantic HTML tidak menentukan tampilan; **CSS tetap bertanggung jawab terhadap visual**.
10. Cara berpikir terpenting:

```text
Jangan:
"Tag apa yang saya hafal?"

Tapi:
"Content ini sebenarnya apa?"
        ↓
"Perannya apa?"
        ↓
"Semantic element mana yang paling tepat?"
```

> **Inti semantic HTML:** HTML seharusnya tidak hanya menjelaskan **di mana content berada**, tetapi juga **apa arti dan peran content tersebut**.

# BEDAH SEMANTIK — Memilih Element Berdasarkan Peran

Bayangkan satu halaman artikel:

```html
<main>
  <article>
    <header>
      <h1>Menanam di Ruang Kecil</h1>
      <p>Oleh Rani · 12 Oktober</p>
    </header>
    <p>Mulai dengan memilih tanaman yang sesuai cahaya.</p>
  </article>
  <aside>
    <h2>Bacaan terkait</h2>
    <ul>
      <li><a href="/kompos">Membuat kompos</a></li>
    </ul>
  </aside>
</main>
```

Mengapa `<article>` lebih dari sekadar nama lain untuk `<div>`? Article menyatakan bahwa content tersebut merupakan unit mandiri yang dapat dipahami terpisah dari halaman, misalnya artikel, berita, atau posting. `<aside>` menyatakan content pelengkap terhadap content utama; hubungan ini menjelaskan peran, bukan posisi visualnya di sisi kanan.

Mengapa `<header>` tidak otomatis berarti header seluruh situs? Maknanya bergantung pada konteks: di dalam `<article>`, ia dapat menjadi pengantar untuk article itu. Untuk header halaman, letakkan pada struktur halaman yang sesuai. Begitu pula `<main>` menandai content utama halaman; biasanya satu halaman memiliki satu `<main>` yang terlihat.

Uji pilihan dengan pertanyaan: **Jika CSS dihapus, apakah element ini tetap memberi tahu pembaca dan browser apa peran content-nya?** Jika jawabannya tidak—dan yang dibutuhkan hanya hook untuk styling atau layout—`<div>` sering lebih jujur daripada memilih element semantik yang maknanya tidak cocok. Semantic HTML memberi struktur; CSS menentukan tampilannya.

# INSIGHT

Perbedaan `<section>` dan `<div>` adalah makna yang mereka sampaikan:

```html
<section>
  <h2>Riwayat Pendidikan</h2>
  ...
</section>

<div class="card-layout">
  ...
</div>
```

`<section>` menandai kelompok content bertema dan biasanya punya heading. `<div>` hanya mengelompokkan content tanpa memberi makna khusus—misalnya sebagai hook untuk styling atau layout. Mengganti `<div>` dengan `<section>` tidak otomatis memperbaiki tampilan; gunakan `<section>` jika kelompok itu memang punya topik, dan CSS untuk mengatur visual.

---

<a id="html-bab-5"></a>

<!-- Sumber: HTML\5.HTML-Accessibility.md -->

# HTML — Accessibility

## 1. Core Concept

**Accessibility** berarti membuat website dapat digunakan oleh sebanyak mungkin orang, termasuk orang yang menggunakan:

* keyboard, bukan mouse
* screen reader (aplikasi yang membacakan isi dan kontrol halaman)
* pembesaran layar
* speech recognition
* teknologi bantu lainnya

Accessibility bukan sesuatu yang ditambahkan hanya di akhir. Pilihan element HTML, label, urutan content, warna, dan perilaku interaktif semuanya dapat memengaruhi kemudahan menggunakan halaman.

Mental model:

> **Jangan hanya bertanya, "Apakah tampilannya terlihat?" Tanyakan juga, "Apakah content dan fungsinya bisa dikenali dan digunakan?"**

---

# 2. Accessibility Tree

Browser tidak hanya menggambar halaman. Browser juga menyusun informasi tentang nama, role, state, dan hubungan element untuk disampaikan ke teknologi bantu. Kumpulan informasi ini sering disebut **accessibility tree** atau "pohon aksesibilitas".

Gampangnya, accessibility tree adalah versi struktur halaman yang dipakai teknologi bantu. Isinya bukan sekadar apa yang terlihat, tetapi juga:

```text
nama
→ element ini disebut apa?

role
→ element ini berfungsi sebagai apa, misalnya tombol atau link?

state
→ kondisinya bagaimana, misalnya terbuka atau tertutup?

relationship
→ element ini berhubungan dengan element yang mana?
```

Contoh: tombol berikut punya nama "Simpan", role tombol, dan state nonaktif karena memiliki attribute `disabled`:

```html
<button type="button" disabled>Simpan</button>
```

Browser mengenali element ini sebagai tombol, menggunakan teks `Simpan` sebagai namanya, dan menyampaikan bahwa tombol tidak aktif.

Bandingkan dengan:

```html
<div>Simpan</div>
```

Tampilannya bisa dibuat mirip tombol dengan CSS, tetapi `<div>` tidak otomatis memiliki role, perilaku keyboard, atau perilaku tombol.

> **Catatan:** visual yang mirip belum tentu memiliki makna dan perilaku yang sama. Pilih element HTML sesuai fungsi sebelum menambahkan ARIA.

---

# 3. Gunakan Element HTML yang Tepat

Element native biasanya sudah membawa makna dan perilaku bawaan.

Misalnya, sebuah halaman punya dua kumpulan link: navigasi utama dan navigasi di bagian footer. Keduanya bisa diberi nama agar pengguna screen reader tahu navigasi yang sedang dimasuki:

```html
<nav aria-label="Navigasi utama">
  <a href="/">Beranda</a>
  <a href="/about">Tentang kami</a>
</nav>

<nav aria-label="Navigasi footer">
  <a href="/privacy">Privasi</a>
  <a href="/contact">Kontak</a>
</nav>
```

`<a href>` dipakai untuk pindah ke alamat lain, sedangkan `<button>` dipakai untuk melakukan tindakan pada halaman. `aria-label` pada contoh `<nav>` membedakan nama dua area navigasi; detail atribut tersebut dijelaskan di bawah.

Secara umum:

```text
link
→ <a href="...">

tindakan pada halaman
→ <button>

navigasi
→ <nav>

field form
→ <input>, <select>, atau <textarea>
```

Jangan memilih element hanya karena tampilannya mudah diatur. Tampilan dapat diubah dengan CSS, sedangkan makna dan perilaku sebaiknya berasal dari element yang memang sesuai.

---

# 4. Heading yang Terstruktur

Heading membantu semua pengguna memahami susunan content. Screen reader juga dapat menggunakannya untuk berpindah antarbagian.

Misalnya, halaman panduan memiliki satu judul utama, lalu bagian dan subbagian:

```html
<h1>Panduan Tanaman</h1>

<h2>Tanaman dalam ruangan</h2>
<h3>Cahaya</h3>
<h3>Penyiraman</h3>

<h2>Tanaman luar ruangan</h2>
```

Gunakan heading berdasarkan **hierarki content**, bukan berdasarkan ukuran visual yang diinginkan.

```text
<h1>
└── <h2>
    ├── <h3>
    └── <h3>
```

Jika heading perlu terlihat lebih besar atau kecil, atur tampilannya dengan CSS.

---

# 5. Link dengan Nama yang Jelas

Teks link sebaiknya menjelaskan tujuan link tersebut.

Kasusnya: screen reader bisa menampilkan daftar link saja, tanpa kalimat yang mengelilinginya. Jika semua link hanya berbunyi "Klik di sini", pengguna akan sulit membedakan tujuannya.

Kurang jelas:

```html
<a href="/guide">Klik di sini</a>
```

Lebih jelas:

```html
<a href="/guide">Baca panduan penggunaan</a>
```

Screen reader dapat menampilkan atau membaca daftar link tanpa seluruh kalimat di sekitarnya. Karena itu, teks seperti "klik di sini" dapat kehilangan konteks saat link didengar sendiri.

Kalau link hanya berisi gambar, berikan alternatif teks yang menjelaskan tujuan link:

```html
<a href="/">
  <img src="logo.svg" alt="Beranda">
</a>
```

---

# 6. Teks Alternatif pada Gambar

Attribute `alt` memberi alternatif teks untuk gambar ketika gambar tidak dapat dilihat atau tidak berhasil dimuat.

Kasus pertama: foto menyampaikan informasi yang penting untuk memahami content, jadi tulis informasi utama gambar sebagai `alt`:

```html
<img
  src="plant-care.jpg"
  alt="Tanaman monstera di dekat jendela yang terang"
>
```

Kasus kedua: ikon daun hanya hiasan dan tidak menambahkan informasi. Beri `alt=""` agar screen reader tidak perlu mengumumkan gambar dekoratif itu:

```html
<img src="leaf-decoration.svg" alt="">
```

`alt=""` menandakan gambar tersebut dekoratif agar teknologi bantu dapat melewatinya.

> **Catatan:** isi `alt` berdasarkan tujuan gambar dalam konteks halaman. Tidak perlu menulis "gambar dari" karena screen reader sudah dapat mengumumkan bahwa element tersebut adalah gambar.

Jangan menghilangkan attribute `alt` dari `<img>` tanpa sengaja. Jika gambar dekoratif, gunakan `alt=""`; jika bermakna, tulis alternatif yang sesuai.

---

# 7. Label untuk Form

Input perlu memiliki label yang menjelaskan data apa yang harus dimasukkan.

Contohnya, pada formulir pendaftaran, pengguna perlu tahu bahwa field ini meminta alamat email. Label yang terhubung akan tetap menjelaskan field walaupun placeholder sudah hilang:

```html
<label for="email">Alamat email</label>
<input id="email" name="email" type="email">
```

Hubungannya:

```text
label for="email"
        ↓
input id="email"
```

Nilai `for` pada `<label>` harus sama dengan `id` input.

Label yang terhubung juga membuat area label dapat diklik untuk memfokuskan input atau mengubah pilihan checkbox/radio.

`placeholder` bukan pengganti label:

```html
<!-- Jangan mengandalkan placeholder saja sebagai nama field -->
<input type="email" placeholder="nama@example.com">
```

Placeholder adalah petunjuk singkat di dalam field dan biasanya menghilang setelah user mengetik. Label tetap menjelaskan fungsi field.

Untuk pembahasan form lebih lengkap, lihat [3.HTML-forms.md](#html-bab-3).

---

# 8. Gunakan Keyboard

Tidak semua pengguna memakai mouse. Pastikan kontrol interaktif dapat ditemukan dan digunakan dengan keyboard.

Contoh kasus: pengguna menekan tombol Tab untuk berpindah ke link dan tombol, lalu menekan Enter atau Space untuk menggunakannya. Karena itu, jangan menghapus outline focus tanpa pengganti yang jelas:

Element native seperti `<a href="...">` dan `<button>` sudah mendukung interaksi keyboard bawaan browser.

```html
<a href="/contact">Hubungi kami</a>
<button type="button">Buka pengaturan</button>
```

Urutan fokus sebaiknya mengikuti urutan content yang masuk akal. Jangan menghapus indikator focus tanpa menyediakan indikator pengganti yang terlihat.

```css
button:focus-visible,
a:focus-visible {
  outline: 3px solid #2457c5;
  outline-offset: 3px;
}
```

> **Catatan:** jangan membuat element biasa seperti `<div>` menjadi interaktif hanya dengan `tabindex`. Element tersebut tidak otomatis mendapat perilaku tombol, misalnya merespons Enter dan Space dengan cara yang diharapkan.

---

# 9. Apa Itu ARIA?

**ARIA** adalah singkatan dari *Accessible Rich Internet Applications*. Nama ini memang terdengar teknis; yang perlu diingat, ARIA adalah kumpulan attribute HTML yang dapat menambahkan informasi untuk teknologi bantu, terutama saat makna atau kondisi sebuah komponen belum bisa dikenali dari HTML saja.

Attribute adalah keterangan yang ditulis di dalam tag HTML, biasanya dalam bentuk `nama="nilai"`. Contoh: pada `aria-expanded="false"`, nama attribute-nya adalah `aria-expanded` dan nilainya `false`.

Nama-nama attribute ARIA sering diawali `aria-`. Kata setelah tanda hubung memberi petunjuk tentang informasi yang disampaikan. Misalnya, `aria-label` berarti label/nama aksesibel, sedangkan `aria-hidden` berkaitan dengan apakah content disembunyikan dari teknologi bantu.

> **Catatan:** "nama aksesibel" adalah nama yang dikenali screen reader untuk menyebut kontrol. Nama ini tidak selalu sama dengan teks yang terlihat di layar.

Contohnya:

```html
<button type="button" aria-expanded="false">
  Tampilkan menu
</button>
```

`aria-expanded` berarti "apakah bagian ini sedang terbuka?". Nilai `false` menyampaikan bahwa bagian tersebut sedang tertutup. Attribute ini hanya memberi tahu state; ia tidak membuka atau menutup menu dengan sendirinya.

Di contoh ini, tombol juga perlu teks yang menjelaskan fungsinya. Tanpa teks atau nama aksesibel lain, screen reader mungkin tidak tahu menu apa yang akan ditampilkan.

Potongan ini hanya memperkenalkan arti `aria-expanded`. Contoh tombol dan panel yang saling terhubung ada di bagian **`aria-expanded` dan `aria-controls`**.

Mental model:

```text
HTML native
→ memberi makna dan perilaku bawaan

ARIA
→ menambahkan informasi ke teknologi bantu

JavaScript
→ dapat mengubah perilaku dan state saat user berinteraksi
```

> **Catatan:** ARIA tidak otomatis menambahkan tampilan, event keyboard, atau perilaku interaksi. Jika membuat kontrol custom, developer tetap perlu membangun dan menguji perilakunya.

---

# 10. Aturan Praktis ARIA

Pegang tiga prinsip ini:

1. **Pilih element HTML native jika tersedia.** Tombol biasanya sebaiknya `<button>`, bukan `<div role="button">`.
2. **Jangan menambahkan ARIA jika tidak dibutuhkan.** ARIA yang salah dapat memberi informasi yang membingungkan.
3. **Pastikan informasi ARIA sesuai dengan tampilan dan perilaku yang sebenarnya.**

Contoh yang tidak perlu:

```html
<button role="button">Simpan</button>
```

`<button>` sudah memiliki role tombol secara native, jadi penambahan `role="button"` tidak dibutuhkan.

---

# 11. `aria-hidden`

`aria-hidden="true"` meminta browser menghilangkan element dan seluruh turunannya dari **accessibility tree**.

Kasusnya: tombol favorit menampilkan bintang sebagai hiasan dan juga teks "Favorit". Agar screen reader tidak membacakan simbol bintang yang tidak menambah informasi, sembunyikan hanya icon tersebut:

```html
<button type="button">
  <span aria-hidden="true">★</span>
  Favorit
</button>
```

Tampilan visual tetap menunjukkan bintang dan teks. Screen reader dapat menyebut tombol "Favorit" tanpa mengumumkan karakter bintang yang dekoratif.

Yang perlu dibedakan:

```text
aria-hidden="true"
→ disembunyikan dari accessibility tree
→ tidak otomatis hilang dari tampilan visual

hidden
→ element tidak ditampilkan di halaman dan tidak tersedia untuk interaksi

display: none
→ element tidak dirender di halaman dan umumnya tidak tersedia untuk teknologi bantu
```

> **Catatan:** `aria-hidden` tidak sama dengan menyembunyikan element secara visual. Element masih bisa terlihat di layar.

Jangan gunakan `aria-hidden="true"` pada:

* tombol, link, atau kontrol lain yang masih bisa digunakan
* element yang masih bisa menerima keyboard focus
* parent yang di dalamnya terdapat kontrol interaktif yang masih aktif
* content penting yang perlu diketahui pengguna teknologi bantu

Kalau sebuah panel memang sedang tidak tersedia, sembunyikan panel dengan mekanisme yang sesuai dengan perilakunya dan pastikan kontrol di dalamnya tidak tetap dapat difokuskan.

`aria-hidden="false"` tidak dapat membuat element yang tersembunyi oleh `hidden` atau CSS menjadi terlihat kembali.

---

# 12. `aria-label`, `aria-labelledby`, dan `aria-describedby`

Attribute ini membantu memberi nama atau keterangan kepada element.

## `aria-label`

Namanya bisa dibaca seperti ini:

```text
aria
→ informasi tambahan untuk teknologi bantu

label
→ nama atau keterangan singkat sebuah kontrol
```

Kasus yang cocok: tombol hanya menampilkan icon silang. Secara visual, orang mungkin menebak bahwa itu tombol tutup, tetapi screen reader tidak dapat menebak fungsi dari bentuk icon. `aria-label` memberi **nama aksesibel secara langsung** pada element tanpa menambahkan teks yang terlihat:

```html
<button type="button" aria-label="Tutup dialog">
  ×
</button>
```

Teks `×` adalah icon yang terlihat, sedangkan `aria-label="Tutup dialog"` memberi tahu teknologi bantu fungsi tombol tersebut. Screen reader dapat menyebutnya sebagai tombol "Tutup dialog".

Gunakan `aria-label` ketika kontrol tidak memiliki teks terlihat yang menjelaskan fungsinya. Kalau tombol sudah punya teks yang jelas, biasanya teks itu sudah cukup:

```html
<button type="button">Tutup dialog</button>
```

## `aria-labelledby`

`labelledby` artinya "diberi nama oleh". Kasusnya: sebuah bagian atau dialog punya judul yang sudah terlihat di halaman; daripada menulis judul yang sama lagi di attribute, hubungkan element itu ke heading. `aria-labelledby` mengambil nama aksesibel dari teks element lain yang `id`-nya dirujuk:

```html
<h2 id="dialog-title">Hapus file?</h2>

<section aria-labelledby="dialog-title">
  ...
</section>
```

Nilai `aria-labelledby` adalah `id` element yang menyediakan nama. Jadi, `aria-labelledby="dialog-title"` menunjuk ke `id="dialog-title"`, lalu teks "Hapus file?" dipakai sebagai nama bagian atau dialog. Gunakan cara ini saat nama sudah tampil di layar dan bisa dirujuk.

## `aria-describedby`

`describedby` artinya "diberi keterangan oleh". Kasusnya: field password punya label "Password", tetapi juga perlu menyampaikan aturan minimal panjang. `aria-describedby` menghubungkan kontrol ke teks bantuan tambahan:

```html
<label for="password">Password</label>
<input
  id="password"
  name="password"
  type="password"
  aria-describedby="password-help"
>
<p id="password-help">Gunakan minimal 12 karakter.</p>
```

Nama field berasal dari `<label>` ("Password"), sementara teks bantuan menjadi deskripsinya ("Gunakan minimal 12 karakter."). Saat fokus berpindah ke input, screen reader dapat menyampaikan nama field beserta keterangan itu. Jadi label menjawab "field ini apa?", sedangkan deskripsi menjawab "informasi tambahan apa yang perlu diketahui?"

> **Catatan:** gunakan label HTML yang terlihat jika sesuai. `aria-label` tidak membuat teks label terlihat di halaman.

---

# 13. `aria-expanded` dan `aria-controls`

`aria-expanded` artinya "sedang terbuka atau tertutup?". Ini memberi tahu state/kondisi content yang dikendalikan: `true` berarti terbuka, sedangkan `false` berarti tertutup.

`aria-controls` artinya "mengendalikan element yang mana?". Kasusnya: sebuah tombol Bantuan membuka panel bantuan. Nilai attribute ini adalah `id` dari panel yang dikendalikan tombol.

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="help-panel"
>
  Bantuan
</button>

<div id="help-panel" hidden>
  Hubungi tim support jika masih membutuhkan bantuan.
</div>
```

Arti attribute pada contoh:

```text
aria-expanded="false"
→ panel sedang tertutup

aria-controls="help-panel"
→ tombol ini mengendalikan element dengan id="help-panel"
```

Attribute tersebut hanya menyampaikan informasi. JavaScript tetap diperlukan untuk membuka/menutup panel dan memperbarui `aria-expanded` agar selalu sesuai dengan keadaan panel.

Awalnya, panel tertutup dan tombol memakai `aria-expanded="false"`. Setelah pengguna mengaktifkan tombol, implementasi harus menampilkan panel dan mengubah nilainya menjadi `true`; saat panel ditutup lagi, kembalikan ke `false`. Attribute `hidden` juga harus ikut berubah:

```html
<!-- Panel terbuka setelah interaksi -->
<button
  type="button"
  aria-expanded="true"
  aria-controls="help-panel"
>
  Bantuan
</button>

<div id="help-panel">
  Hubungi tim support jika masih membutuhkan bantuan.
</div>
```

Ini hanya menunjukkan hasil state terbuka, bukan kode JavaScript untuk interaksinya. Jangan menyalin state terbuka ini sebagai keadaan awal jika panel sebenarnya masih tertutup.

Kalau hanya membutuhkan disclosure sederhana tanpa perilaku custom, pertimbangkan element native `<details>` dan `<summary>`:

```html
<details>
  <summary>Bantuan</summary>
  <p>Hubungi tim support jika masih membutuhkan bantuan.</p>
</details>
```

Browser sudah menyediakan perilaku buka/tutup untuk contoh native ini, jadi umumnya tidak perlu menambahkan `aria-expanded` atau `aria-controls`.

---

# 14. `aria-pressed` dan `aria-current`

## `aria-pressed`

`aria-pressed` memberi tahu apakah **tombol toggle** sedang aktif atau tidak. Tombol toggle adalah tombol yang berganti antara dua keadaan setiap kali diaktifkan.

Kasusnya: ada tombol untuk mengaktifkan atau mematikan mode senyap. Nilai attribute mengikuti keadaan yang sedang berlaku:

```html
<button type="button" aria-pressed="false">
  Mode senyap
</button>
```

Saat mode senyap dinyalakan, ubah nilainya menjadi `true`. Saat dimatikan lagi, ubah kembali ke `false`. JavaScript harus mengubah fungsi mode dan nilai attribute bersama-sama; attribute ini sendiri tidak mengaktifkan mode.

Jangan memakai `aria-pressed` untuk tombol yang hanya membuka atau menutup panel. Untuk keadaan panel terbuka/tertutup, gunakan `aria-expanded`.

## `aria-current`

`aria-current` menandai item yang sedang aktif dalam sekumpulan navigasi.

Kasusnya: pengguna sedang membuka halaman "Profil" dan navigasi tetap terlihat. Beri tahu teknologi bantu link mana yang menunjuk ke halaman saat ini:

```html
<nav aria-label="Akun">
  <a href="/account">Ringkasan</a>
  <a href="/account/profile" aria-current="page">Profil</a>
  <a href="/account/security">Keamanan</a>
</nav>
```

`aria-current="page"` berarti link tersebut menuju halaman yang sedang dibuka. Biasanya tampilannya juga dibedakan dengan CSS, tetapi jangan mengandalkan warna saja untuk menunjukkan pilihan aktif.

---

# 15. `aria-live`

`aria-live` menandai bagian halaman yang content-nya dapat berubah saat halaman sedang digunakan. Kata "live" di sini berarti perubahan pada bagian itu dapat diumumkan screen reader tanpa user harus mencari ulang bagian tersebut.

Kasusnya: pengguna mengirim pencarian dan hasilnya diperbarui tanpa memuat ulang halaman. Pengguna screen reader mungkin tetap berada di tombol pencarian dan tidak tahu hasil sudah muncul. `aria-live` dapat meminta teknologi bantu mengumumkan pembaruan:

```html
<p aria-live="polite" id="search-status"></p>
```

Awalnya, bagian status itu kosong. Setelah hasil pencarian selesai, JavaScript bisa mengubah teksnya:

```js
document.querySelector("#search-status").textContent = "3 hasil ditemukan";
```

Secara konseptual, isi element berubah dari kosong menjadi:

```html
<p aria-live="polite" id="search-status">3 hasil ditemukan</p>
```

Teknologi bantu dapat mengumumkan pembaruan itu tanpa memindahkan fokus. Element `aria-live` sebaiknya sudah ada sebelum teks status diperbarui.

Nilai yang umum:

```text
polite
→ umumkan saat ada kesempatan, tanpa memotong ucapan yang sedang berlangsung

assertive
→ umumkan segera dan dapat memotong ucapan lain
```

`polite` dan `assertive` mengatur seberapa mendesak pengumuman perubahan. `polite` menunggu waktu yang tidak mengganggu, sedangkan `assertive` menyela untuk segera mengumumkan informasi.

Gunakan `assertive` hanya untuk informasi yang benar-benar mendesak. Pengumuman terlalu sering atau terlalu agresif dapat mengganggu pengguna.

Contoh pesan biasa seperti hasil pencarian atau "Perubahan berhasil disimpan" umumnya cukup memakai `polite`. Jangan memakai `assertive` untuk setiap pembaruan kecil.

---

# 16. ID dan Relasi ARIA

Beberapa attribute ARIA merujuk ke element lain menggunakan `id`.

Ingat: `id` adalah nama pengenal element di HTML. Attribute ARIA yang berisi `id` memakai nama pengenal itu untuk menunjuk element yang berhubungan.

```html
<h2 id="settings-title">Pengaturan</h2>
<section aria-labelledby="settings-title">
  ...
</section>
```

Pastikan:

* `id` pada halaman unik
* nilai `aria-labelledby`, `aria-describedby`, dan `aria-controls` cocok dengan `id` yang benar
* element yang dirujuk memang ada
* teks yang dirujuk sesuai dengan hubungan yang ingin disampaikan

Jika `id` tidak cocok atau tidak unik, hubungan yang dimaksud dapat menjadi ambigu atau tidak bekerja seperti yang diharapkan.

---

# 17. Kesalahan ARIA yang Sering Terjadi

### Menambahkan `aria-hidden` pada tombol yang masih bisa difokuskan

Screen reader tidak diberi tahu bahwa tombol itu ada, tetapi pengguna keyboard masih dapat berpindah fokus ke tombol tersebut.

### Menggunakan `aria-label` untuk menggantikan semua label terlihat

`aria-label` memberi nama di accessibility tree, tetapi tidak menampilkan teks di halaman. Pengguna yang tidak memakai screen reader tetap membutuhkan petunjuk yang jelas.

### Menganggap `aria-expanded` membuka panel

Attribute tersebut hanya menyampaikan state. Perilaku membuka panel tetap harus dibuat.

### Menggunakan `aria-expanded` untuk semua tombol yang punya dua keadaan

Kalau tombol menyimpan pilihan aktif/nonaktif, seperti mode senyap, gunakan `aria-pressed`. `aria-expanded` khusus untuk memberi tahu apakah content yang dikendalikan sedang ditampilkan.

### Memakai ARIA untuk meniru element native

```html
<div role="button">Simpan</div>
```

Role saja tidak memberi perilaku keyboard tombol. Jika fungsi yang dibutuhkan adalah tombol, gunakan `<button>`.

---

# 18. Checklist Accessibility Dasar

Sebelum menyelesaikan halaman, periksa:

1. Apakah element HTML dipilih berdasarkan fungsinya?
2. Apakah heading menunjukkan hierarki content yang masuk akal?
3. Apakah teks link menjelaskan tujuannya?
4. Apakah gambar memiliki `alt` yang sesuai, termasuk `alt=""` untuk gambar dekoratif?
5. Apakah setiap input memiliki label yang terhubung?
6. Apakah link dan kontrol dapat digunakan dengan keyboard?
7. Apakah indikator focus tetap terlihat?
8. Apakah ARIA benar-benar dibutuhkan?
9. Apakah state ARIA sesuai dengan keadaan komponen yang terlihat?
10. Apakah `aria-hidden` hanya digunakan untuk content yang memang boleh diabaikan teknologi bantu?
11. Jika tombol punya dua keadaan, apakah memakai attribute state yang tepat seperti `aria-pressed` atau `aria-expanded`?
12. Apakah item navigasi yang sedang aktif ditandai dengan `aria-current` jika diperlukan?
13. Apakah semua `id` unik dan referensi ARIA mengarah ke element yang tepat?
14. Sudahkah halaman diuji dengan keyboard dan, jika tersedia, screen reader?

---

# 19. Self Check

Sebelum melanjutkan, pastikan bisa menjelaskan:

1. Apa yang dimaksud accessibility?
2. Apa informasi yang disampaikan accessibility tree?
3. Mengapa `<button>` lebih sesuai daripada `<div>` untuk tindakan?
4. Kapan gambar sebaiknya memakai `alt=""`?
5. Mengapa placeholder bukan pengganti `<label>`?
6. Apa fungsi `aria-hidden="true"`?
7. Apa perbedaan `aria-hidden` dengan `hidden`?
8. Mengapa element yang masih bisa difokuskan tidak boleh disembunyikan dari accessibility tree?
9. Apa perbedaan `aria-label` dan `aria-labelledby`?
10. Apa fungsi `aria-describedby`?
11. Apakah `aria-expanded` membuka panel dengan sendirinya?
12. Mengapa nilai `aria-expanded` harus mengikuti state komponen?
13. Apa fungsi `aria-controls`?
14. Kapan `aria-live` berguna?
15. Kapan menggunakan `aria-pressed`?
16. Apa bedanya `aria-pressed` dengan `aria-expanded`?
17. Apa fungsi `aria-current="page"`?
18. Mengapa sebaiknya memilih HTML native sebelum ARIA?

---

# Key Takeaway

Pahami urutannya:

```text
pilih element HTML yang sesuai
        ↓
beri nama dan hubungan yang jelas
        ↓
pastikan dapat digunakan dengan keyboard
        ↓
tambahkan ARIA hanya jika informasi native belum cukup
        ↓
pastikan ARIA sesuai dengan tampilan dan perilaku sebenarnya
```

Mental model terpenting:

```text
HTML native
→ makna dan perilaku bawaan

ARIA
→ informasi tambahan untuk accessibility tree

aria-hidden="true"
→ abaikan element oleh teknologi bantu
→ bukan cara menyembunyikan element secara visual
```

Nama `aria-hidden` bisa dibaca sebagai "disembunyikan dari teknologi bantu". Nilai `true` mengaktifkan penyembunyian dari accessibility tree; jika attribute tidak ada, perilaku normalnya adalah element tetap tersedia berdasarkan HTML dan aturan tampilnya.

> **Inti accessibility:** halaman yang terlihat benar belum tentu mudah dipahami atau digunakan semua orang. Buat content bermakna, kontrol dapat dioperasikan, dan informasi bantu tetap akurat.

# INSIGHT

Jangan samakan `aria-hidden="true"` dengan `hidden`:

```html
<span aria-hidden="true">★</span>
<div hidden>Panel belum dibuka</div>
```

`aria-hidden="true"` hanya mengeluarkan element dari informasi yang dibaca teknologi bantu; bintangnya masih terlihat. `hidden` menyembunyikan panel dari tampilan dan interaksi. Jadi, gunakan `aria-hidden` untuk hiasan visual yang tidak perlu diumumkan, dan `hidden` ketika content memang belum ditampilkan.

Begitu juga, ARIA tidak menambahkan perilaku: `aria-expanded="true"` menyatakan panel terbuka, tetapi tidak membukanya. Jika memakai kontrol custom, pastikan interaksi benar-benar mengubah panel sekaligus nilai state-nya; jika tidak perlu perilaku custom, element native seperti `<details>` sering lebih tepat.

# BEDAH AKSESIBILITAS — Apa yang Sebenarnya Diketahui Pengguna?

```html
<button type="button" aria-expanded="false" aria-controls="filters">
  Filter
</button>
<section id="filters" hidden>
  <h2>Filter produk</h2>
</section>
```

Sebelum dibuka, `aria-expanded="false"` menyampaikan state control dan `hidden` membuat panel tidak tampil maupun tersedia untuk interaksi biasa. Saat tombol membuka panel, implementasi harus menghapus `hidden` **dan** mengubah `aria-expanded` menjadi `"true"`; saat ditutup, kedua state dikembalikan. Mengapa keduanya harus diperbarui bersama? Karena tampilan, perilaku, dan informasi yang diumumkan teknologi bantu harus menggambarkan keadaan UI yang sama. ARIA hanya menyampaikan state; JavaScript atau perilaku native yang benar-benar mengubah panel.

Untuk gambar, keputusan `alt` juga bergantung pada tujuan:

```html
<img src="chart.png" alt="Penjualan naik dari 20 ke 35 unit">
<img src="divider.png" alt="">
```

Diagram pertama menyampaikan informasi yang tidak boleh hilang, jadi `alt` merangkum insight pentingnya. Gambar kedua hanya hiasan pemisah, jadi `alt=""` meminta teknologi bantu mengabaikannya agar tidak membacakan nama file atau informasi yang tidak berguna. Menulis deskripsi panjang bukan otomatis lebih aksesibel; tanyakan **informasi apa yang dibutuhkan pengguna untuk memahami tujuan gambar dalam konteks ini?**

Untuk kontrol tindakan, gunakan `<button>` ketika pengguna melakukan aksi, dan `<a href="...">` ketika berpindah ke tujuan. Element native membawa perilaku keyboard, fokus, dan semantik bawaan. Jika menggantinya dengan `<div>` yang diberi `role="button"`, semua perilaku tersebut—termasuk fokus keyboard dan aktivasi dengan tombol yang sesuai—menjadi tanggung jawab implementasi. Karena itu, pilihan native biasanya mengurangi peluang ada state atau interaksi yang terlupakan.

## `for`, `id`, `aria-label`, dan `aria-labelledby`

Keempatnya dapat tampak seperti cara "memberi nama", tetapi perannya berbeda:

```html
<label for="search">Cari artikel</label>
<input id="search" type="search">

<section aria-labelledby="results-title">
  <h2 id="results-title">Hasil pencarian</h2>
  ...
</section>

<button type="button" aria-label="Tutup dialog">×</button>
```

* `id` memberi element pengenal unik yang bisa dirujuk.
* `for` pada `<label>` menghubungkan label form ke control yang `id`-nya cocok. Ia bukan atribut umum untuk memberi label ke sembarang element.
* `aria-labelledby` menunjuk satu atau lebih `id` element yang teksnya menjadi nama/label aksesibel. Gunakan bila teks label yang sudah terlihat ada di halaman; sumber nama tetap satu teks yang dapat dipahami dan diterjemahkan.
* `aria-label` menuliskan nama aksesibel langsung pada element. Gunakan seperlunya ketika tidak ada teks terlihat yang bisa dijadikan label, misalnya tombol ikon yang punya tujuan jelas. Jangan menambahkan nama ARIA yang bertentangan dengan teks terlihat atau menutupi label native tanpa alasan.

Mengapa memilih label yang terlihat bila memungkinkan? Ia dapat dibaca semua pengguna, bukan hanya teknologi bantu, dan mengurangi risiko nama yang diucapkan screen reader berbeda dari instruksi yang terlihat. Untuk input, utamakan `<label>` native; untuk region dengan heading, hubungkan heading memakai `aria-labelledby`; gunakan `aria-label` sebagai alternatif, bukan refleks.
