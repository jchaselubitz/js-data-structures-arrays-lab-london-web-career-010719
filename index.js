// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

let newDrivers = []
function appendDriver(name) {
    newDrivers = [...drivers, name]
    return newDrivers
}

function prependDriver(name) {
    newDrivers = [name,...drivers]
    return newDrivers
}

function removeLastDriver(){
    newDrivers = drivers.slice(0, drivers.length - 1)
    return newDrivers

}

function removeFirstDriver(){
    newDrivers = drivers.slice(1)
    return newDrivers
}