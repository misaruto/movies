import { config } from '../../configs'
import { formatarData } from '../../utils/formatadores'
import { CompaniesList } from './CompaniesList'

import { IoArrowBack } from 'react-icons/io5'

import styles from './styles.module.css'
export const FilmeDetalhe = ({ filme }) => {
    const {
        poster_path = '',
        overview = '',
        title = '',
        release_date = '',
        production_companies: produtoras = [],
    } = filme
    return (
        <div className={styles.filmeDetalheContainer}>
            <div className={styles.filmeLogoContainer}>
                <img
                    src={`${config?.baseImageUrl500}${poster_path}`}
                    alt={`${overview}`}
                />
            </div>
            <div className={styles.filmeDadosContainer}>
                <div className={styles.filmeTituloBotaoVoltarContainer}>
                    <IoArrowBack className={styles.botaoVoltar} size={26} />
                    <p className={styles.filmeTitulo}>{title}</p>
                </div>
                <div className={styles.filmeDescricaoContainer}>{overview}</div>
                <div className={styles.filmeInfoContainer}>
                    <div>
                        <p>Data lançamento: {formatarData(release_date)}</p>
                    </div>
                    <CompaniesList lsProdutoras={produtoras} />
                </div>
                <div className={styles.filmeLinksContainer}></div>
            </div>
        </div>
    )
}
