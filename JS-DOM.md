# JavaScript DOM

Panduan ini membahas cara JavaScript berinteraksi dengan halaman web melalui **DOM (Document Object Model)**. DOM disediakan oleh browser, bukan bagian dari bahasa JavaScript inti, sehingga contoh DOM tidak langsung berjalan di Node.js biasa.

## Cara mencoba contoh

Contoh DOM perlu dijalankan di halaman web. Cara termudah untuk mulai adalah membuat dua file dalam folder yang sama: `index.html` dan `main.js`.

Isi `index.html`:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <title>Latihan DOM</title>
    <script src="main.js" defer></script>
  </head>
  <body>
    <h1 id="judul">Halo!</h1>
    <button id="tombol" type="button">Klik saya</button>
  </body>
</html>
```

Isi `main.js`:

```js
const judul = document.querySelector('#judul');
const tombol = document.querySelector('#tombol');

tombol.addEventListener('click', function () {
  judul.textContent = 'Tombol berhasil diklik!';
});
```

Buka `index.html` di browser, lalu klik tombolnya. Tulisan judul akan berubah. HTML menyediakan judul dan tombol; JavaScript mencari keduanya berdasarkan `id`, lalu mengubah judul saat browser melaporkan event klik. Atribut `defer` memastikan HTML dibaca sebelum `main.js` dijalankan.

> **Catatan:** Setiap blok kode adalah contoh terpisah. Jika beberapa contoh disalin ke satu file, jangan deklarasikan nama `const` yang sama lebih dari sekali. Contoh singkat biasanya hanya menampilkan bagian yang sedang dibahas; pastikan HTML memiliki elemen yang dicari JavaScript, misalnya `id="judul"`.

## Daftar Isi

- [DOM: menghubungkan JavaScript dengan halaman web](#js-dom)
  - [DOM tree, node, dan element](#js-dom-tree)
  - [Memilih elemen dan membaca kumpulan hasil](#js-dom-select)
  - [Membaca dan mengubah konten](#js-dom-content)
  - [Atribut, property, dan data attribute](#js-dom-attributes)
  - [Class dan style](#js-dom-style)
  - [Membuat, menyisipkan, menggandakan, dan menghapus elemen](#js-dom-create)
  - [Event dan event listener](#js-dom-events)
  - [Event propagation dan delegation](#js-dom-propagation)
  - [Form, input, dan validasi](#js-dom-forms)
  - [Navigasi DOM dan traversal](#js-dom-traversal)
  - [Waktu pemuatan dokumen](#js-dom-ready)
  - [Observer untuk perubahan DOM dan tampilan](#js-dom-observers)
  - [Performa, aksesibilitas, dan keamanan DOM](#js-dom-practices)

---

<a id="js-dom"></a>
## DOM: menghubungkan JavaScript dengan halaman web

**DOM (Document Object Model)** adalah bentuk halaman HTML yang dapat dibaca dan diubah oleh JavaScript. Browser membuat DOM saat memuat halaman. JavaScript bisa mencari elemen, mengganti teks, menambah elemen, atau bereaksi saat pengguna mengeklik tombol.

Bayangkan HTML sebagai susunan kotak: satu elemen bisa berada di dalam elemen lain. Hubungan ini disebut **pohon DOM**. Object `document` adalah pintu masuk JavaScript untuk mencari elemen di halaman.

```html
<main>
  <h1 id="judul">Daftar tugas</h1>
  <p class="petunjuk">Belum ada tugas.</p>
</main>
```

Dalam contoh ini, `<main>` adalah induk dari `<h1>` dan `<p>`. Atribut `id` dan `class` membantu JavaScript menemukan elemen.

<a id="js-dom-tree"></a>
### DOM tree, node, dan element

Browser menyusun HTML menjadi **DOM tree** atau pohon DOM. Bagian apa pun di pohon itu disebut **node**. Tag seperti `<h2>` disebut **element**, teks di dalam tag adalah node teks, dan komentar HTML juga merupakan node.

```html
<section id="kartu">
  <h2>Belajar DOM</h2>
  <!-- catatan -->
</section>
```

```js
const kartu = document.querySelector('#kartu');

