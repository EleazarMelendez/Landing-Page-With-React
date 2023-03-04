import {Navbar} from "@/components/Navbar";
import {Card} from "@/components/Card";
import {Jumbotron} from "@/components/Jumbotron";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (<div>
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <br></br>
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-xs-12">
          <Card text="Aqui dice una cosa" />
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
          <Card text="Y aqui otra" />
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
          <Card text="y aqui otra vaina mas" />
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
          <Card text="y mas y mas y mas y mas" />
          </div>
        </div>
      </div>

      <div>
          <Footer />
      </div>
        
  </div>
  )
};
