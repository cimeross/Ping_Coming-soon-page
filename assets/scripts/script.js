const emailInput = document.getElementById("email");
const submitButton = document.getElementById("button");
const errorMsg = document.getElementById("errorMsg");

const validateEmail = () => {
	const email = emailInput.value.trim();
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isValidEmail = emailRegex.test(email);
	if (!email) {
		displayErrorMessage("Whoops! It looks like you forgot to add your email!");
		setBorderColor("hsl(354, 100%, 66%)");
		return false;
	}

	if (!isValidEmail) {
		displayErrorMessage("Please provide a valid email address!");
		setBorderColor("hsl(354, 100%, 66%)");
		return false;
	}

	displaySuccessMessage("You have been successfully subscribed!");
	setBorderColor("#008000");
	emailInput.value = "";
	return true;
};

const displayErrorMessage = (message) => {
	errorMsg.innerHTML = message;
	errorMsg.style.color = "hsl(354, 100%, 66%)";
};

const displaySuccessMessage = (message) => {
	errorMsg.innerHTML = message;
	errorMsg.style.color = "#008000";
};

const setBorderColor = (color) => {
	emailInput.style.borderColor = color;
};

emailInput.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		validateEmail();
	}
});

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	validateEmail();
});
