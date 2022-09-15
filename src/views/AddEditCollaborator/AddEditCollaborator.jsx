import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { addCollaborator } from '../../services/collaboratorService/collaboratorService';

const AddEditCollaborator = () => {
  //values initiales d'un collaborateur
  const initialValues = {
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
  };
  //validation du formulaire
  const validationSchema = Yup.object({
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
        /((https?):\/\/)$/, 'veuillez entrer un url commençant par htpps://'
      )
      .required('Please enter website'),

  })
  const onSubmit = async (values) => {
    console.log("values", values);
    const response = await addCollaborator(values);
    console.log("response", response.data);

  }

  return (
    <div>
      <h1>Ajouter collaborateur</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >

        <Form>
          <div>
            <label htmlFor="gender">Civilité</label>
            <Field name="gender" as="select" id="gender">
              <option disabled>civilité</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Field>
          </div>
          <ErrorMessage name="gender" />
          <div>
            <label htmlFor="service">Service</label>
            <Field name="service" as="select" id="service">
              <option value="Client">Client</option>
              <option value="Technique">Technique</option>
              <option value="Marketing">Marketing</option>
            </Field>
          </div>
          <ErrorMessage name="service" />
          <div>
            <label htmlFor="lastname">nom</label>
            <Field type="text" id="lastname" name="lastname" placeholder='veuillez saisir votre nom' />
            <ErrorMessage name="lastname" />
          </div>
          <div>
            <label htmlFor="firstname">prénom</label>
            <Field type="text" id="firstname" name="firstname" placeholder='veuillez saisir votre prénom' />
            <ErrorMessage name="firstname" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <Field type="email" id="email" name="email" placeholder='veuillez saisir votre email' />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">mot de passe</label>
            <Field type="password" id="password" name="password" placeholder='veuillez saisir votre mot de passe' />
            <ErrorMessage name="password" />
          </div>
          <div>
            <label htmlFor="phone">téléphone</label>
            <Field type="text" id="phone" name="phone" placeholder='veuillez saisir votre numero de téléphone' />
            <ErrorMessage name="phone" />
          </div>
          <div>
            <label htmlFor="birthdate">date de naissance</label>
            <Field type="date" id="birthdate" name="birthdate" />
            <ErrorMessage name="birthdate" />
          </div>
          <div>
            <label htmlFor="city">ville</label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" />
          </div>
          <div>
            <label htmlFor="country">pays</label>
            <Field type="text" id="country" name="country" />
            <ErrorMessage name="country" />
          </div>
          <div>
            <label htmlFor="photo">Url photo</label>
            <Field type="text" id="photo" name="photo" />
            <ErrorMessage name="photo" />
          </div>
          <button type="submit">enregistrer</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddEditCollaborator