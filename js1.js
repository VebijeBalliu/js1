

var person = {
    'name': 'Vebije',
    'balanca': 4000

};




console.log('Emri juaj:', person.name);
console.log('Gjendja aktuale:', person.balanca);


function withdrow(person, balanca1) {
    if (balanca1 <= person.balanca) {
        console.log('ju mund te terhiqni para');

        person.balanca = person.balanca - balanca1;


        console.log('Gjendja juaj pas terheqjes', person.balanca);
    }



    else {
        console.log('Nuk mund te kryeni terheqje pasi shuma e kerkoni te terhiqni este me emadhe se :', person.balanca);
    }



}





withdrow(person, 2000);