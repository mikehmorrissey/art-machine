class InfiniteScrollContainer extends React.Component {
  componentDidMount() {
    this.boundFunction = this.onScroll.bind(this)
    window.addEventListener('scroll', this.boundFunction)
  }
  onScroll(e) {
    let docHeight = this.getHeight()
    let distance = docHeight - (window.innerHeight + window.scrollY)
    if (distance < 150) {
      this.props.onScrollBottom()
    }
  }

  getHeight() {
    let body = document.body,
        html = document.documentElement;

    return Math.max( body.scrollHeight, body.offsetHeight,
                     html.clientHeight, html.scrollHeight, html.offsetHeight )
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

this.InfiniteScrollContainer = InfiniteScrollContainer