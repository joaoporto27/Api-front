import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function SobreMim() {
  return (
    <div className={styles.container}>

      <div className={styles.card}>
      <div className={styles.botaoVoltar}>
        <Link href="/" className={styles.link}>
          ← Voltar para Home
        </Link>
      </div>
        
        <div className={styles.containerImagem}>
          <div className={styles.imagemPerfil}>
            <Image
              src="/img/Homer.png"
              alt="Foto de Perfil"
              width={140}
              height={140}
            />
          </div>
        </div>

        <h1 className={styles.title}>
          Sobre Mim
        </h1>
        
        <div className={styles.miniContainer}>
          <div className={styles.textSection}>
            <p>
              Olá! Sou um desenvolvedor apaixonado por criar experiências web incríveis.
            </p>
            
            <p>
              Este projeto foi criado para demonstrar como consumir APIs públicas 
              usando Next.js e React, com foco na API dos Simpsons.
            </p>
            
            <p>
              Gosto de trabalhar com tecnologias modernas como React, Next.js, 
              Tailwind CSS e sempre estou em busca de aprender algo novo.
            </p>
          </div>

          <div className={styles.linguagens}>
            <h3 className={styles.titulosLinguagens}>
              Tecnologias
            </h3>
            
            <div className={styles.imagem}>
              <div className={styles.imagemCard}>
                <Image
                  src="/img/Html.png"
                  alt="HTML"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>HTML</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/Css.png"
                  alt="CSS"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>CSS</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/JavaScript.png"
                  alt="JavaScript"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>JavaScript</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/Sql.png"
                  alt="SQL"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>SQL</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/PostgreSQL.png"
                  alt="PostgreSQL"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>PostgreSQL</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/NextJS.png"
                  alt="Next.js"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>Next.js</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/React.png"
                  alt="React"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>React</span>
              </div>
              
              <div className={styles.imagemCard}>
                <Image
                  src="/img/NodeJS.png"
                  alt="Node.js"
                  width={60}
                  height={60}
                  className={styles.linguagemImagem}
                />
                <span className={styles.linguagemTexto}>Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardBotao}>
          <Link 
            href="/api" 
            className={styles.botao}
          >
            Ir para a API
          </Link>
        </div>
      </div>
    </div>
  )
}
