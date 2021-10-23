import KurdishSoraniNumbersToWords from "./sorani_index.js";

console.log('this is sorani')

//--------------------------------------------------------------------------------------------------
//sorani version
//--------------------------------------------------------------------------------------------------
describe('Ones', function() {
    describe('#convert()', function() {
        it('3 should be سێ', function(done) {
            if (KurdishSoraniNumbersToWords.convert(3).trim() === 'سێ'){
                done()
            }else{
                done("There was an error with converting ones")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('10 should be دە', function(done) {
            if (KurdishSoraniNumbersToWords.convert(10).trim() === 'دە'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('15 should be پازدە', function(done) {
            if (KurdishSoraniNumbersToWords.convert(15).trim() === 'پازدە'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('47 should be چل و حەوت', function(done) {
            if (KurdishSoraniNumbersToWords.convert(47).trim() === 'چل و حەوت'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('90 should be نەوەد', function(done) {
            if (KurdishSoraniNumbersToWords.convert(90).trim() === 'نەوەد'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('100 should be سەد', function(done) {
            if (KurdishSoraniNumbersToWords.convert(100).trim() === 'سەد'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('105 should be سەد و پێنج', function(done) {
            if (KurdishSoraniNumbersToWords.convert(105).trim() === 'سەد و پێنج'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('187 should be سەد و هەشتا و حەوت', function(done) {
            if (KurdishSoraniNumbersToWords.convert(187).trim() === 'سەد و هەشتا و حەوت'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1000 should be هەزار', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1000).trim() === 'هەزار'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1001 should be هەزار و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1001).trim() === 'هەزار و یەک'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1045 should be هەزار و چل و پێنج', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1045).trim() === 'هەزار و چل و پێنج'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('5987 should be پێنج هەزار و نۆسەد و هەشتا و حەوت', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1045).trim() === 'پێنج هەزار و نۆسەد و هەشتا و حەوت'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('tens-thousands', function() {
    describe('#convert()', function() {
        it('10001 should be دە هەزار و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(10001).trim() === 'دە هەزار و یەک'){
                done()
            }else{
                done("There was an error with converting tens-thousands")
            }
        });
    });
});

describe('hundreds-thousands', function() {
    describe('#convert()', function() {
        it('100001 should be سەد هەزار و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(100001).trim() === 'سەد هەزار و یەک'){
                done()
            }else{
                done("There was an error with converting hundreds-thousands")
            }
        });
    });
});

describe('millions', function() {
    describe('#convert()', function() {
        it('1000001 should be ملیۆن و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1000001).trim() === 'ملیۆن و یەک'){
                done()
            }else{
                done("There was an error with converting millions")
            }
        });
    });
});

describe('tens-millions', function() {
    describe('#convert()', function() {
        it('10000001 should be دە ملیۆن و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(10000001).trim() === 'دە ملیۆن و یەک'){
                done()
            }else{
                done("There was an error with converting tens-millions")
            }
        });
    });
});

describe('hundreds-millions', function() {
    describe('#convert()', function() {
        it('10000001 should be سەد ملیۆن و یەک', function(done) {
            if (KurdishSoraniNumbersToWords.convert(100000001).trim() === 'سەد ملیۆن و یەک'){
                done()
            }else{
                done("There was an error with converting hundreds-millions")
            }
        });
    });
});

describe('large-numbers', function() {
    describe('#convert()', function() {
        it('1234567890 should be یەک دوو سێ چوار پێنج شەش حەوت هەشت نۆ سفڕ', function(done) {
            if (KurdishSoraniNumbersToWords.convert(1234567890).trim() === 'یەک دوو سێ چوار پێنج شەش حەوت هەشت نۆ سفڕ'){
                done()
            }else{
                done("There was an error with converting large-numbers")
            }
        });
    });
});