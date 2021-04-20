function typeChange(){ 
    var divType = document.getElementById("menu-type");
    var divWzory = document.getElementById("wzory");
    if(divType.innerHTML == "Zaawansowane") {
        divType.innerHTML = "Podstawowe";
        divWzory.innerHTML = '<div id="wzor1" class="wzor" onclick="gestosc()">Wzór na gęstość</div><div id="wzor2" class="wzor" onclick="sila()">Wzór na siłę</div><div id="wzor3" class="wzor" onclick="praca()">Wzór na pracę</div><div id="wzor4" class="wzor" onclick="ped()">Wzór na pęd</div><div id="wzor5" class="wzor" onclick="energPoten()">Wzór na energię potencjalną</div>'
    } else{
        divType.innerHTML = "Zaawansowane";
        divWzory.innerHTML = '<div id="wzor1Z" class="wzor" onclick="przemieszczenie()">Wzór na przemieszczenie</div><div id="wzor2Z" class="wzor" onclick="rzutPoziomy()">Wzór na rzut poziomy</div><div id="wzor3Z" class="wzor" onclick="energKinekt()">Wzór na energię kinektyczną</div>'
    }
}
function gestosc(){
    document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na gęstość</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="gestoscP()">Oblicz p | Dane są m i V</button><button class="niewiadoma" onclick="gestoscM()">Oblicz m | Dane są p i V</button><button class="niewiadoma" onclick="gestoscV()">Oblicz V | Dane są p i M</button></div><div id="obliczanie" class=""></div><button id="gestoscSubmit" class="niewiadomaSubmit" onclick="obliczGestosc()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div></div>'
}
    function obliczGestosc(){
        if (document.getElementById("obliczanie").classList.value == "p"){
            var m = Number(document.getElementById("niewiadoma1").value);
            var V = Number(document.getElementById("niewiadoma2").value);
            var wynik = m / V;
            document.getElementById("wynik").innerHTML = 'p = ' + wynik + ' g/cm<sup>3</sup>'
        }
        if (document.getElementById("obliczanie").classList.value == "m"){
            var p = Number(document.getElementById("niewiadoma1").value);
            var V = Number(document.getElementById("niewiadoma2").value);
            var wynik = p * V;
            document.getElementById("wynik").innerHTML = 'm = ' + wynik + ' g'
        }
        if (document.getElementById("obliczanie").classList.value == "v"){
            var p = Number(document.getElementById("niewiadoma1").value);
            var m = Number(document.getElementById("niewiadoma2").value);
            var wynik = m / p;
            document.getElementById("wynik").innerHTML = 'V = ' + wynik + ' cm<sup>3</sup>'
        }
    }
    function gestoscP(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/gestosc1.png"></div><em id="1em">masa w g</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="masa" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">objętość w cm<sup>3</sup></em><span id="niewiadomaLitera2">V =</span><input type="number" placeholder="objętość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("p");
    }
    function gestoscM(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/gestosc2.png"></div><em id="1em">gęstość w g/cm<sup>3</sup></em><span id="niewiadomaLitera1">p =</span><input type="number" placeholder="gęstość" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">objętość w cm<sup>3</sup></em><span id="niewiadomaLitera2">V =</span><input type="number" placeholder="objętość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("p");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("m");
    }
    function gestoscV(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/gestosc3.png"></div><em id="2em">masa w g</em><span id="niewiadomaLitera2">m =</span><input type="number" placeholder="masa" id="niewiadoma2" class="niewiadomaInput" style="margin-right: 20px;"><em id="1em">gęstość w g/cm<sup>3</sup></em><span id="niewiadomaLitera1">p =</span><input type="number" placeholder="gęstość" id="niewiadoma1" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("p");
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.add("v");
}

