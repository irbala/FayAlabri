// Contact page: "Copy email" button and the message form.

// Copy email: only shown when the browser lets us write to the clipboard
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');

if (copyButton && navigator.clipboard) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(copyButton.dataset.email)
            .then(() => {
                copyStatus.textContent = 'Email copied';
            })
            .catch(() => {
                copyStatus.textContent = 'Copy failed, please select the address instead';
            });
        // Clear the message after a few seconds
        setTimeout(() => { copyStatus.textContent = ''; }, 3000);
    });
}

// Message form: opens the visitor's email app with the subject and message filled in.
// (Without JavaScript the form falls back to a plain mailto: action.)
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements.name.value.trim();
        const topic = form.elements.topic.value;
        const message = form.elements.message.value.trim();

        const subject = `${topic} (from ${name})`;
        const body = `${message}\n\n${name}`;
        window.location.href = 'mailto:fayalabri@gmail.com'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);
    });
}
