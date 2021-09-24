export const sumToBinarySigned = (a, b) => {
    const sum = a + b;
    if (!isNaN(sum)) {
        //signed binary output
        const result = (sum >> 0).toString(2);
        console.log(result);

        return result;
    } else {
        throw new Error('Invalid Inputs');
    }

}

export const sumToBinaryUnsigned = (a, b) => {
    const sum = a + b;
    if (!isNaN(sum)) {
        //unsigned binary output
        const result = (sum >>> 0).toString(2);
        console.log(result);

        return result;
    } else {
        throw new Error('Invalid Inputs');
    }

}