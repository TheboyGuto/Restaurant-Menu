const items = [
    {tipo: 'cafe', nome: 'panqueca com caramelo', preco: 15.99, descricao: 'Panqueca feita a mão coberta com caramelo', imagem: 'panqueca.jpg'},
    {tipo: 'cafe', nome: 'bacon e ovos', preco: 12, descricao: 'Bacon frito e ovos', imagem: 'panqueca.jpg'},
    {tipo: 'almoco', nome: 'Alaminuta', preco: 32.00, descricao: 'Arroz,Feijão,Ovo,batata frita e bife', imagem: 'alaminuta.jpg'},
    {tipo: 'almoco', nome: 'bife á cavalo', preco: 26.7, descricao: 'bife e ovo acompanhados de arroz e feijão', imagem: 'panqueca.jpg'},
    {tipo: 'shake', nome: 'Shake de Baunilha', preco: 8, descricao: 'milkshake batido sabor baunilha', imagem: 'shake.jpg'},
    {tipo: 'shake', nome: 'Shake de Chocolate', preco: 8, descricao: 'Milkshake batido sabor chocolate', imagem: 'panqueca.jpg'},
    {tipo: 'janta', nome: 'bife de Alcatra com saladas', preco: 40.00, descricao: 'Bife de alcatra frito em ervas finas com salada de espinafre', imagem: 'bife.jpg'},
    {tipo: 'janta', nome: 'Hamburguer de Cheddar', preco: 24.50, descricao: 'Hamburguer Delicioso', imagem: 'panqueca.jpg'}
]




function filterItems(item){
    novo_cardapio = [];
    filtro = item.getAttribute("Name");
    if(filtro == 'todos'){
        ChangeMenu(items); 
    }else{
        novo_cardapio = items.filter(item => item.tipo == filtro)
        ChangeMenu(novo_cardapio)
    }     
}


function ChangeMenu(cardapio){
           let menuDom = document.getElementById('Items');    
            const cardapioModificado = cardapio.map((item) => {
            return `<div class="item">
            <img class="imgproduct" src="assets/${item.imagem}" alt="">
            <div class="itemHeader">
                    <div class="itemTitle">
                        <h4>${item.nome}</h4>
                        <h4 class="price">R$: ${item.preco}</h4>
                    </div>
                    <span>${item.descricao}</span>
                </div>
            </div>`
        });
        let cardapioModificadoString = cardapioModificado.join('');
        menuDom.innerHTML = cardapioModificadoString;
        console.log(menuDom.innerHTML)
        

}



