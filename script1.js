const output = document.querySelector("#output");
const green = document.querySelector("#f-27");
const red = document.querySelector("#f-87");
const red1 = document.querySelector("#f-97");

const radioButtons = document.querySelectorAll('input[name="n-day"]');

green.addEventListener("click", function () {
  output.innerHTML = ` <p>!!معلوماتك الوطنية رائعة </p>`;
});

red.addEventListener("click", function () {
  output.innerHTML = ` <p style="color:#A32B38" >إجابة خاطئة مرت الدوله السعودية بثلاث مراحل</p>`;
});

red1.addEventListener("click", function () {
  output.innerHTML = ` <p style="color:#A32B38">إجابة خاطئة مرت الدوله السعودية بثلاث مراحل</p>`;
  
});



