import { mens } from "./mens.js"
import { womens } from "./womans.js"
import { kids } from "./kids.js"



export const AddProducts = (imgUrl, brand, product, gender, category, price, strikedOffPrice ) => {
    const prod = {
        imgUrl ,brand, product, gender, category, price, strikedOffPrice
    }
    mens.push(prod)
}

export const SaveLocal = () => {
    localStorage.setItem("Mens", JSON.stringify(mens))
}



export { mens, womens, kids} 