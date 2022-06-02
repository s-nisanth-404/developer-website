document.addEventListener("DOMContentLoaded", () => {
  //header
  anime({
    targets: "header",
    translateY: [-500, 0],
    duration: 1000,
  });
  anime({
    targets: "nav ul li",
    translateY: [-500, 0],
    delay: anime.stagger(250),
    duration: 1000,
  });
  //Social
  anime({
    targets: ".social-wrapper ul a",
    translateX: [-500, 0],
    delay: function (el, i, l) {
      return 1000 + i * 150;
    },
    easing: "easeOutExpo",
    duration: 1500,
  });
  anime({
    targets: ".social-wrapper ul a li svg",
    opacity: [0, 1],
    delay: function (el, i, l) {
      return 2000 + i * 150;
    },
    easing: "easeOutExpo",
    duration: 1500,
  });

  anime({
    targets: "#logo path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
  });

  //Nisanth Letter
  var allText = document.querySelector(".one .letters");
  allText.innerHTML = allText.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime({
    targets: ".one .letter",
    translateY: ["2em", 0],
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 1000 + 50 * i,
  });

  //Web Developer & Web Designer Letter
  var textWrapper = document.querySelector(".RegardingMe");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({}).add({
    targets: ".RegardingMe .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 500 + 30 * i,
  });
});

const nav = document.querySelector("header");
let lastScrollTop = 0;
let navBarWidth = true;
const hamburger = document.querySelector(".hamburger");
const fixed = document.querySelector(".fixed");
window.addEventListener(
  "scroll",
  () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      nav.style.transition = "all 0.25s ease";
      nav.style.position = "sticky";
      nav.style.top = "-15%";
    } else {
      nav.style.position = "sticky";
      nav.style.transition = "all 0.25s ease";
      nav.style.top = 0;
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

const showFunction = () => {
  document.querySelector(".social-wrapper").style.display = "flex";
  hamburger.classList.toggle("change");
  document.body.style.overflow = "auto";
  fixed.style.width = "0%";
  navBarWidth = true;
  document.querySelectorAll(".ul-mobile-links a").forEach((a) => {
    a.style.display = "none";
  });
};

hamburger.addEventListener("click", () => {
  if (navBarWidth) {
    hamburger.classList.toggle("change");
    fixed.style.width = "100%";
    navBarWidth = false;
    document.body.style.overflow = "hidden";
    document.querySelector(".social-wrapper").style.display = "none";
    document.querySelectorAll(".ul-mobile-links a").forEach((a) => {
      a.style.display = "block";
    });
    anime({
      targets: ".ul-mobile-links a",
      opacity: [0, 1],
      delay: function (el, i, l) {
        return 500 + i * 250;
      },
      duration: 1500,
    });
  } else {
    showFunction();
  }
});

document.querySelectorAll(".links").forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelectorAll(".myLink").forEach((allLi) => {
      allLi.style.color = "rgba(0, 0, 0, 0.6)";
      allLi.classList.remove("noUnderLine");
    });
    e.target.style.color = "rgb(110, 87, 224)";
    e.target.classList.add("noUnderLine");
  });
});

document.querySelectorAll(".ul-mobile-links").forEach((link) => {
  link.addEventListener("click", (e) => {
    showFunction();
  });
});

document.querySelectorAll(".mySocialLink").forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    e.target.style.background = "white";
    e.target.children[0].style.fill = "#6e57e0";
  });

  link.addEventListener("mouseout", (e) => {
    e.target.style.background = "#6e57e0";
    e.target.children[0].style.fill = "white";
  });
});

//email

//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
  access_token: "a8k1su9fn926c4qmojkyaqkz",
};

function js_onSuccess() {
  setTimeout(() => {
    document.querySelector(".notification").style.right = "calc(100vh - 300vh)";
  }, 10000);

  setTimeout(() => {
    document.querySelector(".notification").innerHTML = "";
  }, 11000);

  document.querySelector(".notification").style.right = "calc(100vh - 95vh)";
  document.querySelector(".notification").innerHTML = `
  <div class="newNotification" style="background: lightgreen">
  <h2 class="king" style="text-align: center; color: white;">Message Sended Successfully</h2>
  </div>`;

  sendButton.value = "Send";
  sendButton.disabled = false;
  document.querySelector("#" + form_id_js + " [name='email']").value = "";
  document.querySelector("#" + form_id_js + " [name='subject']").value = "";
  document.querySelector("#" + form_id_js + " [name='text']").value = "";
}

function js_onError() {
  setTimeout(() => {
    document.querySelector(".notification").style.right = "calc(100vh - 300vh)";
  }, 10000);
  setTimeout(() => {
    document.querySelector(".notification").innerHTML = "";
  }, 11000);

  document.querySelector(".notification").style.right = "calc(100vh - 95vh)";
  document.querySelector(".notification").innerHTML = `
  <div class="newNotification" style="background: red">
  <h2 class="queen" style="color: white; text-align: center;">Please enter your correct email address or contact to <a href="mailto:LastCodeMachine@gmail.com" style="color: white">LastCodeMachine@gmail.com</a></h2>
  </div>`;
}

var sendButton = document.getElementById("js_send");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

sendButton.addEventListener("click", () => {
  if (
    validateEmail(
      document.querySelector("#" + form_id_js + " [name='email']").value.trim()
    )
  ) {
    sendButton.value = "Sending…";
    sendButton.disabled = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        js_onSuccess();
      } else if (request.readyState == 4) {
        js_onError();
      }
    };

    var subject =
      document
        .querySelector("#" + form_id_js + " [name='email']")
        .value.trim() +
      " - " +
      document.querySelector("#" + form_id_js + " [name='subject']").value;
    var message = document.querySelector(
      "#" + form_id_js + " [name='text']"
    ).value;
    data_js["subject"] = subject;
    data_js["text"] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    request.send(params);

    return false;
  } else {
    js_onError();
  }
});

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
    );
  }

  return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
  e.preventDefault();
});

window.addEventListener("scroll", () => {
  let animationText = document.querySelectorAll(".animator");
  animationText.forEach((animation) => {
    let animationPosition = animation.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.2;

    if (animationPosition <= screenHeight) {
      animation.classList.add("animationText");
    }
    if (animationPosition >= screenHeight) {
      animation.classList.remove("animationText");
    }
  });
});