function sila(){
    document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na siłę</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="silaF()">Oblicz F | Dane są m i a</button><button class="niewiadoma" onclick="silaM()">Oblicz m | Dane są F i a</button><button class="niewiadoma" onclick="silaA()">Oblicz a | Dane są F i m</button></div><div id="obliczanie" class=""></div><button id="silaSubmit" class="niewiadomaSubmit" onclick="obliczSila()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div></div>'
}

    function obliczSila(){
        if (document.getElementById("obliczanie").classList.value == "f"){
            var m = Number(document.getElementById("niewiadoma1").value);
            var a = Number(document.getElementById("niewiadoma2").value);
            var wynik = m * a;
            document.getElementById("wynik").innerHTML = 'F = ' + wynik + ' N'
        }
        if (document.getElementById("obliczanie").classList.value == "m"){
            var F = Number(document.getElementById("niewiadoma1").value);
            var a = Number(document.getElementById("niewiadoma2").value);
            var wynik = F / a;
            document.getElementById("wynik").innerHTML = 'm = ' + wynik + ' kg'
        }
        if (document.getElementById("obliczanie").classList.value == "a"){
            var F = Number(document.getElementById("niewiadoma1").value);
            var m = Number(document.getElementById("niewiadoma2").value);
            var wynik = F / m;
            document.getElementById("wynik").innerHTML = 'a = ' + wynik + ' m/s<sup>2</sup>'
        }
    }
    function silaF(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/sila1.png"></div><em id="1em">masa w g</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="masa" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">przyspieszenie w m/s<sup>2</sup></em><span id="niewiadomaLitera2">a =</span><input type="number" placeholder="przyspieszenie" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.remove("a");
        document.getElementById("obliczanie").classList.add("f");
    }
    function silaM(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/sila2.png"></div><em id="1em">siła w N</em><span id="niewiadomaLitera1">F =</span><input type="number" placeholder="siła" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">przyspieszenie w m/s<sup>2</sup></em><span id="niewiadomaLitera2">a =</span><input type="number" placeholder="przyspieszenie" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("f");
        document.getElementById("obliczanie").classList.remove("a");
        document.getElementById("obliczanie").classList.add("m");
    }
    function silaA(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/sila3.png"></div><em id="1em">siła w N</em><span id="niewiadomaLitera1">F =</span><input type="number" placeholder="siła" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">masa w kg</em><span id="niewiadomaLitera2">m =</span><input type="number" placeholder="masa" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("F");
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.add("a");
}

    function praca(){
        document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na pracę</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="pracaW()">Oblicz W | Dane są F i s</button><button class="niewiadoma" onclick="pracaF()">Oblicz F | Dane są W i s</button><button class="niewiadoma" onclick="pracaS()">Oblicz s | Dane są W i F</button></div><div id="obliczanie" class=""></div><button id="pracaSubmit" class="niewiadomaSubmit" onclick="obliczPraca()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div>'
    }

    function obliczPraca(){
        if (document.getElementById("obliczanie").classList.value == "w"){
            var F = Number(document.getElementById("niewiadoma1").value);
            var s = Number(document.getElementById("niewiadoma2").value);
            var wynik = F * s;
            document.getElementById("wynik").innerHTML = 'W = ' + wynik + ' J'
        }
        if (document.getElementById("obliczanie").classList.value == "f"){
            var W = Number(document.getElementById("niewiadoma1").value);
            var s = Number(document.getElementById("niewiadoma2").value);
            var wynik = W / s;
            document.getElementById("wynik").innerHTML = 'F = ' + wynik + ' N'
        }
        if (document.getElementById("obliczanie").classList.value == "s"){
            var W = Number(document.getElementById("niewiadoma1").value);
            var F = Number(document.getElementById("niewiadoma2").value);
            var wynik = W / F;
            document.getElementById("wynik").innerHTML = 's = ' + wynik + ' m'
        }
    }
    function pracaW(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/praca1.png"></div><em id="1em">siła w N</em><span id="niewiadomaLitera1">F =</span><input type="number" placeholder="siła" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">droga w m</em><span id="niewiadomaLitera2">s =</span><input type="number" placeholder="droga" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("f");
        document.getElementById("obliczanie").classList.remove("s");
        document.getElementById("obliczanie").classList.add("w");
    }
    function pracaF(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/praca2.png"></div><em id="1em">praca w J</em><span id="niewiadomaLitera1">W =</span><input type="number" placeholder="praca" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">droga w m</em><span id="niewiadomaLitera2">s =</span><input type="number" placeholder="droga" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("w");
        document.getElementById("obliczanie").classList.remove("s");
        document.getElementById("obliczanie").classList.add("f");
    }
    function pracaS(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/praca3.png"></div><em id="1em">praca w J</em><span id="niewiadomaLitera1">W =</span><input type="number" placeholder="praca" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">siła w F</em><span id="niewiadomaLitera2">s =</span><input type="number" placeholder="siła" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("w");
        document.getElementById("obliczanie").classList.remove("f");
        document.getElementById("obliczanie").classList.add("s");
}

