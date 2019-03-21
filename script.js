// $(document).ready(() => {
//     $kid = $('.cameraMakes').children()
//     $kid.change('click', (event) => {
//         $(event.currentTarget)
        
//     } )
// });

const cameraMakeArray = ['Canon5DM2', 'PanasonicGH5', 'SonyA7CropMode']
const sonyModels = ['A7', 'A7II', 'A7III']
const canonModels = ['5D', '5Dm2', '5Dm3']
const panasonicModels = ['gh2', 'gh3', 'gh4', 'gh5']

const cameraMake = document.getElementById("cameraMakes")
const length = document.getElementById("length") 
const button = document.getElementById("calculate")
const cameraSelect = document.querySelector('.cameraSelects')
const dropdown = document.getElementsByTagName('option')
const yourCrop = document.querySelector("#yourCrop")
const results = document.querySelector("#results")
    
    



cameraMakeArray.forEach(camera => {
    let opt = document.createElement('option');
    opt.innerHTML = camera;
    opt.value = camera;
    document.createElement
    cameraMake.appendChild(opt);
    })

cameraMake.addEventListener('change', (e) => {
    let crop = 0
    if (e) {
        results.innerHTML = '';
        length.value = ''
    }
    if (e.target.value === 'Canon5DM2') {
        crop = 1;
    } else if (e.target.value === 'PanasonicGH5') {
        crop = 2
    } else if (e.target.value === 'SonyA7CropMode') {
        crop = 1.5
    }
    yourCrop.innerHTML = `The ${e.target.value} has a ${crop}x factor`;
    length.addEventListener('input', () => {
        if (length.value) {
        results.innerHTML = `A ${length.value}mm lens is equivalent to a ${length.value * crop}mm lens on the ${e.target.value}`
        } else {
            results.innerHTML = ''
        }
    })
})














// const butclick = () => button.addEventListener('click', () => {
//     if (length.value) {
//         let camera
//         let result = ''
//         if (camera === 'Canon5DM2' ) {
//             crop = 2
//         } else if (cameraSelect[0] ) {
//              crop = 1    
//         } else if (cameraSelect[2] ) {
//              crop = 1.5
//         }
//         result = length.value * crop;
//           alert(`a ${length.value}mm lens is equivalent to a ${result}mm`)
        
//     } else {
//         console.log(cameraSelect)
//         alert('enter a lens mm length')
//     }})


// const calculate = (crop, num) => {
//     crop = crop
//       document.getElementById("demo").innerHTML = `Your sensor is a ${crop}x crop`
//       length.addEventListener("input", function() {
//           let lengths = document.getElementById("length").value;
//           num = lengths * num;
//           return num })}

// const butCalc = () => {
//         let buttonCalc = calculate();
//           button.addEventListener("click", function(e) {
//               if (e.target.matches)

// cameraMake.onchange = function() {
//    let camera = document.getElementById("cameraMakes").value;
//    if (camera === 'PanasonicGH5') {
//     calculate(2, 2);
//     butCalc()
    
// } else if (camera === 'SonyA7CropMode') {
//        calculate(1.5, 1.5);
//        butCalc()


//    } else {
//     calculate(1 ,1); 
//     butCalc()
//    }
// }

