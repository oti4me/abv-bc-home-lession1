describe(" ArithGeo ", function() {

    it("It should return arithmetic if an input [ 2, 8, 14, 20, 26 ] is passed.", function() {
        expect(arithGeo([ 2, 8, 14, 20, 26 ])).toEqual("arithmetic");
    });

    it("It should return geometric if an input [ 2, 8, 14, 20, 26 ] is passed.", function() {
        expect(arithGeo([ 81, 27, 9, 3, 1 ])).toEqual("geometric");
    });

    it("It should return -1 if an input [5,3,6,7,8] is passed.", function() {
        expect(arithGeo([5,3,6,7,8])).toEqual(-1);
    });

});