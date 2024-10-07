import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ProfilePage.module.css';

const ProfilePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        nascimento: '',
        telefone: '',
        senha: '',
        confirmarSenha: ''
    });
    const [showSenha, setShowSenha] = useState<boolean>(false);

    const handleSectionChange = (section: string) => {
        setActiveSection(prev => (prev === section ? null : section));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className={`${styles.container} container mt-5`}>
            <h1 className={styles.text}>Dados do Perfil</h1>
            <div className={styles.buttonContainer} role="group">
                <button
                    type="button"
                    className={`${styles.button} ${styles.editProfile}`}
                    onClick={() => handleSectionChange('editProfile')}
                >
                    Editar Perfil
                </button>
                <button
                    type="button"
                    className={`${styles.button} ${styles.editProfile}`}
                    onClick={() => handleSectionChange('sales')}
                >
                    Mostrar Vendas
                </button>
                <button
                    type="button"
                    className={`${styles.button} ${styles.editProfile}`}
                    onClick={() => handleSectionChange('purchases')}
                >
                    Mostrar Compras
                </button>
            </div>
            <div className={styles.sectionContent}>
                {activeSection === 'editProfile' && (
                    <div className={styles.loginContainer}>
                        <div className={styles.content}>
                            <h2>Editar Perfil</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="CPF"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="telefone"
                                    placeholder="Telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type={showSenha ? "text" : "password"}
                                    name="senha"
                                    placeholder="Senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type={showSenha ? "text" : "password"}
                                    name="confirmarSenha"
                                    placeholder="Confirmar senha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className={styles.loginButton}>Editar</button>
                            </form>
                            <div>
                                <input
                                    id="mostrarSenha"
                                    type="checkbox"
                                    checked={showSenha}
                                    onChange={() => setShowSenha(!showSenha)}
                                />
                                Mostrar Senha
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'sales' && (
                    <div>
                        <h2>Vendas</h2>
                        <p>Lista de vendas aqui...</p>
                    </div>
                )}
                {activeSection === 'purchases' && (
                    <div>
                        <h2>Compras</h2>
                        <p>Lista de compras aqui...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
