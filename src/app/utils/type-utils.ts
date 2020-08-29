/**
 * 
 * @param val object to be evaluated
 * @param props list of properties on the interface
 */
export function isPojoOf<T extends object>(val: any, ...props: (keyof T)[]): val is T {
    // return null for falsy types
    if (!val) {
        return false;
    }

    if (typeof val !== 'object') {
        return false;
    }

    return props.reduce((res: boolean, prop: keyof T) => {
        return res && prop in val;
    }, true);
}
