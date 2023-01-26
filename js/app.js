const body = document.querySelector("body")
const face = document.getElementById("face");
const leftEye = document.getElementById("left-eye");
const rightEye = document.getElementById("right-eye");
const mouth = document.getElementById("mouth");
const emotionElements = document.querySelectorAll(".rating-container div");

function resetFace(){
  face.classList.remove("angry-face", "joyful-face")
  mouth.classList.remove("awful-mouth", "bad-mouth", "okay-mouth", "happy-mouth", "great-mouth");
  leftEye.classList.remove("awful-eye", "great-eye")
  rightEye.classList.remove("awful-eye", "great-eye")
}

function selectEmotion(e){
  resetFace();  
  const chosenEmotion = e.target.id;

  if(chosenEmotion === "awful"){
    body.style.backgroundColor = "rgb(216, 71, 71)"
    face.classList.add("angry-face");
    mouth.classList.add("awful-mouth");
    leftEye.classList.add("awful-eye");
    rightEye.classList.add("awful-eye");
  }

  
  if(chosenEmotion === "bad"){
    body.style.backgroundColor = "rgb(216, 168, 71)";
    mouth.classList.add("bad-mouth");
  }

  if(chosenEmotion === "okay"){
    body.style.backgroundColor = "rgb(201, 216, 71)";
    mouth.classList.add("okay-mouth");
  }

  if(chosenEmotion === "good"){
    body.style.backgroundColor = "rgb(73, 216, 71)";
    mouth.classList.add("happy-mouth");
  }

  if(chosenEmotion === "great"){
    body.style.backgroundColor = "rgb(71, 119, 216)";
    face.classList.add("joyful-face");
    mouth.classList.add("great-mouth");
    leftEye.classList.add("great-eye");
    rightEye.classList.add("great-eye");
  }


}

emotionElements.forEach(emotionElement => emotionElement.addEventListener("click", selectEmotion))