// Show student tips when button is clicked
document.getElementById('studentTipsBtn').onclick = function() {
    var tips = document.getElementById('studentTips');
    tips.style.display = tips.style.display === 'none' ? 'block' : 'none';
};

// Simple form handler (demo only)
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('contactForm').reset();
    setTimeout(function() {
        document.getElementById('formSuccess').style.display = 'none';
    }, 4000);
};