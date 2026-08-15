onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    sessionStorage.setItem("visitedPage2", "true");
  };

  document.addEventListener("DOMContentLoaded", function () {
  const secretBtn = document.getElementById("secretBtn");

  if (secretBtn) {
    secretBtn.addEventListener("click", function () {
      window.location.href = "page3.html";
    });
  }
});



  