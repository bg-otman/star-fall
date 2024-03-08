const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Particles {
    constructor() {
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.radians = 1.8;
        this.speed = 0.18;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radians, Math.PI * 2, 0);
        ctx.shadowColor = "whiteSmoke";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "white";
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > this.canvasHeight + this.radians) this.y = 0;
    }
}

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push(new Particles());
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(e => {
        e.draw();
        e.update();
    })
    requestAnimationFrame(animate);
}

animate();