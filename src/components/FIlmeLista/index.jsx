import { useNavigate } from 'react-router-dom'
import { FilmeItem } from './FilmeItem'

import styles from './styles.module.css'

export const FilmeLista = ({ lsFilme = [], inLoading = false }) => {
    const navigate = useNavigate()
    const handleClickFilme = (filmeId) => {
        navigate(`/detalhes/${filmeId}`)
    }
    return (
        <div className={styles.listaFilmeContainer}>
            {lsFilme.map((filme, index) => (
                <FilmeItem
                    key={index}
                    filme={filme}
                    onClick={handleClickFilme}
                    inLoading={inLoading}
                />
            ))}
        </div>
    )
}
