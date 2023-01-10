
export const StudentForm = () => {
    return (
        <div>
            <form action="">
                <div className="pb-3 text-center">
                    <h2>Registrar Un Estudiante</h2>
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
                </div>
            </form>
        </div>
    )
}
