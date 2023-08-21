let potteryId = 1


export const makePottery = (shape, weight, height) => {
    let newPottery = {
        id: potteryId,
        shape: shape,
        weight: weight,
        height: height
    }
    potteryId++
    return newPottery
}