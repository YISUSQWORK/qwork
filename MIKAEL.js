var x = document.getElementById("dominio");
var y = x.getElementsByTagName("p");
var z = "<div style='color:red'>DOMINIO MALO (RESOLVER MANUAL)</div>";
y = y[0].innerHTML;
if (y == 'consultapublicapje.tjba.jus.br') {
    document.write(z);
} else if (y == 'challenge.multichain.ventures') {
    document.write(z);
} else if (y == 'www.streetmachine.com') {
    document.write(z);
} else if (y == 'www.nhtsa.gov') {
    document.write(z);
} else if (y == 'vk.com') {
    document.write(z);
} else if (y == 'www.receita.fazenda.gov.vr') {
    document.write(z);
} else if (y == 'receita.fazenda.gov.br') {
    document.write(z);
} else {
    window.location="http://qworkmikael.blogspot.com/";
}