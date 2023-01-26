const mouth = document.getElementById("mouth");
const emotionElements = document.querySelectorAll(".rating-container div")

function selectEmotion(e){
  console.log(e.target.id)
}

emotionElements.forEach(emotionElement => emotionElement.addEventListener("click", selectEmotion))