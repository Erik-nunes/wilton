document.addEventListener('DOMContentLoaded', () => {
    const whatsappInput = document.getElementById('whatsapp');

    // WhatsApp Mask
    whatsappInput.addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
    
    // Prevent form submission to just showcase the animation temporarily
    const form = document.querySelector('.capture-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Processando...';
        btn.style.opacity = '0.8';
        
        setTimeout(() => {
            btn.innerHTML = 'VAGA GARANTIDA! ✓';
            btn.style.opacity = '1';
            btn.style.backgroundColor = '#DAD2C2'; // Accent Gold from Design System
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 3000);
        }, 1500);
    });
});
