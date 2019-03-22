const cameras = {
    Canon5DM2: 1,
    PanasonicGH5: 2,
    SonyA7CropMode: 1.5
  };

const cameraMake = document.getElementById("cameraMakes")
const lengthInput = document.getElementById("length") 
const yourCrop = document.querySelector("#yourCrop")
const results = document.querySelector("#results")

for(camera in cameras){
    let opt = document.createElement('option');
    opt.textContent = camera;
    opt.value = cameras[camera]; // Get the value that goes with the key
    cameraMakes.appendChild(opt);
}


cameraMakes.addEventListener('change', () => {
  yourCrop.textContent = 
    `The ${cameraMakes.options[cameraMakes.selectedIndex].textContent} has a ${cameraMakes.value}x factor`;
 if(results.textContent){
   displayResults(); // Update the output because the camera changed
 }
});

// By making this a function declaration, you can call it manually
const displayResults = () => {
  (!isNaN(lengthInput.value) && lengthInput.value) ? 
  results.textContent = `A ${lengthInput.value}mm lens is equivalent to a ${lengthInput.value * cameraMakes.value}mm lens on the ${cameraMakes.options[cameraMakes.selectedIndex].textContent}`
  : 
  results.textContent = '';}

lengthInput.addEventListener('input', displayResults)





// const cameraMakeArray = ['Canon5DM2', 'PanasonicGH5', 'SonyA7CropMode']
// const sonyModels = ['A7', 'A7II', 'A7III']
// const canonModels = ['5D', '5Dm2', '5Dm3']
// const panasonicModels = ['gh2', 'gh3', 'gh4', 'gh5']
// let crop = 0  
// cameraMakeArray.forEach(camera => {
//     let opt = document.createElement('option');
//     opt.innerHTML = camera;
//     opt.value = camera;
//     document.createElement
//     cameraMake.appendChild(opt);
//     })

// cameraMake.addEventListener('change', (event) => {
//    if (event) {
//         results.innerHTML = '';
//         length.value = ''
//     }
//     if (event.target.value === 'Canon5DM2') {
//         crop = 1;
//     } else if (event.target.value === 'PanasonicGH5') {
//         crop = 2;
//     } else if (event.target.value === 'SonyA7CropMode') {
//         crop = 1.5
//     }
//     yourCrop.innerHTML = `The ${event.target.value} has a ${crop}x factor`;
// });

// length.addEventListener('input', () => {
//     if (length.value) {
//     results.innerHTML = `A ${length.value}mm lens is equivalent to a ${length.value * crop}mm lens on the ${event.target.value}`
//     } else {
//         results.innerHTML = ''
//     }
// });









