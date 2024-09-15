const arguments = process.argv.slice(2);

function circleArea(radius) {
    const PI = 3.14
    let area = PI * radius ** 2
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`)
}
circleArea(arguments[0] * 1)