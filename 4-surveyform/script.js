function submitform() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const firsttime = document.querySelectorAll("input[name='first-time']:checked");
    const needsuggestion = document.querySelectorAll("input[name='needsuggestion']:checked");
    const satisfaction = document.querySelectorAll("input[name='satisfaction']:checked");
    const suggestion = document.getElementById("suggestion").value;
const response = `
Name: ${name}
Email: ${email}
sugg: ${suggestion}
`;

document.getElementById("response").textContent = response;
document.getElementById("popup").style.display = "block";
}
function resetform() {
    document.getElementById("form").reset();
  }

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetform();
  }