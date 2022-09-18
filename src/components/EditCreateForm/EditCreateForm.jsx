import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { addCollaborator, updateCollaborator } from '../../services/collaboratorService/collaboratorService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import style from "./EditCreateForm.module.css"

const EditCreateForm = ({ isEdit, user = {} }) => {

    //déclaration des constantes et des variables
    const navigate = useNavigate();
    let validationSchema;
    let initialValues = {};

    //la fonction pour ajouter un collaborateur
    /***
     * cette fonction prend en parametre les données du formulaire elle fait appelle au service 
     * permettant d'enregistrer un collaborateur,une fois que ce service ait enregirestré les infos reçues,returnne une reponse.
     * Je vérifie que tout s'est bien passé ,j'affiche une notification puis je redirige l'utilisateur vers 
     * la page /collaborateurs
     */
    const addCollaborateur = async (values) => {
        const response = await addCollaborator(values);
        if (response?.status === 201 || response?.status === 200) {
            setTimeout(() => {
                toast.success('👍Le collaborateur a été ajouté !', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            setTimeout(() => { navigate("/collaborateurs") }, 3000);
        }

    }
    //la fonction pour modifier un collaborateur 
    /***
     * cette fonction prend en parametre les données du formulaire elle fait appelle au service 
     * permettant de modifier un collaborateur,une fois que ce service ait enregirestré les infos,il returne une reponse
     * je vérifie que tout s'est bien passé ,j'affiche une notification puis je redirige l'utilisateur vers 
     * la page /direbonjour
     */
    const updateCollaborateur = async (values) => {
        const response = await updateCollaborator(values.id, values);
        if (response?.status === 201 || response?.status === 200) {
            setTimeout(() => {
                toast.success('👍 La mise à jour a été prise en compte !', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            setTimeout(() => { navigate("/direbonjour") }, 3000);
        }
    }
    //values initiales d'un collaborateur
    if (isEdit) {
        initialValues = user;

    } else {
        initialValues = {
            gender: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            birthdate: "",
            city: "",
            country: "",
            photo: "",
            service: "",
            password: "",
        }
        validationSchema = Yup.object({
            gender: Yup.string().required('veuillez choisir la civilité du nouveau collaborateur'),
            service: Yup.string().required('veuillez choisir le service dans lequel va travailler le nouveau collaborateur'),
            firstname: Yup.string().required('veuillez indiquer le prenom du nouveau collaborateur'),
            lastname: Yup.string().required('oups!il manque son nom :)'),
            email: Yup.string().email('cet email est invalide').required("l'email est obligatoire"),
            phone: Yup.string().required('veuillez rentrer un numero de téléphone'),
            birthdate: Yup.date().required('veuillez nouveau est invalide'),
            city: Yup.string().required('veuillez indiquez la ville du collaborateur '),
            password: Yup.string().required('veuillez saisir le mot de passe').min(8, "le mot de passe doit contenir 8 caractères au minimum"),
            country: Yup.string().required('veuillez saisir son pays dans lequel il travail'),
            photo: Yup.string()
                .matches(
                    /^https:\/\//, 'veuillez entrer un url commençant par htpps://'
                )
                .required('veuillez entrer un url commençant par htpps:// de votre photo'),

        })
    }

    // 
    return (
        <div className={`${style.form_container}`}>
            <Formik
                initialValues={initialValues}
                onSubmit={isEdit ? updateCollaborateur : addCollaborateur}
                validationSchema={validationSchema}
                enableReinitialize={true}
            >

                <Form>
                    {isEdit && <Field type="text" name="id" id="id" style={{ visibility: 'hidden' }} />}
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="gender">Civilité <span className='text-orange'>*</span></label>
                            <Field name="gender" as="select" id="gender">
                                <option disabled>civilité</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </Field>
                        </div>
                        <ErrorMessage name="gender" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>

                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="service">Service <span className="text-orange">*</span></label>
                            <Field name="service" as="select" id="service">
                                <option value="Client">Client</option>
                                <option value="Technique">Technique</option>
                                <option value="Marketing">Marketing</option>
                            </Field>
                        </div>
                        <ErrorMessage name="service" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>

                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="lastname">nom <span className="text-orange">*</span></label>
                            <Field type="text" id="lastname" name="lastname" placeholder='veuillez saisir votre nom' />
                        </div>
                        <ErrorMessage name="lastname" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="firstname">prénom <span className="text-orange">*</span></label>
                            <Field type="text" id="firstname" name="firstname" placeholder='veuillez saisir votre prénom' />
                        </div>
                        <ErrorMessage name="firstname" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="email">email <span className="text-orange">*</span></label>
                            <Field type="email" id="email" name="email" placeholder='veuillez saisir votre email' />
                        </div>
                        <ErrorMessage name="email" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="password"> mot de passe <span className="text-orange">*</span></label>
                            <Field type="password" id="password" name="password" placeholder='veuillez saisir votre mot de passe' />
                        </div>
                        <ErrorMessage name="password" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="phone">téléphone <span className="text-orange">*</span></label>
                            <Field type="text" id="phone" name="phone" placeholder='veuillez saisir votre numero de téléphone' />
                        </div>
                        <ErrorMessage name="phone" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="birthdate"> date de naissance <span className="text-orange">*</span></label>
                            <Field type="date" id="birthdate" name="birthdate" />
                        </div>
                        <ErrorMessage name="birthdate" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="city">ville <span className="text-orange">*</span></label>
                            <Field type="text" id="city" name="city" />
                        </div>
                        <ErrorMessage name="city" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="country">pays <span className="text-orange">*</span></label>
                            <Field type="text" id="country" name="country" />
                        </div>
                        <ErrorMessage name="country" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <div className={`${style.inputs_container}`}>
                            <label htmlFor="photo">Url photo <span className="text-orange">*</span></label>
                            <Field type="text" id="photo" name="photo" />
                        </div>
                        <ErrorMessage name="photo" >
                            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className={`${style.form_btn_container}`}>
                        <button type="submit" className={`${style.form_btn}`}>{isEdit ? "sauvegarder" : "ajouter"}</button>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    )
}

export default EditCreateForm