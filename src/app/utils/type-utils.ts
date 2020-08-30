/**
 *
 * This method tests  if a given object  confirms to an interface of type T
 *
 * @method isPojoOf
 *
 * @template T a generic pojo type
 * @param val object to be evaluated
 * @param props list of properties on the interface
 *
 * @returns true if val is of type T
 *
 * @example <caption>Testing for interface with one property</caption>
 *
 * interface Foo {
 *     bar: number,
 * }
 *
 * const x = {
 *     bar: 42,
 * };
 *
 * // returns true
 * isPojoOf<Foo>(x, 'bar');
 *
 * // transpilation error
 * isPojoOf<Foo>(x, 'foobar');
 *
 * @example <caption>Testing for interface with multiple properties</caption>
 *
 * interface Foo {
 *     bar: number,
 *     id: number,
 * }
 *
 * const x = {
 *     bar: 42,
 *  }
 *
 *  // returns true
 *  isPojoOf<Foo>(x, 'bar');
 *
 *  // returns false
 *  isPojoOf<Foo>(x, 'bar', 'id');
 *
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
