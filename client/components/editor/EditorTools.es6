class EditorTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTool: 'brush'
    }
  }

  toolComponents() {
    return {
      'brush': <Brush {...this.props}/>,
      'sprayPaint': <SprayCan {...this.props}/>,
      'glitchFilters': <GlitchFilters {...this.props}/>
    }
  }

  activeToolComponent() {
    return this.toolComponents()[this.state.activeTool]
  }

  isActive(tool) {
    if(this.state.activeTool === tool) {
      return 'isActive'
    } else {
      return ''
    }
  }

  // THESE SHOULD BE ROUTES
  changeToBrush() {
    if(!(this.state.activeTool === 'brush')) {
      this.props.artBoard.currentDrawTool = 'paint';
      this.setState({ activeTool: 'brush' })
    }
  }

  changeToSprayCan() {
    if(!(this.state.activeTool === 'sprayPaint')) {
      this.props.artBoard.currentDrawTool = 'sprayPaint';
      this.setState({ activeTool: 'sprayPaint' })
    }
  }

  changeToGlitchFilters() {
    if(!(this.state.activeTool === 'glitchFilters'))  {
      this.setState({ activeTool: 'glitchFilters' })
    }
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td
              className={this.isActive('brush')}
              onClick={this.changeToBrush.bind(this)}>
              <svg className="brush" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" ><g><path d="M57.939,36.68c-4.312,4.68-10.016,12.331-16.487,22.52c-12.162,19.145-19.903,36.01-17.291,37.669   c2.612,1.659,14.587-12.517,26.749-31.66c6.472-10.189,10.976-18.602,13.378-24.495L57.939,36.68z"></path><path d="M59.16,34.741c1.221-6.137,0.871-13.898,9.84-19.732c9.365-6.095,9.492-13.159,9.492-13.159s3.1,2.44,3.477,10.734   c0.488,10.7-4.797,18.727-16.16,25.943L59.16,34.741z"></path></g></svg>
            </td>
            <td
              className={this.isActive('sprayPaint')}
              onClick={this.changeToSprayCan.bind(this)}>
              <svg className='paintBrush' xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                <path d="M27.602,18.113l-0.191-0.713l-0.662,0.177c0,0-1.351-2.093-2.189-1.868l-8.144,2.182c-0.84,0.225-0.965,2.712-0.965,2.712  l-0.66,0.177l0.189,0.712L27.602,18.113z"/>

                <path d="M20.437,16.616"/>

                <rect x="19.313" y="12.242" transform="matrix(0.2582 0.9661 -0.9661 0.2582 30.1017 -7.8798)" width="1.738" height="6.837"/>

                <path d="M17.423,15.212l-0.701-2.611c0,0-0.201-0.729,0.333-0.87l3.975-1.065c0.536-0.144,0.725,0.585,0.725,0.585l0.699,2.613  L17.423,15.212z M20.768,11.745c-0.336,0.091-0.537,0.438-0.446,0.775c0.089,0.337,0.436,0.537,0.773,0.446  c0.34-0.089,0.538-0.436,0.448-0.774C21.452,11.855,21.104,11.655,20.768,11.745z"/><circle cx="20.923" cy="12.321" r="0.158"/><path d="M33.13,38.742c-0.011,2.578-0.567,4.357-1.642,4.647c-1.969,0.526-4.926-4.128-6.604-10.396  c-1.68-6.267-1.446-11.776,0.521-12.303c1.077-0.289,2.451,0.976,3.749,3.206l-1.439-5.366l-12.621,3.382l6.751,25.191l0.152,0.572  c0.25,0.929,3.276,0.921,6.76-0.013c3.486-0.933,6.111-2.443,5.863-3.368l-0.154-0.573L33.13,38.742z"/><circle cx="23.269" cy="11.692" r="0.157"/><circle cx="24.941" cy="9.781" r="0.158"/><circle cx="25.598" cy="12.226" r="0.158"/><circle cx="26.614" cy="7.87" r="0.316"/><circle cx="27.269" cy="10.316" r="0.316"/><circle cx="27.924" cy="12.758" r="0.316"/><circle cx="28.283" cy="5.948" r="0.315"/><path d="M29.244,8.312C29.289,8.48,29.189,8.654,29.02,8.7c-0.166,0.045-0.34-0.056-0.387-0.223  c-0.045-0.169,0.055-0.343,0.225-0.39C29.026,8.044,29.199,8.144,29.244,8.312z"/><circle cx="29.592" cy="10.836" r="0.316"/><circle cx="30.248" cy="13.281" r="0.317"/><circle cx="29.953" cy="4.027" r="0.474"/><path d="M31.064,6.349c0.068,0.253-0.082,0.514-0.334,0.582s-0.514-0.083-0.58-0.336c-0.068-0.25,0.082-0.513,0.336-0.581  C30.737,5.947,30.998,6.098,31.064,6.349z"/><circle cx="31.911" cy="11.338" r="0.474"/><circle cx="32.567" cy="13.784" r="0.475"/><path d="M31.722,8.795c0.066,0.253-0.083,0.513-0.335,0.581c-0.254,0.067-0.514-0.082-0.582-0.335  c-0.068-0.252,0.084-0.513,0.336-0.581C31.391,8.393,31.652,8.544,31.722,8.795z"/><circle cx="31.622" cy="2.105" r="0.474"/><circle cx="32.276" cy="4.552" r="0.474"/><circle cx="32.931" cy="6.992" r="0.474"/><circle cx="33.587" cy="9.439" r="0.474"/><circle cx="34.268" cy="11.795" r="0.474"/><circle cx="34.923" cy="14.241" r="0.474"/></svg>
            </td>
            <td
              className={this.isActive('glitchFilters')}
              onClick={this.changeToGlitchFilters.bind(this)}>

              <svg className="glitch" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                  <g>
                    <path d="M55.6,52.3v-9h1.6c1.4,0,2.5-1.1,2.5-2.5v-0.6c0-1.4-1.1-2.5-2.5-2.5H42.6c-1.4,0-2.5,1.1-2.5,2.5v0.6     c0,1.4,1.1,2.5,2.5,2.5h1.8v9.3c-7.5,2.6-12.5,9.5-12.5,17.5c0,0.5,0,0.9,0.1,1.4c-0.1,0.1-0.1,0.3-0.1,0.4     c0,0.1,0.1,0.3,0.2,0.6c1.2,9.1,9,16.1,18.4,16.1c10.2,0,18.6-8.3,18.6-18.6C69,61.8,63.5,54.6,55.6,52.3z M42.1,40.8v-0.6     c0-0.3,0.2-0.5,0.5-0.5h14.6c0.3,0,0.5,0.2,0.5,0.5v0.6c0,0.3-0.2,0.5-0.5,0.5h-2.6c-0.6,0-1,0.4-1,1V53c0,0.3,0.2,0.6,0.4,0.8     c0.1,0.1,0.3,0.2,0.4,0.3c6.1,1.5,10.7,6.4,12.1,12.3c-1.3-0.4-3.1-0.8-5.5-0.7c-3.1,0.2-5.7,2.2-8.4,4.2     c-3.3,2.5-6.7,5.1-11.4,4.6c-5.5-0.6-6.9-2.1-7.3-2.7c-0.1-0.6-0.1-1.2-0.1-1.8c0-0.4,0-0.7,0-1.1h16c0.6,0,1-0.4,1-1s-0.4-1-1-1     H34.1c0.2-1,0.5-2,0.8-2.9h14.9c0.6,0,1-0.4,1-1s-0.4-1-1-1h-14c0.6-1,1.3-2,2-2.9h12c0.6,0,1-0.4,1-1s-0.4-1-1-1h-9.9     c1.6-1.3,3.4-2.3,5.5-2.9h4.4c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3.6v-2.9h3.6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3.6v-2.9h3.6     c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3.6v-0.2c0-0.6-0.4-1-1-1h-2.8C42.3,41.3,42.1,41,42.1,40.8z M50.4,86.6c-7.5,0-13.8-5-15.8-11.8     c1.4,0.7,3.4,1.3,6.5,1.6c0.5,0,0.9,0.1,1.4,0.1c4.8,0,8.3-2.7,11.5-5.1c2.5-1.9,4.8-3.6,7.3-3.8c2.8-0.2,4.7,0.5,5.7,1     c0,0.5,0.1,0.9,0.1,1.4C67,79.2,59.5,86.6,50.4,86.6z"/>

                    <path d="M48,27.8c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1     C51.1,29.2,49.7,27.8,48,27.8z M48,32.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S48.6,32.1,48,32.1z"/>

                    <path d="M56.9,26.1c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S54.7,26.1,56.9,26.1z M56.9,20.1c1.1,0,2,0.9,2,2     s-0.9,2-2,2s-2-0.9-2-2S55.8,20.1,56.9,20.1z"/>

                    <path d="M44.7,22.7c3.3,0,5.9-2.7,5.9-5.9s-2.7-5.9-5.9-5.9s-5.9,2.7-5.9,5.9S41.5,22.7,44.7,22.7z M44.7,12.8     c2.2,0,3.9,1.8,3.9,3.9s-1.8,3.9-3.9,3.9s-3.9-1.8-3.9-3.9S42.6,12.8,44.7,12.8z"/>

                  </g>
              </svg>
            </td>
          </tr>
        </table>
        <div className='toolOptions-container'>
          {this.activeToolComponent()}
        </div>
      </div>
    )
  }
}

this.EditorTools = EditorTools

