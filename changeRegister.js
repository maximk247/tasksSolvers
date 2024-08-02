let str = ['КаЖдЫй ОхОтНиК']

function changeRegister (str) { 
    return str.toString().split('').map(el => el == el.toLowerCase()? el.toUpperCase(): el.toLowerCase()).join('').split()
}

console.log(changeRegister(str)); // [кАжДыЙ оХоТнИк] 