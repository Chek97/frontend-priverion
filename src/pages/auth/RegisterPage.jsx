import { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {

    const [form, setForm] = useState({
        name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    });

    const {name, last_name, email, username, password} = form;

    const onChangeValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const resp = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                body: JSON.stringify(form)
            });
            const data = await resp.json();
            localStorage.setItem('user', data.token);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <form onSubmit={handleSubmit}>
                <div className="pb-3 text-center">
                    <h2>Registrar Un Usuario</h2>
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Nombre"
                        type="text"
                        name='name'
                        onChange={(e) => onChangeValue(e)}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Apellido"
                        type="text"
                        name='last_name'
                        onChange={(e) => onChangeValue(e)}
                        value={last_name}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Correo Electronico"
                        type="email"
                        name='email'
                        onChange={(e) => onChangeValue(e)}
                        value={email}
                    />
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
                    <button className="btn btn-primary btn-block" type="submit">Registrar Usuario</button>
                    <p className="pt-4">¿Ya tienes usuario? <Link to="/">Accede</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
