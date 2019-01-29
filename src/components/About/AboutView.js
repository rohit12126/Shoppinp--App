import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './about.css'

class AboutView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setionHeight: '500',
			count : null,
			windowHeight: window.innerHeight,
			activeDiv : '',
			activeDot:{
				first:true,
				second:false,
				third:false,
				four:false
			}
		}
		this.section1 = React.createRef();
		this.section2 = React.createRef();
		this.section3 = React.createRef();
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		let windowWidth =  window.innerWidth;
		if(windowWidth >= 800){
			document.body.style.overflow = 'hidden'
		}
		window.addEventListener('mousewheel', this.Handlemousewheel);
		// window.scrollTo(this.state.windowHeight , '0')
		let sectionHeight = this.state.windowHeight;

		// const element = ReactDOM.findDOMNode(this).parentNode.parentNode;
		// element.style.height = sectionHeight+'px'
		this.setState({
			sectionHeight: sectionHeight
		})



	}

	Handlemousewheel = (e) =>{
		let activeDot = {
			first:false,
			second:false,
			third:false,
			four:false
		}
		let windowWidth =  window.innerWidth;
		if(windowWidth >= 800){

				let sectionFirst = this.section1.current.offsetTop;
				let sectionSecond = this.section2.current.offsetTop;
				let sectionThird = this.section3.current.offsetTop;
			  

				e.preventDefault();

				let scrollDirection = '';
				let movetopSection = 0;
				let lastHeight = sectionThird + this.section3.current.clientHeight;
				if (e.deltaY > 0) {
					scrollDirection = 'up';
					console.log('*************' + scrollDirection +'*************')
				} else if (e.deltaY <= 0) {
					scrollDirection = 'down';
				} // end if
				let currentPos = document.documentElement.scrollTop;

				if (Math.ceil(currentPos) === 0){
					movetopSection = scrollDirection === 'up' ? sectionSecond : 0;
					activeDot.first = true
					currentPos = sectionFirst;
					console.log(sectionFirst)
				}
				else if (Math.ceil(currentPos) === sectionSecond){
					movetopSection = scrollDirection === 'up' ? sectionThird : 0;
					activeDot.second = true
					currentPos = sectionThird;
					console.log(sectionSecond)
				} else if (Math.ceil(currentPos) === sectionThird ){
					movetopSection = scrollDirection === 'up' ? lastHeight : sectionSecond;
					activeDot.third = true
					currentPos = lastHeight;
				} 
				else if(Math.ceil(currentPos) === Math.ceil(lastHeight) ) {
					movetopSection = scrollDirection === 'up' ? Math.ceil(lastHeight) : sectionThird;
					currentPos = Math.ceil(lastHeight);
				}
				else {
					movetopSection = scrollDirection === 'up' ? lastHeight : sectionThird;
				} 
				this.setState({activeDot});
			
			setTimeout(() => {
	      window.scrollTo({left: 0, top: movetopSection, behavior: 'smooth' });
	    }, 300);
		}
	}

	HandleClick = (i) =>{
		let activeDot = {
			first:false,
			second:false,
			third:false,
			four:false
		}
		console.log(i)
			let sectionFirst = this.section1.current.offsetTop;
			let sectionSecond = this.section2.current.offsetTop;
			let sectionThird = this.section3.current.offsetTop;

			let lastHeight = sectionThird + this.section3.current.clientHeight;

			let movetopSection = null;

			switch (i) {
				case 1:
					movetopSection = sectionFirst
					activeDot.first = true
					break
				case 2:
					movetopSection = sectionSecond
					activeDot.second = true
					break
				case 3:
					movetopSection = sectionThird
					activeDot.third = true
					break
    	}
    	this.setState({activeDot});
			setTimeout(() => {
	      window.scrollTo({left: 0, top: movetopSection, behavior: 'smooth' });
	    }, 300);
	}

	componentWillUnmount() {
		window.removeEventListener('mousewheel', this.Handlemousewheel);
		document.body.style.overflow = 'auto'
	}

	render(){
		return (

			<div className="about-us-section"  >
				<div className="dots-block">
					<ul>
						<li className={this.state.activeDot.first ? 'active' :''}>
							<span onClick={this.HandleClick.bind(this, 1)}></span>
							<span className="tooltip">First Section</span>
						</li>
						<li className={this.state.activeDot.second ? 'active' :''}>
							<span onClick={this.HandleClick.bind(this, 2)}></span>
							<span className="tooltip">Second Section</span>
						</li>
						<li className={this.state.activeDot.third ? 'active' :''}>
							<span onClick={this.HandleClick.bind(this, 3)}></span>
							<span className="tooltip">Third Section</span>
						</li>
					</ul>
				</div>
				<div className="section section-1" ref={this.section1} style={{ 'height': this.state.sectionHeight}}>
				<h1>Section First</h1>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 			</div>
				<div className={this.state.activeDiv === "active " ? "activeDiv section section-2" : "section section-2"} ref={this.section2} style={{ 'height': this.state.sectionHeight}}>
					<h1>Section Second</h1>
 				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 			</div>
				<div className="section section-3" ref={this.section3} style={{ 'height': this.state.sectionHeight}}>
					<h1>Section third</h1>
 				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 			</div> 			
			</div>
		)
	}
}
export default AboutView;