if (kartu) {
  console.log(kartu.children.length); // 1: hanya elemen <h2>
  console.log(kartu.firstElementChild.tagName); // 'H2'
}
```

`children` menghitung tag HTML di dalam elemen, sedangkan `firstElementChild` mengambil tag pertama. Spasi dan baris baru di HTML juga dapat dihitung sebagai node teks oleh `childNodes`; untuk awal, cukup gunakan property yang berakhiran `Element` saat yang dicari adalah tag.

<a id="js-dom-select"></a>
### Memilih elemen

Gunakan `document.querySelector()` untuk mencari **elemen pertama** yang cocok. Gunakan `document.querySelectorAll()` untuk mencari **semua elemen** yang cocok. Keduanya memakai selector CSS yang mungkin sudah dikenal dari CSS.

Selector umum:

| Selector | Elemen yang dicari | Contoh |
| --- | --- | --- |
| `'#id'` | Elemen dengan ID tertentu | `document.querySelector('#judul')` |
| `'.kelas'` | Elemen dengan class tertentu | `document.querySelectorAll('.item')` |
| `'button'` | Semua tag dengan nama tersebut | `document.querySelectorAll('button')` |
| `'form input'` | Input di dalam form | `document.querySelectorAll('form input')` |
| `'[data-id]'` | Elemen dengan atribut tersebut | `document.querySelectorAll('[data-id]')` |
| `'input[type="email"]'` | Input dengan atribut dan nilai tertentu | `document.querySelector('input[type="email"]')` |

```js
const judul = document.querySelector('#judul');
const petunjuk = document.querySelector('.petunjuk');
const semuaItem = document.querySelectorAll('.item');

if (judul) {
  console.log(judul.textContent);
}
console.log(semuaItem.length); // jumlah elemen dengan class="item"
```

Tanda `#` pada `'#judul'` berarti mencari `id="judul"`. Titik pada `'.petunjuk'` berarti mencari `class="petunjuk"`. `querySelector()` menghasilkan `null` jika tidak ada elemen yang cocok, jadi periksa hasilnya sebelum mengakses teks atau memanggil method. `querySelectorAll()` menghasilkan kumpulan elemen; properti `.length` memberi tahu jumlahnya.

Contoh untuk menjalankan instruksi pada setiap item:

```js
const daftarItem = document.querySelectorAll('.item');

daftarItem.forEach(function (item) {
  console.log(item.textContent);
});
```

Method `.forEach()` menjalankan function satu kali untuk setiap elemen yang ditemukan. Daftar hasil `querySelectorAll()` tidak otomatis memuat elemen baru yang ditambahkan belakangan; jalankan selector lagi jika perlu daftar terbaru. Ada juga `document.getElementById('judul')` untuk mencari berdasarkan ID tanpa tanda `#`.

Contoh aman jika elemen mungkin tidak ada di halaman:

```js
const tombol = document.querySelector('#tombol-simpan');

if (tombol) {
  tombol.textContent = 'Simpan';
}
```

<a id="js-dom-content"></a>
### Membaca dan mengubah konten

`textContent` membaca atau mengganti teks di dalam elemen. Untuk contoh ini, pastikan HTML memiliki `<p class="petunjuk">Pesan awal</p>`.

```js
const pesan = document.querySelector('.petunjuk');

if (pesan) {
  pesan.textContent = 'Tugas baru dapat ditambahkan.';
}
```

Jika elemen ditemukan, teks yang terlihat berubah menjadi `Tugas baru dapat ditambahkan.`. Gunakan `textContent` untuk teks biasa. `innerHTML` menafsirkan isi string sebagai HTML, jadi hindari memakainya untuk teks dari pengguna.

Ada juga `innerText`, yang membaca teks yang terlihat dan dapat dipengaruhi tampilan halaman. Untuk membaca atau mengganti teks, `textContent` biasanya pilihan yang lebih sederhana.

<a id="js-dom-attributes"></a>
### Atribut, property, dan data attribute

Atribut adalah informasi yang tertulis pada tag HTML. Elemen DOM juga memiliki property JavaScript yang mencerminkan keadaan saat ini. Misalnya, atribut `value` dapat menunjukkan nilai awal input, sementara property `.value` menunjukkan nilai yang sedang diketik.

```html
<input id="nama" value="Dhimas">
```

```js
const inputNama = document.querySelector('#nama');

if (inputNama) {
  console.log(inputNama.getAttribute('value')); // nilai awal: 'Dhimas'
  console.log(inputNama.value); // nilai input saat ini

  inputNama.value = 'John Doe';
  inputNama.setAttribute('aria-label', 'Nama pengguna');
}
```