function ped(){
document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na pęd</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="pedP()">Oblicz p | Dane są m i v</button><button class="niewiadoma" onclick="pedM()">Oblicz m | Dane są p i v</button><button class="niewiadoma" onclick="pedV()">Oblicz v | Dane są p i m</button></div><div id="obliczanie" class=""></div><button id="pedSubmit" class="niewiadomaSubmit" onclick="obliczPed()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div>'
}

    function obliczPed(){
        if (document.getElementById("obliczanie").classList.value == "p"){
            var m = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var wynik = m * v;
            document.getElementById("wynik").innerHTML = 'p = ' + wynik + ' kg·m/s'
        }
        if (document.getElementById("obliczanie").classList.value == "m"){
            var p = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var wynik = p / v;
            document.getElementById("wynik").innerHTML = 'm = ' + wynik + ' kg'
        }
        if (document.getElementById("obliczanie").classList.value == "v"){
            var p = Number(document.getElementById("niewiadoma1").value);
            var m = Number(document.getElementById("niewiadoma2").value);
            var wynik = p / m;
            document.getElementById("wynik").innerHTML = 'v = ' + wynik + ' m/s'
        }
    }
    function pedP(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/ped1.png"></div><em id="1em">masa w kg</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="masa" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("p");
    }
    function pedM(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/ped2.png"></div><em id="1em">ped w kg·m/s</em><span id="niewiadomaLitera1">p =</span><input type="number" placeholder="pęd" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("p");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("m");
    }
    function pedV(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/ped3.png"></div><em id="1em">ped w kg·m/s</em><span id="niewiadomaLitera1">p =</span><input type="number" placeholder="pęd" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">masa w kg</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="masa" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("p");
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.add("v");
}

