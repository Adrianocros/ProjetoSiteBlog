import {ReactElement, cloneElement} from 'react'
import Link,{LinkProps} from "next/link"
import {useRouter} from 'next/router'




interface ActiveLinkProps extends LinkProps {
    children:ReactElement;
    activeClassName:string;
}

export function ActiveLink({children, activeClassName,...rest }: ActiveLinkProps ){

    const {asPath} =  useRouter(); //Seestiver na pagina recebe a pagina

    //Se a rota/pagina estiver acessando for = ao link actiiva o className
    const className = asPath === rest.href ? activeClassName : '';

    return(
        <Link {...rest} legacyBehavior>
           {cloneElement(children, {
            className
           })}
        </Link>
    )
}