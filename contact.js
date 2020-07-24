$(document).ready(() => {
  const form = $("#contactForm");

  $("#contactForm").submit(() => {
    event.preventDefault();
    const name = $("#inName").val().trim();
    const email = $("#inEmail").val().trim();
    const message = $("#inMessage").val().trim();

    const emailJSON = {
      name: name,
      email: email,
      message: message
    };

    console.log(name, email, message);
    $.ajax({
      url: "https://formspree.io/mqkywdyq",
      method: "post",
      data: emailJSON,
      dataType: "json"
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  });
});