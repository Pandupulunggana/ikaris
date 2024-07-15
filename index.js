document.addEventListener('DOMContentLoaded', function () {
    var translateButton = document.querySelector('.baten');
    var translatedTextContainer = document.querySelector('.translated-text');

    translatedTextContainer.style.display = 'none';

    translateButton.addEventListener('click', function () {
        // Periksa status tampilan kontainer teks terjemahan
        if (translatedTextContainer.style.display === 'none') {
            // Tampilkan teks terjemahan dan ubah teks tombol menjadi 'Hide'
            translatedTextContainer.style.display = 'block';
            translateButton.innerHTML = 'Hide';
        } else {
            // Sembunyikan teks terjemahan dan ubah teks tombol kembali menjadi 'Translate'
            translatedTextContainer.style.display = 'none';
            translateButton.innerHTML = 'Translate';
        }
    });
});