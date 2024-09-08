// hold containers
const rocket = document.getElementById('rocket');
const rocketcontainer = document.getElementById('r-container');
const chickenContainer = document.getElementById('ch-container');



// create chicken images
let chickenImage = './images/Chicken.png'
for (let i = 0; i < 45; i++) {
    const chicken = document.createElement('img');    // create new img element
    chicken.src = chickenImage;                              // add src value to img
    chicken.classList.add('chicken-image');           // add class attribute with value
    chickenContainer.appendChild(chicken);                  // add as child div for container
    console.log(chicken.getBoundingClientRect())
}




// move the rocket
let xaxis = parseFloat(window.getComputedStyle(rocket).left);
let yaxis = parseFloat(window.getComputedStyle(rocket).top);
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
            xaxis = boundaryX; 
        }
        rocket.style.left = xaxis + 'px';

    } else if (e.key === 'ArrowLeft') {
        xaxis -= 10;
        if (xaxis < 0) {
            xaxis = 0; 
        }
        rocket.style.left = xaxis + 'px';

    } else if (e.key === 'ArrowDown') {
        yaxis += 10;
        if (yaxis > boundaryY) {
            yaxis = boundaryY; 
        }
        rocket.style.top = yaxis + 'px';

    } else if (e.key === 'ArrowUp') {
        yaxis -= 10;
        if (yaxis < 0) {
            yaxis = 0;
        }
        rocket.style.top = yaxis + 'px';
    }
});

// fire the bullet

document.addEventListener('keydown',function(e) {
    if (e.key === ' ')
    {
        firebullet();
    }
})

function firebullet () {
    const bullet = document.createElement('img');
    bullet.src = '/images/Bullet.png';
    bullet.classList.add('bullet');
    bullet.setAttribute('id', 'bullet');
    document.body.appendChild(bullet)

    let rocketPosition = rocket.getBoundingClientRect();
    bullet.style.top = rocketPosition.top - 10 + 'px'
    bullet.style.left = rocketPosition.left + 38 + 'px'

    let interval = setInterval(function() {
        let bulletPosition = bullet.getBoundingClientRect();
        let bulletTop = bulletPosition.top
        bulletTop -= 10
        bullet.style.top = bulletTop + 'px'
        // checkCollision(bullet)

        if (bulletTop < 0)
        {
            clearInterval(interval);
            bullet.remove()
        }
    }, 50)
}