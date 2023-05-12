const fs = require("fs");

const checkIfFileExists = (req, res) => {
  const filePath = req.body.file;
  if (filePath === null) {
    res.status(400).json({
      file: null,
      error: "Invalid JSON input.",
    });
  } else {
    /** file exists logic */
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.status(200).json({
          file: "file.dat",
          error: "File not found.",
        });
        return;
      }

      console.log(`${filePath} exists`);
      res.status(400).json({ state: "sending to next container" });
    });
  }
};

module.exports = {
  checkIfFileExists,
};
