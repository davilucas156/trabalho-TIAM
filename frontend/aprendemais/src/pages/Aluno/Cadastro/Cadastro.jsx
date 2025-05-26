import { useNavigate } from 'react-router-dom';
import CadastroForm from '../../../components/Form/CadastroForm';
import LogoSection from '../../../components/LogoSection/LogoSection';
import Footer from '../../../components/Footer/Footer';
import styles from './Cadastro.module.css';

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/home');
    };

    return (
        <div className={styles.appLayout}>
            <div className={styles.mainContainer}>
                <CadastroForm onSubmit={handleRegister} />
                <LogoSection />
            </div>
            <Footer />
        </div>
    );
}
