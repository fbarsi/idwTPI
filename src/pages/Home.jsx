import "./Home.css"


export const Home = () => {
    
    return (
            <>
            <div className="layout">
                <section className="layout-flex">
                    <h1 className="main-title">Explora Descansa Repite</h1>
                    <h2 className="subtitle">Confort que te acompaña en cada viaje</h2>
                    <button className="button-primary">Descubre más</button>
                    <h2 className="form-title">Encuentra tu lugar ideal</h2>
                    <form className="form">
                        <label htmlFor="destination" className="visually-hidden">
                            Selecciona destino
                        </label>
                        <input id="destination" type="text" className="form-control" placeholder="Selecciona destino" aria-label="Selecciona destino" />
                        <div className="date-inputs">
                            
                            <label htmlFor="departureDate" className="visually-hidden">
                                Fecha de ida
                            </label>
                            <input id="departureDate" type="date" className="date-input" placeholder="Fecha de ida" aria-label="Fecha de ida" />
                            <label>
                                Fecha de vuelta
                            </label>
                            <input id="returnDate" type="date" className="date-input" aria-label="Fecha de vuelta" />
                        </div>
                        <div className="search-bar">
                            <div className="include-car">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                    Incluir auto
                                </label>
                            </div>
                            
                            <button className="button-secondary" type="submit">
                                Buscar
                            </button>
                        </div>
                    </form>
                </section>
                <section className="layout-grid">
                </section>
            </div>
        </>
    );
};
