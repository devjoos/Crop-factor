const canon = {
  'EOS 5D/5D Mark II/III/IV': 1,
  "EOS 5D Mark IV 4K filming": 1.74,
  'EOS 60D/70D/77D/80D': 1.6,
  'EOS 7D/7D Mark II': 1.6,
  'EOS 1D/1D Mark II/IIN/III/IV': 1.3,
  'EOS 1DS/1DS Mark II//III': 1,
  'EOS M/M2/M3/M10/M5/M6/M100/M50': 1.6,
  'EOS R/RP': 1 

  

};
const nikon = {
  'D1/1X/1H': 1.5,
  'D2H/2X/2HS/2XS': 1.5,
  'D3/3X/3S':1,
  'D4/4S': 1,
  'D5': 1,
  'D100': 1.5,
  'D200': 1.5,
  'D300/300S': 1.5,
  'D700': 1,
  'D750': 1,
  'D800/800E' :1,
  'D810/810A': 1,
  'D850': 1,
  'D500': 1.5,
  'D70/70S': 1.5,
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
  'D40/40X': 1.5,
  'D60': 1.5,
  'D3000': 1.5,
  'D3100': 1.5,
  'D3200': 1.5,
  'D3300': 1.5,
  'D3500': 1.5,
  '1 J1/J2/J3/J4/J5': 2.7,
  '1 V1/V2/V3': 2.7,
  '1 S1': 2.7,
  '1 AW1': 2.7,
  'Z 7': 1,
  'Z 6': 1
};
const sony = {

};
// const panasonic = {};
// const dji = {};
// const leica = {};
// const olympus = {};
// const fujifilm = {};




const cameraBrand = {
  canon,
  // dji,
  // fujifilm,
  // leica,
  nikon
  // olympus,
  // panasonic,
  // sony
}

const cameraBrands = document.getElementById("cameraBrands");
const cameraModel = document.getElementById("cameraModel");
const lengthInput = document.getElementById("length");
const yourCrop = document.querySelector("#yourCrop");
const results = document.querySelector("#results");
let fullNameCap;

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
  !(fullNameCap === "") && (lengthInput.value) ? 
  results.textContent = `A ${lengthInput.value}mm lens is equivalent to a ${Math.round(lengthInput.value * cameraModel.value)}mm lens on the ${fullNameCap}`
  : 
  results.textContent = '';
}
lengthInput.addEventListener('input', displayResults);