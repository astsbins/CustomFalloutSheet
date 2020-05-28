const attribute_mods = {

    "skills" : ["sneak", "larceny", "pilot","medicine", "survival", "small_guns", "energy", "big_guns",
                "explosives", "close_combat", "throwing", "athletics", "speech",
                "deception", "barter", "investigate", "search"],

    "crafts" : ["armor","weapons", "food", "gear", "machine", "pwr_armor", "robots", "construction"],

    "knowledges" : ["computers", "science", "local", "history", "creatures", "bos", "enclave", "institute", "ceasars_legion", "lone_star",
                    "supermutants"],

};

const abilty_and_skills = {
    "attributes" : ["strength","perception","endurance","charisma","intelligence","agility","luck","none"],

    "abilities" : ["sneak", "larceny", "pilot","medicine", "survival", "small_guns", "energy", "big guns",
                 "explosives", "close_combat", "throwing", "athletics", "speech","armor","weapons", "food", "gear", "machine", "pwr_armor", "robots", "construction",
                 "deception", "barter", "investigate", "search","computers", "science", "local", "history", "creatures", "bos", "enclave", "institute", "ceasars_legion", "lone_star",
                 "supermutants","none"]

};

const special = ["strength","perception","endurance","charisma","intelligence","agility","luck"];

function capitalise(word) {
    return(word[0].toUpperCase()+word.substring(1));
}
// let withdiv = `<div class="${modifer}"><button type="action" name="act_${modifer}">${upperWord(modifer)}</button></div>`
// let nodiv = `<button type="action" name="act_${modifer}">${upperWord(modifer)}</button>`

special.forEach(attr=>{
    console.log(`<div class="special_${attr}"><button type="action" name="act_${attr}">${attr.replace("_"," ")}</button>
     <input name="attr_${attr}_value"     placeholder="cur" type="number">
     <input name="attr_${attr}_value_max" placeholder="max" type="number"></div>\n`);
});

for (let attributeModsKey in attribute_mods) {
    console.log(`<div><h4>${capitalise(attributeModsKey)}</h4></div>`);
    attribute_mods[attributeModsKey].forEach(modifier =>{
        console.log(`<span class="${attributeModsKey}_${modifier}"><button type="action" name="act_${modifier}">${modifier.replace("_"," ")}</button><input name="attr_${modifier}_value" type="number"></span>`);
    })
    console.log("\n")

}
// let fullList = attribute_mods.skills.concat(attribute_mods.crafts).concat(attribute_mods.knowledges);
//
// console.log(fullList)
//
// for (let key in abilty_and_skills) {
//     abilty_and_skills.key.forEach(modifier =>{
//         on(`clicked:${key}`, () => {
//             let final_label = capitalise(modifier);
//             if (final_label === "attr"){
//                 final_label = "No Attribute";
//             }
//             if (final_label === "abil"){
//                 final_label = "No Ability";
//             }
//
//
//         });
//     });
// }