import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
      <div>
            <h1>Sorry, requested page was not found...</h1>
            <Link to='/'>Home</Link>
      </div>
    )
  }
  
  export default NotFoundPage