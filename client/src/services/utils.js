// Array 

/**
 * @description returns a sequence as array
 * @param {integer} start 
 * @param {Integer} stop 
 * @param {Integer} step 
 */

export const range = (start, stop, step = 1) => {
        
    return Array.from(
        { length: (stop - start) / step + 1}, 
        (_, i) => start + (i * step)
    );
};