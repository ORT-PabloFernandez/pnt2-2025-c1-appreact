import Beer from "./Beer";


function BeerList(props) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {props.beers.map((beer, index) => (
        <Beer
          key={index}
          name={beer.name}
          abv={beer.abv}
          label={beer.label}
          type={beer.type}
          onComprar={props.onComprar}
        />
      ))}
    </div>
  );
}

export default BeerList;
