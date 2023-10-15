function submitform(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const firsttime = document.querySelectorAll("input[name='first-time']:checked");
  const needsuggestion = document.querySelectorAll("input[name='needsuggestion']:checked");
  const satisfaction = document.querySelectorAll("input[name='satisfaction']:checked");
  const suggestion = document.getElementById("suggestion").value;
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  const regName = /\d+$/g;
  const x =Array.from(needsuggestion).map(item => item.value).join(", ");
  const y = Array.from(firsttime).map(item => item.value).join(", ");
  const z = Array.from(satisfaction).map(item => item.value).join(", ");
  console.log(x);
  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
  }
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (x==""){
    window.alert("Please fill the form completely");
    needsuggestion.focus();
    return false;
  }
  if (z==""){
    window.alert("Please  fill the form completely");
    satisfaction.focus();
    return false;
  }
  if (y==""){
    window.alert("Please  fill the form completely");
    satisfaction.focus();
    return false;
  }
  document.getElementById("remail").innerHTML = email;
  document.getElementById("rname").innerHTML = name;
  document.getElementById("rneedsuggestion").innerHTML = Array.from(needsuggestion).map(item => item.value).join(", ");
  document.getElementById("rtime").innerHTML = Array.from(firsttime).map(item => item.value).join(", ");
  document.getElementById("rsuggestion").innerHTML = suggestion;
  document.getElementById("rsatisfaction").innerHTML = Array.from(satisfaction).map(item => item.value).join(", ");
  document.getElementById("popup").style.display = "block";
}
function resetform() {
  document.getElementById("form").reset();
  closePopup();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetform();
}