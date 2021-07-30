// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter( match => match.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter( match => match.toUpperCase().slice(0, str.length) === str.toUpperCase())
}

function matchName(drivers, str) {
    return drivers.filter(match => match.name === str)
}
