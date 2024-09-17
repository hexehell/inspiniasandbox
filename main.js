import './style.css'
import GaugeCard from './src/components/GaugeCard/GaugeCard'


const main = document.createElement('div')

main.id = 'app'

main.innerHTML = `
<div class="container">

  <div class="row d-flex justify-content-center">

    ${ GaugeCard({id:"gauge1",title:"Sincronizacion"}).outerHTML}
    ${ GaugeCard({id:"gauge2",title:"Sincronizacion"}).outerHTML}
    ${ GaugeCard({id:"gauge3",title:"Sincronizacion"}).outerHTML}

  </div>

</div>


`

document.querySelector('body').appendChild(main)