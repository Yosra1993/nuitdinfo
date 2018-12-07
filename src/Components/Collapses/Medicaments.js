import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Medicaments = (props) => {
  return (
    <div style={{width:'80%',   marginLeft: '10%'}}>
    <div style={{ display:'flex'}}>
      <Card  >
        <CardImg top   style={{width:'100%', height:'400px', padding:'3% 3%'}} src="https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2018.2F09.2F25.2Fe951c6ee-0cfc-4b8f-b243-f8ec650a481f.2Ejpeg/750x375/background-color/ffffff/quality/70/medicaments-et-si-on-ne-remboursait-plus-que-les-generiques-1308494.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> <h2>Medicaments</h2>                    </CardTitle>
          <CardText>
          – Votre antalgique habituel : paracétamol (DOLIPRANE®, DAFALGAN®...). Si vous la supportez, l’aspirine peut être utile grâce à ses propriétés également anti-inflammatoires (brûlures, entorses….).
<br/>
– Des comprimés de polyvitamines (type ALVITYL® : 1 à 3 jour), si vous sentez que votre alimentation devient trop déficiente.
<br/>
– Des comprimés à sucer en cas d’irritation de la gorge (attention à l’air conditionné) type : LYSOPAINE®.

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

export default Medicaments;