'use client'
// Components
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Autocomplete, {AutocompleteChangeDetails} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './.css'

let menu_template = [
    [ // The numbers are the columns
        {"name": "Arroz branco", "category": "Arroz branco"},
        {"name": "Arroz integral", "category": "Arroz integral"},
        {"name": "Feijão", "category": "Feijão"}
    ],
    [
        {"name": "Carne bovina", "category": "Carne bovina"},
        {"name": "Frango", "category": "Frango"},
        {"name": "Peixe", "category": "Peixe"},
        {"name": "Proteína vegetal", "category": "Proteína vegetal"}
    ],
    [
        {"name": "Guarnição 1", "category": "Guarnição"},
        {"name": "Guarnição 2", "category": "Guarnição"},
        {"name": "Guarnição 3", "category": "Guarnição"},
        {"name": "Guarnição 4", "category": "Guarnição"}
    ]
];

type dish_category = { name: string; category: string;};

function load_template(template: dish_category[][]) {
    return (
        template.map((col: dish_category[]) => {
            return (
                <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                    {col.map((dish_category: dish_category) => {
                        return (
                            <div style={{ marginTop: "20px" }}>
                                {Card(dish_category)}
                            </div>
                        )
                    })}
                </div>
            )
        }
        )
    )
};

export default function App() {
    return (
        <div className="white-board" style={{ margin:30, padding:10, paddingBottom:30, backgroundColor:'white', boxShadow: "-10px 10px 5px -5px lightgray" }}>
            <div className="white-board-menu" >
                <div className='white-board-name'>Cardápio do dia 05 de Agosto de 2023</div>
                <div className='white-board-actions'>
                    <Button className="white-board-save" variant="contained">Salvar e imprimir</Button>
                </div>
            </div>
            <div className='white-board-body' >
                {load_template(menu_template)}
            </div>
        </div>
    );
}

function Card( dish_category: dish_category ) {
    const category = dish_category.category;
    const [cost, setCost] = React.useState<number | null>(null);
    const [completed, setCompleted] = React.useState(false);
    
    type Dish = {[key: string]: {cost: number; observation: string}};

    let dish_options:Dish = {
        "Arroz branco": {"cost": 0, "observation": ""},
        "Sem alho": {"cost": 1, "observation": ""},
        "Com salsinha e couve-flor": {"cost": 2, "observation": "Couve-flor picadinha"}
    };

    const handleCostChange = (value:number) => {
        setCost(value);
        console.log(typeof(value))
    };

    const handleDishChange = (event: any, newInputValue: string) => {
        setCompleted(newInputValue.length > 0);
        if (Object.keys(dish_options).includes(newInputValue)) {
            setCost(dish_options[newInputValue]["cost"])
        }
    };


    return (
            <Accordion className='card' >
                 <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='card-menu'
                    style ={{ backgroundColor: completed ? "#c5dec1" : "#f2e8C1" }}
                 >
                    {dish_category.name}
                 </AccordionSummary>
                 <AccordionDetails className='form' sx={{ p: 2 }}>
                    <Autocomplete
                        disablePortal
                        id=''
                        className='dish'
                        size='small'
                        options={Object.keys(dish_options)}
                        onInputChange={handleDishChange}
                        renderInput={(params: any ) => <TextField {...params} value={1} label="Prato" className='dish' />}
                    />
                    <div className='obs-and-cost' >
                        <TextField className='obs' label="Observação" size='small' multiline={true} rows={5} ></TextField>
                        <FormControl className='cost' fullWidth >
                            <InputLabel id="demo-simple-select-helper-label" size='small' >Custo</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Custo"
                                size='small'
                                value={String(cost)}
                                onChange={(event: SelectChangeEvent) => handleCostChange(Number(event.target.value))}
                            >
                                <MenuItem value={0} >Muito barato</MenuItem>
                                <MenuItem value={1} >Barato</MenuItem>
                                <MenuItem value={2} >Neutro</MenuItem>
                                <MenuItem value={3} >Caro</MenuItem>
                                <MenuItem value={4} >Muito caro</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
    )
};


function SerializeCards() {
    return
};