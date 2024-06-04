import '../css/Contact.css'

const Contact = () => {
    return (
    <>
    <div className="conteiner-form">
        <div className="contenido-form">
            <h1 className="titulo-form">Contactanos</h1>
            <form className='for' action="">
                    <input type="text" className="input-form" placeholder='Nombre'/>
                    <input type="email" className="input-form" placeholder='Correo Electronico'/>
                    <input type="tel" className="input-form" placeholder='Numero de Telefono'/>
                    <input type="text" className="input-form" placeholder='Asunto'/>
                    <textarea className='t' rows="3" placeholder='Mensaje'></textarea>
                    <button>
                        Enviar
                    </button>
            </form>
        </div>
        <img className="img-form" src='/img/contact-img.webp'></img>
    </div>
</>);
}

export default Contact;