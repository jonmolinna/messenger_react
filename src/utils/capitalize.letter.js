export function capilizeLetter(str) {
    return str.split(" ").map(str => str[0].toUpperCase() + str.slice(1)).join(" ");
};