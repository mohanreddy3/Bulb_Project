function changeBulbImage() {
    var img = document.getElementById('bulbImg');
    if (img.src.match('OffImg.jpeg')) {
        img.src = 'Onimg.jpeg';
    } else {
        img.src = 'OffImg.jpeg';
    }
}
