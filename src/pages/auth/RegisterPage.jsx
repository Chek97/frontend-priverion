import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <form action="">
                <div className="pb-3 text-center">
                    <h2>Registrar Un Usuario</h2>
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Nombre"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Apellido"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Correo Electronico"
                        type="email"
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Usuario"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Contraseña"
                        type="password"
                    />
                </div>
                <div className="text-center pt-3">
                    <button className="btn btn-primary btn-block" type="submit">Registrar Usuario</button>
                    <p className="pt-4">¿Ya tienes usuario? <Link to="/auth/login">Accede</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
