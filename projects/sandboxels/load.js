if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(str, newStr) {
        if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
            return this.replace(str, newStr);
        }
        return this.replace(new RegExp(str, 'g'), newStr);
    };
};

urlParams = new URLSearchParams(window.location.search);

const LSPrefix = "R74nMain-";
class R74nClass {
    constructor() {
        this.R74n = () => {
            console.log("R74n")
        }
        this.start = new Date();
    }
    get(key) {
        return localStorage.getItem(LSPrefix + key);
    }
    set(key, value) {
        return localStorage.setItem(LSPrefix + key, value);
    }
    add(key, value) {
        var old = R74n.get(key);
        if (!old) {
            return R74n.set(key, value);
        }
        if (isNaN(parseFloat(old))) {
            try {
                var parsed = JSON.parse(old);
                if (Array.isArray(parsed)) {
                    parsed.push(value);
                    return R74n.set(key, JSON.stringify(parsed));
                }
            } catch {
                return R74n.set(key, old + value);
            }
        }
        return R74n.set(key, parseFloat(old) + value);
    }
    del(key) {
        return localStorage.removeItem(LSPrefix + key);
    }
    keys() {
        return listLS(LSPrefix);
    }
}
const R74n = new R74nClass();

function listLS(prefix) {
    prefix = prefix || "";
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith(prefix)) {
            keys.push(localStorage.key(i).replace(prefix, ""));
        }
    }
    return keys;
}

function getJSON(url) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
}

function schemaDate(date) {
    return date.toISOString().split('T')[0];
}

function addSchema(schema, id) {
    var structuredDataText = JSON.stringify(schema);
    if (document.getElementById(id)) {
        document.getElementById(id).remove();
    }
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = structuredDataText;
    script.id = id;
    document.head.appendChild(script);
}

window.addEventListener("load", function() {

    // Console Watermark
    console.log("%c WELCOME TO R74n ", "position: absolute; top: 50%; right: 50%; transform: translate(50%,-50%); font-family: Arial; font-size: 3em; font-weight: 700; color: #00ffff; text-shadow: 1px 1px 1px #14c9c9, 1px 2px 1px #14c9c9, 1px 3px 1px #14c9c9, 1px 4px 1px #14c9c9, 1px 5px 1px #14c9c9, 1px 13px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4);padding:10px")

    function callRue() {
        if (typeof Rue === "undefined" && !document.getElementById("rueScript")) {
            console.log("Calling Rue...")
            document.body.insertAdjacentHTML("beforeend", `<div style="position:absolute;top:1em;right:1em;padding-right:1em;padding-left:1em;display:block;text-align:center;border:solid white;background:rgb(107, 107, 107);border-radius:100px;height:2em;line-height:2em;width:10em;cursor:pointer" id="rueCallerBox" onclick="this.style.display='none'">☎️ Calling Rue...</div>`);
            var script = document.createElement("script");
            script.id = "rueScript";
            script.onload = function() {
                document.getElementById("rueCallerBox").remove();
                var rueHasLoaded = setInterval(function() {
                    if (typeof Rue !== "undefined") {
                        clearInterval(rueHasLoaded);
                        document.getElementById("rueInput").focus();
                        Rue.blink();
                        Rue.say("Hello! Type in certain commands to make me do things.");
                    }
                }, 10);
            }
            script.onerror = function() {
                console.log("Rue failed to load!");
                document.getElementById("rueCallerBox").innerHTML = "❌ Rue failed to load!";
                setTimeout(function() {
                    document.getElementById("rueCallerBox").remove();
                }, 2000);
            }
            script.src = "https://r74n.com/rue/rue.js";
            document.head.appendChild(script);
        } else {
            console.log("Rue is already here!");
        }
    }
    if (urlParams.get("rue") && urlParams.get("rue") !== "false" && urlParams.get("rue") !== "off") {
        callRue();
    }

    // if metaKey + shift + R is pressed, add Rue script to the head
    window.addEventListener("keydown", function(e) {
        if (e.shiftKey && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "e") {
            callRue();
            e.preventDefault();
        }
    });

}); <
/script> <
script >
    // replaceAll polyfill
    if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function(str, newStr) {
            if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
                return this.replace(str, newStr);
            }
            return this.replace(new RegExp(str, "g"), newStr);
        };
    }
// requestFullScreen
function requestFullScreen(element) {
    /* Supports most browsers and their versions.*/
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
        /*Native full screen.*/
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        /*Older IE.*/
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
} <
/script> <
script >
    // Mod Loader
    runAfterLoadList = [];
// runAfterLoad() takes a function and adds it to the runAfterLoadList.
function runAfterLoad(func) {
    runAfterLoadList.push(func);
}
// If the localStorage key "enabledMods" exists, load it as an array.
// If it doesn't exist, create an empty array.
enabledMods = ["https://gloabe.github.io/projects/sandboxels/mods/libhooktick.js", "https://gloabe.github.io/projects/sandboxels/mods/betterMenuScreens.js", "https://gloabe.github.io/projects/sandboxels/mods/velocity.js", "https://gloabe.github.io/projects/sandboxels/mods/betterSettings.js", "https://gloabe.github.io/projects/sandboxels/mods/betterStats.js", "https://gloabe.github.io/projects/sandboxels/mods/elementsManager.js", "https://gloabe.github.io/projects/sandboxels/mods/evenmoretemptools.js", "https://gloabe.github.io/projects/sandboxels/mods/prompt.js"]
// Run all scripts in the enabledMods array, if it fails print to console
for (var i = 0; i < enabledMods.length; i++) {
    try {
        var script = document.createElement("script");
        var src = enabledMods[i];
        script.src = src;
        document.head.appendChild(script);
    } catch (e) {
        console.log("Error in mod: " + enabledMods[i]);
        console.log(e);
    }
} <
/script> <
script >
    // If settings is in localStorage, load it. If not, create an empty object.
    settings = localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : {};
if (!settings["unlocked"]) {
    settings["unlocked"] = {};
}

function saveSettings() {
    localStorage.setItem("settings", JSON.stringify(settings));
}

defaultCooldown = 8;
behaviors = {
    POWDER_OLD: ["XX|XX|XX", "XX|XX|XX", "M2|M1|M2"],
    POWDER: function(pixel) {
        if (pixel.start === pixelTicks) {
            return;
        }
        if (pixel.charge && elements[pixel.element].behaviorOn) {
            pixelTick(pixel);
        }
        if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
            if (Math.random() < 0.5) {
                if (!tryMove(pixel, pixel.x + 1, pixel.y + 1)) {
                    tryMove(pixel, pixel.x - 1, pixel.y + 1);
                }
            } else {
                if (!tryMove(pixel, pixel.x - 1, pixel.y + 1)) {
                    tryMove(pixel, pixel.x + 1, pixel.y + 1);
                }
            }
        }
        doDefaults(pixel);
    },
    AGPOWDER: ["M2|M1|M2", "XX|XX|XX", "XX|XX|XX"],
    LIQUID_OLD: ["XX|XX|XX", "M2|XX|M2", "M1|M1|M1"],
    LIQUID: function(pixel) {
        if (pixel.start === pixelTicks) {
            return;
        }
        if (pixel.charge && elements[pixel.element].behaviorOn) {
            pixelTick(pixel);
        }
        if (elements[pixel.element].viscosity && !(Math.random() * 100 < 100 / elements[pixel.element].viscosity ** 0.25)) {
            var move1Spots = [
                [pixel.x, pixel.y + 1]
            ];
        } else {
            var move1Spots = [
                [pixel.x + 1, pixel.y + 1],
                [pixel.x, pixel.y + 1],
                [pixel.x - 1, pixel.y + 1],
            ];
        }
        var moved = false;
        for (var i = 0; i < move1Spots.length; i++) {
            var coords = move1Spots[Math.floor(Math.random() * move1Spots.length)];
            if (tryMove(pixel, coords[0], coords[1])) {
                moved = true;
                break;
            } else {
                move1Spots.splice(move1Spots.indexOf(coords), 1);
            }
        }
        if (!moved) {
            if (elements[pixel.element].viscosity === undefined || !!(Math.random() * 100 < 100 / elements[pixel.element].viscosity ** 0.25)) {
                if (Math.random() < 0.5) {
                    if (!tryMove(pixel, pixel.x + 1, pixel.y)) {
                        tryMove(pixel, pixel.x - 1, pixel.y);
                    }
                } else {
                    if (!tryMove(pixel, pixel.x - 1, pixel.y)) {
                        tryMove(pixel, pixel.x + 1, pixel.y);
                    }
                }
            }
        }
        doDefaults(pixel);
    },
    SLIDE: ["XX|XX|XX", "XX|XX|M2 AND BO", "XX|M1|M1"],
    AGLIQUID: ["M1|M1|M1", "M2|XX|M2", "XX|XX|XX"],
    WALL: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"],
    UL_UR: ["M1|M1|M1", "M2|XX|M2", "XX|M2|XX"],
    GAS_OLD: ["M2|M1|M2", "M1|XX|M1", "M2|M1|M2"],
    GAS: function(pixel) {
        if (pixel.start === pixelTicks) {
            return;
        }
        if (pixel.charge && elements[pixel.element].behaviorOn) {
            pixelTick(pixel);
        }
        var move1Spots = [
            [pixel.x, pixel.y + 1],
            [pixel.x, pixel.y - 1],
            [pixel.x + 1, pixel.y],
            [pixel.x - 1, pixel.y],
        ];
        var moved = false;
        for (var i = 0; i < move1Spots.length; i++) {
            var coords = move1Spots[Math.floor(Math.random() * move1Spots.length)];
            if (tryMove(pixel, coords[0], coords[1])) {
                moved = true;
                break;
            } else {
                move1Spots.splice(move1Spots.indexOf(coords), 1);
            }
        }
        if (!moved) {
            var move2Spots = [
                [pixel.x + 1, pixel.y + 1],
                [pixel.x - 1, pixel.y + 1],
                [pixel.x + 1, pixel.y - 1],
                [pixel.x - 1, pixel.y - 1],
            ];
            for (var i = 0; i < move2Spots.length; i++) {
                var coords = move2Spots[Math.floor(Math.random() * move2Spots.length)];
                if (tryMove(pixel, coords[0], coords[1])) {
                    break;
                } else {
                    move2Spots.splice(move2Spots.indexOf(coords), 1);
                }
            }
        }
        doDefaults(pixel);
    },
    DGAS: ["M2|M1|M2", "M1|DL%5|M1", "M2|M1|M2"],
    SUPPORT: ["XX|XX|XX", "SP|XX|SP", "XX|M1|XX"],
    SUPPORTPOWDER: ["XX|XX|XX", "SP|XX|SP", "M2|M1|M2"],
    DELETE: ["XX|DL|XX", "DL|XX|DL", "XX|DL|XX"],
    FILL: ["XX|CL|XX", "CL|XX|CL", "XX|CL|XX"],
    CLONER: ["XX|CF|XX", "CF|XX|CF", "XX|CF|XX"],
    STURDYPOWDER: ["XX|XX|XX", "XX|XX|XX", "XX|M1|XX"],
    SELFDELETE: ["XX|XX|XX", "XX|DL|XX", "XX|XX|XX"],
    FOAM: ["XX|XX|XX", "XX|DL%5|XX", "M2%25|M1%25|M2%25"],
    BUBBLE: ["XX|XX|XX", "XX|DL%0.25 AND FX%1|M1%5", "XX|M1%1|M1%2"],
    STICKY: ["XX|ST|XX", "ST|XX|ST", "XX|ST AND M1|XX"],
    MOLTEN: ["XX|CR:fire%2.5|XX", "M2|XX|M2", "M1|M1|M1"],
    RADPOWDER: ["XX|CR:radiation%2|XX", "CR:radiation%2|XX|CR:radiation%2", "M2|M1|M2"],
    RADMOLTEN: ["XX|CR:fire,radiation%4.5|XX", "M2 AND CR:radiation%2|XX|M2 AND CR:radiation%2", "M1|M1|M1"],
    RADLIQUID: ["XX|CR:radiation%2|XX", "M2 AND CR:radiation%2|XX|M2 AND CR:radiation%2", "M1|M1|M1"],
    BOUNCY: function(pixel) {
        if (pixel.vx === undefined) {
            // choose 1, 0, or -1
            pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
            pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
            // if both are 0, make one of them 1 or -1
            if (pixel.vx === 0 && pixel.vy === 0) {
                if (Math.random() < 0.5) {
                    pixel.vx = Math.random() < 0.5 ? 1 : -1;
                } else {
                    pixel.vy = Math.random() < 0.5 ? 1 : -1;
                }
            }
        }
        // move and invert direction if hit
        if (pixel.vx && !tryMove(pixel, pixel.x + pixel.vx, pixel.y)) {
            pixel.vx = -pixel.vx;
        }
        if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y + pixel.vy)) {
            pixel.vy = -pixel.vy;
        }
    },
    FEEDPIXEL: function(pixel) {
        if (!pixel.food) {
            pixel.food = 1;
        } else {
            pixel.food++;
        }
        if (pixel.food > (elements[pixel.element].foodNeed || 30)) {
            // loop through adjacentCoords and check each pixel to lay an egg
            for (var i = 0; i < adjacentCoords.length; i++) {
                var x = pixel.x + adjacentCoords[i][0];
                var y = pixel.y + adjacentCoords[i][1];
                if (isEmpty(x, y)) {
                    if (elements[pixel.element].egg) {
                        createPixel(elements[pixel.element].egg, x, y);
                    } else {
                        createPixel("egg", x, y);
                        pixelMap[x][y].animal = elements[pixel.element].baby || pixel.element;
                    }
                    pixel.food = 0;
                    break;
                }
            }
        }
    },
};
eLists = {
    ANIMAL: ["flea", "ant", "fly", "firefly", "bee", "frog", "fish", "worm", "termite", "rat", "slug", "snail"],
    CLEANANIMAL: ["ant", "firefly", "bee", "frog", "fish"],
};

airDensity = 1.225; // kg/m^3
airTemp = 20; // Celsius

// Element Properties
// name - display name of the element [optional]
// color - color of the element's pixel
// behavior - behavior of the element
// ignore - elements to ignore in behavior [must be an array]
// category - category in which the element will show up in
// density - density of the element [only used for movable elements] (kg/m^3)
// state - solid, liquid, or gas [only used for movable elements]
// reactions - instructions for when elements attempt to move onto each other (object)
// conduct - conductivity of the element (0-1)
// behaviorOn - behavior to override when powered
// colorOn - color to change to when powered
// temp - default temperature of the element (Celsius)
// tempHigh - highest temperature before state change (Celsius)
// tempLow - lowest temperature before state change (Celsius)
// stateHigh - element transformed into when tempHigh is reached
// stateLow - element transformed into when tempLow is reached
// viscosity - how slow a liquid will move (higher = slower) (cps)
// burn - chance of burning per tick (0-100) (%)
// burnTime - time to burn (ticks)
// burnInto - element to turn into after burning
// fireColor - color of the flame given off when burning
// burning - whether the element is burning on creation
// charge - charge of the element on creation
// hardness - chance of resisting damage (0-1)
elements = {
    heat: {
        //hard-coded
        color: "#ff0000",
        behavior: ["HT:2|HT:2|HT:2", "HT:2|HT:2|HT:2", "HT:2|HT:2|HT:2"],
        temp: 2,
        category: "tools",
        insulate: true,
    },
    cool: {
        //hard-coded
        color: "#0000ff",
        behavior: ["CO:2|CO:2|CO:2", "CO:2|CO:2|CO:2", "CO:2|CO:2|CO:2"],
        temp: -2,
        category: "tools",
        insulate: true,
    },
    erase: {
        //hard-coded
        color: "#fdb5ff",
        behavior: ["DL|DL|DL", "DL|DL|DL", "DL|DL|DL"],
        category: "tools",
    },
    pick: {
        //hard-coded
        color: ["#fa9b9b", "#fae99b", "#9bfab7", "#9b9dfa"],
        behavior: ["CF|CF|CF", "CF|DL%5|CF", "CF|CF|CF"],
        category: "tools",
    },
    mix: {
        //hard-coded
        color: ["#fff4b5", "#a6a6a6"],
        behavior: ["SW|SW|SW", "SW|DL%5|SW", "SW|SW|SW"],
        category: "tools",
    },
    lookup: {
        //hard-coded
        color: ["#919c9c", "#72abab", "#919c9c"],
        behavior: behaviors.WALL,
        category: "tools",
    },
    shock: {
        //hard-coded
        color: "#ffff00",
        behavior: ["SH|SH|SH", "SH|DL%5|SH", "SH|SH|SH"],
        category: "tools",
    },
    paint: {
        color: ["#c27070", "#c29c70", "#c2c270", "#70c270", "#70c2c2", "#7070c2", "#c270c2"],
        tool: function(pixel) {
            if (!shiftDown) {
                pixel.color = pixelColorPick(pixel, currentColor);
            } else {
                // convert the hex of currentColor to rgb and set it as a string
                var rgb = currentColor.replace("#", "").match(/.{1,2}/g);
                for (var i = 0; i < rgb.length; i++) {
                    rgb[i] = parseInt(rgb[i], 16);
                }
                pixel.color = "rgb(" + rgb.join(",") + ")";
            }
        },
        customColor: true,
        category: "tools",
    },
    unpaint: {
        color: ["#ffffff", "#000000"],
        tool: function(pixel) {
            if (!elements[pixel.element].customColor) {
                pixel.color = pixelColorPick(pixel);
            }
        },
        ignore: ["color_sand", "stained_glass"],
        category: "tools",
    },
    sand: {
        color: "#e6d577",
        behavior: behaviors.POWDER,
        tempHigh: 1700,
        stateHigh: "molten_glass",
        category: "land",
        state: "solid",
        density: 1602,
    },
    /* Tick Examples
        "tick_sand": {
            color: "#e6d577",
            tick: function(pixel) {
                tryMove(pixel, pixel.x, pixel.y+1);
                doHeat(pixel);
            },
            tempHigh: 1700,
            stateHigh: "molten_glass",
            category: "land",
            state: "solid",
            density: 1602,
            hidden: true,
            category: "land",
        },
        "tick_wood": {
            color: "#a0522d",
            tick: function(pixel) {
                doBurning(pixel);
                doHeat(pixel);
            },
            tempHigh: 400,
            stateHigh: "fire",
            category: "solids",
            burn: 5,
            burnTime: 300,
            burnInto: ["ash","charcoal","fire"],
            state: "solid",
            hardness: 0.15,
            breakInto: "sawdust",
            hidden: true,
            category: "solids",
        },
        "tick_wall": {
            color: "#808080",
            category: "solids",
            hidden: true,
        },
        "tick_props": {
            color: "#ffffff",
            tick: function(pixel) {
                if (tryMove(pixel, pixel.x, pixel.y+1)) {
                    pixel.moves += 1;
                }
                pixel.age += 1;
                if (pixel.moves > 20) { // This pixel will delete itself if it moves 20 times
                    deletePixel(pixel.x, pixel.y);
                }
            },
            properties: { // Default properties to set when the pixel is created:
                "moves": 0,
                "age": 0,
            },
            category: "powders",
            hidden: true,
        },
        */
    water: {
        color: "#2167ff",
        behavior: behaviors.LIQUID,
        tempHigh: 100,
        stateHigh: "steam",
        tempLow: 0,
        stateLow: "ice",
        category: "liquids",
        heatCapacity: 4.184,
        reactions: {
            dirt: {
                // React with (water reacts with dirt to make mud)
                elem1: null, // First element transforms into; in this case, water deletes itself
                elem2: "mud", // Second element transforms into; in this case, dirt turns to mud
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            salt: {
                elem1: "salt_water",
                elem2: null
            },
            sugar: {
                elem1: "sugar_water",
                elem2: null
            },
            dust: {
                elem1: "dirty_water",
                elem2: null
            },
            ash: {
                elem1: "dirty_water",
                elem2: null
            },
            cyanide: {
                elem1: "dirty_water",
                elem2: null
            },
            carbon_dioxide: {
                elem1: "seltzer",
                elem2: null,
                oneway: true
            },
            sulfur: {
                elem1: "dirty_water",
                elem2: null
            },
            rat: {
                elem1: "dirty_water",
                chance: 0.005
            },
            plague: {
                elem1: "dirty_water",
                elem2: null
            },
            rust: {
                elem1: "dirty_water",
                chance: 0.005
            },
            fallout: {
                elem1: "dirty_water",
                chance: 0.25
            },
            radiation: {
                elem1: "dirty_water",
                chance: 0.25
            },
            uranium: {
                elem1: "dirty_water",
                chance: 0.25
            },
            rotten_meat: {
                elem1: "dirty_water",
                chance: 0.25
            },
            quicklime: {
                elem1: null,
                elem2: "slaked_lime"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.00035
            },
            ruins: {
                elem2: "rock",
                chance: 0.00035
            },
            mudstone: {
                elem2: "mud",
                chance: 0.00035
            },
            methane: {
                elem1: "primordial_soup",
                elem2: "primordial_soup",
                tempMin: 60,
                charged: true
            },
            ammonia: {
                elem1: "primordial_soup",
                elem2: "primordial_soup",
                tempMin: 60,
                charged: true
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05,
                oneway: true
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
        },
        state: "liquid",
        density: 997,
        conduct: 0.02,
        stain: -0.5,
    },
    salt_water: {
        color: "#4d85ff",
        behavior: behaviors.LIQUID,
        tempHigh: 102,
        stateHigh: ["steam", "salt"],
        tempLow: -2,
        stateLowName: "salt_ice",
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            dust: {
                elem1: "dirty_water",
                elem2: null
            },
            ash: {
                elem1: "dirty_water",
                elem2: null
            },
            carbon_dioxide: {
                elem1: "dirty_water",
                elem2: null
            },
            sulfur: {
                elem1: "dirty_water",
                elem2: null
            },
            charcoal: {
                elem1: "dirty_water",
                chance: 0.005
            },
            rat: {
                elem1: "dirty_water",
                chance: 0.005
            },
            plague: {
                elem1: "dirty_water",
                elem2: null
            },
            fallout: {
                elem1: "dirty_water",
                chance: 0.25
            },
            radiation: {
                elem1: "dirty_water",
                chance: 0.25
            },
            rust: {
                elem1: "dirty_water",
                chance: 0.005
            },
            quicklime: {
                elem1: null,
                elem2: "slaked_lime"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.0005
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05,
                oneway: true
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
        },
        state: "liquid",
        density: 1026,
        conduct: 0.1,
        stain: -0.66,
    },
    sugar_water: {
        color: "#8eaae6",
        behavior: behaviors.LIQUID,
        tempHigh: 105,
        stateHigh: ["steam", "sugar"],
        tempLow: -5,
        stateLowName: "sugar_ice",
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            dust: {
                elem1: "dirty_water",
                elem2: null
            },
            ash: {
                elem1: "dirty_water",
                elem2: null
            },
            carbon_dioxide: {
                elem1: "soda",
                elem2: null
            },
            sulfur: {
                elem1: "dirty_water",
                elem2: null
            },
            charcoal: {
                elem1: "dirty_water",
                chance: 0.005
            },
            rat: {
                elem1: "dirty_water",
                chance: 0.005
            },
            plague: {
                elem1: "dirty_water",
                elem2: null
            },
            fallout: {
                elem1: "dirty_water",
                chance: 0.25
            },
            radiation: {
                elem1: "dirty_water",
                chance: 0.25
            },
            rust: {
                elem1: "dirty_water",
                chance: 0.005
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.0004
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05,
                oneway: true
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
        },
        hidden: true,
        state: "liquid",
        density: 1026,
        conduct: 0.05,
        stain: -0.45,
    },
    seltzer: {
        color: ["#8eaae6", "#82a4ed", "#b5c5e8", "#8eaae6", "#82a4ed"],
        behavior: ["XX|CR:foam%3|XX", "M2|XX|M2", "M2|M1|M2"],
        tempHigh: 98,
        stateHigh: ["steam", "carbon_dioxide"],
        tempLow: 0,
        stateLowName: "seltzer_ice",
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.0004
            },
            sugar: {
                elem1: "soda",
                elem2: "foam"
            },
            sugar_water: {
                elem1: "soda",
                elem2: "foam"
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05,
                oneway: true
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
        },
        hidden: true,
        state: "liquid",
        density: 1026.91,
        conduct: 0.05,
        stain: -0.45,
    },
    dirty_water: {
        color: ["#0e824e", "#07755a", "#0c6934"],
        behavior: behaviors.LIQUID,
        tempHigh: 105,
        stateHigh: ["steam", "carbon_dioxide"],
        tempLow: -5,
        stateLowName: "dirty_ice",
        viscosity: 10,
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.0004
            },
            plant: {
                elem1: "water",
                chance: 0.05
            },
            algae: {
                elem1: "water",
                chance: 0.05
            },
            charcoal: {
                elem1: "water",
                chance: 0.02
            },
            gravel: {
                elem1: "water",
                chance: 0.01
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05,
                oneway: true
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.1,
                oneway: true
            },
        },
        hidden: true,
        state: "liquid",
        density: 1005,
        conduct: 0.1,
        //stain: 0.03,
    },
    pool_water: {
        color: "#a8d2e3",
        behavior: behaviors.LIQUID,
        tempHigh: 105,
        stateHigh: ["steam", "chlorine"],
        tempLow: -5,
        stateLowName: "pool_ice",
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.001
            },
            plant: {
                elem2: "dead_plant",
                chance: 0.05
            },
            grass: {
                elem2: "dead_plant",
                chance: 0.05
            },
            algae: {
                elem2: null,
                chance: 0.05
            },
            cell: {
                elem2: null,
                chance: 0.05
            },
            cancer: {
                elem2: null,
                chance: 0.05
            },
            plague: {
                elem2: null
            },
            flea: {
                elem2: "dead_bug",
                chance: 0.05
            },
            termite: {
                elem2: "dead_bug",
                chance: 0.05
            },
            ant: {
                elem2: "dead_bug",
                chance: 0.05
            },
            worm: {
                elem2: "dead_bug",
                chance: 0.05
            },
            fly: {
                elem2: "dead_bug",
                chance: 0.05
            },
            firefly: {
                elem2: "dead_bug",
                chance: 0.05
            },
            bee: {
                elem2: "dead_bug",
                chance: 0.05
            },
            stink_bug: {
                elem2: "dead_bug",
                chance: 0.05
            },
            dirty_water: {
                elem2: "water",
                chance: 0.05
            },
            tadpole: {
                elem1: null,
                chance: 0.05
            },
            slug: {
                elem1: null,
                chance: 0.05
            },
            snail: {
                elem1: null,
                chance: 0.05
            },
            lichen: {
                elem1: null,
                chance: 0.05
            },
            dead_bug: {
                elem1: null,
                chance: 0.001
            },
            pollen: {
                elem1: null
            },
            root: {
                elem1: "fiber",
                chance: 0.05
            },
        },
        hidden: true,
        state: "liquid",
        density: 992.72,
        conduct: 0.15,
        stain: -0.5,
    },
    dirt: {
        //color: ["#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#9e6b4b","#a88c7b"],
        //color: ["#9b7653","#806144","#7d5937","#66482c"],
        color: ["#76552b", "#5c4221", "#573c1a", "#6b481e"],
        //color: ["#B9855D","#976C4B","#7A5639","#5B3D26"],
        behavior: behaviors.POWDER,
        tempHigh: 1200,
        tempLow: -50,
        stateLow: "permafrost",
        category: "land",
        state: "solid",
        density: 1220,
    },
    mud: {
        color: "#382417",
        behavior: behaviors.STURDYPOWDER,
        reactions: {
            dirt: {
                elem1: "dirt",
                elem2: "mud",
                chance: 0.0005,
                oneway: true
            },
            sand: {
                elem1: "dirt",
                elem2: "wet_sand",
                chance: 0.0005,
                oneway: true
            },
        },
        tempHigh: 100,
        stateHigh: "mudstone",
        tempLow: -50,
        stateLow: "permafrost",
        category: "land",
        state: "solid",
        density: 1730,
        stain: 0.02,
    },
    wet_sand: {
        color: ["#a19348", "#b5a85e"],
        behavior: behaviors.STURDYPOWDER,
        reactions: {
            sand: {
                elem1: "sand",
                elem2: "wet_sand",
                chance: 0.0005,
                oneway: true
            },
            dirt: {
                elem1: "sand",
                elem2: "mud",
                chance: 0.0005,
                oneway: true
            },
            gravel: {
                elem1: "cement",
                elem2: null,
                chance: 0.2
            },
        },
        tempHigh: 100,
        stateHigh: "packed_sand",
        category: "land",
        state: "solid",
        density: 1905,
    },
    rock: {
        color: ["#808080", "#4f4f4f", "#949494"],
        behavior: behaviors.POWDER,
        tempHigh: 950,
        stateHigh: "magma",
        category: "land",
        state: "solid",
        density: 2550,
        hardness: 0.5,
        breakInto: ["sand", "gravel"],
    },
    mudstone: {
        color: "#4a341e",
        behavior: behaviors.SUPPORT,
        tempHigh: 1200,
        stateHigh: "molten_dirt",
        tempLow: -50,
        stateLow: "permafrost",
        category: "land",
        state: "solid",
        density: 1250,
        breakInto: "dirt",
    },
    packed_sand: {
        color: "#948b5a",
        behavior: behaviors.SUPPORT,
        tempHigh: 1700,
        stateHigh: "molten_glass",
        category: "land",
        state: "solid",
        density: 1682,
        breakInto: "sand",
    },
    plant: {
        color: "#00bf00",
        behavior: behaviors.WALL,
        reactions: {
            vinegar: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.035
            },
            baking_soda: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.01
            },
            bleach: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.05
            },
            alcohol: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.035
            },
        },
        category: "life",
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -1.66,
        stateLow: "frozen_plant",
        burn: 65,
        burnTime: 60,
        burnInto: "dead_plant",
        state: "solid",
        density: 1050,
    },
    dead_plant: {
        color: ["#826521", "#826021", "#825321", "#70360c"],
        behavior: ["XX|XX|XX", "XX|XX|XX", "M2|M1|M2"],
        category: "life",
        tempHigh: 300,
        stateHigh: "fire",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 85,
        burnTime: 45,
        state: "solid",
        density: 1050,
        hidden: true,
    },
    frozen_plant: {
        color: "#00bf8c",
        behavior: behaviors.WALL,
        category: "life",
        temp: -2.66,
        tempHigh: 7,
        stateHigh: "dead_plant",
        state: "solid",
        density: 1050,
        hidden: true,
    },
    grass: {
        color: ["#439809", "#258B08", "#118511", "#127B12", "#136D14"],
        tick: function(pixel) {
            if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                if (pixel.h < 2 && Math.random() < 0.0005 && isEmpty(pixel.x, pixel.y - 1)) {
                    createPixel(pixel.element, pixel.x, pixel.y - 1);
                    pixelMap[pixel.x][pixel.y - 1].h = pixel.h + 1;
                }
                var coords = [
                    [pixel.x + 1, pixel.y],
                    [pixel.x - 1, pixel.y],
                    [pixel.x + 1, pixel.y + 1],
                    [pixel.x - 1, pixel.y + 1],
                ];
                for (var i = 0; i < coords.length; i++) {
                    if (Math.random() < 0.005 && isEmpty(coords[i][0], coords[i][1])) {
                        if (!isEmpty(coords[i][0], coords[i][1] + 1, true)) {
                            var soil = pixelMap[coords[i][0]][coords[i][1] + 1];
                            if (soil.element === "dirt" || soil.element === "mud" || soil.element === "clay_soil") {
                                createPixel(pixel.element, coords[i][0], coords[i][1]);
                            }
                        }
                    }
                }
            }
            doDefaults(pixel);
        },
        properties: {
            h: 0,
        },
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 1400,
    },
    algae: {
        color: ["#395706", "#6F9315", "#9DCA19"],
        behavior: ["XX|XX|XX", "SW:water,salt_water,dirty_water,sugar_water%1|XX|SW:water,salt_water,dirty_water,sugar_water%1", "M2%10|M1|M2%10"],
        tick: function(pixel) {
            if (Math.random() < 0.01 && !isEmpty(pixel.x + 1, pixel.y + 1, true) && isEmpty(pixel.x + 1, pixel.y)) {
                var newPixel = pixelMap[pixel.x + 1][pixel.y + 1];
                if (newPixel.element !== "algae" && elements[newPixel.element].state === "liquid") {
                    createPixel(pixel.element, pixel.x + 1, pixel.y);
                }
            }
            if (Math.random() < 0.01 && !isEmpty(pixel.x - 1, pixel.y + 1, true) && isEmpty(pixel.x - 1, pixel.y)) {
                var newPixel = pixelMap[pixel.x - 1][pixel.y + 1];
                if (newPixel.element !== "algae" && elements[newPixel.element].state === "liquid") {
                    createPixel(pixel.element, pixel.x - 1, pixel.y);
                }
            }
            doDefaults(pixel);
        },
        reactions: {
            wood: {
                elem1: "lichen"
            },
            chlorine: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.035
            },
            liquid_chlorine: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.035
            },
            baking_soda: {
                elem1: "dead_plant",
                elem2: null,
                chance: 0.035
            },
        },
        category: "life",
        tempHigh: 225,
        stateHigh: "fire",
        burn: 95,
        burnTime: 20,
        state: "liquid",
        density: 920,
    },
    concrete: {
        color: "#ababab",
        behavior: behaviors.SUPPORT,
        tempHigh: 1500,
        stateHigh: "magma",
        category: "powders",
        state: "solid",
        density: 2400,
        hardness: 0.5,
        breakInto: "dust",
    },
    wall: {
        color: "#808080",
        behavior: behaviors.WALL,
        category: "solids",
        insulate: true,
        hardness: 1,
    },
    fire: {
        color: ["#ff6b21", "#ffa600", "#ff4000"],
        behavior: behaviors.UL_UR,
        reactions: {
            water: {
                elem1: "smoke"
            },
            steam: {
                elem1: "smoke"
            },
            carbon_dioxide: {
                elem1: "smoke"
            },
            dirty_water: {
                elem1: "smoke"
            },
            salt_water: {
                elem1: "smoke"
            },
            sugar_water: {
                elem1: "smoke"
            },
        },
        temp: 600,
        tempLow: 100,
        stateLow: "smoke",
        tempHigh: 7000,
        stateHigh: "plasma",
        category: "energy",
        burning: true,
        burnTime: 25,
        burnInto: "smoke",
        state: "gas",
        density: 0.1,
        ignoreAir: true,
    },
    bomb: {
        color: "#524c41",
        behavior: ["XX|EX:10|XX", "XX|XX|XX", "M2|M1 AND EX:10|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    steam: {
        color: "#abd6ff",
        behavior: behaviors.GAS,
        reactions: {
            steam: {
                elem1: null,
                elem2: "cloud",
                chance: 0.3,
                y: [0, 15],
                setting: "clouds"
            },
            rain_cloud: {
                elem1: "rain_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            cloud: {
                elem1: "cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            snow_cloud: {
                elem1: "rain_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            hail_cloud: {
                elem1: "rain_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            pyrocumulus: {
                elem1: "cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            fire_cloud: {
                elem1: "cloud",
                elem2: "pyrocumulus",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            smoke: {
                elem1: "smog",
                elem2: null,
                chance: 0.001
            },
            carbon_dioxide: {
                elem1: "smog",
                elem2: null,
                chance: 0.001
            },
        },
        temp: 150,
        tempLow: 95,
        stateLow: "water",
        category: "gases",
        state: "gas",
        density: 0.6,
    },
    ice: {
        color: "#c5e9f0",
        behavior: behaviors.WALL,
        temp: 0,
        tempHigh: 5,
        stateHigh: "water",
        category: "solids",
        state: "solid",
        density: 917,
        breakInto: "snow",
    },
    snow: {
        color: "#e1f8fc",
        behavior: behaviors.POWDER,
        temp: 0,
        tempHigh: 5,
        tempLow: -100,
        stateLow: "packed_snow",
        stateHigh: "water",
        category: "land",
        state: "solid",
        density: 100,
    },
    packed_snow: {
        color: "#bcdde3",
        behavior: behaviors.SUPPORTPOWDER,
        temp: 0,
        tempHigh: 20,
        tempLow: -200,
        stateLow: "ice",
        stateHigh: "water",
        category: "land",
        state: "solid",
        density: 400,
        hidden: true,
    },
    wood: {
        color: "#a0522d",
        behavior: behaviors.WALL,
        tempHigh: 400,
        stateHigh: ["ember", "charcoal", "fire", "fire", "fire"],
        category: "solids",
        burn: 5,
        burnTime: 300,
        burnInto: ["ember", "charcoal", "fire"],
        state: "solid",
        hardness: 0.15,
        breakInto: "sawdust",
    },
    smoke: {
        color: "#383838",
        behavior: behaviors.DGAS,
        reactions: {
            steam: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            rain_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            snow_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            hail_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            acid_cloud: {
                elem1: "pyrocumulus",
                chance: 0.05,
                y: [0, 12],
                setting: "clouds"
            },
            fire_cloud: {
                elem1: "pyrocumulus",
                chance: 0.05,
                y: [0, 12],
                setting: "clouds"
            },
            pyrocumulus: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
        },
        temp: 114,
        tempHigh: 605,
        stateHigh: "fire",
        category: "gases",
        state: "gas",
        density: 1180,
        stain: 0.075,
    },
    magma: {
        color: ["#ff6f00", "#ff8c00", "#ff4d00"],
        behavior: behaviors.MOLTEN,
        reactions: {
            ice: {
                elem1: "basalt"
            },
        },
        temp: 1200,
        tempLow: 800,
        stateLow: ["basalt", "basalt", "basalt", "rock"],
        viscosity: 10000,
        category: "liquids",
        state: "liquid",
        density: 2725,
    },
    plasma: {
        color: ["#8800ff", "#b184d9", "#8800ff"],
        behavior: behaviors.DGAS,
        behaviorOn: ["M2|M1|M2", "CL%5 AND M1|XX|CL%5 AND M1", "M2|M1|M2"],
        temp: 7065,
        tempLow: 5000,
        stateLow: "fire",
        category: "energy",
        state: "gas",
        density: 1,
        charge: 0.5,
        conduct: 1,
    },
    cold_fire: {
        color: ["#21cbff", "#006aff", "#00ffff"],
        behavior: ["M1|M1|M1", "M2|CH:smoke%8|M2", "XX|M2|XX"],
        reactions: {
            fire: {
                elem1: "smoke",
                elem2: "smoke"
            },
            plasma: {
                elem1: "light",
                elem2: "light"
            },
        },
        temp: -200,
        tempHigh: 0,
        stateHigh: "smoke",
        category: "energy",
        state: "gas",
        density: 0.1,
        ignoreAir: true,
    },
    glass: {
        color: ["#5e807d", "#679e99"],
        behavior: behaviors.WALL,
        tempHigh: 1500,
        category: "solids",
        state: "solid",
        density: 2500,
        breakInto: "glass_shard",
    },
    meat: {
        color: ["#9E4839", "#BA6449", "#D2856C", "#A14940"],
        behavior: ["XX|XX|XX", "SP|XX|SP", "XX|M1|XX"],
        reactions: {
            dirty_water: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            fly: {
                elem1: "rotten_meat",
                chance: 0.2
            },
            dioxin: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.1
            },
            uranium: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            cancer: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            plague: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.3
            },
            ant: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            worm: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            rat: {
                elem1: "rotten_meat",
                chance: 0.3
            },
            mushroom_spore: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            mushroom_stalk: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            mercury: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.2
            },
            mercury_gas: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.1
            },
            virus: {
                elem1: "rotten_meat",
                chance: 0.1
            },
            poison: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.5
            },
            infection: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.1
            },
            ink: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.1
            },
            acid: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.5
            },
            acid_gas: {
                elem1: "rotten_meat",
                chance: 0.4
            },
            cyanide: {
                elem1: "rotten_meat",
                elem2: null,
                chance: 0.5
            },
            water: {
                elem2: "broth",
                tempMin: 70
            },
            salt_water: {
                elem2: "broth",
                tempMin: 70
            },
            sugar_water: {
                elem2: "broth",
                tempMin: 70
            },
            seltzer: {
                elem2: "broth",
                tempMin: 70
            },
        },
        tempHigh: 100,
        stateHigh: "cooked_meat",
        tempLow: -18,
        stateLow: "frozen_meat",
        category: "food",
        burn: 15,
        burnTime: 200,
        burnInto: "cooked_meat",
        state: "solid",
        density: 1019.5,
        conduct: 0.2,
    },
    rotten_meat: {
        color: ["#b8b165", "#b89765"],
        behavior: ["XX|CR:plague,stench,stench,stench,fly%0.25 AND CH:meat>rotten_meat%1|XX", "SP%99 AND CH:meat>rotten_meat%1|XX|SP%99 AND CH:meat>rotten_meat%1", "XX|M1 AND CH:meat>rotten_meat%1|XX"],
        tempHigh: 300,
        stateHigh: ["plague", "ash", "ammonia"],
        category: "food",
        hidden: true,
        burn: 12,
        burnTime: 200,
        burnInto: ["plague", "ash", "ammonia"],
        state: "solid",
        density: 1005,
        conduct: 0.1,
    },
    cooked_meat: {
        color: ["#AE7D5B", "#9B6D54", "#7E4D31"],
        behavior: behaviors.STURDYPOWDER,
        reactions: {
            water: {
                elem2: "broth",
                tempMin: 70
            },
            salt_water: {
                elem2: "broth",
                tempMin: 70
            },
            sugar_water: {
                elem2: "broth",
                tempMin: 70
            },
            dirty_water: {
                elem2: "broth",
                tempMin: 70
            },
            seltzer: {
                elem2: "broth",
                tempMin: 70
            },
        },
        tempHigh: 300,
        stateHigh: "ash",
        category: "food",
        hidden: true,
        burn: 10,
        burnTime: 200,
        burnInto: "ash",
        state: "solid",
        density: 1005,
    },
    frozen_meat: {
        color: "#65b8aa",
        behavior: behaviors.STURDYPOWDER,
        temp: -18,
        tempHigh: 0,
        stateHigh: "meat",
        category: "food",
        hidden: true,
        state: "solid",
        density: 1067.5,
    },
    chocolate: {
        color: "#4d2818",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 31,
        stateHigh: "melted_chocolate",
        category: "food",
        state: "solid",
        density: 1325,
    },
    cloner: {
        color: "#dddd00",
        behavior: behaviors.CLONER,
        ignore: ["ecloner", "slow_cloner", "clone_powder", "floating_cloner"],
        category: "machines",
        insulate: true,
        hardness: 1,
    },
    ecloner: {
        name: "e-cloner",
        color: "#dddd00",
        behavior: behaviors.WALL,
        behaviorOn: behaviors.CLONER,
        ignore: ["cloner", "slow_cloner", "clone_powder", "floating_cloner"],
        category: "machines",
        insulate: true,
        conduct: 1,
        hardness: 1,
    },
    slow_cloner: {
        color: "#888800",
        behavior: ["XX|CF%10|XX", "CF%10|XX|CF%10", "XX|CF%10|XX"],
        ignore: ["cloner", "ecloner", "clone_powder", "floating_cloner"],
        category: "machines",
        insulate: true,
        hardness: 1,
    },
    wire: {
        color: "#4d0a03",
        behavior: behaviors.WALL,
        category: "machines",
        insulate: true,
        conduct: 1,
    },
    random: {
        //hard-coded
        color: ["#3e5f8a", "#a334ec", "#ea96f9", "#a6ecf6", "#70ebc8", "#d9286b", "#7eed91", "#a18b30"],
        behavior: behaviors.WALL,
        category: "special",
        excludeRandom: true,
    },
    uncharge: {
        color: "#0000ff",
        tool: function(pixel) {
            if (pixel.charge) {
                delete pixel.charge;
                pixel.chargeCD = 16;
            }
        },
        category: "special",
        excludeRandom: true,
    },
    unburn: {
        color: "#383645",
        tool: function(pixel) {
            if (pixel.burning) {
                delete pixel.burning;
                delete pixel.burnStart;
            }
            if (pixel.element === "fire") {
                changePixel(pixel, "smoke");
            }
        },
        category: "special",
        excludeRandom: true,
    },
    smash: {
        color: ["#666666", "#888888", "#666666"],
        tool: function(pixel) {
            if (elements[pixel.element].breakInto) {
                // times 0.25 if not shiftDown else 1
                if (Math.random() < (elements[pixel.element].hardness || 1) * (shiftDown ? 1 : 0.25)) {
                    var breakInto = elements[pixel.element].breakInto;
                    // if breakInto is an array, pick one
                    if (Array.isArray(breakInto)) {
                        breakInto = breakInto[Math.floor(Math.random() * breakInto.length)];
                    }
                    changePixel(pixel, breakInto);
                }
            }
        },
        category: "special",
        excludeRandom: true,
    },
    filler: {
        color: "#ae4cd9",
        behavior: behaviors.FILL,
        category: "special",
        excludeRandom: true,
        reactions: {
            neutron: {
                elem1: "lattice"
            },
            proton: {
                elem1: "vertical"
            },
            electric: {
                elem1: "horizontal"
            },
        },
    },
    lattice: {
        color: "#cb4cd9",
        behavior: ["CL|XX|CL", "XX|XX|XX", "CL|XX|CL"],
        hidden: true,
        category: "special",
        excludeRandom: true,
    },
    gravel: {
        color: ["#E3E0DF", "#B1ABA3", "#74736D", "#524B47"],
        behavior: behaviors.POWDER,
        category: "land",
        tempHigh: 950,
        stateHigh: "magma",
        state: "solid",
        density: 1680,
        hardness: 0.2,
        breakInto: "sand",
    },
    slime: {
        color: "#81cf63",
        behavior: behaviors.LIQUID,
        reactions: {
            bomb: {
                elem2: "sticky_bomb",
                elem2: null
            },
        },
        viscosity: 5000,
        tempHigh: 120,
        stateHigh: "steam",
        tempLow: 0,
        category: "liquids",
        state: "liquid",
        density: 1450,
        stain: 0.05,
    },
    cement: {
        color: "#b5b5b5",
        behavior: behaviors.LIQUID,
        tick: function(pixel) {
            if (pixelTicks - pixel.start > 100) {
                changePixel(pixel, "concrete");
            }
        },
        category: "liquids",
        tempHigh: 1550,
        stateHigh: "magma",
        tempLow: -10,
        stateLow: "concrete",
        state: "solid",
        density: 1440,
        hardness: 0.1,
        viscosity: 1000,
    },
    dust: {
        color: "#666666",
        behavior: behaviors.POWDER,
        category: "powders",
        burn: 10,
        burnTime: 1,
        state: "solid",
        density: 1490,
    },
    void: {
        color: "#262626",
        behavior: behaviors.DELETE,
        category: "special",
        hardness: 1,
        excludeRandom: true,
    },
    sun: {
        color: "#ffffbd",
        tick: function(pixel) {
            // minimum 1726
            // maximum 7726
            if (pixel.temp < 3600) {
                pixel.color = pixelColorPick(pixel, "#ffbdbd");
                var c = 0.015;
            } else if (pixel.temp < 5000) {
                pixel.color = pixelColorPick(pixel, "#ffd5bd");
                var c = 0.025;
            } else if (pixel.temp < 7000) {
                pixel.color = pixelColorPick(pixel, "#ffffbd");
                var c = 0.05;
            } else if (pixel.temp < 11000) {
                pixel.color = pixelColorPick(pixel, "#f7fff5");
                var c = 0.1;
            } else if (pixel.temp < 28000) {
                pixel.color = pixelColorPick(pixel, "#bde0ff");
                var c = 0.2;
            } else {
                pixel.color = pixelColorPick(pixel, "#c3bdff");
                var c = 0.4;
            }
            for (var i = 0; i < adjacentCoords.length; i++) {
                if (Math.random() > c) {
                    continue;
                }
                var x = pixel.x + adjacentCoords[i][0];
                var y = pixel.y + adjacentCoords[i][1];
                if (isEmpty(x, y)) {
                    createPixel("light", x, y);
                    pixelMap[x][y].color = pixel.color;
                } else if (!outOfBounds(x, y)) {
                    var newPixel = pixelMap[x][y];
                    if (pixel.temp !== newPixel.temp && elements[newPixel.element].id === elements.sun.id) {
                        var avg = (pixel.temp + newPixel.temp) / 2;
                        pixel.temp = avg;
                        newPixel.temp = avg;
                        pixelTempCheck(pixel);
                        pixelTempCheck(newPixel);
                    }
                }
            }
        },
        reactions: {
            hydrogen: {
                elem2: "helium",
                temp1: 5
            },
            helium: {
                elem2: "carbon_dioxide",
                temp1: 5,
                tempMax: 3600
            },
            carbon_dioxide: {
                elem2: "neon",
                temp1: 5,
                tempMax: 1800
            },
        },
        temp: 5504,
        tempLow: -100,
        stateLow: "supernova",
        category: "special",
        state: "gas",
        //density: 1408,
        insulate: true,
    },
    cell: {
        color: ["#00ee00", "#83ee00", "#d6ee00"],
        behavior: ["XX|CL%0.5|XX", "CL%0.5|XX|CL%0.5", "M2%10|M1|M2%10"],
        reactions: {
            infection: {
                elem1: "cancer",
                chance: 0.01
            },
            blood: {
                elem1: "blood",
                chance: 0.01
            },
            antibody: {
                elem1: "antibody",
                chance: 0.01
            },
            sugar: {
                elem2: "cell",
                chance: 0.03
            },
            sugar_water: {
                elem2: "cell",
                chance: 0.04
            },
            alcohol: {
                elem1: [null, "dna"],
                chance: 0.02
            },
            poison: {
                elem1: null,
                chance: 0.02
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.05
            },
            ammonia: {
                elem2: "nitrogen",
                chance: 0.05
            },
        },
        tempHigh: 102,
        stateHigh: "steam",
        tempLow: -2,
        stateLow: "ice",
        state: "solid",
        density: 1000.1,
        category: "life",
        breakInto: ["water", "dna", "dna", "dna"],
    },
    cancer: {
        color: ["#300b29", "#5c114e", "#870c71"],
        behavior: ["XX|CL%1|XX", "CL%1|XX|CL%1", "M2%2|M1|M2%2"],
        reactions: {
            cell: {
                elem2: "cancer",
                chance: 0.005
            },
            frog: {
                elem2: "cancer",
                chance: 0.005
            },
            tadpole: {
                elem2: "cancer",
                chance: 0.005
            },
            fish: {
                elem2: "cancer",
                chance: 0.005
            },
            rat: {
                elem2: "cancer",
                chance: 0.005
            },
            bird: {
                elem2: "cancer",
                chance: 0.005
            },
            sugar: {
                elem2: "cancer",
                chance: 0.04
            },
            sugar_water: {
                elem2: "cancer",
                chance: 0.05
            },
            alcohol: {
                elem1: [null, "dna"],
                chance: 0.01
            },
            poison: {
                elem1: null,
                chance: 0.01
            },
            proton: {
                elem1: null,
                chance: 0.04
            },
        },
        tempHigh: 80,
        stateHigh: "plague",
        state: "solid",
        density: 1000.2,
        category: "life",
        breakInto: ["dirty_water", "dna", "dna", "dna", "dna"],
    },
    dna: {
        color: ["#ffe3e3", "#e3e3ff", "#ffffe3", "#e3ffe3"],
        behavior: behaviors.POWDER,
        reactions: {
            fire: {
                elem2: null
            },
            radiation: {
                color1: ["#ffe3e3", "#e3e3ff", "#ffffe3", "#e3ffe3"]
            },
            neutron: {
                color1: ["#ffe3e3", "#e3e3ff", "#ffffe3", "#e3ffe3"]
            },
        },
        tempHigh: 190,
        stateHigh: "smoke",
        state: "solid",
        density: 1700,
        category: "life",
        hidden: true,
    },
    plague: {
        color: "#36005c",
        behavior: behaviors.GAS,
        reactions: {
            frog: {
                elem2: "plague",
                chance: 0.05
            },
            ant: {
                elem2: "plague",
                chance: 0.05
            },
            bee: {
                elem2: "plague",
                chance: 0.05
            },
            fish: {
                elem2: "plague",
                chance: 0.05
            },
            firefly: {
                elem2: "plague",
                chance: 0.05
            },
            chlorine: {
                elem1: null
            },
            liquid_chlorine: {
                elem1: null
            },
        },
        category: "life",
        state: "gas",
        density: 600,
    },
    flea: {
        color: "#9e4732",
        behavior: ["M2|XX|M2", "XX|XX|XX", "M2|M1|M2"],
        reactions: {
            blood: {
                elem2: null,
                chance: 0.1875,
                func: behaviors.FEEDPIXEL
            },
            infection: {
                elem2: null,
                chance: 0.1875,
                func: behaviors.FEEDPIXEL
            },
            antibody: {
                elem2: null,
                chance: 0.1875,
                func: behaviors.FEEDPIXEL
            },
            antidote: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            dead_plant: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            ketchup: {
                elem2: null,
                chance: 0.1
            },
            mercury: {
                elem2: null,
                elem1: null,
                chance: 0.1875
            },
            vinegar: {
                elem1: "dead_bug",
                elem2: null
            },
            alcohol: {
                elem1: "dead_bug",
                elem2: null
            },
        },
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 400,
        conduct: 0.15,
    },
    termite: {
        color: "#f5a056",
        behavior: ["XX|XX|SW:wood,tree_branch%5", "XX|FX%3|M2%15 AND BO", "XX|M1|SW:wood,tree_branch%5"],
        reactions: {
            wood: {
                elem2: null,
                chance: 0.04,
                func: behaviors.FEEDPIXEL
            },
            tree_branch: {
                elem2: null,
                chance: 0.02,
                func: behaviors.FEEDPIXEL
            },
            cellulose: {
                elem2: null,
                chance: 0.04,
                func: behaviors.FEEDPIXEL
            },
            paper: {
                elem2: null,
                chance: 0.04,
                func: behaviors.FEEDPIXEL
            },
            bamboo: {
                elem2: null,
                chance: 0.03,
                func: behaviors.FEEDPIXEL
            },
            bamboo_plant: {
                elem2: null,
                chance: 0.04,
                func: behaviors.FEEDPIXEL
            },
            sapling: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            sawdust: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            particleboard: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            tinder: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            lichen: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            vinegar: {
                elem1: "dead_bug",
                elem2: null
            },
            alcohol: {
                elem1: "dead_bug",
                elem2: null
            },
        },
        foodNeed: 20,
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        conduct: 0.15,
    },
    ant: {
        color: "#5e0b04",
        behavior: ["XX|XX|SW:dirt,sand,gravel,clay_soil%8", "XX|FX%8|M2 AND BO", "XX|M1|SW:dirt,sand,gravel,clay_soil%8"],
        reactions: {
            wheat: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            caramel: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            bread: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            sugar_water: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            soda: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            sugar: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            rotten_meat: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            vinegar: {
                elem1: "dead_bug",
                elem2: null
            },
            alcohol: {
                elem1: "dead_bug",
                elem2: null
            },
            mushroom_cap: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            candy: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
        },
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 500,
        conduct: 0.15,
    },
    worm: {
        color: "#D34C37",
        behavior: [
            "SW:dirt,sand,gravel,ash,mycelium,mud,wet_sand,clay_soil,water,salt_water,dirty_water%3|XX|SW:dirt,sand,gravel,ash,mycelium,mud,wet_sand,clay_soil,water,salt_water,dirty_water%3",
            "M2%10|XX|M2%10",
            "SW:dirt,sand,gravel,ash,mycelium,mud,wet_sand,clay_soil,water,salt_water,dirty_water%3|M1|SW:dirt,sand,gravel,ash,mycelium,mud,wet_sand,clay_soil,water,salt_water,dirty_water%3",
        ],
        reactions: {
            ash: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            root: {
                elem2: "dirt",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            dead_plant: {
                elem2: "dirt",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            hyphae: {
                elem2: "mycelium",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            plant: {
                elem2: "root",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            grass: {
                elem2: "dirt",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            limestone: {
                elem2: "calcium",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            quicklime: {
                elem2: "calcium",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            slaked_lime: {
                elem2: "calcium",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            salt: {
                elem1: "slime",
                elem2: null
            },
            potassium_salt: {
                elem1: "slime",
                elem2: null
            },
            epsom_salt: {
                elem1: "slime",
                elem2: null
            },
        },
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        breakInto: "slime",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 1050,
        conduct: 0.17,
    },
    fly: {
        color: "#4C4E42",
        behavior: ["XX|M2|M1", "XX|FX%2|BO", "XX|M2|M1"],
        behaviorOn: ["XX|CR:flash|XX", "CR:flash|CH:ash|CR:flash", "XX|CR:flash|XX"],
        reactions: {
            plant: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            dead_plant: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            meat: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            cooked_meat: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            rotten_meat: {
                elem2: [null, null, "ammonia"],
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            vine: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            corn: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            potato: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            wheat: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            yeast: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            caramel: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            bread: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            sugar_water: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            soda: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
        },
        foodNeed: 15,
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 600,
        conduct: 1,
    },
    firefly: {
        color: ["#684841", "#684841", "#d9d950", "#684841", "#684841"],
        behavior: ["XX|M2|M1", "XX|CC:684841,684841,684841,684841,d9d950%10 AND FX%2|BO", "XX|M2|M1"],
        reactions: {
            pollen: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            honey: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            firefly: {
                elem2: null,
                chance: 0.01,
                func: behaviors.FEEDPIXEL
            },
            sugar_water: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            soda: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            sugar: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
        },
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 600,
        conduct: 0.15,
    },
    bee: {
        color: "#c4b100",
        behavior: ["XX|M2|M1", "XX|FX%2|M1 AND BO", "XX|CR:pollen%0.025 AND M2|M1"],
        reactions: {
            sugar_water: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            soda: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            sugar: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            yeast: {
                elem2: null,
                chance: 0.15,
                func: behaviors.FEEDPIXEL
            },
            caramel: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            candy: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
        },
        egg: "honey",
        tempHigh: 100,
        stateHigh: "ash",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        state: "solid",
        density: 600,
        conduct: 0.15,
    },
    stink_bug: {
        color: ["#56482D", "#52472C", "#635443"],
        properties: {
            phase: 1,
        },
        tick: function(pixel) {
            var newX = pixel.x;
            var newY = pixel.y;
            if (pixel.phase === 1) {
                // Landing
                newX += pixel.flipX ? -1 : 1;
                newY++;
                if (!tryMove(pixel, newX, newY)) {
                    pixel.phase = 0;
                } // Stop landing
            } else if (pixel.phase === 2) {
                // Flying
                newX += pixel.flipX ? -1 : 1;
                newY += Math.random() < 0.5 ? -1 : 1;
                if (Math.random() < 0.01) {
                    pixel.phase = 1;
                } // Start landing
                if (!tryMove(pixel, newX, newY)) {
                    pixel.flipX = !pixel.flipX;
                }
            } else if (pixel.phase === 0) {
                // Standing
                if (Math.random() < 0.05) {
                    newX += pixel.flipX ? -1 : 1;
                }
                newY++;
                if (Math.random() < 0.01) {
                    pixel.phase = 2;
                } // Start flying
                tryMove(pixel, newX, newY);
            }
            // Random chance to flip
            if (Math.random() < 0.05) {
                pixel.flipX = !pixel.flipX;
            }
            // Random chance to create "stench" behind
            if (Math.random() < 0.001) {
                if (isEmpty(pixel.x + (pixel.flipX ? 1 : -1), pixel.y)) {
                    createPixel("stench", pixel.x + (pixel.flipX ? 1 : -1), pixel.y);
                }
            }
            doHeat(pixel);
            doElectricity(pixel);
        },
        reactions: {
            petal: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            pistil: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            grape: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            plant: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
        },
        flippableX: true,
        tempHigh: 100,
        stateHigh: "stench",
        tempLow: 0,
        stateLow: "dead_bug",
        category: "life",
        burn: 95,
        burnTime: 25,
        burnInto: "stench",
        breakInto: "stench",
        state: "solid",
        density: 600,
        conduct: 0.15,
    },
    dead_bug: {
        color: ["#38302a", "403732", "#453a2e", "#241d15", "#242e23"],
        behavior: behaviors.POWDER,
        tempHigh: 100,
        stateHigh: "ash",
        category: "life",
        burn: 95,
        burnTime: 25,
        burnInto: ["smoke", "smoke", "ash"],
        state: "solid",
        density: 600,
        hidden: true,
    },
    human: {
        // color: ["#f5eac6","#d4c594","#a89160","#7a5733","#523018","#361e0e"],
        color: ["#f3e7db", "#f7ead0", "#eadaba", "#d7bd96", "#a07e56", "#825c43", "#604134", "#3a312a"],
        category: "life",
        properties: {
            dead: false,
            dir: 1,
            panic: 0,
        },
        tick: function(pixel) {
            if (isEmpty(pixel.x, pixel.y + 1)) {
                createPixel("body", pixel.x, pixel.y + 1);
                pixel.element = "head";
            } else if (isEmpty(pixel.x, pixel.y - 1)) {
                createPixel("head", pixel.x, pixel.y - 1);
                pixelMap[pixel.x][pixel.y - 1].color = pixel.color;
                pixel.element = "body";
                pixel.color = pixelColorPick(pixel);
            } else {
                deletePixel(pixel.x, pixel.y);
            }
        },
        related: ["body", "head"],
    },
    body: {
        color: ["#069469", "#047e99", "#7f5fb0"],
        category: "life",
        hidden: true,
        density: 1500,
        state: "solid",
        conduct: 25,
        tempHigh: 250,
        stateHigh: "cooked_meat",
        tempLow: -30,
        stateLow: "frozen_meat",
        burn: 10,
        burnTime: 250,
        burnInto: "cooked_meat",
        breakInto: "blood",
        reactions: {
            cancer: {
                elem1: "cancer",
                chance: 0.005
            },
            radiation: {
                elem1: ["ash", "meat", "rotten_meat", "cooked_meat"],
                chance: 0.4
            },
            plague: {
                elem1: "plague",
                chance: 0.05
            },
        },
        properties: {
            dead: false,
            dir: 1,
            panic: 0,
        },
        tick: function(pixel) {
            if (tryMove(pixel, pixel.x, pixel.y + 1)) {
                // Fall
                if (!isEmpty(pixel.x, pixel.y - 2, true)) {
                    // Drag head down
                    var headpixel = pixelMap[pixel.x][pixel.y - 2];
                    if (headpixel.element == "head") {
                        if (isEmpty(pixel.x, pixel.y - 1)) {
                            movePixel(pixelMap[pixel.x][pixel.y - 2], pixel.x, pixel.y - 1);
                        } else {
                            swapPixels(pixelMap[pixel.x][pixel.y - 2], pixelMap[pixel.x][pixel.y - 1]);
                        }
                    }
                }
            }
            doHeat(pixel);
            doBurning(pixel);
            doElectricity(pixel);
            if (pixel.dead) {
                // Turn into rotten_meat if pixelTicks-dead > 500
                if (pixelTicks - pixel.dead > 200) {
                    changePixel(pixel, "rotten_meat");
                }
                return;
            }

            // Find the head
            if (!isEmpty(pixel.x, pixel.y - 1, true) && pixelMap[pixel.x][pixel.y - 1].element == "head") {
                var head = pixelMap[pixel.x][pixel.y - 1];
                if (head.dead) {
                    // If head is dead, kill body
                    pixel.dead = head.dead;
                }
            } else {
                var head = null;
            }

            if (isEmpty(pixel.x, pixel.y - 1)) {
                // create blood if decapitated 10% chance
                if (Math.random() < 0.1) {
                    createPixel("blood", pixel.x, pixel.y - 1);
                    // set dead to true 15% chance
                    if (Math.random() < 0.15) {
                        pixel.dead = pixelTicks;
                    }
                }
            } else if (head == null) {
                return;
            } else if (Math.random() < 0.1) {
                // Move 10% chance
                var movesToTry = [
                    [1 * pixel.dir, 0],
                    [1 * pixel.dir, -1],
                ];
                // While movesToTry is not empty, tryMove(pixel, x, y) with a random move, then remove it. if tryMove returns true, break.
                while (movesToTry.length > 0) {
                    var move = movesToTry.splice(Math.floor(Math.random() * movesToTry.length), 1)[0];
                    if (isEmpty(pixel.x + move[0], pixel.y + move[1] - 1)) {
                        if (tryMove(pixel, pixel.x + move[0], pixel.y + move[1])) {
                            movePixel(head, head.x + move[0], head.y + move[1]);
                            break;
                        }
                    }
                }
                // 15% chance to change direction
                if (Math.random() < 0.15) {
                    pixel.dir *= -1;
                }
            }
        },
    },
    head: {
        color: ["#f3e7db", "#f7ead0", "#eadaba", "#d7bd96", "#a07e56", "#825c43", "#604134", "#3a312a"],
        category: "life",
        hidden: true,
        density: 1080,
        state: "solid",
        conduct: 25,
        tempHigh: 250,
        stateHigh: "cooked_meat",
        tempLow: -30,
        stateLow: "frozen_meat",
        burn: 10,
        burnTime: 250,
        burnInto: "cooked_meat",
        breakInto: "blood",
        reactions: {
            cancer: {
                elem1: "cancer",
                chance: 0.005
            },
            radiation: {
                elem1: ["ash", "meat", "rotten_meat", "cooked_meat"],
                chance: 0.4
            },
            plague: {
                elem1: "plague",
                chance: 0.05
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.5
            },
        },
        properties: {
            dead: false,
        },
        tick: function(pixel) {
            doHeat(pixel);
            doBurning(pixel);
            doElectricity(pixel);
            if (pixel.dead) {
                // Turn into rotten_meat if pixelTicks-dead > 500
                if (pixelTicks - pixel.dead > 200) {
                    changePixel(pixel, "rotten_meat");
                    return;
                }
            }

            // Find the body
            if (!isEmpty(pixel.x, pixel.y + 1, true) && pixelMap[pixel.x][pixel.y + 1].element == "body") {
                var body = pixelMap[pixel.x][pixel.y + 1];
                if (body.dead) {
                    // If body is dead, kill head
                    pixel.dead = body.dead;
                }
            } else {
                var body = null;
            }

            if (isEmpty(pixel.x, pixel.y + 1)) {
                tryMove(pixel, pixel.x, pixel.y + 1);
                // create blood if severed 10% chance
                if (isEmpty(pixel.x, pixel.y + 1) && !pixel.dead && Math.random() < 0.1) {
                    createPixel("blood", pixel.x, pixel.y + 1);
                    // set dead to true 15% chance
                    if (Math.random() < 0.15) {
                        pixel.dead = pixelTicks;
                    }
                }
            }
        },
    },
    bird: {
        color: "#997457",
        properties: {
            phase: 2,
            rising: 0
        },
        tick: function(pixel) {
            var newX = pixel.x;
            var newY = pixel.y;
            if (pixel.phase === 1) {
                // Landing
                newX += pixel.flipX ? -1 : 1;
                newY += Math.random() < 0.5 ? 0 : 1;
                if (!tryMove(pixel, newX, newY)) {
                    if (outOfBounds(newX, newY)) {
                        pixel.phase = 0;
                    } else {
                        var newPixel = pixelMap[newX][newY];
                        if (elements[newPixel.element].state !== "solid") {
                            pixel.phase = 3;
                        } else if (newPixel.element === "bird") {
                            pixel.phase = 3;
                            newPixel.phase = 3;
                        } else {
                            pixel.phase = 0;
                        }
                    }
                } // Stop landing
            } else if (pixel.phase === 2) {
                // Gliding
                newX += pixel.flipX ? -1 : 1;
                newY += Math.random() < 0.9 ? 0 : 1;
                if (Math.random() < 0.01) {
                    pixel.phase = 1;
                } // Start landing
                if (!tryMove(pixel, newX, newY)) {
                    pixel.flipX = !pixel.flipX;
                    if (!outOfBounds(newX, newY) && pixelMap[newX][newY].element !== "bird") {
                        pixel.phase = 3;
                    }
                }
            } else if (pixel.phase === 0) {
                // Standing
                if (Math.random() < 0.05) {
                    newX += pixel.flipX ? -1 : 1;
                }
                newY++;
                if (Math.random() < 0.01) {
                    pixel.phase = 3;
                } // Start rising
                if (!tryMove(pixel, newX, newY)) {
                    if (!outOfBounds(newX, newY) && pixelMap[newX][newY].element === "bird") {
                        pixel.phase = 3;
                        pixelMap[newX][newY].phase = 3;
                    }
                }
            } else if (pixel.phase === 3) {
                // Rising
                newX += pixel.flipX ? -1 : 1;
                newY--;
                if (!tryMove(pixel, newX, newY) || (pixel.rising > 5 && Math.random() < 0.05)) {
                    pixel.phase = 2;
                    pixel.rising = 0;
                } // Start gliding
                else {
                    pixel.rising++;
                }
            }
            doHeat(pixel);
            doElectricity(pixel);
            doBurning(pixel);
        },
        flippableX: true,
        reactions: {
            fly: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            firefly: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            bee: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            worm: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            ant: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            termite: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            flea: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            mushroom_cap: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            mushroom_gill: {
                elem2: null,
                chance: 0.025,
                func: behaviors.FEEDPIXEL
            },
            seeds: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            flower_seed: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            wheat_seed: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            corn_seed: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            corn: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            potato_seed: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            grass_seed: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            plague: {
                elem1: "plague",
                chance: 0.05
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.5
            },
        },
        foodNeed: 20,
        tempHigh: 120,
        stateHigh: "cooked_meat",
        tempLow: -18,
        stateLow: "frozen_meat",
        category: "life",
        burn: 50,
        burnTime: 100,
        breakInto: "feather",
        state: "solid",
        density: 400,
        conduct: 0.5,
    },
    rat: {
        color: ["#A698A9", "#8C7D82", "#CCC3CF"],
        behavior: ["XX|CR:plague%0.05 AND M2%1.5|M2%5", "XX|FX%2|M2 AND BO", "XX|M1|M2"],
        reactions: {
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.5
            },
            meat: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            cooked_meat: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            rotten_meat: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            cheese: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            melted_cheese: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            plant: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            algae: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            grass_seed: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            wheat_seed: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            wheat: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            potato_seed: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            potato: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            corn_seed: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            corn: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            flower_seed: {
                elem2: null,
                chance: 0.4,
                func: behaviors.FEEDPIXEL
            },
            flour: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            dough: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            bread: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            toast: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            salt: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            sugar: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            salt_water: {
                elem2: "dirty_water",
                chance: 0.2
            },
            sugar_water: {
                elem2: "dirty_water",
                chance: 0.2
            },
            water: {
                elem2: "dirty_water",
                chance: 0.2
            },
            popcorn: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            candy: {
                elem2: null,
                chance: 0.3,
                func: behaviors.FEEDPIXEL
            },
            caramel: {
                elem2: null,
                chance: 0.4,
                func: behaviors.FEEDPIXEL
            },
            lichen: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            egg: {
                elem2: null,
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            yolk: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            grape: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
        },
        egg: "rat",
        category: "life",
        tempHigh: 120,
        stateHigh: "rotten_meat",
        tempLow: -18,
        stateLow: "frozen_meat",
        breakInto: "infection",
        burn: 80,
        burnTime: 150,
        state: "solid",
        density: 1450,
        conduct: 0.25,
    },
    frog: {
        color: "#607300",
        behavior: ["XX|XX|M2%3", "XX|FX%0.5|CR:slime%0.01 AND BO", "XX|M1|XX"],
        reactions: {
            fly: {
                elem2: null,
                chance: 0.5,
                func: behaviors.FEEDPIXEL
            },
            firefly: {
                elem2: null,
                chance: 0.5,
                func: behaviors.FEEDPIXEL
            },
            snail: {
                elem2: "calcium",
                chance: 0.1,
                func: behaviors.FEEDPIXEL
            },
            slug: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            worm: {
                elem2: null,
                chance: 0.2,
                func: behaviors.FEEDPIXEL
            },
            algae: {
                elem2: null,
                chance: 0.5,
                func: behaviors.FEEDPIXEL
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.5
            },
        },
        foodNeed: 10,
        baby: "tadpole",
        temp: 19.1,
        tempHigh: 100,
        stateHigh: "cooked_meat",
        tempLow: -18,
        stateLow: "frozen_frog",
        category: "life",
        breakInto: "slime",
        burn: 75,
        burnTime: 30,
        state: "solid",
        density: 1450,
        conduct: 0.2,
    },
    frozen_frog: {
        color: "#007349",
        behavior: behaviors.STURDYPOWDER,
        temp: -20,
        tempHigh: 0,
        stateHigh: "frog",
        category: "life",
        breakInto: "slime",
        hidden: true,
        state: "solid",
        density: 1500,
    },
    tadpole: {
        color: "#87b574",
        behavior: ["XX|XX|M2%25 AND SW:water,salt_water,sugar_water,dirty_water%14", "XX|FX%0.5|SW:water,salt_water,sugar_water,dirty_water%14", "XX|M1|SW:water,salt_water,sugar_water,dirty_water%14"],
        tick: function(pixel) {
            if (pixelTicks - pixel.start > 500) {
                changePixel(pixel, "frog");
            }
        },
        reactions: {
            algae: {
                elem2: null,
                chance: 0.25
            },
        },
        tempHigh: 100,
        stateHigh: "steam",
        tempLow: -10,
        stateLow: "ice",
        category: "life",
        hidden: true,
        state: "solid",
        density: 1450,
        conduct: 0.2,
    },
    fish: {
        color: "#ac8650",
        behavior: ["XX|M2%5|SW:water,salt_water,sugar_water,dirty_water%14", "XX|FX%0.5|BO", "M2|M1|M2 AND SW:water,salt_water,sugar_water,dirty_water%5"],
        reactions: {
            algae: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            plant: {
                elem2: null,
                chance: 0.125,
                func: behaviors.FEEDPIXEL
            },
            fly: {
                elem2: null,
                chance: 0.4,
                func: behaviors.FEEDPIXEL
            },
            firefly: {
                elem2: null,
                chance: 0.6,
                func: behaviors.FEEDPIXEL
            },
            worm: {
                elem2: null,
                chance: 0.25,
                func: behaviors.FEEDPIXEL
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.5
            },
        },
        foodNeed: 20,
        temp: 20,
        tempHigh: 120,
        stateHigh: "meat",
        tempLow: -20,
        stateLow: "frozen_meat",
        category: "life",
        breakInto: "blood",
        burn: 40,
        burnTime: 100,
        state: "solid",
        density: 1080,
        conduct: 0.2,
    },
    slug: {
        color: ["#997e12", "#997e12", "#997e12", "#997e12", "#997e12", "#997e12", "#403314", "#403314", "#403314", "#403314", "#403314", "#403314", "#124a44"],
        behavior: ["XX|XX|XX", "XX|FX%0.25|M2%0.5 AND BO", "XX|M1|XX"],
        reactions: {
            salt: {
                elem1: "slime",
                elem2: null
            },
            salt_water: {
                elem1: "slime",
                elem2: null
            },
            potassium_salt: {
                elem1: "slime",
                elem2: null
            },
            epsom_salt: {
                elem1: "slime",
                elem2: null
            },
            plant: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            worm: {
                elem2: null,
                chance: 0.01,
                func: behaviors.FEEDPIXEL
            },
            mushroom_spore: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            grass: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            grass_seed: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            algae: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_cap: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_stalk: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_gill: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            lichen: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            hyphae: {
                elem2: "dirt",
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mycelium: {
                elem2: "dirt",
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
        },
        tempLow: 5,
        stateLow: "slime",
        tempHigh: 90,
        stateHigh: "slime",
        breakInto: "slime",
        category: "life",
        state: "solid",
        density: 1450,
        conduct: 0.17,
    },
    snail: {
        color: "#5c3104",
        behavior: ["XX|XX|XX", "XX|FX%0.25|M2%0.5 AND BO", "XX|M1|XX"],
        reactions: {
            salt: {
                elem1: "calcium",
                elem2: null
            },
            salt_water: {
                elem1: "calcium",
                elem2: null
            },
            dirty_water: {
                elem2: "water",
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            potassium_salt: {
                elem1: "calcium",
                elem2: null
            },
            epsom_salt: {
                elem1: "calcium",
                elem2: null
            },
            plant: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            worm: {
                elem2: null,
                chance: 0.01,
                func: behaviors.FEEDPIXEL
            },
            mushroom_spore: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            grass: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            grass_seed: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            algae: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_cap: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_stalk: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mushroom_gill: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            lichen: {
                elem2: null,
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            hyphae: {
                elem2: "dirt",
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
            mycelium: {
                elem2: "dirt",
                chance: 0.05,
                func: behaviors.FEEDPIXEL
            },
        },
        tempLow: -6.4,
        stateLow: "calcium",
        tempHigh: 100,
        stateHigh: "calcium",
        breakInto: "slime",
        category: "life",
        state: "solid",
        density: 1500,
        conduct: 0.16,
    },
    heater: {
        color: "#881111",
        behavior: ["XX|HT:2|XX", "HT:2|XX|HT:2", "XX|HT:2|XX"],
        category: "machines",
        insulate: true,
    },
    cooler: {
        color: "#111188",
        behavior: ["XX|CO:2|XX", "CO:2|XX|CO:2", "XX|CO:2|XX"],
        category: "machines",
        insulate: true,
    },
    superheater: {
        color: "#dd1111",
        behavior: ["XX|HT:10|XX", "HT:10|XX|HT:10", "XX|HT:10|XX"],
        category: "machines",
        insulate: true,
    },
    freezer: {
        color: "#1111dd",
        behavior: ["XX|CO:10|XX", "CO:10|XX|CO:10", "XX|CO:10|XX"],
        category: "machines",
        insulate: true,
    },
    torch: {
        color: "#d68542",
        behavior: ["XX|CR:fire|XX", "XX|XX|XX", "XX|XX|XX"],
        reactions: {
            water: {
                elem1: "wood"
            },
            sugar_water: {
                elem1: "wood"
            },
            salt_water: {
                elem1: "wood"
            },
            seltzer: {
                elem1: "wood"
            },
            dirty_water: {
                elem1: "wood"
            },
            pool_water: {
                elem1: "wood"
            },
            steam: {
                elem1: "wood"
            },
            smog: {
                elem1: "wood"
            },
            rain_cloud: {
                elem1: "wood"
            },
            cloud: {
                elem1: "wood"
            },
            snow_cloud: {
                elem1: "wood"
            },
            hail_cloud: {
                elem1: "wood"
            },
        },
        temp: 600,
        category: "special",
        breakInto: "sawdust",
        tempLow: -273,
        stateLow: "wood",
    },
    spout: {
        color: "#606378",
        behavior: ["XX|CR:water|XX", "CR:water|XX|CR:water", "XX|CR:water|XX"],
        category: "special",
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        conduct: 0.42,
    },
    udder: {
        color: "#ecb3f5",
        behavior: ["XX|XX|XX", "XX|XX|XX", "XX|CR:milk%2.5|XX"],
        tempHigh: 100,
        stateHigh: "cooked_meat",
        tempLow: -18,
        stateLow: "frozen_meat",
        burn: 15,
        burnTime: 200,
        burnInto: "cooked_meat",
        category: "special",
    },
    bone_marrow: {
        color: "#c97265",
        behavior: ["XX|CR:blood,bone,bone%1|XX", "CR:blood,bone,bone%1|XX|CR:blood,bone,bone%1", "XX|CR:blood,bone,bone%1|XX"],
        category: "life",
        tempHigh: 750,
        stateHigh: "calcium",
        breakInto: ["calcium", "blood"],
        hidden: true,
    },
    bone: {
        color: "#d9d9d9",
        behavior: behaviors.SUPPORT,
        reactions: {
            blood: {
                elem1: "bone_marrow",
                chance: 0.0005
            },
            antibody: {
                elem1: "bone_marrow",
                chance: 0.0005
            },
        },
        category: "life",
        tempHigh: 760,
        stateHigh: "calcium",
        state: "solid",
        density: 1900,
        hardness: 0.5,
        breakInto: "calcium",
    },
    antipowder: {
        color: "#ebd1d8",
        behavior: behaviors.AGPOWDER,
        category: "special",
        tempHigh: 1850,
        stateHigh: "antimolten",
        state: "solid",
        density: 1850,
    },
    antimolten: {
        color: ["#ffb5b5", "#ffd0b5", "#ffd0b5"],
        behavior: ["M1|M1|M1", "M2|XX|M2", "XX|CR:antifire%2.5|XX"],
        temp: 1850,
        tempLow: 1750,
        stateLow: "antipowder",
        viscosity: 10000,
        hidden: true,
        state: "liquid",
        density: 1000,
        category: "special",
    },
    antifire: {
        color: ["#ffc3a6", "#ffdfa3", "#ffb69e"],
        behavior: ["XX|M2|XX", "M2|XX|M2", "M1|M1|M1"],
        reactions: {
            antiliquid: {
                elem1: "antigas"
            },
        },
        temp: 600,
        tempLow: 100,
        stateLow: "antigas",
        tempHigh: 7000,
        stateHigh: "plasma",
        category: "special",
        burning: true,
        burnTime: 25,
        burnInto: "antigas",
        fireElement: "flash",
        hidden: true,
        state: "gas",
        density: 0.2,
    },
    antifluid: {
        color: "#d1dbeb",
        behavior: behaviors.AGLIQUID,
        category: "special",
        tempHigh: 100,
        stateHigh: "antigas",
        tempLow: 0,
        stateLowName: "antiice",
        state: "liquid",
        density: 1000,
    },
    antigas: {
        color: "#e6fffc",
        behavior: behaviors.GAS,
        category: "special",
        tempLow: 100,
        stateLow: "antifluid",
        hidden: true,
        state: "gas",
        density: 0.1,
    },
    vertical: {
        color: "#d9d9d9",
        behavior: ["XX|M1|XX", "CR:wall|XX|CR:wall", "XX|XX|XX"],
        category: "special",
        hidden: true,
        excludeRandom: true,
    },
    horizontal: {
        color: "#d9d9d9",
        behavior: ["XX|CR:wall|XX", "XX|XX|M1", "XX|CR:wall|XX"],
        category: "special",
        hidden: true,
        excludeRandom: true,
    },
    rocket: {
        color: "#ff0000",
        behavior: ["XX|M1|XX", "XX|DL%1|XX", "CR:smoke|CR:fire|CR:smoke"],
        category: "special",
        hidden: true,
        state: "solid",
        temp: 700,
        density: 7300,
        conduct: 0.73,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
    },
    ash: {
        color: ["#8c8c8c", "#9c9c9c"],
        behavior: behaviors.POWDER,
        reactions: {
            steam: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            rain_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            snow_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            hail_cloud: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            acid_cloud: {
                elem1: "pyrocumulus",
                chance: 0.05,
                y: [0, 12],
                setting: "clouds"
            },
            pyrocumulus: {
                elem1: "pyrocumulus",
                chance: 0.08,
                y: [0, 12],
                setting: "clouds"
            },
            stench: {
                elem2: null,
                chance: 0.1
            },
        },
        category: "powders",
        state: "solid",
        density: 700,
    },
    light: {
        color: "#fffdcf",
        behavior: ["XX|XX|XX", "XX|DL%2|XX", "XX|XX|XX"],
        tick: function(pixel) {
            if (pixel.vx === undefined) {
                // choose 1, 0, or -1
                pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                // if both are 0, make one of them 1 or -1
                if (pixel.vx === 0 && pixel.vy === 0) {
                    if (Math.random() < 0.5) {
                        pixel.vx = Math.random() < 0.5 ? 1 : -1;
                    } else {
                        pixel.vy = Math.random() < 0.5 ? 1 : -1;
                    }
                }
            }
            // move and invert direction if hit
            if (pixel.vx && !tryMove(pixel, pixel.x + pixel.vx, pixel.y)) {
                var newX = pixel.x + pixel.vx;
                if (!isEmpty(newX, pixel.y, true)) {
                    var newPixel = pixelMap[pixel.x + pixel.vx][pixel.y];
                    if (!elements[newPixel.element].insulate) {
                        newPixel.temp += 1;
                        pixelTempCheck(newPixel);
                    }
                    if (!elements.light.reactions[newPixel.element]) {
                        pixel.color = newPixel.color;
                    }
                }
                pixel.vx = -pixel.vx;
            }
            if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y + pixel.vy)) {
                var newY = pixel.y + pixel.vy;
                if (!isEmpty(pixel.x, newY, true)) {
                    var newPixel = pixelMap[pixel.x][pixel.y + pixel.vy];
                    if (!elements[newPixel.element].insulate) {
                        newPixel.temp += 1;
                        pixelTempCheck(newPixel);
                    }
                    if (!elements.light.reactions[newPixel.element]) {
                        pixel.color = newPixel.color;
                    }
                }
                pixel.vy = -pixel.vy;
            }
        },
        reactions: {
            glass: {
                color1: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"]
            },
            steam: {
                color1: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"]
            },
            rain_cloud: {
                color1: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"]
            },
            cloud: {
                color1: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"]
            },
            smog: {
                color1: ["#9f6060", "#9f8260", "#9f9f60", "#609f60", "#609f9f", "#60609f", "#9f609f"]
            },
            ice: {
                color1: "#c2fff9"
            },
            water: {
                color1: "#a1bac9"
            },
            salt_water: {
                color1: "#a1bac9"
            },
            sugar_water: {
                color1: "#a1bac9"
            },
            dirty_water: {
                color1: "#a1c9a8"
            },
            seltzer: {
                color1: "#c2fff9"
            },
            diamond: {
                color1: ["#c2c5ff", "#c2d9ff"]
            },
            ozone: {
                color1: "#7b9ae0"
            },
            plant: {
                color1: "#00ff00"
            },
            algae: {
                color1: "#00ff00"
            },
            rainbow: {
                color1: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"]
            },
            static: {
                color1: ["#ffffff", "#bdbdbd", "#808080", "#424242", "#1c1c1c"]
            },
        },
        temp: 35,
        category: "energy",
        state: "gas",
        density: 0.00001,
        ignoreAir: true,
        insulate: true,
    },
    laser: {
        color: "#ff0000",
        behavior: ["XX|XX|XX", "XX|DL%0.25|XX", "XX|XX|XX"],
        tick: behaviors.BOUNCY,
        temp: 35,
        category: "energy",
        state: "gas",
        density: 0.00001,
        ignoreAir: true,
    },
    ball: {
        color: "#e35693",
        behavior: ["XX|XX|XX", "XX|FY:0%5|XX", "XX|M1 AND BO|XX"],
        tempHigh: 250,
        stateHigh: "molten_plastic",
        category: "energy",
        flipY: false,
        flippableY: true,
        hidden: true,
    },
    pointer: {
        color: "#ff0000",
        behavior: behaviors.SELFDELETE,
        category: "special",
        hidden: true,
    },
    charcoal: {
        color: "#2b2b2b",
        behavior: behaviors.POWDER,
        burn: 25,
        burnTime: 1000,
        burnInto: "carbon_dioxide",
        category: "powders",
        state: "solid",
        density: 208,
        breakInto: ["ash", "ash", "carbon_dioxide"],
        hardness: 0.5,
    },
    tinder: {
        color: ["#917256", "#87684F", "#735F4A", "#5D4C3E", "#4B3A2E"],
        behavior: behaviors.STURDYPOWDER,
        category: "powders",
        tempHigh: 400,
        stateHigh: "fire",
        burn: 50,
        burnTime: 100,
        state: "solid",
        density: 23,
    },
    sawdust: {
        color: ["#dec150", "#c7b15a"],
        behavior: behaviors.POWDER,
        reactions: {
            water: {
                elem1: "cellulose",
                elem2: null
            },
            dirty_water: {
                elem1: "cellulose",
                elem2: null
            },
            salt_water: {
                elem1: "cellulose",
                elem2: null
            },
            sugar_water: {
                elem1: "cellulose",
                elem2: null
            },
            sap: {
                elem1: "particleboard",
                elem2: null
            },
            honey: {
                elem1: "particleboard",
                elem2: null
            },
            glue: {
                elem1: "particleboard",
                elem2: null
            },
        },
        tempHigh: 400,
        stateHigh: "fire",
        category: "powders",
        burn: 25,
        burnTime: 150,
        burnInto: ["ash", "fire", "fire", "fire"],
        state: "solid",
        density: 393,
    },
    salt: {
        color: ["#f2f2f2", "#e0e0e0"],
        behavior: behaviors.POWDER,
        reactions: {
            ice: {
                elem1: null,
                elem2: "salt_water",
                chance: 0.1
            },
            snow: {
                elem1: null,
                elem2: "salt_water",
                chance: 0.25
            },
            packed_snow: {
                elem1: null,
                elem2: "salt_water",
                chance: 0.05
            },
            packed_ice: {
                elem1: null,
                elem2: "salt_water",
                chance: 0.01
            },
        },
        category: "powders",
        tempHigh: 801,
        state: "solid",
        density: 2160,
    },
    hail: {
        color: "#c5e9f0",
        tick: function(pixel) {
            for (var i = 0; i < 3; i++) {
                if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                    if (!isEmpty(pixel.x, pixel.y + 1, true)) {
                        var newPixel = pixelMap[pixel.x][pixel.y + 1];
                        if (newPixel.element === "hail") {
                            break;
                        }
                        if (elements[newPixel.element].state == "solid") {
                            if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                                if (elements[newPixel.element].breakInto) {
                                    var breakInto = elements[newPixel.element].breakInto;
                                    // if it is an array, pick a random element
                                    if (Array.isArray(breakInto)) {
                                        breakInto = breakInto[Math.floor(Math.random() * breakInto.length)];
                                    }
                                    changePixel(newPixel, breakInto);
                                } else {
                                    deletePixel(newPixel.x, newPixel.y);
                                }
                            }
                        }
                    }
                    deletePixel(pixel.x, pixel.y);
                    break;
                }
            }
        },
        temp: -200,
        tempHigh: 10,
        stateHigh: "water",
        category: "powders",
        state: "solid",
        density: 850,
        hidden: true,
    },
    hydrogen: {
        color: "#558bcf",
        behavior: behaviors.GAS,
        reactions: {
            oxygen: {
                elem1: null,
                elem2: "steam"
            },
            hydrogen: {
                elem1: null,
                elem2: "helium",
                tempMin: 10000
            },
            nitrogen: {
                elem1: null,
                elem2: "oxygen",
                tempMin: 10000
            },
            sulphur: {
                elem1: null,
                elem2: "chlorine",
                tempMin: 10000
            },
            neon: {
                elem1: null,
                elem2: "sodium",
                tempMin: 10000
            },
        },
        category: "gases",
        burn: 100,
        burnTime: 2,
        tempLow: -253,
        stateLow: "liquid_hydrogen",
        state: "gas",
        density: 0.08375,
    },
    oxygen: {
        color: "#99c7ff",
        behavior: behaviors.GAS,
        reactions: {
            copper: {
                elem1: null,
                elem2: "oxidized_copper",
                chance: 0.05
            },
            iron: {
                elem1: null,
                elem2: "rust",
                chance: 0.025
            },
            water: {
                elem1: "foam"
            },
            salt_water: {
                elem1: "foam"
            },
            sugar_water: {
                elem1: "foam"
            },
            seltzer: {
                elem1: "foam"
            },
            soda: {
                elem1: "foam"
            },
            dirty_water: {
                elem1: "foam"
            },
            oxygen: {
                elem1: null,
                elem2: "ozone",
                chance: 0.3,
                y: [0, 12],
                setting: "clouds"
            },
            ozone: {
                elem1: "ozone",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
        },
        category: "gases",
        burn: 100,
        burnTime: 2,
        tempLow: -183.94,
        stateLow: "liquid_oxygen",
        state: "gas",
        density: 1.292,
    },
    nitrogen: {
        color: "#b8d1d4",
        behavior: behaviors.GAS,
        reactions: {
            oxygen: {
                elem1: null,
                elem2: "anesthesia"
            },
            hydrogen: {
                elem1: null,
                elem2: "ammonia"
            },
            neon: {
                elem1: null,
                elem2: "chlorine",
                tempMin: 10000
            },
        },
        category: "gases",
        tempLow: -195.8,
        stateLow: "liquid_nitrogen",
        state: "gas",
        density: 1.165,
    },
    helium: {
        color: "#a69494",
        behavior: behaviors.GAS,
        category: "gases",
        tempLow: -272.2,
        stateLow: "liquid_helium",
        state: "gas",
        density: 0.1786,
    },
    anesthesia: {
        color: "#d3e1e3",
        behavior: behaviors.GAS,
        category: "gases",
        tempLow: -88.48,
        stateLow: ["nitrogen", "oxygen"],
        hidden: true,
        state: "gas",
        density: 1.9781,
    },
    ammonia: {
        color: "#bab6a9",
        behavior: behaviors.GAS,
        reactions: {
            methane: {
                elem1: null,
                elem2: "cyanide",
                chance: 0.25
            },
            plant: {
                elem1: "plant",
                chance: 0.05
            },
            wheat_seed: {
                elem1: "wheat",
                chance: 0.05
            },
            grass: {
                elem1: "grass",
                chance: 0.05
            },
            grass_seed: {
                elem1: "grass",
                chance: 0.05
            },
            bamboo_plant: {
                elem1: "bamboo",
                chance: 0.05
            },
            flower_seed: {
                elem1: "flower_seed",
                chance: 0.05
            },
            petal: {
                elem1: "flower_seed",
                chance: 0.05
            },
            vine: {
                elem1: "vine",
                chance: 0.05
            },
            sapling: {
                elem1: "tree_branch",
                chance: 0.05
            },
            tree_branch: {
                elem1: "tree_branch",
                chance: 0.05
            },
            corn_seed: {
                elem1: "corn",
                chance: 0.05
            },
            root: {
                elem1: "root",
                chance: 0.05
            },
            dirt: {
                elem1: "grass",
                chance: 0.05
            },
            mud: {
                elem1: "grass",
                chance: 0.05
            },
            potato_seed: {
                elem1: "potato",
                chance: 0.05
            },
            yeast: {
                elem1: "yeast",
                chance: 0.05
            },
            fish: {
                elem2: "meat",
                chance: 0.05
            },
            bird: {
                elem2: "meat",
                chance: 0.05
            },
            frog: {
                elem2: "meat",
                chance: 0.05
            },
        },
        tempLow: -33.34,
        category: "gases",
        state: "gas",
        density: 0.73,
    },
    liquid_ammonia: {
        tempLow: -260,
        stateLow: ["nitrogen_ice", "hydrogen_ice"],
    },
    carbon_dioxide: {
        color: "#2f2f2f",
        behavior: behaviors.GAS,
        reactions: {
            plant: {
                elem1: "oxygen"
            },
            algae: {
                elem1: "oxygen"
            },
        },
        category: "gases",
        tempLow: -78.5,
        stateLow: "dry_ice",
        state: "gas",
        density: 1.977,
        alias: ["CO2", "CO₂"],
    },
    oil: {
        color: "#470e00",
        behavior: behaviors.LIQUID,
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
        },
        category: "liquids",
        tempHigh: 400,
        stateHigh: "fire",
        burn: 70,
        burnTime: 300,
        burnInto: ["carbon_dioxide", "fire"],
        viscosity: 250,
        state: "liquid",
        density: 825,
        stain: 0.05,
    },
    lamp_oil: {
        color: "#b3b38b",
        behavior: behaviors.LIQUID,
        reactions: {
            glue: {
                elem2: null,
                chance: 0.05
            },
        },
        category: "liquids",
        tempHigh: 2100,
        stateHigh: "fire",
        burn: 95,
        burnTime: 2000,
        burnInto: ["carbon_dioxide", "fire"],
        viscosity: 3,
        state: "liquid",
        density: 850,
        alias: "kerosene",
    },
    propane: {
        color: "#cfcfcf",
        behavior: behaviors.GAS,
        category: "gases",
        tempHigh: 400,
        stateHigh: "fire",
        tempLow: -43,
        burn: 100,
        burnTime: 5,
        fireColor: ["#00ffff", "#00ffdd"],
        state: "gas",
        density: 2.0098,
    },
    methane: {
        color: "#9f9f9f",
        behavior: behaviors.GAS,
        category: "gases",
        tempHigh: 400,
        stateHigh: "fire",
        tempLow: -161.5,
        burn: 85,
        burnTime: 5,
        fireColor: ["#00ffff", "#00ffdd"],
        state: "gas",
        density: 0.554,
    },
    stained_glass: {
        color: ["#6b2e2e", "#6b4f2e", "#6b6b2e", "#2e6b2e", "#2e6b6b", "#2e2e6b", "#6b2e6b"],
        behavior: behaviors.WALL,
        tick: function(pixel) {
            if (pixel.start - 1 < pixelTicks) {
                pixel.color = "hsl(" + (pixel.colorstart || pixel.start) + ",40%,30%)";
                if (!pixel.colorstart) {
                    pixel.colorstart = pixel.start;
                }
            }
        },
        tempHigh: 1500,
        category: "solids",
        state: "solid",
        density: 2500,
        breakInto: "color_sand",
    },
    molten_stained_glass: {
        color: ["#c27070", "#c29c70", "#c2c270", "#70c270", "#70c2c2", "#7070c2", "#c270c2"],
        tick: function(pixel) {
            if (pixel.start - 1 < pixelTicks) {
                pixel.color = "hsl(" + (pixel.colorstart || pixel.start) + ",40%,60%)";
                if (!pixel.colorstart) {
                    pixel.colorstart = pixel.start;
                }
            }
        },
    },
    art: {
        color: "#ffffff",
        behavior: behaviors.WALL,
        customColor: true,
        category: "special",
    },
    rainbow: {
        color: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"],
        tick: function(pixel) {
            var t = pixelTicks + pixel.x + pixel.y;
            var r = Math.floor(127 * (1 - Math.cos((t * Math.PI) / 90)));
            var g = Math.floor(127 * (1 - Math.cos((t * Math.PI) / 90 + (2 * Math.PI) / 3)));
            var b = Math.floor(127 * (1 - Math.cos((t * Math.PI) / 90 + (4 * Math.PI) / 3)));
            pixel.color = "rgb(" + r + "," + g + "," + b + ")";
        },
        category: "special",
    },
    static: {
        color: ["#ffffff", "#888888", "#000000"],
        behavior: ["XX|XX|XX", "XX|CC:ffffff,9c9c9c,454545|XX", "XX|XX|XX"],
        category: "special",
    },
    border: {
        color: "#00ffff",
        tick: function(pixel) {
            var t = pixelTicks / 2 + pixel.x + pixel.y;
            var r = Math.floor(127 * Math.sin(t / 1.5));
            pixel.color = "rgba(" + r + "," + r * 2 + "," + r * 2 + "," + r / 127 + ")";
        },
        category: "special",
        hardness: 1,
        insulate: true,
    },
    clay: {
        color: "#d4c59c",
        behavior: behaviors.SUPPORT,
        tempHigh: 135,
        stateHigh: "baked_clay",
        category: "land",
        state: "solid",
        density: 1760,
    },
    clay_soil: {
        color: ["#F49A6F", "#AB7160", "#B56C52"],
        behavior: ["XX|XX|XX", "XX|XX|XX", "M2%25|M1|M2%25"],
        reactions: {
            water: {
                elem1: "clay",
                elem2: null
            },
            salt_water: {
                elem1: "clay",
                elem2: null
            },
            sugar_water: {
                elem1: "clay",
                elem2: null
            },
            dirty_water: {
                elem1: "clay",
                elem2: null
            },
            seltzer: {
                elem1: "clay",
                elem2: null
            },
        },
        tempHigh: 140,
        stateHigh: "baked_clay",
        category: "land",
        state: "solid",
        density: 1600,
    },
    brick: {
        color: "#cb4141",
        behavior: behaviors.WALL,
        category: "solids",
        tempHigh: 1540,
        state: "solid",
        density: 1650,
        hardness: 0.33,
        breakInto: "brick_rubble",
    },
    ruins: {
        color: "#5c5c5c",
        behavior: ["XX|SP|XX", "XX|XX|XX", "M2%1|M1|M2%1"],
        tempHigh: 1500,
        stateHigh: "magma",
        category: "solids",
        state: "solid",
        density: 2400,
        hardness: 0.33,
        breakInto: "dust",
    },
    sapling: {
        color: "#3e9c3e",
        tick: function(pixel) {
            if (isEmpty(pixel.x, pixel.y + 1)) {
                movePixel(pixel, pixel.x, pixel.y + 1);
            } else {
                if (Math.random() < 0.02 && pixel.age > 50 && pixel.temp < 100) {
                    if (!outOfBounds(pixel.x, pixel.y + 1)) {
                        var dirtPixel = pixelMap[pixel.x][pixel.y + 1];
                        if (dirtPixel.element === "dirt" || dirtPixel.element === "mud" || dirtPixel.element === "sand" || dirtPixel.element === "wet_sand" || dirtPixel.element === "clay_soil" || dirtPixel.element === "mycelium") {
                            changePixel(dirtPixel, "root");
                        }
                    }
                    if (isEmpty(pixel.x, pixel.y - 1)) {
                        movePixel(pixel, pixel.x, pixel.y - 1);
                        createPixel(Math.random() > 0.5 ? "wood" : "tree_branch", pixel.x, pixel.y + 1);
                    }
                } else if (pixel.age > 1000) {
                    changePixel(pixel, "wood");
                }
                pixel.age++;
            }
            doDefaults(pixel);
        },
        properties: {
            age: 0,
        },
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 65,
        burnTime: 15,
        category: "life",
        state: "solid",
        density: 1500,
        cooldown: defaultCooldown,
    },
    seeds: {
        color: ["#359100", "#74b332", "#b9d461", "#dede7a"],
        tick: function(pixel) {
            // Choose randomly grass_seed, wheat_seed, flower_seed, bamboo_plant, mushroom_spore, corn_seed, potato_seed
            pixel.element = ["grass_seed", "wheat_seed", "flower_seed", "bamboo_plant", "mushroom_spore", "corn_seed", "potato_seed"][Math.floor(Math.random() * 7)];
            pixel.color = pixelColorPick(pixel);
        },
        category: "life",
        cooldown: defaultCooldown,
    },
    grass_seed: {
        color: ["#439809", "#258B08", "#118511", "#127B12", "#136D14"],
        behavior: ["XX|M2%0.05|XX", "XX|L2:grass|XX", "XX|M1|XX"],
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 1400,
        hidden: true,
        cooldown: defaultCooldown,
    },
    wheat_seed: {
        color: "#b6c981",
        behavior: ["XX|M2%0.25|XX", "XX|L2:wheat AND C2:wheat%30|XX", "XX|M1|XX"],
        tempHigh: 400,
        stateHigh: "fire",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 769,
        hidden: true,
        cooldown: defaultCooldown,
    },
    straw: {
        color: ["#E9D391", "#A3835E", "#B79A73"],
        behavior: behaviors.WALL,
        tempHigh: 400,
        stateHigh: "fire",
        burn: 60,
        burnTime: 40,
        category: "solids",
        state: "solid",
        density: 67.5,
    },
    paper: {
        color: "#f0f0f0",
        behavior: behaviors.WALL,
        reactions: {
            water: {
                elem1: "cellulose",
                elem2: null
            },
            dirty_water: {
                elem1: "cellulose",
                elem2: null
            },
            salt_water: {
                elem1: "cellulose",
                elem2: null
            },
            sugar_water: {
                elem1: "cellulose",
                elem2: null
            },
            seltzer: {
                elem1: "cellulose",
                elem2: null
            },
            soda: {
                elem1: "cellulose",
                elem2: null
            },
            blood: {
                elem1: "cellulose",
                elem2: null
            },
            foam: {
                elem1: "cellulose",
                elem2: null
            },
            bubble: {
                elem1: "cellulose",
                elem2: null
            },
            oil: {
                elem1: "cellulose",
                elem2: null
            },
            alcohol: {
                elem1: "cellulose",
                elem2: null
            },
            vinegar: {
                elem1: "cellulose",
                elem2: null
            },
        },
        tempHigh: 248,
        stateHigh: ["fire", "fire", "fire", "fire", "fire", "ash"],
        burn: 70,
        burnTime: 300,
        burnInto: ["fire", "fire", "fire", "fire", "fire", "ash"],
        category: "solids",
        state: "solid",
        density: 1201,
    },
    pollen: {
        color: "#ffffc0",
        behavior: ["XX|XX|XX", "XX|CH:flower_seed%0.01|XX", "M2|M1|M2"],
        reactions: {
            sugar_water: {
                elem1: null,
                elem2: "honey"
            },
            water: {
                elem1: null
            },
            salt_water: {
                elem1: null
            },
            dirty_water: {
                elem1: null
            },
        },
        category: "life",
        tempHigh: 400,
        stateHigh: "ash",
        burn: 50,
        burnTime: 20,
        state: "solid",
        density: 1435,
    },
    flower_seed: {
        color: "#0e990e",
        behavior: ["XX|M2%1.5|XX", "XX|L2:plant AND C2:pistil%30|XX", "XX|M1|XX"],
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 1400,
        cooldown: defaultCooldown,
    },
    pistil: {
        color: ["#734e39", "#2F0603", "#D2AC3A", "#8A978F", "#593117"],
        tick: function(pixel) {
            if (!pixel.fColor) {
                // make it a hsl random hue, 100% saturation, 50% lightness
                pixel.fColor = "hsl(" + Math.floor(Math.random() * 360) + ",100%,50%)";
            }
            var coordsToCheck = [
                [pixel.x - 1, pixel.y],
                [pixel.x + 1, pixel.y],
                [pixel.x, pixel.y - 1],
                [pixel.x, pixel.y + 1],
            ];
            // check if each pixel is empty, if it is create a petal with the color fColor
            for (var i = 0; i < coordsToCheck.length; i++) {
                var coord = coordsToCheck[i];
                if (isEmpty(coord[0], coord[1])) {
                    createPixel("petal", coord[0], coord[1]);
                    pixelMap[coord[0]][coord[1]].color = pixel.fColor;
                }
            }
        },
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 50,
        burnTime: 20,
        category: "life",
        hidden: true,
        state: "solid",
        density: 1400,
    },
    petal: {
        color: "#ff0000",
        behavior: behaviors.WALL,
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 50,
        burnTime: 20,
        category: "life",
        hidden: true,
        state: "solid",
        density: 1400,
    },
    tree_branch: {
        color: "#a0522d",
        behavior: ["CR:plant,tree_branch%2|CR:plant,plant,plant,tree_branch%2|CR:plant,tree_branch%2", "XX|XX|XX", "XX|XX|XX"],
        tempHigh: 400,
        stateHigh: ["fire", "sap"],
        tempLow: -30,
        stateLow: "wood",
        category: "solids",
        burn: 40,
        burnTime: 50,
        burnInto: ["sap", "ember", "charcoal"],
        hidden: true,
        state: "solid",
        density: 1500,
        hardness: 0.15,
        breakInto: ["sap", "sawdust"],
    },
    vine: {
        color: "#005900",
        behavior: ["XX|SP|XX", "XX|XX|XX", "XX|CL%1 AND M1|XX"],
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 35,
        burnTime: 100,
        category: "life",
        state: "solid",
        density: 1050,
    },
    bamboo: {
        color: ["#7CC00C", "#77A012"],
        behavior: behaviors.WALL,
        tempHigh: 380,
        stateHigh: "fire",
        burn: 10,
        burnTime: 200,
        category: "life",
        state: "solid",
        density: 686,
        breakInto: "sawdust",
    },
    bamboo_plant: {
        color: ["#FBC882", "#DFAD64"],
        behavior: ["XX|M2%0.25|XX", "XX|L2:bamboo AND C2:bamboo%10|XX", "XX|M1|XX"],
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "bamboo",
        burn: 30,
        burnTime: 100,
        category: "life",
        state: "solid",
        density: 686,
        breakInto: "sawdust",
        cooldown: defaultCooldown,
    },
    burner: {
        color: "#d6baa9",
        behavior: ["CR:propane|CR:propane|CR:propane", "XX|XX|XX", "XX|XX|XX"],
        category: "machines",
        conduct: 0.73,
    },
    foam: {
        color: "#cad2e3",
        behavior: behaviors.FOAM,
        category: "liquids",
        state: "gas",
        density: 40,
    },
    bubble: {
        color: "#afc7fa",
        behavior: behaviors.BUBBLE,
        category: "liquids",
        state: "gas",
        density: 1.294,
    },
    acid: {
        color: ["#b5cf91", "#a1ff5e", "#288f2a"],
        behavior: ["XX|DB%5|XX", "DB%5 AND M2|XX|DB%5 AND M2", "DB%5 AND M2|DB%10 AND M1|DB%5 AND M2"],
        ignore: [
            "glass",
            "glass_shard",
            "stained_glass",
            "baked_clay",
            "acid_gas",
            "neutral_acid",
            "acid_cloud",
            "water",
            "salt_water",
            "sugar_water",
            "dirty_water",
            "copper",
            "gold",
            "porcelain",
            "plastic",
            "bead",
            "microplastic",
            "molten_plastic",
            "pool_water",
        ],
        reactions: {
            ash: {
                elem1: "neutral_acid",
                elem2: null
            },
            limestone: {
                elem1: "neutral_acid",
                elem2: null
            },
            quicklime: {
                elem1: "neutral_acid",
                elem2: null
            },
            slaked_lime: {
                elem1: "neutral_acid",
                elem2: null
            },
            borax: {
                elem1: "neutral_acid",
                elem2: null
            },
            ammonia: {
                elem1: "neutral_acid",
                elem2: null
            },
            bleach: {
                elem1: "neutral_acid",
                elem2: null
            },
            water: {
                elem1: null,
                elem2: "dirty_water"
            },
            salt_water: {
                elem1: null,
                elem2: "water"
            },
            sugar_water: {
                elem1: null,
                elem2: "water"
            },
            charcoal: {
                elem1: null,
                elem2: "carbon_dioxide"
            },
        },
        category: "liquids",
        tempHigh: 110,
        stateHigh: "acid_gas",
        tempLow: -58.88,
        burn: 30,
        burnTime: 1,
        state: "liquid",
        density: 1049,
        alias: "hydrochloric acid",
    },
    neutral_acid: {
        color: ["#c8d9b0", "#c1d9b0", "#b8dbb9"],
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1020,
        hidden: true,
    },
    acid_gas: {
        color: ["#85a758", "#3b7810", "#256626"],
        behavior: ["M1|DB%5 AND M1|M1", "DB%5 AND M1|XX|DB%5 AND M1", "DB%5 AND M1|DB%10 AND M1|DB%5 AND M1"],
        ignore: [
            "glass",
            "glass_shard",
            "stained_glass",
            "baked_clay",
            "acid_gas",
            "neutral_acid",
            "acid_cloud",
            "water",
            "salt_water",
            "sugar_water",
            "dirty_water",
            "copper",
            "gold",
            "porcelain",
            "plastic",
            "bead",
            "microplastic",
            "molten_plastic",
            "pool_water",
        ],
        reactions: {
            acid_gas: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.3,
                y: [0, 12],
                setting: "clouds"
            },
            rain_cloud: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            cloud: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            snow_cloud: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            hail_cloud: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            pyrocumulus: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            fire_cloud: {
                elem1: null,
                elem2: "acid_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            ash: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            limestone: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            quicklime: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            slaked_lime: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            borax: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            ammonia: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
            bleach: {
                elem1: "hydrogen",
                elem2: null,
                chance: 0.05
            },
        },
        category: "gases",
        temp: 120,
        tempHigh: 400,
        stateHigh: "fire",
        tempLow: 30,
        stateLow: "acid",
        burn: 30,
        burnTime: 1,
        state: "gas",
        density: 1.63,
    },
    glue: {
        color: "#f0f0f0",
        behavior: behaviors.STICKY,
        tempHigh: 475,
        stateHigh: ["cyanide", "dioxin"],
        category: "liquids",
        state: "liquid",
        density: 1300,
        ignore: ["sawdust", "particleboard", "ice", "dry_ice", "oxygen_ice", "hydrogen_ice", "nitrogen_ice"],
    },
    soda: {
        color: "#422016",
        behavior: ["XX|CR:foam%2|XX", "M2|XX|M2", "M2|M1|M2"],
        tempHigh: 100,
        stateHigh: ["steam", "carbon_dioxide", "sugar"],
        tempLow: -1.11,
        stateLow: "seltzer_ice",
        category: "liquids",
        reactions: {
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.0004
            },
            water: {
                elem1: "sugar_water",
                elem2: "sugar_water"
            },
            salt: {
                elem1: "foam",
                chance: 0.1
            },
            salt_water: {
                elem1: "foam",
                chance: 0.1
            },
        },
        state: "liquid",
        density: 1030,
    },
    gray_goo: {
        color: "#c0c0c0",
        behavior: ["XX|CH:gray_goo%25|XX", "M2%5 AND CH:gray_goo%25|DL%5|M2%5 AND CH:gray_goo%25", "XX|CH:gray_goo%25 AND M1|XX"],
        behaviorOn: ["XX|XX|XX", "XX|DL%5|XX", "M1|M2|M1"],
        reactions: {
            antibody: {
                elem1: "malware",
                elem2: null
            },
        },
        ignore: ["fire", "smoke", "malware", "flash", "light", "laser"],
        category: "special",
        state: "solid",
        density: 21450,
        excludeRandom: true,
        conduct: 0.25,
    },
    malware: {
        color: ["#8c4ac7", "#a13d6a"],
        behavior: ["CL%1|CL%1 AND SH|CL%1", "CL%1 AND SH|SH%5 AND DL%10|CL%1 AND SH", "M1%15 AND CL%1|M1%50 AND CL%2 AND SH|M1%15 AND CL%1"],
        reactions: {
            gray_goo: {
                elem2: "malware"
            },
        },
        category: "special",
        state: "solid",
        density: 2.1,
    },
    clone_powder: {
        color: "#f0f000",
        behavior: ["XX|CF|XX", "CF|XX|CF", "M2|CF AND M1|M2"],
        ignore: ["cloner", "ecloner", "slow_cloner", "floating_cloner"],
        category: "machines",
        insulate: true,
        state: "solid",
        density: 2710,
        hardness: 1,
    },
    floating_cloner: {
        color: "#c7c787",
        behavior: ["XX|CF%3 AND M1%10|XX", "CF%3 AND M1%10|XX|CF%3 AND M1%10", "XX|CF%3 AND M1%10|XX"],
        ignore: ["cloner", "ecloner", "slow_cloner", "clone_powder"],
        category: "machines",
        insulate: true,
        state: "solid",
        density: 1355,
        hardness: 1,
    },
    virus: {
        color: "#cc00ff",
        behavior: ["XX|CH:virus%25|XX", "CH:virus%25|XX|CH:virus%25", "XX|CH:virus%25 AND M1|XX"],
        reactions: {
            chlorine: {
                elem1: null
            },
            liquid_chlorine: {
                elem1: null
            },
        },
        ignore: ["fire", "smoke", "soap", "plague", "cancer"],
        category: "special",
        state: "solid",
        density: 600,
        excludeRandom: true,
    },
    ice_nine: {
        color: ["#B0DCF7", "#BBE9FC", "#CEFCFC"],
        behavior: ["XX|XX|XX", "XX|CH:ice%0.5|XX", "M2|M1|M2"],
        reactions: {
            water: {
                elem2: "ice_nine"
            },
            salt_water: {
                elem2: "ice_nine"
            },
            dirty_water: {
                elem2: "ice_nine"
            },
            sugar_water: {
                elem2: "ice_nine"
            },
            seltzer: {
                elem2: "ice_nine"
            },
            pool_water: {
                elem2: "ice_nine"
            },
            steam: {
                elem2: "ice_nine"
            },
            rain_cloud: {
                elem2: "ice_nine"
            },
            cloud: {
                elem2: "ice_nine"
            },
            snow_cloud: {
                elem2: "ice_nine"
            },
            hail_cloud: {
                elem2: "ice_nine"
            },
            snow: {
                elem2: "ice_nine"
            },
            smog: {
                elem2: "ice_nine"
            },
        },
        temp: -100,
        category: "special",
        state: "solid",
        density: 917,
        excludeRandom: true,
    },
    strange_matter: {
        color: ["#a4c730", "#b6ff57", "#74e846", "#2ba31d"],
        behavior: ["M1%10|M1%10 AND SW%5|M1%10", "M1%10 AND CH:strange_matter|XX|M1%10 AND CH:strange_matter", "M1|M1 AND SW%5|M1"],
        category: "special",
        state: "solid",
        density: 2000,
        excludeRandom: true,
    },
    permafrost: {
        color: ["#54443a", "#4f4235", "#453c30", "#524639"],
        behavior: behaviors.SUPPORT,
        temp: -50,
        tempHigh: 10,
        stateHigh: "mudstone",
        category: "land",
        state: "solid",
        density: 700,
    },
    cheese: {
        color: "#fcba03",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 54,
        stateHigh: "melted_cheese",
        category: "food",
        state: "solid",
        density: 1153,
    },
    melted_cheese: {
        color: "#fcdb53",
        behavior: behaviors.LIQUID,
        temp: 54,
        tempLow: 0,
        stateLow: "cheese",
        tempHigh: 1000,
        stateHigh: ["smoke", "steam", "alcohol_gas", "smoke", "steam", "alcohol_gas", "smoke", "steam", "alcohol_gas", "calcium", "salt"],
        category: "liquids",
        viscosity: 112,
        hidden: true,
        state: "liquid",
        density: 1153,
    },
    mushroom_spore: {
        color: ["#d1d1d1", "#d4cfa9", "#b4d4ae", "#b98aba", "#805236"],
        behavior: ["XX|M2%1.5|XX", "XX|L2:mushroom_stalk AND C2:mushroom_gill%20|XX", "XX|M1|XX"],
        reactions: {
            wood: {
                elem2: "dirt",
                chance: 0.04
            },
            tree_brake: {
                elem2: "dirt",
                chance: 0.04
            },
            plant: {
                elem2: "dirt",
                chance: 0.07
            },
            root: {
                elem2: "dirt",
                chance: 0.07
            },
            grass: {
                elem2: "dirt",
                chance: 0.08
            },
            grass_seed: {
                elem2: "dirt",
                chance: 0.08
            },
        },
        category: "life",
        tempHigh: 225,
        stateHigh: "fire",
        burn: 10,
        burnTime: 20,
        state: "solid",
        density: 123.6,
        cooldown: defaultCooldown,
    },
    mushroom_stalk: {
        color: "#d1d1d1",
        behavior: ["XX|XX|XX", "XX|XX|XX", "XX|CH:dirt>hyphae%1 AND M1|XX"],
        reactions: {
            wood: {
                elem2: "dirt",
                chance: 0.04
            },
            tree_brake: {
                elem2: "dirt",
                chance: 0.04
            },
            plant: {
                elem2: "dirt",
                chance: 0.07
            },
            root: {
                elem2: "dirt",
                chance: 0.07
            },
            grass: {
                elem2: "dirt",
                chance: 0.08
            },
            grass_seed: {
                elem2: "dirt",
                chance: 0.08
            },
            ash: {
                elem2: "dirt",
                chance: 0.04
            },
        },
        category: "life",
        hidden: true,
        tempHigh: 225,
        stateHigh: "fire",
        burn: 10,
        burnTime: 65,
        state: "solid",
        density: 90.445,
    },
    mushroom_gill: {
        color: "#d4cfa9",
        tick: function(pixel) {
            if (!pixel.mColor) {
                // make it a hsl random hue, 100% saturation, 50% lightness
                pixel.mColor = "hsl(" + (Math.floor(Math.random() * 200 + 180) % 360) + ",54%,52%)";
            }
            if (isEmpty(pixel.x, pixel.y - 1) && Math.random() < 0.1) {
                createPixel("mushroom_cap", pixel.x, pixel.y - 1);
                pixelMap[pixel.x][pixel.y - 1].color = pixel.mColor;
            }
            if (isEmpty(pixel.x - 1, pixel.y) && Math.random() < 0.02) {
                // create either mushroom_gill or mushroom_cap
                if (Math.random() < 0.5) {
                    createPixel("mushroom_gill", pixel.x - 1, pixel.y);
                    pixelMap[pixel.x - 1][pixel.y].mColor = pixel.mColor;
                } else {
                    createPixel("mushroom_cap", pixel.x - 1, pixel.y);
                    pixelMap[pixel.x - 1][pixel.y].color = pixel.mColor;
                }
            }
            if (isEmpty(pixel.x + 1, pixel.y) && Math.random() < 0.02) {
                if (Math.random() < 0.5) {
                    createPixel("mushroom_gill", pixel.x + 1, pixel.y);
                    pixelMap[pixel.x + 1][pixel.y].mColor = pixel.mColor;
                } else {
                    createPixel("mushroom_cap", pixel.x + 1, pixel.y);
                    pixelMap[pixel.x + 1][pixel.y].color = pixel.mColor;
                }
            }
        },
        category: "life",
        hidden: true,
        tempHigh: 225,
        stateHigh: "fire",
        burn: 10,
        burnTime: 65,
        burnInto: "mushroom_spore",
        state: "solid",
        density: 90.445,
    },
    mushroom_cap: {
        color: ["#c74442", "#c74442", "#c74442", "#cfb4b4", "#c74442", "#c74442", "#c74442"],
        behavior: behaviors.WALL,
        category: "life",
        hidden: true,
        tempHigh: 225,
        stateHigh: "fire",
        burn: 10,
        burnTime: 65,
        burnInto: "mushroom_spore",
        state: "solid",
        density: 90.445,
    },
    hyphae: {
        color: "#c79789",
        behavior: ["CH:dirt>hyphae,hyphae,mycelium%0.5|CR:mushroom_spore%0.5|CH:dirt>hyphae,hyphae,mycelium%0.5", "CH:dirt>mycelium%0.5|XX|CH:dirt>mycelium%0.5", "CH:dirt>hyphae,hyphae,mycelium%0.5|XX|CH:dirt>hyphae,hyphae,mycelium%0.5"],
        reactions: {
            wood: {
                elem2: "dirt",
                chance: 0.04
            },
            tree_brake: {
                elem2: "dirt",
                chance: 0.04
            },
            plant: {
                elem2: "dirt",
                chance: 0.07
            },
            root: {
                elem2: "dirt",
                chance: 0.07
            },
            grass: {
                elem2: "dirt",
                chance: 0.08
            },
            grass_seed: {
                elem2: "dirt",
                chance: 0.08
            },
            ash: {
                elem2: "dirt",
                chance: 0.04
            },
        },
        category: "life",
        hidden: true,
        tempHigh: 225,
        stateHigh: "fire",
        burn: 30,
        burnTime: 20,
        state: "solid",
        density: 462,
    },
    mycelium: {
        color: ["#734d5e", "#b5949f", "#734d53"],
        behavior: behaviors.POWDER,
        tempHigh: 225,
        stateHigh: "dirt",
        tempLow: -50,
        stateLow: "permafrost",
        burn: 20,
        burnTime: 40,
        burnInto: "dirt",
        category: "land",
        state: "solid",
        density: 462,
        hidden: true,
    },
    lichen: {
        color: ["#b6d6c3", "#769482"],
        tick: function(pixel) {
            if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                var coords = [
                    [pixel.x + 1, pixel.y],
                    [pixel.x - 1, pixel.y],
                    [pixel.x + 1, pixel.y + 1],
                    [pixel.x - 1, pixel.y + 1],
                ];
                for (var i = 0; i < coords.length; i++) {
                    if (Math.random() < 0.005 && isEmpty(coords[i][0], coords[i][1])) {
                        if (!isEmpty(coords[i][0], coords[i][1] + 1) && (outOfBounds(coords[i][0], coords[i][1] + 1) || pixelMap[coords[i][0]][coords[i][1] + 1].element !== "lichen")) {
                            createPixel(pixel.element, coords[i][0], coords[i][1]);
                        }
                    }
                }
            }
            doDefaults(pixel);
        },
        reactions: {
            carbon_dioxide: {
                elem2: "oxygen",
                chance: 0.05
            },
            rock: {
                elem2: "dirt",
                chance: 0.0025
            },
            vinegar: {
                elem1: null,
                chance: 0.01
            },
        },
        tempHigh: 400,
        stateHigh: "fire",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 1.5,
    },
    antimatter: {
        color: "#a89ba8",
        behavior: ["M2|DB%50 AND M2 AND EX:8>fire,positron|M2", "M1|XX|M1", "M1|DB%50 AND M1 AND EX:8>fire,positron|M1"],
        ignore: ["antimatter_bomb"],
        category: "special",
        state: "gas",
        density: 2.1,
        excludeRandom: true,
    },
    plastic: {
        color: "#c5dede",
        behavior: behaviors.WALL,
        tempHigh: 250,
        burn: 10,
        burnTime: 200,
        burnInto: ["dioxin", "smoke", "dioxin", "smoke", "stench"],
        category: "solids",
        state: "solid",
        density: 1052,
    },
    molten_plastic: {
        color: "#a4b3b3",
        behavior: behaviors.LIQUID,
        viscosity: 20,
    },
    cellulose: {
        color: "#c7d4c9",
        behavior: behaviors.LIQUID,
        tempHigh: 100,
        stateHigh: "paper",
        burn: 35,
        burnTime: 300,
        category: "life",
        state: "solid",
        density: 65,
        viscosity: 2500,
    },
    wax: {
        color: "#fff3d6",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 57,
        stateHigh: "melted_wax",
        category: "powders",
        state: "solid",
        density: 900,
    },
    melted_wax: {
        color: "#d4c196",
        behavior: behaviors.LIQUID,
        tempLow: 57,
        stateLow: "wax",
        category: "liquids",
        viscosity: 112,
        hidden: true,
        state: "liquid",
        density: 900,
        viscosity: 1.355,
    },
    incense: {
        color: "#361f19",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 2320,
        stateHigh: "fragrance",
        burn: 10,
        burnTime: 500,
        burnInto: "fragrance",
        fireElement: "fragrance",
        breakInto: "sawdust",
        category: "powders",
        state: "solid",
        density: 686,
    },
    fuse: {
        color: "#825d38",
        behavior: behaviors.WALL,
        tempHigh: 500,
        stateHigh: "fire",
        burn: 100,
        burnTime: 1,
        fireElement: "smoke",
        burnInto: "pop",
        category: "solids",
        state: "solid",
        density: 1000,
    },
    dioxin: {
        color: "#b8b8b8",
        behavior: behaviors.GAS,
        reactions: {
            cell: {
                elem2: "cancer",
                chance: 0.0015
            },
            blood: {
                elem2: "infection",
                chance: 0.01
            },
            antibody: {
                elem2: "blood",
                chance: 0.025
            },
            frog: {
                elem2: "meat",
                chance: 0.05
            },
            fish: {
                elem2: "meat",
                chance: 0.05
            },
            rat: {
                elem2: "rotten_meat",
                chance: 0.05
            },
            bird: {
                elem2: "rotten_meat",
                chance: 0.05
            },
        },
        category: "gases",
        state: "gas",
        density: 1830,
    },
    insulation: {
        color: "#b8aea5",
        behavior: behaviors.WALL,
        category: "solids",
        insulate: true,
        state: "solid",
    },
    sponge: {
        color: ["#bf9c00", "#ad8e05", "#876f05"],
        properties: {
            damp: 0,
        },
        tick: function(pixel) {
            var coordsToCheck = [
                [pixel.x - 1, pixel.y],
                [pixel.x + 1, pixel.y],
                [pixel.x, pixel.y - 1],
                [pixel.x, pixel.y + 1],
            ];
            for (var i = 0; i < coordsToCheck.length; i++) {
                var coord = coordsToCheck[i];
                if (!isEmpty(coord[0], coord[1], true)) {
                    var newPixel = pixelMap[coord[0]][coord[1]];
                    if (elements[newPixel.element].state === "liquid" && (elements[newPixel.element].density || 0) < 2500) {
                        deletePixel(coord[0], coord[1]);
                    }
                }
            }
            doBurning(pixel);
        },
        category: "solids",
        burn: 5,
        burnTime: 300,
        tempHigh: 500,
        stateHigh: "fire",
        state: "solid",
        density: 65,
    },
    iron: {
        color: ["#cbcdcd", "#bdbdbd"],
        behavior: behaviors.WALL,
        reactions: {
            water: {
                elem1: "rust",
                chance: 0.0025
            },
            salt_water: {
                elem1: "rust",
                chance: 0.005
            },
            dirty_water: {
                elem1: "rust",
                chance: 0.04
            },
            sugar_water: {
                elem1: "rust",
                chance: 0.0035
            },
            seltzer: {
                elem1: "rust",
                chance: 0.006
            },
            salt: {
                elem1: "rust",
                chance: 0.004
            },
        },
        tempHigh: 1538,
        category: "solids",
        density: 7860,
        conduct: 0.47,
        hardness: 0.4,
    },
    copper: {
        color: ["#A95232", "#BE4322", "#C76035"],
        behavior: behaviors.WALL,
        reactions: {
            water: {
                elem1: "oxidized_copper",
                chance: 0.0025
            },
            salt_water: {
                elem1: "oxidized_copper",
                chance: 0.005
            },
            dirty_water: {
                elem1: "oxidized_copper",
                chance: 0.04
            },
            sugar_water: {
                elem1: "oxidized_copper",
                chance: 0.0035
            },
            seltzer: {
                elem1: "oxidized_copper",
                chance: 0.006
            },
        },
        category: "solids",
        tempHigh: 1085,
        density: 8960,
        conduct: 0.95,
        hardness: 0.3,
    },
    gold: {
        color: ["#FFF0B5", "#986A1A", "#F0BB62"],
        behavior: behaviors.WALL,
        tempHigh: 1064,
        category: "solids",
        density: 19300,
        conduct: 0.81,
        hardness: 0.25,
        breakInto: "gold_coin",
    },
    nickel: {
        color: "#727472",
        behavior: behaviors.WALL,
        tempHigh: 1455,
        category: "solids",
        density: 8900,
        conduct: 0.51,
        hardness: 0.4,
    },
    zinc: {
        color: ["#7C7A7B", "#9D9D9F", "#F8F8F3"],
        behavior: behaviors.WALL,
        tempHigh: 419.53,
        category: "solids",
        density: 7068,
        conduct: 0.53,
        hardness: 0.25,
    },
    silver: {
        color: "#CACACA",
        behavior: behaviors.WALL,
        tempHigh: 961.8,
        category: "solids",
        density: 10497,
        conduct: 0.99,
        hardness: 0.25,
    },
    tin: {
        color: ["#9E9D98", "#AEADA4"],
        behavior: behaviors.WALL,
        tempHigh: 231.9,
        category: "solids",
        density: 7260,
        conduct: 0.45,
        hardness: 0.15,
    },
    lead: {
        color: "#6c6c6a",
        behavior: behaviors.WALL,
        tempHigh: 327.5,
        category: "solids",
        density: 11343,
        conduct: 0.41,
        hardness: 0.15,
    },
    aluminum: {
        color: ["#D1C6BE", "#B5C0AD", "#B9B8BC"],
        behavior: behaviors.WALL,
        tempHigh: 660.3,
        category: "solids",
        density: 2710,
        conduct: 0.73,
        hardness: 0.05,
    },
    tungsten: {
        color: ["#D4D3CD", "#C3C0B8", "#BCBAAE", "#625950"],
        behavior: behaviors.WALL,
        tempHigh: 3422,
        category: "solids",
        density: 19300,
        conduct: 0.65,
        hardness: 0.75,
    },
    molten_tungsten: {
        color: ["#ffff67", "#ffd367", "#ff9e00", "#d1ff5c", "#5cffb0", "#0073ff", "#ca57ff", "#ffba57", "#ff8c00", "#c46f28", "#c45928", "#c44300"],
    },
    brass: {
        color: ["#cb9e5d", "#865e39"],
        behavior: behaviors.WALL,
        tempHigh: 927,
        category: "solids",
        density: 8550,
        conduct: 0.52,
        hardness: 0.275,
        hidden: true,
    },
    bronze: {
        color: "#cd7f32",
        behavior: behaviors.WALL,
        tempHigh: 913,
        category: "solids",
        density: 8150,
        conduct: 0.44,
        hardness: 0.225,
        hidden: true,
    },
    sterling: {
        color: ["#858478", "#eae8e2", "#bfbcb7"],
        behavior: behaviors.WALL,
        tempHigh: 802,
        category: "solids",
        density: 10375.25,
        conduct: 0.95,
        hardness: 0.275,
        hidden: true,
    },
    steel: {
        color: "#71797E",
        behavior: behaviors.WALL,
        tempHigh: 1455.5,
        category: "solids",
        density: 7850,
        conduct: 0.42,
        hardness: 0.8,
    },
    rose_gold: {
        color: ["#B76E79", "#a1334d", "#f06283"],
        behavior: behaviors.WALL,
        tempHigh: 897,
        category: "solids",
        density: 12900,
        conduct: 0.87,
        hardness: 0.275,
        hidden: true,
    },
    electrum: {
        color: ["#ffdd63", "#ad9532", "#bda853", "#bdb38e", "#fff5d1"],
        behavior: behaviors.WALL,
        tempHigh: 1063.9,
        category: "solids",
        density: 13750,
        conduct: 0.9,
        hardness: 0.25,
        hidden: true,
    },
    solder: {
        color: "#a1a19d",
        behavior: behaviors.WALL,
        tempHigh: 200,
        category: "solids",
        density: 8885,
        conduct: 0.43,
        hardness: 0.15,
        hidden: true,
    },
    molten_copper: {
        reactions: {
            molten_zinc: {
                elem1: null,
                elem2: "molten_brass"
            },
            molten_tin: {
                elem1: null,
                elem2: "molten_bronze"
            },
            molten_silver: {
                elem1: null,
                elem2: "molten_sterling"
            },
            molten_gold: {
                elem1: null,
                elem2: "molten_rose_gold"
            },
            molten_sulfur: {
                elem1: null,
                elem2: "molten_copper_sulfate"
            },
            sulfur_gas: {
                elem1: null,
                elem2: "molten_copper_sulfate"
            },
        },
    },
    molten_gold: {
        reactions: {
            molten_silver: {
                elem1: null,
                elem2: "molten_electrum"
            },
        },
    },
    molten_iron: {
        reactions: {
            charcoal: {
                elem1: "molten_steel",
                elem2: null
            },
            diamond: {
                elem1: "molten_steel",
                elem2: null
            },
            carbon_dioxide: {
                elem1: "molten_steel",
                elem2: null
            },
        },
    },
    pyrite: {
        color: ["#E8E0CB", "#CDCAAF", "#726A53", "#8f835e", "#BFB9A0"],
        behavior: behaviors.WALL,
        tempHigh: 1182.5,
        category: "solids",
        density: 4900,
        state: "solid",
        conduct: 0.5,
        hardness: 0.6,
        hidden: true,
    },
    molten_tin: {
        reactions: {
            molten_lead: {
                elem1: null,
                elem2: "molten_solder"
            },
        },
    },
    juice: {
        color: "#F0BF3D",
        behavior: behaviors.LIQUID,
        tempHigh: 160,
        stateHigh: ["steam", "sugar"],
        tempLow: -10,
        category: "liquids",
        state: "liquid",
        density: 1054,
        stain: 0.05,
    },
    broth: {
        color: "#dbb169",
        behavior: behaviors.LIQUID,
        tempHigh: 125,
        stateHigh: ["steam", "steam", "steam", "fragrance"],
        tempLow: 0,
        stateLow: "ice",
        category: "food",
        state: "liquid",
        density: 1052,
        conduct: 0.03,
        stain: -0.01,
        hidden: true,
    },
    milk: {
        color: "#fafafa",
        behavior: behaviors.LIQUID,
        reactions: {
            melted_chocolate: {
                elem1: "chocolate_milk",
                elem2: null
            },
            chocolate: {
                elem1: "chocolate_milk",
                elem2: "melted_chocolate",
                chance: 0.05
            },
            juice: {
                elem1: "fruit_milk",
                elem2: null,
                chance: 0.05
            },
        },
        tempHigh: 93,
        stateHigh: "yogurt",
        viscosity: 1.5,
        category: "liquids",
        state: "liquid",
        density: 1036.86,
    },
    chocolate_milk: {
        color: "#664934",
        behavior: behaviors.LIQUID,
        tempHigh: 200,
        stateHigh: "smoke",
        viscosity: 1.5,
        category: "liquids",
        state: "liquid",
        density: 1181,
        hidden: true,
    },
    fruit_milk: {
        color: "#c9988f",
        behavior: behaviors.LIQUID,
        tempHigh: 200,
        stateHigh: "smoke",
        viscosity: 1.5,
        category: "liquids",
        state: "liquid",
        density: 1045,
        hidden: true,
    },
    yogurt: {
        color: "#f0efe6",
        behavior: ["XX|XX|XX", "XX|XX|XX", "M2%5|M1|M2%5"],
        tempHigh: 1000,
        stateHigh: ["smoke", "smoke", "smoke", "calcium"],
        tempLow: 0,
        stateLowName: "frozen_yogurt",
        category: "food",
        state: "liquid",
        density: 820.33,
    },
    frozen_yogurt: {
        behavior: behaviors.STURDYPOWDER,
        category: "food",
    },
    egg: {
        color: "#e0d3ab",
        tick: function(pixel) {
            if (pixel.start === pixelTicks) {
                return;
            }
            if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                if (pixel.animal || pixel.fall < 20) {
                    if (Math.random() < 0.5) {
                        if (!tryMove(pixel, pixel.x + 1, pixel.y + 1)) {
                            tryMove(pixel, pixel.x - 1, pixel.y + 1);
                        }
                    } else {
                        if (!tryMove(pixel, pixel.x - 1, pixel.y + 1)) {
                            tryMove(pixel, pixel.x + 1, pixel.y + 1);
                        }
                    }
                    pixel.fall = 0;
                } else if (outOfBounds(pixel.x, pixel.y + 1) || (!isEmpty(pixel.x, pixel.y + 1, true) && elements[pixelMap[pixel.x][pixel.y + 1].element].state === "solid")) {
                    changePixel(pixel, "yolk");
                } else {
                    pixel.fall = 0;
                }
                if (pixel.animal && pixelTicks - pixel.start >= 500) {
                    changePixel(pixel, pixel.animal);
                }
            } else {
                pixel.fall++;
            }
            doDefaults(pixel);
        },
        properties: {
            fall: 0
        },
        tempHigh: 1500,
        stateHigh: ["steam", "calcium", "carbon_dioxide"],
        breakInto: "yolk",
        category: "food",
        state: "solid",
        density: 1031,
        cooldown: defaultCooldown,
    },
    yolk: {
        color: ["#ffbe33", "#ffcf33"],
        behavior: behaviors.LIQUID,
        reactions: {
            dna: {
                elem1: "homunculus",
                elem2: null,
                chance: 0.05
            },
        },
        tempHigh: 100,
        stateHigh: "hard_yolk",
        tempLow: 0,
        stateLow: "hard_yolk",
        category: "food",
        hidden: true,
        state: "liquid",
        density: 1027.5,
        viscosity: 270,
    },
    homunculus: {
        color: ["#c4b270", "#9c916a", "#9e8955", "#a89a76"],
        behavior: ["XX|XX|XX", "M2%0.5|XX|M2%0.5", "XX|M1|XX"],
        reactions: {
            milk: {
                elem2: null,
                chance: 0.025
            },
            blood: {
                elem2: null,
                chance: 0.05
            },
            sugar: {
                elem2: null,
                chance: 0.025
            },
            meat: {
                elem2: null,
                chance: 0.001
            },
            cooked_meat: {
                elem2: null,
                chance: 0.0005
            },
            oxygen: {
                elem2: "carbon_dioxide"
            },
            radiation: {
                elem1: "human",
                elem2: null
            },
        },
        tempHigh: 100,
        stateHigh: "meat",
        tempLow: 0,
        stateLow: "frozen_meat",
        category: "life",
        state: "solid",
        density: 1450,
        hidden: true,
        breakInto: ["blood", "slime"],
    },
    hard_yolk: {
        color: "#dead43",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 400,
        stateHigh: "smoke",
        category: "food",
        hidden: true,
        state: "solid",
        density: 1031,
    },
    grape: {
        color: ["#b84b65", "#a10e69", "#a10e95", "#8a3eab"],
        behavior: ["XX|ST:vine|XX", "XX|XX|XX", "M2|M1|M2"],
        reactions: {
            radiation: {
                elem1: "explosion",
                chance: 0.1,
                color1: "#291824"
            },
            rock: {
                elem1: "juice",
                chance: 0.1,
                color1: "#291824"
            },
            concrete: {
                elem1: "juice",
                chance: 0.1,
                color1: "#291824"
            },
            basalt: {
                elem1: "juice",
                chance: 0.1,
                color1: "#291824"
            },
            acid: {
                elem1: "juice",
                color1: "#291824"
            },
            acid_gas: {
                elem1: "juice",
                color1: "#291824"
            },
            sugar_water: {
                elem1: null,
                elem2: "juice",
                color2: "#291824"
            },
        },
        tempHigh: 256,
        stateHigh: ["steam", "sugar"],
        category: "food",
        state: "solid",
        density: 1154,
        breakInto: "juice",
        ignoreAir: true,
    },
    vinegar: {
        color: "#ffecb3",
        behavior: behaviors.LIQUID,
        reactions: {
            milk: {
                elem1: null,
                elem2: "cheese"
            },
            baking_soda: {
                elem1: "sodium_acetate",
                elem2: "carbon_dioxide"
            },
            rust: {
                elem2: "iron",
                chance: 0.05
            },
            oxidized_copper: {
                elem2: "copper",
                chance: 0.05
            },
        },
        viscosity: 12,
        tempHigh: 100.6,
        stateHigh: "steam",
        category: "liquids",
        state: "liquid",
        density: 1006,
        stain: -0.8,
    },
    corn: {
        color: ["#F8D223", "#D6BA2A", "#f7f5ba", "#DBD281", "#CDB12D"],
        behavior: behaviors.WALL,
        category: "food",
        burn: 10,
        burnTime: 200,
        tempHigh: 180,
        stateHigh: "popcorn",
        state: "solid",
        density: 721,
    },
    popcorn: {
        color: ["#a6a076", "#ebe4ab", "#ebe4ab", "#ebe4ab", "#ebe4ab", "#ebe4ab", "#ebe4ab", "#c99947"],
        behavior: behaviors.POWDER,
        category: "food",
        tempHigh: 500,
        stateHigh: "ash",
        burn: 20,
        burnTime: 200,
        burnInto: ["fire", "ash"],
        state: "solid",
        density: 360.5,
    },
    corn_seed: {
        color: ["#F2B813", "#F9E3BA"],
        behavior: ["XX|M2%0.25|XX", "XX|L2:plant,corn AND C2:corn%30|XX", "XX|M1|XX"],
        tempHigh: 400,
        stateHigh: "fire",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 721,
        hidden: true,
        cooldown: defaultCooldown,
    },
    potato_seed: {
        color: ["#CDA57F", "#AA7437", "#BC9563"],
        behavior: ["XX|CH:dirt>fiber|XX", "CH:dirt>potato%5|CH:potato%1|CH:dirt>potato%5", "XX|SW:dirt%3 AND M1|XX"],
        tempHigh: 400,
        stateHigh: "fire",
        burn: 50,
        burnTime: 20,
        category: "life",
        state: "solid",
        density: 675,
        hidden: true,
        cooldown: defaultCooldown,
    },
    potato: {
        color: ["#d99857", "#d98757", "#a66933"],
        behavior: ["XX|SH:wire%1|XX", "SH:wire%1|XX|SH:wire%1", "XX|M2 AND SH:wire%1|XX"],
        tempHigh: 400,
        stateHigh: "ash",
        burn: 50,
        burnTime: 20,
        burnInto: "ash",
        category: "food",
        state: "solid",
        density: 675,
    },
    root: {
        color: "#80715b",
        behavior: ["XX|XX|XX", "XX|XX|XX", "CH:dirt,mud,sand,wet_sand,clay_soil,mycelium>root,fiber%0.5|CH:dirt,mud,sand,wet_sand,clay_soil,mycelium>root,fiber,fiber%0.5|CH:dirt,mud,sand,wet_sand,clay_soil,mycelium>root,fiber%0.5"],
        reactions: {
            rock: {
                elem2: "sand",
                chance: 0.0004
            },
            mud: {
                elem2: "dirt",
                chance: 0.005
            },
            wet_sand: {
                elem2: "sand",
                chance: 0.005
            },
            water: {
                elem2: null,
                chance: 0.005
            },
            sugar_water: {
                elem2: null,
                chance: 0.008
            },
        },
        tempHigh: 275,
        stateHigh: "dirt",
        burn: 20,
        burnTime: 60,
        burnInto: "dirt",
        breakInto: "sawdust",
        category: "life",
        state: "solid",
        density: 1250,
    },
    fiber: {
        color: ["#6b563e", "#5c553e", "#42342d"],
        behavior: behaviors.POWDER,
        tempHigh: 275,
        stateHigh: "dirt",
        tempLow: -50,
        stateLow: "permafrost",
        burn: 20,
        burnTime: 60,
        burnInto: "dirt",
        category: "life",
        hidden: true,
        breakInto: "tinder",
        state: "solid",
        density: 462,
    },
    yeast: {
        color: ["#AD9166", "#9A7F4E", "#D8BB8D"],
        behavior: ["XX|CL:70%10|XX", "CL:70%10 AND SW:bread%30|XX|CL:70%10 AND SW:bread%30", "XX|M1|XX"],
        reactions: {
            bread: {
                elem1: "bread"
            },
            sugar: {
                elem2: "alcohol",
                chance: 0.005
            },
            potato: {
                elem2: "alcohol",
                chance: 0.005,
                color2: "#FEC400"
            },
            grape: {
                elem2: "alcohol",
                chance: 0.01,
                color2: "#916851"
            },
            juice: {
                elem2: "alcohol",
                chance: 0.015,
                color2: "#916851"
            },
            sugar: {
                elem2: "alcohol",
                chance: 0.005,
                color2: "#80724D"
            },
            corn: {
                elem2: "alcohol",
                chance: 0.005,
                color2: "#b8b6a2"
            },
            honey: {
                elem2: "alcohol",
                chance: 0.005,
                color2: "#DCCB72"
            },
            molasses: {
                elem2: "alcohol",
                chance: 0.005,
                color2: "#803924"
            },
            oxygen: {
                elem2: "carbon_dioxide",
                chance: 0.05
            },
            algae: {
                elem1: "lichen",
                elem2: "lichen",
                chance: 0.02
            },
            alcohol: {
                elem1: null,
                elem2: null
            },
        },
        tempHigh: 110,
        stateHigh: "bread",
        burn: 50,
        burnTime: 20,
        burnInto: ["smoke", "smoke", "smoke", "ash"],
        category: "food",
        state: "solid",
        density: 1180,
    },
    bread: {
        color: "#F2CF99",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 176,
        stateHigh: "toast",
        category: "food",
        burn: 30,
        burnTime: 200,
        burnInto: ["smoke", "smoke", "smoke", "ash"],
        state: "solid",
        density: 233.96,
    },
    toast: {
        color: "#C08655",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 550,
        stateHigh: "ash",
        category: "food",
        burn: 50,
        burnTime: 170,
        burnInto: ["smoke", "smoke", "smoke", "ash"],
        state: "solid",
        density: 233.96,
    },
    wheat: {
        color: ["#F1B569", "#EDB864", "#DE9C45", "#C2853D"],
        behavior: behaviors.WALL,
        reactions: {
            rock: {
                elem1: "flour",
                elem2: "rock"
            },
        },
        tempHigh: 100,
        stateHigh: "dead_plant",
        tempLow: -2,
        stateLow: "frozen_plant",
        burn: 40,
        burnTime: 25,
        category: "food",
        breakInto: "flour",
        state: "solid",
        density: 769,
    },
    flour: {
        color: "#F0E2B7",
        behavior: behaviors.POWDER,
        reactions: {
            water: {
                elem1: "dough",
                elem2: null
            },
            salt_water: {
                elem1: "dough",
                elem2: null
            },
            sugar_water: {
                elem1: "dough",
                elem2: null
            },
            seltzer: {
                elem1: "dough",
                elem2: null
            },
        },
        category: "food",
        tempHigh: 400,
        stateHigh: "fire",
        burn: 40,
        burnTime: 25,
        state: "solid",
        density: 600,
    },
    dough: {
        color: "#EDD8BA",
        behavior: behaviors.SUPPORT,
        category: "food",
        tempHigh: 94,
        stateHigh: "bread",
        burn: 40,
        burnTime: 25,
        burnInto: "ash",
        state: "solid",
        density: 526.9,
    },
    sugar: {
        color: "#f2f2f2",
        behavior: behaviors.POWDER,
        category: "food",
        tempHigh: 186,
        stateHigh: "caramel",
        state: "solid",
        density: 1590,
    },
    candy: {
        color: "#e6cab1",
        behavior: behaviors.WALL,
        tempHigh: 186,
        stateHigh: "caramel",
        category: "food",
        state: "solid",
        density: 900,
    },
    baking_soda: {
        color: "#ededed",
        behavior: behaviors.POWDER,
        reactions: {
            juice: {
                elem1: "water",
                elem2: "carbon_dioxide"
            },
        },
        category: "food",
        state: "solid",
        density: 1000,
        tempHigh: 3000,
    },
    sodium_acetate: {
        color: ["#ededed", "#dbdbdb"],
        behavior: ["CR:foam%25|CR:foam%25|CR:foam%25", "CR:foam%25|XX|CR:foam%25", "M2|M1|M2"],
        hidden: true,
        state: "solid",
        density: 900,
        category: "powders",
    },
    dry_ice: {
        color: "#e6e6e6",
        behavior: behaviors.WALL,
        category: "solids",
        temp: -98.5,
        tempHigh: -78.5,
        stateHigh: "carbon_dioxide",
        state: "solid",
        density: 1562,
    },
    nitrogen_ice: {
        color: "#e6e6e6",
        behavior: behaviors.WALL,
        category: "solids",
        temp: -259.86,
        tempHigh: -209.86,
        stateHigh: "liquid_nitrogen",
        state: "solid",
        density: 1562,
        hidden: true,
    },
    porcelain: {
        color: "#E1E4DD",
        behavior: behaviors.WALL,
        category: "solids",
        state: "solid",
        density: 2403,
        hidden: true,
    },
    particleboard: {
        color: ["#cca77c", "#ad8b63", "#b59d81", "#c7a073", "#c9b297"],
        behavior: behaviors.WALL,
        tempHigh: 500,
        stateHigh: ["ash", "fire", "fire", "fire"],
        category: "solids",
        burn: 2,
        burnTime: 400,
        burnInto: ["ash", "fire"],
        state: "solid",
        hardness: 0.2,
        breakInto: "sawdust",
        hidden: true,
    },
    alcohol: {
        color: "#c9c5b1",
        behavior: behaviors.LIQUID,
        reactions: {
            virus: {
                elem2: null
            },
            plague: {
                elem2: null
            },
        },
        tempHigh: 78.37,
        tempLow: -113.88,
        burn: 100,
        burnTime: 3,
        fireColor: ["#80ACF0", "#96CDFE", "#bee6d4"],
        category: "liquids",
        state: "liquid",
        density: 785.1,
        stain: -0.25,
    },
    basalt: {
        color: ["#2e2e2e", "#333333", "#3d3d3d"],
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 1262.5,
        stateHigh: "magma",
        category: "land",
        state: "solid",
        density: 3000,
        hardness: 0.65,
        breakInto: "gravel",
    },
    soap: {
        color: "#f2f2f2",
        behavior: ["XX|CR:bubble%0.25|XX", "M2|XX|M2", "M2|M1|M2"],
        reactions: {
            rust: {
                elem2: "iron"
            },
            oxidized_copper: {
                elem2: "copper"
            },
            blood: {
                elem1: null,
                elem2: "water"
            },
            dirty_water: {
                elem2: "water"
            },
            salt_water: {
                elem2: "water"
            },
            oxygen: {
                elem2: "bubble"
            },
            plague: {
                elem2: null
            },
            virus: {
                elem2: null
            },
            infection: {
                elem2: null
            },
            mushroom_spore: {
                elem2: null
            },
            lichen: {
                elem2: null
            },
            rotten_meat: {
                elem2: "meat"
            },
            acid_gas: {
                elem2: "hydrogen"
            },
            carbon_dioxide: {
                elem2: "oxygen"
            },
            acid: {
                elem2: "hydrogen"
            },
            acid_cloud: {
                elem2: "rain_cloud"
            },
            oil: {
                elem2: null
            },
            soda: {
                elem2: "sugar_water"
            },
            ink: {
                elem2: null
            },
            dye: {
                elem2: null
            },
        },
        tempHigh: 100,
        stateHigh: "bubble",
        viscosity: 500,
        state: "liquid",
        category: "liquids",
        density: 1055,
        stain: -1,
    },
    bleach: {
        color: "#ffffff",
        behavior: behaviors.LIQUID,
        reactions: {
            acid: {
                elem1: "chlorine",
                elem2: null
            },
            acid_gas: {
                elem1: "chlorine",
                elem2: null
            },
            acid_cloud: {
                elem1: "chlorine",
                elem2: null
            },
            water: {
                elem1: null,
                elem2: "dirty_water"
            },
            plague: {
                elem2: null
            },
            cell: {
                elem2: null,
                chance: 0.05
            },
            tadpole: {
                elem2: null,
                chance: 0.05
            },
            cancer: {
                elem2: null,
                chance: 0.01
            },
            blood: {
                elem2: null
            },
            vinegar: {
                elem1: "poison_gas",
                elem2: null
            },
            ammonia: {
                elem1: "poison_gas",
                elem2: null
            }, // Mustard Gas
            alcohol: {
                elem1: "poison_gas",
                elem2: null
            }, // Chloroform
        },
        tempHigh: 111,
        stateHigh: ["salt", "steam"],
        viscosity: 0.956,
        state: "liquid",
        category: "liquids",
        density: 1210,
        stain: 0.1,
    },
    chlorine: {
        color: "#A5AC50",
        behavior: behaviors.GAS,
        reactions: {
            water: {
                elem1: "pool_water",
                elem2: null
            },
            hydrogen: {
                elem1: "acid_gas",
                elem2: null
            }, //hydrochloric acid
            dirty_water: {
                elem2: "water"
            },
        },
        tempLow: -36.04,
        stateLow: "liquid_chlorine",
        state: "gas",
        category: "gases",
        density: 3.2,
        stain: 0.005,
    },
    liquid_chlorine: {
        color: "#F4D217",
        behavior: behaviors.LIQUID,
        reactions: {
            water: {
                elem1: "acid",
                elem2: null
            },
            steam: {
                elem2: "acid_gas",
                elem1: null
            },
        },
        temp: -36.04,
        tempHigh: -34.04,
        stateHigh: "chlorine",
        tempLow: -101.5,
        state: "liquid",
        category: "liquids",
        density: 1562.5,
        stain: 0.01,
        hidden: true,
    },
    dye: {
        color: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"],
        behavior: behaviors.LIQUID,
        reactions: {
            water: {
                elem1: null,
                chance: 0.05
            },
            salt_water: {
                elem1: null,
                chance: 0.05
            },
            sugar_water: {
                elem1: null,
                chance: 0.05
            },
            seltzer: {
                elem1: null,
                chance: 0.05
            },
            dirty_water: {
                elem1: null,
                chance: 0.05
            },
        },
        customColor: true,
        stain: 0.66,
        tempHigh: 100,
        stateHigh: "smoke",
        category: "liquids",
        state: "liquid",
        density: 998,
        stainSelf: true,
    },
    ink: {
        color: "#171717",
        behavior: behaviors.LIQUID,
        stain: 0.66,
        tempHigh: 100,
        stateHigh: "smoke",
        category: "liquids",
        state: "liquid",
        density: 1074.3,
    },
    mercury: {
        color: ["#53574B", "#65686A"],
        behavior: behaviors.LIQUID,
        reactions: {
            gold: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            zinc: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            sodium: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            aluminum: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            tin: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            lead: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            silver: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            copper: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            gold_coin: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            rose_gold: {
                elem1: null,
                elem2: "amalgam",
                chance: 0.01
            },
            water: {
                elem1: null,
                elem2: "dirty_water"
            },
            salt_water: {
                elem1: null,
                elem2: "dirty_water"
            },
            sugar_water: {
                elem1: null,
                elem2: "dirty_water"
            },
        },
        viscosity: 1.53,
        tempLow: -38.83,
        stateLowName: "solid_mercury",
        tempHigh: 356.73,
        category: "liquids",
        state: "liquid",
        density: 13545,
    },
    blood: {
        color: "#ff0000",
        behavior: behaviors.LIQUID,
        reactions: {
            vaccine: {
                elem1: "antibody",
                elem2: null
            },
            plague: {
                elem1: "infection",
                elem2: null
            },
            virus: {
                elem1: "infection",
                elem2: null
            },
            cancer: {
                elem1: "infection"
            },
            cyanide: {
                elem1: "infection",
                elem2: null
            },
            mushroom_spore: {
                elem1: "infection",
                elem2: null
            },
            dirty_water: {
                elem1: "infection",
                elem2: null
            },
            rust: {
                elem1: "infection",
                chance: 0.05
            },
            oxidized_copper: {
                elem1: "infection",
                chance: 0.05
            },
            rat: {
                elem1: "infection",
                chance: 0.075
            },
            flea: {
                elem1: "infection",
                chance: 0.03
            },
            dirt: {
                elem1: null,
                elem2: "mud"
            },
            sand: {
                elem1: null,
                elem2: "wet_sand"
            },
            mercury: {
                elem1: "infection",
                elem2: null,
                chance: 0.05
            },
            oxygen: {
                elem2: null,
                chance: 0.05
            },
            carbon_dioxide: {
                elem2: null,
                chance: 0.05
            },
            alcohol: {
                elem1: [null, "dna"],
                chance: 0.02
            },
        },
        viscosity: 10,
        tempHigh: 124.55,
        stateHigh: ["steam", "salt", "oxygen"],
        tempLow: 0,
        category: "liquids",
        state: "liquid",
        density: 1060,
        stain: 0.05,
    },
    vaccine: {
        color: "#e0d0ad",
        behavior: behaviors.LIQUID,
        reactions: {
            infection: {
                elem1: null,
                elem2: "antibody",
                chance: 0.1
            },
            antibody: {
                elem1: null,
                chance: 0.0025
            },
            plague: {
                elem2: null,
                chance: 0.1
            },
            virus: {
                elem2: null,
                chance: 0.1
            },
            cancer: {
                elem2: null,
                chance: 0.01
            },
        },
        viscosity: 2.6,
        tempHigh: 124.55,
        stateHigh: "steam",
        category: "liquids",
        state: "liquid",
        density: 1125,
    },
    antibody: {
        color: "#ff4040",
        behavior: behaviors.LIQUID,
        reactions: {
            blood: {
                elem2: "antibody",
                chance: 0.01
            },
            infection: {
                elem2: "antibody",
                chance: 0.1
            },
            cancer: {
                elem2: null,
                chance: 0.01
            },
            poison: {
                elem1: "antidote",
                elem2: null,
                chance: 0.03
            },
            alcohol: {
                elem1: [null, "dna"],
                chance: 0.02
            },
        },
        viscosity: 6.3,
        tempHigh: 124.55,
        stateHigh: ["steam", "salt", "oxygen"],
        tempLow: 0,
        category: "liquids",
        hidden: true,
        state: "liquid",
        density: 1060,
        stain: 0.05,
    },
    infection: {
        color: "#cf005d",
        behavior: behaviors.LIQUID,
        reactions: {
            blood: {
                elem2: "infection",
                chance: 0.01
            },
            frog: {
                elem2: "rotten_meat",
                chance: 0.005
            },
            fish: {
                elem2: "rotten_meat",
                chance: 0.005
            },
            meat: {
                elem2: "rotten_meat",
                chance: 0.005
            },
            alcohol: {
                elem1: [null, "dna"],
                chance: 0.02
            },
        },
        viscosity: 15,
        tempHigh: 124.55,
        stateHigh: ["plague", "plague", "plague", "salt", "oxygen"],
        tempLow: 0,
        category: "liquids",
        hidden: true,
        state: "liquid",
        density: 1060,
        stain: 0.05,
    },
    poison: {
        color: "#00ff00",
        behavior: behaviors.LIQUID,
        reactions: {
            blood: {
                elem1: null,
                elem2: "infection"
            },
            water: {
                elem1: null,
                elem2: "dirty_water"
            },
            soap: {
                elem1: null,
                chance: 0.02
            },
            plant: {
                elem1: null,
                elem2: "dead_plant"
            },
            grass: {
                elem1: null,
                elem2: "dead_plant"
            },
            vine: {
                elem1: null,
                elem2: "dead_plant"
            },
            algae: {
                elem1: null,
                elem2: null
            },
            mushroom_spore: {
                elem1: null,
                elem2: null
            },
            lichen: {
                elem1: null,
                elem2: null
            },
            yeast: {
                elem1: null,
                elem2: null
            },
            rat: {
                elem1: null,
                elem2: "rotten_meat"
            },
            frog: {
                elem1: null,
                elem2: "rotten_meat"
            },
            tadpole: {
                elem2: null
            },
            fish: {
                elem1: null,
                elem2: "rotten_meat"
            },
            bird: {
                elem1: null,
                elem2: "rotten_meat"
            },
            head: {
                elem1: null,
                elem2: "rotten_meat"
            },
            body: {
                elem1: null,
                elem2: "rotten_meat"
            },
            ant: {
                elem1: null,
                elem2: "dead_bug"
            },
            worm: {
                elem1: null,
                elem2: "dead_bug"
            },
            fly: {
                elem1: null,
                elem2: "dead_bug"
            },
            firefly: {
                elem1: null,
                elem2: "dead_bug"
            },
            bee: {
                elem1: null,
                elem2: "dead_bug"
            },
            stink_bug: {
                elem1: null,
                elem2: "dead_bug"
            },
            termite: {
                elem1: null,
                elem2: "dead_bug"
            },
            flea: {
                elem1: null,
                elem2: "dead_bug"
            },
            slug: {
                elem1: null,
                elem2: "slime"
            },
            snail: {
                elem1: null,
                elem2: "calcium"
            },
            sapling: {
                elem1: null,
                elem2: "dead_plant"
            },
            root: {
                elem1: null,
                elem2: "dead_plant"
            },
            flower_seed: {
                elem1: null,
                elem2: "dead_plant"
            },
            pistil: {
                elem1: null,
                elem2: "dead_plant"
            },
            petal: {
                elem1: null,
                elem2: "dead_plant"
            },
            grass_seed: {
                elem1: null,
                elem2: "dead_plant"
            },
            meat: {
                elem1: null,
                elem2: "rotten_meat"
            },
        },
        viscosity: 2,
        tempHigh: 110,
        category: "liquids",
        state: "liquid",
        density: 1060,
    },
    poison_gas: {
        color: "#98f5b0",
    },
    antidote: {
        color: "#c9b836",
        behavior: behaviors.LIQUID,
        reactions: {
            poison: {
                elem1: null,
                elem2: null
            },
        },
        viscosity: 2,
        tempHigh: 124.55,
        stateHigh: ["steam", "salt", "oxygen"],
        category: "liquids",
        state: "liquid",
        density: 1060,
    },
    honey: {
        color: ["#F6CE1A", "#E79001", "#BB5503"],
        behavior: behaviors.LIQUID,
        viscosity: 10000,
        tempHigh: 71.11,
        stateHigh: "caramel",
        category: "liquids",
        state: "liquid",
        density: 1420,
    },
    sap: {
        color: ["#b67f18", "#c86305", "#cf7a19", "#e4ae3a"],
        behavior: behaviors.LIQUID,
        tempHigh: 412,
        stateHigh: "sugar",
        category: "liquids",
        state: "liquid",
        viscosity: 15,
        density: 1400,
    },
    caramel: {
        color: "#e89a51",
        behavior: behaviors.LIQUID,
        viscosity: 500,
        temp: 40,
        tempLow: 24,
        stateLow: "candy",
        tempHigh: 204.44,
        stateHigh: "smoke",
        category: "liquids",
        state: "liquid",
        density: 850,
    },
    molasses: {
        color: ["#210c06", "#170804"],
        behavior: behaviors.LIQUID,
        viscosity: 7500,
        tempHigh: 1000,
        stateHigh: ["fire", "sugar", "steam"],
        category: "liquids",
        state: "liquid",
        density: 1600,
        stain: 0.05,
    },
    ketchup: {
        color: "#ff3119",
        behavior: behaviors.LIQUID,
        viscosity: 50000,
        tempHigh: 260,
        stateHigh: ["vinegar", "steam", "salt", "sugar"],
        category: "liquids",
        state: "liquid",
        density: 1235,
        stain: 0.05,
    },
    melted_chocolate: {
        color: "#3b160b",
        behavior: behaviors.LIQUID,
        tempLow: 0,
        stateLow: "chocolate",
        tempHigh: 99,
        stateHigh: ["steam", "sugar"],
        category: "liquids",
        viscosity: 40,
        state: "liquid",
        density: 1325,
        hidden: true,
        stain: 0.05,
    },
    liquid_hydrogen: {
        color: "#97afcf",
        behavior: behaviors.LIQUID,
        reactions: {
            liquid_oxygen: {
                elem1: "ice",
                elem2: null
            },
            oxygen: {
                elem1: "ice",
                elem2: null
            },
        },
        category: "liquids",
        burn: 100,
        burnTime: 2,
        temp: -255.879,
        tempHigh: -252.879,
        stateHigh: "hydrogen",
        tempLow: -259.2,
        state: "liquid",
        density: 71,
        hidden: true,
    },
    liquid_oxygen: {
        color: "#00ad99",
        behavior: behaviors.LIQUID,
        reactions: {
            hydrogen: {
                elem1: "ice",
                elem2: null
            },
        },
        category: "liquids",
        burn: 100,
        burnTime: 2,
        temp: -190,
        tempHigh: -182.962,
        tempLow: -218.8,
        stateHigh: "oxygen",
        state: "liquid",
        density: 1141,
    },
    liquid_nitrogen: {
        color: "#d3e1e3",
        behavior: behaviors.LIQUID,
        category: "liquids",
        temp: -209.86,
        tempHigh: -195.795,
        stateHigh: "nitrogen",
        tempLow: -259.86,
        stateLow: "nitrogen_ice",
        state: "liquid",
        density: 804,
    },
    liquid_helium: {
        color: "#e3d3d3",
        behavior: behaviors.LIQUID,
        category: "liquids",
        temp: -269,
        tempHigh: -268.95,
        stateHigh: "helium",
        state: "liquid",
        density: 145,
        hidden: true,
    },
    sodium: {
        color: ["#484849", "#5D5E5F", "#6B6968", "#747775"],
        tick: function(pixel) {
            behaviors.POWDER(pixel);
            for (var i = 0; i < adjacentCoords.length; i++) {
                var x = pixel.x + adjacentCoords[i][0];
                var y = pixel.y + adjacentCoords[i][1];
                if (isEmpty(x, y)) {
                    if (Math.random() < 0.005) {
                        deletePixel(pixel.x, pixel.y);
                    }
                    break;
                }
            }
        },
        reactions: {
            chlorine: {
                elem1: "salt",
                elem2: "pop"
            },
            vinegar: {
                elem1: "sodium_acetate",
                elem2: null
            },
            water: {
                elem1: "pop",
                chance: 0.01
            },
            salt_water: {
                elem1: "pop",
                chance: 0.01
            },
            sugar_water: {
                elem1: "pop",
                chance: 0.01
            },
            dirty_water: {
                elem1: "pop",
                chance: 0.01
            },
            seltzer: {
                elem1: "pop",
                chance: 0.01
            },
            acid: {
                elem1: "explosion"
            },
        },
        tempHigh: 97.794,
        category: "powders",
        state: "solid",
        density: 968,
        conduct: 0.85,
        hardness: 0.05,
    },
    calcium: {
        color: ["#515053", "#7a787d", "#748193", "#FEF9FF", "#748193", "#7a787d", "#515053"],
        behavior: behaviors.POWDER,
        reactions: {
            oxygen: {
                elem1: "quicklime",
                elem2: null
            },
        },
        tempHigh: 842,
        category: "powders",
        state: "solid",
        density: 1550,
        conduct: 0.4,
        hardness: 0.2,
    },
    limestone: {
        color: ["#C5B79C", "#D9CCB2", "#F8F1DB", "#FCFAEB"],
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 825,
        stateHigh: "quicklime",
        category: "land",
        state: "solid",
        density: 2100,
        hardness: 0.3,
        breakInto: ["quicklime", "calcium", "dust"],
    },
    quicklime: {
        color: "#E9EBE7",
        behavior: behaviors.POWDER,
        tempHigh: 4662,
        stateHigh: "molten_calcium",
        category: "land",
        state: "solid",
        density: 1025,
        hardness: 0.23,
        breakInto: ["calcium", "dust"],
        hidden: true,
    },
    slaked_lime: {
        color: "#adb8b5",
        behavior: behaviors.STURDYPOWDER,
        tempHigh: 580,
        stateHigh: "quicklime",
        category: "land",
        hidden: true,
        state: "solid",
        density: 2211,
        hardness: 0.13,
        breakInto: ["calcium", "dust"],
    },
    thermite: {
        color: ["#5D4947", "#5B3C42", "#372A2D"],
        behavior: behaviors.POWDER,
        tick: function(pixel) {
            if (pixel.burning) {
                changePixel(pixel, "molten_thermite");
                pixel.temp = 2200;
            }
        },
        tempHigh: 660,
        burn: 100,
        burnTime: 1000,
        category: "powders",
        density: 700,
        state: "solid",
        hardness: 0.325,
    },
    molten_thermite: {
        tick: function(pixel) {
            pixel.temp++;
        },
    },
    slag: {
        color: ["#4B3A2D", "#6A5447", "#6B5B53", "#675851", "#78756E"],
        behavior: behaviors.POWDER,
        tempHigh: 1380,
        category: "powders",
        density: 2400,
        state: "solid",
        conduct: 0.03,
        hardness: 0.5,
    },
    amalgam: {
        color: ["#6B5535", "#96784F", "#604928", "#A69070"],
        behavior: behaviors.SUPPORT,
        tempHigh: 223,
        category: "powders",
        state: "solid",
        density: 13920,
        hardness: 0.1,
        hidden: true,
    },
    molten_aluminum: {
        reactions: {
            rust: {
                elem1: null,
                elem2: "thermite"
            },
            oxidized_copper: {
                elem1: null,
                elem2: "thermite"
            },
        },
    },
    molten_zinc: {
        reactions: {
            rust: {
                elem1: null,
                elem2: "thermite"
            },
            oxidized_copper: {
                elem1: null,
                elem2: "thermite"
            },
        },
    },
    neon: {
        color: "#bababa",
        behavior: behaviors.GAS,
        colorOn: ["#ff0000", "#D01822", "#FE5C0C"],
        tempLow: -248.59,
        stateLow: "liquid_neon",
        category: "gases",
        density: 0.9002,
        state: "gas",
        conduct: 0.86,
    },
    liquid_neon: {
        color: "#d1d1d1",
        behavior: behaviors.LIQUID,
        colorOn: ["#ff0000", "#D01822", "#FE5C0C"],
        temp: -258.59,
        tempHigh: -248.59,
        stateHigh: "neon",
        category: "liquids",
        hidden: true,
        density: 1207,
        state: "liquid",
        conduct: 0.83,
    },
    smog: {
        color: "#989398",
        behavior: ["XX|M2%5|XX", "M1%8|XX|M1%8", "XX|M2%5|XX"],
        temp: 100,
        tempLow: 47.5,
        stateLow: "water",
        category: "gases",
        density: 590.3,
        state: "gas",
        conduct: 0.03,
        stain: 0.0035,
    },
    stench: {
        color: "#6ab066",
        behavior: behaviors.GAS,
        reactions: {
            oxygen: {
                elem2: "stench"
            },
            water: {
                elem1: null,
                elem2: "dirty_water"
            },
            nitrogen: {
                elem2: "stench"
            },
            baking_soda: {
                elem1: null
            },
        },
        category: "gases",
        tempHigh: 1000,
        stateHigh: "fire",
        state: "gas",
        density: 1.293,
    },
    fragrance: {
        color: "#967bb6",
        behavior: behaviors.GAS,
        reactions: {
            stench: {
                elem2: null
            },
            oxygen: {
                elem2: "fragrance"
            },
            dirty_water: {
                elem1: null,
                elem2: "water"
            },
        },
        tempHigh: 1000,
        stateHigh: "fire",
        category: "gases",
        state: "gas",
        density: 1.292,
    },
    cyanide: {
        color: "#b6ccb6",
        behavior: behaviors.GAS,
        reactions: {
            frog: {
                elem2: "meat"
            },
            ant: {
                elem2: null
            },
            bee: {
                elem2: null
            },
            fish: {
                elem2: "meat"
            },
            firefly: {
                elem2: null
            },
        },
        tempHigh: 550,
        stateHigh: "fire",
        burn: 100,
        burnTime: 1,
        state: "gas",
        density: 687,
        category: "gases",
    },
    ozone: {
        color: "#80a4ff",
        behavior: ["XX|XX|XX", "M1%7|XX|M1%7", "XX|XX|XX"],
        reactions: {
            carbon_dioxide: {
                elem1: null,
                elem2: null,
                chance: 0.05
            },
            copper: {
                elem1: "oxygen",
                elem2: "oxidized_copper",
                chance: 0.05
            },
            iron: {
                elem1: "oxygen",
                elem2: "rust",
                chance: 0.025
            },
            charcoal: {
                elem1: "oxygen",
                elem2: "carbon_dioxide",
                chance: 0.025
            },
            dirty_water: {
                elem1: null,
                elem2: "water"
            },
            stench: {
                elem1: null,
                elem2: null
            },
            yeast: {
                elem2: null,
                chance: 0.1
            },
        },
        category: "gases",
        temp: -15,
        tempLow: -112,
        stateLow: "liquid_oxygen",
        state: "gas",
        stain: -0.1,
        density: 2.14,
    },
    cloud: {
        color: "#d5dce6",
        behavior: ["XX|XX|XX", "XX|CO:1%5|M1%2.5 AND BO", "XX|XX|XX"],
        reactions: {
            rain_cloud: {
                elem1: "rain_cloud",
                temp1: -20
            },
            electric: {
                elem1: "rain_cloud",
                temp1: -20
            },
            cloud: {
                elem1: "rain_cloud",
                elem2: "rain_cloud",
                temp1: -20,
                temp2: -20,
                charged: true
            },
        },
        category: "gases",
        temp: 110,
        tempLow: 100,
        stateLow: "rain_cloud",
        state: "gas",
        density: 0.4,
        ignoreAir: true,
        conduct: 0.03,
    },
    rain_cloud: {
        color: "#636b78",
        behavior: ["XX|XX|XX", "XX|CH:water%0.05|M1%2.5 AND BO", "CR:electric%0.05|CR:electric%0.05|CR:electric%0.05"],
        category: "gases",
        temp: 70,
        tempHigh: 100,
        stateHigh: "cloud",
        tempLow: 0,
        stateLow: "snow_cloud",
        state: "gas",
        density: 0.5,
        ignoreAir: true,
        conduct: 0.03,
    },
    snow_cloud: {
        color: "#7e8691",
        behavior: ["XX|XX|XX", "XX|CH:snow%0.05|M1%2.5 AND BO", "XX|XX|XX"],
        category: "gases",
        temp: -10,
        tempHigh: 30,
        stateHigh: "rain_cloud",
        tempLow: -200,
        stateLow: "hail_cloud",
        state: "gas",
        density: 0.55,
        ignoreAir: true,
        conduct: 0.01,
    },
    hail_cloud: {
        color: "#7e8691",
        behavior: ["XX|XX|XX", "XX|CH:hail%0.05|M1%2.5 AND BO", "XX|XX|XX"],
        category: "gases",
        temp: -200,
        tempHigh: -180,
        stateHigh: "snow_cloud",
        state: "gas",
        density: 0.6,
        ignoreAir: true,
        conduct: 0.01,
    },
    acid_cloud: {
        color: "#637865",
        behavior: ["XX|XX|XX", "XX|CH:acid%0.05|M1%2.5 AND BO", "XX|XX|XX"],
        reactions: {
            ash: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            limestone: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            quicklime: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            slaked_lime: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            borax: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            ammonia: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
            bleach: {
                elem1: "rain_cloud",
                elem2: null,
                chance: 0.05
            },
        },
        category: "gases",
        burn: 15,
        burnTime: 5,
        state: "gas",
        density: 0.7,
        ignoreAir: true,
    },
    pyrocumulus: {
        color: "#2e2e2e",
        behavior: ["XX|XX|XX", "XX|CH:ash%0.075|M1%2.5 AND BO", "XX|XX|XX"],
        reactions: {
            fireball: {
                elem1: null,
                elem2: "fire_cloud",
                chance: 0.25
            },
        },
        category: "gases",
        hidden: true,
        state: "gas",
        density: 0.7,
        ignoreAir: true,
    },
    fire_cloud: {
        color: ["#332424", "#473431", "#473931"],
        behavior: ["XX|XX|XX", "XX|CH:fireball%0.02|M1%2.5 AND BO", "XX|XX|XX"],
        reactions: {
            rain_cloud: {
                elem1: "pyrocumulus",
                elem2: "pyrocumulus"
            },
            snow_cloud: {
                elem1: "pyrocumulus",
                elem2: "rain_cloud"
            },
            hail_cloud: {
                elem1: "pyrocumulus",
                elem2: "snow_cloud"
            },
            acid_cloud: {
                elem1: "fire",
                elem2: "electric"
            },
        },
        temp: 500,
        tempLow: 100,
        stateLow: "pyrocumulus",
        category: "gases",
        state: "gas",
        density: 0.8,
        ignoreAir: true,
        excludeRandom: true,
    },
    color_smoke: {
        color: ["#6b2e2e", "#6b4f2e", "#6b6b2e", "#2e6b2e", "#2e6b6b", "#2e2e6b", "#6b2e6b"],
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1.977,
        customColor: true,
    },
    spray_paint: {
        color: ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"],
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        burn: 100,
        burnTime: 1,
        density: 1250,
        customColor: true,
        stain: 0.25,
    },
    battery: {
        color: "#9c6c25",
        behavior: [
            "XX|SH|XX", // shocks (adds charge)
            "SH|XX|SH",
            "XX|SH|XX",
        ],
        category: "machines",
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
    },
    led_r: {
        behavior: behaviors.WALL,
        reactions: {
            light: {
                charge1: 1
            }
        },
        color: "#660000",
        colorOn: "#ff0000",
        category: "machines",
        tempHigh: 1500,
        stateHigh: "molten_glass",
        conduct: 1,
    },
    led_g: {
        behavior: behaviors.WALL,
        reactions: {
            light: {
                charge1: 1
            }
        },
        color: "#006600",
        colorOn: "#00ff00",
        category: "machines",
        tempHigh: 1500,
        stateHigh: "molten_glass",
        conduct: 1,
    },
    led_b: {
        behavior: behaviors.WALL,
        reactions: {
            light: {
                charge1: 1
            }
        },
        color: "#000066",
        colorOn: "#0000ff",
        category: "machines",
        tempHigh: 1500,
        stateHigh: "molten_glass",
        conduct: 1,
    },
    sulfur: {
        color: ["#E9D74C", "#89761B", "#DDC56B"],
        behavior: behaviors.POWDER,
        reactions: {
            hydrogen: {
                elem2: "stench"
            },
        },
        category: "powders",
        tempHigh: 115.21,
        burn: 25,
        burnTime: 207,
        fireColor: ["#8180CC", "#7F84E6"],
        state: "solid",
        density: 2070,
    },
    molten_sulfur: {
        color: "#831502",
        behavior: behaviors.LIQUID,
        reactions: {
            iron: {
                elem1: null,
                elem2: "pyrite"
            },
        },
        density: 1819,
        burn: 25,
        burnTime: 507,
        tempHigh: 444.6,
        viscosity: 8.5,
        fireColor: ["#8180CC", "#7F84E6"],
    },
    sulfur_gas: {
        color: "#b0a65d",
    },
    copper_sulfate: {
        color: ["#4391FD", "#004CFE"],
        behavior: behaviors.POWDER,
        tempHigh: 110,
        burn: 10,
        burnTime: 1007,
        fireColor: ["#91D106", "#FEFF97", "#248E01"],
        state: "solid",
        density: 3600,
        hidden: true,
        category: "powders",
    },
    snake: {
        color: "#00bf00",
        behavior: ["XX|XX|XX", "XX|LB:plant AND RT%5|M1 AND BO:1,2,3", "XX|XX|XX"],
        rotatable: true,
        category: "special",
        excludeRandom: true,
    },
    loopy: {
        color: "#eb3474",
        behavior: ["XX|M2|M1", "XX|RT%20|M2", "CF|XX|XX"],
        rotatable: true,
        category: "special",
    },
    radiation: {
        color: ["#00ff00", "#6fff00"],
        behavior: ["XX|M1%0.5 AND HT|XX", "M1%7 AND HT|DL%3|M1%7 AND HT", "XX|M1%1 AND HT|XX"],
        reactions: {
            water: {
                elem2: "rad_steam",
                chance: 0.4
            },
            steam: {
                elem2: "rad_steam",
                chance: 0.4
            },
            salt_water: {
                elem2: "rad_steam",
                chance: 0.4
            },
            sugar_water: {
                elem2: "rad_steam",
                chance: 0.4
            },
            dirty_water: {
                elem2: "rad_steam",
                chance: 0.4
            },
            seltzer: {
                elem2: "rad_steam",
                chance: 0.4
            },
            bubble: {
                elem2: "rad_steam",
                chance: 0.4
            },
            foam: {
                elem2: "rad_steam",
                chance: 0.4
            },
            ice: {
                elem2: "rad_steam",
                chance: 0.4
            },
            snow: {
                elem2: "rad_steam",
                chance: 0.4
            },
            packed_snow: {
                elem2: "rad_steam",
                chance: 0.4
            },
            slime: {
                elem2: "rad_steam",
                chance: 0.4
            },
            milk: {
                elem2: "cheese",
                chance: 0.4
            },
            permafrost: {
                elem1: "rad_steam",
                elem2: "dirt",
                chance: 0.4
            },
            mud: {
                elem1: "rad_steam",
                elem2: "dirt",
                chance: 0.4
            },
            wet_sand: {
                elem1: "rad_steam",
                elem2: "sand",
                chance: 0.4
            },
            clay: {
                elem1: "rad_steam",
                elem2: "clay_soil",
                chance: 0.4
            },
            slaked_lime: {
                elem1: "rad_steam",
                elem2: "limestone",
                chance: 0.4
            },
            rain_cloud: {
                elem2: "rad_cloud",
                chance: 0.4
            },
            snow_cloud: {
                elem2: "rad_cloud",
                chance: 0.4
            },
            hail_cloud: {
                elem2: "rad_cloud",
                chance: 0.4
            },
            plant: {
                elem2: "dead_plant",
                chance: 0.4
            },
            frozen_plant: {
                elem2: "dead_plant",
                chance: 0.4
            },
            grass: {
                elem2: ["dead_plant", "straw", "grass_seed", "wheat_seed"],
                chance: 0.4
            },
            algae: {
                elem2: ["mushroom_spore", "lichen", "yeast"],
                chance: 0.4
            },
            mushroom_spore: {
                elem2: ["lichen", "yeast"],
                chance: 0.4
            },
            mushroom_cap: {
                elem2: ["lichen", "plant"],
                chance: 0.4
            },
            mushroom_stalk: {
                elem2: ["lichen", "yeast"],
                chance: 0.4
            },
            mushroom_gill: {
                elem2: ["lichen", "yeast"],
                chance: 0.4
            },
            flea: {
                elem2: ["ash", "ant", "termite"],
                chance: 0.4
            },
            ant: {
                elem2: ["ash", "flea", "termite"],
                chance: 0.4
            },
            termite: {
                elem2: ["ash", "flea", "ant"],
                chance: 0.4
            },
            fly: {
                elem2: ["ash", "firefly", "bee"],
                chance: 0.4
            },
            bee: {
                elem2: ["ash", "firefly", "fly"],
                chance: 0.4
            },
            firefly: {
                elem2: ["ash", "bee", "fly"],
                chance: 0.4
            },
            frog: {
                elem2: ["ash", "meat", "rotten_meat", "cooked_meat"],
                chance: 0.4
            },
            tadpole: {
                elem2: ["frog", "worm", null],
                chance: 0.4
            },
            fish: {
                elem2: ["ash", "meat", "rotten_meat", "cooked_meat"],
                chance: 0.4
            },
            rat: {
                elem2: ["ash", "meat", "rotten_meat", "cooked_meat", "plague"],
                chance: 0.4
            },
            bird: {
                elem2: ["ash", "meat", "rotten_meat", "cooked_meat", "plague"],
                chance: 0.4
            },
            bone: {
                elem2: ["calcium", "calcium", "calcium", "cancer"],
                chance: 0.4
            },
            meat: {
                elem2: ["ash", "rotten_meat", "cooked_meat"],
                chance: 0.4
            },
            rotten_meat: {
                elem2: ["ash", "meat", "cooked_meat"],
                chance: 0.4
            },
            cooked_meat: {
                elem2: ["ash", "rotten_meat"],
                chance: 0.4
            },
            bamboo: {
                elem2: ["wood", "plant", "bamboo_plant"],
                chance: 0.4
            },
            bamboo_plant: {
                elem2: ["wood", "plant", "bamboo"],
                chance: 0.4
            },
            sapling: {
                elem2: ["wood", "plant", "tree_branch"],
                chance: 0.4
            },
            tree_branch: {
                elem2: ["wood", "plant", "sapling"],
                chance: 0.4
            },
            grass_seed: {
                elem2: ["straw", "wheat_seed"],
                chance: 0.4
            },
            lichen: {
                elem2: "algae",
                chance: 0.4
            },
            yeast: {
                elem2: ["algae", "mushroom_spore", "lichen"],
                chance: 0.4
            },
            wheat_seed: {
                elem2: ["straw", "wheat", "grass_seed"],
                chance: 0.4
            },
            flower_seed: {
                elem2: ["straw", "grass", "pistil", "petal"],
                chance: 0.4
            },
            pistil: {
                elem2: ["straw", "grass", "flower_seed", "petal"],
                chance: 0.4
            },
            petal: {
                elem2: ["straw", "grass", "flower_seed", "pistil"],
                chance: 0.4
            },
            vine: {
                elem1: ["vine"],
                chance: 0.4
            },
            worm: {
                elem2: "ash",
                chance: 0.4
            },
            corn: {
                elem2: "popcorn",
                chance: 0.4
            },
            corn_seed: {
                elem2: "corn",
                chance: 0.4
            },
            potato: {
                elem2: "potato_seed",
                chance: 0.4
            },
            potato_seed: {
                elem2: "potato",
                chance: 0.4
            },
            slug: {
                elem2: "slime",
                chance: 0.4
            },
            snail: {
                elem2: "slime",
                chance: 0.4
            },
            cell: {
                elem2: "cancer",
                chance: 0.4
            },
            blood: {
                elem2: ["infection", "cancer"],
                chance: 0.4
            },
            antibody: {
                elem2: "cancer",
                chance: 0.4
            },
            infection: {
                elem2: "cancer",
                chance: 0.4
            },
            cancer: {
                elem2: null,
                chance: 0.1
            },
        },
        state: "gas",
        density: 1.5,
        category: "energy",
    },
    rad_steam: {
        color: "#abffe4",
        behavior: ["XX|XX|XX", "M2%10|XX|M2%10", "XX|M2%10|XX"],
        reactions: {
            rad_steam: {
                elem1: null,
                elem2: "rad_cloud",
                chance: 0.3,
                y: [0, 15],
                setting: "clouds"
            },
            steam: {
                elem1: null,
                elem2: "rad_cloud",
                chance: 0.3,
                y: [0, 12],
                setting: "clouds"
            },
            rain_cloud: {
                elem1: "rad_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            snow_cloud: {
                elem1: "rad_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            hail_cloud: {
                elem1: "rad_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            pyrocumulus: {
                elem1: "rad_cloud",
                chance: 0.4,
                y: [0, 12],
                setting: "clouds"
            },
            rad_cloud: {
                elem1: "rad_cloud",
                chance: 0.3,
                y: [0, 12],
                setting: "clouds"
            },
        },
        tempLow: 10,
        stateLow: "fallout",
        category: "gases",
        hidden: true,
        state: "gas",
        density: 0.7,
    },
    rad_cloud: {
        color: ["#2d7528", "#557528"],
        behavior: ["XX|XX|XX", "XX|CH:fallout,radiation%0.025|M1%2.5 AND BO", "CR:radiation%0.05|CR:radiation%0.05|CR:radiation%0.05"],
        category: "gases",
        hidden: true,
        state: "gas",
        density: 0.5,
        ignoreAir: true,
    },
    fallout: {
        color: ["#63b85a", "#448044", "#598044", "#7bb85a"],
        behavior: ["XX|CR:radiation%2|XX", "CR:radiation%2|CH:radiation%0.5|CR:radiation%2", "M2|M1 AND CR:radiation%2|M2"],
        category: "energy",
        hidden: true,
        state: "solid",
        density: 1490,
    },
    neutron: {
        color: "#a6ffff",
        behavior: ["XX|XX|XX", "XX|CH:proton%0.25 AND DL%0.25|XX", "XX|XX|XX"],
        tick: behaviors.BOUNCY,
        reactions: {
            uranium: {
                temp2: 100
            },
        },
        temp: 35,
        category: "energy",
        state: "gas",
        density: 0.00003,
        ignoreAir: true,
    },
    proton: {
        color: "#ffa6a6",
        behavior: ["XX|XX|XX", "XX|DL%0.5|XX", "XX|XX|XX"],
        behaviorOn: ["XX|XX|XX", "XX|CH:hydrogen|XX", "XX|XX|XX"],
        tick: behaviors.BOUNCY,
        reactions: {
            electric: {
                elem1: null,
                elem2: "hydrogen",
                temp2: 10
            },
        },
        temp: 40,
        category: "energy",
        state: "gas",
        conduct: 1,
        density: 0.00002,
        ignoreAir: true,
    },
    electric: {
        color: "#fffba6",
        behavior: ["CL%5|CL%5 AND SH|CL%5", "CL%5 AND SH|SH%5 AND DL%50|CL%5 AND SH", "M1%15 AND CL%6|M1%50 AND CL%13 AND SH|M1%15 AND CL%6"],
        charge: 3,
        category: "energy",
        state: "gas",
        density: 2.1,
        insulate: true,
        ignoreAir: true,
    },
    uranium: {
        color: ["#599e61", "#364d3c", "#494D4A", "#6c8a42", "#798d65", "#b5e089"],
        behavior: ["XX|CR:radiation%1|XX", "CR:radiation%1|CH:lead%0.001|CR:radiation%1", "M2|M1|M2"],
        reactions: {
            neutron: {
                elem1: "n_explosion",
                tempMin: 500,
                chance: 0.1
            },
        },
        tempHigh: 1132.2,
        category: "powders",
        state: "solid",
        density: 19100,
        hardness: 0.6,
        excludeRandom: true,
    },
    molten_uranium: {
        behavior: behaviors.RADMOLTEN,
        reactions: {
            neutron: {
                elem1: "n_explosion",
                tempMin: 200
            },
        },
    },
    diamond: {
        color: ["#03fcec", "#03c6fc", "#b3eeff", "#8ab0e6"],
        behavior: behaviors.POWDER,
        category: "powders",
        tempHigh: 900,
        stateHigh: "carbon_dioxide",
        state: "solid",
        density: 3515,
        hardness: 1,
    },
    gold_coin: {
        color: ["#FFF0B5", "#986A1A", "#F0BB62"],
        behavior: behaviors.POWDER,
        tempHigh: 1064,
        stateHigh: "molten_gold",
        category: "powders",
        state: "solid",
        density: 19300,
        conduct: 0.78,
        hardness: 0.2,
    },
    rust: {
        color: ["#AE551C", "#BC6E39", "#925F49"],
        behavior: behaviors.SUPPORT,
        tempHigh: 1538,
        stateHigh: "molten_iron",
        category: "powders",
        state: "solid",
        density: 5250,
        conduct: 0.37,
        hardness: 0.3,
    },
    oxidized_copper: {
        color: ["#406555", "#42564A", "#517364"],
        behavior: behaviors.SUPPORT,
        reactions: {
            hydrogen: {
                tempMin: 900,
                elem1: "copper",
                elem2: "steam"
            },
        },
        category: "powders",
        hidden: true,
        tempHigh: 1085,
        stateHigh: "molten_copper",
        density: 8960,
        conduct: 0.85,
        hardness: 0.2,
    },
    metal_scrap: {
        color: ["#b0afb4", "#8c8f98", "#cbcdcd", "#6c6c6a", "#fef9ff"],
        behavior: behaviors.POWDER,
        tempHigh: 1538,
        stateHigh: ["molten_iron", "molten_aluminum", "molten_tin"],
        category: "powders",
        density: 2720,
        state: "solid",
        conduct: 0.43,
        hardness: 0.266,
    },
    glass_shard: {
        color: ["#5e807d", "#679e99", "#596b6e"],
        behavior: behaviors.POWDER,
        tempHigh: 1500,
        stateHigh: "molten_glass",
        category: "powders",
        state: "solid",
        density: 2500,
    },
    brick_rubble: {
        color: ["#cb4141", "#ab4d4d", "#872626"],
        behavior: behaviors.POWDER,
        category: "powders",
        tempHigh: 1540,
        stateHigh: "molten_brick",
        state: "solid",
        density: 1650,
        hardness: 0.25,
        breakInto: "dust",
        hidden: true,
    },
    baked_clay: {
        color: "#b85746",
        behavior: behaviors.SUPPORT,
        category: "powders",
        tempHigh: 1300,
        stateHigh: "porcelain",
        state: "solid",
        density: 2000,
        hardness: 0.3,
    },
    feather: {
        color: ["#ffffff", "#e3e3e3", "#d1d1d1"],
        behavior: ["XX|XX|XX", "XX|FX%0.25|XX", "M2%10|M1%10|M1%10"],
        category: "powders",
        tempHigh: 400,
        stateHigh: ["ash", "smoke", "smoke", "smoke"],
        burn: 50,
        burnTime: 20,
        burnInto: ["ash", "smoke", "smoke", "smoke"],
        state: "solid",
        density: 500,
    },
    glitter: {
        color: ["#ACE4FB", "#D9FCFF", "#8F6EB2", "#FDEAFC", "#180E1C", "#6B2778"],
        behavior: behaviors.POWDER,
        category: "powders",
        tempHigh: 100,
        stateHigh: ["fire", "fire", "dioxin"],
        state: "solid",
        density: 1450,
        burn: 50,
        burnTime: 50,
        burnInto: ["smoke", "smoke", "dioxin"],
    },
    bead: {
        color: ["#ff5e5e", "#ffcc5e", "#76ff5e", "#5ed4ff", "#5e61ff", "#cf5eff"],
        behavior: behaviors.POWDER,
        category: "powders",
        tempHigh: 185,
        stateHigh: "molten_plastic",
        burn: 10,
        burnTime: 400,
        burnInto: "dioxin",
        state: "solid",
        density: 1052,
    },
    color_sand: {
        color: ["#ff4d4d", "#ffac4d", "#ffff4d", "#4dff4d", "#4dffff", "#4d4dff", "#ff4dff"],
        tick: function(pixel) {
            behaviors.POWDER(pixel);
            if (pixel.start === pixelTicks) {
                pixel.color = "hsl(" + pixel.start + ",100%,65%)";
                pixel.colorstart = pixel.start;
            }
        },
        tempHigh: 1700,
        stateHigh: "molten_stained_glass",
        category: "powders",
        state: "solid",
        density: 1602,
    },
    borax: {
        color: "#ffffff",
        behavior: behaviors.POWDER,
        category: "powders",
        burn: 15,
        burnTime: 200,
        fireColor: ["#34eb67", "#5ceb34"],
        tempHigh: 743,
        state: "solid",
        density: 1730,
        hidden: true,
    },
    epsom_salt: {
        color: ["#f2f2f2", "#d6d6d6"],
        behavior: behaviors.POWDER,
        category: "powders",
        burn: 40,
        burnTime: 200,
        fireColor: ["#ffffff", "#fcf0f0"],
        tempHigh: 1124,
        state: "solid",
        density: 1680,
        hidden: true,
    },
    potassium_salt: {
        color: ["#f2f2f2", "#e0e0e0"],
        behavior: behaviors.POWDER,
        category: "powders",
        burn: 40,
        burnTime: 200,
        fireColor: ["#ff00ee", "#ff6bf5"],
        tempHigh: 292,
        state: "solid",
        density: 3980,
        hidden: true,
    },
    explosion: {
        color: ["#ffb48f", "#ffd991", "#ffad91"],
        behavior: ["XX|XX|XX", "XX|EX:10|XX", "XX|XX|XX"],
        temp: 300,
        category: "energy",
        state: "gas",
        density: 1000,
        excludeRandom: true,
    },
    n_explosion: {
        color: ["#ffb48f", "#ffd991", "#ffad91"],
        behavior: ["XX|XX|XX", "XX|EX:40>plasma,plasma,plasma,plasma,radiation,rad_steam|XX", "XX|XX|XX"],
        temp: 100000000,
        category: "energy",
        state: "gas",
        density: 1000,
        excludeRandom: true,
        hidden: true,
        alias: "nuclear explosion",
    },
    supernova: {
        color: ["#ffb48f", "#ffd991", "#ffad91"],
        behavior: ["XX|XX|XX", "XX|EX:80>plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,molten_iron,molten_uranium,molten_lead AND CH:void|XX", "XX|XX|XX"],
        temp: 99999999700,
        category: "energy",
        state: "gas",
        density: 1000,
        hardness: 1,
        hidden: true,
        excludeRandom: true,
        maxSize: 1,
    },
    pop: {
        color: ["#ffb48f", "#ffd991", "#ffad91"],
        behavior: ["XX|XX|XX", "XX|EX:3|XX", "XX|XX|XX"],
        category: "energy",
        state: "gas",
        density: 1000,
        excludeRandom: true,
        hidden: true,
    },
    cook: {
        color: ["#5c3322", "#2b1107", "#5c3322", "#5c3322", "#2b1107", "#5c3322"],
        tool: function(pixel) {
            if (!shiftDown) {
                pixel.temp += 0.5;
                pixelTempCheck(pixel);
            } else {
                pixel.temp += 1;
                pixelTempCheck(pixel);
            }
        },
        category: "energy",
        excludeRandom: true,
    },
    incinerate: {
        color: ["#e600ff", "#d984d8", "#ff00e1"],
        tool: function(pixel) {
            pixel.temp += 10000;
            if (!pixel.burning && elements[pixel.element].burn) {
                pixel.burning = true;
                pixel.burnStart = pixelTicks;
            }
            pixelTempCheck(pixel);
        },
        category: "energy",
        excludeRandom: true,
    },
    room_temp: {
        color: "#b1c96d",
        tool: function(pixel) {
            pixel.temp = (pixel.temp + 20) / 2;
            pixelTempCheck(pixel);
        },
        category: "energy",
        excludeRandom: true,
    },
    positron: {
        color: "#a6bfff",
        behavior: ["M1%15 AND CL%6|M1%50 AND CL%13|M1%15 AND CL%6", "CL%5|DL%50|CL%5", "CL%5|CL%5|CL%5"],
        reactions: {
            electric: {
                elem1: "explosion",
                elem2: "explosion"
            },
        },
        category: "energy",
        state: "gas",
        density: 2.1,
        insulate: true,
        ignoreAir: true,
    },
    tnt: {
        color: "#c92a2a",
        behavior: behaviors.WALL,
        behaviorOn: ["XX|XX|XX", "XX|EX:10|XX", "XX|XX|XX"],
        conduct: 1,
        category: "weapons",
        burn: 100,
        burnTime: 1,
        burnInto: "explosion",
        tempHigh: 600,
        stateHigh: "explosion",
        state: "solid",
        density: 1630,
        excludeRandom: true,
    },
    c4: {
        name: "C-4",
        color: ["#D7C1A1", "#C8A77C"],
        behavior: behaviors.STURDYPOWDER,
        behaviorOn: ["XX|XX|XX", "XX|EX:10|XX", "XX|M1|XX"],
        conduct: 1,
        category: "weapons",
        burn: 100,
        burnTime: 1,
        burnInto: "explosion",
        tempHigh: 600,
        stateHigh: "explosion",
        state: "solid",
        density: 1630,
        excludeRandom: true,
    },
    grenade: {
        color: "#5e5c57",
        behavior: ["XX|EX:6>metal_scrap,fire,fire,fire%1|XX", "XX|XX|XX", "M2|M1 AND EX:6>metal_scrap,fire,fire,fire%1|M2"],
        behaviorOn: ["XX|XX|XX", "XX|EX:6>metal_scrap,fire,fire,fire%1|XX", "XX|XX|XX"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        conduct: 1,
        cooldown: defaultCooldown,
    },
    dynamite: {
        color: ["#de5050", "#c92a2a", "#a61919"],
        behavior: ["XX|EX:15%1|XX", "XX|XX|XX", "M2|M1 AND EX:15%1|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 600,
        stateHigh: "explosion",
        breakInto: "explosion",
        excludeRandom: true,
    },
    gunpowder: {
        color: ["#929980", "#757767", "#423D43"],
        behavior: behaviors.POWDER,
        category: "weapons",
        burn: 100,
        burnTime: 1,
        burnInto: "explosion",
        tempHigh: 600,
        stateHigh: "explosion",
        state: "solid",
        density: 1700,
        excludeRandom: true,
    },
    ember: {
        color: ["#ffe985", "#ffd885", "#ffc285"],
        behavior: ["XX|M1|M1", "XX|XX|XX", "XX|XX|XX"],
        flippableX: true,
        category: "energy",
        temp: 300,
        burn: 10,
        burnTime: 10,
        burnInto: "ash",
        burning: true,
        state: "gas",
        density: 700,
        hidden: true,
    },
    firework: {
        color: "#c44f45",
        tick: function(pixel) {
            if (pixel.burning) {
                if (!tryMove(pixel, pixel.x, pixel.y - 1)) {
                    // tryMove again to the top left or top right
                    tryMove(pixel, pixel.x + (Math.random() < 0.5 ? -1 : 1), pixel.y - 1);
                }
                if (pixelTicks - pixel.burnStart > 50 && Math.random() < 0.1) {
                    explodeAt(pixel.x, pixel.y, 10, "fw_ember");
                }
            } else {
                if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                    // tryMove again to the bottom left or bottom right
                    tryMove(pixel, pixel.x + (Math.random() < 0.5 ? -1 : 1), pixel.y + 1);
                }
            }
        },
        burn: 90,
        burnTime: 100,
        density: 2000,
        state: "solid",
        category: "weapons",
    },
    fw_ember: {
        color: ["#ff7a70", "#ff9b70", "#ffe270", "#94ff70", "#00ffff", "#9b70ff", "#ffa8d2"],
        behavior: ["XX|XX|XX", "XX|DL%25|M2", "XX|M2|M1"],
        name: "firework ember",
        burning: true,
        burnInto: "ash",
        fireElement: "carbon_dioxide",
        rotatable: true,
        temp: 649,
        category: "energy",
        hidden: true,
        state: "gas",
        density: 700,
        alias: "firework ember",
    },
    nuke: {
        color: "#534636",
        behavior: ["XX|EX:60>plasma,plasma,plasma,plasma,radiation,rad_steam|XX", "XX|XX|XX", "M2|M1 AND EX:60>plasma,plasma,plasma,plasma,radiation,rad_steam|M2"],
        category: "weapons",
        state: "solid",
        density: 1500,
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    h_bomb: {
        color: "#533636",
        behavior: ["XX|EX:90>plasma,plasma,plasma,plasma,fire|XX", "XX|XX|XX", "M2|M1 AND EX:90>plasma,plasma,plasma,plasma,fire|M2"],
        category: "weapons",
        state: "solid",
        density: 1600,
        excludeRandom: true,
        alias: "hydrogen bomb",
        cooldown: defaultCooldown,
    },
    dirty_bomb: {
        color: "#415336",
        behavior: ["XX|EX:40>radiation,radiation,radiation,rad_steam|XX", "XX|XX|XX", "M2|M1 AND EX:40>radiation,radiation,radiation,rad_steam|M2"],
        category: "weapons",
        state: "solid",
        density: 1400,
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    emp_bomb: {
        color: "#418273",
        tick: function(pixel) {
            if (pixel.start === pixelTicks) {
                return;
            }
            if (!tryMove(pixel, pixel.x, pixel.y + 1)) {
                if (outOfBounds(pixel.x, pixel.y + 1) || (pixelMap[pixel.x][pixel.y + 1].element !== "emp_bomb" && elements[pixelMap[pixel.x][pixel.y + 1].element].state !== "gas")) {
                    for (i = 0; i < currentPixels.length; i++) {
                        var newPixel = currentPixels[i];
                        if (newPixel.charge) {
                            delete newPixel.charge;
                            newPixel.chargeCD = 16;
                        }
                    }
                    explodeAt(pixel.x, pixel.y + 1, 20, "flash");
                }
            }
            doDefaults(pixel);
        },
        maxSize: 1,
        category: "weapons",
        state: "solid",
        density: 1400,
        excludeRandom: true,
        alias: "electromagnetic pulse bomb",
        cooldown: defaultCooldown,
    },
    nitroglycerin: {
        color: "#47c900",
        behavior: behaviors.LIQUID,
        behaviorOn: ["XX|XX|XX", "XX|EX:10|XX", "XX|XX|XX"],
        conduct: 1,
        category: "weapons",
        tempHigh: 600,
        stateHigh: "fire",
        burn: 100,
        burnTime: 1,
        burnInto: "explosion",
        viscosity: 36,
        state: "liquid",
        density: 1600,
        excludeRandom: true,
    },
    greek_fire: {
        color: ["#4a3923", "#594933", "#78654a"],
        behavior: behaviors.LIQUID,
        category: "weapons",
        tempHigh: 4000,
        stateHigh: "fire",
        burn: 100,
        burnTime: 1500,
        burnInto: "fire",
        burning: true,
        temp: 500,
        insulate: true,
        viscosity: 2,
        state: "liquid",
        density: 498.5,
        excludeRandom: true,
    },
    sticky_bomb: {
        color: "#233096",
        behavior: ["XX|ST AND EX:10%2|XX", "ST AND EX:10%2|XX|ST AND EX:10%2", "XX|M1 AND ST AND EX:10%2|XX"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: ["molten_steel", "slime"],
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    cold_bomb: {
        color: "#43646e",
        behavior: ["XX|EX:10>cold_fire|XX", "XX|XX|XX", "M2|M1 AND EX:10>cold_fire|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    hot_bomb: {
        color: "#6c436e",
        behavior: ["XX|HT:20000 AND EX:15>plasma|XX", "XX|XX|XX", "M2|M1 AND HT:20000 AND EX:15>plasma|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 10455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    electro_bomb: {
        color: "#6e6d43",
        behavior: ["XX|EX:10>electric|XX", "XX|XX|XX", "M2|M1 AND EX:10>electric|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1655.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    water_bomb: {
        color: "#34599e",
        behavior: ["XX|EX:10>water|XX", "XX|XX|XX", "M2|M1 AND EX:10>water|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    antimatter_bomb: {
        color: "#6e4343",
        behavior: ["XX|EX:20>antimatter|XX", "XX|XX|XX", "M2|M1 AND EX:20>antimatter|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 10455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    flashbang: {
        color: "#65665c",
        behavior: ["XX|EX:20>flash%1|XX", "XX|XX|XX", "M2|M1 AND EX:20>flash%1|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    flash: {
        color: "#fffdcf",
        behavior: ["XX|XX|XX", "XX|DL%75|XX", "XX|XX|XX"],
        reactions: {
            blood: {
                elem1: "pointer"
            },
            molten_stained_glass: {
                elem1: "rainbow"
            },
            gray_goo: {
                elem1: "static"
            },
        },
        category: "energy",
        temp: 40,
        state: "gas",
        density: 1,
        tempLow: -270,
        stateLow: "light",
        hidden: true,
    },
    smoke_grenade: {
        color: "#65665c",
        behavior: ["XX|CR:smoke|XX", "XX|EX:4>smoke%1|XX", "M2|M1|M2"],
        category: "weapons",
        state: "solid",
        density: 7300,
        conduct: 0.73,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    fireball: {
        color: ["#782828", "#783b28", "#784b28"],
        behavior: ["XX|CR:fire%25|XX", "XX|CC:782828,783b28,784b28%25|XX", "M2|M1 AND EX:8|M2"],
        reactions: {
            water: {
                elem1: "rock",
                elem2: "steam"
            },
        },
        category: "weapons",
        temp: 600,
        tempLow: -100,
        stateLow: "rock",
        burning: true,
        burnInto: ["rock", "rock", "steam"],
        burnTime: 170,
        burn: 100,
        state: "solid",
        density: 1600,
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    landmine: {
        color: "#856C7D",
        behavior: ["XX|EX:20|XX", "XX|XX|XX", "XX|M1|XX"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    cluster_bomb: {
        color: "#7d776d",
        behavior: ["XX|EX:10>smoke,smoke,smoke,smoke,smoke,grenade|XX", "XX|XX|XX", "M2|M1 AND EX:10>smoke,smoke,smoke,smoke,smoke,grenade|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        tempHigh: 1455.5,
        stateHigh: "molten_steel",
        excludeRandom: true,
        cooldown: defaultCooldown,
    },
    armageddon: {
        color: "#a62900",
        behavior: ["XX|XX|XX", "XX|EX:10>armageddon,fire,fire,fire,fire,fire,fire,fire,fire,fire,fire,fire,fire%25 AND DL%10|XX", "M2|M1|M2"],
        category: "weapons",
        state: "solid",
        density: 1300,
        hidden: true,
        excludeRandom: true,
        maxSize: 1,
        cooldown: defaultCooldown,
    },
    tesla_coil: {
        color: "#725C38",
        behavior: behaviors.WALL,
        behaviorOn: ["XX|CR:plasma|XX", "CR:plasma|XX|CR:plasma", "XX|CR:plasma|XX"],
        category: "machines",
        conduct: 1,
        insulate: true,
        temp: 7065,
    },
    light_bulb: {
        color: "#a8a897",
        behavior: behaviors.WALL,
        behaviorOn: ["XX|CR:light|XX", "CR:light|XX|CR:light", "XX|CR:light|XX"],
        colorOn: "#ebebc3",
        category: "machines",
        tempHigh: 1500,
        stateHigh: ["molten_glass", "molten_glass", "molten_copper"],
        conduct: 1,
        breakInto: "glass_shard",
    },
    shocker: {
        color: "#78784c",
        behavior: behaviors.WALL,
        behaviorOn: ["XX|CR:electric AND SH|XX", "CR:electric AND SH|XX|CR:electric AND SH", "XX|CR:electric AND SH|XX"],
        colorOn: "#ffff59",
        category: "machines",
        conduct: 1,
    },
    pressure_plate: {
        color: "#8a8a84",
        tick: function(pixel) {
            if (!isEmpty(pixel.x, pixel.y - 1, true)) {
                if (pixelMap[pixel.x][pixel.y - 1].element != "pressure_plate" || pixelMap[pixel.x][pixel.y - 1].on) {
                    pixel.on = true;
                    var coordsToShock = [
                        [pixel.x, pixel.y + 1],
                        [pixel.x + 1, pixel.y],
                        [pixel.x - 1, pixel.y],
                    ];
                    for (var i = 0; i < coordsToShock.length; i++) {
                        var x = coordsToShock[i][0];
                        var y = coordsToShock[i][1];
                        if (!isEmpty(x, y, true)) {
                            var newpixel = pixelMap[x][y];
                            if (elements[newpixel.element].conduct) {
                                newpixel.charge = 1;
                            }
                        }
                    }
                }
            } else if (pixel.on) {
                pixel.on = false;
            }
            tryMove(pixel, pixel.x, pixel.y + 1);
        },
        category: "machines",
    },
    primordial_soup: {
        color: ["#501F24", "#6D2E1D"],
        behavior: ["XX|CR:foam%2|XX", "M2|CH:algae,cell,mushroom_spore,lichen,yeast,antibody,cellulose,seltzer,oxygen%0.005|M2", "M1|M1|M1"],
        behaviorOn: ["XX|CR:foam%25|XX", "M2|CH:algae,cell,mushroom_spore,lichen,yeast,antibody,cellulose,seltzer,oxygen%5|M2", "M1|M1|M1"],
        reactions: {
            cancer: {
                elem1: "dirty_water"
            },
            cyanide: {
                elem1: "dirty_water"
            },
            infection: {
                elem1: "dirty_water"
            },
            plague: {
                elem1: "dirty_water"
            },
            bleach: {
                elem1: "dirty_water"
            },
            poison: {
                elem1: "dirty_water"
            },
            ammonia: {
                elem1: ["algae", "cell", "mushroom_spore", "lichen", "yeast", "antibody"],
                chance: 0.05
            },
            radiation: {
                elem1: ["algae", "cell", "mushroom_spore", "lichen", "yeast", "antibody"],
                chance: 0.15
            },
            light: {
                elem1: ["algae", "cell", "mushroom_spore", "lichen", "yeast", "antibody"],
                chance: 0.5
            },
            carbon_dioxide: {
                elem2: "oxygen"
            },
            dirt: {
                elem2: "mud",
                chance: 0.2
            },
            sand: {
                elem2: "wet_sand",
                chance: 0.2
            },
            rock: {
                elem2: "wet_sand",
                chance: 0.001
            },
        },
        category: "life",
        tempHigh: 100,
        stateHigh: "steam",
        conduct: 0.05,
        state: "liquid",
        density: 955,
    },
    molten_slag: {
        ignore: ["salt", "plastic", "sulfur", "epsom_salt", "potassium_salt", "borax", "solder"],
    },
    molten_dirt: {
        stateLow: "mudstone",
    },
    debug: {
        color: ["#b150d4", "#d1b74f"],
        tool: function(pixel) {
            mouseIsDown = false;
            shiftDown = false;
            var output = pixel.element.toUpperCase() + " at x" + pixel.x + ", y" + pixel.y + ", tick" + pixelTicks + "\n";
            for (var i in pixel) {
                if (i !== "x" && i !== "y" && i !== "element") {
                    output += "  " + i + ": " + pixel[i] + "\n";
                }
            }
            console.log(output);
            alert(output);
            lastDebug = pixelTicks;
        },
        maxSize: 1,
        category: "special",
    },
    //ice color: "#c5e9f0"
    salt_ice: {
        color: "#b6ced4"
    },
    sugar_ice: {
        color: "#c8dee3"
    },
    seltzer_ice: {
        color: "#a7c4c9"
    },
    dirty_ice: {
        color: "#a9d9c7"
    },
    pool_ice: {
        color: "#c0eff0"
    },
    blood_ice: {
        color: "#ff7070"
    },
    antibody_ice: {
        color: "#ff8080"
    },
    infection_ice: {
        color: "#ff7090"
    },
};

function hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        } :
        null;
}

function averageRGB(rgblist) {
    var r = 0;
    var g = 0;
    var b = 0;
    for (var i = 0; i < rgblist.length; i++) {
        var rgb = rgblist[i];
        r += parseInt(rgb.r || rgb[0]);
        g += parseInt(rgb.g || rgb[1]);
        b += parseInt(rgb.b || rgb[2]);
    }
    r = Math.floor(r / rgblist.length);
    g = Math.floor(g / rgblist.length);
    b = Math.floor(b / rgblist.length);
    return "rgb(" + r + "," + g + "," + b + ")";
}

currentPixels = [];
//currentID = 0;
// Pixel class, with attributes such as x, y, and element
class Pixel {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.element = element;
        var elementInfo = elements[element];
        this.color = pixelColorPick(this);
        // If element doesn't have temp attribute, set temp to airTemp
        if (elementInfo.temp == undefined) {
            this.temp = airTemp;
        } else {
            this.temp = elementInfo.temp;
        }
        this.start = pixelTicks;
        //this.id = currentID;
        //currentID++;
        if (elementInfo.burning) {
            this.burning = true;
            this.burnStart = pixelTicks;
        }
        if (elementInfo.charge) {
            this.charge = elementInfo.charge;
        }
        // If elementInfo.flippableX, set it to true or false randomly
        if (elementInfo.flipX !== undefined) {
            this.flipX = elementInfo.flipX;
        } else if (elementInfo.flippableX) {
            this.flipX = Math.random() >= 0.5;
        }
        // If elementInfo.flippableY, set it to true or false randomly
        if (elementInfo.flipY !== undefined) {
            this.flipY = elementInfo.flipY;
        } else if (elementInfo.flippableY) {
            this.flipY = Math.random() >= 0.5;
        }
        // If elementInfo.rotatable, set it to a number between 0 and 3
        if (elementInfo.r !== undefined) {
            this.r = elementInfo.r;
        } else if (elementInfo.rotatable) {
            this.r = Math.floor(Math.random() * 4);
        }
        // If elementInfo.properties, set each key to its value
        if (elementInfo.properties !== undefined) {
            for (var key in elementInfo.properties) {
                // If it is an array or object, make a copy of it
                if (typeof elementInfo.properties[key] == "object") {
                    this[key] = JSON.parse(JSON.stringify(elementInfo.properties[key]));
                } else {
                    this[key] = elementInfo.properties[key];
                }
            }
        }
        pixelMap[x][y] = this;
    }
}
// If the screen size is under 768px, set pixelSize to 5, otherwise 6
if (window.innerWidth < 700) {
    pixelSize = 5;
} else {
    pixelSize = 6;
}
pixelSizeHalf = pixelSize / 2;

function outOfBounds(x, y) {
    // Returns true if the pixel is out of bounds
    return y > height - 1 || y < 1 || x > width - 1 || x < 1;
}

function isEmpty(x, y, ignoreBounds = false, oob = undefined) {
    if (oob || outOfBounds(x, y)) {
        return ignoreBounds;
    }
    return pixelMap[x][y] == undefined;
}

function canMove(pixel, x, y) {
    if (isEmpty(x, y)) {
        return true;
    }
}

function movePixel(pixel, x, y, leaveBehind = null) {
    // Delete the pixel from the old position
    delete pixelMap[pixel.x][pixel.y];
    if (leaveBehind != null && isEmpty(pixel.x, pixel.y)) {
        createPixel(leaveBehind, pixel.x, pixel.y);
    }
    pixel.x = x;
    pixel.y = y;
    pixelMap[x][y] = pixel;
}

function clonePixel(pixel, x, y) {
    currentPixels.push(new Pixel(x, y, pixel.element));
}

function createPixel(element, x, y) {
    currentPixels.push(new Pixel(x, y, element));
    checkUnlock(element);
}

function deletePixel(x, y) {
    // remove pixelMap[x][y] from currentPixels
    currentPixels.splice(currentPixels.indexOf(pixelMap[x][y]), 1);
    if (pixelMap[x][y]) {
        pixelMap[x][y].del = true;
    }
    delete pixelMap[x][y];
    /*for (var i = 0; i < currentPixels.length; i++) {
            if (currentPixels[i].x == x && currentPixels[i].y == y) {
                currentPixels.splice(i, 1);
                break;
            }
        }*/
    /*if (id != null) {
            for (var i = 0; i < currentPixels.length; i++) {
                if (currentPixels[i].id == id) {
                    currentPixels.splice(i, 1);
                    return;
                }
            }
        }*/
}

function swapPixels(pixel1, pixel2) {
    var tempX = pixel1.x;
    var tempY = pixel1.y;
    pixel1.x = pixel2.x;
    pixel1.y = pixel2.y;
    pixel2.x = tempX;
    pixel2.y = tempY;
    pixelMap[pixel1.x][pixel1.y] = pixel1;
    pixelMap[pixel2.x][pixel2.y] = pixel2;
}

function changePixel(pixel, element, changetemp = true) {
    pixel.element = element;
    pixel.color = pixelColorPick(pixel);
    pixel.start = pixelTicks;
    var elementInfo = elements[element];
    if (elementInfo.burning == true) {
        pixel.burning = true;
        pixel.burnStart = pixelTicks;
    } else if (pixel.burning && !elementInfo.burn) {
        delete pixel.burning;
        delete pixel.burnStart;
    }
    delete pixel.origColor; // remove stain
    if (pixel.r && !elementInfo.rotatable) {
        delete pixel.r;
    }
    if (pixel.flipX && !elementInfo.flippableX) {
        delete pixel.flipX;
    }
    if (pixel.flipY && !elementInfo.flippableY) {
        delete pixel.flipY;
    }
    // If elementInfo.flippableX, set it to true or false randomly
    if (elementInfo.flipX !== undefined) {
        pixel.flipX = elementInfo.flipX;
    } else if (elementInfo.flippableX) {
        pixel.flipX = Math.random() >= 0.5;
    }
    // If elementInfo.flippableY, set it to true or false randomly
    if (elementInfo.flipY !== undefined) {
        pixel.flipY = elementInfo.flipY;
    } else if (elementInfo.flippableY) {
        pixel.flipY = Math.random() >= 0.5;
    }
    if (elementInfo.temp != undefined && changetemp) {
        pixel.temp = elementInfo.temp;
        pixelTempCheck(pixel);
    }
    // If elementInfo.properties, set each key to its value
    if (elementInfo.properties !== undefined) {
        for (var key in elementInfo.properties) {
            // If it is an array or object, make a copy of it
            if (typeof elementInfo.properties[key] == "object") {
                pixel[key] = JSON.parse(JSON.stringify(elementInfo.properties[key]));
            } else {
                pixel[key] = elementInfo.properties[key];
            }
        }
    }
    checkUnlock(element);
}

function reactPixels(pixel1, pixel2) {
    var r = elements[pixel1.element].reactions[pixel2.element];
    if (r.setting && settings[r.setting] === 0) {
        return false;
    }
    // r has the attribute "y" which is a range between two y values
    // r.y example: [10,30]
    // return false if y is defined and pixel1's y is not in the range
    if (r.tempMin !== undefined && pixel1.temp < r.tempMin) {
        return false;
    }
    if (r.tempMax !== undefined && pixel1.temp > r.tempMax) {
        return false;
    }
    if (r.charged && !pixel.charge) {
        return false;
    }
    if (r.chance !== undefined && Math.random() > r.chance) {
        return false;
    }
    if (r.y !== undefined && (pixel1.y < r.y[0] || pixel1.y > r.y[1])) {
        return false;
    }
    if (r.elem1 !== undefined) {
        // if r.elem1 is an array, set elem1 to a random element from the array, otherwise set it to r.elem1
        if (Array.isArray(r.elem1)) {
            var elem1 = r.elem1[Math.floor(Math.random() * r.elem1.length)];
        } else {
            var elem1 = r.elem1;
        }

        if (elem1 == null) {
            deletePixel(pixel1.x, pixel1.y);
        } else {
            changePixel(pixel1, elem1);
        }
    }
    if (r.charge1) {
        pixel1.charge = r.charge1;
    }
    if (r.temp1) {
        pixel1.temp += r.temp1;
        pixelTempCheck(pixel1);
    }
    if (r.color1) {
        // if it's a list, use a random color from the list, else use the color1 attribute
        pixel1.color = pixelColorPick(pixel1, Array.isArray(r.color1) ? r.color1[Math.floor(Math.random() * r.color1.length)] : r.color1);
    }
    if (r.elem2 !== undefined) {
        // if r.elem2 is an array, set elem2 to a random element from the array, otherwise set it to r.elem2
        if (Array.isArray(r.elem2)) {
            var elem2 = r.elem2[Math.floor(Math.random() * r.elem2.length)];
        } else {
            var elem2 = r.elem2;
        }

        if (elem2 == null) {
            deletePixel(pixel2.x, pixel2.y);
        } else {
            changePixel(pixel2, elem2);
        }
    }
    if (r.charge2) {
        pixel2.charge = r.charge2;
    }
    if (r.temp2) {
        pixel2.temp += r.temp2;
        pixelTempCheck(pixel2);
    }
    if (r.color2) {
        // if it's a list, use a random color from the list, else use the color2 attribute
        pixel2.color = pixelColorPick(pixel2, Array.isArray(r.color2) ? r.color2[Math.floor(Math.random() * r.color2.length)] : r.color2);
    }
    if (r.func) {
        r.func(pixel1, pixel2);
    }
    return r.elem1 !== undefined || r.elem2 !== undefined;
}

loadedSounds = {};

function playSound(sound) {
    if (loadedSounds[sound] === undefined) {
        loadedSounds[sound] = new Audio("sounds/" + sound);
    }
    loadedSounds[sound].play();
}

function stopSound(sound) {
    if (loadedSounds[sound] === undefined) {
        loadedSounds[sound] = new Audio("sounds/" + sound);
    }
    loadedSounds[sound].pause();
    loadedSounds[sound].currentTime = 0;
}

function loopSound(sound) {
    if (loadedSounds[sound] === undefined) {
        loadedSounds[sound] = new Audio("sounds/" + sound);
    }
    loadedSounds[sound].loop = true;
    loadedSounds[sound].play();
}

validDensitySwaps = {
    solid: {
        liquid: true,
        gas: true,
    },
    liquid: {
        liquid: true,
        gas: true,
    },
    gas: {
        gas: true,
    },
    undefined: {},
};

function tryMove(pixel, nx, ny, leaveBehind = undefined) {
    var info = elements[pixel.element];
    var oob = outOfBounds(nx, ny);
    if (isEmpty(nx, ny, false, oob)) {
        // If coords is empty, move to coords
        movePixel(pixel, nx, ny, leaveBehind);
        return true;
    } else if (!oob) {
        // Reactions
        newPixel = pixelMap[nx][ny];
        var rr1 = false;
        if (info.reactions !== undefined && info.reactions[newPixel.element] !== undefined) {
            rr1 = reactPixels(pixel, newPixel);
            if (rr1) {
                return true;
            }
        }
        if (!rr1 && elements[newPixel.element].reactions !== undefined && elements[newPixel.element].reactions[pixel.element] !== undefined && !elements[newPixel.element].reactions[pixel.element].oneway) {
            if (reactPixels(newPixel, pixel)) {
                return true;
            }
        }
        // Density
        if (elements[pixel.element].id !== elements[newPixel.element].id) {
            if (info.density !== undefined && elements[newPixel.element].density !== undefined) {
                // if the pixel's state + ">" + newPixel's state is in validDensitySwaps, and the pixel's density is larger than the newPixel's density, swap the pixels
                if (validDensitySwaps[info.state][elements[newPixel.element].state] && info.density >= elements[newPixel.element].density) {
                    // chance depending on the difference in density
                    if (Math.random() < (info.density - elements[newPixel.element].density) / (info.density + elements[newPixel.element].density)) {
                        swapPixels(pixel, newPixel);
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function behaviorCoords(x, y, bx, by) {
    return {
        x: x + bx - 1,
        y: y + by - 1
    };
}

function relativeCoords(x, y, bx, by) {
    return {
        x: bx - 1,
        y: by - 1
    };
}
/* Behavior Example (Sand)
  [
      ["XX","XX","XX"],
      ["XX","XX","XX"],
      ["M2","M1","M2"]
  ]                    */
behaviorCache = {};

function rotateBehavior(behavior, rotation) {
    // returns rotated 2D array counter-clockwise depending on rotation 1, 2, or 3
    // if the rotation is under 0, subtract it from 3
    if (rotation < 0) {
        rotation = 4 + rotation;
    }
    var check = behaviorCache[behavior.toString() + rotation];
    if (check != undefined) {
        return check;
    }

    var newBehavior = [];
    if (rotation == 1) {
        // rotate counter-clockwise 90 degrees
        for (var i = 0; i < behavior.length; i++) {
            newBehavior[i] = [];
            for (var j = 0; j < behavior[i].length; j++) {
                newBehavior[i][j] = behavior[j][behavior.length - 1 - i];
            }
        }
    } else if (rotation == 2) {
        // rotate counter-clockwise 180 degrees
        for (var i = 0; i < behavior.length; i++) {
            newBehavior[i] = [];
            for (var j = 0; j < behavior[i].length; j++) {
                newBehavior[i][j] = behavior[behavior.length - 1 - i][behavior[i].length - 1 - j];
            }
        }
    } else if (rotation == 3) {
        // rotate counter-clockwise 270 degrees
        for (var i = 0; i < behavior.length; i++) {
            newBehavior[i] = [];
            for (var j = 0; j < behavior[i].length; j++) {
                newBehavior[i][j] = behavior[behavior[i].length - 1 - j][i];
            }
        }
    } else {
        // no rotation
        return behavior;
    }

    behaviorCache[behavior.toString() + rotation] = newBehavior;
    return newBehavior;
}

function flipBehavior(behavior, axis) {
    // returns flipped 2D array depending on axis "x" or "y"
    var check = behaviorCache[behavior.toString() + axis];
    if (check != undefined) {
        return check;
    }

    if (axis === "x") {
        var newBehavior = [];
        for (var i = 0; i < behavior.length; i++) {
            newBehavior[i] = [];
            for (var j = 0; j < behavior[i].length; j++) {
                newBehavior[i][j] = behavior[i][behavior[i].length - 1 - j];
            }
        }
        behaviorCache[behavior.toString() + axis] = newBehavior;
        return newBehavior;
    } else {
        // axis === y
        newBehavior = behavior.slice().reverse();
        behaviorCache[behavior.toString() + axis] = newBehavior;
        return newBehavior;
    }

    return behavior;
}

/* Behavior Rules
      XX = Ignore
      M1 = Move (First Priority)
      M2 = Move (Second Priority)
      SP = Support (Doesn't move if all aren't empty)
      SA = Support Any (Doesn't move if any aren't empty)
      DL = Delete
      DB = Delete Both (Self and target)
      CL = Clone
      CF = Clone first touched
      CH = Change
      C2 = Change Self after M2
      CR:element_name = Create a pixel of element_name
      LB:element_name = Leave behind a pixel of element_name when moved (Must be center cell)
      L1:element_name = Leave behind only on M1 moves
      L2:element_name = Leave behind only on M2 moves
      SW = Swap
      HT = Heat
      CO = Cool
      CC = Change Color (Hexadecimal)
      ST = Stick
      SH = Shock with electricity
      FX = Flip X
      FY = Flip Y
      RT = Rotate
      BO = Bounce off of
      EX:radius>fire substitute = Explode on touch
      %number = Chance of rule happening
  */
function pixelTick(pixel, custom = null) {
    if (pixel.start === pixelTicks) {
        return;
    }
    var info = elements[pixel.element];
    if (custom) {
        var behavior = custom;
    } else if (pixel.charge && info.behaviorOn) {
        var behavior = info.behaviorOn;
    } else {
        var behavior = info.behavior;
    }
    if (pixel.flipX) {
        behavior = flipBehavior(behavior, "x");
    }
    if (pixel.flipY) {
        behavior = flipBehavior(behavior, "y");
    }
    if (pixel.r) {
        behavior = rotateBehavior(behavior, pixel.r);
    }
    var x = pixel.x;
    var y = pixel.y;
    var move1Spots = [];
    var move2Spots = [];
    var supportSpots = [];
    var swapSpots = [];
    var leaveBehind = null;
    var leaveBehind1 = null;
    var leaveBehind2 = null;
    var move = true;
    // Parse behavior
    for (var by = 0; by < behavior.length; by++) {
        var behaviorby = behavior[by];
        for (var bx = 0; bx < behaviorby.length; bx++) {
            var b0 = behaviorby[bx];
            if (b0 === "XX") {
                continue;
            }
            //if (b.includes(" OR ")) {
            //    b = b.split(" OR ")[Math.floor(Math.random()*b.split(" OR ").length)];
            //}
            // Loop through b0.split(" AND ")
            if (b0.indexOf(" AND ") !== -1) {
                var andsplit = b0.split(" AND ");
            } else {
                var andsplit = [b0];
            }
            for (var i = 0; i < andsplit.length; i++) {
                var b = andsplit[i];
                if (b.indexOf(":") !== -1) {
                    var arg = b.split(":")[1].split(/[\:\%]/)[0];
                    if (b.indexOf("%") === -1) {
                        b = b.split(/[\:\%]/)[0];
                    }
                } else {
                    var arg = null;
                }
                // If b has "%" followed by a number in it, it's a chance to move
                if (b.indexOf("%") !== -1) {
                    // Split the string at the "%" and use the second half as the chance (float)
                    var chance = parseFloat(b.split("%")[1]);
                    //console.log(b+": "+(Math.random()*100 < chance));
                    b = b.split(/[\:\%]/)[0];
                } else {
                    var chance = 100;
                }
                if (chance == 100 || Math.random() * 100 < chance) {
                    var newCoords = behaviorCoords(x, y, bx, by);
                    if (b === "M1") {
                        if (info.viscosity !== undefined) {
                            if (!(Math.random() * 100 < 100 / info.viscosity ** 0.25)) {
                                newCoords.x = x;
                            }
                        }
                        move1Spots.push(newCoords);
                    } else if (b === "M2") {
                        if (info.viscosity !== undefined) {
                            if (!(Math.random() * 100 < 100 / info.viscosity ** 0.25)) {
                                newCoords.x = x;
                            }
                        }
                        move2Spots.push(newCoords);
                    } else if (b === "SP") {
                        supportSpots.push({
                            x: newCoords.x,
                            y: newCoords.y,
                            arg: arg
                        });
                    } else if (b === "SA") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            move = false;
                        }
                    } else if (b === "DL") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            // if the pixel at newCoords is the same element as the pixel, ignore
                            newPixel = pixelMap[newCoords.x][newCoords.y];
                            // if info.ignore exists and newPixel.element is in it
                            if (info.ignore && info.ignore.indexOf(newPixel.element) !== -1) {
                                continue;
                            }
                            if (!(newPixel.element == pixel.element) || (newCoords.x == x && newCoords.y == y)) {
                                if (arg != null) {
                                    var args = arg.split(",");
                                }
                                if (arg == null || args.indexOf(newPixel.element) !== -1) {
                                    if (!elements[newPixel.element].hardness || Math.random() > elements[newPixel.element].hardness) {
                                        deletePixel(newCoords.x, newCoords.y);
                                        if (newCoords.x == x && newCoords.y == y) {
                                            var deleted = true;
                                        }
                                        swapSpots = [];
                                    }
                                }
                            }
                        }
                    } else if (b === "DB") {
                        // Delete Both
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            // if the pixel at newCoords is the same element as the pixel, ignore
                            newPixel = pixelMap[newCoords.x][newCoords.y];
                            // if info.ignore exists and newPixel.element is in it
                            if (info.ignore && info.ignore.indexOf(newPixel.element) !== -1) {
                                continue;
                            }
                            if (!(newPixel.element == pixel.element)) {
                                if (arg != null) {
                                    var args = arg.split(",");
                                }
                                if (arg == null || args.indexOf(newPixel.element) !== -1) {
                                    if (!elements[newPixel.element].hardness || Math.random() > elements[newPixel.element].hardness) {
                                        deletePixel(newCoords.x, newCoords.y);
                                        if (pixelMap[pixel.x][pixel.y] != undefined) {
                                            deletePixel(pixel.x, pixel.y);
                                        }
                                        var deleted = true;
                                        swapSpots = [];
                                    }
                                }
                            }
                        }
                    }
                    //Change pixel
                    else if (b === "CH") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (info.ignore && info.ignore.indexOf(newPixel.element) !== -1) {
                                continue;
                            }
                            if (!elements[newPixel.element].hardness || Math.random() > elements[newPixel.element].hardness || (newCoords.x == x && newCoords.y == y)) {
                                if (arg.indexOf(">") !== -1) {
                                    var argfrom = arg.split(">")[0];
                                    if (argfrom.indexOf(",") !== -1) {
                                        if (argfrom.split(",").indexOf(newPixel.element) === -1) {
                                            continue;
                                        }
                                    } else if (argfrom !== newPixel.element) {
                                        continue;
                                    }
                                    var argto = arg.split(">")[1];
                                } else {
                                    var argfrom = null;
                                    var argto = arg;
                                }
                                if (argto.indexOf(",") !== -1) {
                                    var argto = argto.split(",")[Math.floor(Math.random() * argto.split(",").length)];
                                }
                                if (elements[argto]) {
                                    if (elements[newPixel.element].id !== elements[argto].id) {
                                        changePixel(newPixel, argto);
                                    }
                                }
                            }
                        }
                    }
                    //Swap
                    else if (b === "SW") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (arg != null) {
                                var args = arg.split(",");
                            }
                            if (arg == null || args.indexOf(newPixel.element) !== -1) {
                                if (!elements[newPixel.element].hardness || Math.random() > elements[newPixel.element].hardness) {
                                    swapSpots.push({
                                        x: newCoords.x,
                                        y: newCoords.y
                                    });
                                }
                            }
                        }
                    }
                    //Create pixel
                    else if (b === "CR") {
                        if (isEmpty(newCoords.x, newCoords.y)) {
                            if (arg == null) {
                                arg = pixel.element;
                            } else if (arg.indexOf(",") !== -1) {
                                arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                            }
                            if (elements[arg]) {
                                createPixel(arg, newCoords.x, newCoords.y);
                                if (info.fireColor && arg === "fire") {
                                    pixelMap[newCoords.x][newCoords.y].color = pixelColorPick(pixelMap[newCoords.x][newCoords.y], info.fireColor);
                                }
                                pixelMap[newCoords.x][newCoords.y].temp = pixel.temp;
                            }
                        }
                    }
                    // Clone self
                    else if (b === "CL") {
                        if (isEmpty(newCoords.x, newCoords.y)) {
                            if (arg == null || pixel.temp >= parseFloat(arg)) {
                                clonePixel(pixel, newCoords.x, newCoords.y);
                            }
                        }
                    }
                    // Clone first touched
                    else if (b === "CF") {
                        if (pixel.clone) {
                            if (isEmpty(newCoords.x, newCoords.y)) {
                                createPixel(pixel.clone, newCoords.x, newCoords.y);
                                pixelMap[newCoords.x][newCoords.y].temp = pixel.temp;
                            }
                        } else {
                            if (!isEmpty(newCoords.x, newCoords.y, true)) {
                                newPixel = pixelMap[newCoords.x][newCoords.y];
                                if (info.ignore && info.ignore.indexOf(newPixel.element) !== -1) {
                                    continue;
                                }
                                if (newPixel.element != pixel.element && newPixel.element != "wire") {
                                    pixel.clone = newPixel.element;
                                    pixel.temp = newPixel.temp;
                                } else if (newPixel.clone) {
                                    pixel.clone = newPixel.clone;
                                    pixel.temp = newPixel.temp;
                                }
                            }
                        }
                    } else if (b === "SH") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            var con = elements[newPixel.element].conduct;
                            if (con != undefined) {
                                if (Math.random() < con) {
                                    // If random number is less than conductivity
                                    if (!newPixel.charge && !newPixel.chargeCD && (arg == null || newPixel.element == arg)) {
                                        newPixel.charge = parseFloat(arg) || 1;
                                        if (elements[newPixel.element].colorOn) {
                                            newPixel.color = pixelColorPick(newPixel);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //Stick
                    else if (b === "ST") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (info.ignore && info.ignore.indexOf(newPixel.element) !== -1) {
                                continue;
                            }
                            if (newPixel.element != pixel.element && (arg == null || newPixel.element == arg)) {
                                var sticking = true;
                            }
                        }
                    }
                    //Leave behind element
                    else if (b === "LB" || b == "L1" || b == "L2") {
                        if (arg != null && arg.indexOf(",") !== -1) {
                            arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                        }
                        if (elements[arg]) {
                            if (b == "LB") {
                                leaveBehind = arg;
                            } else if (b == "L1") {
                                leaveBehind1 = arg;
                            } else if (b == "L2") {
                                leaveBehind2 = arg;
                            }
                        }
                    }
                    //Change color
                    else if (b === "CC") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (arg == null) {
                                arg = newPixel.colorObject;
                            } else {
                                if (arg.indexOf(",") !== -1) {
                                    arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                                }
                                if (!arg.startsWith("#")) {
                                    arg = "#" + arg;
                                }
                            }
                            newPixel.color = pixelColorPick(newPixel, arg);
                        }
                    }
                    //Heat
                    else if (b === "HT") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            // if the element isn't the same or the coords ARE the same
                            if (!(newPixel.element == pixel.element) || (newCoords.x == pixel.x && newCoords.y == pixel.y)) {
                                if (arg != null) {
                                    arg = parseFloat(arg);
                                } else {
                                    arg = 1;
                                }
                                if (isNaN(arg)) {
                                    arg = 1;
                                }
                                newPixel.temp += arg;
                                pixelTempCheck(newPixel);
                            }
                        }
                    }
                    //Cool
                    else if (b === "CO") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (!(newPixel.element == pixel.element) || (newCoords.x == pixel.x && newCoords.y == pixel.y)) {
                                if (arg != null) {
                                    arg = parseFloat(arg);
                                } else {
                                    arg = 1;
                                }
                                if (isNaN(arg)) {
                                    arg = 1;
                                }
                                newPixel.temp -= arg;
                                pixelTempCheck(newPixel);
                            }
                        }
                    }

                    // Flip X
                    else if (b === "FX") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (elements[newPixel.element].flippableX) {
                                if (arg === "0") {
                                    newPixel.flipX = false;
                                } else if (arg === "1") {
                                    newPixel.flipX = true;
                                }
                                newPixel.flipX = !newPixel.flipX;
                            }
                        }
                    }
                    // Flip Y
                    else if (b === "FY") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            if (elements[newPixel.element].flippableY) {
                                if (arg === "0") {
                                    newPixel.flipY = false;
                                } else if (arg === "1") {
                                    newPixel.flipY = true;
                                } else {
                                    newPixel.flipY = !newPixel.flipY;
                                }
                            }
                        }
                    }
                    // Rotate
                    else if (b === "RT") {
                        if (!isEmpty(newCoords.x, newCoords.y, true)) {
                            var newPixel = pixelMap[newCoords.x][newCoords.y];
                            // If arg isn't null, set arg to a random choice from arg.split(",")
                            if (arg != null && arg.indexOf(",") !== -1) {
                                arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                            }
                            if (elements[newPixel.element].rotatable) {
                                newPixel.r = ((newPixel.r || 0) + (parseInt(arg) || 1)) % 4;
                            }
                        }
                    }
                    // Bounce
                    else if (b === "BO") {
                        if (!isEmpty(newCoords.x, newCoords.y) && (outOfBounds(newCoords.x, newCoords.y) || elements[pixelMap[newCoords.x][newCoords.y].element].state === "solid")) {
                            if (info.flippableX) {
                                pixel.flipX = !pixel.flipX;
                            }
                            if (info.flippableY) {
                                pixel.flipY = !pixel.flipY;
                            }
                            if (info.rotatable) {
                                // If arg isn't null, set arg to a random choice from arg.split(",")
                                if (arg != null && arg.indexOf(",") !== -1) {
                                    arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                                }
                                if (pixel.r !== undefined) {
                                    pixel.r = (pixel.r + (parseInt(arg) || 2)) % 4;
                                } else {
                                    pixel.r = parseInt(arg) || 2;
                                }
                            }
                        }
                    }
                    // Change When M2
                    else if (b === "C2") {
                        if (arg.indexOf(",") !== -1) {
                            arg = arg.split(",")[Math.floor(Math.random() * arg.split(",").length)];
                        }
                        var C2 = arg;
                    }
                    // Explode
                    else if (b === "EX") {
                        if (!isEmpty(newCoords.x, newCoords.y)) {
                            if (
                                outOfBounds(newCoords.x, newCoords.y) ||
                                (newCoords.x == x && newCoords.y == y) ||
                                (pixel.element !== pixelMap[newCoords.x][newCoords.y].element && elements[pixelMap[newCoords.x][newCoords.y].element].state !== "gas")
                            ) {
                                // if arg contains ">", var fire = everything after it, arg = everything before it
                                if (arg.indexOf(">") !== -1) {
                                    var fire = arg.split(">")[1];
                                    arg = arg.split(">")[0];
                                } else {
                                    var fire = "fire";
                                }
                                // arg = a number
                                if (arg != null) {
                                    arg = parseInt(arg);
                                    if (isNaN(arg)) {
                                        arg = 3;
                                    }
                                } else {
                                    arg = 3;
                                }
                                explodeAt(x, y, arg, fire);
                                if (!pixel.del && info.hardness !== 1) {
                                    deletePixel(x, y);
                                    var deleted = true;
                                }
                                swapSpots = [];
                            }
                        }
                    }
                }
            }
        }
    }
    if (typeof deleted !== "undefined") {
        return;
    }
    if (supportSpots.length > 0) {
        var supportCount = 0;
        var allEmpty = true;
        for (var i = 0; i < supportSpots.length; i++) {
            var bx = supportSpots[i].x;
            var by = supportSpots[i].y;
            var arg = supportSpots[i].arg;
            if (!isEmpty(bx, by, true)) {
                if ((arg == null && !validDensitySwaps[info.state][elements[pixelMap[bx][by].element].state]) || pixelMap[bx][by].element == arg) {
                    supportCount++;
                }
            }
        }
        if (supportCount == supportSpots.length) {
            move = false;
        }
    }

    var moved = false;

    if (swapSpots.length > 0) {
        var coords = swapSpots[Math.floor(Math.random() * swapSpots.length)];
        if (pixelMap[coords.x][coords.y] != undefined) {
            swapPixels(pixel, pixelMap[coords.x][coords.y]);
            move = false;
            moved = true;
        }
    }

    if (typeof sticking !== "undefined") {
        move = false;
    }

    // Move First Priority
    if (move) {
        if (move1Spots.length > 0) {
            // While move1Spots is not empty
            while (move1Spots.length > 0) {
                // coords = random item of move1Spots
                var coords = move1Spots[Math.floor(Math.random() * move1Spots.length)];
                var nx = coords.x;
                var ny = coords.y;
                moved = tryMove(pixel, nx, ny, leaveBehind1 || leaveBehind);
                if (moved) {
                    break;
                } else {
                    // remove coords from move1Spots
                    move1Spots.splice(move1Spots.indexOf(coords), 1);
                }
            }
        }
        // Move Second Priority
        if (!moved && move2Spots.length > 0) {
            // While move2Spots is not empty
            while (move2Spots.length > 0) {
                // coords = random item of move2Spots
                var coords = move2Spots[Math.floor(Math.random() * move2Spots.length)];
                var nx = coords.x;
                var ny = coords.y;
                moved = tryMove(pixel, nx, ny, leaveBehind2 || leaveBehind);
                if (moved) {
                    if (typeof C2 !== "undefined" && elements[C2]) {
                        changePixel(pixel, C2);
                    }
                    break;
                } else {
                    // remove coords from move2Spots
                    move2Spots.splice(move2Spots.indexOf(coords), 1);
                }
            }
        }
    }
    doAirDensity(pixel);

    // Change tempearture if needed (unused)
    /*if (info.tempChange != undefined) {
            pixel.temp += info.tempChange;
            pixelTempCheck(pixel);
        }*/

    // Burning
    doBurning(pixel);

    // Heat Transfer
    if (info.insulate !== true) {
        doHeat(pixel);
    }

    // Electricity Transfer
    doElectricity(pixel);

    // Staining
    if (info.stain) {
        doStaining(pixel);
    }
}

function doDefaults(pixel) {
    if (pixel.del) {
        return;
    }
    var info = elements[pixel.element];
    if (info.insulate !== true) {
        doHeat(pixel);
    }
    doAirDensity(pixel);
    doBurning(pixel);
    doElectricity(pixel);
    if (info.stain) {
        doStaining(pixel);
    }
}

function doAirDensity(pixel) {
    if (pixel.del) {
        return;
    }
    var info = elements[pixel.element];
    if (!info.ignoreAir && info.density !== undefined && info.movable === true && info.density < airDensity) {
        // Air Density
        // if the pixel's state + ">" + newPixel's state is in validDensitySwaps, and the pixel's density is larger than the newPixel's density, swap the pixels
        if (validDensitySwaps.gas[info.state]) {
            // chance depending on the difference in density
            if (Math.random() < (airDensity - info.density) / (airDensity + info.density)) {
                tryMove(pixel, pixel.x, pixel.y - 1);
            }
        }
    }
}

function doBurning(pixel) {
    if (pixel.burning) {
        // Burning
        var info = elements[pixel.element];
        pixel.temp += 1;
        pixelTempCheck(pixel);
        for (var i = 0; i < adjacentCoords.length; i++) {
            // Burn adjacent pixels
            var x = pixel.x + adjacentCoords[i][0];
            var y = pixel.y + adjacentCoords[i][1];
            if (!isEmpty(x, y, true)) {
                var newPixel = pixelMap[x][y];
                if (elements[newPixel.element].burn && !newPixel.burning) {
                    if (Math.floor(Math.random() * 100) < elements[newPixel.element].burn) {
                        newPixel.burning = true;
                        newPixel.burnStart = pixelTicks;
                    }
                }
            }
        }

        if (pixelTicks - pixel.burnStart > (info.burnTime || 200) && Math.floor(Math.random() * 100) < (info.burn || 10)) {
            var burnInto = info.burnInto;
            if (burnInto == undefined) {
                burnInto = "fire";
            } else if (burnInto instanceof Array) {
                burnInto = burnInto[Math.floor(Math.random() * burnInto.length)];
            }
            changePixel(pixel, burnInto);
            if (info.fireColor != undefined && burnInto == "fire") {
                pixel.color = pixelColorPick(pixel, info.fireColor);
            } else {
                pixel.color = pixelColorPick(pixel);
            }
        } else if (Math.floor(Math.random() * 100) < 10 && pixel.element != "fire") {
            // Spawn fire
            if (isEmpty(pixel.x, pixel.y - 1)) {
                createPixel(info.fireElement || "fire", pixel.x, pixel.y - 1);
                pixelMap[pixel.x][pixel.y - 1].temp = pixel.temp; //+(pixelTicks - (pixel.burnStart || 0));
                if (info.fireColor != undefined) {
                    pixelMap[pixel.x][pixel.y - 1].color = pixelColorPick(pixelMap[pixel.x][pixel.y - 1], info.fireColor);
                }
            }
            // same for below if top is blocked
            else if (isEmpty(pixel.x, pixel.y + 1)) {
                createPixel(info.fireElement || "fire", pixel.x, pixel.y + 1);
                pixelMap[pixel.x][pixel.y + 1].temp = pixel.temp; //+(pixelTicks - (pixel.burnStart || 0));
                if (info.fireColor != undefined) {
                    pixelMap[pixel.x][pixel.y + 1].color = pixelColorPick(pixelMap[pixel.x][pixel.y + 1], info.fireColor);
                }
            }
        }
    }
}

function doHeat(pixel) {
    // Check right and bottom adjacent pixels
    for (var i = 0; i < biCoords.length; i++) {
        var x = pixel.x + biCoords[i][0];
        var y = pixel.y + biCoords[i][1];
        if (!isEmpty(x, y, true)) {
            var newPixel = pixelMap[x][y];
            // Skip if both temperatures are the same
            if (pixel.temp == newPixel.temp || elements[newPixel.element].insulate == true) {
                continue;
            }
            // Set both pixel temperatures to their average
            var avg = (pixel.temp + newPixel.temp) / 2;
            pixel.temp = avg;
            newPixel.temp = avg;
            pixelTempCheck(pixel);
            pixelTempCheck(newPixel);
        }
    }
}

function doElectricity(pixel) {
    if (pixel.charge) {
        // Check each adjacent pixel, if that pixel's charge is false, set it to the same charge
        for (var i = 0; i < adjacentCoords.length; i++) {
            var x = pixel.x + adjacentCoords[i][0];
            var y = pixel.y + adjacentCoords[i][1];
            if (!isEmpty(x, y, true)) {
                var newPixel = pixelMap[x][y];
                var con = elements[newPixel.element].conduct;
                if (con == undefined) {
                    continue;
                }
                if (Math.random() < con) {
                    // If random number is less than conductivity
                    if (!newPixel.charge && !newPixel.chargeCD) {
                        newPixel.charge = 1;
                        if (elements[newPixel.element].colorOn) {
                            newPixel.color = pixelColorPick(newPixel);
                        }
                    }
                } else if (elements[newPixel.element].insulate != true) {
                    // Otherwise heat the pixel (Resistance simulation)
                    newPixel.temp += pixel.charge / 4;
                    pixelTempCheck(newPixel);
                }
            }
        }
        pixel.charge -= 0.25;
        if (pixel.charge <= 0) {
            delete pixel.charge;
            pixel.chargeCD = 4;
        }
    }
    // Lower charge cooldown
    else if (pixel.chargeCD) {
        pixel.chargeCD -= 1;
        if (pixel.chargeCD <= 0) {
            delete pixel.chargeCD;
            if (elements[pixel.element].colorOn) {
                pixel.color = pixelColorPick(pixel);
            }
        }
    }
}

solidStates = {
    solid: true
};
liquidStates = {
    liquid: true
};
gasStates = {
    gas: true
};

function doStaining(pixel) {
    if (settings["stainoff"]) {
        return;
    }
    var stain = elements[pixel.element].stain;
    if (stain > 0) {
        var newColor = pixel.color.match(/\d+/g);
    } else {
        var newColor = null;
    }

    for (var i = 0; i < adjacentCoords.length; i++) {
        var x = pixel.x + adjacentCoords[i][0];
        var y = pixel.y + adjacentCoords[i][1];
        if (!isEmpty(x, y, true)) {
            var newPixel = pixelMap[x][y];
            if (elements[pixel.element].ignore && elements[pixel.element].ignore.indexOf(newPixel.element) !== -1) {
                continue;
            }
            if ((elements[newPixel.element].id !== elements[pixel.element].id || elements[newPixel.element].stainSelf) && (solidStates[elements[newPixel.element].state] || elements[newPixel.element].id === elements[pixel.element].id)) {
                if (Math.random() < Math.abs(stain)) {
                    if (stain < 0) {
                        if (newPixel.origColor) {
                            newColor = newPixel.origColor;
                        } else {
                            continue;
                        }
                    } else if (!newPixel.origColor) {
                        newPixel.origColor = newPixel.color.match(/\d+/g);
                    }
                    // if newPixel.color doesn't start with rgb, continue
                    if (!newPixel.color.match(/^rgb/)) {
                        continue;
                    }
                    // parse rgb color string of newPixel rgb(r,g,b)
                    var rgb = newPixel.color.match(/\d+/g);
                    if (elements[pixel.element].stainSelf && elements[newPixel.element].id === elements[pixel.element].id) {
                        // if rgb and newColor are the same, continue
                        if (rgb[0] === newColor[0] && rgb[1] === newColor[1] && rgb[2] === newColor[2]) {
                            continue;
                        }
                        var avg = [];
                        for (var j = 0; j < rgb.length; j++) {
                            avg[j] = Math.round(rgb[j] * (1 - Math.abs(stain)) + newColor[j] * Math.abs(stain));
                        }
                    } else {
                        // get the average of rgb and newColor, more intense as stain reaches 1
                        var avg = [];
                        for (var j = 0; j < rgb.length; j++) {
                            avg[j] = Math.floor(rgb[j] * (1 - Math.abs(stain)) + newColor[j] * Math.abs(stain));
                        }
                    }
                    // set newPixel color to avg
                    newPixel.color = "rgb(" + avg.join(",") + ")";
                }
            }
        }
    }
}

function pixelColorPick(pixel, customColor = null) {
    var element = pixel.element;
    var elementInfo = elements[element];
    //if (elementInfo.behavior instanceof Array) {

    if (pixel.charge && elementInfo.colorOn) {
        customColor = elementInfo.colorOn;
    }
    if (customColor != null) {
        if (Array.isArray(customColor)) {
            customColor = customColor[Math.floor(Math.random() * customColor.length)];
        }
        if (customColor.startsWith("#")) {
            customColor = hexToRGB(customColor);
        }
        var rgb = customColor;
    } else {
        var rgb = elements[element].colorObject; // {r, g, b}
        // If rgb is an array, choose a random item
        if (Array.isArray(rgb)) {
            rgb = rgb[Math.floor(Math.random() * rgb.length)];
        }
    }
    // Randomly darken or lighten the RGB color
    var coloroffset = Math.floor(Math.random() * (Math.random() > 0.5 ? -1 : 1) * Math.random() * 15);
    var r = rgb.r + coloroffset;
    var g = rgb.g + coloroffset;
    var b = rgb.b + coloroffset;
    // Make sure the color is within the RGB range
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    var color = "rgb(" + r + "," + g + "," + b + ")";

    /*}
        else {
            var color = elementInfo.color;
            if (Array.isArray(color)) {
                color = color[Math.floor(Math.random() * color.length)];
            }
        }*/
    return color;
}

function pixelTempCheck(pixel) {
    var elementInfo = elements[pixel.element];
    if (pixel.temp < -273.15) {
        // Absolute Zero
        pixel.temp = -273.15;
    }
    // If the pixel's temp >= the elementInfo tempHigh, change pixel.element to elementInfo.stateHigh
    if (pixel.temp >= elementInfo.tempHigh) {
        var result = elementInfo.stateHigh;
        // If result is an array, choose a random item
        if (Array.isArray(result)) {
            result = result[Math.floor(Math.random() * result.length)];
        }
        if (result === null) {
            deletePixel(pixel.x, pixel.y);
            return false;
        } else {
            if (elements[result].customColor) {
                var color = pixel.color;
                changePixel(pixel, result, false);
                pixel.color = color;
            } else {
                changePixel(pixel, result, false);
            }
            if (elementInfo.fireColor && result === "fire") {
                pixel.color = pixelColorPick(pixel, elementInfo.fireColor);
            }
        }
    }
    // If the pixel's temp <= the elementInfo tempLow, change pixel.element to elementInfo.stateLow
    else if (pixel.temp <= elementInfo.tempLow) {
        var result = elementInfo.stateLow;
        // If result is an array, choose a random item
        if (Array.isArray(result)) {
            result = result[Math.floor(Math.random() * result.length)];
        }
        if (result === null) {
            deletePixel(pixel.x, pixel.y);
            return false;
        } else {
            if (elements[result].customColor) {
                var color = pixel.color;
                changePixel(pixel, result, false);
                pixel.color = color;
            } else {
                changePixel(pixel, result, false);
            }
        }
    }
    return true;
}

function getNeighbors(pixel) {
    var neighbors = [];
    var x = pixel.x;
    var y = pixel.y;
    if (!isEmpty(x - 1, y, true)) {
        neighbors.push(pixelMap[x - 1][y]);
    }
    if (!isEmpty(x + 1, y, true)) {
        neighbors.push(pixelMap[x + 1][y]);
    }
    if (!isEmpty(x, y - 1, true)) {
        neighbors.push(pixelMap[x][y - 1]);
    }
    if (!isEmpty(x, y + 1, true)) {
        neighbors.push(pixelMap[x][y + 1]);
    }
    return neighbors;
}

function circleCoords(x, y, radius) {
    var coords = [];
    for (var i = x - radius; i <= x + radius; i++) {
        for (var j = y - radius; j <= y + radius; j++) {
            if (Math.pow(i - x, 2) + Math.pow(j - y, 2) <= Math.pow(radius, 2)) {
                coords.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    return coords;
}

function lineCoords(x1, y1, x2, y2, width) {
    // use the coordinates and the width to return a list of coordinates in a pixel line
    var coords = [];
    var x = x1;
    var y = y1;
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = x1 < x2 ? 1 : -1;
    var sy = y1 < y2 ? 1 : -1;
    var err = dx - dy;
    while (true) {
        coords.push([x, y]);
        if (x == x2 && y == y2) {
            break;
        }
        var e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x += sx;
        }
        if (e2 < dx) {
            err += dx;
            y += sy;
        }
    }
    var newcoords = [];
    // loop through mouseRange(x,y,width) of each coordinate and add to coords if not already in coords
    for (var i = 0; i < coords.length; i++) {
        var x = coords[i][0];
        var y = coords[i][1];
        var range = mouseRange(x, y, width);
        for (var j = 0; j < range.length; j++) {
            var x2 = range[j][0];
            var y2 = range[j][1];
            if (!coords.indexOf([x2, y2]) > -1) {
                newcoords.push([x2, y2]);
            }
        }
    }
    return newcoords;
}

function drawCirclePixels(x, y, radius) {
    var coords = circleCoords(x, y, radius);
    for (var i = 0; i < coords.length; i++) {
        if (isEmpty(coords[i].x, coords[i].y)) {
            createPixel(currentElement, coords[i].x, coords[i].y);
        }
    }
}
// pixelMap is a 2D array of pixels.
// function to get a new 2D array of pixels from a rectangular area
function selection(x1, y1, x2, y2) {
    var selection = [];
    for (var i = x1; i <= x2; i++) {
        selection[i] = [];
        for (var j = y1; j <= y2; j++) {
            selection[i][j] = pixelMap[i][j];
        }
    }
    return selection;
}
unicodeSkips = {
    0: 65, // null -> 0
    58: 65, // : -> A
    91: 97, // [ -> a
    123: 192, // { -> À
    215: 216, // × -> Ø
    247: 248, // ÷ -> ø
    688: 880,
    884: 886,
    888: 891,
    894: 895,
    896: 902,
    903: 904,
    907: 908,
    909: 910,
    930: 931,
    1155: 1162,
    1328: 1329,
    1367: 1376,
    1417: 1488,
    1514: 12448,
    12544: 13312,
};
// version;codes;pixels;
function generateSave(pixelarray = null) {
    if (pixelarray == null) {
        pixelarray = pixelMap;
    }
    var n = 65;
    var codes = "";
    var codelist = {
        " ": " "
    };
    var save = "";
    // Add char*the number of consecutive pixels with the same element
    var lastelem = "";
    var samecount = 0;
    for (var i = 0; i < pixelarray.length; i++) {
        for (var j = 0; j < pixelarray[i].length; j++) {
            var pixel = pixelarray[i][j];
            if (pixel) {
                if (codelist[pixel.element] == undefined) {
                    var char = String.fromCharCode(n);
                    codelist[pixel.element] = char;
                    codes += char + "=" + pixel.element + ",";
                    n++;
                }
                if (pixel.element == lastelem) {
                    samecount++;
                } else {
                    if (samecount > 0) {
                        save += codelist[lastelem] + "*" + samecount;
                    }
                    samecount = 1;
                    lastelem = pixel.element;
                }
            } else {
                // use " " for empty pixels
                if (lastelem == " ") {
                    samecount++;
                } else {
                    if (samecount > 0) {
                        save += codelist[lastelem] + "*" + samecount;
                    }
                    samecount = 1;
                    lastelem = " ";
                }
            }
        }
        save += "|";
    }
    // save = codes(without the last character) + save
    save = codes.slice(0, -1) + ";" + save;
    return save;
}

function explodeAt(x, y, radius, fire = "fire") {
    // if fire contains , split it into an array
    if (fire.indexOf(",") !== -1) {
        fire = fire.split(",");
    }
    var coords = circleCoords(x, y, radius);
    var power = radius / 10;
    //for (var p = 0; p < Math.round(radius/10+1); p++) {
    for (var i = 0; i < coords.length; i++) {
        // damage value is based on distance from x and y
        var damage = Math.random() + Math.floor(Math.sqrt(Math.pow(coords[i].x - x, 2) + Math.pow(coords[i].y - y, 2))) / radius;
        // invert
        damage = 1 - damage;
        if (damage < 0) {
            damage = 0;
        }
        damage *= power;
        if (isEmpty(coords[i].x, coords[i].y)) {
            // create smoke or fire depending on the damage if empty
            if (damage < 0.02) {} // do nothing
            else if (damage < 0.2) {
                createPixel("smoke", coords[i].x, coords[i].y);
            } else {
                // if fire is an array, choose a random item
                if (Array.isArray(fire)) {
                    createPixel(fire[Math.floor(Math.random() * fire.length)], coords[i].x, coords[i].y);
                } else {
                    createPixel(fire, coords[i].x, coords[i].y);
                }
            }
        } else if (!outOfBounds(coords[i].x, coords[i].y)) {
            // damage the pixel
            var pixel = pixelMap[coords[i].x][coords[i].y];
            var info = elements[pixel.element];
            if (info.hardness) {
                // lower damage depending on hardness(0-1)
                if (info.hardness < 1) {
                    damage = damage * ((1 - info.hardness) * 10);
                } else {
                    damage = 0;
                }
            }
            if (damage > 0.9) {
                if (Array.isArray(fire)) {
                    var newfire = fire[Math.floor(Math.random() * fire.length)];
                } else {
                    var newfire = fire;
                }
                changePixel(pixel, newfire);
                continue;
            } else if (damage > 0.25) {
                if (info.breakInto) {
                    // if it is an array, choose a random item, else just use the value
                    if (Array.isArray(info.breakInto)) {
                        var result = info.breakInto[Math.floor(Math.random() * info.breakInto.length)];
                    } else {
                        var result = info.breakInto;
                    }
                    // change the pixel to the result
                    changePixel(pixel, result);
                    continue;
                } else {
                    if (Array.isArray(fire)) {
                        var newfire = fire[Math.floor(Math.random() * fire.length)];
                    } else {
                        var newfire = fire;
                    }
                    changePixel(pixel, newfire);
                    continue;
                }
            }
            if (damage > 0.75 && info.burn) {
                pixel.burning = true;
                pixel.burnStart = pixelTicks;
            }
            pixel.temp += damage * radius * power;
            pixelTempCheck(pixel);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawPixels(forceTick = false) {
    // newCurrentPixels = shuffled currentPixels
    var newCurrentPixels = currentPixels.slice();
    var pixelsFirst = [];
    var pixelsLast = [];
    if (!paused || forceTick) {
        shuffleArray(newCurrentPixels);
    }
    /*{newCurrentPixels.sort(function(p) { // shuffle the pixels but keep elements[p.element].isGas last
            return 0.5 - Math.random();
        })} // shuffle the pixels if not paused*/
    for (var i = 0; i < newCurrentPixels.length; i++) {
        pixel = newCurrentPixels[i];
        //if (pixelMap[pixel.x][pixel.y] == undefined || currentPixels.indexOf(pixel) == -1) {continue}
        if (pixel.del) {
            continue;
        }
        if (!paused || forceTick) {
            if (elements[pixel.element].tick) {
                // Run tick function if it exists
                elements[pixel.element].tick(pixel);
            }
            if (pixel.del) {
                continue;
            }
            if (elements[pixel.element].behavior) {
                // Parse behavior if it exists
                pixelTick(pixel);
            }
        }
        if (elements[pixel.element].isGas) {
            pixelsLast.push(pixel);
        } else {
            pixelsFirst.push(pixel);
        }
    }
    adjacentCoords = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    biCoords = [
        [0, 1],
        [1, 0],
    ];
    // Draw the current pixels
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var pixelDrawList = pixelsFirst.concat(pixelsLast);
    for (var i = 0; i < pixelDrawList.length; i++) {
        pixel = pixelDrawList[i];
        if (pixelMap[pixel.x][pixel.y] == undefined) {
            continue;
        }
        if (view === null || view === 3) {
            ctx.fillStyle = pixel.color;
        } else if (view === 2) {
            // thermal view
            // set the color to pixel.temp, from hottest at 0 hue to coldest 225 hue, with the minimum being -273, max being 6000
            var temp = pixel.temp;
            if (temp < -273) {
                temp = -273;
            }
            if (temp > 6000) {
                temp = 6000;
            }
            var hue = 225 - (temp / 6000) * 225;
            if (hue < 0) {
                hue = 0;
            }
            if (hue > 225) {
                hue = 225;
            }
            ctx.fillStyle = "hsl(" + hue + ",100%,50%)";
        } else if (view === 4) {
            // smooth view, average of surrounding pixels
            var colorlist = [];
            // check adjacent coords on the pixelMap, add the color to the list if the pixel is not empty and the color indexOf "rgb" is not -1
            for (var j = 0; j < biCoords.length; j++) {
                var x = pixel.x + biCoords[j][0];
                var y = pixel.y + biCoords[j][1];
                if (isEmpty(x, y, true) || elements[pixelMap[x][y].element].state !== elements[pixel.element].state) {
                    continue;
                }
                var color = pixelMap[x][y].color;
                if (color.indexOf("rgb") !== -1) {
                    colorlist.push(color.match(/\d+/g));
                }
            }
            if (colorlist.length === 0) {
                ctx.fillStyle = pixel.color;
            } else {
                ctx.fillStyle = averageRGB(colorlist);
            }
        }
        if ((view === null || view === 4) && elements[pixel.element].state === "gas") {
            ctx.globalAlpha = 0.5;
            ctx.fillRect((pixel.x - 1) * pixelSize, pixel.y * pixelSize, pixelSize * 3, pixelSize);
            ctx.fillRect(pixel.x * pixelSize, (pixel.y - 1) * pixelSize, pixelSize, pixelSize * 3);
            ctx.globalAlpha = 1;
        } else {
            // draw the pixel (default)
            ctx.fillRect(pixel.x * pixelSize, pixel.y * pixelSize, pixelSize, pixelSize);
        }
        if (pixel.charge && view !== 2) {
            // Yellow glow on charge
            if (!elements[pixel.element].colorOn) {
                ctx.fillStyle = "rgba(255,255,0,0.5)";
                ctx.fillRect(pixel.x * pixelSize, pixel.y * pixelSize, pixelSize, pixelSize);
            }
        }
    }
    if (!paused || forceTick) {
        pixelTicks++;
    }
}

function tick() {
    // If mouseIsDown, do mouseAction
    if (mouseIsDown && !shaping) {
        mouseAction(null, mousePos.x, mousePos.y);
    }
    // Get the canvas
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    // Clear the canvas
    if (!settings["bg"]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = settings["bg"];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (!paused && settings.events) {
        doRandomEvents();
    }

    drawPixels();

    if (shaping) {
        if (shaping === 1) {
            // Draw a white line from shapeStart.x to shapeStart.y
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.moveTo(shapeStart.x * pixelSize + pixelSizeHalf, shapeStart.y * pixelSize + pixelSizeHalf);
            ctx.lineTo(mousePos.x * pixelSize + pixelSizeHalf, mousePos.y * pixelSize + pixelSizeHalf);
            ctx.stroke();
        }
    }

    if (currentElement == "pick" || currentElement == "lookup") {
        var mouseOffset = 0;
    } else if (elements[currentElement].maxSize < mouseSize) {
        var mouseOffset = Math.trunc(elements[currentElement].maxSize / 2);
    } else {
        var mouseOffset = Math.trunc(mouseSize / 2);
    }
    var topLeft = [mousePos.x - mouseOffset, mousePos.y - mouseOffset];
    var bottomRight = [mousePos.x + mouseOffset, mousePos.y + mouseOffset];
    // Draw a rectangle around the mouse
    ctx.strokeStyle = "white";
    ctx.strokeRect(topLeft[0] * pixelSize, topLeft[1] * pixelSize, (bottomRight[0] - topLeft[0] + 1) * pixelSize, (bottomRight[1] - topLeft[1] + 1) * pixelSize);
    updateStats();
    //ticks ++;
}

currentElement = "sand";
currentColor = "#ff0000";
mouseIsDown = false;
isMobile = false;
mouseType = null;

function mouseClick(e) {
    if (showingMenu && currentElement != "lookup") {
        closeMenu();
        return false;
    }
    mouseIsDown = true;
    lastPlace = 0;
    if (e.button === 0) {
        mouseType = "left";
    } else if (e.button === 2) {
        mouseType = "right";
    } else if (e.button === 1) {
        mouseType = "middle";
    } else {
        mouseType = "left";
    }
    if (shiftDown && e.button !== 1 && !((elements[currentElement].tool || elements[currentElement].category === "tools") && mouseType === "left")) {
        shaping = 1;
        shapeStart = mousePos;
    }
    mouseMove(e);
    return false;
}

function mouseUp(e) {
    mouseIsDown = false;
    if (shaping) {
        if (shaping === 1) {
            // Draw a line
            mouseAction(null, mousePos.x, mousePos.y, shapeStart);
        }
        shaping = 0;
        shapeStart = null;
    }
}

function getMousePos(canvas, evt) {
    // If evt.touches is defined, use the first touch
    if (evt.touches) {
        evt.preventDefault();
        evt = evt.touches[0];
        isMobile = true;
    }
    var rect = canvas.getBoundingClientRect();
    return {
        // Round to nearest pixel
        x: Math.round((evt.clientX - rect.left) / pixelSize - 0.5),
        y: Math.round((evt.clientY - rect.top) / pixelSize - 0.5),
    };
}

function mouseMove(e) {
    if (mouseIsDown && !shaping) {
        mouseAction(e);
    } else {
        var canvas = document.getElementById("game");
        lastPos = mousePos;
        mousePos = getMousePos(canvas, e);
    }
}

function mouseAction(e, mouseX, mouseY, startPos) {
    if (mouseType == "left") {
        mouse1Action(e, mouseX, mouseY, startPos);
    } else if (mouseType == "right") {
        mouse2Action(e, mouseX, mouseY, startPos);
    } else if (mouseType == "middle") {
        mouseMiddleAction(e, mouseX, mouseY);
    }
}
mouseSize = 5;
mousePos = {
    x: 0,
    y: 0
};
lastPos = mousePos;
lastPlace = 0;

function mouseRange(mouseX, mouseY, size) {
    var coords = [];
    size = size || mouseSize;
    if (elements[currentElement].maxSize < mouseSize) {
        var mouseOffset = Math.trunc(elements[currentElement].maxSize / 2);
    } else {
        var mouseOffset = Math.trunc(size / 2);
    }
    var topLeft = [mouseX - mouseOffset, mouseY - mouseOffset];
    var bottomRight = [mouseX + mouseOffset, mouseY + mouseOffset];
    // Starting at the top left, go through each pixel
    for (var x = topLeft[0]; x <= bottomRight[0]; x++) {
        for (var y = topLeft[1]; y <= bottomRight[1]; y++) {
            // If the pixel is empty, add it to coords
            coords.push([x, y]);
        }
    }
    return coords;
}

function mouse1Action(e, mouseX = undefined, mouseY = undefined, startPos) {
    if (currentElement == "erase") {
        mouse2Action(e, mouseX, mouseY);
        return;
    } else if (currentElement == "pick") {
        mouseMiddleAction(e, mouseX, mouseY);
        return;
    }
    // If x and y are undefined, get the mouse position
    if (mouseX == undefined && mouseY == undefined) {
        var canvas = document.getElementById("game");
        var ctx = canvas.getContext("2d");
        lastPos = mousePos;
        mousePos = getMousePos(canvas, e);
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;
    }
    if (currentElement == "lookup") {
        if (!isEmpty(mouseX, mouseY, true)) {
            showInfo(pixelMap[mouseX][mouseY].element);
        }
        return;
    }
    var cooldowned = false;
    if (mouseSize === 1 && elements[currentElement].cooldown) {
        if (pixelTicks - lastPlace < elements[currentElement].cooldown) {
            return;
        }
        cooldowned = true;
    }
    lastPlace = pixelTicks;
    startPos = startPos || lastPos;
    if (!(isMobile || (cooldowned && startPos.x === lastPos.x && startPos.y === lastPos.y) || elements[currentElement].tool || elements[currentElement].category === "tools")) {
        var coords = lineCoords(startPos.x, startPos.y, mouseX, mouseY);
    } else {
        var coords = mouseRange(mouseX, mouseY);
    }
    var element = elements[currentElement];
    var mixList = [];
    // For each x,y in coords
    for (var i = 0; i < coords.length; i++) {
        var x = coords[i][0];
        var y = coords[i][1];

        // If element name is heat or cool
        if (currentElement === "heat" || currentElement === "cool") {
            if (!isEmpty(x, y, false)) {
                if (outOfBounds(x, y)) {
                    continue;
                }
                var pixel = pixelMap[x][y];
                if (shiftDown) {
                    pixel.temp += element.temp + Math.random() * element.temp * 1.5 * 20;
                } else {
                    pixel.temp += element.temp + Math.random() * element.temp * 1.5;
                }
                pixelTempCheck(pixel);
            }
        } else if (currentElement === "mix") {
            if (!isEmpty(x, y, true)) {
                var pixel = pixelMap[x][y];
                if ((pixel.element != "fire" && pixel.element != "smoke") || shiftDown) {
                    mixList.push(pixel);
                }
            }
        } else if (currentElement === "shock") {
            if (!isEmpty(x, y, true)) {
                // One loop that repeats 5 times if shiftDown else 1 time
                for (var j = 0; j < (shiftDown ? 5 : 1); j++) {
                    var pixel = pixelMap[x][y];
                    var con = elements[pixel.element].conduct;
                    if (con == undefined) {
                        continue;
                    }
                    if (Math.random() < con) {
                        // If random number is less than conductivity
                        if (!pixel.charge && !pixel.chargeCD) {
                            pixel.charge = 1;
                            if (elements[pixel.element].colorOn) {
                                pixel.color = pixelColorPick(pixel);
                            }
                        }
                    } else if (elements[pixel.element].insulate != true) {
                        // Otherwise heat the pixel (Resistance simulation)
                        pixel.temp += 0.25;
                        pixelTempCheck(pixel);
                    }
                }
            }
        } else if (currentElement === "random" && isEmpty(x, y)) {
            // create pixel with random element from "randomChoices" array
            currentPixels.push(new Pixel(x, y, randomChoices[Math.floor(Math.random() * randomChoices.length)]));
        } else if (elements[currentElement].tool) {
            // run the tool function on the pixel
            if (!isEmpty(x, y, true)) {
                var pixel = pixelMap[x][y];
                // if the current element has an ignore property and the pixel's element is in the ignore property, don't do anything
                if (elements[currentElement].ignore && elements[currentElement].ignore.indexOf(pixel.element) != -1) {
                    continue;
                }
                elements[currentElement].tool(pixel);
            }
        } else if (mode === "replace") {
            if (outOfBounds(x, y)) {
                continue;
            }
            // Remove pixel at position from currentPixels
            var index = currentPixels.indexOf(pixelMap[x][y]);
            if (index > -1) {
                currentPixels.splice(index, 1);
            }
            if (currentElement == "random") {
                currentPixels.push(new Pixel(x, y, randomChoices[Math.floor(Math.random() * randomChoices.length)]));
            } else {
                currentPixels.push(new Pixel(x, y, currentElement));
            }
            if (elements[currentElement].customColor) {
                pixelMap[x][y].color = pixelColorPick(currentElement, currentColor);
            }
        } else if (isEmpty(x, y)) {
            currentPixels.push(new Pixel(x, y, currentElement));
            if (elements[currentElement].customColor) {
                pixelMap[x][y].color = pixelColorPick(currentElement, currentColor);
            }
        }
    }
    if (currentElement == "mix") {
        // 1. repeat for each pixel in mixList
        // 2. choose 2 random pixels and swap their x and y
        // 3. remove pixel from mixList
        for (var i = 0; i < mixList.length; i++) {
            var pixel1 = mixList[Math.floor(Math.random() * mixList.length)];
            var pixel2 = mixList[Math.floor(Math.random() * mixList.length)];
            swapPixels(pixel1, pixel2);
            mixList.splice(mixList.indexOf(pixel1), 1);
            mixList.splice(mixList.indexOf(pixel2), 1);
        }
    }
}

function mouse2Action(e, mouseX = undefined, mouseY = undefined, startPos) {
    // Erase pixel at mouse position
    if (mouseX == undefined && mouseY == undefined) {
        var canvas = document.getElementById("game");
        var ctx = canvas.getContext("2d");
        lastPos = mousePos;
        mousePos = getMousePos(canvas, e);
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;
    }
    // If the current element is "pick" or "lookup", coords = [mouseX,mouseY]
    if (currentElement == "pick" || currentElement == "lookup") {
        var coords = [
            [mouseX, mouseY]
        ];
    } else if (!isMobile) {
        startPos = startPos || lastPos;
        var coords = lineCoords(startPos.x, startPos.y, mouseX, mouseY);
    } else {
        var coords = mouseRange(mouseX, mouseY);
    }
    // For each x,y in coords
    for (var i = 0; i < coords.length; i++) {
        var x = coords[i][0];
        var y = coords[i][1];

        if (!isEmpty(x, y)) {
            if (outOfBounds(x, y)) {
                continue;
            }
            var pixel = pixelMap[x][y];
            delete pixelMap[x][y];
            // Remove pixel from currentPixels
            for (var j = 0; j < currentPixels.length; j++) {
                if (currentPixels[j].x == x && currentPixels[j].y == y) {
                    currentPixels.splice(j, 1);
                    break;
                }
            }
        }
    }
}

function mouseMiddleAction(e, mouseX = undefined, mouseY = undefined) {
    if (mouseX == undefined && mouseY == undefined) {
        var canvas = document.getElementById("game");
        var ctx = canvas.getContext("2d");
        lastPos = mousePos;
        mousePos = getMousePos(canvas, e);
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;
    }
    if (!isEmpty(mouseX, mouseY, true)) {
        var pixel = pixelMap[mouseX][mouseY];
        selectElement(pixel.element);
        selectCategory(elements[pixel.element].category);
        mouseIsDown = false;
    }
}
lastScroll = new Date().getTime();

function wheelHandle(e) {
    e.preventDefault();
    // check if scroll is within the last 25ms
    if (new Date().getTime() - lastScroll < 25) {
        return;
    }
    lastScroll = new Date().getTime();
    var deltaY = e.deltaY;
    if (deltaY > 0) {
        deltaY = 1;
    } else {
        deltaY = -1.5;
    }
    mouseSize += Math.round(deltaY * 1.5);
    if (mouseSize < 1) {
        mouseSize = 1;
    }
    if (mouseSize > (height > width ? height : width)) {
        mouseSize = height > width ? height : width;
    }
}

function chooseElementPrompt() {
    var e = prompt("Enter the element's ID");
    if (!e) {
        return;
    }
    // replace spaces with underscores
    e = e.replace(/ /g, "_");
    es = mostSimilarElement(e);
    if (es !== null) {
        selectElement(es);
        if (elements[es].hidden === false) {
            selectCategory(elements[es].category);
        }
    } else {
        alert('Element "' + e + '" not found');
    }
}

function togglePause() {
    paused = !paused;
    if (paused) {
        document.getElementById("pauseButton").setAttribute("on", "true");
    } else {
        document.getElementById("pauseButton").setAttribute("on", "false");
    }
}

function doFrame() {
    if (!paused) {
        paused = true;
        document.getElementById("pauseButton").setAttribute("on", "true");
    }
    drawPixels(true);
}

function selectElement(element) {
    var e1 = document.getElementById("elementButton-" + currentElement);
    if (e1 != null) {
        e1.setAttribute("current", "false");
    }
    currentElement = element;
    var e2 = document.getElementById("elementButton-" + element);
    if (!e2) {
        return;
    }
    e2.setAttribute("current", "true");
    // if e2 has the class "notify", remove it
    if (e2.classList.contains("notify")) {
        e2.classList.remove("notify");
    }
    if (elements[element].customColor) {
        // show the colorSelector
        document.getElementById("colorSelector").style.display = "block";
    } else {
        // hide the colorSelector
        document.getElementById("colorSelector").style.display = "none";
    }
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0) costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function mostSimilarElement(s) {
    var max = 0;
    var maxElement = "";
    for (var e in elements) {
        var sim = similarity(e, s);
        if (sim > max) {
            max = sim;
            maxElement = e;
        }
    }
    if (max < 0.5) {
        return null;
    }
    return maxElement;
}

function selectCategory(category) {
    var categoryButton = document.getElementById("categoryButton-" + category);
    if (!categoryButton) {
        return;
    }
    // if categoryButton has the class "notify", remove it
    if (categoryButton.classList.contains("notify")) {
        categoryButton.classList.remove("notify");
    }
    var categoryDiv = document.getElementById("category-" + category);
    // Show this categoryDiv and hide all others
    for (var i = 0; i < categoryButton.parentNode.children.length; i++) {
        var e = categoryDiv.parentNode.children[i];
        e.style.display = "none";
        // Set the categoryButton of categoryDiv's category attribute to current=false
        document.getElementById("categoryButton-" + e.getAttribute("category")).setAttribute("current", false);
    }
    categoryDiv.style.display = "block";
    categoryButton.setAttribute("current", true);
}
viewKey = {
    2: "thermal",
    3: "basic",
    4: "smooth",
};

function setView(n) {
    if (n <= 4 && n > 1) {
        // range of number keys with valid views
        view = n;
    } else {
        // reset view
        view = null;
    }
}

function createElementButton(element) {
    var button = document.createElement("button");
    // if the element has the attribute "name", use that as the button's text, otherwise use the element with underscores replaced by spaces
    if (elements[element].name) {
        button.innerHTML = elements[element].name;
    } else {
        button.innerHTML = element.replace(/_/g, " ");
    }
    //capitalize first letter of each word
    button.innerHTML = button.innerHTML
        .replace(".", "   ")
        .replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
        .replace("   ", ".")
        .replace(/ /g, "");
    //set attribute of element to the element
    button.setAttribute("element", element);
    button.setAttribute("current", "false");
    button.className = "elementButton";
    //color of the element
    // if the element color is an array, make a gradient background color, otherwise, set the background color to the element color
    if (elements[element].color instanceof Array) {
        button.style.backgroundImage = "linear-gradient(to bottom right, " + elements[element].color.join(", ") + ")";
        // choose the middlemost item in array
        var colorObject = elements[element].colorObject[Math.floor(elements[element].colorObject.length / 2)];
        if ((colorObject.r + colorObject.g + colorObject.b) / 3 > 200) {
            button.className += " bright";
        }
    } else {
        button.style.background = elements[element].color;
        var colorObject = elements[element].colorObject;
        if ((colorObject.r + colorObject.g + colorObject.b) / 3 > 200) {
            button.className += " bright";
        }
    }
    button.id = "elementButton-" + element;
    button.onclick = function() {
        selectElement(this.getAttribute("element"));
    };
    // on right click, show the element's info
    button.oncontextmenu = function(e) {
        e.preventDefault();
        closeMenu();
        showInfo(this.getAttribute("element"));
    };
    if (!elements[element].category) {
        elements[element].category = "other";
    }
    var categoryDiv = document.getElementById("category-" + elements[element].category);
    if (categoryDiv === null) {
        createCategoryDiv(elements[element].category);
        categoryDiv = document.getElementById("category-" + elements[element].category);
        categoryDiv.style.display = "none";
    }
    categoryDiv.appendChild(button);
}

function createCategoryDiv(category) {
    categoryButton = document.createElement("button");
    categoryButton.id = "categoryButton-" + category;
    categoryButton.innerHTML = category
        .replace(".", "   ")
        .replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
        .replace("   ", ".")
        .replace(/ /g, "");
    categoryButton.className = "categoryButton";
    categoryButton.setAttribute("category", category);
    categoryButton.onclick = function() {
        selectCategory(this.getAttribute("category"));
    };
    document.getElementById("categoryControls").appendChild(categoryButton);
    var categoryDiv = document.createElement("div");
    //categoryDiv.innerHTML = "<span class='categoryName'>"+category+"</span>";
    categoryDiv.setAttribute("id", "category-" + category);
    categoryDiv.setAttribute("category", category);
    categoryDiv.setAttribute("class", "category");
    document.getElementById("elementControls").appendChild(categoryDiv);
}

function checkUnlock(element) {
    if (elements[element].hidden && !settings.unlocked[element] && elements[element].category !== "molten") {
        settings.unlocked[element] = true;
        if (settings.unhide === 2) {
            createElementButton(element);
            var categoryButton = document.querySelector(".categoryButton[current='true']");
            var currentCategory = categoryButton.getAttribute("category");
            if (currentCategory !== elements[element].category) {
                document.getElementById("categoryButton-" + elements[element].category).classList.add("notify");
            }
            // add notify to the elementButton of the element
            document.getElementById("elementButton-" + element).classList.add("notify");
        }
        saveSettings();
    }
}

worldgentypes = {
    // layers: [minimum y from bottom, element, chance per pixel]
    grass: {
        layers: [
            [0.85, "grass"],
            [0.5, "dirt"],
            [0.05, "rock"],
            [0, "basalt"],
        ],
    },
    flower_field: {
        layers: [
            [0.85, "flower_seed", 0.1],
            [0.85, "grass"],
            [0.5, "dirt"],
            [0.05, "rock"],
            [0, "basalt"],
        ],
    },
    wheat_field: {
        layers: [
            [0.95, "wheat_seed"],
            [0.5, "mud"],
            [0.25, "rock"],
            [0, "basalt"],
        ],
        baseHeight: 0.35,
    },
    dirt: {
        layers: [
            [0.5, "dirt"],
            [0.05, "rock"],
            [0, "basalt"],
        ],
    },
    forest: {
        layers: [
            [0.85, "sapling", 0.1],
            [0.85, "grass"],
            [0.5, "dirt"],
            [0.05, "rock"],
            [0, "basalt"],
        ],
        baseHeight: 0.25,
    },
    jungle: {
        layers: [
            [0.85, "sapling", 0.1],
            [0.85, "grass"],
            [0.5, "mud"],
            [0.05, "gravel"],
            [0, "basalt"],
        ],
        baseHeight: 0.25,
    },
    ocean: {
        layers: [
            [0.9, "fish", 0.1],
            [0.9, "snail", 0.01],
            [0.9, "algae", 0.4],
            [0.25, "water"],
            [0.1, "clay", 0.1],
            [0.1, "gravel", 0.2],
            [0.1, "wet_sand"],
            [0.03, "gravel", 0.5],
            [0.03, "rock"],
            [0, "basalt"],
        ],
    },
    rock: {
        layers: [
            [0, "rock"]
        ],
        baseHeight: 0.33,
    },
    volcanic: {
        layers: [
            [0.3, "basalt"],
            [0.2, "basalt", 0.5],
            [0, "magma"],
        ],
        baseHeight: 0.4,
        temperature: 950,
    },
    desert: {
        layers: [
            [0.65, "sand"],
            [0.55, "bone", 0.03],
            [0.5, "dirt"],
            [0.05, "rock"],
            [0, "basalt"],
        ],
        temperature: 38,
    },
};

function clearAll() {
    currentPixels = [];
    pixelMap = [];
    for (var i = 0; i < width; i++) {
        pixelMap[i] = [];
        for (var j = 0; j < height; j++) {
            pixelMap[i][j] = undefined;
        }
    }
    pixelTicks = 0;
    if (settings["worldgen"] && settings["worldgen"] != "off") {
        worldGen(worldgentypes[settings["worldgen"]]);
    }
}

function mean(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function generateTerrainHeights(width, heightVariance, complexity) {
    // array of (width) 0s
    var newHeights = [];
    for (var i = 0; i < width; i++) {
        newHeights[i] = 0;
    }
    // do midpoint displacement (complexity) times on newHeights
    for (var i = 0; i < complexity; i++) {
        var newHeights2 = [];
        for (var j = 0; j < width; j++) {
            newHeights2[j] = 0;
        }
        for (var j = 0; j < width; j++) {
            var x = j;
            var y = newHeights[j];
            var y2 = y + Math.random() * heightVariance - heightVariance / 2;
            newHeights2[x] = y2;
        }
        newHeights = newHeights2;
    }
    return newHeights;
}

function worldGen(worldtype) {
    var complexity = worldtype.complexity || 20;
    var heightVariance = worldtype.heightVariance || 0.5;
    var baseHeight = height - height * (worldtype.baseHeight || 0.5);
    var layers = worldtype.layers || {
        0: "rock"
    };
    var yoffsets = generateTerrainHeights(width, heightVariance, complexity);
    // 2D world vertical generator
    for (var x = 1; x < width; x++) {
        var yoffset = yoffsets[x];
        var worldHeight = baseHeight + yoffset;
        for (var y = 0; y < height; y++) {
            // Change element type based on y, from grass > dirt > rock > basalt
            if (y > worldHeight) {
                // distance from the bottom of worldHeight
                var frombottom = worldHeight - (y - worldHeight);
                var element = null;
                for (var i in layers) {
                    var layer = layers[i];
                    if (layer[0] == 0 && yoffset < 0) {
                        layer[0] = yoffset;
                    }
                    if (frombottom > worldHeight * layer[0] && Math.random() < (layer[2] || 1)) {
                        if (elements[layer[1]]) {
                            element = layer[1];
                            break;
                        }
                    }
                }
                if (element) {
                    createPixel(element, x, y);
                    if (worldtype.temperature) {
                        pixelMap[x][y].temp = worldtype.temperature;
                    }
                }
            }
        }
    }
}

randomEvents = {
    falling_pixel: function() {
        // random x between 1 and width-1
        var x = Math.floor(Math.random() * (width - 1)) + 1;
        // random y between 1 and 6
        var y = Math.floor(Math.random() * 6) + 1;
        if (isEmpty(x, y)) {
            // random element from randomEventChoices.falling_pixel
            var element = randomEventChoices.falling_pixel[Math.floor(Math.random() * randomEventChoices.falling_pixel.length)];
            // if element is an array, choose a random element from the array
            if (Array.isArray(element)) {
                element = element[Math.floor(Math.random() * element.length)];
            }
            createPixel(element, x, y);
        }
    },
    element_circle: function() {
        // random x between 1 and width-1
        var x = Math.floor(Math.random() * (width - 1)) + 1;
        // random y between 1 and height-1
        var y = Math.floor(Math.random() * (height - 1)) + 1;
        // random radius between 3 and 7
        var radius = Math.floor(Math.random() * 4) + 3;
        // random element from randomEventChoices.element_circle
        var element = randomEventChoices.element_circle[Math.floor(Math.random() * randomEventChoices.element_circle.length)];
        var coords = circleCoords(x, y, radius);
        for (var i = 0; i < coords.length; i++) {
            var coord = coords[i];
            if (isEmpty(coord.x, coord.y)) {
                createPixel(element, coord.x, coord.y);
            }
        }
    },
    explosion: function() {
        // similar but do explodeAt(x,y,radius,element)
        var x = Math.floor(Math.random() * (width - 1)) + 1;
        var y = Math.floor(Math.random() * (height - 1)) + 1;
        var radius = Math.floor(Math.random() * 4) + 3;
        var element = randomEventChoices.explosion[Math.floor(Math.random() * randomEventChoices.explosion.length)];
        explodeAt(x, y, radius, element);
    },
    temperature: function() {
        // set the temperature in a random circle to a random value between -200 and 200
        var x = Math.floor(Math.random() * (width - 1)) + 1;
        var y = Math.floor(Math.random() * (height - 1)) + 1;
        var radius = Math.floor(Math.random() * 4) + 3;
        var temp = Math.floor(Math.random() * 400) - 200;
        var coords = circleCoords(x, y, radius);
        for (var i = 0; i < coords.length; i++) {
            var coord = coords[i];
            if (!outOfBounds(coord.x, coord.y) && !isEmpty(coord.x, coord.y)) {
                pixelMap[coord.x][coord.y].temp += temp;
            }
        }
    },
};
randomEventChoices = {
    falling_pixel: ["fireball", "fallout", "seeds", ["bomb", "cold_bomb", "cluster_bomb"], "human", "gold_coin", "feather", "glitter", "homunculus", "egg", "frozen_frog", "sapling", "smoke_grenade"],
    element_circle: ["carbon_dioxide", "primordial_soup", "fly", "steam", "oxygen", "dye", "yolk", "sugar", "bee", "firefly", "tadpole", "flash", "foam"],
    explosion: [
        "fire",
        "cold_fire",
        "methane",
        "electric",
        "light",
        "laser",
        "radiation",
        "plasma",
        "liquid_nitrogen",
        "liquid_helium",
        "liquid_neon",
        "acid_gas",
        "fw_ember",
        "malware",
        ["stench", "plague"],
        ["firework", "fire", "fire"],
        "bubble",
    ],
};

function doRandomEvents() {
    var chance = settings.events;
    if (Math.random() < chance) {
        // run a random function from randomEvents
        var event = randomEvents[Object.keys(randomEvents)[Math.floor(Math.random() * Object.keys(randomEvents).length)]];
        event();
    }
}

// Update stats
function updateStats() {
    var statsDiv = document.getElementById("stats");
    var stats = "<span id='stat-pos' class='stat'>x" + mousePos.x + ",y" + mousePos.y + "</span>";
    stats += "<span id='stat-pixels' class='stat'>Pxls:" + currentPixels.length + "</span>";
    stats += "<span id='stat-tps' class='stat'>" + tps + "tps</span>";
    stats += "<span id='stat-ticks' class='stat'>" + pixelTicks + "</span>";
    if (typeof pixelMap == "undefined") {
        return;
    }
    if (pixelMap[mousePos.x] != undefined) {
        var currentPixel = pixelMap[mousePos.x][mousePos.y];
        if (currentPixel != undefined) {
            stats += "<span id='stat-element' class='stat'>Elem:" + (elements[currentPixel.element].name || currentPixel.element).toUpperCase() + "</span>";
            stats += "<span id='stat-temperature' class='stat'>Temp:" + formatTemp(currentPixel.temp) + "</span>";
            if (currentPixel.charge) {
                stats += "<span id='stat-charge' class='stat'>C" + currentPixel.charge + "</span>";
            }
            if (currentPixel.burning) {
                stats += "<span id='stat-burning' class='stat'>Burning</span>";
            }
        }
    }
    if (shiftDown) {
        if (shiftDown == 1) {
            stats += "<span id='stat-shift' class='stat'>[↑ ]</span>";
        } else if (shiftDown == 2) {
            stats += "<span id='stat-shift' class='stat'>[A ]</span>";
        } else if (shiftDown == 3) {
            stats += "<span id='stat-shift' class='stat'>[ ↑]</span>";
        } else if (shiftDown == 4) {
            stats += "<span id='stat-shift' class='stat'>[ A]</span>";
        }
    }
    // If the view is not null, show the view in all caps
    if (view != null) {
        stats += "<span id='stat-view' class='stat'>" + viewKey[view].toUpperCase() + "</span>";
    }
    statsDiv.innerHTML = stats;
}

function formatTemp(temp) {
    // temp is Celcius
    if (!settings["units"] || settings["units"] === "m") {
        // Celsius
        return Math.round(temp) + "°C";
    } else if (settings["units"] === "i") {
        // Fahrenheit
        return Math.round(temp * 1.8 + 32) + "°F";
    } else if (settings["units"] === "s") {
        // Kelvin
        return Math.round(temp + 273.15) + "K";
    }
}

function formatDensity(density) {
    // temp is kg/m3
    // default/metric = kg/m3, imperial = lb/ft3, si = g/cm3
    if (!settings["units"] || settings["units"] === "m") {
        // kg/m3
        return Math.round(density) + " kg⁄m<sup>3</sup>";
    } else if (settings["units"] === "i") {
        // lb/ft3
        return Math.round(density / 16.018) + " lb⁄ft<sup>3</sup>";
    } else if (settings["units"] === "s") {
        // g/cm3
        // round to 2 decimal places
        return Math.round(density / 10) / 100 + " g⁄cm<sup>3</sup>";
    }
}

showingMenu = false;

function infoLink(l) {
    if (l instanceof Array) {
        var newtext = "";
        for (var i = 0; i < l.length; i++) {
            var element = l[i];
            // add to newtext a span with the element's name and its onclick to showInfo(element)
            if (element == "pixels" || element == "itself") {
                newtext += element + ", ";
            } else {
                newtext += "<span class='infoLink' onclick='showInfo(\"" + element + "\")'>" + (elements[element].name || element).toUpperCase().replace(/_/g, " ") + "</span>, ";
            }
        }
        // remove the last comma and space
        newtext = newtext.substring(0, newtext.length - 2);
        return newtext;
    } else {
        if (l == "pixels" || l == "[???]" || l == "itself") {
            return l;
        } else {
            return "<span class='infoLink' onclick='showInfo(\"" + l + "\")'>" + l.toUpperCase().replace(/_/g, " ") + "</span>";
        }
    }
}

function showInfo(element, back = false) {
    // this is such a mess please don't look at it
    showingMenu = "info";
    var infoParent = document.getElementById("infoParent");
    infoParent.style.display = "block";
    var infoSearch = document.getElementById("infoSearch");
    infoSearch.focus();
    var infoTitle = document.getElementById("infoTitle");
    var infoText = document.getElementById("infoText");
    var error = false;
    if (element != undefined) {
        // replace all spaces with underscores
        element = element.replace(/ /g, "_").toLowerCase();
        infoSearch.value = element.toUpperCase();
        info = elements[element];
        if (info) {
            infoTitle.innerHTML = info.name || element.replace(/_/g, " ");
            infoTitle.innerHTML = infoTitle.innerHTML.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            infoText.innerHTML = "";
            if (info.hidden && !settings.unlocked[element]) {
                infoText.innerHTML += "\nYou haven't discovered this yet.\n";
            }
            if (info.color) {
                if (!(info.color instanceof Array)) {
                    infoText.innerHTML += "\nColor: <span style='background-color:" + info.color + "'>     </span>";
                } else {
                    //gradient
                    var gradient = info.color;
                    var gradientString = "linear-gradient(to right";
                    for (var i = 0; i < gradient.length; i++) {
                        gradientString += ", " + gradient[i] + " " + (i * 100) / gradient.length + "%";
                    }
                    gradientString += ")";
                    infoText.innerHTML += "\nColor: <span style='background:" + gradientString + "'>     </span>";
                }
            }
            if (info.desc) {
                infoText.innerHTML += "\n" + info.desc;
            } else if (info.extraInfo) {
                infoText.innerHTML += "\n" + info.extraInfo;
            }

            var moves = false;
            var deletes = [];
            var swaps = [];
            var creates = [];
            var heats = false;
            var cools = false;
            var clones = false;
            var explodes = false;
            var sticks = [];
            if (info.behavior) {
                // for x and y in behavior array
                for (var i = 0; i < info.behavior.length; i++) {
                    for (var j = 0; j < info.behavior[i][1].length; j++) {
                        var b0 = info.behavior[i][j];
                        if (!b0) {
                            continue;
                        }
                        for (var k = 0; k < b0.split(" AND ").length; k++) {
                            var b = b0.split(" AND ")[k];
                            // remove everything after %
                            b = b.split("%")[0];
                            if (b.indexOf(":") != -1) {
                                var arg = b.split(":")[1];
                            } else {
                                var arg = undefined;
                            }
                            var b = b.split(":")[0];
                            if (b == "M1" || b == "M2") {
                                moves = true;
                            } else if (b == "DL") {
                                if (i == 1 && j == 1) {
                                    arg = "itself";
                                } else if (!arg) {
                                    arg = "pixels";
                                }
                                if (deletes.indexOf(arg) == -1) {
                                    deletes = deletes.concat(arg.split(","));
                                }
                            } else if (b == "SW") {
                                if (!arg) {
                                    arg = "pixels";
                                }
                                if (swaps.indexOf(arg) == -1) {
                                    swaps = swaps.concat(arg.split(","));
                                }
                            } else if (b == "CL") {
                                clones = true;
                            } else if (b == "CR" || b == "CH" || b == "LB" || b == "L1" || b == "L2") {
                                if (!arg) {
                                    arg = "[???]";
                                } else if (arg.indexOf(">") != -1) {
                                    arg = arg.split(">")[1];
                                }
                                if (creates.indexOf(arg) == -1) {
                                    creates = creates.concat(arg.split(","));
                                }
                            } else if (b == "HT") {
                                heats = true;
                            } else if (b == "CO") {
                                cools = true;
                            } else if (b == "ST") {
                                if (!arg) {
                                    arg = "pixels";
                                }
                                if (sticks.indexOf(arg) == -1) {
                                    sticks = sticks.concat(arg.split(","));
                                }
                            } else if (b == "EX") {
                                explodes = true;
                            }
                        }
                    }
                }
            }
            // make sure deletes, swaps, creates, and sticks have no duplicate items
            deletes = deletes.filter(function(item, pos) {
                return deletes.indexOf(item) == pos;
            });
            swaps = swaps.filter(function(item, pos) {
                return swaps.indexOf(item) == pos;
            });
            creates = creates.filter(function(item, pos) {
                return creates.indexOf(item) == pos;
            });
            sticks = sticks.filter(function(item, pos) {
                return sticks.indexOf(item) == pos;
            });
            if (info.category == "tools" || info.tool) {
                infoText.innerHTML += "\nTool.";
            } else {
                if (!moves && info.behavior) {
                    infoText.innerHTML += "\nStationary.";
                }
                if (info.category) {
                    infoText.innerHTML += "\nCategory: " + infoLink(info.category) + ".";
                }
                if (info.conduct) {
                    infoText.innerHTML += "\nConducts electricity.";
                }
                if (swaps.length > 0) {
                    infoText.innerHTML += "\nMoves through " + infoLink(swaps) + ".";
                }
                if (creates.length > 0) {
                    infoText.innerHTML += "\nMakes " + infoLink(creates) + ".";
                }
                if (clones) {
                    infoText.innerHTML += "\nClones self.";
                }
                if (deletes.length > 0) {
                    infoText.innerHTML += "\nDeletes " + infoLink(deletes) + ".";
                }
                if (heats) {
                    infoText.innerHTML += "\nHeats pixels.";
                }
                if (cools) {
                    infoText.innerHTML += "\nCools pixels.";
                }
                if (sticks.length > 0) {
                    infoText.innerHTML += "\nSticks to " + infoLink(sticks) + ".";
                }
                if (explodes) {
                    infoText.innerHTML += "\nExplodes.";
                }
                if (settings["unhide"] !== 1 && info.hidden) {
                    infoText.innerHTML += "\nHidden by default.";
                }
                if (info.density != undefined) {
                    infoText.innerHTML += "\nDensity: " + formatDensity(info.density) + ".";
                }
                if (info.tempHigh != undefined) {
                    infoText.innerHTML += "\nTurns into " + infoLink(info.stateHigh || "[???]") + " above " + formatTemp(info.tempHigh) + ".";
                }
                if (info.tempLow != undefined) {
                    infoText.innerHTML += "\nTurns into " + infoLink(info.stateLow || "[???]") + " below " + formatTemp(info.tempLow) + ".";
                }
                if (info.burn != undefined) {
                    infoText.innerHTML += "\nFlammability: " + info.burn + "%.";
                }
                if (info.burnTime != undefined) {
                    infoText.innerHTML += "\nBurns for " + info.burnTime + " tick";
                    if (info.burnTime != 1) {
                        infoText.innerHTML += "s";
                    }
                    infoText.innerHTML += ".";
                }
                if (info.burnInto) {
                    infoText.innerHTML += "\nBurns into " + infoLink(info.burnInto) + ".";
                }
                if (info.fireColor) {
                    if (!(info.fireColor instanceof Array)) {
                        infoText.innerHTML += "\nFlame Color: <span style='background-color:" + info.fireColor + "'>     </span>";
                    } else {
                        //gradient
                        var gradient = info.fireColor;
                        var gradientString = "linear-gradient(to right";
                        for (var i = 0; i < gradient.length; i++) {
                            gradientString += ", " + gradient[i] + " " + (i * 100) / gradient.length + "%";
                        }
                        gradientString += ")";
                        infoText.innerHTML += "\nFlame Color: <span style='background:" + gradientString + "'>     </span>";
                    }
                }
                if (info.breakInto) {
                    infoText.innerHTML += "\nBreaks into " + infoLink(info.breakInto) + ".";
                }
                if (info.stain) {
                    if (info.stain < 0) {
                        infoText.innerHTML += "\nCleans stains.";
                    } else {
                        infoText.innerHTML += "\nStains solids.";
                    }
                }
                if (info.customColor) {
                    infoText.innerHTML += "\nColor is customizable.";
                }
                if (info.reactions) {
                    infoText.innerHTML += "\nReacts with " + infoLink(Object.keys(info.reactions)) + ".";
                }
                if (info.related) {
                    infoText.innerHTML += "\n\n";
                    var related = info.related;
                    if (typeof related == "string") {
                        related = [related];
                    }
                    infoText.innerHTML += "See Also: " + infoLink(related) + ".";
                }
                if (info.alias) {
                    infoText.innerHTML += "\n\n";
                    var alias = info.alias;
                    if (typeof alias == "string") {
                        alias = [alias];
                    }
                    infoText.innerHTML += "Also known as " + alias.join(", ").toUpperCase() + ".";
                }
            }
        } else if (categoryList.indexOf(element) !== -1) {
            infoTitle.innerHTML = element;
            infoTitle.innerHTML = infoTitle.innerHTML.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            var matchingCategory = [];
            // loop through all elements, and add to matchingCategory if it matches the category
            for (e in elements) {
                if (elements[e].category === element) {
                    matchingCategory.push(e);
                }
            }
            infoText.innerHTML = "\nCategory of " + matchingCategory.length + ".\n\n";
            // infoLink of each item in matchingCategory on new lines
            var temptext = "";
            for (var i = 0; i < matchingCategory.length; i++) {
                temptext += infoLink(matchingCategory[i]) + "\n";
            }
            infoText.innerHTML += temptext;
        } else if (element === "") {
            infoTitle.innerHTML = "Browse";
            infoText.innerHTML = "\n" + infoLink("all") + " • " + infoLink("undiscovered") + " • " + infoLink("discovered") + "\n\n";
            var temptext = "";
            for (var i = 0; i < categoryList.length; i++) {
                temptext += infoLink(categoryList[i]) + "\n";
            }
            infoText.innerHTML += temptext + infoLink("hidden");
        } else if (element === "undiscovered") {
            infoTitle.innerHTML = "Undiscovered";
            var temptext = "";
            var n = 0;
            for (e in elements) {
                if (elements[e].hidden && !settings.unlocked[e]) {
                    temptext += infoLink(e) + "\n";
                    n++;
                }
            }
            // sort temptext lines alphabetically
            temptext = temptext.split("\n");
            temptext.sort();
            temptext = temptext.join("\n");
            infoTitle.innerHTML += " (" + n + ")";
            if (temptext === "") {
                temptext = "You discovered everything!\n\nJoin our <a href='https://discord.gg/ejUc6YPQuS'>Discord</a> to stay up to date with updates.";
            }
            infoText.innerHTML = temptext;
        } else if (element === "all") {
            infoTitle.innerHTML = "All (" + elementCount + ")";
            var temptext = "";
            for (e in elements) {
                temptext += infoLink(e) + "\n";
            }
            // sort temptext lines alphabetically
            temptext = temptext.split("\n");
            temptext.sort();
            temptext = temptext.join("\n");
            infoText.innerHTML = temptext;
        } else if (element === "discovered") {
            infoTitle.innerHTML = "Discovered";
            var temptext = "";
            var n = 0;
            for (e in elements) {
                if (!elements[e].hidden || settings.unlocked[e]) {
                    temptext += infoLink(e) + "\n";
                    n++;
                }
            }
            // sort temptext lines alphabetically
            temptext = temptext.split("\n");
            temptext.sort();
            temptext = temptext.join("\n");
            infoTitle.innerHTML += " (" + n + ")";
            infoText.innerHTML = temptext;
        } else if (element === "hidden") {
            infoTitle.innerHTML = "Hidden (" + hiddenCount + ")";
            var temptext = "";
            for (e in elements) {
                if (elements[e].hidden) {
                    temptext += infoLink(e) + "\n";
                }
            }
            // sort temptext lines alphabetically
            temptext = temptext.split("\n");
            temptext.sort();
            temptext = temptext.join("\n");
            if (temptext === "") {
                temptext = "You discovered everything!\n\nJoin our <a href='https://discord.gg/ejUc6YPQuS'>Discord</a> to stay up to date with updates.";
            }
            infoText.innerHTML = temptext;
        } else if (element === "air") {
            infoTitle.innerHTML = "Air";
            infoText.innerHTML = "\nColor: <span>     </span>\nCategory: " + infoLink("gases") + ".\nDensity: " + formatDensity(airDensity) + ".";
        } else {
            infoTitle.innerHTML = "";
            infoText.innerHTML = "";
            error = true;
        }
    } else {
        infoTitle.innerHTML = "";
        infoText.innerHTML = "";
    }
    infoText.innerHTML += "\n\n\n\n";
    if (error) {
        infoSearch.style.backgroundColor = "rgb(100, 33, 33)";
    } else {
        infoSearch.style.backgroundColor = "rgb(66, 66, 66)";
        if (!back && infoHistory[infoHistory.length - 1] !== element) {
            infoHistory.push(element);
        }
    }
    if (infoHistory.length > 1) {
        document.getElementById("infoBackButton").style.display = "inline-block";
    } else {
        document.getElementById("infoBackButton").style.display = "none";
    }
}
infoHistory = [];

function infoBack() {
    if (infoHistory.length > 0) {
        infoHistory.pop();
        showInfo(infoHistory[infoHistory.length - 1], true);
    }
}

function closeMenu() {
    if (!showingMenu) {
        return;
    }
    if (showingMenu == "info") {
        var infoParent = document.getElementById("infoParent");
        var infoSearch = document.getElementById("infoSearch");
        infoParent.style.display = "none";
        infoSearch.value = "";
        showingMenu = false;
        infoHistory = [];
    } else if (showingMenu == "mods") {
        var modParent = document.getElementById("modParent");
        var modManagerUrl = document.getElementById("modManagerUrl");
        modParent.style.display = "none";
        modManagerUrl.value = "";
        showingMenu = false;
    } else if (showingMenu == "settings") {
        var settingsParent = document.getElementById("settingsParent");
        settingsParent.style.display = "none";
        showingMenu = false;
    } else {
        // do it to all elements with the class "menuParent"
        var menuParents = document.getElementsByClassName("menuParent");
        for (var i = 0; i < menuParents.length; i++) {
            menuParents[i].style.display = "none";
        }
        showingMenu = false;
    }
}

function showModManager() {
    var modParent = document.getElementById("modParent");
    var modManagerUrl = document.getElementById("modManagerUrl");
    modParent.style.display = "block";
    modManagerUrl.focus();
    showingMenu = "mods";
}

function addMod(url) {
    // remove trailing slashes
    while (url.charAt(url.length - 1) == "/") {
        url = url.substring(0, url.length - 1);
    }
    // if the mod is in enabledMods, return
    for (var i = 0; i < enabledMods.length; i++) {
        if (enabledMods[i] == url) {
            return;
        }
    }
    // if the url doesn't have a slash or a dot, alert
    if (url.indexOf("/") == -1 && url.indexOf(".") == -1) {
        alert("Invalid mod URL.");
        return;
    }
    // if the url doesn't start with http, add "mods/" to the beginning
    if (url.indexOf("http") == -1) {
        url = "mods/" + url;
    }
    // add it to enabledMods and set the localStorage
    enabledMods.push(url);
    localStorage.setItem("enabledMods", JSON.stringify(enabledMods));
    // add to modManagerList
    var modManagerList = document.getElementById("modManagerList");
    var modName = url.split("/").pop();
    modManagerList.innerHTML += "<li><a href='https://gloabe.github.io/projects/sandboxels/mods/" + modName + "</a> <span class='removeModX' onclick='removeMod(\"" + url + "\")'>X</span></li>";
    document.getElementById("noMods").style.display = "none";
    alert("Added mod. Refresh the page to see changes.");
}

function removeMod(url) {
    // remove url from enabledMods and set the localStorage
    for (var i = 0; i < enabledMods.length; i++) {
        if (enabledMods[i] == url) {
            enabledMods.splice(i, 1);
            break;
        }
    }
    if (enabledMods.length === 0) {
        document.getElementById("noMods").style.display = "block";
    }
    localStorage.setItem("enabledMods", JSON.stringify(enabledMods));
    // remove from modManagerList by href
    var modManagerList = document.getElementById("modManagerList");
    var modManagerListLinks = modManagerList.getElementsByTagName("a");
    for (var i = 0; i < modManagerListLinks.length; i++) {
        if (modManagerListLinks[i].href.endsWith(url)) {
            modManagerListLinks[i].parentNode.remove();
            break;
        }
    }
    alert("Removed mod. Refresh the page to see changes.");
}

function showSettings() {
    var settingsParent = document.getElementById("settingsParent");
    settingsParent.style.display = "block";
    showingMenu = "settings";
}

function setSetting(setting, value) {
    settings[setting] = value;
    saveSettings();
}

shiftDown = 0;
shaping = 0;
shapeStart = null;
// On window load, run tick() 20 times per second
tps = 30;
tickInterval = window.setInterval(tick, 1000 / tps);

function resetInterval(newtps = 30) {
    window.clearInterval(tickInterval);
    tickInterval = window.setInterval(tick, 1000 / newtps);
}
//ticks = 0;
pixelTicks = 0;

mode = null;
view = null;
paused = false;

function focusGame() {
    document.getElementById("game").focus();
    if (showingMenu) {
        closeMenu();
    }
}
//on window load
window.onload = function() {
    // If the browser is Firefox, set #categoryControls padding-bottom:11px;
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        document.getElementById("categoryControls").style.paddingBottom = "11px";
    }

    // Loop through runAfterLoadList and run each function
    for (var i = 0; i < runAfterLoadList.length; i++) {
        runAfterLoadList[i]();
    }

    // Loop through behaviors and each behavior, if it is a string, split the items and replace the value with the array
    for (var behavior in behaviors) {
        if (typeof behaviors[behavior][0] === "string") {
            var newbehavior = [];
            for (var i = 0; i < behaviors[behavior].length; i++) {
                newbehavior.push(behaviors[behavior][i].split("|"));
            }
            behaviors[behavior] = newbehavior;
        }
    }

    // convert every color in the elements object to rgb
    for (var key in elements) {
        if (elements.hasOwnProperty(key)) {
            // if the element has no color, skip it
            if (elements[key].color === undefined) {
                continue;
            }
            // if the color is an array, loop over each one
            if (elements[key].color instanceof Array) {
                var rgbs = [];
                var rgbos = [];
                for (var i = 0; i < elements[key].color.length; i++) {
                    var c = elements[key].color[i];
                    if (c.startsWith("#")) {
                        var rgb = hexToRGB(c);
                        rgbs.push("rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")");
                        rgbos.push(rgb);
                    } else {
                        rgbs.push(c);
                    }
                }
                elements[key].color = rgbs;
                elements[key].colorObject = rgbos;
            } else {
                // if elements[key].color starts with #
                if (elements[key].color.startsWith("#")) {
                    var rgb = hexToRGB(elements[key].color);
                    elements[key].color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
                    elements[key].colorObject = rgb;
                }
            }
        }
    }

    autoElements = {
        molten: {
            // Solid -> Liquid
            rgb: [
                [2, 1.25, 0.5],
                [2, 1, 0.5],
                [2, 0.75, 0],
            ],
            behavior: behaviors.MOLTEN,
            type: "high",
            viscosity: 10000,
            hidden: true,
            state: "liquid",
            tempDiff: -100,
        },
        frozen: {
            // Liquid -> Solid
            rgb: [
                [1.2, 1.2, 1.3]
            ],
            behavior: behaviors.WALL,
            type: "low",
            hidden: true,
            state: "solid",
        },
        condense: {
            // Gas -> Liquid
            rgb: [
                [0.5, 0.5, 0.5]
            ],
            behavior: behaviors.LIQUID,
            type: "low",
            hidden: true,
            state: "liquid",
        },
        evaporate: {
            // Liquid -> Gas
            rgb: [
                [1.5, 1.5, 1.5]
            ],
            behavior: behaviors.GAS,
            type: "high",
            hidden: true,
            state: "gas",
        },
    };

    // Automatic molten element generation
    function autoGen(newname, element, autoType) {
        var autoInfo = autoElements[autoType];
        var newcolor = elements[element].colorObject;
        var colorList = [];
        var colorObjectList = [];
        // if newcolor is not an array, put it in an array
        if (!(newcolor instanceof Array)) {
            newcolor = [newcolor];
        }
        // for every color in the newcolor array, add a new color with the same value, but with the r and g values increased
        for (var i = 0; i < newcolor.length; i++) {
            var c = newcolor[i];
            for (var j = 0; j < autoInfo.rgb.length; j++) {
                var newc = autoInfo.rgb[j];
                r = Math.floor(c.r * newc[0]);
                g = Math.floor(c.g * newc[1]);
                b = Math.floor(c.b * newc[2]);
                if (r > 255) {
                    r = 255;
                }
                if (g > 255) {
                    g = 255;
                }
                colorList.push("rgb(" + r + "," + g + "," + b + ")");
                colorObjectList.push({
                    r: r,
                    g: g,
                    b: b
                });
            }
        }
        var newelem = {
            //"name": newname.replaceAll("_"," "),
            behavior: autoInfo.behavior,
            hidden: autoInfo.hidden || false,
            state: autoInfo.state || "solid",
            category: autoInfo.category || "states",
        };
        if (colorList.length <= 1) {
            colorList = colorList[0];
        }
        if (colorObjectList.length <= 1) {
            colorObjectList = colorObjectList[0];
        }
        newelem.color = colorList;
        newelem.colorObject = colorObjectList;
        var multiplier = 1.1;
        if (autoInfo.type === "high") {
            elements[element].stateHigh = newname;
            newelem.temp = elements[element].tempHigh;
            newelem.tempLow = elements[element].tempHigh + (autoInfo.tempDiff || 0);
            newelem.stateLow = element;
            // Change density by *0.9
            if (elements[element].density) {
                newelem.density = Math.round(elements[element].density * 0.9 * 10) / 10;
            }
        } else if (autoInfo.type === "low") {
            elements[element].stateLow = newname;
            newelem.temp = elements[element].tempLow;
            newelem.tempHigh = elements[element].tempLow + (autoInfo.tempDiff || 0);
            newelem.stateHigh = element;
            multiplier = 0.5;
            // Change density by *1.1
            if (elements[element].density) {
                newelem.density = Math.round(elements[element].density * 1.1 * 10) / 10;
            }
        }
        if (!elements[element].ignore) {
            elements[element].ignore = [];
        }
        elements[element].ignore.push(newname);
        if (elements[element].viscosity || autoInfo.viscosity) {
            newelem.viscosity = elements[element].viscosity || autoInfo.viscosity;
        }
        // Change by *multiplier
        if (elements[element].conduct) {
            newelem.conductivity = Math.round(elements[element].conduct * multiplier * 10) / 10;
        }
        if (elements[element].burn) {
            newelem.burn = Math.round(elements[element].burn * multiplier * 10) / 10;
        }
        if (elements[element].burnTime) {
            newelem.burnTime = Math.round(elements[element].burnTime * multiplier * 10) / 10;
        }
        if (elements[element].burnInto) {
            newelem.burnInto = elements[element].burnInto;
        }
        if (elements[element].fireColor) {
            newelem.fireColor = elements[element].fireColor;
        }
        // If the new element doesn't exist, add it
        if (!elements[newname]) {
            elements[newname] = newelem;
        } else {
            // Loop through newelem's keys and values, copy them to the new element if they are not already defined
            for (var key in newelem) {
                if (elements[newname][key] == undefined) {
                    elements[newname][key] = newelem[key];
                }
            }
        }

        if (autoType === "molten" && elements.molten_slag && elements.molten_slag.ignore && elements.molten_slag.ignore.indexOf(element) === -1) {
            // Slag reactions
            if (newname !== "molten_slag") {
                if (!elements[newname].reactions) {
                    elements[newname].reactions = {};
                }
                elements[newname].reactions.ash = {
                    elem1: null,
                    elem2: "molten_slag"
                };
                elements[newname].reactions.dust = {
                    elem1: null,
                    elem2: "molten_slag"
                };
                elements[newname].reactions.magma = {
                    elem1: null,
                    elem2: "molten_slag"
                };
            }
        }
    }
    // Loop through each element. If it has a tempHigh, but not a stateHigh, create a new molten element
    for (element in elements) {
        if (elements[element].tempHigh !== undefined && elements[element].stateHigh === undefined) {
            var newname = elements[element].stateHighName;
            if (elements[element].state === "solid" || !elements[element].state) {
                // Melting
                if (!newname) {
                    newname = "molten_" + element;
                }
                autoGen(newname, element, "molten");
            } else if (elements[element].state === "liquid") {
                // Evaporating
                if (!newname) {
                    newname = element;
                    if (newname.startsWith("liquid_")) {
                        newname = newname.substring(7);
                    }
                    if (newname.startsWith("molten_")) {
                        newname = newname.substring(7);
                    }
                    newname += "_gas";
                }
                autoGen(newname, element, "evaporate");
            }
        }
        if (elements[element].tempLow !== undefined && elements[element].stateLow === undefined) {
            var newname = elements[element].stateLowName;
            if (elements[element].state === "liquid") {
                // Freezing
                if (!newname) {
                    newname = element;
                    if (newname.startsWith("liquid_")) {
                        newname = newname.substring(7);
                    }
                    if (newname.endsWith("_water")) {
                        newname = newname.substring(0, newname.length - 6);
                    }
                    newname += "_ice";
                }
                autoGen(newname, element, "frozen");
            } else if (elements[element].state === "gas") {
                // Condensing
                if (!newname) {
                    newname = element;
                    if (newname.endsWith("_gas")) {
                        newname = newname.substring(0, newname.length - 4);
                    }
                    newname = "liquid_" + newname;
                }
                autoGen(newname, element, "condense");
            }
        }
        if (elements[element].behavior && typeof elements[element].behavior[0] === "string") {
            var newbehavior = [];
            for (var i = 0; i < elements[element].behavior.length; i++) {
                newbehavior.push(elements[element].behavior[i].split("|"));
            }
            elements[element].behavior = newbehavior;
        }
        if (elements[element].behaviorOn && typeof elements[element].behaviorOn[0] === "string") {
            var newbehavior = [];
            for (var i = 0; i < elements[element].behaviorOn.length; i++) {
                newbehavior.push(elements[element].behaviorOn[i].split("|"));
            }
            elements[element].behaviorOn = newbehavior;
        }
    }

    // Loop through each element, final checks
    nextid = 1;
    for (key in elements) {
        elements[key].id = nextid;
        nextid++;
        // If the element has no behavior, set it to behaviors.WALL
        if (!elements[key].behavior && !elements[key].tick) {
            elements[key].tick = function(pixel) {};
        }
        // If the behavior is a function, delete it and set tick to it instead
        if (typeof elements[key].behavior === "function") {
            if (elements[key].tick) {
                elements[key].tick1 = elements[key].tick;
                elements[key].tick2 = elements[key].behavior;
                elements[key].tick = function(pixel) {
                    if (pixel.start === pixelTicks) {
                        return;
                    }
                    var id = elements[pixel.element].id;
                    elements[pixel.element].tick1(pixel);
                    if (!pixel.del && id === elements[pixel.element].id) {
                        elements[pixel.element].tick2(pixel);
                    }
                };
            } else {
                elements[key].tick = elements[key].behavior;
            }
            delete elements[key].behavior;
        }
        // If the element has no color, set it to white
        if (elements[key].color === undefined) {
            elements[key].color = "rgb(255,255,255)";
            elements[key].colorObject = {
                r: 255,
                g: 255,
                b: 255
            };
        }
        // If the element's behavior is an array and contains M1 or M2, set its movable to true
        if (elements[key].behavior && typeof elements[key].behavior[0] === "object") {
            var bstring = JSON.stringify(elements[key].behavior);
            if (bstring.indexOf("M1") !== -1 || bstring.indexOf("M2") !== -1) {
                elements[key].movable = true;
            }
        }
        if (elements[key].tick) {
            elements[key].movable = true;
        }
        if (elements[key].behavior) {
            // If the element's behavior[1][1] includes "FX", set it's flippableX to true
            if (elements[key].behavior[1][1].indexOf("FX") !== -1) {
                elements[key].flippableX = true;
            }
            // If the element's behavior[1][1] includes "FY", set it's flippableY to true
            if (elements[key].behavior[1][1].indexOf("FY") !== -1) {
                elements[key].flippableY = true;
            }

            // If the element's behavior stringified includes "BO", loop through the behavior
            if (elements[key].behavior.toString().indexOf("BO") !== -1 && !elements[key].rotatable) {
                for (var i = 0; i < elements[key].behavior.length; i++) {
                    // Loop through each array in the behavior
                    for (var j = 0; j < elements[key].behavior[i].length; j++) {
                        // If the behavior includes "BO", set the behaviorOn to the behavior
                        if (elements[key].behavior[i][j].indexOf("BO") !== -1) {
                            if ((i == 0 && j == 0) || (i == 0 && j == 2) || (i == 2 && j == 0 && i == 2 && j == 2)) {
                                elements[key].flippableX = true;
                                elements[key].flippableY = true;
                            } else if (i == 0 || i == 2) {
                                elements[key].flippableY = true;
                            } else if (j == 0 || j == 2) {
                                elements[key].flippableX = true;
                            }
                        }
                    }
                }
            }

            // If the element's behavior[1][1] includes "RT", set it's rotatable to "true"
            if (elements[key].behavior[1][1].indexOf("RT") !== -1) {
                elements[key].rotatable = true;
            }
        }

        // If the element's state is "gas", isGas = true
        if (elements[key].state === "gas") {
            elements[key].isGas = true;
        }
        // Else if the state is not "solid" or "liquid", delete it
        else if (elements[key].state !== "solid" && elements[key].state !== "liquid") {
            delete elements[key].state;
        }

        // If the element has reactions, loop through each one (it is an object), if the value for elem1 or elem2 is not an element and is not null, remove that key
        if (elements[key].reactions) {
            for (var reaction in elements[key].reactions) {
                // If elem1 exists
                if (elements[key].reactions[reaction].elem1) {
                    // If elem1 is an array, loop through each element, else check once. Don't delete if it === null
                    if (Array.isArray(elements[key].reactions[reaction].elem1)) {
                        for (var i = 0; i < elements[key].reactions[reaction].elem1.length; i++) {
                            if (elements[key].reactions[reaction].elem1[i] && !elements[elements[key].reactions[reaction].elem1[i]]) {
                                elements[key].reactions[reaction].elem1.splice(i, 1);
                            }
                        }
                    } else if (elements[key].reactions[reaction].elem1 && !elements[elements[key].reactions[reaction].elem1]) {
                        delete elements[key].reactions[reaction].elem1;
                    }
                }
                // If elem2 exists
                if (elements[key].reactions[reaction].elem2) {
                    // If elem2 is an array, loop through each element, else check once. Don't delete if it === null
                    if (Array.isArray(elements[key].reactions[reaction].elem2)) {
                        for (var i = 0; i < elements[key].reactions[reaction].elem2.length; i++) {
                            if (elements[key].reactions[reaction].elem2[i] && !elements[elements[key].reactions[reaction].elem2[i]]) {
                                elements[key].reactions[reaction].elem2.splice(i, 1);
                            }
                        }
                    } else if (elements[key].reactions[reaction].elem2 && !elements[elements[key].reactions[reaction].elem2]) {
                        delete elements[key].reactions[reaction].elem2;
                    }
                }
            }
        }

        // If the element's stateHigh or stateLow is not an element, remove it and tempHigh/Low
        if (elements[key].stateHigh) {
            // If it's an array, do it for each item, otherwise, just do it once
            if (Array.isArray(elements[key].stateHigh)) {
                for (var i = 0; i < elements[key].stateHigh.length; i++) {
                    if (!elements[elements[key].stateHigh[i]] && elements[key].stateHigh[i] !== null) {
                        elements[key].stateHigh.splice(i, 1);
                    }
                }
                if (elements[key].stateHigh.length == 0) {
                    delete elements[key].stateHigh;
                    delete elements[key].tempHigh;
                }
            } else {
                if (!elements[elements[key].stateHigh] && elements[key].stateHigh !== null) {
                    delete elements[key].stateHigh;
                    delete elements[key].tempHigh;
                }
            }
        }
        if (elements[key].stateLow) {
            if (Array.isArray(elements[key].stateLow)) {
                for (var i = 0; i < elements[key].stateLow.length; i++) {
                    if (!elements[elements[key].stateLow[i]] && elements[key].stateLow[i] !== null) {
                        elements[key].stateLow.splice(i, 1);
                    }
                }
                if (elements[key].stateLow.length == 0) {
                    delete elements[key].stateLow;
                    delete elements[key].tempLow;
                }
            } else {
                if (!elements[elements[key].stateLow] && elements[key].stateLow !== null) {
                    delete elements[key].stateLow;
                    delete elements[key].tempLow;
                }
            }
        }
        // same for burnInto
        if (elements[key].burnInto) {
            if (Array.isArray(elements[key].burnInto)) {
                for (var i = 0; i < elements[key].burnInto.length; i++) {
                    if (!elements[elements[key].burnInto[i]]) {
                        delete elements[key].burnInto[i];
                    }
                }
                if (elements[key].burnInto.length == 0) {
                    delete elements[key].burnInto;
                }
            } else {
                if (!elements[elements[key].burnInto]) {
                    delete elements[key].burnInto;
                }
            }
        }
        // same for breakInto
        if (elements[key].breakInto) {
            if (Array.isArray(elements[key].breakInto)) {
                for (var i = 0; i < elements[key].breakInto.length; i++) {
                    if (!elements[elements[key].breakInto[i]]) {
                        delete elements[key].breakInto[i];
                    }
                }
                if (elements[key].breakInto.length == 0) {
                    delete elements[key].breakInto;
                }
            } else {
                if (!elements[elements[key].breakInto]) {
                    delete elements[key].breakInto;
                }
            }
        }
    }

    // Generate worldgen options
    // Loop through the worldgentypes object, add the key to the #worldgenselect select as an option with the value of the key and the name of the key capitalized and underscores replaced with spaces
    for (var key in worldgentypes) {
        document.getElementById("worldgenselect").innerHTML += "<option value='" + key + "'>" + key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) + "</option>";
    }
    if (settings["worldgen"] && !worldgentypes[settings["worldgen"]]) {
        settings["worldgen"] = "off";
    }

    // Loop through randomEventChoices, and loop through the array of each. If the element doesn't exist, remove it from the array.
    for (var key in randomEventChoices) {
        for (var i = 0; i < randomEventChoices[key].length; i++) {
            if (!elements[randomEventChoices[key][i]]) {
                randomEventChoices[key].splice(i, 1);
            }
        }
    }

    // Poison == poison gas reactions
    if (elements.poison && elements.poison_gas) {
        if (elements.poison.reactions) {
            elements.poison_gas.reactions = elements.poison.reactions;
        }
    }

    // Load settings
    // Loop through all the elements with setting-span class.
    // If the span's setting attribute is in settings, set the first select or input to the value of the setting.
    var settingSpans = document.getElementsByClassName("setting-span");
    for (var i = 0; i < settingSpans.length; i++) {
        var setting = settingSpans[i].getAttribute("setting");
        if (setting in settings) {
            var settingValue = settings[setting];
            var settingElements = settingSpans[i].getElementsByTagName("select") || settingSpans[i].getElementsByTagName("input");
            if (settingElements.length > 0) {
                settingElements[0].value = settingValue;
            }
        }
    }

    var gameCanvas = document.getElementById("game");
    // Get context
    var ctx = gameCanvas.getContext("2d");
    var newWidth = Math.ceil((window.innerWidth * 0.9) / pixelSize) * pixelSize;
    var newHeight = Math.ceil((window.innerHeight * 0.675) / pixelSize) * pixelSize;
    // If the new width is greater than 800, set it to 800
    if (newWidth > 1000) {
        newWidth = 1000;
    }
    // If we are on a desktop and the new height is greater than 600, set it to 600
    if (window.innerWidth > 1000 && newHeight > 500) {
        newHeight = 500;
    }
    ctx.canvas.width = newWidth;
    ctx.canvas.height = newHeight;

    width = Math.round(newWidth / pixelSize) - 1;
    height = Math.round(newHeight / pixelSize) - 1;
    mousePos = {
        x: width / 2,
        y: height / 2
    };
    if (settings["worldgen"]) {
        clearAll();
    } else {
        // Object with width arrays of pixels starting at 0
        pixelMap = [];
        for (var i = 0; i < width; i++) {
            pixelMap[i] = [];
        }
    }
    // randomChoices = the keys of "elements" with any element with the category "tools" or the property excludeRandom set to true removed
    randomChoices = Object.keys(elements).filter(function(e) {
        return elements[e].excludeRandom != true && elements[e].category != "tools" && !elements[e].tool;
    });
    gameCanvas.addEventListener("mousedown", mouseClick);
    gameCanvas.addEventListener("touchstart", mouseClick, {
        passive: false
    });
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("touchend", mouseUp, {
        passive: false
    });
    window.addEventListener("mousemove", mouseMove);
    gameCanvas.addEventListener("touchmove", mouseMove, {
        passive: false
    });
    gameCanvas.addEventListener("wheel", wheelHandle);
    gameCanvas.ontouchstart = function(e) {
        if (e.touches) e = e.touches[0];
        return false;
    };
    window.onbeforeunload = function() {
        // Confirm leaving page if there are pixels on-screen
        if (currentPixels.length > 0) {
            return "Are you sure you want to leave?";
        }
    };
    // If enabledMods has items, add an li to modManagerList for each item with the href to the item, target blank, and the item's name, with "<span class="removeModX" onclick='removeMod('>X</span>" after the link
    if (enabledMods.length > 0) {
        modManagerList = document.getElementById("modManagerList");
        for (var i = 0; i < enabledMods.length; i++) {
            var mod = enabledMods[i];
            // modName is the last part of the mod's path
            var modName = mod.split("/").pop();
            modManagerList.innerHTML += "<li><a href='https://sandboxels.r74n.com/&quot;&#32;+&#32;mod&#32;+&#32;&quot;' target='_blank'>" + modName + "</a> <span class='removeModX' onclick='removeMod(\"" + mod + "\")'>X</span></li>";
        }
    } else {
        document.getElementById("noMods").style.display = "block";
    }
    document.getElementById("game").oncontextmenu = function(e) {
        e.preventDefault();
        return false;
    };
    // If the user presses [ or -, decrease the mouse size by 2
    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        // else if tab, set document.body.class to "usingTab"
        else if (e.keyCode == 9) {
            document.body.classList.add("usingTab");
        }
        // F1 = hide #underDiv, #infoParent, #modParent, #pagetitle, #colorSelector if they aren't hidden, otherwise show them
        if (e.keyCode == 112) {
            e.preventDefault();
            if (document.getElementById("underDiv").style.display == "none") {
                document.getElementById("underDiv").style.display = "block";
                document.getElementById("pagetitle").style.display = "block";
                document.getElementById("colorSelector").style.display = "block";
            } else {
                document.getElementById("underDiv").style.display = "none";
                if (showingMenu) {
                    closeMenu();
                }
                document.getElementById("pagetitle").style.display = "none";
                document.getElementById("colorSelector").style.display = "none";
            }
        }
        if (showingMenu) {
            // esc or / or tab / or \ (while in settings) to close
            if (e.keyCode == 27 || (e.keyCode == 191 && showingMenu == "info") || e.keyCode == 9 || (e.keyCode == 220 && showingMenu == "settings")) {
                e.preventDefault();
                closeMenu();
            }
            // enter to clear infoSearch
            else if (e.keyCode == 13 && showingMenu == "info") {
                var infoSearch = document.getElementById("infoSearch");
                infoSearch.value = "";
                showInfo();
            }
            return;
        }
        if (e.keyCode == 219 || e.keyCode == 189) {
            if (shiftDown) {
                mouseSize = 1;
            } else {
                mouseSize -= 2;
                if (mouseSize < 1) {
                    mouseSize = 1;
                }
            }
        }
        // If the user presses ] or =, increase the mouse size by 2
        if (e.keyCode == 221 || e.keyCode == 187) {
            if (shiftDown) {
                mouseSize = mouseSize + 15 - ((mouseSize + 15) % 15);
            } else {
                mouseSize += 2;
            }
            // if height>width and mouseSize>height, set mouseSize to height, if width>height and mouseSize>width, set mouseSize to width
            if (mouseSize > (height > width ? height : width)) {
                mouseSize = height > width ? height : width;
            }
        }
        // User presses shift
        else if (e.keyCode == 16) {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                shiftDown = 1;
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                shiftDown = 3;
            }
        }
        // User presses alt
        else if (e.keyCode == 18) {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                shiftDown = 2;
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                shiftDown = 4;
            }
        }
        // p or spacebar or ` or k = pause
        if (e.keyCode == 80 || e.keyCode == 32 || e.keyCode == 192 || e.keyCode == 75) {
            e.preventDefault();
            togglePause();
        }
        // e = chooseElementPrompt()
        else if (e.keyCode == 69) {
            e.preventDefault();
            chooseElementPrompt();
        }
        // . = doFrame()
        else if (e.keyCode == 190) {
            e.preventDefault();
            doFrame();
        }
        // / or i = showInfo()
        else if (e.keyCode == 191 || e.keyCode == 73) {
            e.preventDefault();
            showInfo();
        }
        // f = full screen
        else if (e.keyCode == 70) {
            e.preventDefault();
            if (document.fullscreenElement) {
                document.exitFullscreen(document.body);
            } else {
                requestFullScreen(document.body);
            }
        }
        // 0-9 = setView(the number)
        else if (e.keyCode >= 48 && e.keyCode <= 57) {
            // if not command or control down, set view to the number
            e.preventDefault();
            setView(e.keyCode - 48);
        }
        // right arrow = switch the category to the one after the current category
        else if (e.keyCode == 39) {
            e.preventDefault();
            // in categoryControls, find the button with the class categoryButton and the attribute current="true"
            var currentButton = document.querySelector(".categoryButton[current='true']");
            var currentCategory = currentButton.getAttribute("category");
            // get the categoryButton that is after the current one in the div
            var nextButton = currentButton.nextElementSibling;
            // if there is no next button, go to the first one
            if (nextButton == null) {
                nextButton = document.querySelector(".categoryButton");
            }
            var nextCategory = nextButton.getAttribute("category");
            selectCategory(nextCategory);
            // focus on categoryControls
            document.getElementById("categoryControls").focus();
        }
        // left arrow = switch the category to the one before the current category
        else if (e.keyCode == 37) {
            e.preventDefault();
            // in categoryControls, find the button with the class categoryButton and the attribute current="true"
            var currentButton = document.querySelector(".categoryButton[current='true']");
            var currentCategory = currentButton.getAttribute("category");
            // get the categoryButton that is before the current one in the div
            var prevButton = currentButton.previousElementSibling;
            // if there is no previous button, go to the last one
            if (prevButton == null) {
                prevButton = document.querySelector(".categoryButton:last-child");
            }
            var prevCategory = prevButton.getAttribute("category");
            selectCategory(prevCategory);
        }
        // m = closeMenu() and showModManager()
        else if (e.keyCode == 77) {
            e.preventDefault();
            closeMenu();
            showModManager();
        }
        // \ = closeMenu() and showSettings()
        else if (e.keyCode == 220) {
            e.preventDefault();
            closeMenu();
            showSettings();
        }
        // c or F2 = screenshot
        else if (e.keyCode == 67 || e.keyCode == 113) {
            e.preventDefault();
            var link = document.createElement("a");
            link.setAttribute("download", "sandboxels-screenshot.png");
            link.setAttribute("href", document.getElementById("game").toDataURL("image/png").replace("image/png", "image/octet-stream"));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // x = explodeAt()
        /*else if (e.keyCode == 88) {
                  e.preventDefault();
                  explodeAt(mousePos.x, mousePos.y, Math.round(mouseSize/2));
              }*/
    });
    // If the user releases either shift
    document.addEventListener("keyup", function(e) {
        if (e.keyCode == 16 || e.keyCode == 18) {
            shiftDown = 0;
            if (shaping) {
                shaping = 0;
                shapeStart = null;
            }
        }
    });

    // Create buttons for elements
    // For each element type in elements, create a button in controls that sets the current element to that type
    // Alphabetically sort and loop through dictionary named "elements"
    elementCount = 0;
    hiddenCount = 0;
    categoryList = [];
    for (var element in elements) {
        elementCount++;
        var category = elements[element].category;
        if (category == null) {
            category = "other";
        }
        if (categoryList.indexOf(category) === -1) {
            categoryList.push(category);
        }
        if (elements[element].hidden && (!settings["unhide"] || (settings["unhide"] === 2 && !settings.unlocked[element]))) {
            hiddenCount++;
            continue;
        }
        var categoryDiv = document.getElementById("category-" + category);
        if (categoryDiv == null) {
            createCategoryDiv(category);
            categoryDiv = document.getElementById("category-" + category);
        }
        createElementButton(element);
    }
    // Set the first button in categoryControls div to be the current category
    document.getElementById("categoryControls").children[0].click();
    document.getElementById("extraInfo").innerHTML +=
        "<small><p>There are " + elementCount + " elements, including " + hiddenCount + " hidden ones.</p><p>  You're using <a href='https://gloabe.github.io'>Gloabe!</a></p><p> R74n ©2021-" + new Date().getFullYear() + ". All rights reserved.</p></small>";
    selectElement(currentElement);
    focusGame();
    // For every button element, onkeyup="event.preventDefault()"
    var buttonElements = document.getElementsByTagName("button");
    for (var i = 0; i < buttonElements.length; i++) {
        buttonElements[i].onkeyup = function(e) {
            e.preventDefault();
        };
    }
  //  if (window.self !== window.top && !location.ancestorOrigins[0].includes("itch.io")) {
  //      var menuParent = document.createElement("div");
  //      menuParent.className = "menuParent";
  //      menuParent.style.display = "block";
  //      menuParent.innerHTML = `<div class="menuScreen">
  //       <button class="XButton" onclick="closeMenu();">-</button>
  //       <span class="menuTitle">Sandboxels</span>
  //       <div class="menuText" style="padding-top:1em">
  //       You may be on a website that has embedded our game involuntarily.
  //       <br><br>
  //       The real game is at this URL: <a href="index.html" target="_blank">sandboxels.R74n.com</a>.
  //       <br><br>
  //       Please use the main website to support us instead.
  //       <br><br>
  //       You can also join our <a href="https://discord.gg/ejUc6YPQuS" target="_blank">Discord</a> if that isn't possible.
  //       </div>
  //       <br><br><br><br>
  //       </div>`;
  //      document.body.appendChild(menuParent);
  //      showingMenu = "alert";
  //  }
    //get the first .elementButton in the first .category, and selectElement(button.element)
    var firstDiv = document.getElementsByClassName("category")[0];
    var firstElementButton = firstDiv.getElementsByClassName("elementButton")[0];
    selectElement(firstElementButton.getAttribute("element"));
};