import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <form action="">
                <div className="pb-3 text-center">
                    <h2>Ingresar</h2>
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
                    <button className="btn btn-primary btn-block" type="submit">Iniciar Sesion</button>
                    <p className="pt-4">¿No tienes un usuario? <Link to="/auth/register">Crea uno ahora</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
