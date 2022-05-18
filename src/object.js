"use strict";
exports.__esModule = true;
//Importação de interface para tipagem dos nossos objetos
var PersonA = {
    name: 'John',
    age: 22,
    occupation: 'Developer',
    gender: 'Male'
};
//Objeto persona A
var PersonB = {
    name: 'Kath',
    age: 25,
    occupation: 'Product Manager',
    gender: 'Female'
};
//Objeto persona B
var AllPersons = [PersonA, PersonB];
//array contendo dois objetos e interface compondo array
exports["default"] = AllPersons;
//exportando array por padrão em nosso arquivo
