import { classNames } from 'shared/lib/classNaame/ClassName';

describe('ClassName', () => {
    test('onli fist classs', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('addition class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('mod class', () => {
        const expected = 'someClass hovered focused class1 class2';
        expect(classNames('someClass', { hovered: true, focused: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('mod false class', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classNames('someClass', { hovered: true, focused: false }, ['class1', 'class2'])).toBe(expected);
    });
});
