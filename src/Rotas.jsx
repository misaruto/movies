import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detalhes } from './pages/Detalhes'
import { Home } from './pages/Home'
const Rotas = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:prPagina" element={<Home />} />
                <Route path="/detalhes/:prFilmeId" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas
