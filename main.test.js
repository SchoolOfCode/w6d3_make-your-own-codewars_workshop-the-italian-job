//👉 Write your tests below here:

import { decodeTheMessage } from "./main";

describe("Testing the decodeTheMessage function", () => {

    test("'mjqqt' should return 'hello'", () => {
        // ARRANGE
        const message = "mjqqt";
        const expected = "hello"; 
        // ACT 
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });

    test("`nyx'd lo kxqbi.` should return `don't be angry.`", () => {
        const message  = `nyx'd lo kxqbi.`;
        const expected = `don't be angry.`;
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })

    test("`vsj vycd rob qvkccoc` should return `liz lost her glasses`", () => {
        const message = `vsj vycd rob qvkccoc`;
        const expected = `liz lost her glasses`;
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })

    test("`x adkt hfjpih xc iwt bdgcxcv` should return `i love squats in the morning`", () => {
        const message = `x adkt hfjpih xc iwt bdgcxcv`;
        const expected = `i love squats in the morning`;
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })

    test("`pqrstuvwxyzabdcefghijklmno` should return `abcdefghijklmonpqrstuvwxyz`", () => {
        const message = `pqrstuvwxyzabdcefghijklmno`;
        const expected = `abcdefghijklmonpqrstuvwxyz`;
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })
    
    test("'duwe cm hin juscha nby vcffm, sio ehiq?' should return 'jack is not paying the bills, you know?' ", () => {
        // ARRANGE
        const message = "duwe cm hin juscha nby vcffm, sio ehiq?" ;
        const expected = "jack is not paying the bills, you know?";
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });
    
    test("'roi, ry, vod'c qy!' should return 'hey, ho, let's go!'", () => {
        // ARRANGE
        const message = "roi, ry, vod'c qy!" ;
        const expected = "hey, ho, let's go!";
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });

    test("'cn'm u nymn ch dymn, u wifiolzof voazymn' should return 'it's a test in jest, a colourful bugfest'", () => {
        // ARRANGE
        const message = "cn'm u nymn ch dymn, u wifiolzof voazymn"; 
        const expected = "it's a test in jest, a colourful bugfest";
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });

    test("'roses are red, violets are blue, you got no street cred and your dog() returns poo' should return 'String is too long for encoding'", () => {
        // ARRANGE
        const message = 'roses are red, violets are blue, you got no street cred and your dog() returns poo';
        const expected = "String is too long for encoding";
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });

    test("',./.;/,[';' should return ',./.;/,[';'", () => {
        // ARRANGE
        const message = ',./.;/,[';
        const expected = ',./.;/,[';
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    });

    test("'             ' should return '             '", () => {
        // ARRANGE
        const message = '             ';
        const expected = '             ';
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    })


    test("'12345____6789____)20[]#'/.' should return '12345____6789____)20[]#'/.'", () => {
        // ARRANGE
        const message = "12345____6789____)20[]#'/.";
        const expected = "12345____6789____)20[]#'/.";
        // ACT
        const actual = decodeTheMessage(message);
        // ASSERT
        expect(actual).toBe(expected);
    })
})