`getAttribute('value')` membaca nilai awal yang tertulis di HTML. `.value` membaca nilai yang sedang ada di kotak input, termasuk setelah pengguna mengubahnya. Ganti `John Doe` dengan nilai yang ingin dimasukkan ke kotak.

Atribut `data-*` dapat menyimpan informasi tambahan sederhana. Browser menyediakan nilainya melalui property `.dataset`:

```html
<button id="hapus-tugas" data-task-id="42">Hapus</button>
```

```js
const tombolHapus = document.querySelector('#hapus-tugas');

if (tombolHapus) {
  console.log(tombolHapus.dataset.taskId); // '42'
}
```

Nama `data-task-id` di HTML menjadi `dataset.taskId` di JavaScript: tanda hubung diikuti huruf besar. Nilainya berupa teks (string), jadi ubah ke angka secara eksplisit jika memang perlu dihitung.

<a id="js-dom-style"></a>
### Class dan style

JavaScript bisa menambah atau menghapus **class** pada elemen. Class adalah nama yang bisa dihubungkan dengan aturan tampilan di CSS. Misalnya, tambahkan class `selesai` saat tugas sudah dikerjakan.

HTML:

```html
<p id="tugas">Belajar DOM</p>
```

CSS:

```css
.selesai {
  color: green;
  text-decoration: line-through;
}
```

JavaScript:

```js
const tugas = document.querySelector('#tugas');

if (tugas) {
  tugas.classList.add('selesai');
}
```

Setelah JavaScript menambahkan class `selesai`, aturan CSS di atas membuat teks hijau dan tercoret. `classList.add()` menambahkan class, `remove()` menghapusnya, `toggle()` bergantian menambah atau menghapusnya, dan `contains()` memeriksa apakah class ada. Untuk tampilan utama, simpan aturan di CSS; `element.style` cocok untuk perubahan kecil yang memang perlu ditentukan langsung oleh JavaScript.

<a id="js-dom-create"></a>
### Membuat, menyisipkan, menggandakan, dan menghapus elemen

Gunakan `document.createElement()` untuk membuat tag baru. Tag itu belum terlihat sampai dimasukkan ke elemen yang sudah ada.

HTML:

```html
<ul id="daftar-tugas"></ul>
```

```js
const daftar = document.querySelector('#daftar-tugas');

if (daftar) {
  const item = document.createElement('li');
  item.textContent = 'Belajar DOM';
  item.classList.add('item');
  daftar.append(item);
}
```

Hasilnya adalah daftar dengan satu baris bertuliskan `Belajar DOM`. `createElement('li')` membuat baris, `textContent` mengisi tulisannya, lalu `append()` menambahkannya ke akhir daftar. Gunakan `prepend()` untuk menambahkannya di awal.

Method lain yang berguna:

| Method | Kegunaan |
| --- | --- |
| `parent.append(child)` / `parent.prepend(child)` | Memasukkan sebagai anak terakhir/pertama |
| `element.before(sibling)` / `element.after(sibling)` | Memasukkan sebelum/sesudah elemen |
| `element.replaceWith(newElement)` | Mengganti elemen dengan node lain |
| `parent.replaceChildren(...children)` | Mengganti semua anak |
| `element.remove()` | Menghapus elemen dari parent |
| `element.cloneNode(true)` | Menggandakan elemen beserta isi di dalamnya |

#### Materi lanjutan: template dan banyak elemen

Untuk halaman yang membuat banyak elemen dengan bentuk sama, `<template>` bisa menyimpan bentuk awal yang belum ditampilkan. Materi ini opsional untuk pemula; membuat elemen dengan `createElement()` seperti contoh sebelumnya sudah cukup untuk mulai.

HTML:

```html
<template id="template-tugas">
  <li class="item"><span class="nama-tugas"></span></li>
</template>
<ul id="daftar-tugas"></ul>
```

JavaScript:

```js
const templateTugas = document.querySelector('#template-tugas');
const daftarTugas = document.querySelector('#daftar-tugas');

if (templateTugas instanceof HTMLTemplateElement && daftarTugas) {
  const itemBaru = templateTugas.content.firstElementChild?.cloneNode(true);
  const namaTugas = itemBaru?.querySelector('.nama-tugas');

  if (itemBaru instanceof HTMLElement && namaTugas) {
    namaTugas.textContent = 'Belajar DOM';
    daftarTugas.append(itemBaru);
  }
}
```

