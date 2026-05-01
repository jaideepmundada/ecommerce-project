const express = require("express");
const os = require("os");
const app = express();

app.use(express.static("public"));

// Sample Data
const payments = [
  { name: "UPI", fees: 0, speed: 5, availability: 5 },
  { name: "Net Banking", fees: 2, speed: 3, availability: 4 },
  { name: "Credit Card", fees: 3, speed: 4, availability: 5 },
];

app.get("/api/payments", (req, res) => {
  res.json(payments);
});

// Function to get the local IP address
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  const ip = getLocalIp();
  console.log(`\n🚀 Server is running!`);
  console.log(`📱 Access on your phone: http://${ip}:${PORT}`);
  console.log(`💻 Access on this PC: http://localhost:${PORT}\n`);
});
