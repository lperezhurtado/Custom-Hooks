import { useState } from "react";


export const useForm = ( initialForm = {} ) => {


    const [formState, setFormState] = useState(initialForm); 
      
    const onInputChange = ({target}) => { //el event es lo que recibe del input. Y accediendo a .target se accede a todos los valores que hay en el input
        const { name, value } = target; // se estan cogiendo el valor de name y value del input
    
        setFormState({
            ...formState,
            [ name ]: value, //los corchetes permiten establecer un valor que ya existe
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    
    return {
        ...formState, //Esta desestructuracion permite poder acceder directamente a cada variable del objeto, sin hacer objeto.variable
        formState,
        onInputChange,
        onResetForm,
    }
}
