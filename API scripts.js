//#######AP tracker
function getCleanImgsrc(imgsrc) {
    var parts = imgsrc.match(/(.*\/images\/.*)(thumb|med|original|max)([^\?]*)(\?[^?]+)?$/);
    if (parts) {
        return parts[1] + 'thumb' + parts[3] + (parts[4] ? parts[4] : `?${Math.round(Math.random() * 9999999)}`);
    }
    return;
}

var APimages = {
    "_min": 0,
    "_max": 6,
    0: "https://s3.amazonaws.com/files.d20.io/images/135028097/vaWM-ocSe0sckCQPjc4dag/max.png?1589608921",
    1: "https://s3.amazonaws.com/files.d20.io/images/135028119/odC1CH3rkeX9X9w7mhbzSA/max.png?1589608936",
    2: "https://s3.amazonaws.com/files.d20.io/images/135028127/5Y-1b2j9CWMxFxqA2oaFGQ/max.png?1589608939",
    3: "https://s3.amazonaws.com/files.d20.io/images/135028134/p_O0szyS5TBPjSEMT6eKNA/max.png?1589608941",
    4: "https://s3.amazonaws.com/files.d20.io/images/135028139/gzY2Fyexg2_YhWz5V52LDw/max.png?1589608944",
    5: "https://s3.amazonaws.com/files.d20.io/images/135028150/hf1VglWFsmJ_Bgmku1Gmuw/max.png?1589608947",
    6: "https://s3.amazonaws.com/files.d20.io/images/135028160/i1OtNXHawq0DJ2F2kiuZMA/max.png?1589608950",
};

var DPimages = {
    "_min": -5,
    "_max": 20,
    "-5": "https://s3.amazonaws.com/files.d20.io/images/135466825/H7_okuIMG6N9h_0XVW1PqA/max.png?1589699105",
    "-4": "https://s3.amazonaws.com/files.d20.io/images/135466824/q0-o6zI4yT28XNRAsIrxBw/max.png?1589699105",
    "-3": "https://s3.amazonaws.com/files.d20.io/images/135466833/nv82hmloURVmp4DRVt8UQQ/max.png?1589699105",
    "-2": "https://s3.amazonaws.com/files.d20.io/images/135466827/h_Z3JAjSeSGojO8Yh9Rcnw/max.png?1589699105",
    "-1": "https://s3.amazonaws.com/files.d20.io/images/135466823/yCp6rdTV5rjZl2LK4zQ48Q/max.png?1589699105",
    "0": "https://s3.amazonaws.com/files.d20.io/images/135466826/c5KLlWe7q7DiZA71IIc5gw/max.png?1589699105",
    "1": "https://s3.amazonaws.com/files.d20.io/images/135466830/2qH5iuCpVvGwIzbW8d8t6w/max.png?1589699105",
    "2": "https://s3.amazonaws.com/files.d20.io/images/135466829/Co4QuLjTS3iCRlrGhVUbzw/max.png?1589699105",
    "3": "https://s3.amazonaws.com/files.d20.io/images/135466831/pB__lCAbIeL4rXj-hSiWmQ/max.png?1589699105",
    "4": "https://s3.amazonaws.com/files.d20.io/images/135466832/ArroVkBLE210vfXUc5BwUQ/max.png?1589699105",
    "5": "https://s3.amazonaws.com/files.d20.io/images/135469281/27GTxgD12oI-5e9CsJZ03Q/max.png?1589700327",
    "6": "https://s3.amazonaws.com/files.d20.io/images/135466828/h6ecKPKGyR5Ow6yL_KNeww/max.png?1589699105",
    "7": "https://s3.amazonaws.com/files.d20.io/images/135466898/V5gk7B5n3eQaSneQW9HaFg/max.png?1589699131",
    "8": "https://s3.amazonaws.com/files.d20.io/images/135466897/UkWXEnz6gg7NbPjvNvyTYA/max.png?1589699131",
    "9": "https://s3.amazonaws.com/files.d20.io/images/135466888/lNgCoUR55827axqVUTG7Dw/max.png?1589699130",
    "10": "https://s3.amazonaws.com/files.d20.io/images/135466893/aMwuXvRuGwiQqkZDVadnjw/max.png?1589699131",
    "11": "https://s3.amazonaws.com/files.d20.io/images/135466892/DYLZx5Hs0blf7HPdt5XLAg/max.png?1589699131",
    "12": "https://s3.amazonaws.com/files.d20.io/images/135466899/BIAcMUb_a_JiWVncGqV7HQ/max.png?1589699131",
    "13": "https://s3.amazonaws.com/files.d20.io/images/135466895/_7rysYfW6Z2T1hlymITL0w/max.png?1589699131",
    "14": "https://s3.amazonaws.com/files.d20.io/images/135466894/heO_StgQdjcn_wMEQ5NaiQ/max.png?1589699131",
    "15": "https://s3.amazonaws.com/files.d20.io/images/135486352/8heM3TF8ajwHs44hj82sog/max.png?1589707573",
    "16": "https://s3.amazonaws.com/files.d20.io/images/135466889/UKmsxke8wBmPhKNW3bnwFg/max.png?1589699130",
    "17": "https://s3.amazonaws.com/files.d20.io/images/135466896/Bukbp6TRM8lIZizx1AIwTQ/max.png?1589699131",
    "18": "https://s3.amazonaws.com/files.d20.io/images/135466890/Uah-JdkPeLJgkicxIsf57g/max.png?1589699130",
    "19": "https://s3.amazonaws.com/files.d20.io/images/135466958/yA9phLIL4UJt0-DE5fdCFw/max.png?1589699159",
    "20": "https://s3.amazonaws.com/files.d20.io/images/135466957/v5xHgfMExcwZz7akpdXNLw/max.png?1589699159",
}

