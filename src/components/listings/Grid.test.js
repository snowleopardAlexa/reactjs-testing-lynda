import data from '../../data/courses.json';

// it counts amount of things we have in the courses.json
const numItems = data.length

// Numbers
describe('Number test', () => {
    test('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });
    
    // this should be true
    test('Number of items to be greater than or equal to 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });
})

describe('String tests', () => {
    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });
    
    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });
})


// Arrays & Objects
const dataTest = data[0].title;

describe('Arrays and objects tests', () => {
// It expects to have at least two of 'React Native', 'React, 'MeteorJS'
// so it returns true
const dataTwo = ['React Native', 'React'];

test('The list of courses contains Recact Native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(dataTwo));
});

// Objects
test('The first course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
});

test('The first course to have a property title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
});
})












