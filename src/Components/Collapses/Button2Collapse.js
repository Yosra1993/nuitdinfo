import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Materiel = (props) => {
  return (
    <div style={{width:'90%',  display:'flex',  flexDirection:'column', marginLeft: '5%'}}>
    <div style={{ display:'flex'}}>
      <Card  style={{width:'45%' }} >
        <CardImg top   style={{width:'80%', height:'400px'}} src="https://www.123vacances.fr/wp-content/uploads/2017/03/Oklm-Portefeuille-passeport-Pochette-tui-de-protection-pour-Passeport-Pice-didentit-Carte-Billet-Document-0.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> <h2>POCHETTE ANTIVOL ET DOCUMENTS</h2>                    </CardTitle>
          <CardText>
          Passeport (ou carte d’identité);
Carnet de vaccinations et indications médicales;
Devises, carte de crédit;
Contrat d’assistance et d’assurance;
Papiers personnels.
          </CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{width:'45%' , marginLeft:'5%', marginTop:'5%'}} >
        <CardBody>
          <CardTitle><h2>Divers</h2> </CardTitle>
          <CardText> Couverture de survie ;
Lampe de poche ;
Ampoules de rechanges pour tous les feux et phares
Un bonnet;
Lunettes de soleil et étui.</CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
        <CardImg bottom   style={{width:'100%', height:'400px'}} src="http://www.lampe-torche.net/wp-content/uploads/2017/08/Lampe-Torche-LED-900-lumens-BYB-Lampe-de-Poche-Puissante-avec-LED-Cree-XML-T6-Chargeur-USB-Pile-26650-Porte-cls-Solaire-et-5-Modes-dclairage-Idal-pour-Camping-Randonne-Situations-durgence-0.jpg" alt="Card image cap" />
      </Card>
      </div>
      <div style={{display:'flex'}}>



      <Card style={{width:'45%' , marginLeft:'5%', marginTop:'5%'}} >
        <CardBody>
          <CardTitle><h2> POUR LES MAINS</h2> </CardTitle>
          <CardText>
          Gants légers : polaire, Stretch.
               </CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
        <CardImg bottom   style={{width:'100%', height:'400px'}} src="https://images-na.ssl-images-amazon.com/images/I/61H2zl29ddL._SS500_.jpg" alt="Card image cap" />
      </Card>
      <Card  style={{width:'45%' ,marginLeft:'5%',  marginTop:'10%'}} >
        <CardImg top   style={{width:'80%', height:'400px'}} src="https://www.tam-surplus.fr/945-home_default/lunettes-combat-ice-3ls.jpg.pagespeed.ce.qbbqUcQ3YO.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> <h2>POUR LA TÊTE  </h2>                  </CardTitle>
          <CardText>
          Un bonnet;
Lunettes de soleil et étui.
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

export default Materiel;