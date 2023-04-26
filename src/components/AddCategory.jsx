import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    
    // Con esta función recibimos cada una de las letras ingresadas al input
    // por medio del target
    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }

    // Al momento de dar clic evita la recarga de la página con el preventDefault()
    const onSubmit = (event) => {
        event.preventDefault()

        // Evitamos que se manden categorías vacías
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')

    }

  return (
    // Si solo se recibe un argumento para llamar una función se puede quitar
    // <form onSubmit={ (event) => onSubmit(event)}>
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
