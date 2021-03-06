@connectToStores
class Editor extends React.Component {
  static getStores() {
    return [EditorStore];
  }

  static getPropsFromStores() {
    return EditorStore.getState();
  }

  componentDidMount() {
    this.setupCanvas()
  }

  componentWillUnmount() {
    this.props.artBoard.teardown()
  }

  setupCanvas() {
    this.canvas = React.findDOMNode(this.refs.canvas)
    this.backCanvas = React.findDOMNode(this.refs.preview)
    this.props.artBoard.setArtBoard(this.canvas, this.backCanvas)
    if(this.props.params && this.props.params.id) {
      ArtWorkActions.setRemix(this.props.params.id)
    }
  }

  handleImage(file) {
    this.props.artBoard.handleImage(file);
    window.artBoard = this.props.artBoard
    EditorActions.changeStage('edit')
  }

  render() {
    return (
      <div className="editor">
        { this.props.original && this.props.original.user ?
          <div className="remixHeader">
            <div className="remixHeader-innerContainer">
              remixing:
              <img src={this.props.original.user.av_url}/>
              {this.props.original.user.name}
            </div>
          </div>
        : null }
        <section>
          {this.props.stage == 'new' ?
            <BackgroundPicker artBoard={this.props.artBoard}/>
          : null}
          <div ref='canvasContainer' className='editor-canvasContainer'>
            <FileDropZone
              dropHandler={this.handleImage.bind(this)}
              height='320'
              width='320'>
              <canvas width='540' height='540' ref='canvas'/>
              <canvas width='540' height='540' className='previewCanvas' ref='preview'/>
            </FileDropZone>
            {!(this.props.stage == 'new') ?
              <ActionButtons {...this.props} original={this.props.original} artBoard={this.props.artBoard}/>
            : null}
          </div>
        </section>
        <aside>
          {this.props.stage == 'new' ?
            <EditorInfo/>
          :
            <EditorTools artBoard={this.props.artBoard}/>
          }
        </aside>
      </div>
    )
  }
}

this.Editor = Editor