function energPoten(){
    document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na energię potencjalną</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="energPotenE()">Oblicz E<sub>g</sub></sub> | Dane są m, g* i h</button><button class="niewiadoma" onclick="energPotenM()">Oblicz m | Dane są E<sub>g</sub>, g* i h</button><button class="niewiadoma" onclick="energPotenH()">Oblicz h | Dane są E<sub>g</sub>, m i g*</button></div><div id="obliczanie" class=""></div><button id="pedSubmit" class="niewiadomaSubmit" onclick="obliczEnergPoten()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div><div style="line-height: 40;">* grawitacja na ziemi wynosi ~9.8 m/s<sup>2</sup></div>'
}

    function obliczEnergPoten(){
        g = 9.8;
        if (document.getElementById("obliczanie").classList.value == "e"){
            var m = Number(document.getElementById("niewiadoma1").value);
            var h = Number(document.getElementById("niewiadoma2").value);
            var wynik = m * g * h;
            document.getElementById("wynik").innerHTML = 'E<sub>g</sub> = ' + wynik + ' J'
        }
        if (document.getElementById("obliczanie").classList.value == "m"){
            var e = Number(document.getElementById("niewiadoma1").value);
            var h = Number(document.getElementById("niewiadoma2").value);
            var wynik = e / (g * h);
            document.getElementById("wynik").innerHTML = 'm = ' + wynik + ' kg'
        }
        if (document.getElementById("obliczanie").classList.value == "h"){
            var e = Number(document.getElementById("niewiadoma1").value);
            var m = Number(document.getElementById("niewiadoma2").value);
            var wynik = e / (m * g);
            document.getElementById("wynik").innerHTML = 'h = ' + wynik + ' m'
        }
    }
    function energPotenE(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energPoten1.png"></div><em id="1em">masa w kg</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="masa" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">wysokość w m</em><span id="niewiadomaLitera2">h =</span><input type="number" placeholder="wysokość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.remove("h");
        document.getElementById("obliczanie").classList.add("e");
    }
    function energPotenM(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energPoten2.png"></div><em id="1em">energia w J</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="energia" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">wysokość w m</em><span id="niewiadomaLitera2">h =</span><input type="number" placeholder="wysokość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("e");
        document.getElementById("obliczanie").classList.remove("h");
        document.getElementById("obliczanie").classList.add("m");
    }
    function energPotenH(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energPoten3.png"></div><em id="1em">energia w J</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="energia" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">masa w kg</em><span id="niewiadomaLitera2">h =</span><input type="number" placeholder="masa" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("e");
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.add("h");
    }

function przemieszczenie(){
    document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na przemieszczenie<div style="font-size: 16px;">początkowa i końcowa prędkość i czas</div></div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="przemieszczenieS()">Oblicz s | Dane są v, u i t</button><button class="niewiadoma" onclick="przemieszczenieV()">Oblicz v | Dane są s, t i u</button><button class="niewiadoma" onclick="przemieszczenieU()">Oblicz u | Dane są s, t i v</button><button class="niewiadoma" onclick="przemieszczenieT()">Oblicz t | Dane są s, v i u</button></div><div id="obliczanie" class="t"></div><button id="gestoscSubmit" class="niewiadomaSubmit" onclick="obliczPrzemieszczenie()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div></div>'
}

    function obliczPrzemieszczenie(){
        if (document.getElementById("obliczanie").classList.value == "s"){
            var v = Number(document.getElementById("niewiadoma1").value);
            var u = Number(document.getElementById("niewiadoma2").value);
            var t = Number(document.getElementById("niewiadoma3").value);
            var wynik = 0.5 * (v + u) * t;
            document.getElementById("wynik").innerHTML = 's = ' + wynik + ' m'
        }
        if (document.getElementById("obliczanie").classList.value == "v"){
            var s = Number(document.getElementById("niewiadoma1").value);
            var u = Number(document.getElementById("niewiadoma2").value);
            var t = Number(document.getElementById("niewiadoma3").value);
            var wynik = (2 * s) / t - u;
            document.getElementById("wynik").innerHTML = 'v = ' + wynik + ' m/s'
        }
        if (document.getElementById("obliczanie").classList.value == "u"){
            var s = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var t = Number(document.getElementById("niewiadoma3").value);
            var wynik = (2 * s) / (t - v);
            document.getElementById("wynik").innerHTML = 'u = ' + wynik + ' m/s'
        }
        if (document.getElementById("obliczanie").classList.value == "t"){
            var s = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var u = Number(document.getElementById("niewiadoma3").value);
            var wynik = (2 * s) / (v + u);
            document.getElementById("wynik").innerHTML = 't = ' + wynik + ' s'
        }
    }
    function przemieszczenieS(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/przemieszczenie1.png"></div><em id="1em">prędkość końcowa w m/s</em><span id="niewiadomaLitera1">v =</span><input type="number" placeholder="prędkość końc." id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość pocz. w m/s</em><span id="niewiadomaLitera2">u =</span><input type="number" placeholder="prędkość pocz." id="niewiadoma2" class="niewiadomaInput" style="margin-right: 20px;"><em id="3em">czas w s</em><span id="niewiadomaLitera3">t =</span><input type="number" placeholder="czas" id="niewiadoma3" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.remove("u");
        document.getElementById("obliczanie").classList.remove("t");
        document.getElementById("obliczanie").classList.add("s");
    }
    function przemieszczenieV(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/przemieszczenie2.png"></div><em id="1em">przemieszczenie w m</em><span id="niewiadomaLitera1">s =</span><input type="number" placeholder="przemieszczenie" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość pocz. w m/s</em><span id="niewiadomaLitera2">u =</span><input type="number" placeholder="prędkość pocz." id="niewiadoma2" class="niewiadomaInput" style="margin-right: 20px;"><em id="3em">czas w s</em><span id="niewiadomaLitera3">t =</span><input type="number" placeholder="czas" id="niewiadoma3" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("s");
        document.getElementById("obliczanie").classList.remove("u");
        document.getElementById("obliczanie").classList.remove("t");
        document.getElementById("obliczanie").classList.add("v");
    }
    function przemieszczenieU(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/przemieszczenie3.png"></div><em id="1em">przemieszczenie w m</em><span id="niewiadomaLitera1">s =</span><input type="number" placeholder="przemieszczenie" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość końc. w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość końc." id="niewiadoma2" class="niewiadomaInput" style="margin-right: 20px;"><em id="3em">czas w s</em><span id="niewiadomaLitera3">t =</span><input type="number" placeholder="czas" id="niewiadoma3" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("s");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.remove("t");
        document.getElementById("obliczanie").classList.add("u");
    }
    function przemieszczenieT(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/przemieszczenie4.png"></div><em id="1em">przemieszczenie w m</em><span id="niewiadomaLitera1">s =</span><input type="number" placeholder="przemieszczenie" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość końcowa w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość końc." id="niewiadoma2" class="niewiadomaInput" style="margin-right: 20px;"><em id="3em">prędkość początkowa w m/s</em><span id="niewiadomaLitera3">u =</span><input type="number" placeholder="prędkość pocz." id="niewiadoma3" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("s");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.remove("u");
        document.getElementById("obliczanie").classList.add("t");
    }

