import React from 'react'
import { InputVasco } from '../../Components/Input/Index'
import { ButtonComponent } from '../../Components/Button'
import styles from './style.module.css'
import logoSuperior from '../../assets/logo_vasco_header_nova.png'
import bannerSocioGigante from '../../assets/banner-seja-socio-gigante-728x90-1.png'

export function Home() {
  return (
    <div className={styles.pageContainer}>

      <img 
        src={logoSuperior} 
        alt="Vasco" 
        className={styles.logoSuperior} 
      />

      <div className={styles.formContainer}>
        <img 
          src={bannerSocioGigante}
          alt="Seja Sócio Gigante" 
          className={styles.logoImage} 
        />

        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome:</label>
          <InputVasco 
            placeholder="Digite seu nome completo" 
            input="text"
            id="nome"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <InputVasco 
            placeholder="Digite seu email" 
            input="email" 
            id="email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="cpf">CPF:</label>
          <InputVasco 
            placeholder="Digite seu cpf" 
            Input="text"
            id="cpf"
          />
        </div>

        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha:</label>
            <InputVasco 
              placeholder="Digite sua senha" 
              Input="password"
              id="senha"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <InputVasco 
              placeholder="Confirme sua senha" 
              Input="password"
              id="confirmarSenha"
            />
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <InputVasco 
              placeholder="Digite seu telefone" 
              Input="tel"
              id="telefone"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="time">Time do Coração:</label>
            <InputVasco
              placeholder={"Se não for o Vasco, Chora!"}
              Input="text"
              id="time"
            />
          </div>
        </div>

        <div className={styles.addressContainer}>
          <h3 className={styles.subTitle}>Endereço</h3>
          <div className={styles.addressGrid}>
            
            <div className={`${styles.inputGroup} ${styles.cep}`}>
              <label htmlFor="cep">CEP:</label>
              <InputVasco placeholder="Digite seu CEP" Input="text" id="cep" />
            </div>
            
            <div className={`${styles.inputGroup} ${styles.rua}`}> 
              <label htmlFor="rua">Rua / Logradouro:</label>
              <InputVasco placeholder="Ex: Av. Brasil, 123" Input="text" id="rua" />
            </div>
            
            <div className={`${styles.inputGroup} ${styles.cidade}`}>
              <label htmlFor="cidade">Cidade:</label>
              <InputVasco placeholder="Petrópolis" Input="text" id="cidade" />
            </div>
            
            <div className={`${styles.inputGroup} ${styles.uf}`}>
              <label htmlFor="uf">UF:</label>
              <InputVasco placeholder="RJ" Input="text" id="uf" />
            </div>
          </div>
        </div>
        
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label>Gênero:</label>
            <div className={styles.radioGroup}>
              <div className={styles.radioOption}>
                <input 
                  type="radio" name="genero" id="radioMasculino" value="masculino" 
                  className={styles.radioInput}
                />
                <label htmlFor="radioMasculino" className={styles.radioLabel}>Masculino</label>
              </div>
              <div className={styles.radioOption}>
                <input 
                  type="radio" name="genero" id="radioFeminino" value="feminino" 
                  className={styles.radioInput}
                />
                <label htmlFor="radioFeminino" className={styles.radioLabel}>Feminino</label>
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="nascimento">Data de Nascimento:</label>
            <InputVasco 
              placeholder="mm/dd/yyyy"
              Input="date" 
              id="nascimento"
            />
          </div>
        </div>

        <ButtonComponent props="Clique e seja feliz!" />

      </div>

    </div> 
  )
}