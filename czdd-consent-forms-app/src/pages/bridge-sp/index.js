import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"


function BridgeSp() {
    return (

        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron />
                </div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/bridge" className="textlink2">English </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA PUENTES</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>El tratamiento involucra la restauración de áreas dañadas del diente, arriba y debajo de la línea de las encías con un puente.</li>
                        <li> La restauración del diente con un puente tiene dos fases:</li>
                        <ol>
                            <li>Preparación del diente, una impresión para enviar al laboratorio, una construcción y cementación temporal de un puente temporal; y luego,</li>
                            <li>Retiro del puente temporal, ajuste y cementación completado cuando la estética y función han sido verificados. </li>
                        </ol>
                        <li>Una vez que se colocó un puente temporal, es necesario volver para que se coloque el puente nuevo, tan pronto esté listo, porque el puente temporal no fue preparado para funcionar tan bien como el puente permanente. Fallar en reemplazar el puente temporal por el puente permanente, podría llevar al deterioro del diente, enfermedad de encías, infecciones, problemas para masticar y/o hasta la pérdida del diente.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>BENEFICIOS DE LOS PUENTES (No limitado a lo siguiente)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Los puentes dentales cubren literalmente los espacios creados por uno o más dientes faltantes.</li>
                        <li>Un puente se usa típicamente para fortalecer un diente dañado por el deterioro, fractura o restauraciones previas. También sirve para proteger un diente que ha tenido un tratamiento de conducto de raíz o mejorar la manera en que sus dientes encajan.  </li>
                        <li>Los puentes se usarán con el propósito de mejorar la apariencia de dientes dañados, decolorados, mal formados, desalineados o pobremente espaciados.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RIESGOS DE LOS PUENTES (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>

                        <li> Entiendo que preparar a un diente dañado podría irritar aún más el tejido nervioso (llamado pulpa) en el centro del diente, dejando a mi diente sensible al calor, frío o presión. Dicha sensibilidad en el diente podría requerir tratamiento adicional incluyendo un tratamiento de endodoncia o de conducto de raíz.</li>
                        <li>Entiendo que al mantener abierta mi boca durante el tratamiento podría dejar mi mandíbula tiesa y dolorida y podría generar dificultad para abrir mi boca ampliamente por varios días. Esto podría ser ocasionalmente una indicación de un problema más profundo. Debo notificar al personal de la oficina si se presenta este u otro problema. </li>
                        <li>Entiendo que un puente puede alterar la manera en que mis dientes encajan entre si, y hacer que mi mandíbula duela. Esto podría requerir de un ajuste en mi mordida al alterar la superficie de mordida del puente o de los dientes adyacentes. </li>
                        <li>Entiendo que el borde de un puente esta por lo general cerca de la línea de encías, la cual es un área propensa a irritar las encías, generar infecciones o deterioro. El uso adecuado del cepillo e hilo dental en el hogar, una dieta saludable y limpiezas profesionales regulares son algunas de las medidas preventivas esenciales para ayudar a controlar estos problemas. </li>
                        <li>Entiendo que podría recibir anestesia local y/u otro medicamento. En raras ocasiones, los pacientes podrían tener una reacción a la anestesia, lo cual podría requerir atención medica de emergencia o ver que reduce su habilidad para tragar. Esto aumenta la probabilidad normal de tragar objetos extraños durante el tratamiento. Raramente por motivo de la inyección, se puede presentar un daño temporal o permanente en el nervio.</li>
                    </ol>
                </div>
                </div>



            </div>

            )
}

            export default BridgeSp;