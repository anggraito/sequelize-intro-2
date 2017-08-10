Soal :
https://docs.google.com/document/d/1t0_siMRGxES40jPQKr-xkrL6waQAAfvlviN-FT8jBsg/edit

Sequelize Association one-to-many many-to-many

Relasi antara model Subject dan Teacher adalah one Subject has many Teacher. Asosiasikan model Subject dan Teacher dengan menambahkan field pada salah satu model untuk menampung referensi dari model lainnya. Lakukan migrasi dan sesuaikan model dengan migrasi yang telah dilakukan (5)

Buatlah fitur CRUD untuk tabel Teachers. Ikuti bentuk CRUD untuk tabel Students dan samakan pola routing pada /students/*. (20, each 5)

Pada laman yang menampilkan semua data Teacher, munculkan Subject yang ditentukan untuk Teacher tersebut. Bila belum ditentukan, munculkan tulisan ‘unassigned’ (15)


Pada route /subjects , tampilkan semua Subject dengan Teacher yang telah di-assign untuk subject tersebut. (10)
Pada laman edit Teacher, bila Teacher sudah ditentukan Subject-nya, pastikan Subject tersebut yang muncul pada dropdown pilihan Subject



Asosiasikan model Student dan model Subject. Relasi antara kedua model tersebut adalah many-to-many, dimana satu Student dapat mengambil lebih dari satu Subject dan satu Subject memiliki banyak Student. Lakukan pembuatan model dan migrasi yang perlu dilakukan. (5)

Pada laman yang menampikan data semua Student, tambahkan fitur ‘add subject’ dimana masing-masing Student dapat memilih Subject untuk diambil. Gunakan routing  (10)
GET /students/:id/addsubject (menampilkan data student dan pilihan subject)


POST /students/:id/addsubject (meng-handle input form)




Pada /subjects, tambahkan fitur ‘enrolled students’ untuk menampilkan semua siswa yang mengambil Subject tersebut beserta score-nya. Gunakan routing /subjects/:id/enrolledstudents (10)


Pada halaman /subjects/:id/enrolledstudents tambahkan fitur ‘give score’ untuk memberikan score Student yang mengambil Subject tapi masih belum memiliki score. (20)
GET /subjects/:id/givescore (menampilkan form untuk memberi nilai)
POST /subjects/:id/givescore (meng-handle input data)



Perbaiki kerapihan data di tabel, tambahkan kolom `No` di paling kiri tabel dan berikan yang berurutan. Urutkan data berdasarkan alfabet (5)
Data Teacher dan Student berdasarkan first_name
Data enrolled students berdasarkan Student.first_name
