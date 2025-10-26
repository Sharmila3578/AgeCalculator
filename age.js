function calculateAge() {
    const birthday = document.getElementById('birthday').value;
    const result = document.getElementById('result');

    if (!birthday) {
      result.textContent = "Please enter your date of birth.";
      result.style.color = "red";
      return "Please enter your date of birth."; // ? return string for test
    }

    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const message = `You are ${age} years old.`; // ? store output
    result.textContent = message;
    result.style.color = "green";
    return message; // ? return string for Jest test
  }

  document.getElementById('btn').addEventListener('click', calculateAge);
