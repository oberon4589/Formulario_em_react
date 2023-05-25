import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    // 6- Controlled inputs
    // 3- Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setbio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que a página seja recarregada
        console.log('Formulário enviado');
        console.log(name, email, bio, role);

        // 7- Resetando formulário
        setName('');
        setEmail('');
        setbio('');
    };

  return (
    <div>
        {/* 1- Criação de formulário */}
        {/* 5- Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name} />
            </div>

            {/* 2- Label envolvendo input */}
            <label>
                {/* 4- Simplificação de manipulação de state */}
                <span>E-mail</span>
                <input type="email" name="email" placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8- Textarea */}
            <label>
                <span>bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setbio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9- Select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                    <option value="admin">Programador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>

        

    </div>
  )
}

export default MyForm