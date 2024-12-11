// -----------------------------------------------------------------------------------------------------------------------------------------|
// -----------------------------------------------------------------------------------------------------------------------------------------|
// FONCTIONS

// Convertisseur code hexa en rgb
function convHexRgb(hexa)
{
    const rouge = parseInt(hexa.slice(1, 3), 16);
    const vert = parseInt(hexa.slice(3, 5), 16);
    const bleu = parseInt(hexa.slice(5, 7), 16);

    return `rgb(${rouge}, ${vert}, ${bleu})`;
}


// Verificateur ecriture code hexa
function verifcodehex(hexa)
{
    if (hexa.length != 7 || hexa[0] != "#")
    {
        return 0;
    }

    for (let x = 1; x < 7; x++)
    {
        if ((hexa[x] < 0 && hexa[x] > 9) && hexa[x].toUpperCase() != "A" && hexa[x].toUpperCase() != "B" && hexa[x].toUpperCase() != "C" && hexa[x].toUpperCase() != "D" && hexa[x].toUpperCase() != "E" && hexa[x].toUpperCase() != "F")
        {
            return 0;
        }
    }
    return 1;
}

/*
((toString(hexa[x]) > 9 && toString(hexa[x]) < 41) || (toString(hexa[x]) > 46 && toString(hexa[x]) < 97) || (toString(hexa[x]) >= 102))
((toString(hexa[x]) >= 0 && toString(hexa[x]) < 10) || (toString(hexa[x]) >= 41 && toString(hexa[x]) < 47) || (toString(hexa[x]) >= 141 && toString(hexa[x]) < 147))
*/
// -----------------------------------------------------------------------------------------------------------------------------------------|
// SELECTEUR ASSISTE
document.getElementById("selecteur_couleur_assiste").addEventListener("input", function() {
    const couleur_select = this.value;

    document.getElementById("hex_valeur").textContent = couleur_select;
    document.getElementById("rgb_valeur").textContent = convHexRgb(couleur_select);
});

// SELECTEUR MANUEL
document.getElementById("selecteur_couleur_manuel").addEventListener("input", function() {
    const couleur_select = this.value;
    
    document.getElementById("hex_valeur").textContent = couleur_select;
    document.getElementById("rgb_valeur").textContent = convHexRgb(couleur_select);
});


// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_JEU_ZONE_1_


// -----------------------------------------------------------------------------------------------------------------------------------------|
// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_ZONE_1_
// TEXTE
document.getElementById("selecteur_zone1_couleur_texte").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone1").style.color = val;
});

// FOND
document.getElementById("selecteur_zone1_couleur_fond").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone1").style.background = val;
});

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_ZONE_2_
document.getElementById("selecteur_zone2_couleur_texte").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone2").style.color = val;
});

// FOND
document.getElementById("selecteur_zone2_couleur_fond").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone2").style.background = val;
});

// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_ZONE_3_
document.getElementById("selecteur_zone3_couleur_texte").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone3").style.color = val;
});

// FOND
document.getElementById("selecteur_zone3_couleur_fond").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone3").style.background = val;
});
// -----------------------------------------------------------------------------------------------------------------------------------------|
// Selectionneur_ZONE_4_
document.getElementById("selecteur_zone4_couleur_texte").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone4").style.color = val;
});

// FOND
document.getElementById("selecteur_zone4_couleur_fond").addEventListener("click", function ()
{
    const val = document.getElementById("hex_valeur").textContent;
    if (verifcodehex(val) != 1)
        {
            console.log("[X] Erreur, valeur rentrée non interpretable :", val);
            alert("Oups, il semblerait que la couleur rensaignée sois fausse D:");
        }
    document.getElementById("zone4").style.background = val;
});
