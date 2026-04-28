function segunda()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Treino de superiores</p>
    <hr>
    <p > Abdominais, braços, costas...
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eOztWENT9ao?si=vluraZCxRPNxGP-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Treino para Queimar Gordura e Tonificar Abdômen e Braços em casa</p> <hr>
    <br><br><br>
    <p class="treinoT"> Cardio </p>
    <hr>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kSolRWo1d38?si=Oyj7GRIkccn3GERL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><hr>
    <br><br><br>
     `
}

function terca()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Treino de pernas</p>
    <hr>
    <p > Quadríceps, Glúteos, Posteriores...
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SACRav7OOQ?si=v_iPboCXizeL3iEv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>
    <br><br><br>
    <p class="treinoT"> Cardio </p>
    <hr>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kSolRWo1d38?si=Oyj7GRIkccn3GERL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <hr>
    <br><br><br>
     `
}

const dias = document.querySelectorAll('.dias');

dias.forEach(dia => {
    dia.addEventListener('click', () => {

        // remove o ativo de todos
        dias.forEach(d => d.classList.remove('ativo'));

        // adiciona no clicado
        dia.classList.add('ativo');

    });
});

function quarta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` <p> quarta ainda virá </p>`
}

function quinta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` <p> quinta ainda virá </p>`
}

function sexta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` <p> sexta ainda virá </p>`
}

function sabado()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` <p> sábado ainda virá </p>`
}

function domingo()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` <p> domingo ainda virá </p>`
}