const APcommand = "!ActionPoints ";
const APtrackerName = "Action Point Tracker";
const APattributeName = "Action_Points";

const DPcommand = "!Doom ";
const DPtrackerName = "Doom Tracker";
const DPattributeName = "Doom";


function changeTracker(trackerName, attributeName, images, change) {
    let current;
    let min = images._min;
    let max = images._max;
    let pointsName = attributeName.replace("_", " ");
    let flag;
    let message = "";
    trackerObjs = findObjs({"name": trackerName});
    _.each(trackerObjs, function (obj) {
        trackerAttributes = findObjs({
            "_characterid": obj.get("_id"),
            "name": attributeName
        });
        _.each(trackerAttributes, function (attribute) {
            current = Number(attribute.get("current"));

            if (change == "increment") {
                if (current < max) {
                    current++;
                } else {
                    message = `Cannot further increase ${pointsName}, it is already at ${max}.`;
                    flag = "atMax";
                }
            }
            if (change == "decrement") {
                if (current > min) {
                    current--
                } else {
                    message = `Cannot further decrease ${pointsName}, it is already at ${min}.`;
                    flag = "atMin"
                }
            }
            attribute.set({"current": current});


        });
        let image = getCleanImgsrc(images[current]);

        obj.set({"imgsrc": image})
        obj.set({"avatar": image});

    });

    if (message == "") {
        message = `You now have  ${current} ${pointsName}.`;
    }
    sendChat("Point Tracker", message);
    return ({
        "current": current,
        "flag": flag
    });
}

on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf(APcommand) !== -1) {
        message = "";
        let action = msg.content.replace(APcommand, "");
        response = changeTracker(APtrackerName, APattributeName, APimages, action)

        if (response.flag == "atMin") {
            sendChat("Point Tracker", "You have gained one DOOM");
            changeTracker(DPtrackerName, DPattributeName, DPimages, "increment");
        }
    }
    if (msg.type == "api" && msg.content.indexOf(DPcommand) !== -1) {
        let action = msg.content.replace(DPcommand, "");
        changeTracker(DPtrackerName, DPattributeName, DPimages, action);
    }
});


