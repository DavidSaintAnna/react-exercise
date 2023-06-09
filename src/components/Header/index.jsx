import { Container, Profile, Logout} from "./styles";
import {RiShutDownLine} from 'react-icons/ri';


export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/DavidSaintAnna.png"
                alt="Foto do usuário"/>

                <div>
                <span>Bem-vindo</span>
                <strong>David Henrique</strong>
            </div>
            </Profile>
      
      <Logout>
        <RiShutDownLine/>
      </Logout>
        </Container>
    );
}