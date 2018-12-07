import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Conseils = (props) => {
  return (
    <div style={{width:'80%',   marginLeft: '10%'}}>
    <div style={{ display:'flex'}}>
      <Card  >
        <CardImg top   style={{width:'100%', height:'400px', padding:'3% 3%'}} src="http://marocmama.com/wp-content/uploads/2016/01/SAFETY.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> <h2>Conseils   </h2>                </CardTitle>
          <CardText>
         <h4> QUELQUES ASTUCES À CONNAÎTRE EN CAS DE PANNE DE VOITURE DANS LE DÉSERT :</h4><br/>
Un véhicule en panne dans le désert, pourrait se faire remarquer en faisant brûler un pneu. Faire des signaux à l’aide d’un miroir en journée,  ou, démonter et utiliser les phares du véhicule la nuit pour émettre une source lumineuse en direction du ciel …
Pour se protéger de la chaleur, on peut creuser un trou dans le sable, en restant toutefois vigilant de ne pas déranger, serpent, scorpion ou autres animaux du désert, afin de pouvoir profiter de la fraîcheur du sol, tête et bras à l’extérieur protégés.
<br/>
<br/>
<h4>PETITES PRÉCAUTIONS :</h4><br/>
Vérifiez et secouez toujours vos chaussures avant de les remettre, de même qu’être prudent avant de préparer votre lit pour dormir, les insectes et divers animaux s’enfouissent dans le sable…Désensabler toujours vos pieds avant de remettre des chaussures.
          </CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
      </Card>
     
    </div>
    </div>
  );
};

export default Conseils;