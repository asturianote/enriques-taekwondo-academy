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

  // Contact form: Cloudflare Turnstile + the site Worker at /api/contact.
  // No email address is ever placed in the page; the Worker holds it server-side.
  var form = document.querySelector("#trial-form");
  if (form) {
    var host = location.hostname;
    var LIVE = /(^|\.)eclipsetaekwondo\.com$/.test(host);
    var LOCAL = host === "localhost" || host === "127.0.0.1";
    var SITEKEY = LIVE ? "0x4AAAAAAGBa5Rvd1bEqSKXz" : "1x00000000000000000000AA"; // second key is Cloudflare's public test key for local previews
    var status = form.querySelector(".form-status");
    var help = form.querySelector(".form-help");
    var btn = form.querySelector("button[type=submit]");
    var label = btn ? btn.textContent : "";
    var widgetId = null;
    var say = function (msg, kind, asHtml) {
      if (!status) return;
      if (asHtml) status.innerHTML = msg; else status.textContent = msg;
      status.className = "form-status is-visible" + (kind ? " is-" + kind : "");
      status.focus();
    };
    var LIVE_LINK = '<a href="https://eclipsetaekwondo.com/contact">eclipsetaekwondo.com</a>';

    if (LIVE || LOCAL) {
      window.onEclipseTurnstile = function () {
        widgetId = window.turnstile.render("#turnstile-slot", { sitekey: SITEKEY, theme: "dark", action: "contact" });
      };
      var ts = document.createElement("script");
      ts.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onEclipseTurnstile";
      ts.async = true; ts.defer = true;
      document.head.appendChild(ts);
    } else {
      // Copies of the site hosted elsewhere (for example GitHub Pages) cannot send. Point people to the real site.
      var slot = document.getElementById("turnstile-slot");
      if (slot) slot.style.display = "none";
      if (help) help.innerHTML = "To send this form, please use it on " + LIVE_LINK + ".";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (!LIVE && !LOCAL) { say("This copy of the site cannot send messages. Please use the form on " + LIVE_LINK + ".", "error", true); return; }
      var data = new FormData(form);
      if (!data.get("cf-turnstile-response")) { say("Please complete the security check above the button, then try again.", "error"); return; }
      btn.disabled = true; btn.textContent = "Sending\u2026";
      fetch("/api/contact", { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok && res.j.ok) { form.reset(); say("Thank you! Your message was sent. We will reply by email soon.", "ok"); }
          else { say((res.j && res.j.error) || "Sorry, something went wrong. Please try again in a few minutes.", "error"); }
        })
        .catch(function () { say("Sorry, we could not reach the server. Please check your connection and try again.", "error"); })
        .then(function () {
          btn.disabled = false; btn.textContent = label;
          if (window.turnstile && widgetId !== null) window.turnstile.reset(widgetId);
        });
    });
  }
})();
