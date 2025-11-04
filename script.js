// 1. Testu-Aldatzailea
function aldatuTestua() {
const p = document.getElementById("testu_aldagarria");
p.textContent = "Kaixo, hau Markel Blancoren ariketa da";
}
// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
    const p  = document.getElementById("kolore_aldagarria");
    const unekoKolorea= p.style.color;
    if (unekoKolorea === "purple") {
        p.style.color = "black"; 
    } else {
        p.style.color = "purple";
    }
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
const p = document.getElementById("ezkutatu_hau")
 
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
  const z1 = parseFloat(document.getElementById("zenbaki1").value) || 0;
    const z2 = parseFloat(document.getElementById("zenbaki2").value) || 0;

const emaitza = z1 + z2;

document.getElementById("emaitza4").textContent = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
    const testua = document.getElementById("elementu_berria").value.trim();

 if (testua === "") return;

    const li = document.createElement("li");
    li.textContent = testua;
    document.getElementById("zerrenda_dinamikoa").appendChild(li);
    document.getElementById("elementu_berria").value = "";
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
    klikKopurua++;

document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
    const sarrera = parseInt(document.getElementById("asmatutako_zenbakia").value);
    const emaitza = document.getElementById("joko_emaitza");
    if (sarrera === zenbakiSekretua) {
        emaitza.textContent = "Zorionak! Asmatu duzu!";
        emaitza.style.color = "green";
        zenbakiSekretua = Math.floor(Math.random() * 5) + 1;
    } else {
        emaitza.textContent = "Erreala bezain txarragoa zara denboraldi honetan";
        emaitza.style.color = "red";
    }
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
 const randomKolorea = "#" + Math.floor(Math.random() * 16757215).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = randomKolorea;
}