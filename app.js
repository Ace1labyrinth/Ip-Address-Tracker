// script.js

async function trackIP() {
  const ipInput = document.getElementById("ip-input").value;
  const resultDiv = document.getElementById("result");

  if (!ipInput) {
    resultDiv.innerHTML = `<p>Please enter a valid IP address.</p>`;
    return;
  }

  const apiKey = "https://ipinfo.io/8.8.8.8/json/";
  const apiUrl = `https://ipinfo.io/${ipInput}/json/?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = `<p>${data.reason}</p>`;
      return;
    }

    // Display the data
    resultDiv.innerHTML = `
      <div class="result-item"><strong>IP Address:</strong> ${data.ip}</div>
      <div class="result-item"><strong>City:</strong> ${data.city}</div>
      <div class="result-item"><strong>Region:</strong> ${data.region}</div>
      <div class="result-item"><strong>Country:</strong> ${data.country}</div>
      <div class="result-item"><strong>Latitude and Longitude:</strong> ${data.loc}</div>
      <div class="result-item"><strong>Timezone:</strong> ${data.timezone}</div>
      <div class="result-item"><strong>ISP:</strong> ${data.org}</div>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>There was an error retrieving IP data. Please try again later.</p>`;
    console.error("Error fetching IP data:", error);
  }
}
