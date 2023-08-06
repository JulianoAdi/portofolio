// / Script JavaScript Anda

// Fungsi untuk mengirim pesan melalui WhatsApp
function sendWhatsAppMessage() {
    const phoneNumber = '62123456789'; // Ganti dengan nomor WhatsApp Anda
    const message = encodeURIComponent('Halo, saya tertarik dengan portofolio Anda. Bisa kita diskusi lebih lanjut?');

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Fungsi untuk mengirim email
function sendEmail() {
    const emailAddress = 'contoh@email.com'; // Ganti dengan alamat email Anda
    const subject = encodeURIComponent('Pesan dari Portofolio');
    const body = encodeURIComponent('Halo, saya tertarik dengan portofolio Anda. Bisa kita diskusi lebih lanjut?');

    const emailURL = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = emailURL;
}