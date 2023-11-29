const input = document.getElementById("mainInput");
const quote = document.getElementById("quote");
const downloadButton = document.getElementById("downloadButton");
const createButton = document.getElementById("createButton");
const refreshButton = document.getElementById("refreshButton");
const img = document.getElementById("img");
const mainD = document.getElementById("mainD");
const wordCount = document.getElementById("wordCount");



input.addEventListener("input", ()=> {
    quote.innerHTML = input.value;
    wordCount.innerHTML = ("Word Count: " + input.value.length + "/" + "330.");
    const currentText = input.value;

        if (currentText.length > 330) {
            input.value = currentText.substring(0, 330); // Trim the text to the specified length
        }
})

function duplicate(){
    html2canvas(img).then(canvas => {
  document.body.appendChild(canvas)
  canvas.id = "canvasele"; });
  const canvasElement = document.querySelector('canvas');
  mainD.classList.add('hidden');
  createButton.classList.add('hidden');
  downloadButton.classList.remove('hidden');
  }
  
  function downloadImage() {
    let canvas = document.getElementById("canvasele");
    var dataURL = canvas.toDataURL("image/png");
    var a = document.createElement('a');
    a.href = dataURL
    a.download = 'Image.png';
    a.click();
    downloadButton.classList.add('hidden');
    refreshButton.classList.remove('hidden')
    }

function refresh(){
    location.reload();
}

// increaseButton.addEventListener("click", ()=> {
//     const currentFontSize = window.getComputedStyle(quote, null).getPropertyValue('font-size');
//     const fontSize = parseFloat(currentFontSize);
//     fontSize+=0.1;
   
//     quote.style.fontSize = fontSize + 'rem';
// })