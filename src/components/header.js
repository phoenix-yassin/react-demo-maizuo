import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions/com'
import '../styles/header'

class Header extends Component {
    static defaultProps = {
        title:'卖座电影'
    }
    static propTypes = {
        title:React.PropTypes.string
    }
    constructor(props){
        super(props)
    }
    componentDidMount () {
        console.log(this.props)
    }
    render(){
        const {title, changeLeftNavState} = this.props
        return (
            <div id="header">
                <a className="go-menu" onClick={changeLeftNavState}><i className="icon iconfont icon-menu"></i></a>
                <div className="title">
                    <p>{title}</p>
                    <a className="go-city">广州<i className="icon iconfont icon-bottom"></i></a>
                </div>
                <a className="go-mine"><i className="icon iconfont icon-people"></i></a>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        title:state.settingState.title
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeLeftNavState: () => dispatch(actions.changeLeftNavStatus(true))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;