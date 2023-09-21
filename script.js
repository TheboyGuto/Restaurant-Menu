const items = [
    {tipo: 'cafe', nome: 'panqueca com caramelo', preco: 15.99, descricao: 'Panqueca feita a mão coberta com caramelo', imagem: ''},
    {tipo: 'almoco', nome: 'Alaminuta', preco: 32.00, descricao: 'Arroz,Feijão,Ovo,batata frita e bife', imagem: ''},
    {tipo: 'shake', nome: 'Shake de Baunilha', preco: 8, descricao: 'milkshake batido sabor baunilha', imagem: ''},
    {tipo: 'janta', nome: 'bife de Alcatra com saladas', preco: 40.00, descricao: 'Bife de alcatra frito em ervas finas com salada de espinafre', imagem: ''}
]


console.log(items);



function filterItems(item){
    novo_cardapio = [];
    filtro = item.getAttribute("Name");
    if(filtro == 'todos'){
        console.log(items)
        return items
    }else{
        novo_cardapio = items.filter(item => item.tipo == filtro)
        console.log(novo_cardapio)
        return novo_cardapio
    }     
}




