export function isPojoOf<T>(val: any, ...props: string[]): val is T {
    // return null for falsy types
    if (!val) {
        return false;
    }

    return true;
}
