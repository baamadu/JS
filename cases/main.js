const cases = [];
const IMG_BASE = "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/"

const app = document.querySelector(".app");

function createCase(name, keyName, items) {
    return {
        id: Date.now(),
        name,
        keyName,
        items,
        key: null,
        render: function() {
            app.innerHTML += `
            <div class="case-container">
                <img src="gamma-case.png" alt="gamma case">
                <button class="open-button-${this.id}">Open</button>
            </div>
            `
        },
        setupEventListeners: function(key) {
            const self = this;
            this.key = key;
            const openBtn = document.querySelector(`.open-button-${this.id}`);
            openBtn.addEventListener("click", function() {
                const itemUnboxed = self.open();
                console.log(itemUnboxed)
                app.innerHTML += `
                <div class="case-container">
                    <img src="${IMG_BASE}${itemUnboxed.img}" alt="gamma case">
                    <p class ="${itemUnboxed.rarity}">${itemUnboxed.name}</p>
                </div>
                `
            });
        },  
        open: function() {
            try {
                if (this.key.keyName !== this.keyName) {
                    throw new Error("Not the right key")
                }
                this.key.useKey();
            } catch (error) {
                console.log("Case opening error", error)
                alert(error);
                return;
            }

            const itemsLength = this.items.length;
            const randomNumber = Math.floor(Math.random() * itemsLength);
            const randomItem = this.items[randomNumber];

            return randomItem;
        }
    }
}

function createItem(name, rarity, img) {
    return {
        name,
        rarity,
        img
    }
}

function createKey(keyName) {
    return {
        used: false,
        keyName,
        useKey: function() {
            if (this.used === true) {
                throw new Error("Key is already used");
            }
            this.used = true;
        }
    }
}

function createCases() {
    const gammaCase = createCase("Gamma", "gamma-key", [
        createItem("M4A1-S | Mecha Industries", "red", "/weapon_m4a1_silencer_gs_m4a1_mecha_industries_light_large.2973cf5ca9d1592d6652bf14ac89bcd8593d4f0a.png"),
        createItem("Glock-18 | Wasteland Rebel", "red", "/weapon_glock_cu_glock_wasteland_rebel_light_large.284899ab35e5a29c6edb64b2af194cee19a0ed89.png"),
        createItem("Nova | Exo", "blue", "/weapon_nova_aq_nova_sci_fi_light_large.9cf268816cad5bdbe33bd4d1ddce1eb81f905164.png"),
    ])
    const key = createKey("gamma-key");
    gammaCase.render();
    gammaCase.setupEventListeners(key);
    cases.push(gammaCase);
}

function initApp() {
    createCases();
}

initApp()