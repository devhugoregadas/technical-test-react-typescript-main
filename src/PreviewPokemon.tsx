import { Pokemon } from "./API";

interface IProps {
  selectedPokemon: Pokemon;
  image: string;
  power: number;
}

const PreviewPokemon = (props: IProps) => {
  return (
    <div className="min-w-[300px]">
      {props.selectedPokemon && (
        <div className="flex flex-col gap-4">
          <img
            src={props.image}
            alt="Pokemon"
            className="w-[300px] h-[300px]"
          />
          <div className="w-fit mx-auto">
            <p>
              <strong>Name:</strong> {props.selectedPokemon.name}
            </p>
            <p>
              <strong>Type:</strong>{" "}
              {props.selectedPokemon.type.map((type) => `${type}, `)}
            </p>
            <p>
              <strong>HP:</strong> {props.selectedPokemon.hp}
            </p>
            <p>
              <strong>Attack:</strong> {props.selectedPokemon.attack}
            </p>
            <p>
              <strong>Defense:</strong> {props.selectedPokemon.defense}
            </p>
            <p>
              <strong>Special Attack:</strong>{" "}
              {props.selectedPokemon.special_attack}
            </p>
            <p>
              <strong>Special Defense:</strong>{" "}
              {props.selectedPokemon.special_defense}
            </p>
            <p>
              <strong>Speed:</strong> {props.selectedPokemon.speed}
            </p>
            <p>
              <strong>Power:</strong> {props.power}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewPokemon;
