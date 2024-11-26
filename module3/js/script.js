// Smooth Scroll for "Back to Top" Links
document.querySelectorAll(".back-to-top").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
    });
  });
  