import React from 'react'
import styles from './style.module.css'
import { MdDriveFileRenameOutline } from "react-icons/md"; 
import { 
  FaLock, 
  FaEnvelope, 
  FaAddressCard, 
  FaPhone, 
  FaFlag, 
  FaMapMarkerAlt, 
  FaCalendarAlt 
} from 'react-icons/fa'

export const InputVasco = ({ placeholder, Input, id, maxLength }) => {
  const mapType = () => {
    switch (Input) {
      case 'password':
        return 'password'
      case 'email':
        return 'email'
      case 'date':
        return 'date'
      default:
        return 'text'
    }
  }

  const mapIcon = () => {
    switch (id) {
      case 'nome':
        return <MdDriveFileRenameOutline className={styles.icon} />
      case 'email':
        return <FaEnvelope className={styles.icon} />
      case 'cpf':
        return <FaAddressCard className={styles.icon} />
      case 'senha':
      case 'confirmarSenha':
        return <FaLock className={styles.icon} />
      case 'telefone':
        return <FaPhone className={styles.icon} />
      case 'time':
        return <FaFlag className={styles.icon} />
      case 'cep':
      case 'rua':
      case 'cidade':
      case 'uf':
        return <FaMapMarkerAlt className={styles.icon} />
      case 'nascimento':
        return <FaCalendarAlt className={styles.icon} />
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <input
        id={id}
        placeholder={placeholder || 'Digite aqui...'}
        type={mapType()}
        className={styles.input}
        maxLength={maxLength}
      />
      {mapIcon()}
    </div>
  )
}