const fs = require("fs");

const envContent = fs.readFileSync(".env", "utf-8");
const lines = envContent.split("\n");
const tokenLine = lines.find(
  (l) => l.startsWith("SANITY_TOKEN=") && !l.startsWith("#"),
);

if (tokenLine) {
  const token = tokenLine.replace("SANITY_TOKEN=", "");
  console.log("Token length:", token.length);
  console.log("Token starts with:", token.substring(0, 20));
  console.log("Token ends with:", token.substring(token.length - 20));
  console.log("Has newlines:", token.includes("\n"));
  console.log("Has spaces:", token.includes(" "));
  console.log("\nExpected length for Sanity token: ~180-200 characters");
  console.log("Actual token (first 50 chars):", token.substring(0, 50));
} else {
  console.log("No SANITY_TOKEN found");
}
