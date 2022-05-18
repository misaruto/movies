import { useCallback, useEffect, useRef, useState } from 'react'
import { movieApi } from '../../services/api'
import { FilmeLista } from '../../components/FIlmeLista'
import styles from './styles.module.css'

export const Home = () => {
    const [lsFilme, setLsFilme] = useState([])
    const [nrPagina, setNrPagina] = useState(1)
    const loadMoreRef = useRef(null)

    const getListaFilmes = useCallback(async (nrPaginaBusca) => {
        const { status, data } = await movieApi.get('/discover/movie?', {
            params: { page: nrPaginaBusca },
        })
        if (status === 200) {
            setLsFilme((old) => [...old, ...data['results']])
        }
    }, [])

    useEffect(() => {
        if (nrPagina > 0) {
            getListaFilmes(nrPagina)
        }
    }, [nrPagina, getListaFilmes])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        }
        const observer = new IntersectionObserver((entities) => {
            const target = entities[0]

            if (target.isIntersecting) {
                setNrPagina((old) => old + 1)
            }
        }, options)

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }
    }, [])
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeTitleContainer}>
                <h4>Filmes</h4>
            </div>

            <div>
                <FilmeLista lsFilme={lsFilme} />
            </div>

            <div ref={loadMoreRef}>
                <FilmeLista lsFilme={[1, 2, 3, 4, 5]} inLoading={true} />
            </div>
        </div>
    )
}
