document.getElementById("joinButton").addEventListener("click", function () {
  const email = document.getElementById("emailInput").value;

  if (email) {
    // Example: Sending email to a server (replace with your API endpoint)
    fetch("https://n8n-test01.onrender.com/webhook-test/b191bfdf-8ff4-470d-b74f-55d101964422", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for subscribing!");
        } else {
          alert("Failed to subscribe. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  } else {
    alert("Please enter a valid email address.");
  }
});