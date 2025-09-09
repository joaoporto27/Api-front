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
        <div className={styles.containerFrase}>

          <p className={styles.frase}>
            "Nada ofusca o brilho de quem nasceu para brilhar".
          </p>

        </div>
        <div className={styles.containerImagem}>
          <div className={styles.imagemPerfil}>
            <a href="https://github.com/joaoporto27" target="_blank">
              <Image
                src="/img/Perfil.jpeg"
                alt="Foto de Perfil"
                width={140}
                height={140}
              />
            </a>
          </div>
        </div>

        <h1 className={styles.title}>
          Sobre Mim
        </h1>

        <div className={styles.miniContainer}>
          <div className={styles.textoSobre}>
            <p className={styles.paragrafo}>
              Olá! Sou um desenvolvedor apaixonado por criar experiências web incríveis.
            </p>

            <p className={styles.paragrafo}>
              Este projeto foi criado para demonstrar como consumir APIs públicas
              usando Next.js e React, com foco na API dos Simpsons.
            </p>

            <p className={styles.paragrafo}>
              Gosto de trabalhar com tecnologias modernas como React, Next.js,
              Tailwind CSS e sempre estou em busca de aprender algo novo.
            </p>
          </div>
        </div>

        <div className={styles.containerBotao}>
          <Link
            href="/personagens"
            className={styles.botao}
          >
            Ir para a API
          </Link>
        </div>
      </div>
    </div>
  )
}
