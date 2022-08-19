import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import "./setupTests";

import PreviewPokemon from "./PreviewPokemon";
import userEvent from "@testing-library/user-event";


const Pokemon = {
    "id": 1,
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special_attack": 65,
    "special_defense": 65,
    "speed": 45
}

const props ={
    selectedPokemon: Pokemon,
    image: 'imagepath',
    power: 300,
}


describe("Preview Pokemon",()=>{
    it("Preview Bulbasaur ",()=>{
      render(<PreviewPokemon {...props}/>);
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument(); 
    });
    it("Preview Bulbasaur ",()=>{
        render(<PreviewPokemon {...props}/>);
        expect(screen.getByText(/Grass/i)).toBeInTheDocument(); 
      })
    it("Preview Bulbasaur ",()=>{
        render(<PreviewPokemon {...props}/>);
        expect(screen.getAllByText('65')[0]).toBeInTheDocument(); 
     })
    
})