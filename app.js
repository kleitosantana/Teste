// 🔹 Simulação de API segura
async function verificarKey(key) {
    // No mundo real, seu servidor faria a verificação e só retornaria true/false
    const validKeys = ["ABC123", "XYZ789"]; // Exemplo, substitua por seu backend real
    await new Promise(r => setTimeout(r, 500)); // Simula delay de rede
    return validKeys.includes(key.toUpperCase());
}

// 🔹 ID do dispositivo local
function getDeviceId() {
    let id = localStorage.getItem("deviceId");
    if (!id) {
        id = "dev-" + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("deviceId", id);
    }
    return id;
}

const deviceId = getDeviceId();

// 🔹 Auto login
const savedKey = localStorage.getItem("savedKey");
if (savedKey) {
    document.getElementById("keyInput")?.value = savedKey;
}

// 🔹 Função do botão
async function verificar() {
    const key = document.getElementById("keyInput").value.trim();
    const msg = document.getElementById("msg");

    if (!key) {
        msg.style.color = "#ff0000";
        msg.innerText = "Digite uma key!";
        return;
    }

    const valid = await verificarKey(key);

    if (!valid) {
        msg.style.color = "#ff0000";
        msg.innerText = "Key inválida!";
        return;
    }

    // Salvar local e redirecionar
    localStorage.setItem("savedKey", key);
    msg.style.color = "#00ff00";
    msg.innerText = "Acesso liberado!";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
}
