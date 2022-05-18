import React from 'react'
import styles from './styles.module.css'

import {
    BsChevronCompactLeft,
    BsChevronDoubleLeft,
    BsChevronDoubleRight,
    BsChevronCompactRight,
} from 'react-icons/bs'
import { gerarArrayRange } from '../../utils/geradores'

const FooterPageNavigator = ({ nrPagina, handleChangeNrPagina }) => {
    const tamanhoPuloPadrao = 4
    const tamanhoButoesDefault = 20
    const paginaMin = 1
    const paginaMax = 100
    const MostrPaginasEnumeradas = () => {
        const lsNumeroPaginas = gerarArrayRange(nrPagina)
        return (
            <div className={styles.paginasEnumeradasContainer}>
                {lsNumeroPaginas.map((nrPg, index) => {
                    return (
                        <button
                            key={index}
                            type="button"
                            className="button-text-only"
                            onClick={() => {
                                handleChangeNrPagina(nrPg)
                            }}
                            disabled={nrPg === nrPagina}
                        >
                            <span className={styles.paginaBtnText}>{nrPg}</span>
                        </button>
                    )
                })}
            </div>
        )
    }
    return (
        <div className={styles.footerPageNavigatorContainer}>
            <BsChevronDoubleLeft
                size={tamanhoButoesDefault}
                cursor="pointer"
                onClick={() => {
                    handleChangeNrPagina(paginaMin)
                }}
            />
            <BsChevronCompactLeft
                size={tamanhoButoesDefault}
                cursor="pointer"
                onClick={() => {
                    handleChangeNrPagina(nrPagina - 1)
                }}
            />
            <MostrPaginasEnumeradas />
            <BsChevronCompactRight
                size={tamanhoButoesDefault}
                cursor="pointer"
                onClick={() => {
                    handleChangeNrPagina(nrPagina + 1)
                }}
            />
            <BsChevronDoubleRight
                size={tamanhoButoesDefault}
                cursor="pointer"
                onClick={() => {
                    handleChangeNrPagina(paginaMax)
                }}
            />
        </div>
    )
}

export default FooterPageNavigator
