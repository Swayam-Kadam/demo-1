import React,{useState} from 'react'

export default function About(props) {
const [myStyle,setmystyle] = useState({
    color:'black',
    backgroundColor:'white',
    border:'1px solid black'
})
const [btntext, setBtnText] = useState("enable dark mode")
const [Color,setColor] = useState('btn btn-dark my-1');

const toggleStyle = ()=>
{
 if(myStyle.color === 'black'){
    setmystyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
    })
    setBtnText('enable light mode');
    setColor('btn btn-light my-1');
 }else{
    setmystyle({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black'
    })
    setBtnText('enable dark mode');
    setColor('btn btn-dark my-1');
 }
}
  return (
    <div className='container' style={myStyle} Style={`background-color:${props.mode==='dark'?'grey':'white'}`}>
        <h1 className='mx-3'>About us</h1>
      <div className="accordion accordion-flush"  id="accordionFlushExample" style={myStyle} >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"   style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <button className={Color} onClick={toggleStyle}  >{btntext}</button>
</div>
    </div>
  )
}

//write a function base component type rfc and enter
