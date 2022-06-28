export const userColumns = [
    { field: "id", headerName: "No", width: 70 },
    {
      field: "user",
      headerName: "Nama Adat",
      width: 330,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Provinsi",
      width: 320,
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Tabot atau Tabuik",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1483946989.jpg",
      email: "Warisan Bersama",
      age: "Para pekerja yang merasa cocok dengan tatahidup masyarakat Bengkulu, dipimpin oleh Imam Senggolo alias Syekh Burhanuddin, memutuskan tinggal dan mendirikan pemukiman baru yang disebut Berkas, sekarang dikenal dengan nama Kelurahan Tengah Padang. Tradisi yang dibawa dari Madras dan Bengali diwariskan kepada keturunan mereka yang telah berasimilasi dengan masyarakat Bengkulu asli dan menghasilkan keturunan yang dikenal dengan sebutan orang-orang Sipai. Tradisi berkabung yang dibawa dari negara asalnya tersebut mengalami asimilasi dan akulturasi dengan budaya setempat, dan kemudian diwariskan dan dilembagakan menjadi apa yang kemudian dikenal dengan sebutan upacara Tabot. Upacara Tabot ini semakin meluas dari Bengkulu ke Painan, Padang, Pariaman, Maninjau, Pidie, Banda Aceh, Meuleboh dan Singkil. Namun dalam perkembangannya, kegiatan Tabot menghilang di banyak tempat. Hingga pada akhirnya hanya terdapat di dua tempat, yaitu di Bengkulu dengan nama Tabot dan di Pariaman Sumbar (masuk sekitar tahun 1831) dengan sebutan Tabuik. Keduanya sama, namun cara pelaksanaannya agak berbeda. Jika pada awalnya upacara Tabot (Tabuik) digunakan oleh orang-orang Syi‘ah untuk mengenang gugurnya Husein bin Ali bin Abi Thalib, maka sejak orang-orang Sipai lepas dari pengaruh ajaran Syi‘ah, upacara ini dilakukan hanya sebagai kewajiban keluarga untuk yakni memenuhi wasiat leluhur mereka. Belakangan, sejak satu dekade terakhir, selain melaksanakan wasiat leluhur, upacara ini juga dimaksudkan sebagai wujud partisipasi orang-orang Sipai dalam pembinaan dan pengembangan budaya daerah Bengkulu setempat. Kondisi sosial budaya masyarakat, nampaknya, juga menjadi penyebab munculnya perberbedaan dalam tatacara pelaksanaan upacara Tabot. Di Bengkulu, misalnya, Tabotnya berjumlah 17 yang menunjukkan kepada jumlah keluarga awal yang melaksanakan Tabot, sedangakan di Pariaman hanya terdiri dari 2 macam Tabot (Tabuik) yaitu Tabuik Subarang dan Tabuik Pasa. Tempat pembuangan Tabot (Tabuik) antara Bengkulu dan Pariaman juga berbeda. Pada awalnya Tabot di Bengkulu di buang ke laut sebagaimana di Pariaman Sumatera Barat. Namun, pada perkembangannya, Tabot di Bengkulu dibuang di rawa-rawa yang berada di sekitar pemakaman umum yang dikenal dengan nama makam Karbela yang diyakini sebagai tempat dimakamnya Imam Senggolo alias Syekh Burhanuddin. Belakangan ini, banyak kritikan dari berbagai elemen masyarakat terhadap pelaksanaan upacara Tabot. Satu hal yang paling mendasar dari semua kritikan tersebut adalah berubahnya fungsi upacara Tabot dari ritual bernuansa keagamaan menjadi sekedar festival kebudayaan belaka. Ini nampaknya disebabkan oleh kenyataan bahwa yang melaksanakan upacara Tabot adalah orang-orang non-Syiah. Hilangnya nilai-nilai sakralitas upacara Tabot semakin diperparah dengan munculnya apa yang kemudian dikenal sebagai Tabot pembangunan (Tabot yang keberadaannya karena deprogram oleh pemerintah dan berjumlah banyak). Namun yang terpenting adalah empatkanlah ritual tabot untuk megenang sejarah peristiwa pepeangan cucu nabi muhammad saw hasan-Husein agar jangan terjadi perpecahan di kalangan umat islam pada masa mendatang, dan point yag paling mendasar adalah jangan mencampur-baurkan tabot dengan aspek ritual belaka. tempatkanlah tabot sebagai marwah dasarnya sebagai peristiwa mengenang pertemburan karabela sebagai moment kasadaran diri dan hikamh dibalik semua peristiwa itu demi mencapai kedamian dan persatuan umat islam di seluruh dunia.",
    },
    {
      id: 2,
      username: "Belian Bawo",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1485418928.jpg",
      email: "Kalimantan Timur",
      age: "Belian bawo adalah Tradisi ritual pengobatan alternatif orang sakit. Upacara belian bawo berkaitan dengan alam kepercayaan Suku Dayak Benuaq, yang didasari keyakinan religiusitasnya. Oleh karena itu upacara belian bawo sarat dengan fungsi spiritual (religius). Kepercayaan ini yang merupakan motor penggerak seluruh sendi kehidupan masyarakat Suku Dayak Benuaq yang di antaranya terwujud dalam penghormatan arwah nenek moyang, kepercayaan akan adanya kekuatan-kekuatan gaib, dan makhluk-makhluk halus. Perasaan ini mendorong mereka untuk selalu berusaha menyenangkan hati roh leluhur dan makhluk halus yang melingkupi kehidupan mereka, karena hal-hal itu diyakini sebagai sumber malapetaka dan pertolongan.",
    },
    {
      id: 3,
      username: "Barappen",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1485421727.jpg",
      email: "Warisan Bersama",
      age: "Bakar batu merupakan sebuah aktifitas memasak yang dilakukan oleh masayarakat suku Dani di Papua, dengan menggunakan media batu yang dipanaskan di api hingga menjadi berwarna merah dan benar-benar panas yang kemudian akan diselipkan di antara bahan-bahan yang akan diolah atau dimasak untuk dikonsumsi secara bersama-sama. Bahan utama yang digunakan adalah daging babi, saat ini dikembangkan selain babi (ikan, kelinci, ayam, kambing, dsb.) Daerah sebarannya umumnya dapat ditemui pada provinsi Papua dan Papua Barat.",
    },
    {
      id: 4,
      username: "Adat Nganggung",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1483950807.jpg",
      email: "Kepulauan Bangka Belitung",
      age: "Nganggung adalah salah satu tradisi yang hadir di masyarakat Melayu Bangka Belitung, khususnya di Pulau Bangka. Tradisi ini akhirnya menjadi sebuah adat yang terus dijaga dan dilestarikan oleh masyarakat. Nganggung merupakan adat membawa makanan dari masing-masing rumah penduduk menuju ke satu tempat pertemuan besar, biasanya berupa Masjid, Surau, Langgar, atau Lapangan pada waktu-waktu tertentu di dalam Agama Islam, seperti Maulid Nabi Muhammad SAW, Nisfu Sya'ban, Muharram, serta selepas shalat Idul Fitri dan Idul Adha. Nganggung sering disebut juga Sepintu Sedulang karena setiap rumah (sepintu atau satu pintu) membawa 'satu dulang (sedulang), yaitu wadah kuningan maupun seng yang digunakan untuk mengisi makanan dan kemudian ditutup dengan penutup dulang, yaitu Tudung Saji. Tradisi yang telah menjadi adat Melayu Bangka memberikan pemaknaan kekeluargaan yang kokoh di antara masyarakat Melayu dan menjadi sarana untuk mempererat silaturrahmi di antaranya.",
    },
    {
      id: 5,
      username: "Adat Taber Kampung",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1483950884.jpg",
      email: "Kepulauan Bangka Belitung",
      age: "Di Pulau Bangka sendiri banyak ritual-ritual adat yang masih dipercaya dan beberapa masih survive hingga sekarang, bahkan masih dilaksanakan. Khusus untuk ritual adat seperti taber, banyak sekali jenisnya. Misal; taber sungai, taber laut, taber kampung, taber manusia, taber musim dan sebagainya. Pelaksanaan taber kampung dilakukan untuk mengusir roh-roh jahat yang mengganggu masyarakat. Roh-roh tersebut dianggap jahat atau mengganggu, menyebabkan munculnya berbagai macam wabah penyakit serta timbulnya berbagai bencana. Upacara dilakukan pada malam hari biasanya setelah maghrib, dipimpin oleh seorang Pawang atau dukun kampung. Inti dari pelaksanaan upacara taber itu sendiri adalah untuk membentengi dan mencegah adanya gangguan makhluk halus yang berniat jahat kepada manusia dan juga barang-barang yang dimilikinya. Dalam kepercayaan masyarakat setelah selesainya pelaksanaan upacara taber diharapkan tidak ada lagi gangguan-gangguan makhluk halus terhadap manusia.",
    },
    {
      id: 6,
      username: "Tumpeng Sewu",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1484189836.jpg",
      email: "Jawa Timur",
      age: "Upacara adat Slametan Tumpeng Sewu pada dasarnya adalah slametan yang dilakukan oleh warga Desa Kemiren yang diselenggarakan setahun sekali pada hari Kamis atau Minggu di minggu pertama bulan Besar. Upacara itu sebagai bentuk ungkapan syukur kepada penjaga desa (Buyut Cili) yang telah menjaga Desa Kemiren dari segala mara bahaya dan lebih tinggi lagi sebagai ucap syukur kepada Yang Maha Kuasa. Upacara ini berlangsung selama sehari meliputi tahap persiapan (memasak, menyiapkan barong), mepe / menjemur kasur, ziarah makam Buyut Cili (ngaturi Buyut Cili), Arak-arakan Barong, slametan tumpeng pecel pitik, dan mocoan lontar. Elemen upacara meliputi sesaji di makam, sesaji barong,dan tumpeng pecel pithik. Arena yang digunakan adalah rumah, makam Buyut Cili, sepanjang jalan utama Kemiren.",
    },
    {
      id: 7,
      username: "Kasada",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1484190054.jpg",
      email: "Jawa Timur",
      age: "Kasada merupakan ritual adat suku Tengger. Kasada merupakan kelanjutan dari sistem kepercayaan masa prasejarah yang terfokus pada pemujaan arwah leluhur dan kultus Gunung Bromo sebagai pancering jagad (axis mundi-poros dunia). Kasada adalah ritual pemberian kurban (ngelabuh) dari keturunan R.Kesuma di kawah Gunung Bromo sesuai dengan keyakinan keagamaam Wong Tengger. Kasada dilaksanakan setiap tahun, mangsa asada, tanggal 14 bulan purnama. Kasada itu sama dengan sedekah bumi dan tanda syukur atas semua pemberian Tuhan Yang Maha Esa.",
    },
    {
      id: 8,
      username: "Perisean",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1485508538.jpg",
      email: "Nusa Tenggara Barat",
      age: "Peresean berasal dari kata per-isi-an mengandung makna mengisi ilmu kebatinan atau ilmu spiritual, ilmu kesaktian, dan ilmu bela diri untuk mencari jati diri mencapai kedewasaan menjadi laki-laki sejati. Peresean merupakan pertarungan satu lawan satu menggunakan alat pemukul terbuat dari batang rotan disebut penyalin dan alat penangkis terbuat dari kulit kerbau, sapi atau rusa yang disebut ende. Peresean merupakan perpaduan antara permainan tradisional, olah raga tradisional, kesenian, dan tradisi masyarakat. Aspek paling menonjol dalam Peresean adalah seni bela diri dan olah raga tradisional yang mengedepankan ketangkasan fisik, keindahan, dan sportifitas.",
    },
    {
      id: 9,
      username: "Nyobekng",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1485507939.jpg",
      email: "Kalimantan Barat",
      age: "Nyobekng merupakan sebuah ritual penghormatan terhadap hasil pengayauan (kayau) yang telah dilakukan sejak zaman dahulu kala, khususnya oleh suku Dayak Bidayuh. Kayau adalah sebuah istilah lokal yang mengandung arti pemenggalan kepala musuh dalam sebuah peperangan. Meskipun telah bertahun-tahun lamanya tradisi mengayau tidak dilakukan lagi, tetapi tradisi nyobeng tetap dipertahankan secara turun temurun.Kegiatan utama dalam upacara Nyobekng adalah memandikan tengkorak yang disimpan di Rumah Balug (rumah adat suku Dayak Bidayuh), sebagai wujud dari penghormatan kepada arwah para leluhur. Tengkorak kepala yang disimpan dan dihormati tersebut adalah hasil dari pengayauan di masa lalu. Kepala hasil kayau ini adalah kepala musuh yang memiliki status sebagai pemimpin suku atau orang-orang yang dihormati/terpilih. Arwah dari hasil kayau ini diyakini akan memberikan perlindungan kepada warga masyarakat Dayak Bidayuh. Selain itu, upacara ini juga bermakna sebagai wujud rasa syukur atas hasil panen padi, meminta berkah keselamatan/perlindungan dari mara bahaya, serta memohon kelimpahan rezeki/hasil panen di masa tanam berikut.",
    },
    {
      id: 10,
      username: "Tulude",
      img: "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1485507641.jpg",
      email: "Sulawesi Utara",
      age: "Tulude berasal dari bahasa Sangihe dari kata Manulude yang artinya menolak. Dahulu, upacara adat Tulude dilaksanakan pada tanggal 31 Desember, malam saat pergantian tahun. Saat itu sebuah perahu kecil terbuat dari kayu (tatolang) ditolak/dilepaskan ke tengah laut yang disertai dengan kata-kata atau ucapan bahwa segala sesuatu yang buruk telah dilepaskan ke tengah laut dan telah meninggalkan kehidupan manusia, dengan kata lain yaitu sebagai penolak bala. Masyarakat etnis Sangihe dan Talaud bukan hanya merayakan upacara ini di daerah mereka, akan tetapi sampai di daerah-daerah perantauan. Maksud dan tujuan pelaksanaan upacara ini yaitu sebagai media bersyukur pada Tuhan YME atas anugerah kehidupan di tahun yang lalu dan menerima kehidupan di tahun yang baru serta selalu diridhoi Tuhan.",
    },
  ];