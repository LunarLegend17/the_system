document.querySelector('.download-btn').addEventListener('click', function(event) {
    // Prevent the default action of the button if it's a submit button in a form
    // event.preventDefault();

    // 1. Open the setup guide in a new tab/window FIRST
    // This is more likely to bypass pop-up blockers if initiated directly by the click
    const setupWindow = window.open('setup guide.html', '_blank');

    // Add a small delay for the browser to process the new tab opening
    // before triggering the download. This is a heuristic and might not
    // always be necessary, but can help in some cases.
    setTimeout(() => {
        // 2. Trigger the download of the compressed folder
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://github.com/Venexs/The-System/archive/refs/heads/main.zip';
        downloadLink.download = 'TheSystemFiles.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink); // Clean up the temporary link
    }, 100); // 100ms delay
});