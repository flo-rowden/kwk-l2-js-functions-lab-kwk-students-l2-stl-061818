function distanceFromHqInBlocks(street) {
  let blocks = street - 42
  return Math.abs(blocks)
}

function distanceFromHqInFeet(street) {
  let blocks = street - 42
  let feet = blocks * 264
  return Math.abs(feet)
}

function distanceTravelledInFeet(endingBlock, startingBlock) {
  let difference = endingBlock -startingBlock
  let feet = difference * 264
  return Math.abs(feet)
}

function calculateFarePrice(endingBlock, startingBlock) {
  

}