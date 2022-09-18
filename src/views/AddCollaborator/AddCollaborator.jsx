import Banner from '../../components/Banner/Banner';
import EditCreateForm from '../../components/EditCreateForm/EditCreateForm';
import Footer from '../../components/Footer/Footer';


const AddCollaborator = () => {

  return (
    <>
      <Banner />
      <main>
        <div className="container">
          <h1 className='text-center'>Ajouter un collaborateur</h1>
          <EditCreateForm isEdit={false} />
        </div>

      </main>
      <Footer/>
    </>

  )
}

export default AddCollaborator