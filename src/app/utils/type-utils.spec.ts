import { isPojoOf } from './type-utils';

interface Foo {
    bar: number;
}

describe('type utilities [type.utils.ts]', () => {
    it('should return false for a falsy object', () => {
        const input: Foo = null;

        const result: boolean = isPojoOf<Foo>(input, 'bar');

        expect(result).toBeFalse();
    });

    it('should return true if object is matching interface', () => {
        const input: any = {
            bar: 42,
        };

        const result: boolean = isPojoOf<Foo>(input, 'bar');

        expect(result).toBeTrue();
    });

    it('should return false if object is a different interface', () => {
        const input: any = {
            foobar: 42,
        };

        const result: boolean = isPojoOf<Foo>(input, 'bar');

        expect(result).toBeFalse();
    });

    it('should return false if object is a primitive type', () => {
        const input: any = 'string';

        const result: boolean = isPojoOf<Foo>(input, 'bar');

        expect(result).toBeFalse();
    });
});
