import { Component } from "react";
<<<<<<< HEAD
 import ErrorMessage from "../errorMessage/ErrorMessage";
=======
 import ErrorMessage from "../errorMessage/errorMessage";
>>>>>>> 80c569597 (-ajavascript_in_work)

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    //static getDerivedStateFromError(error){ // eto kak setState no tolko robotaet s oshibkoi, on robotaet na ravne s componentDidCatch
        // on vozvrashaet obiekt kotori budet zapisan v state
        // on obnovlyaet tolko sostoyanie  oni robotaut odinakovi 
      //  return {error: true}
   // }

    componentDidCatch(error, errorInfo) {  // oni lovyat oshibki v metodax render v metodax jiznenogo cikla i v konstruktorax dochernego komponenta
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            // return <h2>Something went wrong</h2>
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;