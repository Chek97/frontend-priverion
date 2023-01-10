import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const {username, password} = form;

    const onChangeValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(JSON.stringify(form));
        try {
            const resp = await fetch('http://localhost:8000/api/login', { method: 'POST', body: JSON.stringify(form)});
            const data = await resp.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <form onSubmit={handleSubmit} method="POST">
                <div className="pb-3 text-center">
                    <h2>Ingresar</h2>
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Usuario"
                        type="text"
                        name='username'
                        onChange={(e) => onChangeValue(e)}
                        value={username}
                        />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Contraseña"
                        type="password"
                        name='password'
                        onChange={(e) => onChangeValue(e)}
                        value={password}
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
