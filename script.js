function generateCV() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  document.getElementById("preview-name").textContent =
    name || "Syed Yavar Ahmed";

  document.getElementById("preview-contact").textContent =
    `${email || "Email"} | ${phone || "Phone"} | ${address || "Address"}`;

  document.getElementById("preview-education").textContent =
    education || "Your education will appear here.";

  document.getElementById("preview-skills").textContent =
    skills || "Your skills will appear here.";

  document.getElementById("preview-experience").textContent =
    experience || "Your experience will appear here.";
}
