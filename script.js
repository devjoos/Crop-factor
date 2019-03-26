const canon = {
  'EOS 5D': 1,
  'EOS 5D Mark II': 1,
  'EOS 5D Mark III': 1,
  'EOS 5DMark IV': 1,
  "EOS 5D Mark IV 4K filming": 1.74,
  'EOS 60D': 1.6,
  'EOS 70D': 1.6,
  'EOS 77D': 1.6,
  'EOS 80D': 1.6,
  'EOS 7D': 1.6,
  'EOS 7D Mark II': 1.6,
  'EOS 1D': 1.3,
  'EOS 1D Mark II': 1.3,
  'EOS 1D Mark IIN': 1.3,
  'EOS 1D Mark III': 1.3,
  'EOS 1D Mark IV': 1.3,
  'EOS 1DS': 1,
  'EOS 1DS Mark II': 1,
  'EOS 1DS Mark III': 1,
  'EOS M': 1.6,
  'EOS M2': 1.6,
  'EOS M3': 1.6,
  'EOS M10': 1.6,
  'EOS M5': 1.6,
  'EOS M6': 1.6,
  'EOS M100': 1.6,
  'EOS M50': 1.6,
  'EOS R': 1,
  'EOS RP': 1  
};
const nikon = {
  'D1': 1.5,
  'D1X': 1.5,
  'D1H': 1.5,
  'D2H': 1.5,
  'D2X': 1.5,
  'D2HS': 1.5,
  'D2XS': 1.5,
  'D3':1,
  'D3X':1,
  'D3S':1,
  'D4': 1,
  'D4S': 1,
  'D5': 1,
  'D100': 1.5,
  'D200': 1.5,
  'D300': 1.5,
  'D300S': 1.5,
  'D700': 1,
  'D750': 1,
  'D800' :1,
  'D800E' :1,
  'D810': 1,
  'D810A': 1,
  'D850': 1,
  'D500': 1.5,
  'D70': 1.5,
  'D70S': 1.5,
  'D80': 1.5,
  'D90': 1.5,
  'D7000': 1.5,
  'D7100': 1.5,
  'D7200': 1.5,
  'D7500': 1.5,
  'D5000': 1.5,
  'D5100': 1.5,
  'D5200': 1.5,
  'D5300': 1.5,
  'D5500': 1.5,
  'D5600': 1.5,
  'D50': 1.5,
  'D40': 1.5,
  'D40X': 1.5,
  'D60': 1.5,
  'D3000': 1.5,
  'D3100': 1.5,
  'D3200': 1.5,
  'D3300': 1.5,
  'D3500': 1.5,
  '1 J1': 2.7,
  '1 J2': 2.7,
  '1 J3': 2.7,
  '1 J4': 2.7,
  '1 J5': 2.7,
  '1 V1': 2.7,
  '1 V2': 2.7,
  '1 V3': 2.7,
  '1 S1': 2.7,
  '1 AW1': 2.7,
  'Z 7': 1,
  'Z 6': 1
};
const sony = {
  'a900': 1,
  'a850': 1,
  'a99': 1,
  '99II': 1,
  'a100': 1.5,
  'a700': 1.5,
  'a200': 1.5,
  'a300': 1.5,
  'a350': 1.5,
  'a230': 1.5,
  'a330': 1.5,
  'a380': 1.5,
  'a500': 1.5,
  'a550': 1.5,
  'a450': 1.5,
  'a290': 1.5,
  'a390': 1.5,
  'a500': 1.5,
  'a450': 1.5,
  'a290': 1.5,
  'a390': 1.5,
  'a560': 1.5,
  'a580': 1.5,
  'a33': 1.5,
  'a55': 1.5,
  'a35': 1.5,
  'a65': 1.5,
  'a77': 1.5,
  'a77II': 1.5,
  'a57': 1.5,
  'a37': 1.5,
  'a58': 1.5,
  'a68': 1.5,
  'NEX-3': 1.5,
  'NEX-3N': 1.5,
  'NEX-5': 1.5,
  'NEX-5N': 1.5,
  'NEX-5R': 1.5,
  'NEX-5T': 1.5,
  'NEX-C3': 1.5,
  'NEX-7': 1.5,
  'NEX-F3': 1.5,
  'NEX-5R': 1.5,
  'NEX-6': 1.5,
  'a3000': 1.5,
  'a7': 1,
  'a7II': 1,
  'a7III': 1,
  'a7II': 1,
  'a7III': 1,
  'a7R': 1,
  'a7RII': 1,
  'a7RIII': 1,
  'a5000': 1.5,
  'a6000': 1.5,
  'a3500': 1.5,
  'a5100': 1.5,
  'a7S': 1,
  'A7SII': 1,
  'a6300': 1.5,
  'a6500': 1.5,
  'a9': 1,
  'a6400': 1.5,
  'QX1': 1.5
};
const panasonic = {
  'Lumix DMC-G1' : 2,
  'Lumix DMC-G10' : 2,
  'Lumix DMC-G3' : 2,
  'Lumix DMC-G5' : 2,
  'Lumix DMC-G6' : 2,
  'Lumix DMC-G7' : 2,
  'Lumix DMC-G9' : 2,
  'Lumix DMC-G80' : 2,
  'Lumix DMC-G85' : 2,
  'Lumix DMC-GF1' : 2,
  'Lumix DMC-GF2' : 2,
  'Lumix DMC-GF3' : 2,
  'Lumix DMC-GF5' : 2,
  'Lumix DMC-GF6' : 2,
  'Lumix DMC-GF7' : 2,
  'Lumix DMC-G2' : 2,
  'Lumix DMC-GH1' : 2,
  'Lumix DMC-GH2' : 2,
  'Lumix DMC-GX800' : 2,
  'Lumix DMC-GX850' : 2,
  'Lumix DMC-GH3' : 2,
  'Lumix DMC-GH4' : 2,
  'Lumix DMC-GH5' : 2,
  'Lumix DMC-GH5S' : 2,
  'Lumix DMC-GM1' : 2,
  'Lumix DMC-GM5' : 2,
  'Lumix DMC-GX1' : 2,
  'Lumix DMC-GX7' : 2,
  'Lumix DMC-GX8' : 2
};
const DJI = {
  'ZENMUSE X5': 2,
  'ZENMUSE X5R': 2,
  'ZENMUSE X7': 1.5,
};
const leica = {
  'M8': 1.3,
  'M8.2': 1.3,
  'M8': 1.3,
  'M9': 1,
  'M9-P': 1,
  'M Monochrom': 1,
  'M-E': 1,
  'M': 1,
  'M-P': 1.3,
  'M10': 1,
  'M10P': 1.3,
  'SL': 1,
  'T': 1.5,
  'TL': 1.5,
  'TL2': 1.5,
  'CL': 1.5,
  'S': 0.8,
  'S1': 0.8,
  'S2': 0.8
};
const olympus = {
'E-1': 2,
'E-3': 2,
'E-5': 2,
'E-30': 2,
'E-300': 2,
'E-400': 2,
'E-410': 2,
'E-420': 2,
'E-450': 2,
'E-500': 2,
'E-510': 2,
'E-520': 2,
'E-620': 2,
'PEN E-P1': 2,
'PEN E-P2': 2,
'PEN E-P3': 2,
'PEN E-P5': 2,
'PEN E-PL1': 2,
'PEN E-PL2': 2,
'PEN E-PL3': 2,
'PEN E-PL5': 2,
'PEN E-PM1': 2,
};
const fujifilm = {
  'X-T1': 1.5,
  'X-T10': 1.5,
  'X-T2': 1.5,
  'X-T20': 1.5,
  'X-T3': 1.5,
  'X-T30': 1.5,
  'X-Pro1': 1.5,
  'X-Pro2': 1.5,
  'X-E2S': 1.5,
  'X-E3': 1.5,
  'X-H1': 1.5
};

