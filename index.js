let hasJob = true;



let today = new Date();
let dayOfWeek = today.getDay();

// Wish recruiters a happy weekend!/ Greeting them

if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Thank you for visiting my portfolio. I hope you're having an awesome weekend!")
} else {
    showMessage("Thank you for visiting my portfolio.")
}

if (hasJob) {
    showMessage("I am not currently looking for new opportunities 👨‍💻")
} else {
    showMessage("I'm currently looking for new opportunities, feel free to message me on LinkedIn 😃")
}

function showMessage(message) {
    document.writeln("<p>"  + message +"</p>")
}