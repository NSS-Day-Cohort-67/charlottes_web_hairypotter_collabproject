import {firePottery} from "./kiln.js"
import { makePottery } from "./PotteryWheel.js"

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
console.log(firedMug)
//firedBowl.cracked = true
let firedBowl = firePottery(bowl, 3000)
console.log(firedBowl)

//firedPlatter.cracked = false
let firedPlatter = firePottery(platter, 1500)
console.log(firedPlatter)

//firedPlate.cracked = true
let firedPlate = firePottery(plate, 2500)
console.log(firedPlate)

//firedVase.cracked = false
let firedVase = firePottery(vase, 1000)
console.log(firedVase)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



