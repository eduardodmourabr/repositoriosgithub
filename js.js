const ul = document.querySelector('ul')
var h2 = document.querySelector('h2')
var a = document.querySelector('a')
var input = document.querySelector('input')
var btn = document.querySelector('button')

/* 'https://api.github.com/users/eduardodmourabr/repos' */



function getApiGitHub() {
    
    if(input.classList.contains('input-off')){
        location.reload();
    }else{
        
    
   
   
    let name = document.querySelector('input');
    console.log(name.value);
  fetch(`https://api.github.com/users/${name.value}/repos`)
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let li = document.createElement('li')

        li.innerHTML = `
        <strong>Nome:${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')
            .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)

      console.log(item)
      h2.textContent = `Usuário: ${item.owner.login}`
      btn.textContent = 'Nova Busca'
      input.classList.add('input-off')
      

      })

    }).catch(e => console.log(e))
    }
}

//getApiGitHub()