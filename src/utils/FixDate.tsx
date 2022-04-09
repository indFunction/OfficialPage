function getProcessedValue(val: undefined | number, min: number, max: number, digit: number) {
    if (val === undefined) return '';

    if (val >= min && val <= max) {
        return zeroPadding(val, digit);
    } else if (val < min) {
        return zeroPadding(min, digit);
    } else {
        return zeroPadding(max, digit);
    }
}

function zeroPadding(val: number, digit: number) {
    return String(val).padStart(digit, '0');
}

export const fixDate = (date: number[]): string[] => {
    return [getProcessedValue(date[0], 1970, 2037, 4), getProcessedValue(date[1], 1, 12, 2), getProcessedValue(date[2], 1, 31, 2)];
};
