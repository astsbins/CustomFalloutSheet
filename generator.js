const abilities = {

    "skills" : ["sneak", "larceny", "pilot","medicine", "survival", "small_guns", "energy_weapons", "big_guns",
                "explosives", "close_combat", "throwing", "athletics", "speech",
                "deception", "barter", "investigate", "search"],

    "crafts" : ["armor","weapons", "food", "gear", "machine", "pwr_armor", "robots", "construction"],

    "knowledges" : ["computers", "science", "local", "history", "creatures", "bos", "enclave", "institute", "ceasars_legion", "lone_star",
                    "supermutants"],

};

const abilty_and_skills = {
    "attributes" : ["strength","perception","endurance","charisma","intelligence","agility","luck","none"],

    "abilities" : ["sneak", "larceny", "pilot","medicine", "survival", "small_guns", "energy_weapons", "big_guns",
                 "explosives", "close_combat", "throwing", "athletics", "speech","armor","weapons", "food", "gear", "machine", "pwr_armor", "robots", "construction",
                 "deception", "barter", "investigate", "search","computers", "science", "local", "history", "creatures", "bos", "enclave", "institute", "ceasars_legion", "lone_star",
                 "supermutants","none"]

};

const special = ["strength","perception","endurance","charisma","intelligence","agility","luck"];

function capitalise(word) {
    text = word.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    return(text);
}
// let withdiv = `<div class="${modifer}"><button type="action" name="act_${modifer}">${upperWord(modifer)}</button></div>`
// let nodiv = `<button type="action" name="act_${modifer}">${upperWord(modifer)}</button>`

special.forEach(attr=>{
    console.log(`<div class="special_${attr}"><button type="action" name="act_${attr}">
${capitalise(attr.replace("_"," "))}
 <div class="special_mod">
                <input type="hidden" class="mod_total_visibility" name="attr_${attr}_visibility"
                       value="0">
                <span class="mod_total" name="attr_${attr}_mod_total" type="text"></span>
                <span class="hidden" name="attr_${attr}_conditions" value="test"></span>
                <span class="tooltip" name="attr_${attr}_tooltip"></span>
            </div>
</button>
           
     <input name="attr_${attr}_value"     type="number" placeholder="cur" min="0" max="18">
<!--     <input name="attr_${attr}_value_max" type="number" value="10" min="6" max="18">-->
     </div>`);
});


for (let abilityModsKey in abilities) {
    console.log(`<div><h4>${capitalise(abilityModsKey)}</h4></div>`);
    abilities[abilityModsKey].sort().forEach(modifier =>{
        console.log(`
        <span class="skills_${modifier}">
            <button type="action" name="act_${modifier}">${capitalise(modifier.replace("_"," "))}</button>
            <div class="skill_mod">
                <input type="hidden" class="mod_total_visibility" name="attr_${modifier}_visibility" value="0">
                <span class="mod_total" name="attr_${modifier}_mod_total">+0</span>
                <span class="hidden" name="attr_${modifier}_conditions"></span>
                <span class="tooltip" name="attr_${modifier}_tooltip"></span>
            </div>
            <input name="attr_${modifier}_value" type="number" min="-" max="18">
        </span>`);
    })
    console.log("\n")

}

console.log("\n\n\n\n")
weapon_stuff = ["atk_row_id", "weapon_name", "weapon_attribute", "weapon_skill", "weapon_mod", "weapon_damage", "weapon_damage_type "]
let finalString = 'on('
weapon_stuff.forEach(thing => {
    finalString += `"change:repeating_weapons:${thing} " +\n`
})
finalString = `${finalString.substring(0,finalString.length -2)}), eventInfo =>{
        let element = eventInfo.sourceAttribute
        let row_id = element.match(/repeating_.*_-([^_]*)/)[1]`
// weapon_stuff.forEach(thing => {
//     finalString += `repeating_weapons_-\${row_id}_${thing}\n`
// })
console.log(finalString)
// let fullList = attribute_mods.skills.concat(attribute_mods.crafts).concat(attribute_mods.knowledges);
//
// console.log(fullList)

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
//             getAttrs(["modifier"], value =>{
//                 let l;
//                 if (modifier in abilty_and_skills.attributes){
//                     l = "attribute";
//                 }else{
//                     l = "ability";
//                 }
//                 setAttrs({
//
//                          })
//             })
//
//         });
//     });
// }
let armor_locations = ["eyes", "head", "right_arm", "left_arm", "torso", "groin", "left_leg", "right_leg" ]
    armor_locations.forEach(loc =>{
        console.log(    `                    
                        <div class="armor_location" name="attr_armor_${loc}">
                            <div class="location"><strong>${capitalise(loc.replace("_"," "))}</strong></div>
                            <div class="armor_name"><input type="text" name="attr_${loc}_armor_name" placeholder="Armor Name"></div>
                            <div class="phy_dr_${loc}" >PHY<input type="number" name="attr_phy_dr_${loc}" placeholder="DR" ></div>
                            <div class="ene_dr_${loc}" >ENE<input type="number" name="attr_ene_dr_${loc}" placeholder="DR" ></div>
                            <div class="rad_rd_${loc}" >RAD<input type="number" name="attr_rad_rd_${loc}" placeholder="DR" ></div>
                            <div class="poi_dr_${loc}" >POI<input type="number" name="attr_poi_dr_${loc}" placeholder="DR" ></div>
                        </div>`)
    });

special.forEach(special =>{
    console.log(`<div class="wound_${special}_mod"><strong>${capitalise(special)}</strong> <span name="attr_wound_${special}_mod">0</span></div>`)
});

for (abilitySection in abilities){
    console.log(`<optgroup label="${capitalise(abilitySection)}">`)
    abilities[abilitySection].sort().forEach(ability =>{
        console.log(`<option value="${ability}">${capitalise(ability.replace("_", " "))}</option>`)
    })
    console.log(`</optgroup>`)
}