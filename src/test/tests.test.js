import chai from 'chai';
import { expect } from 'chai';
import { assert } from 'chai';

import add from '../add.js';
import filter from "../filter.js"

describe("add.js", () => {
    it("add 2 number together", () => {
        expect(add(2,2)).to.equal(4)
    })
})