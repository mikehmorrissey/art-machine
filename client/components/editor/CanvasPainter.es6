let paintColors = [
  '#aa5d39',
  '#2e4372',
  '#267257',
  '#aa8439',
  '#AA3F39',
  '#29526D',
  '#AA7839',
  '#fff',
  '#eee',
  '#562A72',
  '#AAA939',
  '#aa5d39',
  '#2e4372',
  '#267257',
  '#aa8439',
  '#2C8437',
]

class CanvasPainter extends React.Component {
  render() {
    return (
      <div className='canvasPainter'>
        {paintColors.map((color, i) => {
          return (<PaintBlock {...this.props} key={color + Math.random()} color={color}/>)
        }, this)}
      </div>
    )
  }
}

this.CanvasPainter = CanvasPainter
