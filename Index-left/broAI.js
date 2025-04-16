// const HF_API_KEY = "";

const text_area = document.querySelector("#Text-area");
const inputText = document.querySelector("#inputText");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const userInput = inputText.value.trim();

  let userMsg = document.createElement("p");
  userMsg.innerHTML = `<b>User:</b> ${userInput}`;
  text_area.appendChild(userMsg);

  fetch(
    "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: userInput,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("🧪 RAW Response:", data);
    })
    .then((data) => {
      console.log("🧪 RAW Response:", data);
      const reply =
        data?.[0]?.generated_text?.trim() || "🫠 no response again bruh";
      let botMsg = document.createElement("p");
      botMsg.innerHTML = `<b>Assistant:</b> ${reply}`;
      text_area.appendChild(botMsg);
    })
    .catch((err) => {
      console.error("🚨 Error:", err);
      text_area.innerHTML += `<p><b>Error:</b> ${err.message}</p>`;
    });

  inputText.value = "";
});
