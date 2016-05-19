export const CHANGE_COUNTER = 'CHANGE_COUNTER';

export const changeCounter = (num) => {
    return {
        type:CHANGE_COUNTER,
        data:num
    }
}
