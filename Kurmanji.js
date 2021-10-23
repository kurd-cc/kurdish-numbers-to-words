export default class KurdishKurmanjiNumbersToWords {

    static convert(number){
        if (typeof number !== 'number'){
            return 'The entered number was not valid'
        }else{
            number = parseInt(number).toString()
            if (this._get_number_type(number) === 'ones'){
                return this._calculate_ones(number)
            } else if (this._get_number_type(number) === 'tens'){
                return this._calculate_tens(number)
            } else if (this._get_number_type(number) === 'hundreds'){
                return this._calculate_hundreds(number)
            } else if (this._get_number_type(number) === 'thousands'){
                return this._calculate_thousands(number)
            } else if (this._get_number_type(number) === 'tens-thousands'){
                return this._calculate_tens_thousands(number)
            } else if (this._get_number_type(number) === 'hundreds-thousands'){
                return this._calculate_hundreds_thousands(number)
            } else if (this._get_number_type(number) === 'millions'){
                return this._calculate_millions(number)
            } else if (this._get_number_type(number) === 'tens-millions'){
                return this._calculate_tens_millions(number)
            } else if (this._get_number_type(number) === 'hundreds-millions'){
                return this._calculate_hundreds_millions(number)
            } else if (this._get_number_type(number) === 'large-number'){
                return this._calculate_large_number(number)
            }
        }
    }
    static _calculate_ones(n){
        const _dict = {
            '0': 'sifir',
            '1': 'yek',
            '2': 'du',
            '3': 'sê',
            '4': 'çar',
            '5': 'pênc',
            '6': 'şeş',
            '7': 'heft',
            '8': 'heşt',
            '9': 'neh'
        }

        return _dict[n]
    }

    static _calculate_tens(n){
        if (n.toString().startsWith('0')){
            return this._calculate_ones(parseInt(n.substr(1)))
        }
        const _dict = {
            '10': 'deh',
            '11': 'yanzdeh',
            '12': 'dwanzdeh',
            '13': 'sêzdeh',
            '14': 'çardeh',
            '15': 'panzdeh',
            '16': 'şanzdeh',
            '17': 'hivdeh',
            '18': 'hijdeh',
            '19': 'nozdeh',
            '20': 'bîst',
            '30': 'sî',
            '40': 'çil',
            '50': 'pêncî',
            '60': 'şêst',
            '70': 'heftê',
            '80': 'heştê',
            '90': 'nod'
        }

        if (_dict[n] !== undefined){
            return _dict[n]
        }else{
            const first_n = (parseInt(n.toString().substr(0, 1)) * 10).toString()
            const second_n = (parseInt(n.toString().substr(1, 1))).toString()
            return _dict[first_n] + this._get_joint() + this._calculate_ones(second_n)
        }

    }

    static _calculate_hundreds(n){
        if (n === '100'){
            return 'sed'
        }else if (n.endsWith('00')){
            const first_n = n.substr(0, 1)
            return this._calculate_ones(first_n) + 'sed'
        }else{
            const first_n = n.substr(0, 1)
            const second_n = parseInt(n.substr(1)).toString()
            switch (second_n.length){
                case 1:{
                    return this._calculate_hundreds(((parseInt(first_n)*100).toString()) )+ this._get_joint() + this._calculate_ones(second_n)
                }
                case 2: {
                    return this._calculate_hundreds(((parseInt(first_n)*100).toString()) )+ this._get_joint() + this._calculate_tens(second_n)
                }

            }
        }
    }

    static _calculate_thousands(n){
        //Better than yek hezar
        if (n === '1000'){
            return 'hezar'
        }

        //hezar
        if (n.endsWith('000')){
            const current_n = n.substr(0, 1)
            if (n.startsWith('5')){
                return 'pênj' + ' ' + 'hezar'
            }else{
                return this._calculate_ones(current_n) + ' ' + 'hezar'
            }
        }

        // could be 123, 012, 001 (3 different possibilities)
        const rest_int = parseInt(n.substr(1))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            default:{
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
        }

        if (n.startsWith('5')){
            return 'pênj' + ' ' + 'hezar' + this._get_joint() + rest
        }else if (n.startsWith('1')){
            return 'hezar' + this._get_joint() + rest
        }else {
            const current_n = parseInt(n.substr(0, 1))
            return this._calculate_ones(current_n.toString()) + ' ' + 'hezar' + this._get_joint() + rest
        }

    }

    static _calculate_tens_thousands(n){
        //hezar
        if (n.endsWith('000')){
            const current_n = n.substr(0, 2)
            return this._calculate_tens(current_n) + ' ' + 'hezar'
        }

        // could be 123, 012, 001 (3 different possibilities)
        const rest_int = parseInt(n.substr(2))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            default:{
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
        }

        const current_n = parseInt(n.substr(0, 2))
        return this._calculate_tens(current_n.toString()) + ' ' + 'hezar' + this._get_joint() + rest

    }

    static _calculate_hundreds_thousands(n){
        //hezar
        if (n.endsWith('000')){
            const current_n = n.substr(0, 3)
            return this._calculate_hundreds(current_n) + ' ' + 'hezar'
        }

        // could be 123, 012, 001 (3 different possibilities)
        const rest_int = parseInt(n.substr(3))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            default:{
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
        }

        const current_n = parseInt(n.substr(0, 3))
        return this._calculate_hundreds(current_n.toString()) + ' ' + 'hezar' + this._get_joint() + rest

    }

    static _calculate_millions(n){
        //Better than yek milyon
        if (n === '1000000'){
            return 'milyon'
        }

        //milyon
        if (n.endsWith('000000')){
            const current_n = n.substr(0, 1)
            if (n.startsWith('5')){
                return 'pênj' + ' ' + 'milyon'
            }else{
                return this._calculate_ones(current_n) + ' ' + 'milyon'
            }
        }

        // (6 different possibilities)
        const rest_int = parseInt(n.substr(1))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            case 3: {
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
            case 4: {
                rest = this._calculate_thousands(rest_int.toString())
                break
            }
            case 5: {
                rest = this._calculate_tens_thousands(rest_int.toString())
                break
            }
            default: {
                rest = this._calculate_hundreds_thousands(rest_int.toString())
                break
            }
        }

        if (n.startsWith('5')){
            return 'pênj' + ' ' + 'milyon' + this._get_joint() + rest
        }else if (n.startsWith('1')){
            return 'milyon' + this._get_joint() + rest
        }else {
            const current_n = parseInt(n.substr(0, 1))
            return this._calculate_ones(current_n.toString()) + ' ' + 'milyon' + this._get_joint() + rest
        }
    }

    static _calculate_tens_millions(n){
        //hezar
        if (n.endsWith('000000')){
            const current_n = n.substr(0, 2)
            return this._calculate_tens(current_n) + ' ' + 'milyon'
        }

        // (6 different possibilities)
        const rest_int = parseInt(n.substr(2))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            case 3: {
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
            case 4: {
                rest = this._calculate_thousands(rest_int.toString())
                break
            }
            case 5: {
                rest = this._calculate_tens_thousands(rest_int.toString())
                break
            }
            default: {
                rest = this._calculate_hundreds_thousands(rest_int.toString())
                break
            }
        }

        const current_n = parseInt(n.substr(0, 2))
        return this._calculate_tens(current_n.toString()) + ' ' + 'milyon' + this._get_joint() + rest

    }

    static _calculate_hundreds_millions(n){
        //hezar
        if (n.endsWith('000000')){
            const current_n = n.substr(0, 3)
            return this._calculate_hundreds(current_n) + ' ' + 'milyon'
        }

        // (6 different possibilities)
        const rest_int = parseInt(n.substr(3))
        let rest = ''
        switch (rest_int.toString().length){
            case 1:{
                rest = this._calculate_ones(rest_int.toString())
                break
            }
            case 2: {
                rest = this._calculate_tens(rest_int.toString())
                break
            }
            case 3: {
                rest = this._calculate_hundreds(rest_int.toString())
                break
            }
            case 4: {
                rest = this._calculate_thousands(rest_int.toString())
                break
            }
            case 5: {
                rest = this._calculate_tens_thousands(rest_int.toString())
                break
            }
            default: {
                rest = this._calculate_hundreds_thousands(rest_int.toString())
                break
            }
        }

        const current_n = parseInt(n.substr(0, 3))
        return this._calculate_hundreds(current_n.toString()) + ' ' + 'milyon' + this._get_joint() + rest

    }

    static _calculate_large_number(n){
        if (n === '1000000000'){
            return 'milyar'
        }else{
            return n.split('').map((current_number) => KurdishNumbersToWords._calculate_ones(current_number)).join(' ')
        }
    }

    static _get_number_type(n){
        switch (n.length)
        {
            case 1:
                return 'ones'
            case 2:
                return 'tens'
            case 3:
                return 'hundreds';
            case 4:
                return 'thousands';
            case 5:
                return 'tens-thousands';
            case 6:
                return 'hundreds-thousands';
            case 7:
                return 'millions'
            case 8:
                return 'tens-millions'
            case 9:
                return 'hundreds-millions'
            default:
                return 'large-number'
        }
    }

    static _get_joint() {
        return ' û '
    }
}
