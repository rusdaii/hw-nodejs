// Function untuk Rumus Luas & Keliling persegi/persegi panjang
const luas = (width, lenght) => {
    return width * lenght;
}

const keliling = (width, lenght) => {
    return (width + lenght) * 2;
}

module.exports = { luas, keliling };
