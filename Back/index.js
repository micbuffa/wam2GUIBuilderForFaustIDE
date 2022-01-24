const express = require("express");
let fs = require("fs");
let path = require("path");
let process = require("process");
var bodyParser = require("body-parser");
var cors = require("cors");
const request = require("request");
const unzip = require("unzip");
var multer = require("multer");
var multerData = multer();
const https = require('https');
const app = express();
const zl = require("zip-lib");

const baseURL = "http://localhost:3000";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

  next();
});

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/pedals", function (req, res) {
  res.json(JSON.parse(fs.readFileSync("./saves.json", "utf8")));
});

app.get("/previews/knobs", function (req, res) {
  fs.readdir("../Back/img/knobs2", (err, files) => {
    let filesUrl = baseURL + "/img/knobs2/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});

app.get("/previews/knobs", function (req, res) {
  fs.readdir("../Back/img/knobs2", (err, files) => {
    let filesUrl = "http://localhost:3000/img/knobs2/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});

/*app.get("/previews/sliders", (req, res) => {
  fs.readdir("../Back/img/sliders", (err, files) => {
    let filesUrl = "http://localhost:3000/img/sliders/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});*/

app.get("/previews/icons", function (req, res) {
  fs.readdir("../Back/img/icons", (err, files) => {
    let filesUrl = baseURL + "/img/icons/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});

app.get("/previews/backgrounds", function (req, res) {
  fs.readdir("../Back/img/background", (err, files) => {
    let filesUrl = baseURL + "/img/background/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});

app.get("/previews/switches", function (req, res) {
  fs.readdir("../Back/img/switches", (err, files) => {
    let filesUrl = baseURL + "/img/switches/";

    response = {
      filesUrl,
      files,
    };

    res.json(response);
  });
});

app.post("/pedals", function (req, res) {
  let id;
  let pedals = JSON.parse(fs.readFileSync("./saves.json", "utf8"));
  let i = 0;

  for (; i < pedals.length; i++) {
    if (pedals[i].id === req.body.id) {
      pedals[i] = req.body;
      id = pedals[i].id;
      break;
    }
  }

  if (i == pedals.length) {
    id = Date.now();
    req.body.id = id;
    pedals.push(req.body);
  }

  fs.writeFile("./saves.json", JSON.stringify(pedals), (err) => {
    if (err) {
      res.error("An error occured saving the pedal.");
    } else {
      res.json({ message: "Pedal savec successfully!", id: id });
    }
  });
});

// MICHEL BUFFA
// Generate Gui.js in functional-pedal/published/<wapname>/Gui.js
// creates the folder if does not exist, copy assets inside if needed...
app.post("/generateWAM2", multerData.fields([]), function (req, res) {
  let wapName = req.body.wapName;
  let wapCode = req.body.wapCode;

  // Check if a working dir exists for this WAP name, if not create it
  let currentDir = process.cwd();

  let wapDir = currentDir + "/functional-pedals/published/" + wapName;

  let wapGuiDir = wapDir + "/Gui";
  let wapGuiAssetsDir = wapGuiDir + "/img";
  let wapGuiAssetsBackgroundDir = wapGuiAssetsDir + "/background";
  let wapGuiAssetsKnobsDir = wapGuiAssetsDir + "/knobs";
  let wapGuiAssetsSlidersDir = wapGuiAssetsDir + "/sliders";
  let wapGuiAssetsSwitchesDir = wapGuiAssetsDir + "/switches";

  console.log("/generate, checking if dir " + wapDir + "exists...");

  if (fs.existsSync(wapDir)) {
    console.log("Dir existed, deleting it...");
    rimraf(wapDir);
  }
  fs.mkdirSync(wapDir);

  // ---- ASSETS
  // GENERATE Gui folder and asset subfolders, copy used assets in right places
  fs.mkdirSync(wapGuiDir);
  fs.mkdirSync(wapGuiAssetsDir); // the img dir
  fs.mkdirSync(wapGuiAssetsBackgroundDir); // img/background
  fs.mkdirSync(wapGuiAssetsKnobsDir);      // img/knobs
  fs.mkdirSync(wapGuiAssetsSlidersDir);    // img/sliders
  fs.mkdirSync(wapGuiAssetsSwitchesDir);  // img/switches

  // TODO: Adapt this part 
  let assets = JSON.parse(req.body.listOfAssetsUsedByPlugin);
  assets.forEach(a => {
    let sourceFile = currentDir + "/functional-pedals/commonAssets/" + a;
    const subfolder = a.split('/')[2]; // knob, background, slider, switches etc.
    let targetDir = wapGuiAssetsDir + "/" + subfolder;
    copyFileSync(sourceFile, targetDir);
  })
  console.log("Folder with imgs useb by plugin copied into Gui/img dir...");
  // ---- END OF ASSETS

  copyFolderRecursiveSync(
    currentDir + "/functional-pedals/commonAssets/sourceFiles/utils",
    wapDir
  ); 
  console.log("Folder utils copied into main dir...");

  // then the fetchModule.js in the plugin dir
  copyFileSync(
    currentDir + "/functional-pedals/commonAssets/sourceFiles/fetchModule.js",
    wapDir
  );
  console.log("fetchModule.js copied into main dir...");

  // Copy the default descriptor
  copyFileSync(
    currentDir + "/functional-pedals/commonAssets/sourceFiles/descriptor.json",
    wapDir
  );
  
  // then the index.js in the Gui dir
  copyFileSync(
    currentDir + "/functional-pedals/commonAssets/sourceFiles/Gui/index.js",
    wapGuiDir
  );
  console.log("Gui/index.js file  copied...");

  fs.writeFile(wapGuiDir + "/Gui.js", req.body.generated, (err) => {
    if (err) {
      res.error("An error occured saving the Gui/Gui.js file");
    } else {
      fs.writeFile(wapDir + "/" + wapName + ".dsp", req.body.wapCode, (err) => {
        if (err) {
          res.error(
            "An error occured saving the " +
              wapDir +
              "/" +
              wapName +
              ".dsp file"
          );
        } else {
          fs.writeFile(wapDir + "/index.js", req.body.indexJS, (err) => {
            if (err) {
              res.error(
                "An error occured saving the " + wapDir + "/index.js file"
              );
            } else {
              // no error, let's send back an answer to the client
              res.json({
                message:
                  wapName +
                  " all plugin files generated successfully in directory " +
                  wapDir,
              });
            }
          });
        }
      });
    }
  });
});

app.post("/generateWAP", multerData.fields([]), function(req, res) {
  //console.dir(req.body);
  let wapName = req.body.wapName;
  let wapCode = req.body.wapCode;

  // Check if a working dir exists for this WAP name, if not create it
  let currentDir = process.cwd();

  let wapDir = currentDir + "/functional-pedals/published/" + wapName;
  console.log("/generate, checking if dir " + wapDir + "exists...");

  if (fs.existsSync(wapDir)) {
    console.log("Dir existed, deleting it...");
    rimraf(wapDir);
  }
    fs.mkdirSync(wapDir);
    console.log("...created, let's copy assets into it...");
    // copy inside the assets
    // first, the img dir with webaudiocontrol sprites, etc.
    copyFolderRecursiveSync(
      currentDir + "/functional-pedals/commonAssets/img",
      wapDir
    );
    console.log("Folder with imgs copied...");

    // then the mp3 file used by the tester
    copyFileSync(
      currentDir + "/functional-pedals/commonAssets/CleanGuitarRiff.mp3",
      wapDir
    );
    console.log("mp3 file needed to WAP embedded tester copied...");
  //}

  fs.writeFile(wapDir + "/main.html", req.body.generated, err => {
    if (err) {
      res.error("An error occured saving the functional pedal.");
    } else {
      fs.writeFile(wapDir + "/" + wapName + ".dsp", req.body.wapCode, err => {
        if (err) {
          res.error("An error occured saving the functional pedal.");
        } else {
          res.json({
            message:
              wapName +
              ".dsp and main.html generated successfully in directory " +
              wapDir
          });
        }
      });
    }
  });
});

app.get("/download", function(req, res) {
  console.log("download");
  let wapName = req.query.wapName;
  let currentDir = process.cwd();
  let pluginsDir = currentDir + "/functional-pedals/published";
  let wapDir = pluginsDir + "/" + wapName;

  let zipFile = pluginsDir + "/zips/" + wapName + ".zip";
  let sourceDir=wapDir;
  let zipURL = baseURL + "/functional-pedals/published/zips/" + wapName + ".zip";

  zl.archiveFolder(sourceDir, zipFile).then(function () {
      console.log("done zipping " + sourceDir + " into " + zipFile);
      let reponse = {
          msg:"done zipping " + sourceDir + " into " + zipFile + " url = " + zipURL,
 zipURL:zipURL
 }
      res.json(reponse);
  }, function (err) {
      console.log(err);
  });
});


// MICHEL BUFFA 
// Gets the binary.zip DSP files from Faust remote server, and unzip it in the WAP dir.
app.post("/addBinaryDotZipWAP", multerData.fields([]), function (req, res) {
  let wapName = req.body.wapName;
  let binaryDotZipURL = req.body.url;

  let currentDir = process.cwd();

  let wapDir = currentDir + "/functional-pedals/published/" + wapName;
  console.log("/addBinaryDotZip, adding binary.zip to " + wapDir);

  console.log("Sending request to GET " + binaryDotZipURL);
  // TODO : check if you can do this with promises...
  request(binaryDotZipURL)
    .pipe(fs.createWriteStream(wapDir + "/binary.zip"))
    .on("close", function () {
      console.log("binary.zip has been downloaded, now unzipping it...");
      fs.createReadStream(wapDir + "/binary.zip").pipe(
        unzip.Extract({ path: wapDir })
      );
    });
});

app.post("/addBinaryDotZipWAM2", multerData.fields([]), function(req, res) {
  let wapName = req.body.wapName;
  let binaryDotZipURL = req.body.url;

  let currentDir = process.cwd();

  let wapDir = currentDir + "/functional-pedals/published/" + wapName;
  console.log("/addBinaryDotZip, adding binary.zip to " + wapDir);

  console.log("Sending request to GET " + binaryDotZipURL);
  // TODO : check if you can do this with promises...
  request(binaryDotZipURL)
    .pipe(fs.createWriteStream(wapDir + "/binary.zip"))
    .on("close", function () {
      console.log("binary.zip has been downloaded, now unzipping it...");
      fs.createReadStream(wapDir + "/binary.zip").pipe(
        unzip.Extract({ path: wapDir }).on("close", function () {
          // zip has been completely extracted, we can rename
          // main.js into Node.js
          fs.renameSync(wapDir + "/main.js", wapDir + "/Node.js");

          // copy host files
          // delete if exists current index.html (old WAM1.0 host)
          if (fs.existsSync(wapDir + "/index.html")) {
            console.log("File index.html for wam1 host exists, deleting it...");
            fs.unlinkSync(wapDir + "/index.html");
          }
          copyFileSync(
            currentDir +
              "/functional-pedals/commonAssets/sourceFiles/host/index.html",
            wapDir
          );
          copyFileSync(
            currentDir +
              "/functional-pedals/commonAssets/sourceFiles/host/host.js",
            wapDir
          );
          copyFileSync(
            currentDir +
              "/functional-pedals/commonAssets/sourceFiles/host/CleanGuitarRiff.mp3",
            wapDir
          );
          console.log("The file has been unzipped... and host generated");
          fs.unlinkSync(wapDir + "/binary.zip");
          console.log("binary.zip removed...");
          console.log("----- plugin published ----");

        })
      );
    });
});


app.listen(3000, function () {
  console.log("Back");
  console.log("Listening on port 3000!");
});

var httpsServer = https.createServer(/*httpsOptions,*/ app);
httpsServer.listen(443);

//################
// UTILS FUNCTIONS
//################
function copyFileSync(source, target) {
  var targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  var files = [];

  //check if folder needs to be created or integrated
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
  if (fs.existsSync(dir_path)) {
    fs.readdirSync(dir_path).forEach(function (entry) {
      var entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory()) {
        rimraf(entry_path);
      } else {
        fs.unlinkSync(entry_path);
      }
    });
    fs.rmdirSync(dir_path);
  }
}
