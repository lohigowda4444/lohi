const p = new URLSearchParams(location.search);
const from = p.get("from") || "Someone";
const to = p.get("to") || "Someone";

// Update text content
document.getElementById("from").textContent = from;
document.getElementById("to").textContent = to;
document.getElementById("text").textContent = `Hey ${to} 💕 Will you be my Valentine?`;

// Letter content
document.getElementById("letterRecipient").textContent = `Dear ${to} 💖`;
document.getElementById("letterMessage").innerHTML = `
	Ani's Sweetheart<br><br>
	The life is colourful, joyful, filled with happiness, when I have "my little girl" with me.
	You're an addiction of this addict. Be on the epitome of every addiction of all drugs.
`;

// Get elements
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const toggle = document.getElementById("themeToggle");
const questionSection = document.getElementById("questionSection");
const celebrationSection = document.getElementById("celebrationSection");
const letterSection = document.getElementById("letterSection");
const celebrationText = document.getElementById("celebrationText");
const readLetterYes = document.getElementById("readLetterYes");
const readLetterNo = document.getElementById("readLetterNo");
const envelope = document.getElementById("envelope");

// Theme toggle
const saved = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark", saved === "dark");
toggle.textContent = saved === "dark" ? "☀️" : "🌙";

toggle.onclick = () => {
	const isDark = document.body.classList.toggle("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
	toggle.textContent = isDark ? "☀️" : "🌙";
	navigator.vibrate?.(20);
};

// Question buttons
let scale = 1;

no.onclick = () => {
	scale += 0.22;
	yes.style.transform = `scale(${scale})`;
	navigator.vibrate?.([10, 30]);
};

yes.onclick = () => {
	navigator.vibrate?.([30, 40, 30]);
	
	// Update celebration text
	celebrationText.textContent = `YAAAY 💖 I LOVE YOU ${to.toUpperCase()}!`;
	
	// FORCE SHOW celebration section
	questionSection.style.display = 'none';
	celebrationSection.style.display = 'block';
	
	console.log("YES clicked - celebration should show now");
	console.log("Celebration section display:", celebrationSection.style.display);
};

// Letter prompt buttons
readLetterYes.onclick = () => {
	navigator.vibrate?.([20, 10, 20]);
	
	// FORCE SHOW letter section
	celebrationSection.style.display = 'none';
	letterSection.style.display = 'block';
	
	console.log("Read Letter YES clicked - letter section should show now");
};

readLetterNo.onclick = () => {
	navigator.vibrate?.([10]);
	alert("Please click YES to read the letter! 💕");
};

// Envelope opening
let envelopeOpened = false;

envelope.onclick = () => {
	if (!envelopeOpened) {
		envelope.classList.add('open');
		navigator.vibrate?.([20, 10, 20]);
		envelopeOpened = true;
	}
};

// Falling hearts background
const bg = document.querySelector(".bg-hearts");
setInterval(() => {
	const h = document.createElement("span");
	h.textContent = "💖";
	h.style.left = Math.random() * 100 + "vw";
	h.style.animationDuration = 6 + Math.random() * 6 + "s";
	bg.appendChild(h);
	setTimeout(() => h.remove(), 12000);
}, 450);