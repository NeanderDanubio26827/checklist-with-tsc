import { Flex, Text, useToast } from "@chakra-ui/react";
import {  ChangeEvent, useState } from "react";
import { FormLabelLogin } from "./components/formlabel";
import { ButtonEnter } from "./components/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";


export const ViewLogin = () => {

  //console.log('view do login!')
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: ChangeEvent) => {
    e.preventDefault();

    //console.log("botão de login acionado")
    try {
      setIsLoading(true);
      // Faça a autenticação
      await auth.authenticate(login, password);
      console.log(login, password)
      // Navegue para a página desejada após a autenticação
      navigate('/listalt');
    } catch (error) {
      toast({
        title: 'Erro ao fazer login',
        description: 'Verifique suas credenciais e tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      borderRadius="20px"
      bg="rgba(255, 255, 255, 1)"
      flexDirection="column"
      justify="center"
      w={{ xl: "423px", lg: "423px", md: "423px", sm: "380px" }}
      h={{ xl: "407px", lg: "500px", md: "500px", sm: "500px" }}

    >
      <Flex align="center" justify="center" flexDirection="column">
        <FormLabelLogin
          label="Usuário"
          typeInput="text"
          textHelp={null}
          placeHolder="Informe matrícula ou cpf"
          name="matricula"
          onChange={ (e) => setLogin(e.target.value)}
          value={login}
        />
      </Flex>

      <Flex align="center" justify="center">
        <FormLabelLogin
          label="password"
          typeInput="password"
          textHelp={null}
          placeHolder="Informe sua senha"
          name="senha"
          onChange={(e) => setPassword(e.target.value)} value={password} />
      </Flex>

      <Flex gap={6} flexDirection="column" justifyContent="space-between">
        <Flex pl={5}>
          <Link to="#">
            <Text color="rgba(49, 130, 206, 1)">Recuperar password</Text>
          </Link>
        </Flex>

        <Flex align="center" justify="center">
          <ButtonEnter isDisabled={isLoading} handleSubmit={ () => handleSubmit()  } />

        </Flex>
      </Flex>
    </Flex>
  );
}

/* 

              (e) => {
                setLogin(e.target.value)
                if (login.length == 2) {
                  setLogin(e.target.value + '.')
                }else if (login.length === 6) {
                    setLogin(e.target.value + '-')
                }else if (login.length === 8 ) {
                  setLogin(e.target.value + '-')
                }else if (login[login.length - 1] !== '-' && login.length > 7){
                  setLogin(login.slice(0, -2))
                }else if (login[login.length - 1] == '-' && login.length < 7){
                  setLogin(login.slice(0, -1))
                }                
              }
*/