Kode menyalin isi template, mengisi teks tugas, lalu memasukkan salinannya ke daftar. `cloneNode(true)` berarti salin elemen beserta elemen anaknya.

Jika perlu menambahkan banyak item dari array, pola dasar berikut bisa digunakan:

```js
const daftar = document.querySelector('#daftar-tugas');
const tugas = ['Baca materi', 'Latihan kode'];

if (daftar) {
  const fragment = document.createDocumentFragment();

  for (const teks of tugas) {
    const item = document.createElement('li');
    item.textContent = teks;
    fragment.append(item);
  }

  daftar.append(fragment);
}
```

Setiap nilai di array `tugas` menjadi satu baris `<li>`. `DocumentFragment` adalah wadah sementara untuk mengumpulkan elemen sebelum semuanya dimasukkan ke halaman.

<a id="js-dom-events"></a>
### Event dan event listener

**Event** adalah kejadian yang dilaporkan browser, misalnya tombol diklik. Dengan `addEventListener()`, kita bisa meminta browser menjalankan kode saat event terjadi.

```html
<button id="tombol-sapa" type="button">Sapa</button>
<p id="hasil-sapa"></p>
```

```js
const tombolSapa = document.querySelector('#tombol-sapa');
const hasilSapa = document.querySelector('#hasil-sapa');

if (tombolSapa && hasilSapa) {
  tombolSapa.addEventListener('click', function () {
    hasilSapa.textContent = 'Halo, Dhimas!';
  });
}
```

`'click'` adalah nama event yang didengarkan. Function di dalam `addEventListener()` baru dijalankan setelah tombol diklik. Pada contoh ini, klik tombol mengubah isi paragraf. Function yang dijalankan setelah suatu kejadian disebut **listener** atau **callback**.

<a id="js-dom-propagation"></a>
### Event propagation dan delegation (materi lanjutan)

Konsep ini berguna saat daftar punya banyak tombol. Event klik pada tombol juga dapat diterima oleh elemen induknya; perjalanan ke induk ini disebut **bubbling**. Karena itu, satu listener pada daftar dapat menangani klik dari semua tombol di dalamnya.

```html
<ul id="daftar">
  <li><button type="button" data-task="1">Hapus tugas 1</button></li>
  <li><button type="button" data-task="2">Hapus tugas 2</button></li>
</ul>
```

```js
const daftar = document.querySelector('#daftar');

if (daftar) {
  daftar.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;

    const tombol = event.target.closest('button[data-task]');
    if (!tombol || !daftar.contains(tombol)) return;

    console.log(`Tombol hapus untuk tugas nomor ${tombol.dataset.task} diklik`);
  });
}
```

Saat salah satu tombol diklik, listener pada `<ul>` berjalan. `event.target` adalah elemen yang diklik. `closest()` mencari tombol terdekat yang memiliki atribut `data-task`. Teknik memakai satu listener untuk banyak tombol ini disebut **event delegation**. Contoh tersebut baru menampilkan informasi; untuk benar-benar menghapus item, kode perlu mencari `<li>` induknya lalu memanggil `.remove()`.

Secara lebih lengkap, event melewati fase capture dari luar ke dalam, mencapai target, lalu dapat bubbling kembali ke luar. Listener biasa berjalan pada fase bubbling. Penjelasan fase capture bisa dipelajari setelah memahami listener dasar.

Event umum yang sering dipakai:

| Event | Biasanya dipasang pada | Kapan berjalan |
| --- | --- | --- |
| `click` | Tombol, link, atau elemen interaktif | Elemen diklik atau diaktifkan |
| `input` | Input atau textarea | Nilai berubah saat pengguna mengetik |
| `change` | Input, select, checkbox | Nilai berubah dan perubahan dikonfirmasi |
| `submit` | Form | Form dikirim |
| `keydown` / `keyup` | Elemen yang menerima fokus atau `document` | Tombol keyboard ditekan/dilepas |
| `focus` / `blur` | Elemen form | Fokus masuk/keluar; event ini tidak bubbling |
| `DOMContentLoaded` | `document` | HTML selesai diparsing |