function rzutPoziomy(){
    document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na rzut poziomy</div><div id="obliczanie" class="s"><form><div id="wzorImg"><img src="grafika/rzutPoziomy.png"></div><em id="1em">prędkość początkowa w m/s</em><span id="niewiadomaLitera1">v =</span><input type="number" placeholder="prędkość pocz." id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">wysokość w m</em><span id="niewiadomaLitera2">h =</span><input type="number" placeholder="wysokość" id="niewiadoma2" class="niewiadomaInput"></form></div><button id="gestoscSubmit" class="niewiadomaSubmit" onclick="obliczRzutPoziomy()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div></div><div id="wynik"></div><div style="line-height: 40;">* grawitacja na ziemi wynosi ~9.8 m/s<sup>2</sup></div>'
}

    function obliczRzutPoziomy(){
        g = 9.8;
        if (document.getElementById("obliczanie").classList.value == "s"){
            var v = Number(document.getElementById("niewiadoma1").value);
            var h = Number(document.getElementById("niewiadoma2").value);
            var wynik = v * Math.sqrt((2 * h) / g);
            document.getElementById("wynik").innerHTML = 's = ' + wynik + ' m'
        }
    }

function energKinekt(){
document.getElementById("wzor").innerHTML = '<div id="nazwa-wzoru">Wzór na energię kinektyczną</div><div>Wybierz tryb:</div><div id="tryby"><button class="niewiadoma" onclick="energKinektE()">Oblicz E<sub>k</sub> | Dane są m i v</button><button class="niewiadoma" onclick="energKinektM()">Oblicz m| Dane są E<sub>k</sub> i m</button><button class="niewiadoma" onclick="energKinektV()">Oblicz v | Dane są E<sub>k</sub> i m</button></div><div id="obliczanie" class="m"></div><button id="gestoscSubmit" class="niewiadomaSubmit" onclick="obliczEnergKinekt()">Oblicz</button><div id="odpowiedz"><div id="wynik"></div></div>'
}

    function obliczEnergKinekt(){
        if (document.getElementById("obliczanie").classList.value == "e"){
            var m = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var wynik = (m * Math.pow(v, 2)) / 2;
            document.getElementById("wynik").innerHTML = 'E<sub>k</sub> = ' + wynik + ' J'
        }
        if (document.getElementById("obliczanie").classList.value == "m"){
            var e = Number(document.getElementById("niewiadoma1").value);
            var v = Number(document.getElementById("niewiadoma2").value);
            var wynik = (2 * e) / Math.pow(v, 2);
            document.getElementById("wynik").innerHTML = 'm = ' + wynik + ' kg'
        }
        if (document.getElementById("obliczanie").classList.value == "v"){
            var e = Number(document.getElementById("niewiadoma1").value);
            var m = Number(document.getElementById("niewiadoma2").value);
            var wynik = Math.sqrt(e / (0.5 * m));
            document.getElementById("wynik").innerHTML = 'v = ' + wynik + ' m/s'
        }
    }
    function energKinektE(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energKinekt1.png"></div><em id="1em">masa w kg</em><span id="niewiadomaLitera1">m =</span><input type="number" placeholder="masa" id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("e");
    }
    function energKinektM(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energKinekt2.png"></div><em id="1em">energia kinektyczna w J</em><span id="niewiadomaLitera1">J =</span><input type="number" placeholder="energ. kinekt." id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">prędkość w m/s</em><span id="niewiadomaLitera2">v =</span><input type="number" placeholder="prędkość" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("e");
        document.getElementById("obliczanie").classList.remove("v");
        document.getElementById("obliczanie").classList.add("m");
    }
    function energKinektV(){
        document.getElementById("obliczanie").innerHTML = '<form><div id="wzorImg"><img src="grafika/energKinekt3.png" style="height: 45px;"></div><em id="1em">energia kinektyczna w J</em><span id="niewiadomaLitera1">J =</span><input type="number" placeholder="energ. kinekt." id="niewiadoma1" class="niewiadomaInput" style="margin-right: 20px;"><em id="2em">masa w kg</em><span id="niewiadomaLitera2">m =</span><input type="number" placeholder="masa" id="niewiadoma2" class="niewiadomaInput"></form>';
        document.getElementById("obliczanie").classList.remove("e");
        document.getElementById("obliczanie").classList.remove("m");
        document.getElementById("obliczanie").classList.add("v");
}

function poradnik(){
    document.getElementById("wzor").innerHTML = '<video width="1000px" style="margin-top: 15px;" controls><source src="grafika/poradnik.mp4"></source></video>'
}

function start(){
    document.getElementById("wzor").innerHTML = 'Dzięki tej stronie będziesz w stanie w prosty sposób obliczyć wzory fizyczne których zapewne tak bardzo nie lubiłeś na fizyce!<br>Po lewej stronie znajduje się zakładka ze wzorami, aby zobaczyć 3 kolejne, bardziej zaawansowane wzory naciśnij przycisk \'Standardowe\'<br>Jak używać kalkulatora wzorów?<br>Wybierz wzór, później tryb i wpisz dane. Kliknij \'Oblicz\' i twój wynik jest gotowy!<br>Większość wzorów posiada różne tryby: obliczanie tego samego, lecz przekształconego wzoru.<div style="margin-top: 300px;">Jeśli nie jesteś pewien jak używaćtej strony<div style="color: blue; cursor: pointer;" onclick="poradnik()">KLIKNIJ TU</div></div>'
}