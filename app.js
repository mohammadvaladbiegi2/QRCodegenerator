let qrtext = document.getElementById("qrtext");
let imgBox = document.getElementById("imgBox");
let qrimag = document.getElementById("qrimag");
function qrcodegenerator() {
  if (qrtext.value.length) {
    qrimag.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imgBox.classList.add("show");
  } else {
    qrtext.classList.add("error");
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1000);
  }
}

function downloadImage() {
  var xhr = new XMLHttpRequest();

  xhr.responseType = "blob";

  xhr.onload = function () {
    if (xhr.status === 200) {
      var blob = new Blob([xhr.response], { type: "image/png" });

      var link = document.createElement("a");

      link.download = "image.png";

      link.href = window.URL.createObjectURL(blob);

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  };
  xhr.open("GET", qrimag.src);

  xhr.send();
}

function refreshqr() {
  qrimag.src = "";
  qrtext.value = "";
  imgBox.classList.remove("show");
}
