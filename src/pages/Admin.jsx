import React, { useState, useEffect } from 'react';
import Alojamiento from '../commands/Alojamiento';
import TipoAlojamiento from '../commands/TipoAlojamiento';

const Admin = () => {

  return (
    <div>
			<Alojamiento />
      <TipoAlojamiento />
    </div>
  );
}

export default Admin;