const $ = document;
const userName = $.getElementById("userInput");
const passWord = $.getElementById("passInput");
const leftEye = $.getElementById("lefteye");
const rightEye = $.getElementById("righteye");

userName.addEventListener("focus", () => {
  leftEye.style.left = "99px";
  leftEye.style.paddingTop = "10px";
  rightEye.style.left = "163px";
  rightEye.style.paddingTop = "10px";
});
userName.addEventListener("blur", () => {
  leftEye.style.left = "110px";
  leftEye.style.paddingTop = "0px";
  rightEye.style.left = "174px";
  rightEye.style.paddingTop = "0px";
});
userName.addEventListener("keyup", () => {
  console.log(userName.value.length);
  let leftEyeMove = 99 + userName.value.length;
  let rightEyeMove = 163 + userName.value.length;

  leftEye.style.left = `${leftEyeMove}px`;
  rightEye.style.left = `${rightEyeMove}px`;
});
passWord.addEventListener("focus", () => {
    leftEye.style.left = "128px";
  leftEye.style.top = "60px";
  rightEye.style.left = "155px";
  rightEye.style.top = "60px";
})
passWord.addEventListener("blur", () => {
    leftEye.style.left = "110px";
    leftEye.style.top = "75px";
    rightEye.style.left = "174px";
    rightEye.style.top = "75px";
})