import Banner from '../../components/Banner/Banner';
import EditCreateForm from '../../components/EditCreateForm/EditCreateForm';


const AddCollaborator = () => {

  return (
    <>
      {/* <Banner /> */}
      <div>
        <h1>Ajouter collaborateur</h1>
        <EditCreateForm isEdit={false} />
      </div>
    </>

  )
}

export default AddCollaborator