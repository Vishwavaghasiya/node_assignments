const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        if (file.fieldname == "iot_image") {

            console.log(__dirname, "___dirname");

            fs.mkdirSync(path.join(__dirname, "../public/iot_images"), {
                recursive: true
            });

            cd(null, path.join(__dirname, "../public/iot_images"));
        }
    },
    filename: function (req, file, cd) {
        const ext = path.extname(file.originalname);

        if (ext !== ".png" && ext !== ".jpg" && ext !== "jpeg") {
            cd("Only .png , .jpg and .jpeg format are allowed !");
        }

        cd(null, new Date().getDate() + ext);
    }
});

const upload = multer({
    storage: storage
});

module.exports = { upload };