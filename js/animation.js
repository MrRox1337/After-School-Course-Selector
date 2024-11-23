const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

console.log(document.querySelector("h1").innerText);

const siteName = document.getElementById("sitename");
if (siteName) {
    console.log("Element selected:", siteName);
    siteName.onmouseover = (event) => {
        console.log("Data-value attribute:", event.target.dataset.value); // Check if data-value is accessible
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 1.5;
        }, 30);
    };
} else {
    console.log("Element not found.");
}
