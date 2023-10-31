window.onload = init

function init(){
    const greenBtn = document.getElementById("greetBtn")
    greenBtn.onclick = onGreenBtnClicked
}

function onGreenBtnClicked(){
    alert("Hello Human");
    const userText = document.getElementById("nameField")
    alert("Hello " + userText.value)
}
