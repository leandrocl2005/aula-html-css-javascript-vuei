function showRoberta() {
  document.querySelector('#p-eduardo').style.display = "none";
  document.querySelector('#p-roberta').style.display = "block";

  document.querySelector('#img-eduardo').style.display = "none";
  document.querySelector('#img-roberta').style.display = "block";
}

function showEduardo() {
  document.querySelector('#p-eduardo').style.display = "block";
  document.querySelector('#p-roberta').style.display = "none";

  document.querySelector('#img-eduardo').style.display = "block";
  document.querySelector('#img-roberta').style.display = "none";
}

function modelSVC(radiusMean, textureMean, perimeterMean, smoothnessMean) {
  if (radiusMean + textureMean + 3 * perimeterMean - 4* smoothnessMean > 0) {
    return true;
  }
  return false;
}


document.querySelector('.img__btn').addEventListener('click', 
  function() {

    /* selecionar inputs */
    const inputRadiusMean = document.querySelector('#input-radius-mean');
    const inputTextureMean = document.querySelector('#input-texture-mean');
    const inputPerimeterMean = document.querySelector('#input-perimeter-mean');
    const inputSmoothnessMean = document.querySelector('#input-smoothness-mean');

    /* verificar se estão preenchidos */
    if (!inputPerimeterMean.value) {
      alert("Preencha todos os campos")
      return;
    } else if (!inputSmoothnessMean.value) {
      alert("Preencha todos os campos")
      return;
    } else if (!inputTextureMean.value) {
      alert("Preencha todos os campos")
      return;
    } else if (!inputRadiusMean.value) {
      alert("Preencha todos os campos")
      return;
    }

    /* guardar valores dos inputs em respectivas variaveis */
    const radiusMean = inputRadiusMean.value;
    const textureMean = inputTextureMean.value;
    const smoothnessMean = inputSmoothnessMean.value;
    const perimeterMean = inputPerimeterMean.value;


    /* mudar página */
    document.querySelector('.cont').classList.toggle('s--signup');

    /* mostrar especialista de acordo com modelo */
    if (modelSVC(radiusMean, textureMean, perimeterMean, smoothnessMean) ) {
      showEduardo();
    } else {
      showRoberta();
    }
  }
);