import { useEffect, useState } from "react";

export const ListStudents = () => {

    const [students, setStudents] = useState([]);
    const token = localStorage.getItem('user') || '';


    const handleDelete = async(id) => {
        try {
            const resp = await fetch(`http://localhost:8000/api/students/${id}`, {
                method: 'DELETE',
                headers: { "Authorization": `Bearer ${token}`}
            });
            const data = await resp.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getData = async() => {
          const resp = await fetch('http://localhost:8000/api/students', {
            method: 'GET',
            headers: { "Authorization": `Bearer ${token}`}
          });
          const data = await resp.json();
          setStudents(data.students);
        }
        getData();
      }, [students]);

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <header className="text-center">
                    <h1>LISTA DE ESTUDIANTES</h1>
                </header>
                <hr />
                <div className="text-center mb-4">
                    <button className="btn btn-success">Nuevo Estudiante</button>
                </div>
                <table className="table table-hovered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Curso</th>
                            <th colSpan={2}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, idx) => (
                            <tr key={student._id}>
                                <td>{idx + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                                <td>{student.course}</td>
                                <td>
                                    <button className="btn btn-warning btn-block">Actualizar</button>
                                    <button className="btn btn-danger btn-block" onClick={(e) => handleDelete(student._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
