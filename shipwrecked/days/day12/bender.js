let ore = Array.from(Array(1000)).map((x) =>
  Math.floor(Math.random() * 30 + 1)
);
// refining
let extractor = [];
let resources = 0;
loc = ["baseCamp", "mineSite", "chargingBay"];
//bender
let where = loc[0];
let payload = [];
const payloadMax = 100;
let powerLevel = 100;

function charge() {
  if (powerLevel < 15) {
    if ((where = loc[0])) {
      console.log(`Commence charging`);
      where = loc[3];
    }
    baseCamp();
  }
  baseCamp();
}

function baseCamp() {
  console.log(`Arrived at Base Camp`);
  where = loc[0];
  baseScan();

  function baseScan() {
    console.log(`payload: ${payload}`);
    if (payload.length > 0) {
      refining();
    } else {
      mineSite();
    }
  }

  function refining() {
    function offLoad() {
      console.log(`Commencing off-load`);
      while (payload.length > 0) {
        extractor.push(payload.shift());
      }
      powerLevel -= 7;
      console.log(`extractor: ${extractor}`);
      charge();
    }

    function extraction() {
      console.log(`Commencing extraction`);
      for (let i = 0; 0 < extractor.length; i++) {
        extractor.shift();
        resources++;
      }
      console.log(`resources: ${resources}`);
    }
  }
}

function mineSite() {
  console.log(`Arrived at Mine Site`);
  where = loc[1];
  mineScan();

  function mineScan() {
    if (payload.length < payloadMax) {
      mining();
    } else {
      baseCamp();
    }
  }

  function mining() {
    console.log(`Commencing mining`);
    where = loc[1];
    while (payload.length < payloadMax) {
      payload.push(ore.shift());
    }
    powerLevel -= 7;
    console.log(`payload: ${payload}`);
    charge();
  }
}

baseCamp();
