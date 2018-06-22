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
  let feet =distanceTravelledInFeet(startingBlock, endingBloc);
  if (feet <= 400) {
    return 'Heres a free sample!'
  } else if (400 < feet && feet <= 2000) {
    return Math.abs(feet - 400) *0.02)
  }

}