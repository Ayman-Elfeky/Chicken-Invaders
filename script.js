// // hold containers
// const rocket = document.getElementById('rocket');
// const rocketcontainer = document.getElementById('r-container');
// const chickenContainer = document.getElementById('ch-container')



// // create chicken images
// let chickenImage = './images/Chicken.png'
// for (let i = 0; i < 45; i++) {
//     const newdiv = document.createElement('img');    // create new img element
//     newdiv.src = chickenImage;                              // add src value to img
//     newdiv.classList.add('chicken-image');           // add class attribute with value
//     chickenContainer.appendChild(newdiv);                  // add as child div for container
// }



// // move the rocket
// let xaxis = parseFloat(window.getComputedStyle(rocket).left);
// let yaxis = parseFloat(window.getComputedStyle(rocket).top);
// const rocketWidth = rocket.clientWidth;
// const rocketHeight = rocket.clientHeight;
// const containerWidth = rocketcontainer.clientWidth;
// const containerHeight = rocketcontainer.clientHeight;

// const boundaryX = containerWidth - rocketWidth; // Right boundary
// const boundaryY = containerHeight - rocketHeight; // Bottom boundary

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowRight') {
//         xaxis += 10;
//         if (xaxis > boundaryX) {
//             xaxis = boundaryX; // Set to boundary if exceeding
//         }
//         rocket.style.left = xaxis + 'px';

//     } else if (e.key === 'ArrowLeft') {
//         xaxis -= 10;
//         if (xaxis < 0) {
//             xaxis = 0; // Set to 0 if going beyond left boundary
//         }
//         rocket.style.left = xaxis + 'px';

//     } else if (e.key === 'ArrowDown') {
//         yaxis += 10;
//         if (yaxis > boundaryY) {
//             yaxis = boundaryY; // Set to boundary if exceeding
//         }
//         rocket.style.top = yaxis + 'px';

//     } else if (e.key === 'ArrowUp') {
//         yaxis -= 10;
//         if (yaxis < 0) {
//             yaxis = 0; // Set to 0 if going beyond top boundary
//         }
//         rocket.style.top = yaxis + 'px';
//     }
// });



// document.addEventListener('keydown', function(e) {
//     if (e.key === ' ') { // check if the spacebar is pressed
//         fireBullet();
//     }
// });

// function fireBullet() {
//     // Create a new bullet element each time
//     const bullet = document.createElement('img');
//     bullet.src = './images/Bullet.png';
//     bullet.classList.add('bullet');
    
//     // Get the current rocket position to fire the bullet from the rocket's top
//     const rocketPosition = rocket.getBoundingClientRect();
    
//     // Set bullet's initial position to the rocket's position
//     bullet.style.position = 'absolute'; // Ensure the bullet is positioned absolutely
//     bullet.style.left = rocketPosition.left + 38 + 'px'; // Align with the rocket's left
//     bullet.style.top = rocketPosition.top + 'px'; // Start from the rocket's top
    
//     document.body.appendChild(bullet); // Append the bullet to the body
    
//     // Move the bullet upwards continuously
//     let bulletInterval = setInterval(function() {
//         let bulletTop = parseFloat(window.getComputedStyle(bullet).top);
//         bulletTop -= 10; // Move the bullet up by 10 pixels

//         // Update the bullet's position
//         bullet.style.top = bulletTop + 'px';

//         // Remove the bullet if it goes off-screen
//         if (bulletTop < 0) {
//             clearInterval(bulletInterval);
//             bullet.remove(); // Remove the bullet element from the DOM
//         }
//     }, 50); // Update every 50ms for smooth movement
// }


// Initialize variables
const rocket = document.getElementById('rocket');
const chContainer = document.getElementById('ch-container');
const main = document.querySelector('.main');
let chickens = [];
let score = 0;

// Rocket movement logic
document.addEventListener('keydown', function(e) {
    const rocketRect = rocket.getBoundingClientRect();
    if (e.key === 'ArrowLeft' && rocketRect.left > 0) {
        rocket.style.left = rocketRect.left - 20 + 'px';
    }
    if (e.key === 'ArrowRight' && rocketRect.right < window.innerWidth) {
        rocket.style.left = rocketRect.left + 20 + 'px';
    }
    if (e.key === ' ') {
        fireBullet();
    }
});

// Function to fire bullets
function fireBullet() {
    const bullet = document.createElement('img');
    bullet.src = './images/Bullet.png';
    bullet.classList.add('bullet');
    const rocketRect = rocket.getBoundingClientRect();
    bullet.style.left = rocketRect.left + rocketRect.width / 2 - 12.5 + 'px';
    bullet.style.top = rocketRect.top - 25 + 'px';
    document.body.appendChild(bullet);

    let bulletInterval = setInterval(function() {
        let bulletTop = parseFloat(window.getComputedStyle(bullet).top);
        bulletTop -= 10;
        bullet.style.top = bulletTop + 'px';

        if (bulletTop < 0) {
            clearInterval(bulletInterval);
            bullet.remove();
        }

        // Check for collisions with chickens
        chickens.forEach((chicken, index) => {
            if (checkCollision(bullet, chicken)) {
                chicken.remove();
                chickens.splice(index, 1);
                bullet.remove();
                clearInterval(bulletInterval);
                updateScore();
            }
        });
    }, 50);
}

// Function to spawn chickens
function spawnChickens() {
    for (let i = 0; i < 5; i++) {
        const chicken = document.createElement('img');
        chicken.src = './images/Chicken.png';
        chicken.classList.add('chicken-image');
        chicken.style.position = 'absolute';
        chicken.style.top = '0px';
        chicken.style.left = Math.random() * (window.innerWidth - 70) + 'px';
        chContainer.appendChild(chicken);
        chickens.push(chicken);

        // Make the chickens move down slowly
        let chickenInterval = setInterval(function() {
            let chickenTop = parseFloat(window.getComputedStyle(chicken).top);
            chickenTop += 2; // Move down by 2px
            chicken.style.top = chickenTop + 'px';

            // Remove chicken if it goes off-screen
            if (chickenTop > window.innerHeight) {
                clearInterval(chickenInterval);
                chicken.remove();
                chickens.splice(chickens.indexOf(chicken), 1);
            }
        }, 50);
    }
}

// Check collision between bullet and chicken
function checkCollision(bullet, chicken) {
    const bulletRect = bullet.getBoundingClientRect();
    const chickenRect = chicken.getBoundingClientRect();

    return !(
        bulletRect.right < chickenRect.left ||
        bulletRect.left > chickenRect.right ||
        bulletRect.bottom < chickenRect.top ||
        bulletRect.top > chickenRect.bottom
    );
}

// Update the score
function updateScore() {
    score++;
    const scoreboard = document.getElementById('scoreboard');
    if (!scoreboard) {
        const newScoreboard = document.createElement('div');
        newScoreboard.id = 'scoreboard';
        newScoreboard.style.position = 'absolute';
        newScoreboard.style.top = '10px';
        newScoreboard.style.right = '10px';
        newScoreboard.style.color = 'white';
        newScoreboard.style.fontSize = '24px';
        newScoreboard.innerText = `Score: ${score}`;
        document.body.appendChild(newScoreboard);
    } else {
        scoreboard.innerText = `Score: ${score}`;
    }
}

// Initial chicken spawning and game loop
spawnChickens();
setInterval(spawnChickens, 10000); // Spawn new chickens every 10 seconds
