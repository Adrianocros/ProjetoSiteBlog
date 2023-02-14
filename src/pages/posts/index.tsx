import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import thumbImg from '../../../public/images/thumb.png'
import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi'

export default function Posts(){
    return(
       <>
       <Head>
        <title>Blog - MW Soluções WEB</title>
       </Head>
       <main className={styles.container}>
        <div className={styles.posts}>
            <Link href="/" legacyBehavior>
                <a>
                   <Image src={thumbImg} 
                   alt="Post imagem 01"
                   width={720}
                   height={410}
                   quality={100}
                   />
                <strong>tecnologia REACT</strong>
                <time>10 Janieoro 2021</time>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero consequatur commodi consectetur quia delectus, tempore aspernatur perspiciatis autem, inventore vero deserunt aut ipsam, ullam dolor illo at tempora dicta!</p>
                </a>
            </Link>
            <div className={styles.buttonNavigate}>
                <div>
                    <button>
                        <FiChevronsLeft size={25} color="#fff" />
                    </button>
                    <button>
                        <FiChevronLeft size={25} color="#fff" />
                    </button>
                </div>
                <div>
                    <button>
                        <FiChevronsRight size={25} color="#fff" />
                    </button>
                    <button>
                        <FiChevronRight size={25} color="#fff" />
                    </button>
                </div>
            </div>
        </div>
       </main>
       </>
    )
}