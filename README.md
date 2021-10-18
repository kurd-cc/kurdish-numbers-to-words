# Kurdish Numbers to Words

A NPM package converts the Kurdish numbers to words (Kurmanji).
<br>
https://www.npmjs.com/package/kurdish-numbers-to-words
<br>
<br>
Example:
````text
187262 ==> `sed û heştê û heft hezar û dused û şêst û du`
````

### Installation:
- With `npm`:
````shell
npm i kurdish-numbers-to-words
````
- With `yarn`:
````shell
yarn add kurdish-numbers-to-words
````

### Usage:
1. Import the package:
````javascript
import KurdishNumbersToWords from 'kurdish-numbers-to-words'
````
2. Use it: 
````javascript
let numberWords = KurdishNumbersToWords.convert(9876)
console.log(numberWords)
````

Result:<br>

````text
neh hezar û heştsed û heftê û şeş
````

### Test:
You can test it using `Mocha`:
````shell
npm test
````

### How does it work?
It depends on the following rules:
- Digits from zero to nine are specific words, namely sifir [0], yek [1], du/didu [2], sê/sisê [3], çar [4], pênc [5], şeş [6], heft [7], heşt [8], and neh [9].
- Numbers from eleven to nineteen are made by setting the unit digit root before the word for ten (deh), with no space: yanzdeh/yazde(h) [11], dwanzdeh [12], sêzdeh [13], çardeh [14], panzdeh/pazdeh [15], şanzdeh/şazdeh [16], hivdeh [17], hijdeh [18], and nozdeh [19].
- The tens have specific names based on the multipliers digits roots, except for ten and twenty: deh [10], bîst [20], sî [30], çil [40], pêncî [50], şêst [60], heftê [70], heştê [80], and nod [90].
- The hundreds are built by telling the multiplier digit, then the word for hundred (sed), with no space (e.g.: pêncsed [500], şeşsed [600]).
- The thousands are built by telling the multiplier digit, then the word for thousand (hezar), with an exception for five thousand (e.g.: çar hezar [4,000], pênj hezar [5,000], şeş hezar [6,000]).
- Compound numbers are built by spelling out the ten, then the digit, united with the word û (e.g.: sî û du [32], heftê û yek [71]). The rule is the same between hundred and ten or unit, and between thousand and hundred (e.g.: sed û yek [101], hezar û dused [1,200]).
- There are also specific words for one hundred thousand (lek [100,000]), and five hundred thousands (kirûr [500,000]).
- One million is milyon.
- From one milyon to less than one billion works the same way as thousands (the 5's rule included)
- One billion is milyar
- More than 1 billion will be spelled a number by number<br>
Most of these rules are from: [Of Languages and Numbers](https://www.languagesandnumbers.com/how-to-count-in-northern-kurdish/en/kmr/)