//################# resets
on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!resetmaindice") !== -1) {
        let charid = msg.content.replace("!resetmaindice", "").replace(" ", "")
        // sendChat("ese", `charid ${charid}`)
        // sendChat("ese", JSON.stringify(msg))
        let attr = findObjs({
            "type": "attribute",
            "_characterid": charid,
            "name": "num_dice"
        })[0]
        // strength = getAttrByName("-M9sB3Dge23yg9HW_lCu", 'selected_attribute')
        attr.set("current", 2)

        let attr2 = findObjs({
            "name": "atk_mod"
        })[0]


        // sendChat("ese", attr2.get("name"))
    }

});
//The following tables really should be put into functions to reduce reptitions, but i really can't be bothered...
const attributes = ["strength", "perception", "endurance", "charisma", "intelligence", "agility", "luck", "noattr"];

const abilities = ["sneak", "larceny", "pilot", "medicine", "survival", "small_guns", "energy_weapons", "big_guns",
    "explosives", "close_combat", "throwing", "athletics", "speech", "armor", "weapons", "food", "gear", "machine", "pwr_armor", "robots", "construction",
    "deception", "barter", "investigate", "search", "computers", "science", "local", "history", "creatures", "bos", "enclave", "institute", "ceasars_legion", "lone_star",
    "supermutants", "noabil"];
//###########################standard roll
on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!apiroll") !== -1) {


        let roll_str = msg.content.toString().replace(/\$|!apiroll|\r\n|\n|\r/gm, "")
        let rollobj = JSON.parse(roll_str)
        function getAttr(name, suppress_error = false) {
            let attr = findObjs({
                "type": "attribute",
                "name": name,
                "_characterid": rollobj["charid"]
                // "name" : `repeating_attacks_-MCB3rok66Fn1oLGri02_atk_num_dice`
            }, {caseInsensitive: true})[0]

            if (attr == undefined) {
                if (suppress_error == false) {
                    sendChat("Error", `${name} is not initialised or invalid, it will probably cause errors, api may beed to be reset.
                    Also try changing the value of ${name} to something else, click away, then changing back to orginal value again and see if it fixes things`)
                }
                console.log("Error", `${name} is not initialised or invalid`)
                return undefined
            } else {
                return attr.get("current")
            }
        }
        let main_roll = rollobj["title"]
        let total_mod = ""
        let target_number = 0
        rollobj["stats"].forEach(stat_name => {
            if (stat_name != "no_attribute" && stat_name != "no_ability") {
                let stat = `${rollobj["character_name"]}|${stat_name}`
                let main_stat_mod = 0;
                if (attributes.includes(stat_name)) {
                    main_stat_mod = getAttr(`main_attribute_mod`,true)
                }else {
                    main_stat_mod = getAttr(`main_ability_mod`,true)
                }
                if (main_stat_mod == undefined) {
                    main_stat_mod = 0
                }
                target_number += parseInt(`${getAttr(`${stat_name}_value`)}`) + parseInt(`${getAttr(`${stat_name}_mod_total`)}`) + parseInt(main_stat_mod)

                let stat_mod = `[[@{${stat}_value}+@{${stat}_mod_total}+${main_stat_mod}]]`

                total_mod += `@{${stat}_value}+@{${stat}_mod_total}+`
                main_roll += `{{${capitalise(stat_name.replace("_", " "))}: ${stat_mod} = @{${stat}_value} Base `
                if  (main_stat_mod != 0){
                    if (main_stat_mod > 0) {
                        main_roll += `+${main_stat_mod} mod`
                    }else{
                        main_roll += `${main_stat_mod} mod`
                    }
                }
                log("cur stat " + stat)
                let tooltip = getAttr(`${stat_name}_tooltip`)
                log(`tooltip ${tooltip}`)
                if (`${tooltip}`.length > 5 && tooltip != undefined) {
                    main_roll += `\n@{${stat}_tooltip}`
                }
                main_roll += "}}"
            }
        })
        let rolls = [];
        let roll_html = `<span class="roll">`;
        let roll_successes = 0;
        let crit = parseInt(`${getAttr(`main_crit`)}`)
        let botch = parseInt(`${getAttr(`main_botch`)}`)
        let num_dice = getAttr(`num_dice`)
        let roll_tooltip = `<div class="roll_tooltip">Rolling ${num_dice}d20<${target_number} = \n`
        for (let i = 0; i < parseInt(num_dice); i++) {
            let roll = Math.ceil(Math.random() * 20)
            rolls.push(roll)
            if (roll <= target_number) {
                roll_successes++;
            }
            let roll_display = `${roll}`
            if (roll <= crit) {
                roll_display = `<span class="roll_crit" style="background-color: black; font-weight: bold">${roll}</span>`
                roll_successes++;
            }

            if (roll >= botch) {
                roll_display = `<span class="roll_botch" style="background-color: black; font-weight: bold">${roll}</span>`
                roll_successes--;
            }


            roll_tooltip += `${roll_display}+`
        }
        roll_html += roll_successes.toString()
        roll_html += `</span>`
        roll_tooltip = roll_tooltip.slice(0, -1)
        roll_tooltip += `</div>`
        let test_html = `<span class="test">test</span>`
        main_roll += `{{Successes=${roll_html}${roll_tooltip} }}`

        // sendChat("test", `${rollobj["roll"]}`)
        sendChat("test", "&{template:custom}"+main_roll+"{{=\n}}")
        //reset atk_dice_num to 2
        let numdice = findObjs({
            "type": "attribute",
            "name": `num_dice`,
            "_characterid": rollobj["charid"]
        }, {caseInsensitive: true})[0]
        numdice.set("current", 2)
    }
})