`event.preventDefault()` mencegah tindakan bawaan browser, misalnya pengiriman form. Kita akan memakainya pada contoh form di bagian berikut. Hindari `stopPropagation()` kecuali memang perlu menghentikan event mencapai elemen induk.

#### Materi lanjutan: menghapus dan membuat event

Biasanya listener akan tetap aktif selama elemen ada di halaman. Jika perlu melepas listener, gunakan function yang sama saat memasang dan melepasnya:

```js
function catatKlik() {
  console.log('Tombol diklik');
}

const tombolUntukDicatat = document.querySelector('#tombol-sapa');

if (tombolUntukDicatat) {
  tombolUntukDicatat.addEventListener('click', catatKlik);
  tombolUntukDicatat.removeEventListener('click', catatKlik);
}
```

Untuk menjalankan listener satu kali saja, gunakan opsi `{ once: true }`:

```js
const tombolSekali = document.querySelector('#tombol-sapa');

if (tombolSekali) {
  tombolSekali.addEventListener('click', function () {
    console.log('Pesan ini hanya ditampilkan sekali');
  }, { once: true });
}
```

`CustomEvent` digunakan untuk membuat event khusus dari program. Topik ini lebih lanjut dan tidak dibutuhkan untuk menangani klik biasa.

```js
const kartu = document.querySelector('.kartu');

if (kartu) {
  kartu.addEventListener('tugas-selesai', event => {
    console.log(event.detail.nama); // nama tugas
  });

  kartu.dispatchEvent(new CustomEvent('tugas-selesai', {
    detail: { nama: 'Belajar DOM' },
    bubbles: true
  }));
}
```

`dispatchEvent()` mengirim event ke elemen. Karena `bubbles: true`, event dapat ditangani juga oleh listener pada elemen induk. Untuk event interaksi pengguna seperti klik, biarkan browser menghasilkannya melalui tindakan pengguna; jangan membuat event seolah-olah tindakan itu benar-benar dilakukan pengguna.

<a id="js-dom-forms"></a>
### Form, input, dan validasi

Gunakan event `submit` untuk membaca data saat form dikirim. Event ini berjalan ketika pengguna menekan tombol kirim atau menekan Enter pada input.

```html
<form id="form-nama">
  <label for="nama-pengguna">Nama</label>
  <input id="nama-pengguna" name="nama" required>
  <button type="submit">Kirim</button>
</form>
<p id="pesan-form" aria-live="polite"></p>
```

```js
const formNama = document.querySelector('#form-nama');
const pesanForm = document.querySelector('#pesan-form');

if (formNama && pesanForm) {
  formNama.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputNama = document.querySelector('#nama-pengguna');

    if (inputNama) {
      pesanForm.textContent = `Halo, ${inputNama.value.trim()}!`;
    }
  });
}
```

Karena input memiliki atribut `required`, browser akan meminta pengguna mengisinya sebelum form dikirim. `preventDefault()` mencegah browser memuat ulang halaman setelah form valid dikirim. `inputNama.value` adalah teks yang dimasukkan pengguna; `.trim()` membuang spasi di awal dan akhir. Jika form dikirim dengan nama, paragraf menampilkan sapaan. Gunakan `textContent` untuk menampilkan teks yang diketik pengguna.

Untuk bereaksi saat pengguna sedang mengetik, pasang listener `input` pada elemen input. Untuk pilihan seperti checkbox atau select, event `change` sering lebih sesuai. Pilih event berdasarkan kapan nilai perlu diproses.

HTML dapat memeriksa beberapa aturan sederhana sebelum JavaScript dijalankan. Misalnya, `required` mewajibkan input diisi, sedangkan `type="email"` memeriksa bentuk alamat email. Browser menampilkan pesan validasinya secara otomatis. Pemeriksaan di browser membantu pengguna; aplikasi yang mengirim data ke server juga perlu memvalidasinya di server.

```js
const form = document.querySelector('#form-nama');

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  });
}
```

Untuk validasi khusus, form juga menyediakan `checkValidity()` untuk memeriksa aturan HTML dan `reportValidity()` untuk meminta browser menampilkan pesan validasi.

Untuk checkbox dan radio, baca property `.checked`; untuk pilihan `<select>`, baca `.value`. Pada event keyboard, gunakan `event.key` untuk memeriksa tombol seperti `'Enter'` atau `'Escape'`. Jangan mengandalkan keyboard saja untuk tindakan yang juga harus bisa dilakukan lewat tombol atau elemen form.

