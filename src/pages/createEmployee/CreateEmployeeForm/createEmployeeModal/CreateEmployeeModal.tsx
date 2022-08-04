import { Link } from 'react-router-dom'

import Modal from '../../../../components/modal/Modal'
import ROUTES from '../../../../constants/routes'
import useAppSelector from '../../../../hooks/useAppSelector/useAppSelector'
import { selectStatus } from '../../../../utils/selectors'

function CreateEmployeeModal() {
  const { isLoading, isError, message } = useAppSelector(selectStatus)

  if (isLoading) {
    return (
      <Modal title='Please wait'>
        <p className='loading'>{message}</p>
      </Modal>
    )
  }
  if (isError) {
    return (
      <Modal title='Something went wrong'>
        <p className='error'>{message}</p>
      </Modal>
    )
  }
  if (message) {
    return (
      <Modal title={message}>
        <p className='success'>
          {message}. <br />
          You can view the employees <Link to={ROUTES.EMPLOYEES_LIST}>here</Link>.
        </p>
      </Modal>
    )
  }
  return null
}

export default CreateEmployeeModal
