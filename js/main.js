(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.focus();
      }
    });
  }

  var yr = document.querySelectorAll("[data-year]");
  for (var i = 0; i < yr.length; i++) yr[i].textContent = new Date().getFullYear();

  // Static site: the trial form opens the visitor's email app with the fields filled in.
  var form = document.querySelector("#trial-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var to = form.getAttribute("data-mailto");
      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var group = form.elements["group"].value;
      var msg = form.elements["message"].value.trim();
      var subject = "Free trial class: " + name + " (" + group + ")";
      var body = "Name: " + name + "\nEmail: " + email + "\nStudent age group: " + group +
        "\n\nMessage:\n" + (msg || "(none)") + "\n";
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      var status = document.querySelector(".form-status");
      if (status) { status.classList.add("is-visible"); status.focus(); }
    });
  }
})();
