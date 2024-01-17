const mongoose = require("mongoose");

const PembeliSchema = new mongoose.Schema(
  {
    nama: String,
    email: { type: String, unique: true },
    npm: String,
    password: String,
  },
  {
    collection: "Pembeli",
  }
);

mongoose.model("Pembeli", PembeliSchema);

const PenjualSchema = new mongoose.Schema(
  {
    nama: String,
    email: { type: String, unique: true },
    password: String,
    kantin: String,
  },
  {
    collection: "Penjual",
  }
);

mongoose.model("Penjual", PenjualSchema);

const ScheduleSchema = new mongoose.Schema(
  {
    tgl: { type: Date },
    hari: {
      type: String,
      enum: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    },
    matkul: String,
    jam: String,
    ruangan: {
      type: String,
      enum: ["SISKOM LAB", "INTRO LAB", "NETWORK LAB", "MOBILE LAB", "Lainya"],
    },
  },
  {
    collection: "Schedules",
  }
);

mongoose.model("Schedules", ScheduleSchema);
