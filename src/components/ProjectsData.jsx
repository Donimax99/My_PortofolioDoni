const projects = [
    {
        id: 2,
        title: "Project Kuliah Flutter Notes App",
        category: "Tugas Kuliah",
        description:
            "Aplikasi catatan sederhana menggunakan Flutter dan Firebase sebagai penyimpanan data.",
        image: "/projects/notesapp.png",
        technologies: [
            "Flutter",
            "Firebase",
            "Dart"
        ],

        link:"#",

        feature: [
            "Fitur utama dari aplikasi ini adalah kemampuan untuk membuat, membaca, memperbarui, dan menghapus catatan.",
            "Aplikasi ini bisa login dengan akun google, memiliki antarmuka pengguna yang sederhana dan intuitif, sehingga memudahkan pengguna untuk mengelola catatan mereka.",
            "Dapat melihat tanggal, mendengarkan musik dari file asset mp3, dan ada scan QR Code juga jika ingin menscan QR Code mirip seperti google lens.",
        ],
    },

    {
        id: 3,
        title: "Project Kuliah PBW1 - Website CRUD Ajax Transaksi Pulsa",
        category: "Tugas Kuliah",
        description:
            "Website CRUD untuk transaksi pulsa menggunakan Ajax, PHP, MySQL, dan Bootstrap serta dilengkapi fitur cetak struk transaksi.",
        image: "/projects/pulsa.png",
        technologies: [
            "PHP",
            "MySQL",
            "Ajax",
            "Bootstrap",
            "JavaScript",
            "CodeIgniter 4"
        ],

        link:"#",
        feature: [
            "Fitur utama dari website ini adalah kemampuan untuk melakukan CRUD (Create, Read, Update, Delete) data pulsa dan transaksi pulsa.",
            "Website ini juga dilengkapi dengan fitur cetak struk transaksi untuk memudahkan pengguna dalam mencatat dan menyimpan informasi transaksi mereka.",
            "Dan login menggunakan myth/auth, dan ada fitur pencarian data pulsa dan transaksi pulsa."
        ]
    }
];

export default projects;