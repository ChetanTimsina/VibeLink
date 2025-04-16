let randomSeed = new Date().getTime();

// This function is for the friend Request

const friendTemplate = document.querySelector(".friend-container");
const friendContainer = document.querySelector("#friend-container-area");
for (let i = 0; i < 12; i++) {
  const friendClone = friendTemplate.cloneNode(true);
  friendClone.style.display = "block";
  friendClone.querySelector(
    ".friend-image"
  ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
  friendContainer.appendChild(friendClone);
  randomSeed++;
}

// This function is for the friend Suggestion

const friendSuggestTemplate = document.querySelector(".friend-container-2");
const friendSuggestContainer = document.querySelector(
  "#friend-container-area-2"
);
for (let i = 0; i < 12; i++) {
  const friendSuggestClone = friendSuggestTemplate.cloneNode(true);
  friendSuggestClone.style.display = "block";
  friendSuggestClone.querySelector(
    ".friend-image"
  ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
  friendSuggestContainer.appendChild(friendSuggestClone);
  randomSeed++;
}
