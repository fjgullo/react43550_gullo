import { Audio, FallingLines } from  'react-loader-spinner'

const Loader = ( { loading = false }) => {
  return (
        loading &&
        <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
        />
  )
}

export default Loader