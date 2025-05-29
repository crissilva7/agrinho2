function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
function setup() {
  createCanvas(800, 400);
}

function draw() {
  let t = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  
  // Céu
  let skyColor = lerpColor(color(135, 206, 235), color(180, 180, 180), t); // Azul para preto
  background(skyColor);

  drawGround(t);
  drawNature(t);
  drawCity(t);
  drawMessage(t);
}

function drawGround(t) {
  let groundColor = lerpColor(color(50, 200, 70), color(120), t);
  fill(groundColor);
  noStroke();
  rect(0, height * 0.7, width, height * 0.3);
}

function drawNature(t) {
  // Árvore (aparece no lado esquerdo, desaparece com t)
  push();
  let treeX = width * 0.25;
  let treeAlpha = map(1 - t, 0, 1, 0, 255);
  fill(139, 69, 19, treeAlpha);
  rect(treeX, 220, 20, 80); // Tronco
  fill(34, 139, 34, treeAlpha);
  ellipse(treeX + 10, 200, 80, 80); // Copa
  pop();
}

function drawCity(t) {
  // Prédios (aparecem no lado direito com o tempo)
  let buildingColor = lerpColor(color(200), color(80), t);
  let maxBuildings = 5;

  for (let i = 0; i < maxBuildings; i++) {
    let x = width * 0.5 + i * 60;
    let h = 100 + i * 20;
    let alpha = map(t, 0, 1, 0, 255);

    rect(x, height * 0.7 - h, 40, h);
  }
}

function drawMessage(t) {
  fill(0);
  textSize(18);
  textAlign(CENTER);
  
  if (t < 0.3) {
    text("Campo: natureza, vida simples e verde escuro", width / 2, 30);
  } else if (t < 0.7) {
    text("Transição: do campo para a cidade", width / 2, 30);
  } else {
    text("Cidade: modernidade, desafios e oportunidades", width / 2, 30);
  }
}

