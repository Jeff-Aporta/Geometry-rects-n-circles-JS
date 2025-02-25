export {
    lerp,
    map,
    constrain,
}

// Polyfill de constrain
function constrain(props) {
    const { value, min, max } = props;
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

function map(props) {
    const { value, inMin = 0, inMax, outMin = 0, outMax } = props;
    return (
        ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
    );
}

function lerp(props) {
    let { start = 0, end, t } = props;
    return (end - start) * t + start;
}