export const firePottery = (pieceOfPottery, temperature) => {

    pieceOfPottery.fired = true
    if(temperature > 2200) 
        pieceOfPottery.cracked = true
    else 
        pieceOfPottery.cracked = false
    
    return pieceOfPottery
}

