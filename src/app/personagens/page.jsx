"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

export default function page() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://thesimpsonsapi.com/api/characters');
            
            const results = data.results || [];
            
            setCharacters(results);
        } catch (error) {
            console.error('Erro ao buscar personagens:', error);
            setCharacters([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    const handleCardClick = (char) => {
        console.log(`Você clicou em ${char.name}`);
    };

    const handleImageError = (e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Personagens dos Simpsons</h1>

            {loading && <p className={styles.loading}>Carregando...</p>}

            <div className={styles.grid}>
                {characters.map((char, index) => (
                    <div key={char.id || index} className={styles.card} onClick={() => handleCardClick(char)}>
                        <h3 className={styles.characterName}>{char.name}</h3>
                        <p className={styles.characterInfo}>Idade: {char.age}</p>
                        <p className={styles.characterInfo}>Data de nascimento: {char.birthdate}</p>
                        <p className={styles.characterInfo}>Gênero: {char.gender}</p>
                        <p className={styles.characterInfo}>Ocupação: {char.occupation}</p>
                        <p className={styles.characterInfo}>Status: {char.status}</p>
                        
                        <div className={styles.characterImage}>
                            <img 
                                src={`https://cdn.thesimpsonsapi.com/500/character/${char.id}.webp`}
                                alt={char.name}
                                width="100"
                                onError={handleImageError}
                                style={{display: 'block', margin: '0 auto'}}
                            />
                        </div>
                        
                        {char.phrases && char.phrases.length > 0 && (
                            <div className={styles.phrasesSection}>
                                <h4 className={styles.phrasesTitle}>Frases famosas:</h4>
                                <ul className={styles.phrasesList}>
                                    {char.phrases.slice(0, 3).map((phrase, index) => (
                                        <li key={index} className={styles.phraseItem}>"{phrase}"</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}