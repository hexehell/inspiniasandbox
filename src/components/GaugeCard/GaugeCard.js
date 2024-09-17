import cssLoader from '../linkloader'


export default function createGaugeCard({
    id
    ,title
    ,graph
}) {

    const gaugeCard = document.createElement('div')

    gaugeCard.id = id;
    gaugeCard.classList = "GaugeCard px-md-1"

    gaugeCard.innerHTML = `

    
<div class=" w-card mt-2">
    <div id="section_sync_promotions" class="panel panel-default">
        <div class="panel-heading" style="background-color: #00bcd4 ">
            <h2 class="font-bold text-white"> <i class="fa fa-refresh tooltips" data-toggle="tooltip" title="Grupo del Indicador."></i> ${title} </h2>
        </div>
        <div class="panel-body">

            <div id="sync_promotions" style=" -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1726548378585"><div style="position: relative; width: 458px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="801" height="875" style="position: absolute; left: 0px; top: 0px; width: 458px; height: 500px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div></div>
            <div style="position:relative;">
                <div class="ibox-content" style="position: absolute; top:-100px; width: 100%">
                    <h5></h5>
                    <h1 id="total_detail_sync_promotions" data-toggle="tooltip" title="Tiendas sincronizadas." class="no-margins font-bold tooltips">14,250</h1>
                    <div id="detail_sync_promotions" data-toggle="tooltip" title="Total de Tiendas." class="stat-percent font-bold text-navy tooltips" style="font-size: 20px">14,998</div>
                    <small>Total de Sucursales</small>
                </div>
            </div>



        </div>
    </div>
</div>




    `;  



    return gaugeCard

}

/*
            <div class="helper" style=" width: 400px; top: 40px; left: 410px; z-index: 999">
                <button class="btn btn-lg btn-link" type="button" data-toggle="popover" data-html="true" data-placement="auto top" data-content="Estado del indicador: <br> - Rojo : Requiere atención inmediata. <br> - Amarillo: Requiere seguimiento. <br> - Verde : En buen camino." title="" aria-describedby="popover" style="" data-original-title="">
                    <i class="fa fa-dashboard"></i>
                </button>
            </div>
            <div class="helper" style=" width: 400px; top: 305px; left: 20px;">
                <button class="btn btn-lg btn-link" type="button" data-toggle="popover" data-placement="auto top" data-content="Muestra el nombre del indicador y el porcentaje de cumplimiento." data-original-title="" title="" aria-describedby="popover_value" style="">
                    <i class="fa fa-bookmark"></i>
                </button>
            </div>
            <div class="helper" style=" width: 400px; top: 398px; left: 415px; z-index: 999">
                <button class="btn btn-lg btn-link" type="button" data-toggle="popover" data-placement="auto top" data-content="Muestra la cantidad de tiendas sincronizadas vs. el total de tiendas." data-original-title="" title="" aria-describedby="popover_value" style="">
                    <i class="fa fa-question-circle"></i>
                </button>
            </div>
*/