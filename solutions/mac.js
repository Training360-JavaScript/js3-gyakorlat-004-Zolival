'use strict';

// mac address format 3c:a9:f4:5a:ef:d4
const checkMac = (macAddass) => /(([0-9a-fA-F]){2}:){5}(([0-9a-fA-F]){2}$)/.test(macAddass);

export default checkMac ;