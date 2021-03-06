import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';


const MyTextInput = ({label, ...props}) => {
    const [field, meta] =useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] =useField({...props, type: 'checkbox'})
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...props} {...field}/>
                {children}
            </label>
           
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const CustomForm = () => {

    return (
            <Formik 
                initialValues={{
                                    name: '',
                                    email:'',
                                    amount: 0,
                                    currency: '',
                                    text: '',
                                    terms: false,
                                }}
                validationSchema={Yup.object({
                                    name: Yup.string()
                                            .min(2, "At least 2 symbols")
                                            .required("Required field"),
                                    email: Yup.string()
                                            .email("Wrong email adress")
                                            .required("Required field"),
                                    amount: Yup.number()
                                            .min(5, "more than 5")
                                            .required("Required field"),
                                    currency: Yup.string()
                                            .required("Select a currency"),
                                    text: Yup.string()
                                            .min(10, "At least 10 symbols"),
                                    terms: Yup.boolean()
                                            .required('Agreement is neccessary')
                                            .oneOf([true], 'Agreement is neccessary')
                                })}
                onSubmit={values => console.log(JSON.stringify(values, null, 2))}
            >
                <Form className="form">
                    <h2>?????????????????? ??????????????????????????</h2>
                    {/* <label htmlFor="name">???????? ??????</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage className="error" name="name" component="div"/> */}
                    <MyTextInput
                        label="???????? ??????"
                        id="name"
                        name="name"
                        type="text"
                    />
                    {/* <label htmlFor="email">???????? ??????????</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className="error" name="email" component="div"/> */}
                    <MyTextInput
                        label="???????? ??????????"
                        id="email"
                        name="email"
                        type="email"
                    />

                    <label htmlFor="amount">????????????????????</label>
                    <Field
                        id="amount"
                        name="amount"
                        type="number"
                    />
                    <ErrorMessage className="error" name="amount" component="div"/>

                    <label htmlFor="currency">????????????</label>
                    <Field
                        id="currency"
                        name="currency"
                        as="select">
                            <option value="">???????????????? ????????????</option>
                            <option value="USD">USD</option>
                            <option value="UAH">UAH</option>
                            <option value="RUB">RUB</option>
                    </Field>
                    <ErrorMessage className="error" name="currency" component="div"/>

                    <label htmlFor="text">???????? ??????????????????</label>
                    <Field 
                        id="text"
                        name="text"
                        as="textarea"
                    />
                    <ErrorMessage className="error" name="text" component="div"/>

                    {/* <label className="checkbox">
                        <Field 
                            name="terms" 
                            type="checkbox"
                        />
                        ???????????????????????? ?? ?????????????????? ?????????????????????????????????????
                    </label>
                    <ErrorMessage className="error" name="terms" component="div"/> */}
                    <MyCheckBox
                        name="terms"> 
                            ???????????????????????? ?? ?????????????????? ?????????????????????????????????????
                    </MyCheckBox>
                    <button type="submit">??????????????????</button>
                </Form>
                             
            </Formik>
    ) 
}

export default CustomForm;