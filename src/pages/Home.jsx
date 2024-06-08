import Card from "../components/Card";
import DateInput from "../components/DateInput";
import "../css/Home.css"


const Home = () => {
    return (
        <>
            <div className="layout">
                <section className="layout-flex">
                    <h1 className="main-title">Explora Descansa Repite</h1>
                    <h3 className="subtitle">Confort que te acompaña en cada viaje</h3>
                    <button className="button-primary">Descubre más</button>
                    <h3 className="form-title">Encuentra tu lugar ideal</h3>
                    <form className="form">
                        <input type="text" className="form-control" placeholder="Selecciona destino" aria-label="Selecciona destino" />
                        <DateInput placeholderText={"Fecha de ida"} />
                        <DateInput placeholderText={"Fecha de vuelta"} />
                        <label className="checkbox-label"><input type="checkbox" className="checkbox-input" />Incluir auto</label>
                        <button className="button-secondary" type="submit" >Buscar</button>
                    </form>
                </section>
                <section className="layout-grid">
                    <img className="img-1" src="/img/26517c.webp" alt="a" />
                    <img className="img-2" src="/img/0b7f2a.webp" alt="a" />
                    <img className="img-3" src="/img/fcd0b3.webp" alt="a" />
                    <img className="img-4" src="/img/26517c.webp" alt="a" /> 
                </section>
            </div>

            <div>
                <h3 className="card-list-title">Mejores calificados del mes</h3>
                <div className="card-list">
                    <Card
                        imagen="/img/destino/lugar1.webp"
                        titulo="Estancia Las Estrellas"
                        ciudad="Concordia"
                        caracteristicas={['Aire Acondicionado', 'Estacionamiento', 'Wifi']}
                        precio="$ 27.000"
                        texto="Este es un texto descriptivo."
                    />
                    <Card
                        imagen="/img/destino/lugar2.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                    <Card
                        imagen="/img/destino/lugar3.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                    <Card
                        imagen="/img/destino/lugar4.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                </div>
            </div>

            <div>
                <h3 className="card-list-title">Ofertas exclusivas</h3>
                <div className="card-list">
                    <Card
                        imagen="/img/destino/lugar5.webp"
                        titulo="Estancia Las Estrellas"
                        ciudad="Concordia"
                        caracteristicas={['Aire Acondicionado', 'Estacionamiento', 'Wifi']}
                        precio="$ 27.000"
                        texto="Este es un texto descriptivo."
                    />
                    <Card
                        imagen="/img/destino/lugar6.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                    <Card
                        imagen="/img/destino/lugar7.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                    <Card
                        imagen="/img/destino/lugar8.webp"
                        titulo="Título de la Tarjeta 2"
                        ciudad="Concorcity"
                        caracteristicas={['Característica 1', 'Característica 2', 'Característica 3']}
                        precio="$ 299,99"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;