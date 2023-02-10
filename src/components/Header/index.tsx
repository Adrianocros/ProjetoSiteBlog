import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.png'
import { ActiveLink } from '../ActiveLink'





export function Header(){
    return(
        <header className={styles.headerContainer}>
           <div className={styles.headerContent}>
           
           <ActiveLink href="/" activeClassName={styles.active} >
                <a>
                    <Image src={logo}  alt="MW Solucoes WB"/> 
               </a>
            </ActiveLink>
            
            <nav>
            <ActiveLink href="/" activeClassName={styles.active} >
                <a >Home</a>
            </ActiveLink>
            <ActiveLink href="/portifolho" activeClassName={styles.active} >
                <a >Portifolho</a>
            </ActiveLink>
            <ActiveLink href="/sobre" activeClassName={styles.active} >
                <a>Sobre </a>
            </ActiveLink>
            <ActiveLink href="/posts" activeClassName={styles.active}>
                <a>Posts</a>
            </ActiveLink>
            </nav>

            <a className={styles.readyButton} type='button'  href="">Entre em contato</a>
           </div>
            

        </header>
    )
}