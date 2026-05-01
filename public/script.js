// Configure Chart.js for dark mode
Chart.defaults.color = "#b3b3b3";
Chart.defaults.font.family = "'Inter', sans-serif";

fetch("/api/payments")
  .then((res) => res.json())
  .then((data) => {
    const labels = data.map((p) => p.name);

    const chart = new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Fees",
            data: data.map((p) => p.fees),
            backgroundColor: "rgba(255, 99, 132, 0.8)",
            borderRadius: 6,
          },
          {
            label: "Speed",
            data: data.map((p) => p.speed),
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            borderRadius: 6,
          },
          {
            label: "Availability",
            data: data.map((p) => p.availability),
            backgroundColor: "rgba(75, 192, 192, 0.8)",
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)"
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  });

// WhatsApp Share Functionality
function shareOnWhatsApp() {
  const currentUrl = window.location.href;
  const message = `Check out this awesome Payment Comparison Tool! Compare fees, speed, and availability easily.\n\n${currentUrl}`;
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL (works on both mobile app and web)
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank');
}

// Add event listeners to both buttons
document.getElementById('whatsapp-share').addEventListener('click', shareOnWhatsApp);
document.getElementById('whatsapp-share-large').addEventListener('click', shareOnWhatsApp);
