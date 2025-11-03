import React from 'react'
import { InputVasco } from '../../Components/Input/Index'
import { ButtonComponent } from '../../Components/Button'
import styles from './style.module.css' 
import VascoId from '../../assets/VascoId.png'
import { Navegacao } from '../../Components/Navegacao'

export function Login() {
  return (
    <> 
      <Navegacao />
      
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <img 
            src={VascoId}
            alt="Seja Sócio Gigante" 
            className={styles.logoImage} 
          />

          <div className={styles.inputGroup}>
            <label htmlFor="login">CPF ou Email:</label>
            <InputVasco 
              placeholder="Digite seu CPF ou Email" 
              Input="text"
              id="login"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha:</label>
            <InputVasco 
              placeholder="Digite sua senha" 
              Input="password"
              id="senha"
            />
          </div>

          <ButtonComponent props="Entrar" />

          <a href="#" className={styles.forgotPassword}>
          Esqueceu sua senha?
          </a>

        </div>
      </div>
    </>
  )
}