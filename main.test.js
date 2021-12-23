import { decodeTheMessage } from "./main";

describe("Testing the decodeTheMessage function", () => {

    test("'mjqqt' should return 'hello'", () => {
        const message = "mjqqt";
        const expected = "hello"; 
        const actual = decodeTheMessage(message);
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
        const message = "duwe cm hin juscha nby vcffm, sio ehiq?" ;
        const expected = "jack is not paying the bills, you know?";
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    });
    
    test("'roi, ry, vod'c qy!' should return 'hey, ho, let's go!'", () => {
        const message = "roi, ry, vod'c qy!" ;
        const expected = "hey, ho, let's go!";
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    });

    test("'cn'm u nymn ch dymn, u wifiolzof voazymn' should return 'it's a test in jest, a colourful bugfest'", () => {
        const message = "cn'm u nymn ch dymn, u wifiolzof voazymn"; 
        const expected = "it's a test in jest, a colourful bugfest";
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    });

    test("'roses are red, violets are blue, you got no street cred and your dog() returns poo' should return 'String is too long for decoding'", () => {
        const message = 'roses are red, violets are blue, you got no street cred and your dog() returns poo';
        const expected = "String is too long for decoding";
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    });

    test("',./.;/,[';' should return ',./.;/,[';'", () => {
        const message = ',./.;/,[';
        const expected = ',./.;/,[';
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    });

    test("'             ' should return '             '", () => {
        const message = '             ';
        const expected = '             ';
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })


    test("'12345____6789____)20[]#'/.' should return '12345____6789____)20[]#'/.'", () => {
        const message = "12345____6789____)20[]#'/.";
        const expected = "12345____6789____)20[]#'/.";
        const actual = decodeTheMessage(message);
        expect(actual).toBe(expected);
    })
})
