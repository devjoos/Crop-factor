// Now, each camera can store a key along with a value:
const cameras = {
  Canon5DM2: 1,
  PanasonicGH5: 2,
  SonyA7CropMode: 1.5
};

const cameraMakes = document.getElementById("cameraMakes")
const length = document.getElementById("length") 
const yourCrop = document.querySelector("#yourCrop")
const results = document.querySelector("#results")

// Loop through the object:
for(camera in cameras){
    let opt = document.createElement('option');
    opt.textContent = camera;
    opt.value = cameras[camera]; // Get the value that goes with the key
    cameraMakes.appendChild(opt);
}

cameraMakes.addEventListener('change', (event) => {
    console.log(cameraMakes.options)
  yourCrop.textContent = 
    `The ${cameraMakes.options[cameraMakes.selectedIndex].textContent} has a ${cameraMakes.value}x factor`;
 if(results.textContent !== ""){
   displayResults(); // Update the output because the camera changed
 }
});

// By making this a function declaration, you can call it manually
const displayResults = () => {
  results.textContent = 
    `A ${length.value}mm lens is equivalent to a ${length.value * cameraMakes.value}mm lens on the ${cameraMakes.options[cameraMakes.selectedIndex].textContent}`;
}

length.addEventListener('input', displayResults);