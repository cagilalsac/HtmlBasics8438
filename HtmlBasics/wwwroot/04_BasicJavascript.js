function adSoyadBirlestir() {
    var adTextBox = document.getElementById("tbAd");
    var ad = adTextBox.value;
    var soyad = document.getElementById("tbSoyad").value;
    var adSoyadP = document.getElementsByClassName("sonuc")[0];
    console.log(adTextBox);
    adSoyadP.innerHTML = ad + " " + soyad;
}