import vasco from './style.module.css'

export const ButtonComponent = ({props}) => {

  return (
    <button className={vasco.text}>
      {props ? props : 'Casdastre-se'}
    </button>
  )
}