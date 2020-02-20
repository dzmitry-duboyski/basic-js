module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let result = {}
    let turns = Math.pow(2, disksNumber) - 1
    let seconds = (turns / (turnsSpeed / 3600))

    result.turns = turns
    result.seconds = seconds

    return result
}