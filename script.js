function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));

    // Show selected section
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');

    // Special effects
    if (sectionId === 'about') {
        typeAboutText();
    }
}

function typeAboutText() {
    const aboutTextElement = document.getElementById('about-text');
    const text = "Welcome to the Low-Code/No-Code Development Bootcamp! This program empowers you to create powerful applications without extensive coding knowledge. Using visual tools and drag-and-drop interfaces, you’ll learn to design, test, and launch projects efficiently—perfect for beginners, innovators, and professionals driving rapid digital transformation.";

    aboutTextElement.textContent = "";

    aboutTextElement.textContent = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            aboutTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // typing speed
        }
    }
    type();
}

