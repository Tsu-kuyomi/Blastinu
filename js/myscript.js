const input = document.getElementById("mainInput");
const quote = document.getElementById("quote");
const increaseButton = document.getElementById("increaseButton");
const reduceButton = document.getElementById("reduceButton");
const ogHolder = document.getElementById("ogHolder");
const downloadButton = document.getElementById("downloadButton");
const createButton = document.getElementById("createButton");
const refreshButton = document.getElementById("refreshButton");



input.addEventListener("input", ()=> {
    quote.innerHTML = input.value
})

function duplicate(){
    html2canvas(document.getElementById("mainQuote")).then(canvas => {
  document.body.appendChild(canvas)
  canvas.id = "canvasele"; });
  const canvasElement = document.querySelector('canvas');
  mainQuote.classList.add('hidden');
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