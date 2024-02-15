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
let cost = 0

function Card( dish_category: dish_category ) {
    const category = dish_category.category;
    const [cost, setCost] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

    const handleChange = (event:SelectChangeEvent) => {
        setCost(event.target.value as string);
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
                        options={['Example 1', 'Example 2', '3 example']}
                        onInputChange={(event, newInputValue) => {setCompleted(newInputValue.length > 0)}}
                        renderInput={(params: any ) => <TextField {...params} label="Prato" className='dish' />}
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
                                value={cost}
                                onChange={handleChange}
                            >
                                <MenuItem value={1} >Muito barato</MenuItem>
                                <MenuItem value={2} >Barato</MenuItem>
                                <MenuItem value={3} >Neutro</MenuItem>
                                <MenuItem value={4} >Caro</MenuItem>
                                <MenuItem value={5} >Muito caro</MenuItem>
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