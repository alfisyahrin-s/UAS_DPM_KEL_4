const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());

app.use(express.json());

const mongoUrl =
  "mongodb+srv://syahrina579:uasdpm@cluster0.ahugjtv.mongodb.net/?retryWrites=true&w=majority";

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Terhubung");
  })
  .catch((e) => {
    console.log(e);
  });

require("./Schema");

const Pembeli = mongoose.model("Pembeli");
const Penjual = mongoose.model("Penjual");

app.get("/", (req, res) => {
  res.send({ status: "mulai" });
});

// REGISTER
app.post("/register-pembeli", async (req, res) => {
  const { nama, email, npm, password } = req.body;

  const oldUser = await Pembeli.find({ email: email });

  if (oldUser.length > 0) {
    return res.send({ data: "pembeli sudah ada!!" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await Pembeli.create({
      nama: nama,
      email: email,
      npm: npm,
      password: encryptedPassword,
    });
    res.send({ status: "ok", data: "user dibuat" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

// REGISTER
app.post("/register-penjual", async (req, res) => {
  const { nama, email, kantin, password } = req.body;

  const oldUser = await Penjual.find({ email: email });

  if (oldUser.length > 0) {
    return res.send({ data: "user sudah ada!!" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await Penjual.create({
      nama: nama,
      email: email,
      kantin: kantin,
      password: encryptedPassword,
    });
    res.send({ status: "ok", data: "user dibuat" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

//LOGIN
app.post("/login-pembeli", async (req, res) => {
  const { npm, password } = req.body;
  const oldUser = await Pembeli.findOne({ npm: npm });

  if (!oldUser) {
    return res.send({ data: "Pembeli tidak di temukan !!" });
  }

  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({ npm: oldUser.npm }, JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ error: "error" });
    }
  }
});

//LOGIN
app.post("/login-penjual", async (req, res) => {
  const { email, password } = req.body;
  const oldUser = await Penjual.findOne({ email: email });

  if (!oldUser) {
    return res.send({ data: "user tidak di temukan !!" });
  }

  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ error: "error" });
    }
  }
});

//READ USER DATA
app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const username = user.username;
    User.findOne({ username: username }).then((data) => {
      return res.send({ status: "ok", data: data });
    });
  } catch (error) {
    return res.send({ error: "error" });
  }
});

// UPDATE USER PROFILE
app.post("/updateprofile", async (req, res) => {
  const { token, username, email, npm } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;

    const updatedUser = await User.findOneAndUpdate(
      { email: useremail },
      { $set: { nama, email, npm } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ status: "error", data: "User not found" });
    }

    const newToken = jwt.sign({ email: useremail }, JWT_SECRET);

    return res.send({
      status: "ok",
      data: { token: newToken, user: updatedUser },
    });
  } catch (error) {
    return res.status(500).send({ status: "error", data: error.message });
  }
});

// CREATE SCHEDULES
app.post("/createschedule", async (req, res) => {
  const { tgl, hari, matkul, jam, ruangan } = req.body;

  try {
    const newSchedule = await mongoose.model("Schedules").create({
      tgl,
      hari,
      matkul,
      jam,
      ruangan,
    });

    res.send({ status: "ok", data: newSchedule });
  } catch (error) {
    res.send({ status: "error", data: error.message });
  }
});

// WRITE SCHEDULES
app.get("/getschedules", async (req, res) => {
  try {
    const schedules = await mongoose.model("Schedules").find();
    res.send({ status: "ok", data: schedules });
  } catch (error) {
    res.send({ status: "error", data: error.message });
  }
});

// UPDATE SCHEDULES
app.post("/updateschedule", async (req, res) => {
  const { scheduleId, tgl, hari, matkul, jam, ruangan } = req.body;

  try {
    const updatedSchedule = await mongoose
      .model("Schedules")
      .findOneAndUpdate(
        { _id: scheduleId },
        { $set: { tgl, hari, matkul, jam, ruangan } },
        { new: true }
      );

    if (!updatedSchedule) {
      return res
        .status(404)
        .send({ status: "error", data: "Schedule not found" });
    }

    res.send({ status: "ok", data: updatedSchedule });
  } catch (error) {
    res.send({ status: "error", data: error.message });
  }
});

// DELETE SCHEDULES
app.delete("/deleteschedule/:scheduleId", async (req, res) => {
  const scheduleId = req.params.scheduleId;

  try {
    const deletedSchedule = await mongoose
      .model("Schedules")
      .findByIdAndDelete(scheduleId);

    if (!deletedSchedule) {
      return res
        .status(404)
        .send({ status: "error", data: "Schedule not found" });
    }

    res.send({ status: "ok", data: deletedSchedule });
  } catch (error) {
    res.send({ status: "error", data: error.message });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server Berjalan di port ${PORT}`);
});
