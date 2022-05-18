"use strict";
exports.__esModule = true;
//importando a interface em nossa função
function getPersonType(info, type) {
    var findPerson = info.find(function (item) { return item.gender === type; });
    return findPerson;
}
exports["default"] = getPersonType;
//função com exportação padrão de nosso arquivo
