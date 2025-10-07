async function sendMessage() {
  const userMessage = document.getElementById("input").value;
  const res = await fetch("https://chatbot-van.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage })
  });
  const data = await res.json();
  document.getElementById("chat").innerHTML += `<p>${data.reply}</p>`;
}
