document.querySelector('.download-btn').addEventListener('click', function(event) {
    // Prevent the default action if it's a submit button (uncomment if needed)
    // event.preventDefault();

    // 1. Open the setup guide in a new tab/window FIRST
    const setupWindow = window.open('setup guide.html', '_blank');

    // Add a small delay for the browser to process the new tab opening
    setTimeout(() => {
        // 2. Trigger the download of the compressed folder
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://github.com/Venexs/The-System/archive/refs/heads/main.zip';
        downloadLink.download = 'TheSystemFiles.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink); // Clean up the temporary link

        // --- NEW CODE FOR GOOGLE ANALYTICS ---
        if (typeof gtag === 'function') {
            gtag('event', 'download_button_click', {
                'event_category': 'Engagement',
                'event_label': 'TheSystemFiles_Download',
                'value': 1 // You can assign a value if needed, e.g., 1 for each click
            });
            console.log('Google Analytics event sent: download_button_click');
        } else {
            console.warn('Google Analytics gtag function not found. Make sure GA is correctly initialized.');
        }
        // --- END NEW CODE ---

    }, 100); // 100ms delay
});document.querySelector('.download-btn').addEventListener('click', function(event) {
    // Prevent the default action if it's a submit button (uncomment if needed)
    // event.preventDefault();

    // 1. Open the setup guide in a new tab/window FIRST
    const setupWindow = window.open('setup guide.html', '_blank');

    // Add a small delay for the browser to process the new tab opening
    setTimeout(() => {
        // 2. Trigger the download of the compressed folder
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://github.com/Venexs/The-System/archive/refs/heads/main.zip';
        downloadLink.download = 'TheSystemFiles.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink); // Clean up the temporary link

        // --- NEW CODE FOR GOOGLE ANALYTICS ---
        if (typeof gtag === 'function') {
            gtag('event', 'download_button_click', {
                'event_category': 'Engagement',
                'event_label': 'TheSystemFiles_Download',
                'value': 1 // You can assign a value if needed, e.g., 1 for each click
            });
            console.log('Google Analytics event sent: download_button_click');
        } else {
            console.warn('Google Analytics gtag function not found. Make sure GA is correctly initialized.');
        }
        // --- END NEW CODE ---

    }, 100); // 100ms delay
});
