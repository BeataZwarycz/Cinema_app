import React, { Fragment, Component } from "react";
import { Formik, Field } from "formik";
import s from "./form.css";
import ReactDOM from "react-dom";
import AppHeader from "./AppHeader";
import MovieDetails from "./MovieDetails";

const initialState = {
    name: "",
    surname: "",
    email: "",
    phone: "",
};

class Form extends Component {
    render() {
        return (
            <div className='container'>
                <Fragment>
                    <Formik
                        initialValues={initialState}
                        onSubmit={(values, actions) => {
                            console.log(values);
                        }}
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit} className={s.form}>
                                <legend id="legend">Zarezerwuj bilety</legend>
                                <Field
                                    name="name"
                                    onChange={props.handleChange}
                                    value={props.values.name}
                                    type="text"
                                    placeholder="Imię"
                                    className={s.text_field}
                                />
                                <Field
                                    name="surname"
                                    onChange={props.handleChange}
                                    value={props.values.surname}
                                    type="text"
                                    placeholder="Nazwisko"
                                    className={s.text_field}
                                />
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Wprowadź adres email"
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    className={s.text_field}
                                />
                                <Field
                                    name="phone"
                                    onChange={props.handleChange}
                                    value={props.values.phone}
                                    type="phone"
                                    placeholder="Podaj numer telefonu"
                                    className={s.text_field}
                                />
                                <button
                                    type="submit"
                                    disabled={!props.dirty && !props.isSubmitting}
                                    className={`${s.button} ${s.submit_button}`}
                                >
                                    Zarezerwuj
            </button>
                            </form>
                        )}
                    </Formik>
                </Fragment>
            </div>
        );
    }

    openForm() {
        const rootElement = document.getElementById("root");
        ReactDOM.render(
            <div>
                <AppHeader />
                <Form />
            </div>,
            rootElement
        );
    }
}

export default Form;