<a id="js-dom-traversal"></a>
### Navigasi DOM dan traversal

Setelah menemukan satu elemen, kita dapat menelusuri hubungannya dengan elemen lain. Property umum termasuk `parentElement`, `children`, `firstElementChild`, dan `nextElementSibling`.

```js
const itemAktif = document.querySelector('.item.aktif');

if (itemAktif) {
  console.log(itemAktif.parentElement); // elemen induk
  console.log(itemAktif.nextElementSibling); // elemen saudara berikutnya atau null
}
```

Property dengan kata `Element` berfokus pada elemen HTML. Property node yang lebih umum juga dapat menyertakan teks dan komentar, jadi gunakan versi `Element` saat yang dibutuhkan memang tag HTML.

Method `closest(selector)` mencari elemen itu sendiri atau induk terdekat yang cocok dengan selector. `matches(selector)` memeriksa apakah elemen cocok dengan selector. Keduanya berguna untuk menangani event dari elemen bersarang atau memilih elemen berdasarkan kondisinya.

<a id="js-dom-ready"></a>
### Waktu pemuatan dokumen

Browser harus membaca HTML sebelum elemen-elemennya dapat dipilih. Cara sederhana adalah memasang script eksternal dengan atribut `defer`; script akan dijalankan setelah HTML selesai diparsing:

```html
<script src="main.js" defer></script>
```

Jika script tidak memakai `defer` dan dimuat di bagian `<head>`, kode bisa berjalan sebelum elemen halaman tersedia. Cara lain adalah menunggu event `DOMContentLoaded`:

```js
document.addEventListener('DOMContentLoaded', function () {
  const judul = document.querySelector('h1');
  console.log(judul?.textContent);
});
```

Pilih salah satu pola yang sesuai. Untuk file JavaScript eksternal biasa, `defer` umumnya sudah cukup dan membuat urutan HTML lebih mudah dipahami.

<a id="js-dom-observers"></a>
### Observer untuk perubahan DOM dan tampilan (materi lanjutan)

Observer adalah fitur lanjutan yang memberi tahu kode ketika ada perubahan, tanpa harus terus memeriksanya dengan timer. **MutationObserver** mengamati perubahan pada elemen DOM. Biasanya pemula tidak perlu menggunakannya; menambahkan event listener langsung lebih mudah.

```js
const daftarPantau = document.querySelector('#daftar-tugas');

if (daftarPantau) {
  const observer = new MutationObserver(perubahan => {
    console.log(`Jumlah perubahan: ${perubahan.length}`);
  });

  observer.observe(daftarPantau, {
    childList: true,
    subtree: true
  });
}
```

`observe()` mulai mengamati perubahan pada daftar dan elemen di dalamnya. Callback menerima daftar perubahan. Saat pengamatan tidak diperlukan lagi, panggil `observer.disconnect()` untuk menghentikannya.

**IntersectionObserver** memberi tahu saat elemen masuk atau keluar dari area yang terlihat, misalnya untuk memuat gambar saat diperlukan. **ResizeObserver** memberi tahu saat ukuran elemen berubah. Pilih observer yang sesuai daripada menjalankan pemeriksaan posisi atau ukuran berulang dengan `setInterval()`.

<a id="js-dom-practices"></a>
### Kebiasaan baik saat memakai DOM

1. **Pastikan elemen ditemukan.** Selector yang tidak menemukan elemen menghasilkan `null`. Periksa hasil pencarian sebelum menggunakannya, misalnya dengan `if (tombol) { ... }`.
2. **Gunakan `textContent` untuk teks.** Jangan masukkan teks dari pengguna ke `innerHTML`.
3. **Buat halaman mudah digunakan.** Pasangkan `<label>` dengan input, gunakan tombol untuk tindakan, dan pastikan halaman bisa digunakan dengan keyboard.
4. **Pisahkan tugas HTML, CSS, dan JavaScript.** HTML membuat struktur, CSS mengatur tampilan, dan JavaScript mengubah isi atau merespons tindakan.
5. **Jangan memasang listener berulang kali tanpa sengaja.** Pasang listener satu kali saat menyiapkan halaman.
6. **Mulai dengan cara sederhana.** Pilih elemen, periksa hasilnya, lalu ubah teks atau class. Event delegation dan observer bisa dipelajari ketika memang dibutuhkan.

---
