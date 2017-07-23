/**
 * Created by yyh on 2017/7/20.
 */
import React,{Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { hashHistory,browserHistory } from 'react-router'
//import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions/com'

import '../styles/sidebar'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

class Sidebar extends Component{
	constructor(props){
		super(props);
		console.log('sidebar...', props);
	}
	render(){
		const { dispatch, showLeftNav, changeLeftNavState} = this.props
		return (
			<aside className="sidebar-container" style={showLeftNav?{opacity:1,zIndex:99}:{opacity:0,zIndex:-1}} onClick={changeLeftNavState}>
				<div className="sidebar-overlay">
					<nav>
						<ul>
							<li onClick={()=>history.push('/')}><a href="javascript:;">首页<i className="iconfont icon-right"></i></a></li>
							<li onClick={()=>history.push('film')}><a href="javascript:;">影片<i className="iconfont icon-right"></i></a></li>
							<li onClick={()=>history.push('cinema')}><a href="javascript:;">影院<i className="iconfont icon-right"></i></a></li>
							<li onClick={()=>history.push('login')}><a href="javascript:;">我的<i className="iconfont icon-right"></i></a></li>
							<li onClick={()=>history.push('card')}><a href="javascript:;">卖座网查询<i className="iconfont icon-right"></i></a></li>
						</ul>
					</nav>
				</div>
			</aside>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		showLeftNav: state.settingState.leftNavState || false
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeLeftNavState: () => dispatch(actions.changeLeftNavStatus(false))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)