//##########################attacks
on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!apiAttac2") !== -1) {
        let atk_roll_str = msg.content.toString().replace(/!apiAttac2|\r\n|\n|\r/gm  , "")
        function getAttr(name, suppress_error = false){
            let attr = findObjs({
                "type": "attribute",
                "name" : name,
                "_characterid" : atkobj["charid"]
                // "name" : `repeating_attacks_-MCB3rok66Fn1oLGri02_atk_num_dice`
            },{caseInsensitive: true})[0]

            if (attr == undefined) {
                if (suppress_error==false){
                    sendChat("Error", `${name} is not initialised or invalid, it will probably cause errors, api may beed to be reset.
                    Also try changing the value of ${name} to something else, click away, then changing back to orginal value again and see if it fixes things`)
                }
                console.log("Error", `${name} is not initialised or invalid`)
                return undefined
            } else {
                return attr.get("current")
            }
        }

        let atkobj = JSON.parse(atk_roll_str)
        let atk_num_dice = getAttr(`repeating_attacks_${atkobj["rowid"]}_atk_num_dice`)
        // sendChat("atk_num_dice", atk_num_dice.toString())

        let atk_roll = atkobj["title"]
        let total_mod = ""
        let target_number = 0
        atkobj["stats"].forEach(stat_name => {
            let stat = `${atkobj["character_name"]}|${stat_name}`
            let main_stat_mod = 0;
            if (attributes.includes(stat_name)) {
                main_stat_mod = getAttr(`main_attribute_mod`,true)
            }else {
                main_stat_mod = getAttr(`main_ability_mod`,true)
            }
            if (main_stat_mod == undefined) {
                main_stat_mod = 0
            }
            target_number += parseInt(`${getAttr(`${stat_name}_value`)}`) + parseInt(`${getAttr(`${stat_name}_mod_total`)}`) + parseInt(main_stat_mod)

            let stat_mod = `[[@{${stat}_value}+@{${stat}_mod_total}+${main_stat_mod}]]`

            total_mod += `@{${stat}_value}+@{${stat}_mod_total}+`
            atk_roll += `{{${capitalise(stat_name.replace("_", " "))}: ${stat_mod} = @{${stat}_value} Base `
            if  (main_stat_mod != 0){
                if (main_stat_mod > 0) {
                    atk_roll += `+${main_stat_mod} mod`
                }else{
                    atk_roll += `${main_stat_mod} mod`
                }
            }
            log("cur stat " + stat)
            let tooltip = getAttr(`${stat_name}_tooltip`)
            log(`tooltip ${tooltip}`)
            if (`${tooltip}`.length > 5 && tooltip != undefined) {
                atk_roll += `\n@{${stat}_tooltip}`
            }
            atk_roll += "}}"
        })

        //weapon mod
        let weapon_mod = getAttr(`repeating_weapons_-${atkobj["wepid"]}_weapon_mod`)
        if (weapon_mod != undefined && weapon_mod !=0){
            atk_roll += `{{Weapon=${weapon_mod} }}`
            target_number += parseInt(weapon_mod)
        }

        let rolls = [];
        let roll_html = `<span class="roll">`;
        let roll_successes = 0;
        let crit =  parseInt(`${getAttr(`repeating_attacks_${atkobj["rowid"]}_atk_crit`)}`)
        let botch =  parseInt(`${getAttr(`repeating_attacks_${atkobj["rowid"]}_atk_botch`)}`)
        log(`atknumdice ${atk_num_dice}`)
        let roll_tooltip = `<div class="roll_tooltip">Rolling ${atk_num_dice}d20<${target_number} = \n`
        for (let i = 0; i < parseInt(atk_num_dice) ; i++) {
            let roll = Math.ceil(Math.random()*20)
            rolls.push(roll)
            if (roll <= target_number) {
                roll_successes++;
            }
            let roll_display = `${roll}`
            if (roll <= crit) {
                roll_display = `<span class="roll_crit" style="background-color: black; font-weight: bold">${roll}</span>`
                roll_successes++;
            }

            if (roll >= botch) {
                roll_display = `<span class="roll_botch" style="background-color: black; font-weight: bold">${roll}</span>`
                roll_successes--;
            }


            roll_tooltip += `${roll_display}+`
        }
        roll_html += roll_successes.toString()
        roll_html += `</span>`
        roll_tooltip = roll_tooltip.slice(0, -1)
        roll_tooltip += `</div>`
        let test_html = `<span class="test">test</span>`
        atk_roll += `{{Successes=${roll_html}${roll_tooltip} }}`


        //generate table
        function genTable(table_name){
            let table_id = findObjs({
                "_type" : "rollabletable",
                "name"  : table_name
            })[0].get("_id")

            let table_objects = findObjs({
                "_type" : "tableitem",
                "_rollabletableid": table_id
            });
            let table = {}
            let count = 1
            let table_output = `&{template:custom}{{title=table}}`
            table_objects.forEach( item =>{
                for (let i = 0; i < item.get("weight"); i++) {
                    table[count] = [item.get("name"), item.get("avatar")]
                    // table_output += `{{${item.get("name")} : ${item.get("weight")}= <img src="${item.get("avatar")}">}}`
                    count++;
                }
                // sendChat("table", `${item.get("name")}   ${item.get("weight")} [ [[ ](http://tinyurl.com/B14Star1#.png)`)
            });
            table["num_items"] = count-1
            log(JSON.stringify(table))
            return table
        }
        let table = genTable("Combat-Dice")
        let weapon_damage =parseInt(getAttr(`repeating_weapons_-${atkobj["wepid"]}_weapon_damage`))
        let damage_done = 0
        let num_special_events = 0
        // sendChat("damage", `${weapon_damage}`)
        let damage_output = `{{desc=`
        for (let i = 0; i <weapon_damage ; i++) {
            let roll = Math.ceil(Math.random()*table["num_items"])
            damage_output += ` <img src="${table[roll][1]}"> `
            let roll_result = table[roll][0].toLowerCase()
            if (roll_result.includes("special")) {
                num_special_events += 1
            }
            roll_result =parseInt(roll_result.replace(/([a-zA-Z\+])/gm,""))
            damage_done += roll_result

        }
        damage_output += `\n${damage_done} ${atkobj["dmg_type"]} damage`
        if (num_special_events > 0) {
            damage_output += ` with ${num_special_events} `
            let special_events = getAttr(`repeating_attacks_${atkobj["rowid"]}_damage_effects`,true)
            if (special_events!=undefined && special_events!="") {
                damage_output += `${special_events}`
            } else {
                damage_output += "Special Events"
            }
        }
        atk_roll += `${damage_output} to the [[1t[Wound-Table]]]}}`
        sendChat(msg.who, `&{template:custom} ${atk_roll}`)
        //reset atk_dice_num to 2
        let numdice = findObjs({
            "type": "attribute",
            "name" : `repeating_attacks_${atkobj["rowid"]}_atk_num_dice`,
            "_characterid" : atkobj["charid"]
            // "name" : `repeating_attacks_-MCB3rok66Fn1oLGri02_atk_num_dice`
        },{caseInsensitive: true})[0]
        numdice.set("current",2)
    }

})