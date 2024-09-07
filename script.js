// var yaxis = 0;
// var xaxis = 0;

// document.addEventListener('keydown', function(event) {
//     var rocket = document.getElementById('rocket');
//     if(event.key === 'ArrowRight') {
//         rocket.style.right = xaxis + 10 + 'px';
//     }
//     else if(event.key === 'ArrowLeft') {
//         rocket.style.left = 
//     }
// });



let container = document.getElementById('ch-container')

let image = './images/Chicken.png'

for (let i = 0; i < 45; i++) {
    const newdiv = document.createElement('img');    // create new img element
    newdiv.src = image;                              // add src value to img
    newdiv.classList.add('chicken-image');           // add class attribute with value
    container.appendChild(newdiv);                   // add as child div for container
}




// // Get the computed style of the rocket
// const rocketLeft = window.getComputedStyle(rocket).left;
// console.log(rocketLeft)
// // Get the width of the container
// const containerWidth = document.getElementById('r-container').clientWidth;
// console.log(conatainerWidth)

// // Calculate the right boundary value (100% - 100px)
// const boundary = containerWidth - 100;

// // Convert rocketLeft to a number
// const rocketLeftValue = parseFloat(rocketLeft);

// // Check if rocketLeft is greater than the boundary
// if (rocketLeftValue > boundary) {
//     console.log('Rocket is beyond the boundary.');
// } else {
//     console.log('Rocket is within the boundary.');
// }



// const rocket = document.getElementById('rocket');
// let xaxis = parseFloat(window.getComputedStyle(rocket).left);
// let yaxis = parseFloat(window.getComputedStyle(rocket).top);
// const rocketcontainer = document.getElementById('r-container');
// const rocketWidth = rocket.clientWidth;
// const rocketHeight = rocket.clientHeight;
// const containerWidth = rocketcontainer.clientWidth;
// const containerHeight = rocketcontainer.clientHeight;

// const boundaryX = containerWidth - rocketWidth; // Right boundary
// const boundaryY = containerHeight - rocketHeight; // Bottom boundary

// document.addEventListener('keydown', function(e) {
//     switch (e.key) {
//         case 'ArrowRight':
//             xaxis += 10;
//             if (xaxis > boundaryX) {
//                 xaxis = boundaryX; // Set to boundary if exceeding
//             }
//             rocket.style.left = xaxis + 'px';
//             break;

//         case 'ArrowLeft':
//             xaxis -= 10;
//             if (xaxis < 0) {
//                 xaxis = 0; // Set to 0 if going beyond left boundary
//             }
//             rocket.style.left = xaxis + 'px';
//             break;

//         case 'ArrowDown':
//             yaxis += 10;
//             if (yaxis > boundaryY) {
//                 yaxis = boundaryY; // Set to boundary if exceeding
//             }
//             rocket.style.top = yaxis + 'px';
//             break;

//         case 'ArrowUp':
//             yaxis -= 10;
//             if (yaxis < 0) {
//                 yaxis = 0; // Set to 0 if going beyond top boundary
//             }
//             rocket.style.top = yaxis + 'px';
//             break;

//         default:
//             break;
//     }
// });


const rocket = document.getElementById('rocket');
let xaxis = parseFloat(window.getComputedStyle(rocket).left);
let yaxis = parseFloat(window.getComputedStyle(rocket).top);
const rocketcontainer = document.getElementById('r-container');
const rocketWidth = rocket.clientWidth;
const rocketHeight = rocket.clientHeight;
const containerWidth = rocketcontainer.clientWidth;
const containerHeight = rocketcontainer.clientHeight;

const boundaryX = containerWidth - rocketWidth; // Right boundary
const boundaryY = containerHeight - rocketHeight; // Bottom boundary

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        xaxis += 10;
        if (xaxis > boundaryX) {
            xaxis = boundaryX; // Set to boundary if exceeding
        }
        rocket.style.left = xaxis + 'px';

    } else if (e.key === 'ArrowLeft') {
        xaxis -= 10;
        if (xaxis < 0) {
            xaxis = 0; // Set to 0 if going beyond left boundary
        }
        rocket.style.left = xaxis + 'px';

    } else if (e.key === 'ArrowDown') {
        yaxis += 10;
        if (yaxis > boundaryY) {
            yaxis = boundaryY; // Set to boundary if exceeding
        }
        rocket.style.top = yaxis + 'px';

    } else if (e.key === 'ArrowUp') {
        yaxis -= 10;
        if (yaxis < 0) {
            yaxis = 0; // Set to 0 if going beyond top boundary
        }
        rocket.style.top = yaxis + 'px';
    }
});

// bullet handeling

const bullet = document.createElement('div')
bullet.src = './images/Bullet.png'
bullet.classList.add('bullet')
bullet.setAttribute('id', 'bullet')


document.addEventListener('keyup', function(event) {

}

)


// let xaxis = 0;

// const rocket = document.getElementById('rocket');
// const containerRocket = document.getElementById('r-container');
// const rocketWidth = rocket.offsetWidth;

// // Function to update rocket position
// function updateRocketPosition() {
//     rocket.style.left = xaxis + 'px';
// }

// // Initialize the rocket's starting position
// updateRocketPosition();

// document.addEventListener('keydown', function(e) {
//     const containerWidth = containerRocket.clientWidth;

//     if (e.key === 'ArrowRight') {
//         // Move right if the rocket + its width is within container width
//         if (xaxis + rocketWidth < containerWidth) {
//             xaxis += 10;
//             updateRocketPosition();
//         }
//     }
//     else if (e.key === 'ArrowLeft') {
//         // Move left if the rocket is not beyond the left edge
//         if (xaxis > 0) {
//             xaxis -= 10;
//             updateRocketPosition();
//         }
//     }
// });









