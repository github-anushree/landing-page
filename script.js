ScrollReveal().reveal('.headerImage img', { delay: 500 });
ScrollReveal().reveal('.headerContent h1', { delay: 800 });
ScrollReveal().reveal('.headerContent p', { delay: 1000 });

// ScrollReveal().reveal('.headerImage img', {
//     delay: 500,
//     origin: 'left',
//     distance: '100px'
//   });

ScrollReveal().reveal('.headerContent h1', {
    delay: 800,
    origin: 'right',
    distance: '100px'
});

ScrollReveal().reveal('.headerContent p', {
    delay: 900,
    origin: 'right',
    distance: '100px'
});

ScrollReveal().reveal('.header h1', {
    delay: 500,
    origin: 'left',
    distance: '100px'
});

ScrollReveal().reveal('.header p', {
    delay: 600,
    origin: 'left',
    distance: '100px'
});
function download() {
    const link = document.createElement('a');
    link.href = './assets/Prompt & AI tools List.pdf';
    
    link.download = 'Prompt & AI tools List';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirect to thank you page
    window.location.href = 'thank-you.html';
}
document.getElementById('downloadButton').addEventListener('click', download);
// Simulate file download





