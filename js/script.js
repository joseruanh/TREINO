function rel()
{
    window.location.reload()
}

function segunda()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Treino de superiores</p>
    <hr>
    <p> Abdominais...</p>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LPzfw9RSIVk?si=_n7nThWgIub2ZbFb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <hr>
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
    <p> Quadríceps, Glúteos, Posteriores... <p>
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


//


function quarta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Superiores</p>
    <hr>
    <p> Braços... </p>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7epgT-McBJ4?si=8rCLsXz6vJXdCw_5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>

    <br><br><br>
    <p class="treinoT"> Cardio </p>
    <hr>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/F2sQjttXlko?si=uubfIGj1vPSRwCGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <hr>
    <br><br><br>
    
     `
}

function quinta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Inferiores</p>
    <hr>
    <p> Glúteos, posterior de coxa... </p>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/H_8wEZGx9zk?si=CnL7SSySIHWHOZCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>

    <br><br><br>
    <p class="treinoT"> Cardio </p>
    <hr>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kSolRWo1d38?si=Oyj7GRIkccn3GERL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <hr>
    <br><br><br>
    
     `
}

//

function sexta()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Full body</p>
    <hr>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YbQghaqU-uk?si=JeiIBIGzN69I7qTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>    
     `
}

//

function sabado()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Manter a atividade</p>
    <hr>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kSolRWo1d38?si=gS1vJaKcYXEVtz6p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>    
     `
}

function domingo()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` 
    <p class="treinoT">Manter a atividade</p>
    <hr>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gwyIdKpG_0E?si=Nk-MCF-FavaNhA5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p> <hr>    
     `
}