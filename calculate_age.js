function calculateAge() {
  const today = new Date(document.getElementById("today").value);
  const birth = new Date(document.getElementById("birthday").value);

  if (!today || !birth) {
    document.getElementById("result").innerText = "Please select both dates";
    return;
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerText =
    `Age: ${years} years, ${months} months, ${days} days`;
}
