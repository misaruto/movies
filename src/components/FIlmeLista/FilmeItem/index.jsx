import { config } from '../../../configs'
import styles from './styles.module.css'
export const FilmeItem = ({ filme, onClick, inLoading }) => {
    return (
        <div
            className={styles.filmeContainer}
            onClick={() => {
                !inLoading && onClick(filme.id)
            }}
        >
            {!inLoading ? (
                <>
                    <div className={styles.bannerContainer}>
                        <img
                            src={`${config?.baseImageUrl}${filme?.poster_path}`}
                            alt={`${filme?.overview}`}
                        />
                    </div>
                    <div className={styles.tituloContainer}>
                        <h3>{filme?.title}</h3>
                    </div>
                </>
            ) : (
                <div
                    className="loading-background"
                    style={{ width: 240, height: 400 }}
                ></div>
            )}
        </div>
    )
}
