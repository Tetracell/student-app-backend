const { response } = require("express");
const express = require("express");
const cors = require("cors");

const studentsData = require("./studentsData.json");

const app = express();      
app.use(cors());

//Healthcheck
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to student-app-backend --> Service is running",
  });
});

app.get("/students", (req, res) => {
  const { students } = studentsData;
  try {
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const { students } = studentsData;
  try {
    const student = students.find((e) => e.id === id);
    student
      ? res.status(200).json({ data: student })
      : res.status(404).json({
          error: `Could not located student with requested id of ${id}`,
        });
  } catch (error) {
    return error;
  }
});

module.exports = app;
