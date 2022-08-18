import React from "react";
import { Pokemon } from "./API";

type Props = {
  selectedPokemon: Pokemon | null | undefined;
  pokemon: Pokemon;
  setSelectedPokemon: React.Dispatch<
    React.SetStateAction<Pokemon | null | undefined>
  >;
  power: number;
};

const PokemonRow = (props: Props) => {
  return (
    <tr onClick={() => props.setSelectedPokemon(props.pokemon)} className={``}>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.id}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.name}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.type.map((type) => `${type}, `)}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.attack}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.hp}
        </p>
      </td>

      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.defense}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.speed}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.attack}
        </p>
      </td>
      <td className="rounded-md p-0.5">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.pokemon.special_defense}
        </p>
      </td>
      <td className="rounded-md p-0.5" role="power">
        <p
          className={` ${
            props.selectedPokemon?.name === props.pokemon.name
              ? "bg-[#03f4c8] rounded-md p-2"
              : "bg-[#03a9f4] rounded-md p-2"
          } text-center`}
        >
          {props.power}
        </p>
      </td>
    </tr>
  );
};

export default PokemonRow;
