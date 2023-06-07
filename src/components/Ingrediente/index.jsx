import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles'

export function Ingrediente({ isNew, value, onClick, ...rest}){
    return (
        <Container isNew={isNew}>
            {isNew ? (
                <div className="add-ingrediente titulo"> <input type="text" value={value} { ...rest } />
                <button className='button-add' type="button"><FiPlus /></button></div>
            ) : (
                <div className="delete-ingrediente titulo"> <input type="text" value={value} { ...rest } />
                <button className='button-delete' type="button"><FiX /></button></div>
            )}
            

           
        </Container>
    )
}