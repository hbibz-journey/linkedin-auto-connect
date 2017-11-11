var numb = 2000; // put number of connect clicks
var _0x927c = ["\x75\x73\x65\x72\x4C\x69\x73\x74", "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x62\x75\x74\x74\x6F\x6E\x2D\x73\x65\x63\x6F\x6E\x64\x61\x72\x79\x2D\x73\x6D\x61\x6C\x6C", "\x72\x65\x66\x72\x65\x73\x68", "\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74", "\x62\x6F\x64\x79", "\x73\x63\x72\x6F\x6C\x6C\x54\x6F", "\x69\x6E\x69\x74\x69\x61\x74\x65", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x69\x6E\x76\x69\x74\x65", "\x6C\x65\x6E\x67\x74\x68", "\x68\x61\x6E\x64\x6C\x65\x52\x65\x70\x65\x61\x74", "\x64\x6F\x6E\x65\x3A\x20", "\x6C\x6F\x67", "\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74", "\x63\x68\x69\x6C\x64\x72\x65\x6E", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x61\x72\x72\x61\x79\x43\x6F\x6E\x74\x61\x69\x6E\x73", "\x63\x61\x6E\x63\x65\x6C", "\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65", "\x63\x6C\x69\x63\x6B", "\x61\x64\x64", "\x70\x75\x73\x68", "\x69\x6E\x64\x65\x78\x4F\x66", "\x75\x73\x65\x72\x73\x4A\x73\x6F\x6E", "\x6C\x6F\x61\x64\x52\x65\x73\x75\x6C\x74", "\x69\x6E\x76\x69\x74\x65\x72\x4C\x69\x73\x74", "\x67\x65\x74\x49\x74\x65\x6D", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x70\x61\x72\x73\x65", "\x73\x61\x76\x65\x52\x65\x73\x75\x6C\x74", "\x73\x65\x74\x49\x74\x65\x6D"];
var inviter = {} || inviter;
inviter[_0x927c[0]] = [];
inviter[_0x927c[1]] = _0x927c[2];
inviter[_0x927c[3]] = function() {
    window[_0x927c[6]](0, document[_0x927c[5]][_0x927c[4]]);
    window[_0x927c[6]](document[_0x927c[5]][_0x927c[4]], 0);
    window[_0x927c[6]](0, document[_0x927c[5]][_0x927c[4]])
};
inviter[_0x927c[7]] = function() {
    inviter[_0x927c[3]]();
    var _0xbcb6x2 = document[_0x927c[8]](inviter[_0x927c[1]]);
    if (_0xbcb6x2 == null) {
        var _0xbcb6x2 = inviter[_0x927c[7]]()
    };
    return _0xbcb6x2
};
inviter[_0x927c[9]] = function() {
    var _0xbcb6x2 = inviter[_0x927c[7]]();
    var _0xbcb6x3 = _0xbcb6x2[_0x927c[10]];
    for (var _0xbcb6x4 = 0; _0xbcb6x4 < _0xbcb6x3; _0xbcb6x4++) {
        if (_0xbcb6x2 != null && _0xbcb6x2[_0xbcb6x4] != null) {
            inviter[_0x927c[11]](_0xbcb6x2[_0xbcb6x4])
        };
        if (_0xbcb6x4 == _0xbcb6x3 - 1) {
            console[_0x927c[13]](_0x927c[12] + _0xbcb6x4);
            inviter[_0x927c[3]]()
        }
    }
};
inviter[_0x927c[11]] = function(_0xbcb6x5) {
    var _0xbcb6x6 = _0xbcb6x5[_0x927c[15]][1][_0x927c[14]];
    var _0xbcb6x7 = _0xbcb6x6[_0x927c[17]](/^\s\s*/, _0x927c[16])[_0x927c[17]](/\s\s*$/, _0x927c[16]);
    if (inviter[_0x927c[18]](_0xbcb6x7)) {
        console[_0x927c[13]](_0x927c[19]);
        var _0xbcb6x8 = _0xbcb6x5[_0x927c[20]][_0x927c[20]][_0x927c[15]][0];
        _0xbcb6x8[_0x927c[21]]()
    } else {
        console[_0x927c[13]](_0x927c[22]);
        inviter[_0x927c[0]][_0x927c[23]](_0xbcb6x7);
        _0xbcb6x5[_0x927c[21]]()
    }
};
inviter[_0x927c[18]] = function(_0xbcb6x9) {
    return (inviter[_0x927c[0]][_0x927c[24]](_0xbcb6x9) > -1)
};
inviter[_0x927c[25]] = {};
inviter[_0x927c[26]] = function() {
    var _0xbcb6xa = localStorage[_0x927c[28]](_0x927c[27]);
    var _0xbcb6xb = JSON[_0x927c[29]](_0xbcb6xa);
    inviter[_0x927c[0]] = JSON[_0x927c[30]](_0xbcb6xb)
};
inviter[_0x927c[31]] = function() {
    inviter[_0x927c[25]] = JSON[_0x927c[29]](inviter[_0x927c[0]]);
    localStorage[_0x927c[32]](_0x927c[27], inviter[_0x927c[25]])
};
setInterval(function() {
    inviter[_0x927c[9]]()
}, numb)
