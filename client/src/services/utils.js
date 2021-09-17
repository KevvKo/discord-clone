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

/**
 * 
 * @param {String} email 
 * @returns String
 */

export const obscureString = (email) => {
    let [ name, domain] = email.split('@');
    return `${new Array(name.length).join('*')}@${domain}`;
};

export const countryPrefix = () =>  {

    return {
        'Netherlands': '+31',
        'France': '+33',
        'Switzerland': '+41',
        'Germany': '+49',
        'Afghanistan': '+93',
        'Algeria': '+213',
        'Ireland': '+353',
        'Albania': '+355',
    };
};