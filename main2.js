// Stop this page's music if another same-origin tab (e.g. the memories
// page's Play Video button) asks everyone to go quiet.
if ("BroadcastChannel" in window) {
    const audioChannel = new BroadcastChannel("labidabs-audio");
    audioChannel.onmessage = (e) => {
        if (e.data === "stop") {
            const happyMusic = document.getElementById("happyMusic");
            const sadMusic = document.getElementById("sadMusic");
            if (happyMusic) happyMusic.pause();
            if (sadMusic) sadMusic.pause();
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");

    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }

    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });

  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";

    absImg.style.display = "flex";

    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";

    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }

  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];

  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];

  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }

  let counter = 0;

  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }

  function yes() {
    if (counter >= 3) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "We are each other's valentine now. I love you cuttiepatootie. ❤️😘";

        // Open index1.html in a new tab
        window.open("index1.html", "_blank");

    } else {
        showAlert("Don't say yes right away, cutie. Play around a bit, be hard to get 😉😘");
    }
}


  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.innerText = message;
  alertBox.style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}




// Show secret button if page 2 was visited
window.addEventListener("load", function () {
  if (sessionStorage.getItem("visitedPage2") === "true") {
    document.getElementById("page3Btn").style.display = "block";
  }
});

// Go to page 3 when clicked
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("page3Btn");
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "page3.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const popup = document.getElementById("popupMessage");
    const closeBtn = document.getElementById("closePopup");

    envelope.addEventListener("click", () => {
        popup.style.display = "flex"; // show popup
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none"; // hide popup
    });

    // Optional: close if clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
