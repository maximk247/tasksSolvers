var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
function change_register(str) {
    const result = str.split('').map((item) => {
        if(item !== item.toUpperCase()) {
            item = item.toUpperCase()
        } else {
            item = item.toLowerCase()
        }
        return item
    })

    return result
}

document.writeln(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"