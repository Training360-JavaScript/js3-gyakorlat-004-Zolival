'use strict';

const checker = {
    rules: {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/ ,
        ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi ,
        mac: /(([0-9a-fA-F]){2}:){5}(([0-9a-fA-F]){2}$)/
    },
    
    validate(string, type){
        //type = ['visa'|'ip'|'mac']
        return this.rules[type].test(string)
    }
}

export default checker ;