interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

class CriarUsuario implements Usuario {
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string) { 
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public validarEmail(): boolean {
        return this.email.includes('@') && this.email.includes('.')
    }

    public validarSenha(): boolean {
        return this.senha.length >= 8;
    }

    public validarUsuario(): void {
        if (this.validarEmail() && this.validarSenha()) {
            console.log("Usuario criado com sucesso");
        }else {
            console.log("Erro ao criar usuario. Verifique os dados inseridos");
        }
        
    }
}

const novoUsuario = new CriarUsuario("Joao", "joao@gmai.com", "senha1234" )

novoUsuario.validarSenha();
