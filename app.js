// 🔹 Simulação de backend seguro
const validKeys = ["ABC123", "XYZ789"]; // Troque para suas keys reais

function getDeviceId() {
  let id = localStorage.getItem("deviceId");
  if (!id) {
    id = "dev-" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("deviceId", id);
  }
  return id;
}

const deviceId = getDeviceId();

// Auto-login
const savedKey = localStorage.getItem("savedKey");
if (savedKey) {
  document.getElementById("keyInput")?.value = savedKey;
}

function verificar() {
  const key = document.getElementById("keyInput").value.trim();
  const msg = document.getElementById("msg");

  if (!key) {
    msg.style.color = "#ff3b3b";
    msg.innerText = "Digite uma key!";
    return;
  }

  // Simula delay de verificação
  setTimeout(() => {
    if (!validKeys.includes(key.toUpperCase())) {
      msg.style.color = "#ff3b3b";
      msg.innerText = "Key inválida!";
      return;
    }

    localStorage.setItem("savedKey", key);
    msg.style.color = "#00ff99";
    msg.innerText = "Acesso liberado!";

    // Redireciona para home.html
    setTimeout(() => {
      window.location.href = "home.html";
    }, 800);
  }, 500);
}