const cameraBrand = {
  canon,
  DJI,
  fujifilm,
  leica,
  nikon,
  olympus,
  panasonic,
  sony
}

const cameraBrands = document.getElementById("cameraBrands");
const cameraModel = document.getElementById("cameraModel");
const lengthInput = document.getElementById("length");
const yourCrop = document.querySelector("#yourCrop");
const results = document.querySelector("#results");
let fullNameCap = '';

for (camera in cameraBrand){
  let opt = document.createElement('option');
  opt.textContent = camera;
  opt.cam =  cameraBrand[camera]; /* Using a custom atrribute instead of 
  value because value would only see an [object Object] with an object instead of a string, 
  I tried JSON.stringify but did not work */
  cameraBrands.appendChild(opt);
  }

const clearResults = () => {
  results.textContent = '',
  yourCrop.textContent = '',
  lengthInput.value = '';
  }
   
const crop = () => {
     fullNameCap = `${cameraBrands.options[cameraBrands.selectedIndex].textContent.charAt(0).toUpperCase()}${cameraBrands.options[cameraBrands.selectedIndex].textContent.substring(1)} ${cameraModel.options[cameraModel.selectedIndex].textContent}`
    if (cameraModel.value == 1) {
      yourCrop.textContent = `The ${fullNameCap} has a full frame sensor, there is no crop`
    } else {
    yourCrop.textContent = 
      `The ${fullNameCap} has a ${cameraModel.value}x factor`;
    }
  }

cameraBrands.addEventListener('change', () => {
   clearResults()
  while (cameraModel.firstChild) {
    cameraModel.removeChild(cameraModel.firstChild);
  }
  let camObjects = cameraBrands.options[cameraBrands.selectedIndex].cam // grabbing the cameraBrand object value which is the object of camera modesl and crop factors
  Object.keys(camObjects).sort().map((cam) => {
  let models = {[cam]: camObjects[cam]} // sorts the camera model objects alphabetically
  for (camera in models){
    let opt2 = document.createElement('option');
    opt2.textContent = camera;
    opt2.value = models[camera]; // Get the value that goes with the key
    cameraModel.appendChild(opt2);
    crop();
  };
})});

cameraModel.addEventListener('change', () => {
 crop()
 if(results.textContent){
   displayResults(); // Update the output because the camera changed
 }
  });

// By making this a function declaration, you can call it manually
const displayResults = () => {
  !(fullNameCap === '') && lengthInput.value ? 
  results.textContent = `A ${lengthInput.value}mm lens is equivalent to a 
  ${Math.round((lengthInput.value * cameraModel.value) * 10) / 10}mm lens on the ${fullNameCap}`
  :
  results.textContent = '';
}
lengthInput.addEventListener('input', displayResults);