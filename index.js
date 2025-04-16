const contact_containers = document.querySelectorAll(".contact-container");
const friend_template = document.querySelector(".friend-template");

let randomSeed = 1;

const friends = [
  "BIJAY CHETTRI",
  "CHETAN TIMSINA",
  "CHIMI GYELTSHEN",
  "CHONEY RANGDEL",
  "DAMBER KHATIWARA",
  "DORJI GYELTSHEN",
  "GYELTSHEN LEPCHA",
  "JIGME TSHERAB DAMCHOE",
  "JIGME TSHEWANG YOEZER",
  "KARMA SONAM",
  "KARMA WANGCHUK TITUNG",
  "KELZANG PENJOR",
  "KEZANG TSHOMO",
  "KINLEY PHUNTSHO",
];

for (let i = 0; i < 14; i++) {
  contact_containers.forEach((contact_container) => {
    const friendClone = friend_template.cloneNode(true); // move clone inside
    friendClone.style.display = "flex"; // or whatever makes it visible
    friendClone.querySelector(".contact-name").textContent = friends[i];
    friendClone.querySelector(
      ".box-right-icon"
    ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
    randomSeed++;
    contact_container.appendChild(friendClone);
  });
}
