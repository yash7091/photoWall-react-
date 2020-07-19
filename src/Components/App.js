import { connect } from "react-redux"
import Main from './Main'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import posts from "../data/posts"

function mapStateToProps(state)
{
    return{
        posts:state.posts,
        comments:state.comments
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}
const App= connect(mapStateToProps,mapDispatchToProps)(Main)
export default App