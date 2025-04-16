const friend_request_container = document.querySelector(
  ".friend-request-container"
);
const friend_request_card = document.querySelector(".friend-request-card");
for (let i = 0; i < 10; i++) {
  const friend_request_clone = friend_request_card.cloneNode(true);
  friend_request_clone.style.display = "block";
  friend_request_clone.querySelector(
    ".friend-avatar"
  ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${i}")`;
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      let person = data.results[0];
      friend_request_clone.querySelector(
        ".friend-name"
      ).innerHTML = `${person.name.first} ${person.name.last}`;
    });
  friend_request_clone.addEventListener("click", () => {
    let image =
      friend_request_clone.querySelector(".friend-avatar").style
        .backgroundImage;
    let name = friend_request_clone.querySelector(".friend-name").innerHTML;
    document.querySelector(".profile-name").innerHTML =
      name +
      `<div class="friend-request-actions d-flex jcc mt-2">
                <button class="btn-confirm">Confirm</button>
                <button class="btn-delete">Delete</button>
              </div>`;
    document.querySelector("#selectProfileImage").style.backgroundImage = image;
    document.querySelector("#selectProfileImage").style.borderRadius = "50%";
    document.querySelector("#selectProfileImage").style.border =
      "2px solid black";
  });
  friend_request_container.appendChild(friend_request_clone);
}
