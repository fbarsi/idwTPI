import '../css/Contact.css'

const Contact = () => {
    return (
    <>
    <div className="contact-layout">
        <div className="contact-form">
            <h2 className="form-title">Contactanos</h2>
            <form>
                <input className='contact-input' type="text" placeholder='Nombre'/>
                <input className='contact-input' type="email" placeholder='Correo Electronico'/>
                <input className='contact-input' type="tel" placeholder='Numero de Telefono'/>
                <input className='contact-input' type="text" placeholder='Asunto'/>
                <textarea className='contact-text-area' rows="8" placeholder='Mensaje'></textarea>
                <label className='checkbox-label'><input type="checkbox" className="checkbox-input" />No soy un robot</label>
                <button className='button-form' type="submit" >Enviar</button>
            </form>
        </div>
        <div>
            <img className="img-form" src='/img/contact-img.webp'></img>
        </div>

    </div>
</>);
}

export default Contact;