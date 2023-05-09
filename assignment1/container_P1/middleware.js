const fs = require("fs");



export const checkIfFileExists = (req,res) => {
    const filePath = req.body.file;
    /** file exists logic */
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error(`${filePath} does not exist`);
          res.status(200).json({"state":"success"})
          return;
        }
      
        console.log(`${filePath} exists`);
        res.status(400).json({"state":"fail"})
      });
}