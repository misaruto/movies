import styles from './styles.module.css'
export const CompaniesList = ({ lsProdutoras = [] }) => {
    return (
        <div className={styles.logos_container}>
            <p>Produtoras: </p>
            <div className={styles.logos_img_container}>
                {lsProdutoras?.map((comp, index) => (
                    <img
                        key={index}
                        alt={comp?.name}
                        src={`https://image.tmdb.org/t/p/w45${comp?.logo_path}`}
                    />
                ))}
            </div>
        </div>
    )
}
