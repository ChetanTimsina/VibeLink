$(document).ready(() => {
  // Random Seed will be used to generate random images later
  let randomSeed = new Date().getTime();

  $("#account-container").hide();
  $("#notification-container").hide();
  $("#messenger-container").hide();
  $("#Notification").click(() => {
    $("#notification-container").toggle();
    $("#account-container").hide();
    $("#messenger-container").hide();
  });
  $("#Account").click(() => {
    $("#account-container").toggle();
    $("#notification-container").hide();
    $("#messenger-container").hide();
  });
  $("#Messenger").click(() => {
    $("#account-container").hide();
    $("#notification-container").hide();
    $("#messenger-container").toggle();
  });

  $("#main-container").click(() => {
    $("#account-container").hide();
    $("#notification-container").hide();
    $("#messenger-container").hide();
  });

  $("#box-left").sortable();

  // Random images for the right icon
  for (let i = 1; i <= 15; i++) {
    $(`.right-icon-${i}`).css(
      "background-image",
      `url("https://i.pravatar.cc/100?u=${randomSeed}")`
    );
    randomSeed++;
  }

  for (let i = 1; i <= 8; i++) {
    const randomSeed = Math.floor(Math.random() * 100000);
    $(`#story-${i}`).css(
      "background-image",
      `url("https://picsum.photos/360/640?random=${randomSeed}")`
    );
  }

  // Post duplication and image randomization
  const postTemplate = document.querySelector(".post-container");
  const postContainer = document.querySelector("#post-container-area");

  for (let i = 0; i < 10; i++) {
    const postClone = postTemplate.cloneNode(true);
    postClone.querySelector(
      ".post-image"
    ).src = `https://picsum.photos/800/600?random=${randomSeed}`;
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        let person = data.results[0];
        postClone.querySelector(
          ".post-name"
        ).innerHTML = `${person.name.first} ${person.name.last}`;
        postClone.querySelector(
          "#post-icon"
        ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
        randomSeed++;
      });

    // Something is hampering the click event here, fix it later

    // document.querySelector(".wrong-icon").addEventListener("click", () => {
    //   postClone.style.display = "none";
    // });
    // $(".wrong-icon").click(() => {
    //   $("this").parent().parent().hide();
    // });

    postContainer.appendChild(postClone);
    randomSeed++;
  }

  for (let i = 1; i <= 3; i++) {
    $(`.react-${i}`).css(
      "background-image",
      `url("Images/reaction/react-${i}.jpg")`
    );
  }
});
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGRmZjRmOWFjYmMxOWQ4YWFhNjgxNGU2OWMxYzA5NSIsIm5iZiI6MTc0NDY0NzIwMC44NTMsInN1YiI6IjY3ZmQzNDIwZGU1ZTRkZWM2MmFlNDE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gSs7Lykhd0Ln0Ry0NYmREu-RQ49MdqkalEp04zykkI",
  },
};
