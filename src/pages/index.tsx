import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import contats from '../../public/images/contats.png'


export default function Home() {
  return (
    <>
    <Head>
     <title>MW Soluções WEB</title>
    </Head>
    <title>MW Soluções WEB</title>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Aumente sua presença online e maximize seus resultados!</h1>
               <span>Com nossos serviços de desenvolvimento web, gerenciamento de 
              tráfego pago e SEO, você pode otimizar sua presença online e alcançar mais clientes.🏆
            </span><br />
            <a>
              <button>Contato</button>
          </a>
          </section>
          
          <img src='/images/banner1.png' alt='banner-um'/>
        </div>
       <hr className={styles.divisor}/>
       <div className={styles.sectionContent}>
        <section>
          <h2>Desenvolvimento web personalizado</h2>
          <span>Não perca mais tempo tentando entender as complexidades do mundo 
            digital, deixe que nós cuidem disso por você, Entre em contato conosco 
            hoje mesmo para começar a otimizar seu site e alcançar seus objetivos 
            de negócios!
            </span>
        </section>
        <img src="/images/webDev.png" alt="imagem paginas" />
       </div>

       <hr className={styles.divisor}/>

       <div className={styles.sectionContent}>
       <img src="/images/webDes.png" alt="imagem paginas" />
        <section>
          <h2>Destaques do serviço</h2>
          <span>
          Desenvolvimento web personalizado <br />
          Gerenciamento de tráfego pago eficiente <br />
          Otimização de classificação em resultados de pesquisa (SEO) <br />
          Equipe de especialistas em desenvolvimento web <br />
          Aumento da conversão de visitantes em clientes <br />
          Melhora da experiência do usuário<br />

          </span>
        </section>
       </div>
      <div className={styles.nextLevelContent}>
        <div className={styles.iconsContato}>
          <a href=""><img src="/images/email.png" alt="" /> </a>
          <a href=""><img src="/images/telephone-call.png" alt="" /></a>
          <a href=""><img src="/images/instagram.png" alt="" /></a>
          <a href=""><img src="/images/facebook.png" alt="" /></a>
          <a href=""><img src="/images/twitter.png" alt="" /></a>
        </div>
        <h2>Otimize seu site e alcance mais clientes com <span className={styles.nomeEmpresa}> MW Soluções WEB</span> .</h2>
        <span>Desenvolver Web -  SEO e Pay Per Click - Gestão de Tráfegos Pagos - Omnichannel  </span>
        <a>
          <button>Quer vender mais ?</button>
        </a>
      </div>
      </main>
    </>
  )
}
