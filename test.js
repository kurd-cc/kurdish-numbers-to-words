import KurdishNumbersToWords from "./index.js";

describe('Ones', function() {
    describe('#convert()', function() {
        it('3 should be sê', function(done) {
            if (KurdishNumbersToWords.convert(3).trim() === 'sê'){
                done()
            }else{
                done("There was an error with converting ones")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('10 should be deh', function(done) {
            if (KurdishNumbersToWords.convert(10).trim() === 'deh'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('15 should be panzdeh', function(done) {
            if (KurdishNumbersToWords.convert(15).trim() === 'panzdeh'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('47 should be çil û heft', function(done) {
            if (KurdishNumbersToWords.convert(47).trim() === 'çil û heft'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('Tens', function() {
    describe('#convert()', function() {
        it('90 should be nod', function(done) {
            if (KurdishNumbersToWords.convert(90).trim() === 'nod'){
                done()
            }else{
                done("There was an error with converting tens")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('100 should be sed', function(done) {
            if (KurdishNumbersToWords.convert(100).trim() === 'sed'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('105 should be sed û pênc', function(done) {
            if (KurdishNumbersToWords.convert(105).trim() === 'sed û pênc'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('hundreds', function() {
    describe('#convert()', function() {
        it('187 should be sed û heştê û heft', function(done) {
            if (KurdishNumbersToWords.convert(187).trim() === 'sed û heştê û heft'){
                done()
            }else{
                done("There was an error with converting hundreds")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1000 should be hezar', function(done) {
            if (KurdishNumbersToWords.convert(1000).trim() === 'hezar'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1001 should be hezar û yek', function(done) {
            if (KurdishNumbersToWords.convert(1001).trim() === 'hezar û yek'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('1045 should be hezar û çil û pênc', function(done) {
            if (KurdishNumbersToWords.convert(1045).trim() === 'hezar û çil û pênc'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('thousands', function() {
    describe('#convert()', function() {
        it('5987 should be pênj hezar û nehsed û pênc', function(done) {
            if (KurdishNumbersToWords.convert(1045).trim() === 'hezar û çil û pênc'){
                done()
            }else{
                done("There was an error with converting thousands")
            }
        });
    });
});

describe('tens-thousands', function() {
    describe('#convert()', function() {
        it('10001 should be deh hezar û yek', function(done) {
            if (KurdishNumbersToWords.convert(10001).trim() === 'deh hezar û yek'){
                done()
            }else{
                done("There was an error with converting tens-thousands")
            }
        });
    });
});

describe('hundreds-thousands', function() {
    describe('#convert()', function() {
        it('100001 should be sed hezar û yek', function(done) {
            if (KurdishNumbersToWords.convert(100001).trim() === 'sed hezar û yek'){
                done()
            }else{
                done("There was an error with converting hundreds-thousands")
            }
        });
    });
});

describe('millions', function() {
    describe('#convert()', function() {
        it('1000001 should be milyon û yek', function(done) {
            if (KurdishNumbersToWords.convert(1000001).trim() === 'milyon û yek'){
                done()
            }else{
                done("There was an error with converting millions")
            }
        });
    });
});

describe('tens-millions', function() {
    describe('#convert()', function() {
        it('10000001 should be deh milyon û yek', function(done) {
            if (KurdishNumbersToWords.convert(10000001).trim() === 'deh milyon û yek'){
                done()
            }else{
                done("There was an error with converting tens-millions")
            }
        });
    });
});

describe('hundreds-millions', function() {
    describe('#convert()', function() {
        it('10000001 should be sed milyon û yek', function(done) {
            if (KurdishNumbersToWords.convert(100000001).trim() === 'sed milyon û yek'){
                done()
            }else{
                done("There was an error with converting hundreds-millions")
            }
        });
    });
});

describe('large-numbers', function() {
    describe('#convert()', function() {
        it('1234567890 should be yek du sê çar pênc şeş heft heşt neh sifir', function(done) {
            if (KurdishNumbersToWords.convert(1234567890).trim() === 'yek du sê çar pênc şeş heft heşt neh sifir'){
                done()
            }else{
                done("There was an error with converting large-numbers")
            }
        });
    });
});