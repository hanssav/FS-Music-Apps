// import package here
const multer = require("multer")

exports.uploadFile = (imageFile) => {
  // code here
  // make destination file for upload
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads") // file storage destination
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
    }
  })

  // file filter based on extension file
  // kaos.png
  const fileFilter = function (req, file, cb) {
    if (file.fieldname === imageFile) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|MP#|mp3)$/)) {
        req.fileValidationError = {
          message: "Only image & music file allowed"
        }
        return cb(new Error("Only & music file allowed"), false)
      }
    }
    cb(null, true)
  }
  const sizeInMB = 10
  const maxSize = sizeInMB * 1000 * 1000

  // Generate setting multer
  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize
    }
  }).any(imageFile)

  // middleware handler
  return (req, res, next) => {
    upload(req, res, function (err) {
      // show an error if validation error
      if (req.fileValidationError)
        return res.status(400).send(req.fileValidationError)

      // show an error if file doesnt provided requirement
      if (!req.file && !err)
        return res.status(400).send({
          message: "Please select files upload"
        })

      // show an error if it bigger than max size
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            message: "Max file sized 10mb"
          })
        }
        return res.status(400).send(err)
      }

      // if okay next to controller
      return next()
    })
  }
};


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => { // setting destination of uploading files
    if (file.fieldname === "resume") { // if uploading resume
      cb(null, 'resumes');
    } else { // else uploading image
      cb(null, 'images');
    }
  },
  filename: (req, file, cb) => { // naming file
    cb(null, file.fieldname+"-"+uuidv4()+path.extname(file.originalname));
  }
});

//
// upload music
// exports.uploadMusic = (musicFile) => {
//   // code here
//   // make destination file for upload
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/musics") // file storage destination
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
//     }
//   })

//   // file filter based on extension file
//   // kaos.png
//   const fileFilter = function (req, file, cb) {
//     if (file.fieldname === musicFile) {
//       if (!file.originalname.match(/\.(mp3|MP3|zpl|ZPL)$/)) {
//         req.fileValidationError = {
//           message: "Only music file allowed"
//         }
//         return cb(new Error("Only music file allowed"), false)
//       }
//     }
//     cb(null, true)
//   }
//   const sizeInMB = 10
//   const maxSize = sizeInMB * 1000 * 1000

//   // Generate setting multer
//   const upload = multer({
//     storage,
//     fileFilter,
//     limits: {
//       fileSize: maxSize
//     }
//   }).any(musicFile)

//   // middleware handler
//   return (req, res, next) => {
//     upload(req, res, function (err) {
//       // show an error if validation error
//       if (req.fileValidationError)
//         return res.status(400).send(req.fileValidationError)

//       // show an error if file doesnt provided requirement
//       if (!req.file && !err)
//         return res.status(400).send({
//           message: "Please select music upload"
//         })

//       // show an error if it bigger than max size
//       if (err) {
//         if (err.code === "LIMIT_FILE_SIZE") {
//           return res.status(400).send({
//             message: "Max file sized 10mb"
//           })
//         }
//         return res.status(400).send(err)
//       }

//       // if okay next to controller
//       return next()
//     })
//   }
// };


// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => { // setting destination of uploading files
//     if (file.fieldname === "resume") { // if uploading resume
//       cb(null, 'resumes');
//     } else { // else uploading music
//       cb(null, 'images');
//     }
//   },
//   filename: (req, file, cb) => { // naming file
//     cb(null, file.fieldname+"-"+uuidv4()+path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.fieldname === "resume") { // if uploading resume
//     if (
//       file.mimetype === 'application/pdf' ||
//       file.mimetype === 'application/msword' ||
//       file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//     ) { // check file type to be pdf, doc, or docx
//       cb(null, true);
//     } else {
//       cb(null, false); // else fails
//     }
//   } else { // else uploading image
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) { // check file type to be png, jpeg, or jpg
//       cb(null, true);
//     } else {
//       cb(null, false); // else fails
//     }
//   }
// };