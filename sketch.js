function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let carroX = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(200, 255, 255); // Céu claro

  drawCampo();
  drawCidade();
  drawEstrada();
  drawCarro();

  // Movimento do carro
  carroX += 2;
  if (carroX > width) {
    carroX = -100;
  }
}

function drawCampo() {
  // Grama
  fill(34, 139, 34);
  rect(0, 300, width / 2, 100);

  // Sol
  fill(255, 204, 0);
  ellipse(80, 80, 60);

  // Casa da fazenda
  fill(210, 105, 30);
  rect(100, 220, 80, 60);
  fill(150, 75, 0);
  triangle(100, 220, 140, 180, 180, 220);

  // Árvore
  fill(139, 69, 19);
  rect(200, 240, 10, 60);
  fill(34, 139, 34);
  ellipse(205, 230, 40);
}

function drawCidade() {
  // Prédios
  fill(180);
  for (let i = 0; i < 3; i++) {
    rect(500 + i * 60, 180 - i * 20, 40, 120 + i * 20);

    // Janelas
    fill(255, 255, 102);
    for (let j = 0; j < 4; j++) {
      rect(505 + i * 60, 190 + j * 20 - i * 10, 10, 10);
      rect(520 + i * 60, 190 + j * 20 - i * 10, 10, 10);
    }
    fill(180); // Reset fill
  }

  // Asfalto urbano
  fill(50);
  rect(width / 2, 300, width / 2, 100);
}

function drawEstrada() {
  fill(50);
  rect(0, 330, width, 40);

  // Faixas amarelas
  stroke(255, 255, 0);
  strokeWeight(2);
  for (let x = 0; x < width; x += 40) {
    line(x, 350, x + 20, 350);
  }
  noStroke();
}

function drawCarro() {
  // Caminhão simples
  fill(255, 0, 0);
  rect(carroX, 310, 60, 20);
  fill(0);
  ellipse(carroX + 10, 330, 15);
  ellipse(carroX + 50, 330, 15);
}
