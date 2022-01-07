import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext= createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    }
    
    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    // Get initial users (testing purposes) ultimately will have a search users list, when we submit our form it'll get the users and put them in array >>> users:[]

    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`  
            },
        })

        const data=await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    }

    // Set loading
    const setLoading = () => dispatch({type:'SET_LOADING'})



    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                fetchUsers,
            }}>
            {children}
    </GithubContext.Provider>
    )
}
export default GithubContext