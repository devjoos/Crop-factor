const canon = {
  "EOS 5D/5D Mark II/III/IV": 1,
  "EOS 5D Mark IV 4K filming": 1.74,
  'EOS 60D/70D/77D/80D': 1.6,
  'EOS 7D/7D Mark II': 1.6,
  'EOS 1D/1D Mark II/IIN/III/IV': 1.3,
  'EOS 1DS/1DS Mark II//III': 1,
  'EOS M/M2/M3/M10/M5/M6/M100/M50': 1.6,
  'EOS R/RP': 1 
}
const nikon = {};
const sony = {};
const panasonic = {};
const dji = {};
const leica = {};
const olympus = {};
const fujifilm = {};




const cameraBrand = {
  canon,
  sony,
  nikon,
  panasonic,
  dji,
  leica,
  olympus,
  fujifilm
}



const cameraBrands = document.getElementById("cameraBrands")
const cameraModel = document.getElementById("cameraModel")
const lengthInput = document.getElementById("length") 
const yourCrop = document.querySelector("#yourCrop")
const results = document.querySelector("#results")







for(camera in cameraBrand){
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
    if (cameraModel.value == 1) {
      yourCrop.textContent = `The ${cameraModel.options[cameraModel.selectedIndex].textContent} has a full frame sensor, there is no crop`
    } else {
    yourCrop.textContent = 
      `The ${cameraModel.options[cameraModel.selectedIndex].textContent} has a ${cameraModel.value}x factor`;
    }
  }

cameraBrands.addEventListener('change', (e) => {
   clearResults()
  while (cameraModel.firstChild) {
    cameraModel.removeChild(cameraModel.firstChild);
  }
  let models = cameraBrands.options[cameraBrands.selectedIndex].cam
  for(camera in models){
    let opt2 = document.createElement('option');
    opt2.textContent = camera;
    opt2.value = models[camera]; // Get the value that goes with the key
    cameraModel.appendChild(opt2);
    crop()
  }
})

cameraModel.addEventListener('change', () => {
 crop()
 if(results.textContent){
   displayResults(); // Update the output because the camera changed
 }
  });

// By making this a function declaration, you can call it manually
const displayResults = () => {
  (!isNaN(lengthInput.value) && lengthInput.value) ? 
  results.textContent = `A ${lengthInput.value}mm lens is equivalent to a ${Math.round(lengthInput.value * cameraModel.value)}mm lens on the ${cameraModel.options[cameraModel.selectedIndex].textContent}`
  : 
  results.textContent = '';}

lengthInput.addEventListener('input', displayResults)