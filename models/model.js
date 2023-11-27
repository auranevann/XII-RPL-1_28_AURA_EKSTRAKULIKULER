const mongoose = require("mongoose");

const eskulSchema = new mongoose.Schema({
  NIS: {
    type: String,
    required: [true, "Silahkan isikan Nomor Induk Siswa"],
    unique: true,
  },
  nama_ekskul: {
    type: String,
    required: [true, "Silahkan isikan nama siswa"],
  },
  ruangan: {
    type: String,
    required: [true, "Silahkan isikan kelas siswa"],
  },
  pembina: {
    type: String,
    required: [true, "Silahkan isikan tanggal lahir siswa"],
  },
  jumlah_anggota: {
    type: String,
    required: [true, "Silahkan isikan alamat siswa"],
  },
});

module.exports = mongoose.model("eskul", eskulSchema);