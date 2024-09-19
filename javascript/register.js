
// Função para cadastrar usuário
async function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;

    // Mostra a mensagem de carregamento
    document.getElementById('mensagem').innerHTML = 'Carregando...';

    try {
        // Faz a requisição POST para cadastrar o usuário
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                job: cargo
            })
        });
        
        const data = await response.json();

        // Exibe a mensagem de sucesso
        document.getElementById('mensagem').innerHTML = `Usuário ${data.name} cadastrado com sucesso como ${data.job}!`;

    } catch (error) {
        document.getElementById('mensagem').innerHTML = 'Erro ao cadastrar usuário.';
    }
}

// Função para listar usuários
async function listarUsuarios() {
    document.getElementById('listaUsuarios').innerHTML = 'Carregando...';

    try {
        // Faz a requisição GET para listar usuários
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();

        const usuarios = data.data;

        // Limpa a tabela antes de listar os usuários
        let listaHTML = '';

        // Preenche a tabela com os dados dos usuários
        usuarios.forEach(usuario => {
            listaHTML += `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.first_name} ${usuario.last_name}</td>
                    <td>${usuario.email}</td>
                </tr>
            `;
        });

        // Insere a lista de usuários na tabela
        document.getElementById('listaUsuarios').innerHTML = listaHTML;

    } catch (error) {
        document.getElementById('listaUsuarios').innerHTML = 'Erro ao carregar usuários.';
    }
}
