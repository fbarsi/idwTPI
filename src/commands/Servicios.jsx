<div className='admin-list'>
    <h2 style={{fontWeight: '500'}}>Modo administrador</h2>
    <h4 style={{color: 'red', marginBottom: '2em'}}>¡Precaución! Eliminar un item es una acción irreversible.</h4>
    {listaTiposAlojamiento.map((item, index) => (
        <div className='admin-item-list' key={item.idTipoAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
            {itemAModificar === item.idTipoAlojamiento ? (
            <>
                <input 
                className='input-admin' 
                value={descripcionAModificar} 
                onChange={(e) => setDescripcionAModificar(e.target.value)} 
                autoFocus
                />
                <div>
                <button className='btn-admin btn-accept' onClick={() => modificarTipoAlojamiento(item.idTipoAlojamiento, descripcionAModificar)}>Guardar</button>
                <button className='btn-admin mg-left' onClick={cancelarModificacion}>Cancelar</button>
                </div>
            </>
            ) : (
            <>
                <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion}</p>
                <div>
                <button className='btn-admin btn-color' onClick={() => iniciarModificacion(item.idTipoAlojamiento)}>Modificar</button>
                <button className='btn-admin btn-color mg-left' onClick={() => eliminarTipoAlojamiento(item.idTipoAlojamiento)}>Eliminar</button>
                </div>
            </>
            )}
        </div>
    ))}
    {mostrarInput ? (
    <>
        <input 
        className='input-admin' 
        value={descripcionAgregar} 
        onChange={(e) => setDescripcionAgregar(e.target.value)} 
        onKeyDown={(e) => manejarKeyDown(e, manejarSubmit)}
        style={{marginTop:'1em'}} 
        autoFocus
        />


        <button className='btn-admin btn-accept mg-left' onClick={manejarSubmit}>Aceptar</button>
        <button className='btn-admin mg-left' onClick={cancelarAgregar}>Cancelar</button>
    </>
    ) : (
        <button className='input-admin btn-color' onClick={manejarClickAgregar} style={{marginTop:'1em', padding: '1em 2em', height:'auto'}}>Agregar item</button>
    )}
</div>