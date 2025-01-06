import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




import Logo from '../../assets/logo.svg';
import { Button } from '../../components/button';
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link,
} from "./style";



export function Login() {
    const navigate = useNavigate();
    const schema = yup
        .object({
            email: yup
                .string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
            password: yup
            .string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .required('Digite uma senha'),
        })
        .required();

    const {
         register, 
         handleSubmit, 
         formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors);

    const onSubmit = async (data) => {
        const {
            data: { token },
        } = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return 'Seja Bem-vindo(a) 👌';
                    },
                },
                error: 'Email ou Senha Incorretos 🤯',
            },
        );

        localStorage.setItem('token', token);

    }
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer! </span>
                    <br />
                    Acesse com seu <span>Login e senha. </span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>

                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <Link to="/cadastro">Clique aqui</Link>
                </p>


            </RightContainer>

        </Container>
    );
}

