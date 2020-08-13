import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from './patientReducer';



const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);

    const formSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PATIENT', id: state.patients.length + 1, name: nameRef.current.value });
        nameRef.current.value = '';
    }

    return (
        <section className="flexCenter">
            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={formSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {
                state.patients.map(pt => <li key={pt.id} >{pt.name}
                    <span onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })} style={{ cursor: 'pointer' }}>&times;</span>
                </li>)
            }
        </section>
    );
};

export default PatientManagement;