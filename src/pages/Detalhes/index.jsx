import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FilmeDetalhe } from '../../components/FilmeDetalhe'
import { movieApi } from '../../services/api'
import styles from './styles.module.css'
export const Detalhes = () => {
    const { prFilmeId } = useParams()
    const [filme, setFilme] = useState({})

    const getFilme = useCallback(async () => {
        const { status, data } = await movieApi.get(`/movie/${prFilmeId}?`)
        if (status === 200) {
            console.log(data)
            setFilme(data)
        }
    }, [prFilmeId])

    useEffect(() => {
        getFilme()
    }, [getFilme])

    return (
        <div
            className={styles.detalhesContainer}
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
            }}
        >
            <FilmeDetalhe filme={filme} />
        </div>
    )
}
