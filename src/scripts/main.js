import {firePottery} from "./kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList} from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 40, 20)


let bowl = makePottery("bowl", 10, 6)


let platter = makePottery("platter", 120, 3)


let plate = makePottery("plate", 25, 30)


let vase = makePottery("oval", 4, 12)


// Fire each piece of pottery in the kiln
// each fired piece should now have a `fired` property with a value of `true`
// fireMug.cracked = false
let firedMug = firePottery(mug, 2200)

//firedBowl.cracked = true
let firedBowl = firePottery(bowl, 3000)


//firedPlatter.cracked = false
let firedPlatter = firePottery(platter, 1500)


//firedPlate.cracked = true
let firedPlate = firePottery(plate, 2500)


//firedVase.cracked = false
let firedVase = firePottery(vase, 1000)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(firedMug)
console.log(sellMug)

let sellBowl = toSellOrNotToSell(firedBowl)
console.log(sellBowl)

let sellPlatter = toSellOrNotToSell (firedPlatter)
console.log(sellPlatter)


let sellVase = toSellOrNotToSell(firedVase)
console.log(sellVase)


let sellPlate = toSellOrNotToSell(firedPlate)
console.log(sellPlate)
// Invoke the component function that renders the HTML list

const potteryHTML = document.querySelector(".potteryList")
potteryHTML.innerHTML = potteryList()
