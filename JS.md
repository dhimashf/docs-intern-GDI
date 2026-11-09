# Materi JavaScript Lengkap

Panduan ini mengajak pembaca belajar JavaScript secara bertahap, mulai dari dasar, lanjut ke materi intermediate, lalu melihat cara kerja bahasa dan runtime di balik layar. Urutannya mengikuti alur belajar umum kurikulum JavaScript Codecademy, dengan penjelasan dan contoh yang ditulis ulang.

Panduan ini cocok untuk pemula, termasuk yang belum pernah menjadi programmer. Istilah teknis dijelaskan saat pertama kali muncul, dan contoh dimulai dari hal dasar sebelum masuk ke topik lanjutan. Contoh JavaScript dasar bisa dicoba di console browser atau Node.js. Contoh yang memakai `document` atau elemen halaman adalah materi DOM dan perlu dijalankan di browser; lihat [panduan JavaScript DOM](JS-DOM.md).

## Daftar Isi

1. [JavaScript Fundamental](#javascript-fundamental)
   - [Pengenalan dan menjalankan JavaScript](#js-pengenalan)
   - [Membaca syntax: expression, statement, dan arguments](#js-syntax-fundamental)
   - [Variabel dan tipe data](#js-variabel-tipe-data)
   - [Operator dan type coercion](#js-operator-coercion)
   - [String dan built-in methods](#js-string)
   - [Math dan angka](#js-math)
   - [Kondisi dan pengulangan](#js-kondisi)
   - [Function](#js-function)
   - [Scope](#js-scope)
      - [Hoisting](#js-hoisting)
   - [Array: properti dan semua method standar](#js-array-loop)
   - [Object](#js-object)
   - [Built-in penting: Map, Set, Date, JSON, RegExp, dan Intl](#js-builtins)
   - [Error handling dan debugging](#js-error-debugging)
      - [Jenis error JavaScript](#js-error-types)
   - [JavaScript DOM](JS-DOM.md#js-dom)
2. [JavaScript Intermediate](#javascript-intermediate)
   - [Destructuring, spread, dan rest](#js-destructuring)
   - [Iterator dan higher-order function](#js-iterator)
   - [Function lanjutan, closure, dan currying](#js-function-lanjutan)
   - [OOP: object, class, dan prinsip-prinsipnya](#js-oop)
   - [Design pattern dan anti-pattern](#js-design-patterns)
   - [Module](#js-module)
   - [Asynchronous JavaScript dan Promise](#js-async)
   - [HTTP request dan status code](#js-http-status)
3. [JavaScript Under the Hood](#javascript-under-the-hood)
   - [Engine dan runtime](#js-engine-runtime)
   - [Execution context, call stack, dan memory](#js-execution-context)
   - [Cara kerja type coercion](#js-coercion-detail)
   - [Event loop, asynchronous work, dan concurrency](#js-event-loop)
   - [Memory management dan garbage collection](#js-garbage-collection)
   - [Mendiagnosis memory issue](#js-memory-debugging)
4. [Ringkasan dan urutan belajar](#js-ringkasan)

---

<a id="javascript-fundamental"></a>
# 1. JavaScript Fundamental

<a id="js-pengenalan"></a>
## 1.1 Pengenalan dan menjalankan JavaScript

**JavaScript (JS)** adalah bahasa pemrograman yang digunakan untuk mengatur perilaku aplikasi. JavaScript bisa berjalan di browser maupun di luar browser, misalnya melalui Node.js. Di web, JavaScript bisa merespons tindakan pengguna dan berkomunikasi dengan server.

Pembagian peran pada web:

| Teknologi | Tanggung jawab |
| --- | --- |
| HTML | Struktur dan makna konten |
| CSS | Tampilan dan layout |
| JavaScript | Perilaku dan logika |

Hubungkan file JavaScript eksternal dengan `defer` agar script dijalankan setelah HTML selesai diparsing:

```html
<script src="main.js" defer></script>
```

Di tag itu, `src` menunjukkan file JavaScript yang akan dimuat, yaitu `main.js`. Atribut `defer` membuat browser menunggu sampai HTML selesai dibaca sebelum menjalankan file tersebut.

`console.log()` menampilkan nilai di console Developer Tools browser atau terminal Node.js. Kita bisa memakainya untuk melihat nilai dan memeriksa alur program. Hasilnya hanya terlihat di console, bukan di halaman aplikasi.

```js
console.log('JavaScript berjalan');
console.log(2 + 3);
```

Kedua baris memanggil `console.log()`, yang menampilkan nilai di dalam tanda kurung. Baris pertama menampilkan teks. Di baris kedua, JavaScript menghitung `2 + 3` terlebih dahulu, lalu menampilkan hasilnya, yaitu `5`.

Komentar satu baris memakai `//`, sedangkan komentar beberapa baris memakai `/* ... */`.

```js
// Komentar satu baris
/*
  Komentar beberapa baris
*/
```

JavaScript peka terhadap huruf besar-kecil: `nama` dan `Nama` adalah identifier yang berbeda.

<a id="js-syntax-fundamental"></a>
### Membaca syntax: expression, statement, dan arguments

**Expression (ekspresi)** adalah potongan kode yang menghasilkan nilai. Angka `42`, nama variabel `harga`, perhitungan `harga * jumlah`, dan pemanggilan function seperti `Math.max(3, 8)` semuanya termasuk expression. Hasilnya bisa disimpan ke variabel, dikirim ke function, atau dipakai dalam perhitungan lain.

```js
42                         // expression literal, nilainya 42
harga * jumlah             // expression aritmatika, hasil perkalian
'Halo, ' + nama            // expression penggabungan string
Math.max(3, 8)             // function call expression, hasilnya 8
```

**Statement (pernyataan)** adalah instruksi yang dijalankan program. Contohnya membuat variabel, memeriksa kondisi, atau memanggil function. Statement bisa berisi expression, tetapi tidak semua statement menghasilkan nilai.

```js
const total = harga * jumlah; // statement deklarasi: membuat variabel total
                              // harga * jumlah adalah expression di sisi kanan =
if (total > 100) {            // if statement: memeriksa expression total > 100
  console.log(total);         // expression statement: menjalankan function call
}
```

Di `const total = harga * jumlah;`, satu baris penuh adalah **declaration statement** karena membuat variabel. Perhitungan `harga * jumlah` di dalamnya adalah **expression** yang hasilnya disimpan ke `total`. `total > 100` juga expression, dengan hasil `true` atau `false`. Baris `console.log(total);` disebut **expression statement** karena pemanggilan function menjadi instruksi yang dijalankan.

Ada dua cara umum untuk membuat function. **Function declaration** mendefinisikannya dengan nama, sedangkan **function expression** membuat function sebagai sebuah nilai:

```js
function sapa(nama) {         // function declaration: mendefinisikan function bernama sapa
  return `Halo, ${nama}!`;    // return statement; template literal adalah expression
}

const sapaLain = function (nama) { // seluruh function di sisi kanan = adalah function expression
  return `Hai, ${nama}!`;
};

const pesan = sapa('Dhimas'); // sapa('Dhimas') adalah call expression; 'Dhimas' adalah argument
```

Di contoh tadi, `function sapa(...) { ... }` adalah **function declaration** karena function-nya bernama `sapa`. Sebaliknya, `function (nama) { ... }` di sisi kanan `=` adalah **function expression**. Function itu disimpan sebagai nilai di variabel `sapaLain`. Seluruh baris `const sapaLain = ...;` tetap merupakan statement untuk membuat variabel.

Function mempunyai **parameter** dan **argument**:

```js
function sapa(nama, sapaan) {      // nama dan sapaan adalah parameter
  return `${sapaan}, ${nama}!`;    // nama dan sapaan dipakai dalam expression
}

sapa('Dhimas', 'Halo');            // function call expression
                                   // 'Dhimas' dan 'Halo' adalah argument
```

**Parameter** adalah nama yang disiapkan function untuk menerima nilai. **Argument** adalah nilai yang dikirim saat function dipanggil. Pada `sapa('Dhimas', 'Halo')`, `nama` dan `sapaan` adalah parameter, sedangkan `'Dhimas'` dan `'Halo'` adalah argument. JavaScript memasangkan nilainya berdasarkan urutan. Jumlah argument tidak harus sama dengan jumlah parameter. Parameter yang tidak menerima nilai akan berisi `undefined`; argument tambahan bisa ditampung dengan rest parameter (`...args`).

Pada function biasa, JavaScript menyediakan object khusus bernama `arguments` yang berisi nilai-nilai yang dikirim saat function dipanggil. Object ini mirip array, tetapi bukan Array sungguhan. Arrow function tidak memiliki `arguments` sendiri. Untuk menampung banyak input, rest parameter biasanya lebih mudah dipahami:

```js
function contohArguments() {
  console.log(arguments[0], arguments.length);
}

function contohRest(...args) {
  console.log(args[0], args.length);
}

contohArguments('a', 'b'); // 'a', 2
contohRest('a', 'b');      // 'a', 2
```

**Operator** adalah simbol atau kata kunci yang melakukan operasi. Nilai yang diolahnya disebut **operand**. Misalnya, pada `a + b`, `+` adalah operator dan `a` serta `b` adalah operand. Ketiganya membentuk expression yang menghasilkan jumlah `a` dan `b`. Operator `-nilai` memakai satu operand, sedangkan `syarat ? a : b` memakai tiga.

**Block** adalah kumpulan statement di antara `{}`. Block biasanya muncul di function, kondisi, dan loop. Variabel `let` atau `const` yang dibuat di dalam block hanya bisa dipakai di sana.

Titik koma (`;`) menandai akhir statement. JavaScript kadang menambahkannya secara otomatis, tetapi menulisnya sendiri dapat mencegah salah tafsir. Baris baru tidak selalu menggantikan titik koma dengan aman.

<a id="js-variabel-tipe-data"></a>
## 1.2 Variabel dan tipe data

### Variables

**Variable (variabel)** adalah nama yang kita berikan pada suatu nilai agar nilai itu dapat digunakan kembali. Bayangkan variabel seperti label pada kotak: label `nama` membantu kita menemukan nilai `'Dhimas'` tanpa menulis ulang nilainya di setiap tempat.

```js
const nama = 'Dhimas';
let skor = 0;

skor = skor + 10;
console.log(nama, skor);
```

Di contoh ini, `const nama = 'Dhimas';` dan `let skor = 0;` membuat dua variabel. Teks `'Dhimas'` dan angka `0` menjadi nilai awalnya. Baris `skor = skor + 10;` menghitung nilai baru, lalu menyimpannya kembali ke `skor`. Terakhir, `console.log(nama, skor)` menampilkan kedua nilai itu; `nama` dan `skor` adalah argument yang dikirim ke `console.log()`.

Gunakan `const` atau `let` untuk membuat variabel:

1. **`const`**: gunakan saat nama variabel tidak perlu diarahkan ke nilai lain. Pilihan ini membantu mencegah perubahan yang tidak disengaja.
2. **`let`**: gunakan saat nilainya perlu diperbarui, misalnya untuk penghitung atau total.
3. **`var`**: ini cara lama dengan aturan scope yang berbeda. Hindari untuk kode baru, kecuali saat membaca atau memelihara kode lama.

`const` menjaga agar nama variabel tetap menunjuk ke nilai yang sama. Namun, jika nilainya object atau array, isi di dalamnya masih bisa diubah. `let` dan `const` hanya bisa dipakai di dalam block tempat keduanya dibuat.

```js
const warna = 'biru';
let jumlah = 1;
jumlah = 2; // boleh: jumlah memakai let

const buah = ['apel'];
buah.push('mangga'); // boleh: isi array berubah
// warna = 'merah'; // TypeError: binding const tidak dapat diganti
```

Contoh lain: kalau nilai tidak akan diganti, gunakan `const`. Kalau nilainya perlu berubah, gunakan `let`:

```js
const namaPengguna = 'Dhimas';
let jumlahPesanan = 1;

jumlahPesanan = 2;
console.log(`${namaPengguna} memesan ${jumlahPesanan} barang`);
```

Di sini, `namaPengguna` tetap berisi `'Dhimas'`, sedangkan `jumlahPesanan` berubah dari `1` menjadi `2`. Kita tetap bisa mengubah isi array atau object yang disimpan dalam `const`; yang tidak bisa diganti adalah nilai yang ditunjuk oleh nama variabelnya.

### Data types

**Data type (tipe data)** menjelaskan jenis nilai yang sedang kita gunakan. Jenisnya penting karena menentukan operasi apa yang masuk akal: angka dapat dijumlahkan, teks dapat digabungkan, dan boolean dapat dipakai untuk mengambil keputusan.

JavaScript memiliki tujuh tipe **primitive** dan satu kategori **object**:

| Tipe | Penjelasan | Contoh |
| --- | --- | --- |
| `string` | Teks, termasuk huruf, angka yang diperlakukan sebagai teks, dan simbol | `'Halo'`, `'123'` |
| `number` | Angka bulat atau desimal; juga mencakup `NaN` dan `Infinity` | `42`, `3.14` |
| `bigint` | Bilangan bulat yang terlalu besar untuk direpresentasikan aman oleh `Number` | `12345678901234567890n` |
| `boolean` | Nilai benar/salah yang biasa dipakai untuk keputusan | `true`, `false` |
| `undefined` | Nilai yang belum tersedia atau belum diberikan | `let hasil;` |
| `null` | Penanda bahwa nilai sengaja dikosongkan | `const pilihan = null;` |
| `symbol` | Identifier unik; berguna untuk key khusus | `Symbol('id')` |
| `object` | Wadah untuk mengelompokkan data; termasuk object biasa, array, dan function | `{ nama: 'Dhimas' }`, `[1, 2]` |

Tujuh tipe pertama disebut **primitive**: nilai dasar yang tidak menyimpan kumpulan property seperti object. **Object** dapat berisi banyak nilai dan diakses melalui reference. Perbedaan ini akan terlihat saat object disalin atau diubah.

`undefined` dan `null` sama-sama menunjukkan ketiadaan nilai, tetapi maksudnya berbeda: `undefined` biasanya berarti belum ada nilai, sedangkan `null` biasanya berarti program sengaja menyatakan “kosong”.

Pilih tipe data sesuai dengan isi yang ingin disimpan. Misalnya, input `"25"` tetap berupa teks. Ubah dulu menjadi angka sebelum dipakai untuk berhitung:

```js
const teksJumlah = '25';
const jumlah = Number(teksJumlah);

console.log(typeof teksJumlah); // 'string'
console.log(typeof jumlah); // 'number'
console.log(jumlah + 5); // 30
```

Nilai `'25'` adalah teks, jadi tipenya `string`. Pemanggilan `Number(teksJumlah)` mengubahnya menjadi angka; `teksJumlah` adalah argument yang dikirim ke `Number()`. Hasil konversi disimpan di `jumlah`. Setelah itu, expression `jumlah + 5` menjumlahkan angka `25` dan `5`, sehingga hasilnya `30`.

Kita bisa memakai `typeof` untuk memeriksa tipe nilai. Karena array juga termasuk object, gunakan `Array.isArray()` untuk memastikan apakah sebuah nilai benar-benar array.

```js
console.log(typeof 'halo');      // 'string'
console.log(typeof 42);          // 'number'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof null);        // 'object' (perilaku lama yang dipertahankan)
console.log(Array.isArray([]));  // true
```

`typeof null === 'object'` adalah perilaku lama JavaScript. Itu tidak berarti `null` merupakan object. Untuk mengecek `null`, bandingkan langsung dengan `value === null`.

`Number.isNaN()` memeriksa apakah nilai benar-benar `NaN`; `Number.isFinite()` memeriksa apakah angka bukan `Infinity` atau `-Infinity`. `Number.MAX_SAFE_INTEGER` menunjukkan integer terbesar yang aman dibandingkan sebagai `Number`.

```js
console.log(Number.isNaN(NaN));       // true
console.log(Number.isFinite(10));     // true
console.log(Number.MAX_SAFE_INTEGER);
```

Satu data juga bisa ditulis dengan tipe berbeda. Misalnya, angka `25` dan teks `'25'` terlihat mirip, tetapi JavaScript memperlakukannya berbeda:

```js
const umurAngka = 25;
const umurTeks = '25';

console.log(umurAngka + 1); // 26
console.log(umurTeks + 1);  // '251'
console.log(Number(umurTeks) + 1); // 26
```

Pada contoh ini, tanda `+` menjumlahkan `number`, tetapi menggabungkan `string` dengan teks. `Number(umurTeks)` mengubah string menjadi angka agar bisa dijumlahkan.

<a id="js-operator-coercion"></a>
## 1.3 Operator dan type coercion

### Arithmetic Operators

**Arithmetic operators (operator aritmatika)** digunakan untuk melakukan perhitungan angka. Operator ini mengambil satu atau lebih nilai (operand), melakukan operasi, lalu menghasilkan nilai baru.

1. **Addition (`+`)**: menjumlahkan angka. Jika salah satu operand berupa string, operator ini dapat menggabungkan teks.
2. **Subtraction (`-`)**: mengurangi angka.
3. **Multiplication (`*`)**: mengalikan angka.
4. **Division (`/`)**: membagi angka. Hasilnya dapat berupa desimal.
5. **Remainder (`%`)**: mengambil sisa pembagian.
6. **Exponentiation (`**`)**: menaikkan angka ke pangkat tertentu.

```js
console.log(3 + 4);   // 7
console.log(5 - 1);   // 4
console.log(4 * 2);   // 8
console.log(9 / 2);   // 4.5
console.log(11 % 3);  // 2, sisa pembagian
console.log(2 ** 3);  // 8, pangkat
```

**Assignment operators (operator penugasan)** menyimpan nilai ke variabel. Bentuk gabungan seperti `+=` melakukan perhitungan lalu menyimpan hasilnya kembali ke variabel yang sama.

```js
let total = 100;
total += 10; // sama dengan: total = total + 10
total -= 5;
total *= 2;
total /= 3;
```

Tanda `=` berarti “simpan nilai”, bukan “bandingkan”. Untuk membandingkan nilai, gunakan `===`:

```js
let skor = 0; // = menyimpan nilai 0
skor = skor + 5; // = menyimpan hasil perhitungan
console.log(skor === 5); // === membandingkan; hasilnya true
```

Di baris kedua, `skor + 5` adalah expression yang menghitung nilai baru, lalu `=` menyimpannya kembali ke `skor`. Di baris ketiga, `skor === 5` membandingkan dua nilai dan menghasilkan `true` atau `false`. Hasil perbandingan itulah yang ditampilkan oleh `console.log()`.

### Comparison Operators

**Comparison operators (operator perbandingan)** membandingkan dua nilai dan menghasilkan `true` atau `false`. Hasilnya sering dipakai oleh `if` dan loop untuk menentukan langkah berikutnya.

```js
console.log(5 > 3);             // true
console.log(5 === 5);           // true: nilai dan tipe sama
console.log(5 !== '5');         // true
```

Operator perbandingan lain yang sering digunakan:

| Operator | Arti | Contoh |
| --- | --- | --- |
| `>` | lebih besar dari | `8 > 5` menghasilkan `true` |
| `<` | lebih kecil dari | `3 < 5` menghasilkan `true` |
| `>=` | lebih besar dari atau sama dengan | `5 >= 5` menghasilkan `true` |
| `<=` | lebih kecil dari atau sama dengan | `4 <= 5` menghasilkan `true` |
| `===` | sama nilai dan tipe | `5 === '5'` menghasilkan `false` |
| `!==` | nilai atau tipe berbeda | `5 !== '5'` menghasilkan `true` |

`===` membandingkan nilai dan tipe sekaligus, sedangkan `!==` memeriksa apakah nilai atau tipe berbeda. Gunakan keduanya sebagai pilihan utama. `==` dan `!=` dapat mengubah tipe nilai sebelum membandingkan, sehingga hasilnya lebih sulit ditebak.

```js
console.log(5 === 5);   // true
console.log(5 === '5'); // false: number berbeda dari string
console.log(5 == '5');  // true: perbandingan longgar melakukan coercion
```

**Logical Operators**

Logical operators digunakan untuk menggabungkan kondisi, membalik nilai logika, atau menentukan bagaimana suatu ekspresi dievaluasi. Operator ini penting ketika sebuah keputusan memiliki lebih dari satu syarat. JavaScript memiliki tiga logical operators utama:

1. **AND (`&&`)**: bernilai truthy jika kedua kondisi truthy. Gunakan saat semua syarat harus terpenuhi.
2. **OR (`||`)**: bernilai truthy jika setidaknya satu kondisi truthy. Gunakan saat satu syarat saja sudah cukup.
3. **NOT (`!`)**: membalik nilai logika. Kondisi truthy menjadi `false`, sedangkan kondisi falsy menjadi `true`.

```js
const umur = 20;
const punyaKartuIdentitas = true;

console.log(umur >= 17 && punyaKartuIdentitas); // true: kedua syarat terpenuhi
console.log(umur < 17 || punyaKartuIdentitas);  // true: salah satu syarat terpenuhi
console.log(!punyaKartuIdentitas);              // false: nilai dibalik
```

Di kondisi pertama, `umur >= 17` memeriksa usia, lalu `&&` menggabungkan hasilnya dengan `punyaKartuIdentitas`. Karena keduanya bernilai benar, seluruh expression menghasilkan `true`. Operator `||` pada kondisi kedua cukup menemukan satu nilai yang benar. Tanda `!` pada kondisi terakhir membalik nilai `punyaKartuIdentitas`, sehingga `true` berubah menjadi `false`.

`&&` dan `||` memakai **short-circuit evaluation**. JavaScript memeriksa nilai dari kiri ke kanan dan berhenti begitu hasilnya sudah jelas. Karena itu, hasil operator ini bisa berupa salah satu nilai yang diperiksa, bukan hanya `true` atau `false`:

```js
console.log('Dhimas' || 'Tamu'); // 'Dhimas': operand kiri truthy, operand kanan tidak dievaluasi
console.log(0 || 10);         // 10: operand kiri falsy
console.log('Dhimas' && 10);  // 10: operand kanan menjadi hasil
```

Operator `||` dan `??` sama-sama bisa memberi nilai pengganti, tetapi cara memilihnya berbeda:

```js
const jumlahTiket = 0;
const namaPanggilan = '';

console.log(jumlahTiket || 1); // 1, karena 0 dianggap falsy
console.log(jumlahTiket ?? 1); // 0, karena 0 bukan null atau undefined
console.log(namaPanggilan || 'Tamu'); // 'Tamu'
console.log(namaPanggilan ?? 'Tamu'); // '', string kosong tetap dipakai
```

Pakai `||` jika semua nilai falsy perlu diganti. Pakai `??` jika hanya `null` atau `undefined` yang perlu diganti.

Gunakan `Boolean(nilai)` atau `!!nilai` jika memang membutuhkan hasil boolean. Untuk nilai fallback yang hanya digunakan saat nilai awal `null` atau `undefined`, gunakan nullish coalescing (`??`) agar nilai valid seperti `0` dan `''` tidak terganti.

Operator penting lainnya:

| Kelompok | Operator | Kegunaan |
| --- | --- | --- |
| Unary | `typeof`, `!`, `+x`, `-x`, `++`, `--`, `void`, `delete` | Memeriksa tipe, membalik boolean, mengonversi angka, menaikkan/menurunkan nilai, dan operasi unary lain |
| Perbandingan | `<`, `<=`, `>`, `>=`, `in`, `instanceof` | Membandingkan urutan atau memeriksa properti/relasi prototype |
| Nullish | `??`, `??=` | Memberi nilai fallback hanya untuk `null`/`undefined`; `??=` mengisi jika sisi kiri nullish |
| Optional chaining | `?.`, `?.[]`, `?.()` | Menghasilkan `undefined` tanpa error jika nilai yang diakses adalah `null` atau `undefined` |
| Bitwise | `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` | Operasi pada representasi bit integer 32-bit; gunakan hanya saat memang diperlukan |
| Lainnya | `...`, `,`, `new`, `await`, `yield` | Spread/rest, comma expression, membuat instance, dan alur asynchronous/generator |

```js
const pengguna = { profil: { nama: 'Nia' } };
const nama = pengguna?.profil?.nama ?? 'Tamu';
const punyaNama = 'nama' in pengguna;
const instanceArray = [] instanceof Array;
```

Operator assignment mencakup `=`, operator gabungan aritmatika (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`), logical/nullish (`&&=`, `||=`, `??=`), dan bitwise (`&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=`). `++` dan `--` mengubah nilai variabel satu unit; bentuk prefix (`++x`) dan postfix (`x++`) menghasilkan nilai expression yang berbeda.

Urutan evaluasi dipengaruhi **operator precedence**. Gunakan tanda kurung untuk memperjelas maksud, bukan menghafal semua tingkat prioritas:

```js
const hasil = 2 + 3 * 4;     // 14: perkalian lebih dahulu
const jelas = (2 + 3) * 4;   // 20: tanda kurung lebih dahulu
```

Gunakan `===` dan `!==` secara default. `==` dan `!=` dapat melakukan konversi tipe implisit, sehingga hasilnya kadang mengejutkan:

```js
console.log(12 == '12');  // true
console.log(12 === '12'); // false
```

### Truthy dan falsy

Ketika sebuah nilai dipakai sebagai kondisi, JavaScript menilainya seolah-olah nilai tersebut `true` atau `false`. Nilai yang dianggap benar disebut **truthy**; nilai yang dianggap salah disebut **falsy**. Ini memungkinkan kita menulis kondisi ringkas, tetapi penting memahami nilai mana yang dianggap kosong.

Dalam kondisi, nilai dikonversi ke boolean. Nilai falsy meliputi `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, dan `NaN`. Nilai lain termasuk `[]` dan `{}` adalah truthy.

```js
const namaPengguna = '';

if (namaPengguna) {
  console.log('Nama tersedia');
} else {
  console.log('Nama belum diisi');
}
```

Jangan menyamakan `value || fallback` dengan pemeriksaan “nilai kosong” untuk semua kasus: nilai valid seperti `0` dan `''` juga akan diganti. Gunakan nullish coalescing `??` jika fallback hanya diperlukan saat nilai `null` atau `undefined`.

```js
const jumlah = 0;
console.log(jumlah || 10); // 10
console.log(jumlah ?? 10); // 0
```

`typeof` adalah operator unary (bekerja pada satu operand), sementara operator seperti `+` dan `-` umumnya bekerja pada dua operand.

<a id="js-string"></a>
## 1.4 String dan built-in methods

### Strings

**String** adalah tipe data untuk menyimpan teks. String bisa ditulis dengan petik tunggal (`'...'`) atau petik ganda (`"..."`). Kalau ingin menyisipkan nilai ke dalam kalimat, gunakan backtick (`` `...` ``). Bentuk ini disebut **template literal**.

```js
const nama = 'Dina';
const pesan = `Halo, ${nama}!`;

console.log(pesan);
console.log(pesan.length);         // jumlah unit kode UTF-16
console.log('JavaScript'.toUpperCase());
console.log('  belajar  '.trim());
console.log('apel,jeruk'.split(','));
console.log('JavaScript'.includes('Script'));
```

Di template literal, `${nama}` mengambil nilai `nama` lalu menyisipkannya ke kalimat. Cara ini disebut **interpolation**, jadi `pesan` berisi `'Halo, Dina!'`. `pesan.length` menunjukkan panjang teks dalam unit kode UTF-16. Method seperti `.toUpperCase()` menghasilkan string baru, sehingga string awal tidak berubah (**immutable**). Pada `'apel,jeruk'.split(',')`, argument `','` memberi tahu `.split()` bahwa koma adalah pemisah.

```js
const bahasa = 'JavaScript';
const hurufBesar = bahasa.toUpperCase();

console.log(hurufBesar); // 'JAVASCRIPT'
console.log(bahasa); // tetap 'JavaScript'
```

Teks juga bisa dirangkai dengan operator `+`. Untuk kalimat yang menyisipkan beberapa nilai, template literal biasanya lebih mudah dibaca:

```js
const nama = 'Dhimas';
const jumlah = 3;

const pesanDenganTambah = 'Halo, ' + nama + '! Kamu punya ' + jumlah + ' pesan.';
const pesanDenganTemplate = `Halo, ${nama}! Kamu punya ${jumlah} pesan.`;

console.log(pesanDenganTambah);
console.log(pesanDenganTemplate);
```

Kedua expression menghasilkan kalimat yang sama. Pada template literal, backtick membungkus teks dan `${...}` menyisipkan nilai. Hindari menggabungkan banyak bagian dengan `+` jika membuat kalimat sulit dibaca.

### String methods yang sering digunakan

String methods adalah function yang bekerja pada teks. Ada method untuk mencari kata, mengambil sebagian teks, merapikan spasi, mengganti isi, atau memecah teks menjadi array.

| Method | Fungsi | Contoh hasil |
| --- | --- | --- |
| `.toUpperCase()` / `.toLowerCase()` | Mengubah kapitalisasi | `'Halo'.toLowerCase()` → `'halo'` |
| `.trim()` | Menghapus whitespace di awal/akhir | `' hi '.trim()` → `'hi'` |
| `.includes(teks)` | Memeriksa substring | `'belajar'.includes('ajar')` → `true` |
| `.startsWith(teks)` / `.endsWith(teks)` | Memeriksa awalan/akhiran | `'index.js'.endsWith('.js')` → `true` |
| `.slice(start, end)` | Mengambil bagian string | `'JavaScript'.slice(0, 4)` → `'Java'` |
| `.replace(cari, ganti)` | Mengganti kecocokan | `'a-b'.replace('-', ':')` → `'a:b'` |
| `.split(pemisah)` | Memecah menjadi array | `'a,b'.split(',')` → `['a', 'b']` |
| `.repeat(jumlah)` | Mengulang string sejumlah kali | `'ha'.repeat(3)` → `'hahaha'` |

`.slice(start, end)` mengambil sebagian teks tanpa mengubah string asal. Indeks `start` ikut diambil, tetapi indeks `end` tidak. `.split()` berguna untuk memisahkan teks berdasarkan tanda tertentu.

```js
const kalimat = 'apel, mangga, jeruk';
const daftarBuah = kalimat.split(', ');

console.log(daftarBuah); // ['apel', 'mangga', 'jeruk']
console.log(daftarBuah[0].toUpperCase()); // 'APEL'
```

`kalimat.split(', ')` memisahkan teks setiap kali menemukan koma dan spasi. Hasilnya disimpan sebagai array di `daftarBuah`. Lalu `daftarBuah[0]` mengambil buah pertama, dan `.toUpperCase()` mengubahnya menjadi huruf besar. String awal `kalimat` tidak berubah.

Method `.repeat(jumlah)` membuat string baru dengan mengulang teks asal. Method ini tidak menjalankan ulang kode seperti loop:

```js
const pola = 'na';
const hasilUlang = pola.repeat(3);

console.log(hasilUlang); // 'nanana'
console.log(pola); // 'na', string asal tidak berubah
```

Angka `3` adalah argument untuk parameter `jumlah`, jadi `'na'` muncul tiga kali pada hasilnya. Jumlah pengulangan harus bernilai non-negatif; `.repeat()` berguna untuk membentuk teks berulang, bukan untuk menjalankan instruksi berkali-kali.

<a id="js-math"></a>
## 1.5 Math dan angka

### Angka dan built-in `Math`

JavaScript menggunakan tipe `Number` untuk angka biasa. Object bawaan **`Math`** menyediakan function untuk perhitungan yang lebih khusus daripada tambah, kurang, kali, dan bagi. Tulis `Math`, titik, nama method, dan tanda kurung untuk menjalankannya.

Contohnya, `Math.max(3, 8)` mencari angka terbesar dari dua argument, yaitu `3` dan `8`. Hasilnya `8`.

### Rounding methods

Rounding methods mengubah angka desimal menjadi integer dengan aturan pembulatan tertentu. Perbedaan paling penting: `floor` dan `ceil` mengarah ke bawah/atas garis bilangan, sedangkan `trunc` membuang desimal menuju nol.

| Method | Fungsi | Contoh |
| --- | --- | --- |
| `Math.floor(x)` | Membulatkan ke bawah menuju `-Infinity` | `Math.floor(4.8)` → `4`; `Math.floor(-4.2)` → `-5` |
| `Math.ceil(x)` | Membulatkan ke atas menuju `Infinity` | `Math.ceil(4.2)` → `5`; `Math.ceil(-4.8)` → `-4` |
| `Math.trunc(x)` | Membuang bagian desimal menuju nol | `Math.trunc(-4.8)` → `-4` |
| `Math.round(x)` | Membulatkan ke integer terdekat | `Math.round(4.5)` → `5` |

### Math methods lainnya

Method berikut membantu mencari nilai minimum/maksimum, menghitung jarak dari nol, akar, pangkat, dan angka acak. Semuanya menerima argument di dalam tanda kurung.

| Method | Fungsi | Contoh hasil |
| --- | --- | --- |
| `Math.min(a, b, ...)` | Mengambil nilai terkecil | `Math.min(4, 2, 9)` menghasilkan `2` |
| `Math.max(a, b, ...)` | Mengambil nilai terbesar | `Math.max(4, 2, 9)` menghasilkan `9` |
| `Math.abs(x)` | Menghasilkan jarak angka dari nol (nilai absolut) | `Math.abs(-5)` menghasilkan `5` |
| `Math.sign(x)` | Menunjukkan apakah angka negatif, nol, atau positif | `Math.sign(-5)` menghasilkan `-1` |
| `Math.sqrt(x)` | Menghitung akar kuadrat | `Math.sqrt(25)` menghasilkan `5` |
| `Math.cbrt(x)` | Menghitung akar pangkat tiga | `Math.cbrt(8)` menghasilkan `2` |
| `Math.pow(x, y)` | Menghitung `x` pangkat `y`; bisa juga memakai `x ** y` | `Math.pow(2, 3)` menghasilkan `8` |
| `Math.random()` | Menghasilkan angka pseudoacak dalam rentang `0 <= hasil < 1` | Dapat menghasilkan `0.42` atau nilai lain |

Untuk integer acak antara `min` dan `max` termasuk kedua batasnya, skalakan hasil `.random()`, bulatkan ke bawah, lalu geser ke nilai minimum. Fungsi ini berguna untuk simulasi sederhana seperti dadu:

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6)); // 1 sampai 6
```

Function `randomInt` menerima dua parameter, `min` dan `max`. Saat kita menulis `randomInt(1, 6)`, angka `1` dan `6` menjadi argument-nya. Di dalam function, `Math.random()` menghasilkan angka antara 0 dan 1. Perhitungan berikutnya mengubah rentang angka itu, lalu `Math.floor()` membuang bagian desimal. `return` mengirim angka akhirnya kembali.

`Math.random()` cocok untuk simulasi sederhana, bukan untuk token keamanan atau kriptografi. Untuk kebutuhan keamanan, gunakan `crypto.getRandomValues()` di browser atau API kriptografi yang sesuai di runtime.

<a id="js-kondisi"></a>
## 1.6 Kondisi dan pengulangan

### Conditional statements

**Conditional statement (pernyataan kondisi)** membuat program memilih tindakan berdasarkan syarat. Jika syarat terpenuhi, program menjalankan satu tindakan; jika tidak, program bisa menjalankan tindakan lain.

1. **`if`** menjalankan blok saat kondisi bernilai truthy.
2. **`else if`** memeriksa syarat lain bila syarat sebelumnya tidak terpenuhi.
3. **`else`** menjadi pilihan terakhir bila semua syarat sebelumnya tidak terpenuhi.

```js
const nilai = 82;

if (nilai >= 85) {
  console.log('Sangat baik');
} else if (nilai >= 70) {
  console.log('Lulus');
} else {
  console.log('Perlu latihan');
}
```

`nilai >= 85` dan `nilai >= 70` adalah kondisi yang masing-masing menghasilkan `true` atau `false`. JavaScript memeriksanya dari atas ke bawah dan menjalankan block pertama yang kondisinya benar. Karena nilai `82` tidak memenuhi syarat pertama, tetapi memenuhi syarat kedua, program menampilkan `'Lulus'`.

Untuk memilih satu dari dua nilai, kondisi yang sama dapat ditulis dengan ternary. Gunakan bentuk ini untuk pilihan sederhana; untuk beberapa langkah atau banyak pilihan, `if...else` lebih mudah dibaca.

```js
const nilaiAkhir = 76;
const hasilIf = nilaiAkhir >= 70 ? 'Lulus' : 'Belum lulus';
console.log(hasilIf); // 'Lulus'
```

Expression `nilaiAkhir >= 70` menjadi kondisi. Karena hasilnya `true`, nilai setelah tanda `?` dipilih. Nilai setelah `:` hanya dipakai jika kondisi bernilai `false`.

Gunakan **`switch`** saat satu nilai perlu dicocokkan dengan beberapa pilihan tetap. `break` mengakhiri pilihan yang cocok supaya eksekusi tidak berlanjut ke `case` berikutnya.

```js
const peran = 'editor';

switch (peran) {
  case 'admin':
    console.log('Akses penuh');
    break;
  case 'editor':
    console.log('Akses edit');
    break;
  default:
    console.log('Akses baca');
}
```

**Ternary operator (`? :`)** memilih satu dari dua nilai berdasarkan kondisi. Bagian sebelum `?` adalah kondisi. Nilai setelah `?` dipakai jika kondisi benar, sedangkan nilai setelah `:` dipakai jika kondisi salah.

```js
const status = nilai >= 70 ? 'lulus' : 'belum lulus';
```

Karena `nilai` lebih besar atau sama dengan 70, `status` berisi `'lulus'`. Jika syaratnya tidak terpenuhi, nilainya menjadi `'belum lulus'`. Untuk kondisi yang lebih rumit, `if...else` biasanya lebih mudah dibaca daripada ternary bertingkat.

### Pengulangan dengan `for`

**Loop (pengulangan)** menjalankan instruksi berkali-kali. `for` cocok jika jumlah putaran sudah diketahui atau kita ingin membaca item berdasarkan indeks.

```js
for (let nomor = 1; nomor <= 3; nomor += 1) {
  console.log(`Putaran ${nomor}`);
}
```

Di dalam tanda kurung `for` ada tiga bagian. `let nomor = 1` memberi nilai awal dan dijalankan sekali. `nomor <= 3` menentukan apakah loop lanjut. Setelah setiap putaran, `nomor += 1` menambah nilainya satu. Karena itu, `console.log()` menampilkan 1, 2, dan 3. Loop berhenti saat `nomor <= 3` tidak lagi benar.

Kalau yang dibutuhkan adalah nilai setiap item, bukan indeksnya, `for...of` lebih ringkas:

```js
const anakMagang = ['Dhimas', 'John Doe', 'Raka'];

for (const nama of anakMagang) {
  console.log(nama);
}
```

`for...of` mengambil isi array satu per satu. Pada putaran pertama, variabel `nama` berisi `'Dhimas'`, lalu `'John Doe'`, kemudian `'Raka'`. Loop berhenti sendiri setelah semua item dibaca. Gunakan `for` biasa jika indeks diperlukan atau jumlah putaran sudah diketahui.

Jika perlu nilai sekaligus indeksnya, `for` biasa bisa dipakai seperti ini:

```js
const anakMagang = ['Dhimas', 'John Doe', 'Raka'];

for (let indeks = 0; indeks < anakMagang.length; indeks += 1) {
  console.log(indeks, anakMagang[indeks]);
}
```

Di sini, `indeks` dimulai dari `0` dan bertambah satu setelah setiap putaran. `anakMagang[indeks]` mengambil nama pada posisi tersebut. Pilih `for...of` untuk membaca nilai saja, dan `for` biasa saat indeks juga dibutuhkan.

### Pengulangan dengan `for...in`

`for...in` membaca nama property enumerable dari sebuah object. Gunakan untuk object, bukan untuk membaca isi array, karena urutan dan bentuk key array tidak selalu sesuai dengan kebutuhan iterasi daftar.

```js
const profil = {
  nama: 'Dhimas',
  pekerjaan: 'Developer'
};

for (const kunci in profil) {
  console.log(kunci, profil[kunci]);
}
```

Pada setiap putaran, `kunci` berisi nama property, yaitu `'nama'` lalu `'pekerjaan'`. `profil[kunci]` mengambil nilai berdasarkan nama property tersebut. Jika object berasal dari sumber yang tidak dikenal atau memiliki prototype khusus, periksa `Object.hasOwn(profil, kunci)` agar hanya property milik object itu sendiri yang diproses.

### Alternatif array: `.forEach()`

Array juga memiliki method `.forEach()` untuk menjalankan callback pada setiap item. Pilih ini untuk tindakan sederhana, misalnya menampilkan setiap nama. Jika perlu menghentikan loop lebih awal dengan `break`, gunakan `for...of`.

```js
const namaPengguna = ['Dhimas', 'John Doe', 'Raka'];

namaPengguna.forEach(function (nama) {
  console.log(nama);
});
```

`.forEach()` memanggil function yang diberikan satu kali untuk setiap item. Parameter `nama` menerima nilai item yang sedang diproses. Berbeda dari `for...of`, `return` di callback hanya mengakhiri pemanggilan callback saat itu, bukan seluruh proses `.forEach()`.

### Pengulangan dengan `while` dan `do...while`

`while` memeriksa kondisi sebelum setiap putaran, sehingga badan loop mungkin tidak dijalankan sama sekali. `do...while` memeriksa kondisi setelah badan loop, sehingga instruksi selalu dijalankan setidaknya satu kali. Pilih sesuai apakah pemeriksaan perlu terjadi sebelum atau sesudah tindakan.

```js
let sisa = 3;

while (sisa > 0) {
  console.log(sisa);
  sisa -= 1;
}

let percobaan = 0;
do {
  percobaan += 1;
} while (percobaan < 1);
```

Di loop `while`, kondisi `sisa > 0` diperiksa sebelum isi loop dijalankan. `sisa -= 1` mengurangi nilai `sisa` setiap putaran, sampai kondisinya tidak lagi benar. `do...while` melakukan urutan sebaliknya: isi loop dijalankan dulu, baru kondisinya diperiksa. Jadi, isi `do...while` selalu berjalan setidaknya satu kali.

Pastikan ada langkah yang membuat kondisi akhirnya menjadi `false`. Jika tidak, loop bisa berjalan tanpa henti.

### `break` dan `continue`

`break` menghentikan loop sekarang; `continue` melewati sisa instruksi pada putaran sekarang dan lanjut ke putaran berikutnya.

```js
for (let nomor = 1; nomor <= 5; nomor += 1) {
  if (nomor === 2) continue;
  if (nomor === 4) break;
  console.log(nomor); // 1 lalu 3
}
```

Gunakan `break` dan `continue` seperlunya. Kondisi loop yang jelas biasanya lebih mudah dipahami daripada banyak titik keluar.

<a id="js-function"></a>
## 1.7 Function

**Function** adalah kumpulan instruksi yang bisa dijalankan saat dibutuhkan. Dengan function, kita bisa memakai langkah yang sama berulang kali tanpa menulis ulang kodenya.

### Function declaration

**Function declaration** membuat function dengan nama. Tulis keyword `function`, nama function, parameter di dalam tanda kurung, lalu instruksi function di dalam kurung kurawal.

```js
function sapa() {
  console.log('Halo!');
}
```

Bagian-bagiannya:

```text
function     → keyword untuk mendefinisikan function
sapa         → nama function
()           → tempat parameter ditulis
{ ... }      → function body, yaitu instruksi yang dijalankan
```

Di `function sapa()`, keyword `function` menandai pembuatan function dan `sapa` adalah namanya. Tanda kurungnya kosong karena function ini tidak menerima parameter. Instruksi di antara kurung kurawal adalah isi function; di sini, `console.log('Halo!')` menampilkan teks `'Halo!'`.

Membuat function belum menjalankan isinya. Untuk menjalankannya, kita **memanggil function** dengan menulis namanya diikuti tanda kurung:

```js
function sapa() {
  console.log('Halo!');
}

sapa(); // memanggil function; output: Halo!
sapa(); // dapat dipanggil lagi
```

Di `sapa()`, tidak ada argument yang dikirim. Pemanggilan ini menjalankan isi function dan menampilkan `'Halo!'`. Baris yang sama bisa ditulis lagi untuk menjalankan function sekali lagi.

### Parameters dan arguments

**Parameter** adalah nama variabel yang ditulis pada deklarasi function untuk menerima input. **Argument** adalah nilai nyata yang diberikan kepada parameter saat function dipanggil.

```js
function sapa(nama) {
  console.log(`Halo, ${nama}!`);
}

sapa('Dhimas');
sapa('John Doe');
```

Di `sapa(nama)`, `nama` adalah parameter. `'Dhimas'` dan `'John Doe'` adalah argument pada dua pemanggilan yang berbeda. Setiap kali function dijalankan, nilai argument masuk ke parameter `nama`.

Function dapat memiliki beberapa parameter. Urutan argument mengikuti urutan parameter:

```js
function perkenalan(nama, umur) {
  console.log(`Nama saya ${nama}, umur saya ${umur} tahun.`);
}

perkenalan('Dhimas', 20);
// Nama saya Dhimas, umur saya 20 tahun.
```

Di definisi `perkenalan(nama, umur)`, `nama` dan `umur` adalah parameter. Saat dipanggil sebagai `perkenalan('Dhimas', 20)`, function menerima `'Dhimas'` sebagai argument pertama dan `20` sebagai argument kedua. Karena urutannya sama, `nama` berisi `'Dhimas'` dan `umur` berisi `20`. Jika argument tidak dikirim, parameter terkait berisi `undefined`. Kita akan membahas nilai default nanti.

### `return`: mengirim hasil kembali

`console.log()` hanya menampilkan nilai di console. Agar hasil function dapat disimpan atau digunakan oleh bagian program lain, gunakan `return`.

```js
function jumlahkan(a, b) {
  return a + b;
}

const hasil = jumlahkan(3, 4);
console.log(hasil); // 7
```

Function `jumlahkan` menerima parameter `a` dan `b`. Pemanggilan `jumlahkan(3, 4)` mengirim argument `3` dan `4` ke kedua parameter itu. Expression `a + b` menghitung jumlahnya, lalu `return` mengirim hasil `7` kembali. Nilai itu disimpan di `hasil` dan ditampilkan oleh `console.log(hasil)`.

Setelah `return` dijalankan, function selesai. Jika function tidak memiliki `return`, hasil pemanggilannya adalah `undefined`.

```js
function tampilkanPesan() {
  console.log('Pesan ditampilkan');
}

const hasilFunction = tampilkanPesan(); // menampilkan pesan
console.log(hasilFunction); // undefined
```

### Function expression dan arrow function

Function juga bisa disimpan di variabel atau dikirim ke function lain. Jika function ditulis sebagai nilai, seperti di sisi kanan tanda `=`, bentuk itu disebut **function expression**. Berbeda dengan function declaration, function expression tidak harus punya nama:

```js
const kalikan = function (a, b) {
  return a * b;
};

const bagi = (a, b) => a / b;
const kuadrat = angka => angka ** 2;

console.log(kalikan(3, 4)); // 12
```

Di baris pertama, function tanpa nama di sisi kanan `=` disebut **function expression** dan disimpan di variabel `kalikan`. Parameter function itu adalah `a` dan `b`. Saat dipanggil dengan `kalikan(3, 4)`, argument `3` masuk ke `a` dan `4` masuk ke `b`; function mengembalikan hasil `a * b`.

**Arrow function** adalah cara ringkas untuk menulis function expression. Bentuknya bisa panjang atau singkat, tergantung isi function:

```js
const sum = (a, b) => {
  return a + b;
};

const sumSingkat = (a, b) => a + b;
const pangkatDua = angka => angka ** 2;
const sapa = () => 'Halo, Dhimas!';

console.log(sum(2, 3)); // 5
console.log(sumSingkat(2, 3)); // 5
console.log(pangkatDua(4)); // 16
console.log(sapa()); // 'Halo, Dhimas!'
```

Pada `sum`, parameter `a` dan `b` ditulis di dalam tanda kurung. Setelah tanda `=>`, `{ ... }` menandai function body yang berisi beberapa baris. Karena body memakai kurung kurawal, kita menulis `return` untuk mengirim hasil `a + b`.

`sumSingkat` melakukan perhitungan yang sama, tetapi body-nya hanya expression `a + b`. Kalau body arrow function hanya satu expression dan tidak memakai `{}`, hasilnya dikembalikan otomatis. Jadi, bentuk singkat ini setara dengan function `sum` di atas.

Arrow function dengan satu parameter, seperti `angka` pada `pangkatDua`, boleh ditulis tanpa tanda kurung. Jika tidak ada parameter, seperti `sapa`, tanda kurung kosong tetap diperlukan.

Gunakan bentuk singkat untuk pekerjaan sederhana yang langsung menghasilkan nilai. Gunakan `{}` dan `return` saat function perlu menjalankan beberapa langkah:

```js
const buatPesan = nama => {
  const sapaan = `Halo, ${nama}`;
  return `${sapaan}!`;
};
```

Pada `buatPesan('Dina')`, teks `'Dina'` menjadi argument untuk parameter `nama`. Function menyusun sapaan di variabel `sapaan`, lalu `return` mengirim kalimat akhirnya kembali.

<a id="js-scope"></a>
## 1.8 Scope

### Scope: di mana sebuah nama dapat digunakan

**Scope** adalah aturan yang menentukan di bagian mana nama variabel atau function dapat digunakan. Bayangkan setiap function atau block memiliki ruang kerja sendiri: nama yang dibuat di ruang itu tidak otomatis terlihat dari semua bagian program.

* **Global scope**: dideklarasikan di luar function/block.
* **Function scope**: berlaku di dalam function; `var` menggunakan function scope.
* **Block scope**: berlaku di dalam `{}`; `let` dan `const` menggunakan block scope.
* **Lexical scope**: function dapat mengakses variabel dari lingkup tempat function itu didefinisikan.

```js
const global = 'dapat diakses dari lingkup dalam';

function contoh() {
  const lokal = 'hanya di function';

  if (true) {
    let dalamBlok = 'hanya di blok ini';
    console.log(global, lokal, dalamBlok);
  }
}
```

Di contoh tersebut, `dalamBlok` hanya dapat dipakai di dalam block `if`. Jika kode mencoba menggunakannya setelah block selesai, JavaScript memberi `ReferenceError`.

```js
function hitung() {
  const angka = 5;

  if (true) {
    const pengali = 2;
    console.log(angka * pengali); // 10
  }

  // console.log(pengali); // ReferenceError: di luar scope block if
}

hitung();
```

`let` dan `const` berada dalam **temporal dead zone** dari awal block sampai baris deklarasinya. Artinya, nama tersebut sudah menjadi bagian scope, tetapi belum boleh digunakan sebelum deklarasi. Karena itu, biasakan mendeklarasikan nama sebelum pemakaian.

<a id="js-hoisting"></a>
### Hoisting: deklarasi dikenali sebelum barisnya dijalankan

**Hoisting** adalah istilah untuk perilaku JavaScript saat menyiapkan deklarasi dalam suatu scope sebelum menjalankan baris kode. Ini bukan berarti semua baris kode benar-benar dipindah ke atas; perilakunya berbeda menurut jenis deklarasi.

* **Function declaration** dapat dipanggil sebelum baris deklarasinya.
* **`var`** dikenali di scope function dan bernilai `undefined` sebelum baris assignment-nya.
* **`let` dan `const`** dikenal di block, tetapi tidak dapat dipakai sebelum deklarasi karena berada dalam temporal dead zone (TDZ). Pemakaian sebelum deklarasi menghasilkan `ReferenceError`.
* **Function expression** mengikuti aturan variabel tempat function disimpan.

```js
sapa(); // 'Halo'

function sapa() {
  console.log('Halo');
}
```

```js
console.log(jumlah); // undefined; deklarasi var ada, assignment belum dijalankan
var jumlah = 3;

// console.log(nama); // ReferenceError: masih dalam TDZ
let nama = 'Dina';
```

Walaupun sebagian deklarasi dapat digunakan sebelum barisnya, biasakan menulis deklarasi sebelum pemakaian. Urutan yang jelas lebih mudah dibaca dan mencegah bug.

<a id="js-array-loop"></a>
## 1.9 Array

### Arrays

**Array** adalah daftar nilai yang disimpan dalam satu variabel. Gunakan array untuk menyimpan beberapa data secara berurutan, misalnya daftar buah atau nilai ujian. Setiap item dapat diakses melalui indeksnya.

```js
const buah = ['apel', 'mangga'];
console.log(buah[0]); // 'apel'
console.log(buah.length); // 2

buah[1] = 'jeruk';
buah[3] = 'kiwi'; // membuat satu slot kosong pada indeks 2 (sparse array)
console.log(buah.length); // 4
```

Literal `[]` adalah cara yang umum untuk membuat array. `new Array(3)` membuat array dengan tiga slot kosong, bukan `[3]`; gunakan literal atau `Array.of(3)` jika yang dimaksud satu elemen bernilai `3`.

Array menggunakan **zero-based indexing**: item pertama memiliki indeks `0`, item kedua indeks `1`, dan seterusnya. Property `.length` menunjukkan jumlah posisi sampai akhir daftar. Menambah item di indeks lebih jauh dapat meninggalkan slot kosong; pemula sebaiknya menambah item dengan `.push()` agar daftar tetap berurutan.

```js
const daftar = ['apel', 'mangga'];
console.log(daftar[0]); // item pertama: 'apel'

daftar.push('jeruk'); // menambahkan item setelah item terakhir
console.log(daftar); // ['apel', 'mangga', 'jeruk']
console.log(daftar.length); // 3
```

`['apel', 'mangga']` membuat array berisi dua elemen. Di `daftar[0]`, angka `0` menunjukkan indeks elemen yang ingin dibaca. Sementara itu, `daftar.push('jeruk')` menambahkan `'jeruk'` ke akhir array. Nilai `'jeruk'` adalah argument untuk method `push()`, dan method ini mengubah array asal.

Ada beberapa cara untuk menambahkan item. `.push()` mengubah array yang sama, sedangkan spread membuat array baru:

```js
const daftarLama = ['apel', 'mangga'];
daftarLama.push('jeruk');

const daftarBaru = [...daftarLama, 'pisang'];
console.log(daftarLama); // ['apel', 'mangga', 'jeruk']
console.log(daftarBaru); // ['apel', 'mangga', 'jeruk', 'pisang']
```

Pilih `.push()` jika memang ingin memperbarui array asal. Pilih spread jika ingin menyimpan versi baru tanpa mengubah array sebelumnya.

### Method Array yang sering dipakai

Array punya banyak method. Untuk mulai, pahami dulu beberapa method ini. Bayangkan `nilai` sebagai daftar angka:

```js
const nilai = [70, 85, 90, 60];

nilai.push(95); // menambahkan 95 ke akhir daftar
const nilaiPertama = nilai[0]; // membaca item pertama: 70
const nilaiLulus = nilai.filter(angka => angka >= 75);
const nilaiBonus = nilai.map(angka => angka + 5);
const nilaiPertamaLulus = nilai.find(angka => angka >= 75);

console.log(nilai); // [70, 85, 90, 60, 95]
console.log(nilaiLulus); // [85, 90, 95]
console.log(nilaiBonus); // [75, 90, 95, 65, 100]
console.log(nilaiPertamaLulus); // 85
```

Arti method di atas:

| Method | Arti sederhana | Mengubah array asal? |
| --- | --- | --- |
| `.push(item)` | Menambahkan item di akhir | Ya |
| `.pop()` | Menghapus dan mengambil item terakhir | Ya |
| `.includes(item)` | Memeriksa apakah item ada; hasilnya `true` atau `false` | Tidak |
| `.find(syarat)` | Mengambil item pertama yang memenuhi syarat | Tidak |
| `.filter(syarat)` | Membuat array baru dari item yang memenuhi syarat | Tidak |
| `.map(ubah)` | Membuat array baru dengan mengubah setiap item | Tidak |
| `.forEach(aksi)` | Menjalankan aksi untuk setiap item, tanpa membuat array baru | Tidak |
| `.slice(mulai, akhir)` | Mengambil sebagian item sebagai array baru; indeks akhir tidak ikut | Tidak |
| `.splice(mulai, jumlah)` | Menghapus atau mengganti item dalam array | Ya |

Di `.filter(angka => angka >= 75)`, `angka` mewakili satu item yang sedang diperiksa. Bagian setelah `=>` adalah syaratnya. `filter()` menyimpan item yang syaratnya bernilai `true`. `map()` berbeda: ia membuat nilai baru untuk setiap item. `find()` mirip `filter()`, tetapi hanya mengembalikan item pertama yang cocok.

Jika masih baru belajar, mulai dengan `push`, `includes`, `find`, `filter`, dan `map`. Tabel-tabel di bawah mencantumkan method Array lain saat dibutuhkan.

### Cara membaca tabel Array

Tabel berikut mengelompokkan method berdasarkan kegunaannya. Nama dalam tanda kurung, seperti `start` dan `end` pada `.slice(start, end)`, adalah parameter yang menunjukkan nilai apa saja yang bisa diberikan. Nilai yang kita masukkan saat memanggilnya disebut **argument**. Contohnya, pada `buah.slice(1, 3)`, angka `1` dan `3` adalah argument untuk parameter `start` dan `end`. Method `slice()` mengembalikan array baru tanpa mengubah `buah`. Kolom “Mengubah array asal?” memberi tahu apakah sebuah method mengubah array yang dipanggil atau menghasilkan nilai baru.

Contoh berikut membedah method yang sering digunakan:

```js
const nilai = [10, 20, 30, 40];
const bagian = nilai.slice(1, 3);
const memenuhiSyarat = nilai.filter(angka => angka >= 30);
nilai.push(50);
```

`nilai.slice(1, 3)` mengambil item dari indeks 1 sampai sebelum indeks 3, jadi `bagian` berisi `[20, 30]`. Array `nilai` tetap utuh. `filter()` menerima arrow function sebagai **callback**, yaitu function yang dijalankan untuk setiap item. Di callback itu, `angka` adalah parameter dan `angka >= 30` adalah syarat untuk memilih item. Hasilnya array baru `[30, 40]`. Terakhir, `nilai.push(50)` menambahkan angka `50` ke array asal.

### Array properties dan constructor

Property memberi informasi tentang array atau constructor. Property paling sering digunakan adalah `.length` pada array instance; property seperti `Array.prototype` menjelaskan cara kerja bawaan Array dan biasanya dipakai saat mempelajari prototype.

| Properti | Tersedia pada | Fungsi dan contoh |
| --- | --- | --- |
| `array.length` | Instance | Menunjukkan rentang indeks sampai satu lebih besar dari indeks array tertinggi; dapat lebih besar karena slot kosong, dan dapat diubah untuk memotong atau memperpanjang array. Memotong `length` menghapus elemen pada indeks yang terpotong. Contoh: `const a = [1, 2]; a.length = 1; // [1]` |
| `Array.name` | Constructor | Nama function constructor. Contoh: `Array.name; // 'Array'` |
| `Array.length` | Constructor | Jumlah parameter yang dideklarasikan constructor; nilainya `1`, bukan jumlah elemen instance. |
| `Array.prototype` | Constructor `Array` | Object prototype tempat method instance Array didefinisikan. Contoh: `Object.getPrototypeOf([1]) === Array.prototype` |
| `Array.prototype.length` | Prototype | Nilainya `0`; bukan panjang array instance. Contoh: `Array.prototype.length; // 0` |
| `Array.prototype.constructor` | Prototype | Referensi constructor `Array`. Contoh: `[].constructor === Array` |
| `Array.prototype[Symbol.unscopables]` | Prototype | Daftar nama properti/method yang tidak dimasukkan ke environment `with`; hampir tidak pernah perlu dipakai langsung. |
| `Array[Symbol.species]` | Constructor | Getter species yang dipakai sejumlah method untuk memilih constructor hasil. Umumnya tidak perlu diubah dalam kode aplikasi. |

`Array` juga memiliki properti function bawaan seperti `Array.name`, `Array.length`, dan `Array.prototype`; properti tersebut menjelaskan function constructor, bukan panjang sebuah instance. Untuk panjang elemen, gunakan `array.length`.

### Static methods pada `Array`

Static method dipanggil langsung pada `Array`, bukan pada array tertentu. Gunakan method ini untuk membuat array atau memastikan suatu nilai benar-benar array.

| Method | Fungsi | Contoh |
| --- | --- | --- |
| `Array.isArray(value)` | Memeriksa apakah nilai adalah array (lebih andal daripada `instanceof` lintas realm) | `Array.isArray([1, 2]); // true` |
| `Array.from(iterable, mapFn?, thisArg?)` | Membuat array dari iterable atau object yang bentuknya mirip array; opsional memetakan setiap nilai | `Array.from('JS'); // ['J', 'S']`; `Array.from([1, 2], x => x * 2); // [2, 4]` |
| `Array.of(...items)` | Membuat array dari argument, termasuk satu angka | `Array.of(3); // [3]` |
| `Array.fromAsync(source, mapFn?, thisArg?)` | Membuat array secara asynchronous dari async iterable, iterable, atau object yang bentuknya mirip array | `const hasil = await Array.fromAsync(asyncGenerator());` |

`Array.fromAsync()` adalah API modern (ES2024) dan memerlukan environment yang mendukungnya. Fungsi ini mengembalikan Promise. `Array.from()` dan `Array.of()` mengembalikan array secara langsung.

```js
async function* sumberAngka() {
  yield Promise.resolve(1);
  yield 2;
}

(async function main() {
  const angkaDariSumber = await Array.fromAsync(sumberAngka());
  console.log(angkaDariSumber); // [1, 2]
})();
```

### Instance methods: menambah, menghapus, dan mengambil elemen

Instance method dipanggil pada array, misalnya `daftar.push(...)`. Kelompok ini mengubah panjang/isi array atau mengambil sebagian isinya. Perhatikan apakah method mengubah array asal, terutama ketika array tersebut dipakai oleh beberapa bagian program.

| Method | Fungsi | Mengubah array asal? | Contoh |
| --- | --- | --- | --- |
| `.push(...items)` | Menambahkan elemen di akhir; mengembalikan panjang baru | Ya | `const a = [1]; a.push(2); // a: [1, 2]` |
| `.pop()` | Menghapus dan mengembalikan elemen terakhir | Ya | `const a = [1, 2]; a.pop(); // hasil 2, a: [1]` |
| `.unshift(...items)` | Menambahkan elemen di awal; mengembalikan panjang baru | Ya | `const a = [2]; a.unshift(1); // a: [1, 2]` |
| `.shift()` | Menghapus dan mengembalikan elemen pertama | Ya | `const a = [1, 2]; a.shift(); // hasil 1, a: [2]` |
| `.at(index)` | Mengambil elemen dari indeks; indeks negatif dihitung dari belakang | Tidak | `[10, 20, 30].at(-1); // 30` |
| `.slice(start, end)` | Mengambil shallow copy rentang indeks; `end` tidak termasuk | Tidak | `[1, 2, 3].slice(1); // [2, 3]` |
| `.splice(start, deleteCount, ...items)` | Menghapus/menyisipkan elemen; mengembalikan elemen yang dihapus | Ya | `const a = [1, 3]; a.splice(1, 0, 2); // a: [1, 2, 3]` |
| `.with(index, value)` | Membuat salinan dengan satu indeks diganti; mendukung indeks negatif | Tidak | `[1, 2, 3].with(1, 9); // [1, 9, 3]` |

### Instance methods: mencari dan menguji

Gunakan method pencarian untuk menemukan nilai atau memeriksa apakah nilai memenuhi suatu syarat. Method berbasis callback menerima function yang JavaScript panggil untuk memeriksa setiap item.

| Method | Fungsi | Contoh |
| --- | --- | --- |
| `.includes(value, fromIndex?)` | Memeriksa keberadaan nilai dengan kesetaraan SameValueZero | `[1, NaN].includes(NaN); // true` |
| `.indexOf(value, fromIndex?)` | Indeks pertama yang cocok dengan `===`, atau `-1` | `['a', 'b', 'a'].indexOf('a'); // 0` |
| `.lastIndexOf(value, fromIndex?)` | Indeks terakhir yang cocok dengan `===`, atau `-1` | `['a', 'b', 'a'].lastIndexOf('a'); // 2` |
| `.find(callback)` | Elemen pertama yang memenuhi kondisi, atau `undefined` | `[2, 5, 8].find(x => x > 4); // 5` |
| `.findIndex(callback)` | Indeks pertama yang memenuhi kondisi, atau `-1` | `[2, 5, 8].findIndex(x => x > 4); // 1` |
| `.findLast(callback)` | Elemen terakhir yang memenuhi kondisi, atau `undefined` | `[2, 5, 8].findLast(x => x > 4); // 8` |
| `.findLastIndex(callback)` | Indeks terakhir yang memenuhi kondisi, atau `-1` | `[2, 5, 8].findLastIndex(x => x > 4); // 2` |
| `.some(callback)` | `true` jika minimal satu elemen memenuhi kondisi | `[1, 2, 3].some(x => x > 2); // true` |
| `.every(callback)` | `true` jika semua elemen memenuhi kondisi | `[1, 2, 3].every(x => x > 0); // true` |

Callback pencarian biasanya menerima `(element, index, array)`. Method pencarian berbasis callback berhenti saat menemukan hasil; `find`/`findLast` mengembalikan elemen, sedangkan variasi `Index` mengembalikan indeks.

### Instance methods: transformasi dan iterasi

Method berikut menjalankan callback pada item array. Gunakan `map` untuk menghasilkan item versi baru, `filter` untuk memilih item, dan `reduce` untuk menggabungkan banyak item menjadi satu hasil.

| Method | Fungsi | Hasil |
| --- | --- | --- |
| `.forEach(callback)` | Menjalankan callback untuk elemen yang tersedia; tidak membuat hasil transformasi | `undefined` |
| `.map(callback)` | Memetakan setiap elemen ke array baru | Array baru |
| `.filter(callback)` | Memilih elemen yang callback-nya truthy | Array baru |
| `.flat(depth = 1)` | Meratakan nested array sampai kedalaman tertentu | Array baru |
| `.flatMap(callback)` | Memetakan lalu meratakan satu tingkat | Array baru |
| `.reduce(callback, initialValue?)` | Mengakumulasi elemen dari kiri ke kanan | Nilai akumulator |
| `.reduceRight(callback, initialValue?)` | Mengakumulasi elemen dari kanan ke kiri | Nilai akumulator |

```js
const angka = [1, 2, 3, 4];

angka.forEach((nilai, index) => console.log(index, nilai));
const kuadrat = angka.map(nilai => nilai ** 2); // [1, 4, 9, 16]
const genap = angka.filter(nilai => nilai % 2 === 0); // [2, 4]
const pasangan = angka.flatMap(nilai => [nilai, nilai * 10]);
const jumlah = angka.reduce((total, nilai) => total + nilai, 0); // 10
const nested = [1, [2, [3]]].flat(2); // [1, 2, 3]
```

Sediakan nilai awal pada `reduce()` jika memungkinkan. Tanpa nilai awal, array kosong akan melempar `TypeError`, dan elemen pertama dipakai sebagai akumulator awal.

### Instance methods: urutan, pengisian, dan representasi

Kelompok ini mengurutkan, membalik, mengisi, atau mengubah array menjadi representasi lain. Beberapa method mengubah array yang dipanggil; versi `to...` biasanya menyediakan pilihan yang menghasilkan array baru.

| Method | Fungsi | Mengubah array asal? | Contoh |
| --- | --- | --- | --- |
| `.sort(compareFn?)` | Mengurutkan; default mengubah nilai menjadi string lalu mengurutkan secara leksikografis | Ya | `[10, 2].sort(); // [10, 2] (urutan string)` |
| `.toSorted(compareFn?)` | Versi non-mutating dari `sort()` | Tidak | `[10, 2].toSorted((a, b) => a - b); // [2, 10]` |
| `.reverse()` | Membalik urutan elemen | Ya | `const a = [1, 2]; a.reverse(); // a: [2, 1]` |
| `.toReversed()` | Versi non-mutating dari `reverse()` | Tidak | `[1, 2].toReversed(); // [2, 1]` |
| `.toSpliced(start, deleteCount, ...items)` | Versi non-mutating dari `splice()` | Tidak | `[1, 3].toSpliced(1, 0, 2); // [1, 2, 3]` |
| `.fill(value, start?, end?)` | Mengisi rentang dengan nilai yang sama | Ya | `[1, 2, 3].fill(0, 1); // [1, 0, 0]` |
| `.copyWithin(target, start, end?)` | Menyalin bagian array ke indeks lain dalam array yang sama | Ya | `[1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]` |
| `.concat(...items)` | Menggabungkan array/nilai menjadi array baru | Tidak | `[1, 2].concat([3], 4); // [1, 2, 3, 4]` |
| `.join(separator?)` | Menggabungkan elemen menjadi string | Tidak | `['a', 'b'].join('-'); // 'a-b'` |
| `.toString()` | Representasi string; pada array setara dengan pemanggilan `join()` tanpa pemisah | Tidak | `[1, 2].toString(); // '1,2'` |
| `.toLocaleString(locales?, options?)` | Representasi string dengan aturan locale masing-masing elemen | Tidak | `[1234.5].toLocaleString('id-ID'); // misalnya '1.234,5'` |
| `.keys()` | Iterator indeks | Tidak | `[...['a', 'b'].keys()]; // [0, 1]` |
| `.values()` | Iterator nilai | Tidak | `[...['a', 'b'].values()]; // ['a', 'b']` |
| `.entries()` | Iterator pasangan `[index, value]` | Tidak | `[...['a'].entries()]; // [[0, 'a']]` |
| `[Symbol.iterator]()` | Iterator default; sama perilakunya dengan `.values()` | Tidak | `[...['a', 'b']]; // ['a', 'b']` |

Untuk numeric sort, berikan comparator agar tidak memakai urutan string:

```js
const angka = [10, 2, 30];
const naik = angka.toSorted((a, b) => a - b); // [2, 10, 30]
const turun = angka.toSorted((a, b) => b - a); // [30, 10, 2]
```

`toSorted()`, `toReversed()`, `toSpliced()`, dan `with()` adalah method non-mutating modern yang menghasilkan array baru. Method pasangannya (`sort`, `reverse`, `splice`) mengubah array asal. `toSpliced()` bekerja seperti `splice()` namun mengembalikan array baru:

```js
const asli = ['a', 'c'];
const hasil = asli.toSpliced(1, 0, 'b');
console.log(hasil); // ['a', 'b', 'c']
console.log(asli);  // ['a', 'c']
```

`.with(index, value)` melempar `RangeError` jika indeks berada di luar rentang array. `Array.prototype` juga mewarisi method umum dari `Object.prototype` (misalnya `.hasOwnProperty()`), tetapi method tersebut bukan method khusus Array dan sengaja tidak dicampur ke daftar API Array di atas.

Method callback seperti `map`, `filter`, dan `forEach` dibahas bersama konsep callback dan iterator pada bagian Intermediate.

<a id="js-object"></a>
## 1.10 Object

Bayangkan object seperti kartu data atau profil: ada nama kolom dan isinya. Di JavaScript, object menyimpan informasi dalam pasangan **key-value** (nama properti dan nilainya). Nilai boleh berupa teks, angka, array, object lain, atau function.

```js
const pengguna = {
  nama: 'Raka',
  umur: 20,
  aktif: true,
  sapa() {
    return `Halo, saya ${this.nama}`;
  }
};

console.log(pengguna.nama); // membaca properti dengan dot notation
console.log(pengguna['umur']); // bracket notation
console.log(pengguna.sapa()); // memanggil method
```

`nama`, `umur`, dan `aktif` adalah **property**, yaitu data yang disimpan di object. `sapa` adalah **method**, yaitu function yang juga menjadi bagian dari object. Pada `nama: 'Raka'`, `nama` adalah key dan `'Raka'` adalah nilainya. Saat `pengguna.sapa()` dijalankan, `this.nama` mengambil property `nama` dari object `pengguna`.

### Membaca, menambah, mengubah, dan menghapus data

Gunakan dot notation (`objek.properti`) untuk nama yang sederhana. Gunakan bracket notation (`objek[kunci]`) jika nama key disimpan dalam variabel atau tidak bisa ditulis dengan dot notation.

```js
const pengguna = { nama: 'Raka', umur: 20 };
const kunci = 'nama';

console.log(pengguna.nama); // 'Raka'
console.log(pengguna[kunci]); // 'Raka'

pengguna.email = 'raka@example.test'; // tambah
pengguna.umur = 21; // ubah
delete pengguna.email; // hapus
```

Jika property tidak ada, membacanya menghasilkan `undefined`. Optional chaining (`?.`) membantu membaca property bertingkat tanpa error saat bagian tengahnya tidak tersedia.

```js
const pesanan = { pelanggan: { nama: 'Raka' } };
console.log(pesanan.pelanggan?.nama); // 'Raka'
console.log(pesanan.pengiriman?.alamat); // undefined, bukan error
```

Jika nama property disimpan dalam variabel, gunakan bracket notation:

```js
const profil = { nama: 'Dhimas', kota: 'Bandung' };
const propertyYangDibaca = 'kota';

console.log(profil[propertyYangDibaca]); // 'Bandung'
```

`profil.kota` memakai nama property yang ditulis langsung. `profil[propertyYangDibaca]` memakai isi variabel sebagai nama property. Jadi, jangan menulis `profil.propertyYangDibaca` jika yang dicari adalah property bernama `'kota'`.

### Object bersarang dan daftar property

Object dapat berisi object atau array lain. Untuk mengambil nama key, nilai, atau pasangan key-value, gunakan method `Object` berikut:

```js
const produk = {
  nama: 'Buku',
  harga: 50000,
  tersedia: true
};

console.log(Object.keys(produk)); // ['nama', 'harga', 'tersedia']
console.log(Object.values(produk)); // ['Buku', 50000, true]
console.log(Object.entries(produk));
// [['nama', 'Buku'], ['harga', 50000], ['tersedia', true]]
```

Ketiga method ini membaca isi `produk` dengan cara berbeda. `Object.keys(produk)` menghasilkan daftar key, `Object.values(produk)` menghasilkan daftar nilainya, dan `Object.entries(produk)` menghasilkan pasangan key dan nilai. `produk` adalah argument yang diberikan kepada masing-masing method. Tidak satu pun mengubah object asal.

### Menyalin object: salinan vs berbagi data

Untuk pemula, penting diketahui bahwa assignment tidak menyalin isi object. Assignment hanya membuat nama lain yang menunjuk ke object yang sama. Bayangkan dua label yang ditempel pada satu kotak.

```js
const asli = { skor: 10 };
const namaLain = asli;
namaLain.skor = 20;

console.log(asli.skor); // 20: keduanya menunjuk object yang sama
```

Spread membuat salinan **dangkal**: property tingkat pertama disalin, tetapi object di dalamnya masih berbagi reference.

```js
const profil = { nama: 'Raka', alamat: { kota: 'Bandung' } };
const salinan = { ...profil };

salinan.nama = 'Dina';
salinan.alamat.kota = 'Jakarta';

console.log(profil.nama); // 'Raka'
console.log(profil.alamat.kota); // 'Jakarta': object alamat masih dibagi
```

Untuk data JSON sederhana yang hanya berisi nilai JSON (tanpa function, `undefined`, `BigInt`, dan reference melingkar), `structuredClone()` dapat membuat deep copy:

```js
const salinanDalam = structuredClone(profil);
salinanDalam.alamat.kota = 'Surabaya';
console.log(profil.alamat.kota); // tetap 'Jakarta'
```

Jangan memakai `JSON.parse(JSON.stringify(value))` sebagai deep-copy universal karena cara itu menghilangkan atau gagal menangani beberapa tipe nilai JavaScript.

### Membatasi perubahan dengan `Object.freeze()`

Secara default, property object dapat ditambah, diubah, atau dihapus. `Object.freeze()` mencegah perubahan pada property tingkat pertama. Ini berguna, misalnya, saat sebuah object berisi pengaturan yang tidak ingin diubah setelah dibuat.

```js
const pengaturan = Object.freeze({
  tema: 'terang',
  ukuranTeks: 16
});

console.log(Object.isFrozen(pengaturan)); // true
console.log(pengaturan.tema); // 'terang'
```

Setelah object dibekukan, kita tidak bisa menambah atau menghapus property, maupun mengubah nilainya. Dalam JavaScript module atau strict mode, upaya mengubahnya akan menghasilkan `TypeError`. Di script biasa yang tidak memakai strict mode, perubahan mungkin diabaikan. Karena itu, lebih baik periksa dengan `Object.isFrozen()` daripada mencoba mengubahnya.

`Object.freeze()` mengembalikan object yang sama dan **hanya membekukan tingkat pertama**. Jika ada object di dalamnya, isi object di dalam itu masih bisa berubah:

```js
const pengguna = Object.freeze({
  nama: 'Raka',
  alamat: { kota: 'Bandung' }
});

pengguna.alamat.kota = 'Jakarta'; // masih bisa: alamat belum ikut dibekukan
console.log(pengguna.alamat.kota); // 'Jakarta'
```

Untuk pemula, ingat bahwa `const` dan `Object.freeze()` punya fungsi berbeda: `const` mencegah variabel diarahkan ke nilai lain, tetapi tidak membekukan isi object. `Object.freeze()` membatasi perubahan property object tersebut.

#### Perbedaan `freeze`, `seal`, dan `preventExtensions`

Ketiganya membatasi perubahan object dengan tingkat yang berbeda:

| Method | Menambah property | Menghapus property | Mengubah property yang sudah ada |
| --- | --- | --- | --- |
| `Object.preventExtensions(obj)` | Tidak | Ya | Ya |
| `Object.seal(obj)` | Tidak | Tidak | Ya |
| `Object.freeze(obj)` | Tidak | Tidak | Tidak |

Method ini mengubah object yang diberikan, bukan membuat salinan. Jika tujuanmu hanya mencegah semua perubahan, gunakan `Object.freeze()`. `Object.isSealed()` dan `Object.isExtensible()` dapat dipakai untuk memeriksa keadaan object; untuk memeriksa object beku, gunakan `Object.isFrozen()`.

Contoh singkat:

```js
const akun = { nama: 'Raka' };
Object.seal(akun);

akun.nama = 'Dina'; // masih boleh mengubah property yang sudah ada
console.log(akun.nama); // 'Dina'

console.log(Object.isSealed(akun)); // true
```

Object yang di-seal tidak bisa ditambah atau dihapus property-nya, tetapi nilai property yang sudah ada masih dapat diubah.

### Property object yang berguna

| Fitur | Fungsi | Contoh |
| --- | --- | --- |
| `Object.keys(obj)` | Mengambil daftar key milik sendiri yang enumerable | `Object.keys({ a: 1 }); // ['a']` |
| `Object.values(obj)` | Mengambil nilai dari key enumerable milik sendiri | `Object.values({ a: 1 }); // [1]` |
| `Object.entries(obj)` | Mengambil pasangan `[key, value]` | `Object.entries({ a: 1 }); // [['a', 1]]` |
| `Object.hasOwn(obj, key)` | Memeriksa apakah object punya key tersebut secara langsung | `Object.hasOwn({ a: 1 }, 'a'); // true` |
| `Object.assign(target, source)` | Menyalin property tingkat pertama ke target | `Object.assign({}, { a: 1 }); // { a: 1 }` |
| `Object.freeze(obj)` | Membekukan property tingkat pertama; lihat contoh di atas | `Object.freeze({ tema: 'terang' })` |

`Object.hasOwn(obj, key)` berguna untuk memeriksa apakah property memang dimiliki langsung oleh object, bukan diwarisi dari object lain. Ini lebih aman daripada memanggil `hasOwnProperty()` langsung pada object yang berasal dari sumber tidak dikenal.

<a id="js-builtins"></a>
## 1.11 Built-in penting: Map, Set, Date, JSON, RegExp, dan Intl

Selain `Math`, JavaScript menyediakan object dan class siap pakai (**built-in**) untuk pekerjaan umum. Kita tidak perlu menulis sendiri fitur dasarnya; kita membuat nilai atau instance, lalu memanggil method yang disediakan. Berikut beberapa yang sering ditemui.

### `Map`: kumpulan pasangan key-value

`Map` menyimpan pasangan key-value, seperti daftar kontak yang mencocokkan nama dengan nomor. Berbeda dari object biasa, key pada `Map` boleh berupa angka, object, atau tipe lain; urutan penambahan item juga dipertahankan.

```js
const harga = new Map();
harga.set('buku', 50000);
harga.set('pulpen', 5000);

console.log(harga.get('buku')); // 50000
console.log(harga.has('pulpen')); // true
console.log(harga.size); // 2
harga.delete('pulpen');
```

`new Map()` membuat kumpulan key-value yang baru. Baris `harga.set('buku', 50000)` menambahkan pasangan `'buku'` dan `50000` ke dalamnya. Setelah itu, `harga.get('buku')` mencari nilai dengan key `'buku'`, sedangkan `harga.has('pulpen')` memeriksa apakah key `'pulpen'` ada.

### `Set`: kumpulan nilai unik

`Set` adalah kumpulan yang hanya menyimpan satu salinan dari setiap nilai unik. Gunakan saat duplikat tidak diinginkan atau saat perlu mengecek apakah sebuah nilai sudah pernah dimasukkan.

```js
const angkaUnik = new Set([1, 2, 2, 3]);
console.log([...angkaUnik]); // [1, 2, 3]
angkaUnik.add(4);
console.log(angkaUnik.has(2)); // true
```

`new Set([1, 2, 2, 3])` membuat Set dari array tersebut dan hanya menyimpan satu angka `2`. `angkaUnik.add(4)` menambahkan angka `4`, sedangkan `angkaUnik.has(2)` memeriksa apakah angka `2` ada. Tanda `...` pada `[...angkaUnik]` mengambil isi Set dan memasukkannya ke array baru.

### `Date`: tanggal dan waktu

`Date` mewakili satu titik waktu. Gunakan method-nya untuk mengambil bagian tanggal atau mengubah tanggal ke format tertentu. Untuk tanggal dari input pengguna, perhatikan format dan zona waktu; format ISO dengan `Z` menyatakan waktu UTC.

```js
const sekarang = new Date();
const tanggalTetap = new Date('2026-11-02T00:00:00Z');

console.log(sekarang.getFullYear());
console.log(tanggalTetap.toISOString());
console.log(Date.now()); // milidetik sejak 1 Januari 1970 UTC
```

`new Date()` membuat object dengan waktu saat ini. Jika diberi string seperti `'2026-11-02T00:00:00Z'`, `Date` membuat object dari tanggal tersebut. `tanggalTetap.toISOString()` mengubah tanggal itu menjadi teks dengan format standar UTC. Berbeda dari method tadi, `Date.now()` dipanggil langsung dari `Date` dan menghasilkan jumlah milidetik sejak 1 Januari 1970.

### `JSON`: bertukar data berbentuk teks

JSON adalah format teks sederhana untuk bertukar data antara aplikasi dan server. `JSON.stringify()` mengubah nilai JavaScript yang kompatibel menjadi teks JSON; `JSON.parse()` melakukan kebalikannya. Teks yang tidak sesuai format JSON menyebabkan `SyntaxError`, sehingga data dari luar sebaiknya diparse dengan penanganan error. JSON tidak mendukung semua tipe JavaScript (misalnya function dan `undefined`).

```js
const data = { nama: 'Dina', aktif: true };
const teks = JSON.stringify(data);
const hasilBaca = JSON.parse(teks);

console.log(teks); // '{"nama":"Dina","aktif":true}'
console.log(hasilBaca.nama); // 'Dina'
```

`JSON.stringify(data)` mengubah object `data` menjadi teks JSON, lalu menyimpannya di `teks`. Setelah itu, `JSON.parse(teks)` membaca teks tersebut dan membuat kembali object JavaScript yang disimpan di `hasilBaca`. Notasi `hasilBaca.nama` dipakai untuk membaca property `nama`.

### `RegExp`: mencari pola teks

Regular expression (regex) adalah pola untuk mencari atau memeriksa bentuk teks. Pada contoh di bawah, `^` berarti awal teks, `$` akhir teks, dan `\d{5}` berarti tepat lima digit. Gunakan pola sederhana dan uji dengan beberapa contoh karena regex yang rumit sulit dibaca.

```js
const polaKodePos = /^\d{5}$/;
console.log(polaKodePos.test('12345')); // true
console.log(polaKodePos.test('123')); // false
console.log('apel,jeruk'.split(/,/)); // ['apel', 'jeruk']
```

`/^\d{5}$/` adalah pola yang disimpan di `polaKodePos`. `test('12345')` memeriksa apakah teks `'12345'` cocok dengan pola, lalu menghasilkan `true` atau `false`. Tanda `^` berarti awal teks, `$` berarti akhir teks, dan `\d{5}` berarti lima digit.

### `Intl`: format sesuai bahasa/lokasi

`Intl` menyediakan format angka, mata uang, tanggal, dan teks yang mengikuti aturan locale (bahasa/wilayah). Gunakan ini agar pemisah ribuan, tanda desimal, simbol mata uang, dan nama bulan tidak perlu dirakit sendiri.

```js
const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});

console.log(rupiah.format(125000)); // misalnya 'Rp 125.000,00'
```

`new Intl.NumberFormat(...)` membuat formatter untuk aturan Indonesia. Object di dalam kurung menentukan bahwa angka akan ditampilkan sebagai mata uang rupiah. Formatter itu disimpan di `rupiah`, lalu `rupiah.format(125000)` mengubah angka `125000` menjadi tampilan mata uang.

Output format dapat berbeda berdasarkan environment dan data locale yang tersedia.

---

<a id="js-error-debugging"></a>
## 1.12 Error dan debugging

Error adalah pesan yang muncul saat JavaScript tidak dapat menjalankan instruksi. Penyebabnya dapat berupa kesalahan penulisan kode, nama yang tidak ditemukan, atau operasi yang tidak cocok dengan tipe nilai. Error bukan “hukuman”; pesannya membantu kita menemukan dan memperbaiki masalah.

Saat membaca pesan error, cari:

1. **Nama error**, misalnya `TypeError`.
2. **Pesan**, yaitu penjelasan singkat apa yang gagal.
3. **Stack trace**, yaitu daftar lokasi/baris yang mengarah ke error. Mulailah dari baris pertama yang berasal dari kode kita.

<a id="js-error-types"></a>
### Jenis error JavaScript

```js
// SyntaxError: tanda kurung/tanda kutip tidak lengkap, atau JSON tidak valid
// JSON.parse('{ nama: }');

// ReferenceError: nama variabel tidak tersedia
// console.log(namaYangBelumDibuat);

// TypeError: operasi tidak sesuai dengan tipe/nilai
// null.toString();

// RangeError: nilai di luar rentang yang diterima
// (3).toFixed(101);
```

Contoh-contoh itu diawali `//`, jadi tidak akan dijalankan. Jika komentar pada `JSON.parse('{ nama: }')` dihapus, teks yang formatnya salah akan menyebabkan `SyntaxError`. Nama yang belum pernah dibuat pada `namaYangBelumDibuat` menyebabkan `ReferenceError`. Memanggil `.toString()` pada `null` menyebabkan `TypeError`, sedangkan meminta 101 angka desimal lewat `(3).toFixed(101)` menyebabkan `RangeError`.

Contoh-contoh yang menyebabkan error di atas sengaja dinonaktifkan sebagai komentar agar seluruh contoh dokumentasi tetap bisa dicek/dijalankan tanpa langsung berhenti.

| Jenis | Arti sederhana | Contoh penyebab |
| --- | --- | --- |
| `Error` | Error umum yang dibuat program | `throw new Error('Data tidak ditemukan')` |
| `SyntaxError` | Bentuk tulisan/syntax tidak dapat dipahami | Kurung tidak ditutup; JSON salah format |
| `ReferenceError` | Kode memakai nama yang tidak tersedia | Memakai variabel yang belum dideklarasikan |
| `TypeError` | Operasi tidak cocok dengan nilai/tipe | Memanggil sesuatu yang bukan function |
| `RangeError` | Angka atau panjang berada di luar rentang | Nilai digit `toFixed()` terlalu besar |
| `URIError` | Data URI gagal dikodekan/dibaca | Urutan escape URI malformed |
| `EvalError` | Error terkait `eval()` | Jenis error lama; hampir tidak muncul di JavaScript modern |
| `AggregateError` | Beberapa error digabungkan menjadi satu | `Promise.any()` gagal untuk semua pilihan |

Browser dan Node.js dapat menampilkan pesan/stack trace yang berbeda. Fokus pada jenis error, pesan, dan lokasi kode, bukan menghafal persis kalimatnya.

### Menangani error dengan `try...catch...finally`

`try` berisi kode yang akan dicoba. Jika terjadi error, eksekusi berpindah ke `catch`. Setelah itu, `finally` selalu dijalankan, baik operasi berhasil maupun gagal. Bagian ini dapat digunakan untuk merapikan status loading.

```js
try {
  const data = JSON.parse('{"nama":"Dina"}');
  console.log(data.nama);
} catch (error) {
  console.error('Data tidak dapat dibaca:', error.message);
} finally {
  console.log('Selesai mencoba membaca data');
}
```

Letakkan kode yang mungkin gagal di dalam block `try`. Jika terjadi error, block `catch` menerima informasi error melalui parameter `error`. Contohnya, `error.message` membaca pesan error dan `console.error()` menampilkannya. Block `finally` selalu berjalan setelahnya, baik proses berhasil maupun gagal.

Jalankan `try...catch` hanya di sekitar operasi yang memang mungkin gagal dan ingin ditangani. Jangan gunakan `catch` kosong: masalah tersembunyi dan pengguna/developer tidak mendapat penjelasan.

Tidak semua kondisi gagal harus menjadi exception. Untuk input yang salah dan sudah diperkirakan, function dapat mengembalikan penanda hasil; gunakan `throw` jika proses tidak bisa dilanjutkan dan pemanggil perlu menangani kegagalan tersebut.

```js
function cekUmur(umur) {
  if (!Number.isInteger(umur) || umur < 0) {
    return { berhasil: false, pesan: 'Umur harus berupa bilangan bulat non-negatif' };
  }

  return { berhasil: true, pesan: `Umur tercatat: ${umur}` };
}

const hasilCek = cekUmur(-2);
console.log(hasilCek.berhasil); // false
console.log(hasilCek.pesan); // 'Umur harus berupa bilangan bulat non-negatif'
```

Di contoh ini, object hasil selalu memberi tahu apakah pemeriksaan berhasil lewat property `berhasil`. Pola ini cocok jika kegagalan adalah bagian normal dari alur, misalnya validasi form. Pastikan pemanggil memeriksa hasilnya; jangan mengabaikan penanda gagal.

### Membuat dan meneruskan error

Gunakan `throw` untuk menghentikan alur normal ketika function tidak dapat memenuhi tugasnya. Buat pesan yang menyebutkan masalah dengan jelas.

```js
function bagi(a, b) {
  if (b === 0) {
    throw new Error('Pembagi tidak boleh nol');
  }

  return a / b;
}

try {
  console.log(bagi(10, 0));
} catch (error) {
  console.error(error.name, error.message); // Error Pembagi tidak boleh nol
}
```

Function `bagi` menerima dua parameter, `a` dan `b`. Kondisi `b === 0` memeriksa apakah pembaginya nol. Jika iya, `throw new Error(...)` menghentikan function dan mengirim pesan error. Jika tidak, `return a / b` mengembalikan hasil pembagian. Pada `bagi(10, 0)`, argument kedua adalah nol, jadi error ditangani oleh block `catch`.

Untuk error dari operasi asynchronous, penanganan juga harus asynchronous:

```js
async function bacaData() {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`Permintaan gagal: HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Data gagal dimuat:', error.message);
    throw error; // teruskan lagi jika pemanggil juga perlu mengetahuinya
  }
}
```

Tampilkan pesan yang mudah dipahami kepada pengguna, dan simpan detail teknis untuk log/debugging. Jangan mengirim stack trace atau informasi internal sebagai pesan pengguna.

Selain `console.log()`, gunakan breakpoint dan panel **Sources/Debugger** di Developer Tools untuk memeriksa nilai dan alur program langkah demi langkah.

<a id="js-dom"></a>
## 1.13 JavaScript DOM

Pembahasan DOM dipisahkan ke dokumen [JavaScript DOM](JS-DOM.md) agar materi bahasa JavaScript dan API browser lebih mudah dipelajari secara terpisah.

<a id="javascript-intermediate"></a>
# 2. JavaScript Intermediate

<a id="js-destructuring"></a>
## 2.1 Destructuring, spread, dan rest

### Destructuring: mengambil data dengan lebih ringkas

**Destructuring** adalah cara mengambil nilai dari array atau property object lalu menyimpannya ke variabel. Ini berguna ketika beberapa nilai dari satu kumpulan perlu digunakan satu per satu.

```js
const koordinat = [10, 20];
const [x, y] = koordinat;

const akun = { nama: 'Sari', umur: 21 };
const { nama, umur } = akun;
```

Di `const [x, y] = koordinat;`, nilai array dibagikan sesuai urutannya: `x` menerima item pertama dan `y` menerima item kedua. Pada `const { nama, umur } = akun;`, nama variabel mengikuti nama property object. Jadi, `nama` mengambil `akun.nama` dan `umur` mengambil `akun.umur`. Kita juga bisa mengganti nama variabel atau memberi nilai default:

```js
const [pertama, kedua = 'tidak ada'] = ['apel'];
const { nama: namaPengguna, kota = 'Belum diisi' } = {
  nama: 'Sari'
};

console.log(pertama, kedua); // 'apel', 'tidak ada'
console.log(namaPengguna, kota); // 'Sari', 'Belum diisi'
```

### Spread: mengembangkan isi kumpulan

**Spread syntax (`...`)** membuka isi array atau object ke dalam array/object baru atau argument function. Untuk array dan object, spread membuat salinan dangkal (**shallow copy**), bukan salinan terpisah sampai ke semua object di dalamnya.

```js
const angka = [1, 2];
const angkaBaru = [...angka, 3];

const akunBaru = { ...akun, aktif: true };
```

Pada `[...angka, 3]`, tanda `...` memasukkan semua isi `angka` ke array baru, lalu menambahkan `3`. Hal serupa terjadi pada `{ ...akun, aktif: true }`: property dari `akun` disalin, lalu `aktif` ditambahkan atau diperbarui. Salinan ini hanya satu tingkat. Jika `akun` berisi object lain, object di dalamnya masih bisa sama-sama dipakai oleh salinan dan sumber.

Rest (`...`) mengumpulkan sisa argumen/nilai:

```js
function jumlahkanSemua(...angka) {
  return angka.reduce((total, nilai) => total + nilai, 0);
}
```

Di `jumlahkanSemua(...angka)`, `...angka` mengumpulkan semua argument menjadi satu array. Jadi, pemanggilan `jumlahkanSemua(2, 3, 4)` membuat `angka` berisi `[2, 3, 4]`. Method `reduce()` lalu menjumlahkan isi array. Parameter `total` menyimpan jumlah sementara, `nilai` adalah angka yang sedang diproses, dan `0` menjadi nilai awal `total`.

Spread dan rest menggunakan tanda yang sama tetapi perannya berbeda: spread **membuka/mengembangkan**, sedangkan rest **mengumpulkan**.

<a id="js-iterator"></a>
## 2.2 Iterator dan higher-order function

Di bagian Fundamental, kita sudah mengenal array. Sekarang kita akan melihat cara memakai callback untuk mengolah setiap item. **Callback** adalah function yang diberikan kepada function lain untuk dijalankan. Function yang menerima atau mengembalikan function lain disebut **higher-order function**.

```js
const angka = [1, 2, 3, 4];

const duaKali = angka.map(nilai => nilai * 2);
const genap = angka.filter(nilai => nilai % 2 === 0);
const total = angka.reduce((akumulator, nilai) => akumulator + nilai, 0);
const adaYangBesar = angka.some(nilai => nilai > 3);
const semuaPositif = angka.every(nilai => nilai > 0);

console.log(duaKali); // [2, 4, 6, 8]
console.log(genap);   // [2, 4]
console.log(total);   // 10
```

Method `map()` menjalankan callback `nilai => nilai * 2` untuk setiap angka. `nilai` adalah parameter yang bergantian menerima `1`, `2`, `3`, lalu `4`. Expression `nilai * 2` menghasilkan angka baru, dan `map()` mengumpulkan hasilnya dalam array. `filter()` juga memeriksa setiap angka, tetapi menyimpan hanya angka yang memenuhi syarat. Sementara itu, `reduce()` menggabungkan semua angka menjadi satu hasil. Di sana, `akumulator` menyimpan hasil sementara dan `0` menjadi nilai awalnya.

Callback yang sama dapat ditulis sebagai function biasa. Arrow function berguna untuk callback singkat, sedangkan function biasa bisa lebih jelas jika instruksinya panjang:

```js
const angkaAwal = [1, 2, 3];

const hasilArrow = angkaAwal.map(nilai => nilai * 2);
const hasilFunction = angkaAwal.map(function (nilai) {
  return nilai * 2;
});

console.log(hasilArrow); // [2, 4, 6]
console.log(hasilFunction); // [2, 4, 6]
```

Kedua callback menerima setiap elemen lewat parameter `nilai` dan menghasilkan nilai dua kali lipat. Hasilnya sama; pilih penulisan yang paling mudah dibaca. Function biasa dan arrow function memiliki perbedaan perilaku `this`, jadi keduanya tidak selalu bisa saling menggantikan.

| Method | Tujuan | Hasil |
| --- | --- | --- |
| `.forEach(callback)` | Menjalankan aksi untuk setiap elemen | `undefined` |
| `.map(callback)` | Mengubah setiap elemen | Array baru |
| `.filter(callback)` | Memilih elemen yang lolos kondisi | Array baru |
| `.find(callback)` | Menemukan elemen pertama yang cocok | Elemen atau `undefined` |
| `.findIndex(callback)` | Menemukan indeks pertama yang cocok | Indeks atau `-1` |
| `.reduce(callback, initialValue)` | Menggabungkan elemen menjadi satu nilai | Nilai hasil |
| `.some(callback)` / `.every(callback)` | Menguji sebagian/seluruh elemen | Boolean |

Pilih method sesuai hasil yang dibutuhkan. Gunakan `map()` untuk membuat array hasil olahan, `filter()` untuk memilih item, dan `forEach()` untuk menjalankan tindakan. Hindari mengubah array asal dari dalam callback tanpa alasan yang jelas.

### Iterasi array dan iterable

`for...of` mengambil nilai satu per satu dari array/string yang iterable. `for...in` mengambil nama property enumerable dan biasanya dipakai untuk object, bukan array.

```js
const buah = ['apel', 'mangga'];

for (const item of buah) {
  console.log(item);
}
```

Array juga menyediakan `.keys()`, `.values()`, dan `.entries()` untuk mengiterasi indeks, nilai, atau pasangan indeks-nilai. Method callback seperti `map`, `filter`, dan `forEach` umumnya melewati slot kosong pada sparse array; array padat tanpa slot kosong lebih mudah dipahami.

Loop `for...of` dan method `map()` sama-sama dapat memproses setiap nilai, tetapi hasilnya berbeda. `for...of` cocok untuk menjalankan instruksi, sedangkan `map()` cocok untuk membuat array baru:

```js
const hargaAwal = [10_000, 20_000, 30_000];
const hargaDiskon = hargaAwal.map(harga => harga * 0.9);

for (const harga of hargaAwal) {
  console.log(`Harga awal: ${harga}`);
}

console.log(hargaDiskon); // [9000, 18000, 27000]
```

Callback `harga => harga * 0.9` menghasilkan harga baru untuk setiap item, lalu `map()` mengumpulkannya dalam `hargaDiskon`. `hargaAwal` tetap tidak berubah. Jangan gunakan `map()` jika hasil array barunya tidak dipakai; untuk tindakan saja, gunakan loop atau `forEach()`.

<a id="js-function-lanjutan"></a>
## 2.3 Function lanjutan, closure, dan currying

Parameter dapat memiliki nilai default:

```js
function sapa(nama = 'Tamu') {
  return `Halo, ${nama}`;
}
```

**Closure** terjadi ketika sebuah function masih bisa memakai variabel dari tempat function itu dibuat, meskipun function luar sudah selesai dijalankan.

```js
function buatCounter() {
  let nilai = 0;

  return function () {
    nilai += 1;
    return nilai;
  };
}

const hitung = buatCounter();
console.log(hitung()); // 1
console.log(hitung()); // 2
```

Closure dapat dipakai untuk menyimpan nilai yang hanya bisa diakses lewat function tertentu. Contoh counter di atas mengingat nilai `nilai` di antara pemanggilan. Perlu diingat juga bahwa `let` membuat variabel terpisah untuk setiap putaran loop, sedangkan `var` menggunakan variabel yang sama.

**Recursion** terjadi saat function memanggil dirinya sendiri. Supaya prosesnya berhenti, tentukan kondisi dasar (**base case**), seperti `n <= 1` pada contoh berikut.

```js
function faktorial(n) {
  if (n <= 1) return 1;
  return n * faktorial(n - 1);
}
```

### Currying: mengubah function menjadi tahapan

Currying adalah cara menyusun ulang function yang biasanya menerima beberapa input sekaligus menjadi rangkaian function yang menerima satu input per tahap. Anggap seperti formulir yang diisi bertahap: masukkan tarif dulu, lalu jumlah jam.

```js
function hargaPerJam(tarif) {
  return function (jam) {
    return tarif * jam;
  };
}

const biayaDesain = hargaPerJam(100_000); // tarif sudah diingat
console.log(biayaDesain(3)); // 300000
console.log(biayaDesain(5)); // 500000
```

Versi arrow function:

```js
const tambah = a => b => a + b;

const tambahSepuluh = tambah(10);
console.log(tambahSepuluh(5)); // 15
console.log(tambah(2)(3)); // 5
```

Pada `a => b => a + b`, function pertama menerima `a`, lalu mengembalikan function lain yang menerima `b`. Function kedua menjumlahkan keduanya. Jadi, `tambah(2)(3)` memberi `2` ke function pertama, lalu `3` ke function kedua. Function kedua masih mengingat nilai `a`, yaitu `2`. Cara menyusun function bertahap ini disebut currying. Ini berguna saat kita ingin memakai nilai awal yang sama berkali-kali, tetapi tidak perlu digunakan untuk semua function.

<a id="js-oop"></a>
## 2.4 OOP: object, class, dan prinsip-prinsipnya

**OOP (Object-Oriented Programming / pemrograman berorientasi object)** adalah cara mengatur program sebagai kumpulan object yang menyimpan data sekaligus tindakan yang bisa dilakukan pada data itu. Bayangkan aplikasi perpustakaan: sebuah buku punya judul dan status pinjam, serta tindakan untuk dipinjam atau dikembalikan.

### Object dan class

Object adalah data yang dibuat dari sebuah **class**. Class bisa dianggap sebagai cetak biru untuk membuat banyak object dengan bentuk dan perilaku serupa. `constructor` mengisi data awal, `new` membuat object, dan method berisi tindakan yang bisa dilakukan object tersebut.

Untuk satu data sederhana, object literal sering sudah cukup. Class lebih berguna ketika kita perlu membuat banyak object dengan aturan dan perilaku yang sama:

```js
const bukuCatatan = {
  judul: 'Catatan Harian',
  dipinjam: false
};

class Buku {
  constructor(judul) {
    this.judul = judul;
    this.dipinjam = false;
  }

  pinjam() {
    this.dipinjam = true;
  }
}

const bukuSejarah = new Buku('Sejarah Indonesia');
bukuSejarah.pinjam();
console.log(bukuCatatan.dipinjam); // false
console.log(bukuSejarah.dipinjam); // true
```

`bukuCatatan` dibuat langsung sebagai satu object. `class Buku` menjadi cetak biru untuk membuat object buku lain dengan data awal dan method `pinjam()` yang sama. Kita tidak perlu membuat class hanya untuk satu object sederhana.

```js
class Buku {
  constructor(judul) {
    this.judul = judul;
    this.dipinjam = false;
  }

  pinjam() {
    this.dipinjam = true;
  }

  kembalikan() {
    this.dipinjam = false;
  }
}

const bukuSejarah = new Buku('Sejarah Indonesia');
bukuSejarah.pinjam();
console.log(bukuSejarah.dipinjam); // true
```

`class Buku { ... }` adalah cetak biru untuk membuat object buku. Saat `new Buku('Sejarah Indonesia')` dijalankan, teks `'Sejarah Indonesia'` masuk ke parameter `judul`, lalu object baru disimpan di `bukuSejarah`. Nilai `judul` disimpan ke property `this.judul`. Setelah itu, `bukuSejarah.pinjam()` mengubah property `dipinjam` menjadi `true`.

### Empat prinsip OOP yang sering dibahas

| Prinsip | Penjelasan sederhana | Analogi |
| --- | --- | --- |
| Encapsulation (enkapsulasi) | Menjaga data dan aturan perubahan di satu tempat; bagian dalam tidak diubah sembarangan | Mesin mobil ditutup; pengemudi memakai pedal dan tombol |
| Abstraction (abstraksi) | Menyediakan tindakan yang dibutuhkan tanpa memaksa pemakai memahami semua detail | Menekan tombol “cetak” tanpa perlu mengatur gerak setiap komponen printer |
| Inheritance (pewarisan) | Class baru dapat mewarisi perilaku dasar dari class lain | Buku digital dan buku cetak sama-sama jenis buku |
| Polymorphism (polimorfisme) | Tindakan bernama sama dapat menghasilkan perilaku berbeda sesuai jenis object | Tombol “buka” membuka buku cetak atau file digital dengan cara berbeda |

Berikut contoh enkapsulasi dan abstraksi. Tanda `#` menandai private field yang tidak dapat diakses langsung dari luar class:

```js
class Rekening {
  #saldo = 0;

  setor(jumlah) {
    if (jumlah <= 0) {
      throw new Error('Jumlah setoran harus lebih dari nol');
    }

    this.#saldo += jumlah;
  }

  lihatSaldo() {
    return this.#saldo;
  }
}

const rekening = new Rekening();
rekening.setor(50_000);
console.log(rekening.lihatSaldo()); // 50000
// rekening.#saldo tidak bisa diakses dari luar class
```

`#saldo` adalah data privat. Kode di luar class tidak bisa mengubahnya secara langsung. Untuk menambah saldo, kita memanggil `rekening.setor(50_000)`. Nilai `50_000` masuk ke parameter `jumlah`. Jika jumlahnya nol atau kurang, method melempar error. Jika tidak, saldo bertambah. Dengan cara ini, aturan setoran tetap dijaga oleh class.

Contoh inheritance dan polymorphism:

```js
class Notifikasi {
  kirim() {
    return 'Mengirim notifikasi umum';
  }
}

class Email extends Notifikasi {
  kirim() {
    return 'Mengirim email';
  }
}

class SMS extends Notifikasi {
  kirim() {
    return 'Mengirim SMS';
  }
}

const notifikasi = [new Email(), new SMS()];
for (const item of notifikasi) {
  console.log(item.kirim());
}
// Mengirim email
// Mengirim SMS
```

`Email` dan `SMS` mewarisi class `Notifikasi`, tetapi masing-masing punya cara sendiri untuk menjalankan `kirim()`. Array `notifikasi` menyimpan satu object Email dan satu object SMS. Saat loop memanggil `item.kirim()`, JavaScript menjalankan versi yang sesuai dengan jenis object. Perilaku berbeda melalui nama method yang sama inilah yang disebut polymorphism.

### `this` dan prototype

Pada method, `this` biasanya menunjuk object yang dipakai untuk memanggilnya, seperti `bukuSejarah` saat `bukuSejarah.pinjam()`. Arrow function tidak membuat `this` sendiri; ia memakai `this` dari tempat ia dibuat.

JavaScript menggunakan **prototype** sebagai jalur berbagi method antar-object. Method yang ditulis dalam class umumnya disimpan pada prototype class, sehingga setiap instance tidak perlu menyimpan salinan method terpisah. Syntax `class` membuat pola ini lebih mudah dibaca, tetapi mekanisme dasarnya tetap prototype.

Pewarisan tidak selalu menjadi pilihan terbaik. Jika dua class hanya berbagi satu kemampuan, function atau komposisi (memberi object kemampuan lain) sering lebih sederhana daripada rantai pewarisan yang panjang.

<a id="js-design-patterns"></a>
## 2.5 Design pattern dan anti-pattern

**Design pattern** adalah pola solusi yang sering dipakai untuk masalah desain program. Pattern bukan kode yang wajib dipakai atau library yang harus dipasang. Ini hanya cara yang sudah dikenal untuk membicarakan pilihan desain.

**Anti-pattern** adalah cara yang tampak mudah di awal, tetapi sering membuat program lebih sulit diperbaiki atau dikembangkan. Tidak ada satu pattern yang cocok untuk semua keadaan. Pilih cara paling sederhana yang menyelesaikan masalah.

### Creational patterns: cara membuat object

Creational pattern berkaitan dengan cara membuat object. Pattern semacam ini bisa mengurangi kode pembuatan yang berulang atau menyembunyikan detail class dari bagian program yang meminta object.

| Pattern | Tujuan sederhana | Contoh penggunaan |
| --- | --- | --- |
| Factory | Satu function memilih dan membuat jenis object yang sesuai | Membuat notifikasi email atau SMS berdasarkan pilihan |
| Builder | Menyusun object kompleks sedikit demi sedikit | Membuat konfigurasi laporan dengan pilihan opsional |
| Singleton | Menyediakan satu instance bersama | Pengaturan aplikasi yang memang harus satu sumber |
| Prototype | Membuat object baru dengan mewarisi object contoh | Object turunan dengan bentuk dasar serupa |

Contoh **Factory**: function memilih dan membuat jenis notifikasi. Kode yang meminta notifikasi tidak perlu tahu detail cara membuat email atau SMS.

```js
function buatNotifikasi(jenis) {
  if (jenis === 'email') {
    return { kirim: pesan => `Email: ${pesan}` };
  }

  if (jenis === 'sms') {
    return { kirim: pesan => `SMS: ${pesan}` };
  }

  throw new Error(`Jenis tidak didukung: ${jenis}`);
}

const notifikasi = buatNotifikasi('email');
console.log(notifikasi.kirim('Pesanan dikirim'));
```

Parameter `jenis` menentukan object yang dibuat. Saat kita memanggil `buatNotifikasi('email')`, argument `'email'` membuat function mengembalikan object dengan method `kirim`. Kemudian, `'Pesanan dikirim'` dikirim sebagai argument ke method itu. Kode pemanggil tidak perlu tahu bagaimana object notifikasi dibuat.

Singleton sebaiknya tidak otomatis dipakai untuk semua hal global. State global yang sulit diganti atau diuji sering justru menjadi sumber keterikatan antarbagian program.

### Structural patterns: cara menyusun object

Structural pattern menjelaskan cara menggabungkan object/class agar membentuk fungsi atau struktur yang lebih besar.

| Pattern | Tujuan sederhana | Contoh penggunaan |
| --- | --- | --- |
| Adapter | Membungkus interface yang berbeda agar dapat dipakai dengan cara yang seragam | Menyamakan bentuk dua layanan pembayaran |
| Decorator | Menambah perilaku pada object tanpa mengubah class asal | Menambahkan pencatatan/logging pada pemanggilan |
| Facade | Menyediakan satu pintu sederhana untuk beberapa langkah rumit | Function `buatLaporan()` yang mengatur beberapa subsistem |
| Composite | Memperlakukan item tunggal dan kelompok item dengan interface sama | Folder dan file dalam struktur pohon |
| Proxy | Menjadi perantara untuk mengontrol akses ke object | Menunda pembuatan object berat atau memeriksa akses |

Contoh **Adapter** sederhana:

```js
function buatAdapterPembayaran(layananLama) {
  return {
    bayar(jumlah) {
      return layananLama.prosesPembayaran({ amount: jumlah });
    }
  };
}
```

Function menerima object `layananLama`, lalu mengembalikan object baru dengan method `bayar()`. Saat `bayar(5000)` dipanggil, method itu mengubah angka `5000` menjadi object `{ amount: 5000 }` sebelum meneruskannya ke `prosesPembayaran()`. Adapter ini menerjemahkan bentuk pemanggilan baru ke bentuk yang dimengerti layanan lama.

### Behavioral patterns: cara object berkomunikasi

Behavioral pattern mengatur komunikasi atau pembagian tanggung jawab antar-object.

| Pattern | Tujuan sederhana | Contoh penggunaan |
| --- | --- | --- |
| Observer | Memberi tahu banyak subscriber saat suatu kejadian terjadi | Harga saham berubah, beberapa tampilan perlu diberi kabar |
| Strategy | Memilih salah satu cara melakukan pekerjaan | Metode pengiriman standar, ekspres, atau ekonomi |
| Command | Membungkus permintaan sebagai object/function | Perintah yang dapat dicatat atau di-undo |
| Iterator | Mengunjungi elemen satu per satu dengan cara seragam | `for...of` pada array |
| State | Mengubah respons sesuai keadaan object saat ini | Pesanan baru, dibayar, dikirim, selesai |
| Mediator | Mengatur komunikasi melalui satu koordinator | Komponen tidak saling mengenal langsung |

Contoh **Strategy** menggunakan function:

```js
const biayaKirim = {
  hemat: berat => berat * 1000,
  ekspres: berat => berat * 2500
};

function hitungKirim(berat, strategi) {
  return strategi(berat);
}

console.log(hitungKirim(2, biayaKirim.hemat)); // 2000
console.log(hitungKirim(2, biayaKirim.ekspres)); // 5000
```

Saat dipanggil sebagai `hitungKirim(2, biayaKirim.hemat)`, function menerima berat `2` dan strategi `hemat`. Di dalam `hitungKirim`, `strategi(berat)` menjalankan function penghitungan yang dipilih. Kita bisa mengganti strategi menjadi `ekspres` tanpa mengubah isi `hitungKirim`.

### Anti-pattern yang sebaiknya dikenali

| Anti-pattern | Mengapa bermasalah | Pilihan yang lebih baik |
| --- | --- | --- |
| God object/function | Satu bagian melakukan terlalu banyak hal sehingga sulit dipahami dan diuji | Pecah tanggung jawab menjadi bagian kecil yang jelas |
| Global mutable state | Banyak bagian dapat mengubah data yang sama tanpa terlihat | Kirim data lewat parameter dan batasi tempat perubahan |
| Copy-paste logic | Perbaikan harus dilakukan berkali-kali dan hasilnya bisa tidak konsisten | Pindahkan aturan yang benar-benar sama ke function bersama |
| Callback/Promise bersarang dalam | Alur sukses dan error sulit diikuti | Gunakan function kecil atau `async`/`await` |
| Magic number/string | Nilai tanpa nama tidak menjelaskan maksudnya | Beri nama pada konstanta, misalnya `BATAS_MAKS_PERCOBAAN` |
| Premature optimization/abstraction | Kompleksitas ditambahkan sebelum ada kebutuhan atau ukuran masalah | Mulai sederhana, ukur, lalu optimalkan titik yang terbukti perlu |
| Mutasi tersembunyi | Function mengubah data yang pemanggil tidak sadari | Nyatakan efek samping dengan jelas atau kembalikan nilai baru |
| Overengineering | Pattern/abstraction berlapis membuat tugas sederhana lebih sulit | Gunakan pattern hanya jika menyelesaikan masalah yang nyata |

Nama pattern membantu diskusi, bukan target untuk “memakai sebanyak mungkin pattern”. Kode yang mudah dibaca biasanya lebih berharga daripada desain yang terlihat canggih.

<a id="js-module"></a>
## 2.6 Module

### Modules: membagi program menjadi file

**Module** adalah file JavaScript yang mengelompokkan fungsi atau data untuk satu tujuan. Module membantu memecah program besar menjadi bagian yang lebih mudah dicari, digunakan ulang, dan diuji. Setiap module memiliki scope sendiri, jadi nilai di satu file tidak otomatis tersedia di file lain.

1. **`export`** menandai nilai yang boleh digunakan file lain.
2. **`import`** mengambil nilai yang diekspor dari file lain.

Berikut contoh dua file. File `math.js` membuka function dan konstanta; file `main.js` mengambilnya:

```js
// math.js
export function tambah(a, b) {
  return a + b;
}

export const PI = 3.14159;
```

```js
// main.js
import { tambah, PI } from './math.js';

console.log(tambah(2, 3), PI);
```

Di `math.js`, kata `export` menandai nilai yang boleh dipakai file lain. Di `main.js`, baris `import { tambah, PI } from './math.js';` mengambil kedua nilai tersebut dari file `math.js`. Setelah diimpor, `tambah(2, 3)` memanggil function dengan argument `2` dan `3`. Nilai yang tidak diekspor tetap berada di dalam file asal.

Di browser, muat entry point sebagai module:

```html
<script type="module" src="main.js"></script>
```

Module dapat memakai named export dan satu default export. Import/export harus digunakan pada konteks module; di browser module juga memiliki aturan loading dan CORS yang berbeda dari script klasik.

<a id="js-async"></a>
## 2.7 Asynchronous JavaScript

### Synchronous dan asynchronous

Secara default, JavaScript menjalankan instruksi satu per satu. Cara ini disebut **synchronous**: baris berikutnya menunggu baris sekarang selesai. Operasi seperti menunggu jaringan, timer, atau membaca file dapat memerlukan waktu; bila seluruh program menunggu secara langsung, pekerjaan lain ikut tertahan.

**Asynchronous code** memungkinkan program memulai pekerjaan yang memerlukan waktu, lalu melanjutkan pekerjaan lain. Setelah hasil siap, JavaScript menjalankan langkah yang menanganinya. Operasi ini bukan berarti semua kode berjalan bersamaan pada thread yang sama.

### Callback dan Promise

**Callback** adalah function yang diberikan kepada operasi lain untuk dipanggil saat ada hasil atau kejadian tertentu. Callback banyak dipakai pada JavaScript awal, tetapi rangkaian callback yang bersarang dapat membuat urutan dan penanganan error sulit diikuti.

**Promise** adalah object yang mewakili hasil dari pekerjaan asynchronous yang belum tentu selesai. Promise memiliki tiga keadaan:

1. **`pending`**: pekerjaan belum selesai.
2. **`fulfilled`**: pekerjaan berhasil dan memiliki hasil.
3. **`rejected`**: pekerjaan gagal dan memiliki alasan atau error.

`.then()` menangani hasil berhasil; `.catch()` menangani kegagalan. Contoh berikut meminta data lalu mengubah response menjadi JSON:

```js
fetch('/api/items')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  })
  .then(items => console.log(items))
  .catch(error => console.error('Gagal memuat data:', error));
```

`fetch('/api/items')` meminta data dari alamat tersebut dan mengembalikan Promise. Jika permintaan berhasil, function di `.then(response => { ... })` menerima jawaban server melalui parameter `response`. Method `response.json()` membaca isi jawaban sebagai JSON. Hasilnya diteruskan ke `.then(items => ...)`, sehingga parameter `items` berisi data yang sudah dibaca. Jika terjadi error, function di `.catch(error => ...)` menerima error melalui parameter `error`.

Promise chaining meneruskan nilai hasil ke `.then()` berikutnya. Error yang dilempar di chain dapat ditangani oleh `.catch()`.

Promise mirip nomor antrean pesanan. Hasilnya belum ada saat kita mendapat nomor, tetapi kita bisa menyiapkan apa yang dilakukan saat pesanan berhasil (`.then`) atau gagal (`.catch`).

### Menggabungkan beberapa Promise

| Method | Kapan selesai? | Hasil umum |
| --- | --- | --- |
| `Promise.all([...])` | Semua berhasil; gagal segera jika salah satu Promise ditolak | Array hasil sesuai urutan input |
| `Promise.allSettled([...])` | Semua selesai, berhasil atau gagal | Array status dan hasil/error tiap Promise |
| `Promise.race([...])` | Promise pertama selesai, berhasil atau gagal | Hasil dari yang pertama selesai |
| `Promise.any([...])` | Promise pertama yang berhasil; gagal dengan `AggregateError` jika semua ditolak | Hasil dari yang pertama berhasil |

```js
const hasil = await Promise.all([
  Promise.resolve('profil'),
  Promise.resolve('pengaturan')
]);
console.log(hasil); // ['profil', 'pengaturan']

const semuaStatus = await Promise.allSettled([
  Promise.resolve('berhasil'),
  Promise.reject(new Error('gagal'))
]);
console.log(semuaStatus.map(item => item.status));
// ['fulfilled', 'rejected']
```

`Promise.all([...])` menunggu semua Promise berhasil, lalu mengembalikan hasilnya sebagai array dengan urutan yang sama seperti input. Jika salah satunya gagal, `Promise.all()` juga gagal. `Promise.allSettled([...])` berbeda: method ini menunggu semuanya selesai, baik berhasil maupun gagal. Setelah itu, `map(item => item.status)` mengambil status setiap hasil.

Pilih `Promise.all()` jika semua hasil dibutuhkan. Pilih `allSettled()` jika setiap pekerjaan perlu dilaporkan, walau beberapa gagal.

### `async` dan `await`

`async` dan `await` membuat alur Promise lebih mudah dibaca. Function yang diberi `async` selalu mengembalikan Promise. Di dalamnya, `await` menunggu Promise selesai sebelum melanjutkan ke baris berikutnya. Sambil menunggu, runtime tetap bisa mengerjakan hal lain.

```js
async function muatItems() {
  try {
    const response = await fetch('/api/items');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Gagal memuat data:', error);
    throw error;
  }
}
```

Kata `async` membuat `muatItems()` selalu mengembalikan Promise. Di dalam function itu, `await fetch('/api/items')` menunggu jawaban request lalu menyimpannya di `response`. Jika `response.ok` bernilai `false`, function melempar error. Jika berhasil, `response.json()` membaca data dan `return` mengirimkannya kembali. Jika ada error di dalam `try`, parameter `error` pada `catch` menerima error tersebut.

Untuk membaca hasil dari async iterable satu per satu, gunakan `for await...of` di dalam function `async`:

```js
async function* sumberNomor() {
  yield 1;
  yield 2;
}

async function tampilkanNomor() {
  for await (const nomor of sumberNomor()) {
    console.log(nomor);
  }
}

tampilkanNomor();
```

`sumberNomor()` menghasilkan nilai secara asynchronous. `for await...of` menunggu setiap nilai sebelum melanjutkan ke nilai berikutnya. Bentuk ini berguna untuk aliran data asynchronous; untuk array biasa, gunakan `for...of`.

Menangani beberapa operasi independen secara berurutan dapat memperlambat program. Jika tidak saling bergantung, pertimbangkan `Promise.all()`:

```js
const [profil, pengaturan] = await Promise.all([
  fetch('/api/profil').then(response => response.json()),
  fetch('/api/pengaturan').then(response => response.json())
]);
```

Kedua request dimulai sebelum program menunggu `Promise.all()`. Karena request profil dan pengaturan tidak saling bergantung, keduanya bisa berlangsung bersamaan. Setelah keduanya selesai, destructuring menyimpan hasil pertama ke `profil` dan hasil kedua ke `pengaturan`.

`fetch()` menolak Promise untuk kegagalan jaringan, tetapi status HTTP seperti `404` tetap menghasilkan response. Karena itu periksa `response.ok`.

<a id="js-http-status"></a>
## 2.8 HTTP request dan status code

Saat aplikasi meminta data dari server, aplikasi mengirim **HTTP request** (permintaan). Server membalas dengan **HTTP response** (jawaban), yang berisi status code dan biasanya data. Contohnya: browser meminta detail buku, lalu server menjawab “berhasil, ini datanya” atau “buku tidak ditemukan”.

Request biasanya memiliki method:

| Method | Maksud umum | Contoh |
| --- | --- | --- |
| `GET` | Membaca data | Mengambil daftar buku |
| `POST` | Mengirim data untuk membuat/memproses sesuatu | Membuat pesanan |
| `PUT` | Mengganti seluruh resource | Mengganti seluruh profil |
| `PATCH` | Mengubah sebagian resource | Mengubah alamat profil |
| `DELETE` | Menghapus resource | Menghapus item keranjang |

Makna tepat method bergantung pada API server. Server juga dapat memerlukan header (metadata request), seperti `Content-Type` untuk format body atau `Authorization` untuk kredensial. Jangan menaruh password/token rahasia ke URL atau log.

**HTTP status code bukan error JavaScript.** Status tersebut adalah jawaban dari server. `fetch()` tetap menerima response untuk status seperti `404` atau `500`, jadi periksa `response.ok` atau `response.status` sendiri. Jika koneksi terputus, `fetch()` bisa gagal tanpa menerima status HTTP sama sekali.

Pada `fetch(url, options)`, `url` menunjukkan data yang ingin diminta. Object `options` bisa menentukan jenis permintaan lewat `method`, menambahkan informasi lewat `headers`, atau mengirim data lewat `body`. Setelah server menjawab, hasilnya disimpan di `response`. Status code menunjukkan hasil permintaan, sedangkan `response.json()` membaca isi jawaban sebagai JSON.

### Kelompok status code

| Awalan | Arti umum | Cara membacanya |
| --- | --- | --- |
| `1xx` | Informasi | Server masih memproses/bernegosiasi; jarang perlu ditangani langsung aplikasi biasa |
| `2xx` | Berhasil | Permintaan diterima dan berhasil dilakukan |
| `3xx` | Pengalihan | Lokasi atau cara mengambil hasil berubah |
| `4xx` | Masalah pada permintaan | Data, izin, atau alamat yang diminta bermasalah dari sisi client |
| `5xx` | Masalah di server | Server gagal menyelesaikan permintaan |

### Status yang sering dijumpai

| Code | Nama | Arti sederhana |
| --- | --- | --- |
| `200` | OK | Berhasil; server mengirim hasil |
| `201` | Created | Berhasil membuat data baru |
| `202` | Accepted | Permintaan diterima untuk diproses, tetapi pekerjaan belum tentu selesai |
| `204` | No Content | Berhasil, tetapi tidak ada isi response |
| `301` | Moved Permanently | Alamat resource berubah secara permanen |
| `302` | Found | Pengalihan sementara |
| `304` | Not Modified | Browser boleh memakai salinan cache yang sudah dimiliki |
| `400` | Bad Request | Permintaan tidak bisa dipahami atau formatnya salah |
| `401` | Unauthorized | Belum terautentikasi; perlu login/kredensial |
| `403` | Forbidden | Server mengenali permintaan, tetapi akses tidak diizinkan |
| `404` | Not Found | Resource tidak ditemukan pada alamat tersebut |
| `405` | Method Not Allowed | Cara permintaan (misalnya `POST`) tidak didukung untuk alamat itu |
| `409` | Conflict | Permintaan bertentangan dengan keadaan data saat ini |
| `422` | Unprocessable Content | Format dapat dibaca, tetapi isinya tidak lolos validasi |
| `429` | Too Many Requests | Permintaan terlalu sering; mungkin perlu menunggu |
| `500` | Internal Server Error | Terjadi kegagalan umum di server |
| `502` | Bad Gateway | Server perantara menerima jawaban tidak valid dari server lain |
| `503` | Service Unavailable | Layanan sementara tidak tersedia atau terlalu sibuk |
| `504` | Gateway Timeout | Server perantara menunggu terlalu lama jawaban dari server lain |

Nama/deskripsi dapat sedikit bervariasi pada pesan server. Untuk aplikasi, gunakan status code dan pesan API sebagai petunjuk; jangan mengasumsikan semua server memberi response dengan format yang sama.

### Menangani response HTTP dengan `fetch`

```js
async function ambilPengguna() {
  try {
    const response = await fetch('/api/pengguna/42');

    if (response.status === 404) {
      return null; // aplikasi memutuskan bahwa "tidak ditemukan" bukan error fatal
    }

    if (!response.ok) {
      throw new Error(`Server menjawab HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Misalnya jaringan terputus atau status gagal yang kita lempar sendiri.
    console.error('Tidak dapat mengambil data pengguna:', error.message);
    throw error;
  }
}
```

Hasil `await fetch(...)` disimpan di `response`. Jika statusnya `404`, function mengembalikan `null`, yang berarti data tidak ditemukan. Untuk status gagal lain, `throw new Error(...)` membuat error dengan pesan yang menyertakan kode status. Jika error terjadi, `catch` menerimanya lewat parameter `error`, mencatat pesan, lalu meneruskan error itu ke pemanggil.

Status `204` tidak memiliki body, jadi jangan selalu memanggil `response.json()` untuk setiap response. Untuk endpoint yang dapat mengembalikan `204`, periksa status tersebut sebelum membaca body.

Contoh mengirim JSON dengan `POST`:

```js
async function buatPesanan(pesanan) {
  const response = await fetch('/api/pesanan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pesanan)
  });

  if (!response.ok) {
    throw new Error(`Gagal membuat pesanan: HTTP ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}
```

`buatPesanan(pesanan)` menerima object pesanan lewat parameter `pesanan`. Object kedua yang diberikan ke `fetch()` berisi pengaturan request: method `POST`, header, dan isi request. `JSON.stringify(pesanan)` mengubah object menjadi teks JSON sebelum dikirim. Setelah server menjawab, function memeriksa `response.ok`. Jika server mengembalikan status `204`, tidak ada isi yang perlu dibaca, jadi function mengembalikan `null`. Untuk jawaban lain, `response.json()` membaca datanya.

`JSON.stringify()` mengubah object JavaScript menjadi teks JSON untuk dikirim. Server menentukan format request/response; selalu ikuti dokumentasi API yang digunakan.

---

<a id="javascript-under-the-hood"></a>
# 3. JavaScript Under the Hood

<a id="js-engine-runtime"></a>
## 3.1 Engine dan runtime

**JavaScript engine** membaca, mengompilasi, dan mengeksekusi JavaScript. Contoh engine adalah V8 dan SpiderMonkey. Implementasi engine berbeda-beda, tetapi mengikuti spesifikasi bahasa ECMAScript.

Secara umum, engine melakukan parsing untuk memahami syntax, lalu menjalankan kode. Engine modern dapat mengompilasi bagian yang sering dijalankan menjadi machine code untuk meningkatkan performa. Detail tahapan dan optimisasi berbeda menurut engine.

**Runtime** menyediakan kemampuan di luar inti bahasa. Browser menyediakan API seperti timer dan `fetch`; Node.js menyediakan API seperti filesystem dan process. API tersebut bukan semuanya bagian dari ECMAScript.

Model sederhana:

```text
Kode JavaScript
      ↓
JavaScript engine ── mengeksekusi kode
      ↕
Runtime / Web APIs ── timer, network, filesystem, dan lainnya
      ↓
Task queues dan event loop
```

JavaScript biasanya menjalankan satu potong kode JavaScript pada satu waktu per thread utama. Operasi I/O dapat dikelola runtime di luar call stack tersebut dan hasilnya dijadwalkan untuk diproses kemudian.

<a id="js-execution-context"></a>
## 3.2 Execution context, call stack, dan memory

Saat kode mulai berjalan, engine membuat **execution context** yang menyimpan informasi untuk mengeksekusi kode, seperti lingkungan variabel dan nilai `this`. Pemanggilan function membuat konteks baru; ketika selesai, konteks itu dikeluarkan dari **call stack**.

```js
function pertama() {
  kedua();
}

function kedua() {
  console.log('sedang berjalan');
}

pertama();
```

Saat `pertama()` berjalan, function itu memanggil `kedua()`. Keduanya masuk ke **call stack**, yaitu daftar function yang sedang berjalan. `kedua()` masuk paling akhir, jadi function itu selesai lebih dulu. Setelah itu, barulah `pertama()` selesai. Urutan ini sering diringkas sebagai “yang terakhir masuk, pertama keluar”.

Urutan sederhananya:

```text
global context masuk ke stack
pertama() masuk ke stack
kedua() masuk ke stack
kedua() selesai dan keluar
pertama() selesai dan keluar
```

Pemanggilan rekursif yang terlalu dalam dapat memenuhi stack dan menyebabkan `RangeError: Maximum call stack size exceeded`.

Nilai primitive diperlakukan sebagai nilai; object dan function diakses melalui reference. Ini menjelaskan mengapa dua variabel dapat merujuk pada object yang sama:

```js
const satu = { poin: 1 };
const dua = satu;

dua.poin = 9;
console.log(satu.poin); // 9
```

Baris `const dua = satu;` tidak membuat salinan object. `satu` dan `dua` menunjuk ke object yang sama. Jadi, saat `dua.poin` diubah menjadi `9`, nilai yang dibaca lewat `satu.poin` juga menjadi `9`.

Jangan mengandalkan gambaran “primitive selalu di stack, object selalu di heap” sebagai aturan spesifikasi. Stack dan heap adalah model konseptual yang membantu menjelaskan lifetime dan reference; representasi fisiknya ditentukan engine.

<a id="js-coercion-detail"></a>
## 3.3 Cara kerja type coercion

**Type coercion** adalah konversi nilai dari satu tipe ke tipe lain. Konversi eksplisit terlihat di kode, misalnya `Number('12')`. Konversi implisit dilakukan mengikuti aturan operator atau konteks.

Contoh:

```js
console.log(Number('12')); // 12, eksplisit
console.log('12' - 0);     // 12, implisit
console.log('12' + 0);     // '120', konkatenasi string
```

`Number('12')` langsung mengubah teks `'12'` menjadi angka. JavaScript juga mengubah teks menjadi angka saat menghitung `'12' - 0`, karena operator `-` digunakan untuk pengurangan. Namun, `'12' + 0` menghasilkan teks `'120'`: jika salah satu nilai berupa string, operator `+` menggabungkan teks. `console.log()` menampilkan hasil tiap baris.

### Mengapa `"2026" - 1969` menghasilkan `57`?

```js
console.log("2026" - 1969); // 57
```

Urutan konseptual untuk operator pengurangan:

1. Engine mengevaluasi kedua operand: kiri adalah string `"2026"`, kanan adalah number `1969`.
2. Operator `-` **tidak** memiliki perilaku konkatenasi string. Kedua operand dikonversi menjadi nilai numerik.
3. `"2026"` dapat dikonversi ke number `2026`; `1969` sudah number.
4. Engine menghitung `2026 - 1969`, yaitu `57`.
5. Hasil operator adalah number `57`, yang lalu diberikan ke `console.log()`.

Perbandingan operator `+`:

```js
console.log("2026" + 1969); // '20261969'
```

Untuk `+`, jika setelah konversi primitive salah satu operand adalah string, operator melakukan konkatenasi. Jika tidak, ia melakukan penjumlahan numerik. Karena itu `+` sering menjadi sumber coercion yang membingungkan.

Beberapa kasus penting:

```js
console.log('10' - 3);        // 7
console.log('sepuluh' - 3);   // NaN
console.log(null - 1);        // -1 (null menjadi 0)
console.log(undefined - 1);   // NaN
console.log(true - 1);        // 0 (true menjadi 1)
```

`NaN` berarti hasil numerik tidak valid; ia tetap bertipe `number`. Periksa dengan `Number.isNaN(value)`, bukan `value === NaN`.

`Symbol` tidak dapat dipaksa menjadi number oleh operasi aritmatika biasa dan akan menghasilkan `TypeError`. `BigInt` dapat dihitung dengan `BigInt`, tetapi mencampur `BigInt` dan `Number` pada operasi aritmatika seperti pengurangan akan menghasilkan `TypeError`; konversi harus disengaja.

Gunakan konversi eksplisit bila tipe input penting:

```js
const input = '2026';
const tahun = Number(input);

if (!Number.isNaN(tahun)) {
  console.log(tahun - 1969);
}
```

Konversi eksplisit membuat maksud kode lebih mudah dibaca dan mengurangi kejutan akibat aturan operator.

<a id="js-event-loop"></a>
## 3.4 Event loop, asynchronous work, dan concurrency

Di satu thread utama, JavaScript menjalankan satu potong kode pada satu waktu. **Event loop** adalah mekanisme runtime yang mengatur kapan callback siap dijalankan setelah call stack kosong. Callback timer dan penyelesaian I/O dijadwalkan sebagai task; callback Promise (reaction) dijalankan sebagai **microtask**.

```js
console.log('A');

setTimeout(() => console.log('B - timer'), 0);
Promise.resolve().then(() => console.log('C - promise'));

console.log('D');
```

Baris pertama langsung menampilkan `A`. `setTimeout()` menjadwalkan callback timer, sementara `.then()` menambahkan callback Promise ke antrean. Setelah baris sinkron selesai dan `D` ditampilkan, callback Promise berjalan lebih dulu daripada callback timer. Angka `0` pada `setTimeout()` berarti jeda minimal, bukan berarti callback langsung dijalankan.

Output umumnya:

```text
A
D
C - promise
B - timer
```

`setTimeout(..., 0)` tidak menjalankan callback secara langsung: ia menjadwalkan task untuk kesempatan berikutnya. Setelah kode sinkron selesai, microtask Promise yang sudah antre diproses sebelum task timer berikutnya. Detail host dapat berbeda pada batas-batas tertentu; contoh ini menggambarkan urutan umum runtime modern.

Operasi asynchronous tidak otomatis berarti JavaScript menjalankan dua callback bersamaan. Callback pada main thread tetap dijalankan bergantian; runtime menangani penantian operasi I/O di luar call stack.

### Concurrency berbeda dari parallelism

* **Concurrency (konkurensi)**: beberapa pekerjaan sedang berlangsung dalam rentang waktu yang sama; runtime mengatur giliran dan menunggu operasi yang belum selesai.
* **Parallelism (paralelisme)**: beberapa pekerjaan benar-benar dikerjakan pada saat yang sama, biasanya pada core/thread berbeda.

Contoh concurrency: meminta data profil dan pengaturan secara bersamaan. Waktu tunggu dapat tumpang tindih meskipun callback JavaScript tetap dijalankan satu per satu.

```js
async function ambilDuaData() {
  const [profil, pengaturan] = await Promise.all([
    fetch('/api/profil').then(response => response.json()),
    fetch('/api/pengaturan').then(response => response.json())
  ]);

  return { profil, pengaturan };
}
```

Kedua request dimulai tanpa menunggu satu sama lain. Setiap `.then()` membaca jawaban server sebagai JSON. `Promise.all()` menunggu keduanya selesai, lalu hasil pertama disimpan di `profil` dan hasil kedua di `pengaturan`.

### Pekerjaan berat dan worker

Perhitungan sinkron yang lama menghalangi thread yang menjalankannya sampai selesai. Untuk pekerjaan CPU berat, runtime tertentu menyediakan worker (thread terpisah). Di browser contohnya Web Worker; di Node.js ada `worker_threads`. Worker berkomunikasi dengan pengirim lewat pesan dan memiliki batasan API sendiri.

Worker tidak diperlukan untuk setiap operasi async: request jaringan biasanya sudah cocok ditangani dengan Promise. Pertimbangkan worker bila pengukuran menunjukkan perhitungan CPU memang membuat aplikasi lambat. Worker browser biasanya berjalan dari file/module terpisah dan tidak memiliki akses langsung ke seluruh API halaman.

### Race condition

Race condition terjadi saat hasil akhir bergantung pada urutan penyelesaian pekerjaan asynchronous yang tidak tetap. Misalnya permintaan pencarian lama selesai setelah permintaan yang lebih baru dan menimpa hasil terbaru. Gunakan identifier request, pembatalan, atau aturan urutan agar hasil usang tidak dipakai.

```js
let requestTerbaru = 0;

async function cari(teks) {
  const id = ++requestTerbaru;
  const response = await fetch(`/api/cari?q=${encodeURIComponent(teks)}`);
  const hasil = await response.json();

  if (id !== requestTerbaru) {
    return null; // hasil ini sudah kedaluwarsa
  }

  return hasil;
}
```

`teks` adalah kata yang dicari. Setiap kali `cari()` dipanggil, `requestTerbaru` bertambah dan nomornya disimpan di `id`. Setelah data datang dari server, function memeriksa apakah ada pencarian yang lebih baru. Jika ada, hasil lama diabaikan dengan mengembalikan `null`. Jika tidak, hasil pencarian dikembalikan.

`Promise.all()` mengoordinasikan pekerjaan, tetapi tidak otomatis menghentikan pekerjaan lain ketika salah satunya gagal. Untuk membatalkan request yang mendukung pembatalan, gunakan `AbortController`:

```js
const controller = new AbortController();

fetch('/api/laporan', { signal: controller.signal })
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request dibatalkan');
      return;
    }

    throw error;
  });

controller.abort();
```

`abort()` meminta pembatalan; operasi dan API yang tidak mendukung signal tidak otomatis berhenti.

<a id="js-garbage-collection"></a>
## 3.5 Memory management dan garbage collection

Selama program masih bisa mengakses sebuah object, object itu tetap dibutuhkan. Jika tidak ada lagi bagian program yang bisa mengaksesnya, JavaScript dapat membersihkan memory-nya. Proses pembersihan otomatis ini disebut **garbage collection**. Kapan dan bagaimana prosesnya berjalan ditentukan oleh JavaScript engine.

```js
let data = { pesan: 'halo' };
data = null; // reference ini tidak lagi menunjuk ke object sebelumnya
```

Mengatur `data = null` tidak menjamin object langsung dihapus; object hanya dapat dikumpulkan jika tidak ada reference lain yang masih dapat menjangkaunya. Garbage collection berjalan otomatis dan waktunya tidak dapat dijanjikan oleh program.

### Bagaimana memory digunakan?

Program memakai memory untuk menyimpan nilai, object, function, dan data lain selama dibutuhkan. **Call stack** mencatat function yang sedang berjalan. Object yang perlu disimpan lebih lama dikelola di area memory yang biasa disebut **heap**. Stack dan heap adalah gambaran sederhana untuk membantu memahami cara kerja memory; detail penyimpanannya berbeda-beda di setiap engine.

Garbage collector mencari object yang masih dapat dijangkau dari akar (misalnya variabel aktif, global, atau callback yang masih tersimpan). Object yang tidak dapat dijangkau lagi menjadi kandidat untuk dibersihkan.

```js
function buatDataSementara() {
  const data = { pesan: 'hanya dipakai di function ini' };
  console.log(data.pesan);
}

buatDataSementara();
// Setelah function selesai dan tidak ada reference lain, object dapat dikumpulkan.
```

### Penyebab umum memory leak

**Memory leak** terjadi saat program terus mempertahankan data yang sebenarnya sudah tidak dibutuhkan. Contohnya:

* Cache atau array global terus bertambah tanpa batas.
* Closure menyimpan object besar padahal hanya satu nilai kecil yang diperlukan.
* Timer/interval terus berjalan setelah pekerjaan selesai.
* Reference ke data lama tidak pernah dihapus.
* Aplikasi menyimpan hasil request atau log tanpa batas.

JavaScript tidak membebaskan object yang masih dapat dijangkau. Karena itu, masalah sering bukan “garbage collector rusak”, melainkan program masih menyimpan reference yang tidak lagi diperlukan.

### Cara mencegah memory leak

* Batasi ukuran cache atau tentukan kapan item cache dikeluarkan.
* Hentikan interval/timer ketika tidak lagi diperlukan.
* Kosongkan struktur data besar ketika masa pakainya selesai.
* Jangan menyimpan salinan data berulang jika satu reference cukup.
* Periksa closure dan callback yang hidup lama; jangan tangkap seluruh object besar tanpa kebutuhan.
* Gunakan `WeakMap`/`WeakSet` untuk metadata yang tidak seharusnya menjaga key object tetap hidup. Struktur weak tidak dapat diiterasi dan tidak menggantikan `Map`/`Set` biasa.

<a id="js-memory-debugging"></a>
## 3.6 Mendiagnosis memory issue

Jika pemakaian memory naik, jangan langsung menyimpulkan ada leak. Aplikasi bisa membutuhkan lebih banyak memory secara wajar. Cari pola: apakah memory naik terus setelah aktivitas yang sama diulang dan tidak kembali mendekati keadaan sebelumnya?

### Langkah diagnosis

1. **Buat langkah reproduksi yang konsisten.** Catat tindakan yang dilakukan dan kapan memory meningkat.
2. **Ambil baseline.** Buka aplikasi dengan kondisi awal yang sama dan ukur memory.
3. **Ulangi aktivitas.** Jalankan tindakan yang dicurigai beberapa kali, lalu ukur lagi.
4. **Bandingkan snapshot.** Heap snapshot menunjukkan object yang masih tersimpan; cari tipe object yang jumlah/ukurannya terus meningkat.
5. **Periksa jalur reference.** Cari hal yang masih mempertahankan object, misalnya cache, closure, timer, atau variabel global.
6. **Perbaiki sumber reference**, lalu ulangi pengukuran dengan langkah yang sama.

### Tool yang dapat digunakan

* **Browser Developer Tools:** tab Memory menyediakan heap snapshot dan allocation timeline untuk melihat object yang bertambah dan tetap hidup. Nama/tab dapat berbeda antar-browser.
* **Node.js:** `process.memoryUsage()` memberi gambaran memory process; `node --inspect` dapat menghubungkan proses ke debugger/DevTools.
* **Log dan metrik:** catat ukuran koleksi/cache serta jumlah operasi untuk menghubungkan pertumbuhan data dengan tindakan tertentu.

Contoh pengukuran dasar di Node.js:

```js
const sebelum = process.memoryUsage();
console.log({
  heapUsedMB: (sebelum.heapUsed / 1024 / 1024).toFixed(1),
  rssMB: (sebelum.rss / 1024 / 1024).toFixed(1)
});
```

`heapUsed` menunjukkan memory heap JavaScript yang sedang dipakai. `rss` mencakup seluruh memory yang digunakan process, bukan hanya heap. Satu kali pengukuran belum cukup untuk memastikan ada memory leak. Angkanya bisa berubah karena garbage collection dan pekerjaan runtime lainnya. Ulangi langkah yang sama, bandingkan hasilnya, dan gunakan heap snapshot jika perlu.

---

<a id="js-ringkasan"></a>
# 4. Ringkasan dan urutan belajar

1. **Fundamental:** kenali syntax, expression, statement, variabel, tipe data, dan operator.
2. **Alur program:** pelajari string, angka, kondisi, loop, lalu function dan scope.
3. **Data dan browser:** lanjutkan ke array, object, built-in penting, error handling dasar, lalu DOM untuk menghubungkan JavaScript dengan halaman web.
4. **Intermediate, function dan koleksi:** pelajari destructuring, iterator, callback, closure, recursion, dan currying.
5. **Intermediate, desain program:** pelajari OOP, design pattern, anti-pattern, dan module.
6. **Intermediate, asynchronous:** pelajari Promise, `async`/`await`, HTTP request, dan status code.
7. **Under the hood:** pahami engine, hoisting, execution context, coercion, event loop, concurrency, dan memory.
8. **Latihan:** debugging dan diagnosis memory issue setelah memahami program dasar dan runtime.

Mental model singkat:

```text
HTML       → struktur dan makna
CSS        → tampilan
JavaScript → logika dan perilaku
Engine     → memahami serta mengeksekusi JavaScript
Runtime    → menyediakan API dan menjadwalkan pekerjaan asynchronous
```

Untuk kode aplikasi, utamakan tipe yang jelas, `const`/`let`, perbandingan strict, penanganan error yang terlihat, nama function yang menjelaskan tujuannya, dan pola desain hanya saat benar-benar membantu.
