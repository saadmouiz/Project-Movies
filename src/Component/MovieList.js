import React from "react";
import { Row} from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";

const MoviesList = ({ movies,getPage,pageCount}) => {
  return (
    <Row className="mt-3">
      {movies.length>= 0 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">Aucun film trouvé...</h2>}

     
<PaginationComponent getPage={getPage} pageCount={pageCount}/>
    </Row>
  );
};

export default MoviesList;