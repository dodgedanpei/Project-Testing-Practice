function analyzeArray(array){

    const average = array.reduce(
        (previous, current) => previous + current
    )/array.length;

    const largest = Math.max.apply(Math, array);
    const lowest = Math.min.apply(Math, array);

    return {
        average: average,
        min: lowest,
        max: largest,
        length: array.length,
    }
}

module.exports = analyzeArray;