const potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    
    if (potteryObject.cracked == false) 
    {
        //pottery is not cracked
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
        }
        else {
            potteryObject.price = 20
        }
        potteryToSell.push(potteryObject)
    }
    //pottery is cracked
    return potteryObject
}

export const usePottery = () => {
    const potteryToSellClone = [... potteryToSell]
    return potteryToSellClone
}